import Link from 'next/link'
import { 
  Users, 
  Clock, 
  Calendar, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  Phone,
  Mail,
  Building,
  MapPin
} from 'lucide-react'
import { getLeadMetrics, getLeads } from '@/lib/leads/db'

export const dynamic = 'force-dynamic'

export default async function AdminDashboardPage() {
  const metrics = await getLeadMetrics()
  const recentLeads = await getLeads({ limit: 6 })

  // Leads with follow up due
  const allLeads = await getLeads()
  const now = new Date()
  const endOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59).getTime()
  
  const followUps = allLeads.filter(l => {
    if (!l.next_follow_up_at) return false
    const ts = new Date(l.next_follow_up_at).getTime()
    return ts <= endOfToday && !['Won', 'Lost', 'Spam'].includes(l.status)
  }).slice(0, 5)

  const cards = [
    {
      label: 'New Leads',
      value: metrics.newLeads,
      desc: 'Unreviewed enquiries',
      icon: AlertCircle,
      accent: 'text-[#0066ff] bg-[#0066ff]/10',
    },
    {
      label: 'Leads Today',
      value: metrics.leadsToday,
      desc: 'Received today',
      icon: Clock,
      accent: 'text-[#0ea5e9] bg-[#0ea5e9]/10',
    },
    {
      label: 'Leads This Week',
      value: metrics.leadsThisWeek,
      desc: 'Current week total',
      icon: Calendar,
      accent: 'text-[#6366f1] bg-[#6366f1]/10',
    },
    {
      label: 'Open Opportunities',
      value: metrics.openOpportunities,
      desc: 'Under active review',
      icon: TrendingUp,
      accent: 'text-[#f59e0b] bg-[#f59e0b]/10',
    },
    {
      label: 'Won Enquiries',
      value: metrics.won,
      desc: 'Successfully converted',
      icon: CheckCircle2,
      accent: 'text-[#10b981] bg-[#10b981]/10',
    },
    {
      label: 'Follow-Ups Due',
      value: metrics.followUpsDue,
      desc: 'Action required',
      icon: Users,
      accent: 'text-[#ec4899] bg-[#ec4899]/10',
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'New':
        return 'bg-[#eff6ff] text-[#0066ff] border-[#bfdbfe]'
      case 'Contacted':
        return 'bg-[#f0fdf4] text-[#16a34a] border-[#bbf7d0]'
      case 'Qualified':
        return 'bg-[#faf5ff] text-[#9333ea] border-[#e9d5ff]'
      case 'Quote Required':
      case 'Quote Sent':
        return 'bg-[#fffbeb] text-[#d97706] border-[#fde68a]'
      case 'Won':
        return 'bg-[#ecfdf5] text-[#059669] border-[#a7f3d0]'
      case 'Lost':
        return 'bg-[#fef2f2] text-[#dc2626] border-[#fecaca]'
      case 'Spam':
        return 'bg-[#f1f5f9] text-[#64748b] border-[#cbd5e1]'
      default:
        return 'bg-[#f8fafc] text-[#475569] border-[#e2e8f0]'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-light text-[#0f172a] tracking-tight">
            Commercial Lead <span className="font-semibold">Overview</span>
          </h1>
          <p className="text-xs text-[#64748b] mt-0.5">
            Real-time pipeline intelligence across all TFTS Drone capture and survey channels.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/leads"
            className="px-4 py-2 bg-[#0066ff] hover:bg-[#0052cc] text-white text-xs font-medium rounded-[2px] transition-colors inline-flex items-center gap-1.5 shadow-sm"
          >
            <span>View All Leads</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {cards.map((c) => (
          <div
            key={c.label}
            className="bg-white border border-[#e2e8f0] p-4 rounded-[2px] shadow-sm flex flex-col justify-between hover:border-[#cbd5e1] transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-medium text-[#64748b]">{c.label}</span>
              <div className={`w-7 h-7 rounded-[2px] flex items-center justify-center ${c.accent}`}>
                <c.icon className="w-3.5 h-3.5" />
              </div>
            </div>
            <div>
              <div className="text-2xl font-light text-[#0f172a] tracking-tight mb-0.5">
                {c.value}
              </div>
              <div className="text-[10px] text-[#94a3b8]">{c.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Enquiries Table (2 cols) */}
        <div className="lg:col-span-2 bg-white border border-[#e2e8f0] rounded-[2px] shadow-sm">
          <div className="p-5 border-b border-[#e2e8f0] flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-[#0f172a]">Recent Enquiries</h2>
              <p className="text-xs text-[#64748b] mt-0.5">Latest inbound commercial enquiries</p>
            </div>
            <Link
              href="/admin/leads"
              className="text-xs font-medium text-[#0066ff] hover:underline flex items-center gap-1"
            >
              All Leads ({metrics.total}) →
            </Link>
          </div>

          <div className="overflow-x-auto">
            {recentLeads.length === 0 ? (
              <div className="p-12 text-center">
                <Users className="w-8 h-8 text-[#cbd5e1] mx-auto mb-3" />
                <h3 className="text-sm font-medium text-[#0f172a] mb-1">No Leads Received Yet</h3>
                <p className="text-xs text-[#64748b] max-w-sm mx-auto">
                  Enquiries submitted through the website contact forms, brief assistant, and cost estimator will appear here automatically.
                </p>
              </div>
            ) : (
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-[#f1f5f9] bg-[#f8fafc] text-[#64748b] font-medium">
                    <th className="py-3 px-4">Contact</th>
                    <th className="py-3 px-4">Service</th>
                    <th className="py-3 px-4">Source Page</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f1f5f9]">
                  {recentLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-[#f8fafc] transition-colors group">
                      <td className="py-3.5 px-4">
                        <Link href={`/admin/leads/${lead.id}`} className="font-medium text-[#0f172a] hover:text-[#0066ff] block">
                          {lead.full_name}
                        </Link>
                        {lead.company_name && (
                          <span className="text-[11px] text-[#64748b] block">{lead.company_name}</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-[#334155]">
                        <span className="font-medium">{lead.service}</span>
                        {lead.service_detail && (
                          <span className="text-[11px] text-[#94a3b8] block">{lead.service_detail}</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-[#64748b] max-w-[150px] truncate">
                        <code className="text-[10px] bg-[#f1f5f9] px-1.5 py-0.5 rounded text-[#475569]">
                          {lead.source_page || '/'}
                        </code>
                      </td>
                      <td className="py-3.5 px-4 text-[#64748b] whitespace-nowrap">
                        {new Date(lead.created_at).toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: 'short',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span
                          className={`inline-block px-2.5 py-0.5 text-[10px] font-medium border rounded-[2px] ${getStatusBadge(
                            lead.status
                          )}`}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <Link
                          href={`/admin/leads/${lead.id}`}
                          className="text-[11px] font-medium text-[#0066ff] hover:underline"
                        >
                          View →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Follow-Ups Due Panel (1 col) */}
        <div className="space-y-6">
          <div className="bg-white border border-[#e2e8f0] rounded-[2px] shadow-sm p-5">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#e2e8f0]">
              <div>
                <h2 className="text-sm font-semibold text-[#0f172a]">Follow-Ups Due</h2>
                <p className="text-xs text-[#64748b] mt-0.5">Leads requiring contact today</p>
              </div>
              <span className="w-6 h-6 rounded-full bg-[#ec4899]/10 text-[#ec4899] text-xs font-semibold flex items-center justify-center">
                {followUps.length}
              </span>
            </div>

            {followUps.length === 0 ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="w-7 h-7 text-[#10b981] mx-auto mb-2 opacity-80" />
                <p className="text-xs text-[#64748b]">All scheduled follow-ups are up to date.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {followUps.map((f) => (
                  <div
                    key={f.id}
                    className="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-[2px] space-y-2 hover:border-[#cbd5e1] transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <Link
                          href={`/admin/leads/${f.id}`}
                          className="text-xs font-semibold text-[#0f172a] hover:text-[#0066ff]"
                        >
                          {f.full_name}
                        </Link>
                        {f.company_name && (
                          <div className="text-[10px] text-[#64748b]">{f.company_name}</div>
                        )}
                      </div>
                      <span className="text-[10px] text-[#dc2626] font-medium bg-[#fef2f2] px-1.5 py-0.5 rounded">
                        Due
                      </span>
                    </div>

                    <div className="text-[11px] text-[#475569] italic truncate">
                      {f.admin_notes || f.message || 'No notes added'}
                    </div>

                    <div className="pt-2 border-t border-[#e2e8f0] flex items-center justify-between text-[11px]">
                      {f.phone ? (
                        <a
                          href={`tel:${f.phone}`}
                          className="text-[#0066ff] hover:underline flex items-center gap-1 font-medium"
                        >
                          <Phone className="w-3 h-3" /> Call Lead
                        </a>
                      ) : (
                        <a
                          href={`mailto:${f.email}`}
                          className="text-[#0066ff] hover:underline flex items-center gap-1 font-medium"
                        >
                          <Mail className="w-3 h-3" /> Email Lead
                        </a>
                      )}
                      <Link href={`/admin/leads/${f.id}`} className="text-[#64748b] hover:text-[#0f172a]">
                        Manage →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Operations Guide */}
          <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[2px] p-5">
            <h3 className="text-xs font-semibold text-[#0f172a] uppercase tracking-wider mb-2">
              Lead Workflow Guide
            </h3>
            <ul className="text-xs text-[#64748b] space-y-2 leading-relaxed">
              <li>• <strong className="text-[#334155]">New:</strong> Unopened web form enquiry.</li>
              <li>• <strong className="text-[#334155]">Contacted:</strong> Initial phone or email outreach made.</li>
              <li>• <strong className="text-[#334155]">Qualified:</strong> Airspace & site scope validated.</li>
              <li>• <strong className="text-[#334155]">Quote Sent:</strong> Proposal delivered to client.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
