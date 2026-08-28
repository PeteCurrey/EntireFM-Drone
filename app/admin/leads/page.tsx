'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Flame, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Search, 
  Filter, 
  Download, 
  ArrowRight,
  Target,
  Activity,
  BarChart3,
  ExternalLink,
  ChevronRight,
  MoreVertical,
  Loader2
} from 'lucide-react'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'

export default function AdminLeadsPage() {
  const [activeTab, setActiveTab] = useState('all')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [leads, setLeads] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function fetchLeads() {
      setLoading(true)
      try {
        const response = await fetch(`/api/admin/leads?status=${activeTab}&search=${searchTerm}`)
        const data = await response.json()
        if (Array.isArray(data)) {
          setLeads(data)
        }
      } catch (err) {
        console.error('Failed to fetch leads:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchLeads()
  }, [activeTab, searchTerm])

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'Hot': return 'text-orange-500 bg-orange-500/10 border-orange-500/20'
      case 'Qualified': return 'text-accent bg-accent/10 border-accent/20'
      case 'Nurture': return 'text-blue-400 bg-blue-400/10 border-blue-400/20'
      default: return 'text-white/30 bg-white/5 border-white/10'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'new': return 'text-accent'
      case 'won': return 'text-green-400'
      case 'lost': return 'text-red-400'
      default: return 'text-white/50'
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
                <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">EntireFM Drone Command Centre</span>
             </div>
             <h1 className="font-display text-5xl md:text-6xl text-white uppercase tracking-tighter leading-none">
                Lead <span className="text-accent">Qualification</span>
             </h1>
           </div>
           <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 font-ui text-[10px] tracking-widest uppercase hover:bg-white/10 transition-colors">
                 <Download className="w-3 h-3" /> Export CSV
              </button>
              <Link href="/brief" className="flex items-center gap-2 px-6 py-3 bg-accent text-dark font-ui text-[10px] tracking-widest uppercase hover:bg-white transition-colors">
                 Manual Entry +
              </Link>
           </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 border border-white/10 mb-16">
           {[
             { label: 'Total Leads', val: '148', icon: Users, trend: '+12%' },
             { label: 'Hot Leads', val: '24', icon: Flame, trend: '+8%', color: 'text-orange-500' },
             { label: 'Qualified', val: '86', icon: CheckCircle2, trend: '+5%', color: 'text-accent' },
             { label: 'Avg Lead Score', val: '64', icon: BarChart3, trend: '+3%' }
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

        {/* Filters & Tabs */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8">
           <div className="flex gap-4 border-b border-white/5 w-full lg:w-auto">
              {['all', 'hot', 'qualified', 'nurture'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 font-ui text-[10px] tracking-[0.3em] uppercase transition-all relative ${activeTab === tab ? 'text-accent' : 'text-white/30 hover:text-white'}`}
                >
                  {tab}
                  {activeTab === tab && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
                </button>
              ))}
           </div>
           <div className="flex items-center gap-4 w-full lg:w-auto">
               <div className="relative flex-1 lg:w-80">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                  <input 
                    type="text" 
                    placeholder="SEARCH LEADS..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 pl-12 pr-4 py-3 font-ui text-[10px] tracking-widest text-white uppercase focus:outline-none focus:border-accent/50 transition-colors"
                  />
               </div>
              <button className="p-3 bg-white/5 border border-white/10 text-white/40 hover:text-white transition-colors">
                 <Filter className="w-4 h-4" />
              </button>
           </div>
        </div>

        {/* Lead Table */}
        <div className="bg-mid border border-white/5 overflow-x-auto">
           <table className="w-full border-collapse text-left">
              <thead>
                 <tr className="border-b border-white/10 bg-white/[0.02]">
                    <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30">Lead ID</th>
                    <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30">Contact / Company</th>
                    <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30">Service / Bundle</th>
                    <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30">Location / Sector</th>
                    <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30 text-center">Score</th>
                    <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30 text-center">Quality</th>
                    <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30 text-center">Status</th>
                    <th className="p-6 font-ui text-[9px] tracking-[0.3em] uppercase text-white/30">Date</th>
                    <th className="p-6"></th>
                 </tr>
              </thead>
               <tbody className="divide-y divide-white/5">
                  {loading ? (
                    <tr>
                      <td colSpan={9} className="p-20 text-center">
                        <Loader2 className="w-8 h-8 text-accent animate-spin mx-auto mb-4" />
                        <span className="font-ui text-[10px] tracking-widest uppercase text-white/20">Establishing Uplink...</span>
                      </td>
                    </tr>
                  ) : leads.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="p-20 text-center">
                        <span className="font-ui text-[10px] tracking-widest uppercase text-white/20">No signals detected.</span>
                      </td>
                    </tr>
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  ) : (leads as any[]).map((lead) => (
                    <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors group">
                       <td className="p-6 font-ui text-[10px] tracking-widest text-white/40">{lead.id.substring(0, 8)}</td>
                       <td className="p-6">
                          <div className="font-display text-lg text-white uppercase tracking-widest mb-1">{lead.full_name}</div>
                          <div className="font-ui text-[9px] text-white/30 uppercase tracking-widest">{lead.metadata?.company || 'N/A'}</div>
                       </td>
                       <td className="p-6">
                          <div className="font-ui text-[10px] text-white/60 uppercase tracking-widest mb-1">{lead.metadata?.serviceInterest || lead.lead_type}</div>
                          <div className="font-ui text-[9px] text-accent/50 uppercase tracking-widest">{lead.metadata?.packageInterest || 'Direct Enquiry'}</div>
                       </td>
                       <td className="p-6">
                          <div className="font-ui text-[10px] text-white/60 uppercase tracking-widest mb-1">{lead.metadata?.location || 'Unknown'}</div>
                          <div className="font-ui text-[9px] text-white/30 uppercase tracking-widest">{lead.metadata?.sector || 'N/A'}</div>
                       </td>
                       <td className="p-6 text-center">
                          <div className="font-display text-2xl text-white">{lead.metadata?.score || '--'}</div>
                       </td>
                       <td className="p-6 text-center">
                          <span className={`inline-block px-4 py-1 border font-ui text-[9px] tracking-[0.2em] uppercase rounded-full ${getQualityColor(lead.metadata?.quality || 'Qualified')}`}>
                             {lead.metadata?.quality || 'Qualified'}
                          </span>
                       </td>
                       <td className="p-6 text-center">
                          <div className={`font-ui text-[10px] tracking-widest uppercase ${getStatusColor(lead.status)}`}>
                             {lead.status}
                          </div>
                       </td>
                       <td className="p-6 font-ui text-[10px] tracking-widest text-white/30 uppercase">
                          {new Date(lead.created_at).toLocaleDateString()}
                       </td>
                       <td className="p-6 text-right">
                          <Link href={`/admin/leads/${lead.id}`} className="p-2 text-white/20 hover:text-accent transition-colors inline-block">
                             <ChevronRight className="w-5 h-5" />
                          </Link>
                       </td>
                    </tr>
                  ))}
               </tbody>
           </table>
        </div>

        {/* Footer Metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <div className="bg-white/[0.02] border border-white/5 p-12">
              <h3 className="font-display text-xl text-white uppercase tracking-widest mb-8">Highest Converting Service</h3>
              <div className="space-y-6">
                 {[
                   { name: 'Roof Inspections', rate: '68%', count: '42' },
                   { name: 'Construction Monitoring', rate: '54%', count: '31' },
                   { name: 'Surveying & Mapping', rate: '42%', count: '18' }
                 ].map(s => (
                   <div key={s.name} className="flex items-end justify-between">
                      <div>
                         <div className="font-ui text-[10px] tracking-widest uppercase text-white/60 mb-2">{s.name}</div>
                         <div className="h-1 bg-white/5 w-48 overflow-hidden">
                            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: parseInt(s.rate)/100 }} className="h-full bg-accent origin-left" />
                         </div>
                      </div>
                      <div className="text-right">
                         <div className="font-display text-xl text-white">{s.rate}</div>
                         <div className="font-ui text-[8px] text-white/20 tracking-widest uppercase">{s.count} Leads</div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-white/[0.02] border border-white/5 p-12">
              <h3 className="font-display text-xl text-white uppercase tracking-widest mb-8">Leads From Tools</h3>
              <div className="space-y-6">
                 {[
                   { name: 'Project Brief Assistant', count: '56', conversion: '12%' },
                   { name: 'Output Selector', count: '42', conversion: '18%' },
                   { name: 'Pricing Engine', count: '18', conversion: '24%' }
                 ].map(tool => (
                   <div key={tool.name} className="flex items-center justify-between p-4 bg-dark/40 border border-white/5">
                      <div>
                         <div className="font-ui text-[10px] tracking-widest uppercase text-white/60 mb-1">{tool.name}</div>
                         <div className="font-ui text-[8px] text-accent/50 tracking-widest uppercase">{tool.conversion} Conv. Rate</div>
                      </div>
                      <div className="font-display text-2xl text-white">{tool.count}</div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-accent/5 border border-accent/10 p-12">
              <h3 className="font-display text-xl text-accent uppercase tracking-widest mb-8">Bundle Demand</h3>
              <div className="space-y-6">
                 {[
                   { name: 'Roof Intelligence Pack', demand: 'High', leads: '28' },
                   { name: 'Construction Progress Pack', demand: 'Medium', leads: '19' },
                   { name: 'Survey Data Pack', demand: 'Medium', leads: '14' }
                 ].map(b => (
                   <div key={b.name} className="flex items-center justify-between">
                      <div>
                         <div className="font-ui text-[11px] tracking-widest uppercase text-accent mb-1">{b.name}</div>
                         <div className="font-ui text-[8px] text-accent/30 tracking-widest uppercase">Demand: {b.demand}</div>
                      </div>
                      <div className="font-display text-2xl text-accent">{b.leads}</div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </main>
  )
}
