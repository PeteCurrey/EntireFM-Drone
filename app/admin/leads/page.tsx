'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { 
  Search, 
  Filter, 
  Download, 
  Users, 
  ChevronRight, 
  AlertCircle, 
  Clock, 
  Phone, 
  Mail,
  RefreshCw,
  SlidersHorizontal,
  X
} from 'lucide-react'
import { Lead, LeadStatus, LeadPriority } from '@/lib/leads/types'

const STATUSES: (LeadStatus | 'All')[] = [
  'All',
  'New',
  'Contacted',
  'Qualified',
  'Quote Required',
  'Quote Sent',
  'Won',
  'Lost',
  'Spam',
]

const PRIORITIES: (LeadPriority | 'All')[] = ['All', 'Urgent', 'High', 'Medium', 'Low']

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<string>('All')
  const [selectedPriority, setSelectedPriority] = useState<string>('All')
  const [selectedService, setSelectedService] = useState<string>('All')

  const fetchLeads = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (selectedStatus !== 'All') params.set('status', selectedStatus)
      if (selectedPriority !== 'All') params.set('priority', selectedPriority)
      if (selectedService !== 'All') params.set('service', selectedService)
      if (search.trim()) params.set('search', search.trim())

      const res = await fetch(`/api/admin/leads?${params.toString()}`)
      if (res.ok) {
        const data = await res.json()
        setLeads(data)
      }
    } catch (err) {
      console.error('Error fetching leads:', err)
    } finally {
      setLoading(false)
    }
  }, [selectedStatus, selectedPriority, selectedService, search])

  useEffect(() => {
    fetchLeads()
  }, [fetchLeads])

  const exportCSV = () => {
    if (leads.length === 0) return

    const headers = [
      'ID',
      'Date',
      'Full Name',
      'Company',
      'Email',
      'Phone',
      'Service',
      'Status',
      'Priority',
      'Source Page',
      'Lead Source',
      'UTM Source',
      'UTM Campaign',
      'Message',
    ]

    const rows = leads.map((l) => [
      l.id,
      new Date(l.created_at).toISOString(),
      `"${(l.full_name || '').replace(/"/g, '""')}"`,
      `"${(l.company_name || '').replace(/"/g, '""')}"`,
      `"${(l.email || '').replace(/"/g, '""')}"`,
      `"${(l.phone || '').replace(/"/g, '""')}"`,
      `"${(l.service || '').replace(/"/g, '""')}"`,
      l.status,
      l.priority,
      `"${(l.source_page || '').replace(/"/g, '""')}"`,
      l.lead_source,
      `"${(l.utm_source || '').replace(/"/g, '""')}"`,
      `"${(l.utm_campaign || '').replace(/"/g, '""')}"`,
      `"${(l.message || '').replace(/"/g, '""')}"`,
    ])

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute('download', `tfts-leads-export-${new Date().toISOString().slice(0, 10)}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'Urgent':
        return 'text-[#dc2626] font-semibold'
      case 'High':
        return 'text-[#ea580c] font-medium'
      case 'Medium':
        return 'text-[#0284c7]'
      case 'Low':
        return 'text-[#64748b]'
      default:
        return 'text-[#64748b]'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-light text-[#0f172a] tracking-tight">
            Lead <span className="font-semibold">Management</span>
          </h1>
          <p className="text-xs text-[#64748b] mt-0.5">
            Filter, search, and manage all commercial enquiries received across TFTS Drone.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchLeads}
            disabled={loading}
            className="p-2 border border-[#cbd5e1] hover:bg-white text-[#475569] rounded-[2px] text-xs transition-colors"
            title="Refresh Leads"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={exportCSV}
            disabled={leads.length === 0}
            className="px-3.5 py-2 border border-[#cbd5e1] hover:bg-white text-[#0f172a] text-xs font-medium rounded-[2px] transition-colors flex items-center gap-1.5 shadow-sm disabled:opacity-40"
          >
            <Download className="w-3.5 h-3.5 text-[#64748b]" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-[#e2e8f0] p-4 rounded-[2px] shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-[#94a3b8] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by contact name, company, email, phone, or message contents..."
              className="w-full bg-[#f8fafc] border border-[#cbd5e1] rounded-[2px] pl-9 pr-8 py-2 text-xs text-[#0f172a] outline-none focus:border-[#0066ff] focus:bg-white transition-colors"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#94a3b8] hover:text-[#0f172a]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Status Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-[#f8fafc] border border-[#cbd5e1] rounded-[2px] px-3 py-2 text-xs text-[#334155] outline-none focus:border-[#0066ff]"
            >
              {STATUSES.map((s) => (
                <option key={s} value={s}>
                  Status: {s}
                </option>
              ))}
            </select>

            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="bg-[#f8fafc] border border-[#cbd5e1] rounded-[2px] px-3 py-2 text-xs text-[#334155] outline-none focus:border-[#0066ff]"
            >
              {PRIORITIES.map((p) => (
                <option key={p} value={p}>
                  Priority: {p}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Status Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs border-t border-[#f1f5f9] pt-3">
          <span className="text-[11px] font-medium text-[#94a3b8] mr-2 shrink-0">Quick Filter:</span>
          {STATUSES.map((s) => {
            const isSelected = selectedStatus === s
            return (
              <button
                key={s}
                onClick={() => setSelectedStatus(s)}
                className={`px-2.5 py-1 text-[11px] rounded-[2px] transition-colors shrink-0 ${
                  isSelected
                    ? 'bg-[#0066ff] text-white font-medium shadow-sm'
                    : 'bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]'
                }`}
              >
                {s}
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Leads Table */}
      <div className="bg-white border border-[#e2e8f0] rounded-[2px] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          {loading ? (
            <div className="p-16 text-center text-xs text-[#64748b]">
              <div className="w-6 h-6 border-2 border-[#0066ff] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              Loading enquiries...
            </div>
          ) : leads.length === 0 ? (
            <div className="p-16 text-center">
              <Users className="w-8 h-8 text-[#cbd5e1] mx-auto mb-3" />
              <h3 className="text-sm font-medium text-[#0f172a] mb-1">No Leads Found</h3>
              <p className="text-xs text-[#64748b] max-w-sm mx-auto">
                No enquiry records matched your search filters. Try clearing your search or status filter.
              </p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#e2e8f0] bg-[#f8fafc] text-[#64748b] font-medium">
                  <th className="py-3 px-4 w-6"></th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Contact & Company</th>
                  <th className="py-3 px-4">Service</th>
                  <th className="py-3 px-4">Contact Info</th>
                  <th className="py-3 px-4">Source Page</th>
                  <th className="py-3 px-4 text-center">Priority</th>
                  <th className="py-3 px-4 text-center">Status</th>
                  <th className="py-3 px-4 text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9]">
                {leads.map((lead) => {
                  const isNew = lead.status === 'New'
                  return (
                    <tr
                      key={lead.id}
                      className={`hover:bg-[#f8fafc] transition-colors group ${
                        isNew ? 'bg-[#f0f7ff]/40' : ''
                      }`}
                    >
                      {/* Unread indicator dot */}
                      <td className="py-3.5 px-3 text-center">
                        {isNew && (
                          <span
                            className="inline-block w-2 h-2 rounded-full bg-[#0066ff] shadow-sm"
                            title="New Unreviewed Lead"
                          />
                        )}
                      </td>

                      {/* Date */}
                      <td className="py-3.5 px-4 text-[#64748b] whitespace-nowrap">
                        <span className="font-medium text-[#334155] block">
                          {new Date(lead.created_at).toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: 'short',
                          })}
                        </span>
                        <span className="text-[10px] text-[#94a3b8]">
                          {new Date(lead.created_at).toLocaleTimeString('en-GB', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </td>

                      {/* Name & Company */}
                      <td className="py-3.5 px-4">
                        <Link
                          href={`/admin/leads/${lead.id}`}
                          className="font-medium text-[#0f172a] hover:text-[#0066ff] block"
                        >
                          {lead.full_name}
                        </Link>
                        {lead.company_name ? (
                          <span className="text-[11px] text-[#64748b] block">{lead.company_name}</span>
                        ) : (
                          <span className="text-[10px] text-[#94a3b8] italic block">No company specified</span>
                        )}
                      </td>

                      {/* Service */}
                      <td className="py-3.5 px-4">
                        <span className="font-medium text-[#1e293b] block">{lead.service}</span>
                        {lead.service_detail && (
                          <span className="text-[10px] text-[#0066ff] block">{lead.service_detail}</span>
                        )}
                      </td>

                      {/* Contact Info (Clickable) */}
                      <td className="py-3.5 px-4 text-[#475569] space-y-0.5">
                        <a
                          href={`mailto:${lead.email}`}
                          className="text-[#0066ff] hover:underline flex items-center gap-1 block truncate max-w-[180px]"
                        >
                          <Mail className="w-3 h-3 shrink-0" />
                          <span className="truncate">{lead.email}</span>
                        </a>
                        {lead.phone && (
                          <a
                            href={`tel:${lead.phone}`}
                            className="text-[#475569] hover:text-[#0f172a] flex items-center gap-1 block"
                          >
                            <Phone className="w-3 h-3 shrink-0" />
                            <span>{lead.phone}</span>
                          </a>
                        )}
                      </td>

                      {/* Source Page & Channel */}
                      <td className="py-3.5 px-4 text-[#64748b] max-w-[160px]">
                        <code className="text-[10px] bg-[#f1f5f9] px-1.5 py-0.5 rounded text-[#475569] block truncate">
                          {lead.source_page || '/'}
                        </code>
                        <span className="text-[10px] text-[#94a3b8] block capitalize">
                          {lead.lead_source.replace('_', ' ')}
                        </span>
                      </td>

                      {/* Priority */}
                      <td className="py-3.5 px-4 text-center">
                        <span className={`text-[11px] ${getPriorityBadge(lead.priority)}`}>
                          {lead.priority}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="py-3.5 px-4 text-center">
                        <span
                          className={`inline-block px-2.5 py-0.5 text-[10px] font-medium border rounded-[2px] ${getStatusBadge(
                            lead.status
                          )}`}
                        >
                          {lead.status}
                        </span>
                      </td>

                      {/* Detail CTA */}
                      <td className="py-3.5 px-4 text-right">
                        <Link
                          href={`/admin/leads/${lead.id}`}
                          className="p-1.5 hover:bg-[#f1f5f9] text-[#64748b] hover:text-[#0066ff] rounded inline-block transition-colors"
                          title="Open Lead"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}
        </div>

        {/* Footer Count */}
        <div className="p-4 border-t border-[#e2e8f0] bg-[#f8fafc] flex items-center justify-between text-xs text-[#64748b]">
          <span>Showing {leads.length} recorded enquiries</span>
          <span className="text-[11px] text-[#94a3b8]">Sorted by newest first</span>
        </div>
      </div>
    </div>
  )
}
