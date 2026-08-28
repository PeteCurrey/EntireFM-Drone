'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Download, 
  Users, 
  FileText, 
  PieChart, 
  TrendingUp, 
  Filter, 
  Search, 
  ExternalLink,
  ChevronRight,
  Target,
  Activity,
  LayoutDashboard,
  Clock,
  ArrowUpRight,
  Mail,
  Zap,
  ShieldCheck
} from 'lucide-react'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import { leadMagnets } from '@/lib/lead-magnets-config'

// --- Mock Data ---

const MOCK_LM_LEADS = [
  {
    id: 'LM-001',
    name: 'Robert Miller',
    company: 'Prime FM',
    email: 'robert@primefm.com',
    asset: 'Drone Roof Inspection Checklist',
    sector: 'Facilities Management',
    projectType: 'Roof / building inspection',
    bundle: 'Roof Intelligence Pack',
    status: 'Nurture active',
    date: '2026-05-04',
    score: 65
  },
  {
    id: 'LM-002',
    name: 'Alice Wong',
    company: 'Vista Construction',
    email: 'a.wong@vistacon.co.uk',
    asset: 'Construction Progress Monitoring Template',
    sector: 'Contractor / Construction',
    projectType: 'Construction progress monitoring',
    bundle: 'Construction Progress Pack',
    status: 'Brief submitted',
    date: '2026-05-04',
    score: 82
  },
  {
    id: 'LM-003',
    name: 'Simon Clarke',
    company: 'Heritage Estates',
    email: 'simon@heritageestates.org',
    asset: 'Facilities Manager’s Drone Survey Guide',
    sector: 'Facilities Management',
    projectType: 'Facilities management inspections',
    bundle: 'Roof Intelligence Pack',
    status: 'New',
    date: '2026-05-03',
    score: 48
  },
  {
    id: 'LM-004',
    name: 'Fiona Grant',
    company: 'SafeGuard Insurance',
    email: 'fiona.grant@safeguard.com',
    asset: 'Insurance Evidence Drone Capture Checklist',
    sector: 'Insurer / Loss Adjuster',
    projectType: 'Insurance or incident evidence',
    bundle: 'Insurance & Incident Evidence Pack',
    status: 'Nurture active',
    date: '2026-05-03',
    score: 74
  },
  {
    id: 'LM-005',
    name: 'Marcus Bell',
    company: 'Urban Vision 3D',
    email: 'm.bell@urbanvision.co.uk',
    asset: 'TFTS 3D vs Photogrammetry Guide',
    sector: 'Developer / Property Owner',
    projectType: 'TFTS 3D / 3D capture',
    bundle: 'Immersive Digital Capture Pack',
    status: 'Contacted',
    date: '2026-05-02',
    score: 59
  }
];

