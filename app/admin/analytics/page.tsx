'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Target, 
  MousePointer2, 
  Globe, 
  Search, 
  Clock, 
  ArrowUpRight,
  Filter,
  Download,
  Activity,
  Zap,
  PieChart,
  LayoutDashboard,
  FileText,
  Briefcase
} from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'

export default function AnalyticsOverviewPage() {
  const [loading, setLoading] = useState(true)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null)
  const [dateRange, setDateRange] = useState('Last 28 Days')

  useEffect(() => {
    async function fetchAnalytics() {
      setLoading(true)
      try {
        const response = await fetch('/api/admin/analytics/summary')
        const result = await response.json()
        setData(result)
      } catch (err) {
        console.error('Failed to fetch analytics:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchAnalytics()
  }, [])

  if (loading) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center">
        <Loader2 className="w-12 h-12 text-accent animate-spin mb-6" />
        <span className="font-ui text-xs tracking-[0.4em] uppercase text-white/20">Aggregating Commercial Intel...</span>
      </div>
    )
  }

  const metrics = data?.metrics || {}
  const topPages = data?.topPages || []
  const sourcePerformance = data?.sourcePerformance || []
  const serviceBreakdown = data?.serviceBreakdown || []

  const overviewMetrics = [
    { label: 'Total Visitors', value: metrics.visitors.toLocaleString(), trend: '+0.0%', icon: Users },
    { label: 'Total Sessions', value: metrics.visitors.toLocaleString(), trend: '+0.0%', icon: Activity },
    { label: 'Brief Submissions', value: metrics.leads.toLocaleString(), trend: '+0.0%', icon: FileText, color: 'text-accent' },
    { label: 'Asset Downloads', value: '---', trend: '+0.0%', icon: Download, color: 'text-blue-400' },
    { label: 'Conversion Rate', value: metrics.conversionRate, trend: '+0.0%', icon: Target },
    { label: 'Avg Lead Score', value: '---', trend: '+0.0%', icon: Zap },
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Commercial Intelligence</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-white uppercase tracking-tighter leading-none">
            Analytics & <span className="text-accent">Attribution</span>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
             <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 text-white/20" />
             <select 
               className="bg-white/5 border border-white/10 pl-10 pr-8 py-3 font-ui text-[10px] tracking-widest text-white uppercase focus:outline-none focus:border-accent/50 appearance-none"
               value={dateRange}
               onChange={(e) => setDateRange(e.target.value)}
             >
                <option>Today</option>
                <option>Last 7 Days</option>
                <option>Last 28 Days</option>
                <option>Last 90 Days</option>
                <option>Year to Date</option>
             </select>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 font-ui text-[10px] tracking-widest uppercase hover:bg-white/10 transition-colors">
            <Download className="w-3 h-3" /> Export Intelligence
          </button>
        </div>
      </header>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-[1px] bg-white/10 border border-white/10">
        {overviewMetrics.map((metric, i) => (
          <div key={i} className="bg-mid p-8">
            <div className="flex justify-between items-start mb-6">
              <div className="p-2 bg-white/5 rounded-sm">
                <metric.icon className={`w-4 h-4 ${metric.color || 'text-white/40'}`} />
              </div>
              <span className="font-ui text-[9px] text-green-400 tracking-widest uppercase">{metric.trend}</span>
            </div>
            <div className="font-display text-3xl text-white mb-1">{metric.value}</div>
            <div className="font-ui text-[9px] tracking-[0.2em] uppercase text-white/30">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Main Analysis Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Source Performance */}
        <div className="bg-mid border border-white/5 p-10">
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/5">
            <h3 className="font-display text-xl text-white uppercase tracking-widest">Source Performance</h3>
            <Link href="/admin/analytics/sources" className="font-ui text-[9px] tracking-widest uppercase text-accent/40 hover:text-accent transition-colors">Full Report</Link>
          </div>
          <div className="space-y-6">
            {sourcePerformance.map((item: { source: string; leads: number }, i: number) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 group hover:border-accent/20 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                  <div>
                    <div className="font-ui text-[11px] tracking-widest text-white uppercase mb-1">{item.source}</div>
                    <div className="font-ui text-[9px] text-white/20 uppercase tracking-widest">Attributed Leads</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display text-xl text-white">{item.leads} Leads</div>
                </div>
              </div>
            ))}
            {sourcePerformance.length === 0 && (
              <div className="p-12 text-center font-ui text-[10px] tracking-widest text-white/20 uppercase">No lead sources detected yet.</div>
            )}
          </div>
        </div>

        {/* Page Performance */}
        <div className="bg-mid border border-white/5 p-10">
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/5">
            <h3 className="font-display text-xl text-white uppercase tracking-widest">Top Converting Pages</h3>
            <Link href="/admin/analytics/pages" className="font-ui text-[9px] tracking-widest uppercase text-accent/40 hover:text-accent transition-colors">Full Report</Link>
          </div>
          <div className="space-y-6">
            {topPages.map((item: { url: string; views: number }, i: number) => (
              <div key={i} className="group">
                <div className="flex justify-between items-end mb-2">
                  <div className="font-ui text-[10px] tracking-widest text-white/60 uppercase max-w-[280px] truncate">{item.url}</div>
                  <div className="font-display text-lg text-white">{item.views} <span className="text-[10px] font-ui text-white/30 uppercase ml-1">Views</span></div>
                </div>
                <div className="relative h-1 bg-white/5 overflow-hidden">
                  <motion.div 
                    initial={{ scaleX: 0 }} 
                    animate={{ scaleX: (item.views / topPages[0].views) }} 
                    className="absolute inset-0 bg-accent origin-left"
                  />
                </div>
              </div>
            ))}
            {topPages.length === 0 && (
              <div className="p-12 text-center font-ui text-[10px] tracking-widest text-white/20 uppercase">No page views recorded yet.</div>
            )}
          </div>
        </div>

        {/* Service breakdown */}
        <div className="bg-mid border border-white/5 p-10">
           <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/5">
            <h3 className="font-display text-xl text-white uppercase tracking-widest">Service Intensity</h3>
            <span className="font-ui text-[9px] tracking-widest uppercase text-white/20">Leads by Category</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {serviceBreakdown.map((item: { service: string; leads: number }, i: number) => (
               <div key={i} className="p-6 bg-dark border border-white/5 space-y-4">
                  <div className="font-ui text-[10px] tracking-widest uppercase text-white/60 leading-tight">{item.service}</div>
                  <div className="flex justify-between items-end">
                     <div className="font-display text-3xl text-white">{item.leads}</div>
                     <div className="text-right">
                        <div className="font-ui text-[8px] text-white/20 tracking-widest uppercase">Leads</div>
                     </div>
                  </div>
               </div>
             ))}
             {serviceBreakdown.length === 0 && (
                <div className="col-span-2 p-12 text-center font-ui text-[10px] tracking-widest text-white/20 uppercase">No service data yet.</div>
             )}
          </div>
        </div>

        {/* Opportunity Cards */}
        <div className="space-y-6">
           <div className="bg-accent/5 border border-accent/20 p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                 <Zap className="w-8 h-8 text-accent/20" />
              </div>
              <div className="svc-tag mb-6"><SectionTag number="OPT" text="Opportunity" /></div>
              <h4 className="font-display text-2xl text-white uppercase tracking-widest mb-4">High Impression / Low CTR</h4>
              <p className="font-body text-xs text-white/40 uppercase tracking-widest leading-relaxed mb-6">
                &quot;Drone Roof Inspections London&quot; is ranking in position 4.2 but has a CTR of only 1.2%. Reviewing the meta description could increase traffic significantly.
              </p>
              <button className="font-ui text-[10px] tracking-widest uppercase text-accent border-b border-accent/20 pb-1 hover:text-white hover:border-white transition-all">Review SEO Metadata →</button>
           </div>

           <div className="bg-blue-500/5 border border-blue-500/20 p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                 <TrendingUp className="w-8 h-8 text-blue-500/20" />
              </div>
              <div className="svc-tag mb-6"><SectionTag number="CVR" text="Conversion" /></div>
              <h4 className="font-display text-2xl text-white uppercase tracking-widest mb-4">Traffic / No Leads</h4>
              <p className="font-body text-xs text-white/40 uppercase tracking-widest leading-relaxed mb-6">
                &quot;Construction Monitoring Birmingham&quot; has received 420 sessions this month but 0 conversions. The page has high engagement; review CTA placement.
              </p>
              <button className="font-ui text-[10px] tracking-widest uppercase text-blue-400 border-b border-blue-400/20 pb-1 hover:text-white hover:border-white transition-all">Audit Conversion Path →</button>
           </div>
        </div>

      </div>

      {/* Integration Placeholders */}
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
         <div className="flex items-center gap-8 opacity-40">
            <div className="flex items-center gap-3">
               <Globe className="w-4 h-4" />
               <span className="font-ui text-[10px] tracking-widest uppercase">GSC Connected</span>
            </div>
            <div className="flex items-center gap-3">
               <Activity className="w-4 h-4" />
               <span className="font-ui text-[10px] tracking-widest uppercase">GA4 Streaming</span>
            </div>
         </div>
         <p className="font-ui text-[9px] tracking-widest uppercase text-white/20">
            EntireFM Drone Command Centre • First-Party Attribution Active
         </p>
      </div>
    </div>
  )
}