export default function AdminLeadMagnetsPage() {
  const [activeTab, setActiveTab] = useState('all')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'text-accent'
      case 'Brief submitted': return 'text-green-400'
      case 'Nurture active': return 'text-blue-400'
      case 'Contacted': return 'text-orange-400'
      default: return 'text-white/30'
    }
  }

  return (
    <main className="min-h-screen bg-dark text-white pt-32 pb-20 px-8 md:px-20">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 pb-12 border-b border-white/5">
           <div>
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-accent" />
                <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">TFTS Drone Command Centre</span>
             </div>
             <h1 className="font-display text-5xl md:text-6xl text-white uppercase tracking-tighter leading-none">
                Lead <span className="text-accent">Magnets</span>
             </h1>
           </div>
           <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 font-ui text-[10px] tracking-widest uppercase hover:bg-white/10 transition-colors text-white/40">
                 <Download className="w-3 h-3" /> Export CSV
              </button>
              <div className="px-6 py-3 bg-accent/10 border border-accent/20 font-ui text-[10px] tracking-widest uppercase text-accent">
                 Email Automation: Pending
              </div>
           </div>
        </header>

        {/* Top Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 border border-white/10 mb-16">
           {[
             { label: 'Total Downloads', val: '542', icon: Download, trend: '+18%' },
             { label: 'Lead Magnet Leads', val: '218', icon: Users, trend: '+12%', color: 'text-accent' },
             { label: 'Brief Conversion', val: '14%', icon: TrendingUp, trend: '+3%' },
             { label: 'Active Nurtures', val: '86', icon: Zap, trend: '+15%', color: 'text-blue-400' }
           ].map((stat, i) => (
             <div key={i} className="bg-mid p-10">
                <div className="flex justify-between items-start mb-6">
                   <div className="p-3 bg-white/5 rounded-sm">
                      <stat.icon className={`w-5 h-5 ${stat.color || 'text-white/40'}`} />
                   </div>
                   <span className="font-ui text-[9px] text-green-400 tracking-widest uppercase">{stat.trend}</span>
                </div>
                <div className="font-display text-4xl text-white mb-2">{stat.val}</div>
                <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/30">{stat.label}</div>
             </div>
           ))}
        </div>

        {/* Asset Library Management Table */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display text-2xl text-white uppercase tracking-widest">Asset Library</h3>
            <span className="font-ui text-[9px] tracking-widest uppercase text-white/20 border border-white/10 px-3 py-1">7 Assets · PDF Export Pending</span>
          </div>

          <div className="bg-mid border border-white/5 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="p-5 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30">Asset Title</th>
                  <th className="p-5 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30">Type</th>
                  <th className="p-5 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30">Target Sector</th>
                  <th className="p-5 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30">Version</th>
                  <th className="p-5 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30 text-center">PDF</th>
                  <th className="p-5 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30 text-center">Downloads</th>
                  <th className="p-5 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30 text-center">Leads</th>
                  <th className="p-5 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30 text-center">Conversions</th>
                  <th className="p-5 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30">Admin Status</th>
                  <th className="p-5 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {leadMagnets.map((asset) => {
                  const statusColors: Record<string, string> = {
                    draft: 'text-white/20',
                    preview_available: 'text-blue-400',
                    pdf_ready: 'text-green-400',
                    live: 'text-accent',
                    needs_update: 'text-orange-400',
                    archived: 'text-white/10',
                  }
                  return (
                    <tr key={asset.id} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="p-5">
                        <div className="font-display text-sm text-white uppercase tracking-widest group-hover:text-accent transition-colors max-w-[220px]">
                          {asset.title}
                        </div>
                        <div className="font-ui text-[9px] text-white/20 uppercase tracking-widest mt-1">{asset.slug}</div>
                      </td>
                      <td className="p-5">
                        <span className="font-ui text-[9px] tracking-widest uppercase text-white/40 border border-white/10 px-2 py-1">{asset.type}</span>
                      </td>
                      <td className="p-5 font-ui text-[9px] tracking-widest uppercase text-white/40">{asset.targetSector}</td>
                      <td className="p-5 font-ui text-[9px] tracking-widest uppercase text-white/40">{asset.version}</td>
                      <td className="p-5 text-center">
                        <span className={`font-ui text-[9px] tracking-widest uppercase ${asset.pdfStatus === 'ready' ? 'text-green-400' : 'text-white/20'}`}>
                          {asset.pdfStatus === 'ready' ? '✓ Ready' : 'Pending'}
                        </span>
                      </td>
                      <td className="p-5 text-center font-display text-lg text-white">{asset.downloadCount ?? '—'}</td>
                      <td className="p-5 text-center font-display text-lg text-white">{asset.leadCount ?? '—'}</td>
                      <td className="p-5 text-center font-display text-lg text-white">{asset.briefConversions ?? '—'}</td>
                      <td className="p-5">
                        <span className={`font-ui text-[9px] tracking-widest uppercase ${statusColors[asset.adminStatus] || 'text-white/20'}`}>
                          {asset.adminStatus.replace(/_/g, ' ')}
                        </span>
                      </td>
                      <td className="p-5">
                        <Link
                          href={`/resources/downloads/${asset.slug}`}
                          className="font-ui text-[9px] tracking-widest uppercase text-accent/40 hover:text-accent transition-colors flex items-center gap-1"
                          target="_blank"
                        >
                          View <ExternalLink className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* PDF Export Note */}
          <div className="mt-4 flex items-center gap-3 p-4 bg-accent/[0.03] border border-accent/10">
            <Clock className="w-4 h-4 text-accent/30 shrink-0" />
            <p className="font-ui text-[9px] tracking-widest uppercase text-white/20">
              TODO: PDF export pending — implement PDF generation from <code className="text-accent/40">lib/asset-content.ts</code> data for all 7 assets and set <code className="text-accent/40">pdfStatus: &apos;ready&apos;</code> + <code className="text-accent/40">pdfUrl</code> in <code className="text-accent/40">lib/lead-magnets-config.ts</code>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
           {/* Asset Performance */}

           <div className="lg:col-span-2 bg-mid border border-white/5 p-12">
              <h3 className="font-display text-xl text-white uppercase tracking-widest mb-10 border-b border-white/5 pb-6">Asset Performance</h3>
              <div className="space-y-8">
                 {leadMagnets.map(asset => (
                    <div key={asset.id} className="group">
                       <div className="flex justify-between items-end mb-3">
                          <div>
                             <span className="font-ui text-[9px] tracking-widest uppercase text-accent/40 mb-1 block">{asset.type}</span>
                             <h4 className="font-display text-lg text-white uppercase tracking-widest group-hover:text-accent transition-colors">{asset.title}</h4>
                          </div>
                          <div className="text-right">
                             <span className="font-display text-xl text-white">42</span>
                             <span className="font-ui text-[9px] tracking-widest uppercase text-white/20 block">Downloads</span>
                          </div>
                       </div>
                       <div className="h-1 bg-white/5 w-full relative overflow-hidden">
                          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 0.4 }} className="absolute inset-0 bg-accent origin-left" />
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Sector Distribution */}
           <div className="bg-mid border border-white/5 p-12">
              <h3 className="font-display text-xl text-white uppercase tracking-widest mb-10 border-b border-white/5 pb-6">Leads by Sector</h3>
              <div className="space-y-6">
                 {[
                   { name: 'Facilities Management', count: 48, color: 'bg-accent' },
                   { name: 'Construction', count: 35, color: 'bg-blue-400' },
                   { name: 'Commercial Property', count: 28, color: 'bg-purple-400' },
                   { name: 'Insurance', count: 22, color: 'bg-orange-400' },
                   { name: 'Surveyors', count: 18, color: 'bg-green-400' }
                 ].map(sector => (
                   <div key={sector.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                         <div className={`w-2 h-2 rounded-full ${sector.color}`} />
                         <span className="font-ui text-[10px] tracking-widest uppercase text-white/60">{sector.name}</span>
                      </div>
                      <span className="font-display text-lg text-white">{sector.count}</span>
                   </div>
                 ))}
              </div>
              <div className="mt-12 pt-8 border-t border-white/5">
                 <div className="flex items-center justify-between font-ui text-[9px] tracking-[0.2em] uppercase text-white/30">
                    <span>Most Requested:</span>
                    <span className="text-accent">FM / Property Inspection</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Lead Table */}
        <div className="flex items-center justify-between mb-8">
           <h3 className="font-display text-2xl text-white uppercase tracking-widest">Recent Lead Magnet Leads</h3>
           <div className="flex gap-4">
              <div className="relative">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                 <input 
                   type="text" 
                   placeholder="SEARCH ASSET LEADS..." 
                   className="bg-white/5 border border-white/10 pl-12 pr-4 py-3 font-ui text-[10px] tracking-widest text-white uppercase focus:outline-none focus:border-accent/50"
                 />
              </div>
              <button className="p-3 bg-white/5 border border-white/10 text-white/40"><Filter className="w-4 h-4" /></button>
           </div>
        </div>

        <div className="bg-mid border border-white/5 overflow-x-auto">
           <table className="w-full border-collapse text-left">
              <thead>
                 <tr className="border-b border-white/10 bg-white/[0.02]">
                    <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30">Lead Info</th>
                    <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30">Asset / Resource</th>
                    <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30">Sector / Project</th>
                    <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30">Recommended Bundle</th>
                    <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30 text-center">Score</th>
                    <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30 text-center">Nurture Status</th>
                    <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30">Date</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                 {MOCK_LM_LEADS.map((lead) => (
                   <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="p-6">
                         <div className="font-display text-lg text-white uppercase tracking-widest mb-1">{lead.name}</div>
                         <div className="font-ui text-[9px] text-white/30 uppercase tracking-widest">{lead.company}</div>
                      </td>
                      <td className="p-6">
                         <div className="font-ui text-[10px] text-accent/80 uppercase tracking-widest mb-1">{lead.asset}</div>
                         <div className="font-ui text-[9px] text-white/20 uppercase tracking-widest">{lead.id}</div>
                      </td>
                      <td className="p-6">
                         <div className="font-ui text-[10px] text-white/60 uppercase tracking-widest mb-1">{lead.sector}</div>
                         <div className="font-ui text-[9px] text-white/30 uppercase tracking-widest">{lead.projectType}</div>
                      </td>
                      <td className="p-6">
                         <div className="font-ui text-[10px] text-white/60 uppercase tracking-widest">{lead.bundle}</div>
                      </td>
                      <td className="p-6 text-center font-display text-2xl text-white">
                         {lead.score}
                      </td>
                      <td className="p-6 text-center">
                         <span className={`font-ui text-[10px] tracking-widest uppercase ${getStatusColor(lead.status)}`}>
                            {lead.status}
                         </span>
                      </td>
                      <td className="p-6 font-ui text-[10px] tracking-widest text-white/30 uppercase">
                         {lead.date}
                      </td>
                   </tr>
                 ))}
              </tbody>
           </table>
        </div>

        {/* Email Sequences Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
           {[
             { name: 'FM Roof Inspection Nurture', triggers: 'FM sector / Roof inspection', icon: ShieldCheck, status: 'Active' },
             { name: 'Construction Monitoring Nurture', triggers: 'Construction / Progress', icon: Activity, status: 'Active' },
             { name: 'Property Media Nurture', triggers: 'Property / 3D / Media', icon: Zap, status: 'Active' }
           ].map((seq, i) => (
             <div key={i} className="p-8 bg-white/[0.02] border border-white/5 hover:border-accent/30 transition-all group">
                <div className="flex justify-between items-start mb-6">
                   <div className="p-3 bg-accent/5 text-accent border border-accent/10">
                      <seq.icon className="w-5 h-5" />
                   </div>
                   <span className="font-ui text-[8px] tracking-[0.3em] uppercase px-2 py-1 bg-green-500/10 text-green-400 border border-green-500/20">{seq.status}</span>
                </div>
                <h4 className="font-display text-xl text-white uppercase tracking-widest mb-2">{seq.name}</h4>
                <p className="font-ui text-[9px] tracking-widest uppercase text-white/30 mb-8">Triggers: {seq.triggers}</p>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                   <div className="flex items-center gap-4">
                      <div className="text-center">
                         <div className="font-display text-lg text-white">42</div>
                         <div className="font-ui text-[8px] tracking-widest uppercase text-white/20">Open Rate</div>
                      </div>
                      <div className="text-center">
                         <div className="font-display text-lg text-white">12</div>
                         <div className="font-ui text-[8px] tracking-widest uppercase text-white/20">CTR</div>
                      </div>
                   </div>
                   <button className="p-2 text-white/20 hover:text-accent transition-colors"><ChevronRight className="w-4 h-4" /></button>
                </div>
             </div>
           ))}
        </div>

      </div>
    </main>
  )
}
