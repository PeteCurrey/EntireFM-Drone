'use client'

import { useState, useEffect, use } from 'react'
import Link from 'next/link'
import { 
  ChevronLeft, 
  Phone, 
  Mail, 
  Building, 
  MapPin, 
  Calendar, 
  Clock, 
  FileText, 
  Activity, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  ExternalLink,
  ShieldCheck,
  Save,
  Send
} from 'lucide-react'
import { Lead, LeadStatus, LeadPriority } from '@/lib/leads/types'

const STATUS_OPTIONS: LeadStatus[] = [
  'New',
  'Contacted',
  'Qualified',
  'Quote Required',
  'Quote Sent',
  'Won',
  'Lost',
  'Spam',
]

const PRIORITY_OPTIONS: LeadPriority[] = ['Low', 'Medium', 'High', 'Urgent']

export default function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [lead, setLead] = useState<Lead | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [status, setStatus] = useState<LeadStatus>('New')
  const [priority, setPriority] = useState<LeadPriority>('Medium')
  const [adminNotes, setAdminNotes] = useState('')
  const [nextFollowUp, setNextFollowUp] = useState('')
  const [assignedTo, setAssignedTo] = useState('')
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [saveSuccess, setSaveSuccess] = useState(false)

  useEffect(() => {
    async function fetchLead() {
      try {
        const res = await fetch(`/api/admin/leads/${id}`)
        if (res.ok) {
          const data: Lead = await res.json()
          setLead(data)
          setStatus(data.status)
          setPriority(data.priority || 'Medium')
          setAdminNotes(data.admin_notes || '')
          setAssignedTo(data.assigned_to || '')
          if (data.next_follow_up_at) {
            setNextFollowUp(data.next_follow_up_at.split('T')[0])
          }
        }
      } catch (err) {
        console.error('Failed to fetch lead:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchLead()
  }, [id])

  const handleSave = async () => {
    setSaving(true)
    setSaveSuccess(false)
    try {
      const res = await fetch(`/api/admin/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status,
          priority,
          admin_notes: adminNotes,
          assigned_to: assignedTo,
          next_follow_up_at: nextFollowUp ? new Date(nextFollowUp).toISOString() : null,
          last_contacted_at: status === 'Contacted' ? new Date().toISOString() : lead?.last_contacted_at,
        }),
      })
      if (res.ok) {
        const updated: Lead = await res.json()
        setLead(updated)
        setSaveSuccess(true)
        setTimeout(() => setSaveSuccess(false), 3000)
      }
    } catch (err) {
      console.error('Failed to save lead updates:', err)
    } finally {
      setSaving(false)
    }
  }

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(fieldName)
    setTimeout(() => setCopiedField(null), 2000)
  }

  if (loading) {
    return (
      <div className="p-20 text-center text-xs text-[#64748b]">
        <div className="w-6 h-6 border-2 border-[#0066ff] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        Loading lead dossier...
      </div>
    )
  }

  if (!lead) {
    return (
      <div className="p-20 text-center">
        <AlertCircle className="w-8 h-8 text-[#dc2626] mx-auto mb-3" />
        <h2 className="text-sm font-semibold text-[#0f172a] mb-1">Lead Record Not Found</h2>
        <p className="text-xs text-[#64748b] mb-6">
          The requested lead ID does not exist or has been removed.
        </p>
        <Link
          href="/admin/leads"
          className="px-4 py-2 bg-[#0066ff] text-white text-xs font-medium rounded-[2px]"
        >
          Return to Leads
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8 max-w-6xl">
      {/* Top Breadcrumb & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link
          href="/admin/leads"
          className="text-xs text-[#64748b] hover:text-[#0066ff] flex items-center gap-1 font-medium transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Leads
        </Link>

        <div className="flex items-center gap-3">
          {lead.phone && (
            <a
              href={`tel:${lead.phone}`}
              className="px-3.5 py-2 border border-[#cbd5e1] hover:bg-white text-[#0f172a] text-xs font-medium rounded-[2px] transition-colors inline-flex items-center gap-1.5 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#10b981]" />
              <span>Call Lead</span>
            </a>
          )}
          <a
            href={`mailto:${lead.email}?subject=TFTS%20Drone%20Enquiry%20—%20${encodeURIComponent(lead.service)}`}
            className="px-3.5 py-2 bg-[#0066ff] hover:bg-[#0052cc] text-white text-xs font-medium rounded-[2px] transition-colors inline-flex items-center gap-1.5 shadow-sm"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email Lead</span>
          </a>
        </div>
      </div>

      {/* Main Header Card */}
      <div className="bg-white border border-[#e2e8f0] p-6 rounded-[2px] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono text-[#64748b]">{lead.id}</span>
            <span className="text-[#cbd5e1]">•</span>
            <span className="text-xs text-[#64748b]">
              Received {new Date(lead.created_at).toLocaleString('en-GB', {
                dateStyle: 'medium',
                timeStyle: 'short',
              })}
            </span>
          </div>
          <h1 className="text-2xl font-semibold text-[#0f172a] tracking-tight">
            {lead.full_name}
          </h1>
          {lead.company_name && (
            <div className="text-sm font-medium text-[#475569] mt-0.5 flex items-center gap-1.5">
              <Building className="w-4 h-4 text-[#94a3b8]" />
              <span>{lead.company_name}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs">
          <div className="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-[2px]">
            <span className="text-[10px] text-[#94a3b8] uppercase tracking-wider block mb-0.5">
              Target Service
            </span>
            <span className="font-semibold text-[#0f172a]">{lead.service}</span>
          </div>
          <div className="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-[2px]">
            <span className="text-[10px] text-[#94a3b8] uppercase tracking-wider block mb-0.5">
              Source Channel
            </span>
            <span className="font-semibold text-[#0f172a] capitalize">
              {lead.lead_source.replace('_', ' ')}
            </span>
          </div>
        </div>
      </div>

      {/* 2-Column Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Contact, Message & Attribution (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Enquiry Message / Scope */}
          <div className="bg-white border border-[#e2e8f0] p-6 rounded-[2px] shadow-sm">
            <h2 className="text-xs font-semibold text-[#0f172a] uppercase tracking-wider mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#0066ff]" />
              <span>Enquiry Message & Scope</span>
            </h2>
            <div className="bg-[#f8fafc] border border-[#e2e8f0] p-4 rounded-[2px]">
              <p className="text-sm text-[#1e293b] leading-relaxed whitespace-pre-wrap">
                {lead.message || 'No additional message provided with this submission.'}
              </p>
            </div>

            {/* Extra Technical Metadata if available */}
            {lead.metadata && Object.keys(lead.metadata).length > 0 && (
              <div className="mt-6 pt-6 border-t border-[#f1f5f9]">
                <h3 className="text-xs font-medium text-[#64748b] uppercase tracking-wider mb-3">
                  Technical Specifications & Form Data
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {lead.metadata.siteType && (
                    <div className="p-2.5 bg-[#f8fafc] rounded border border-[#f1f5f9]">
                      <span className="text-[10px] text-[#94a3b8] block">Site Type</span>
                      <span className="font-medium text-[#334155]">{lead.metadata.siteType}</span>
                    </div>
                  )}
                  {lead.metadata.urgency && (
                    <div className="p-2.5 bg-[#f8fafc] rounded border border-[#f1f5f9]">
                      <span className="text-[10px] text-[#94a3b8] block">Urgency</span>
                      <span className="font-medium text-[#334155]">{lead.metadata.urgency}</span>
                    </div>
                  )}
                  {lead.metadata.packageInterest && (
                    <div className="p-2.5 bg-[#f8fafc] rounded border border-[#f1f5f9]">
                      <span className="text-[10px] text-[#94a3b8] block">Bundle Interest</span>
                      <span className="font-medium text-[#334155]">{lead.metadata.packageInterest}</span>
                    </div>
                  )}
                  {lead.metadata.band && (
                    <div className="p-2.5 bg-[#f8fafc] rounded border border-[#f1f5f9]">
                      <span className="text-[10px] text-[#94a3b8] block">Cost Estimate Band</span>
                      <span className="font-medium text-[#334155]">
                        {lead.metadata.band.label} ({lead.metadata.band.range})
                      </span>
                    </div>
                  )}
                  {lead.metadata.deliverables && Array.isArray(lead.metadata.deliverables) && (
                    <div className="sm:col-span-2 p-2.5 bg-[#f8fafc] rounded border border-[#f1f5f9]">
                      <span className="text-[10px] text-[#94a3b8] block mb-1">Requested Deliverables</span>
                      <div className="flex flex-wrap gap-1.5">
                        {lead.metadata.deliverables.map((d: string) => (
                          <span
                            key={d}
                            className="bg-white border border-[#cbd5e1] px-2 py-0.5 rounded text-[11px] text-[#334155]"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="bg-white border border-[#e2e8f0] p-6 rounded-[2px] shadow-sm">
            <h2 className="text-xs font-semibold text-[#0f172a] uppercase tracking-wider mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#0066ff]" />
              <span>Contact Information</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-[2px]">
                <span className="text-[10px] text-[#94a3b8] block mb-1">Email Address</span>
                <div className="flex items-center justify-between">
                  <a href={`mailto:${lead.email}`} className="font-medium text-[#0066ff] hover:underline">
                    {lead.email}
                  </a>
                  <button
                    onClick={() => copyToClipboard(lead.email, 'email')}
                    className="text-[#94a3b8] hover:text-[#0f172a]"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-[#10b981]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-[2px]">
                <span className="text-[10px] text-[#94a3b8] block mb-1">Phone Number</span>
                <div className="flex items-center justify-between">
                  {lead.phone ? (
                    <a href={`tel:${lead.phone}`} className="font-medium text-[#0f172a] hover:text-[#0066ff]">
                      {lead.phone}
                    </a>
                  ) : (
                    <span className="text-[#94a3b8] italic">Not provided</span>
                  )}
                  {lead.phone && (
                    <button
                      onClick={() => copyToClipboard(lead.phone, 'phone')}
                      className="text-[#94a3b8] hover:text-[#0f172a]"
                      title="Copy Phone"
                    >
                      {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-[#10b981]" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  )}
                </div>
              </div>

              {lead.site_address && (
                <div className="sm:col-span-2 p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-[2px]">
                  <span className="text-[10px] text-[#94a3b8] block mb-1">Site Location / Address</span>
                  <div className="font-medium text-[#0f172a] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0066ff]" />
                    <span>{lead.site_address} {lead.postcode}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Acquisition & Attribution Context */}
          <div className="bg-white border border-[#e2e8f0] p-6 rounded-[2px] shadow-sm">
            <h2 className="text-xs font-semibold text-[#0f172a] uppercase tracking-wider mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#0066ff]" />
              <span>Acquisition & Attribution Intelligence</span>
            </h2>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-[2px]">
                  <span className="text-[10px] text-[#94a3b8] block mb-0.5">Source Page</span>
                  <Link
                    href={lead.source_page}
                    target="_blank"
                    className="font-medium text-[#0066ff] hover:underline flex items-center gap-1"
                  >
                    <span>{lead.source_page}</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>

                <div className="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-[2px]">
                  <span className="text-[10px] text-[#94a3b8] block mb-0.5">Referrer</span>
                  <span className="font-medium text-[#334155] truncate block">
                    {lead.referrer || 'Direct Traffic'}
                  </span>
                </div>
              </div>

              {/* UTM Parameters */}
              <div className="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-[2px]">
                <span className="text-[10px] text-[#94a3b8] uppercase tracking-wider block mb-2">
                  Campaign Tracking (UTMs)
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-[11px]">
                  <div>
                    <span className="text-[10px] text-[#94a3b8] block">Source</span>
                    <span className="font-medium text-[#0f172a]">{lead.utm_source || '—'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#94a3b8] block">Medium</span>
                    <span className="font-medium text-[#0f172a]">{lead.utm_medium || '—'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#94a3b8] block">Campaign</span>
                    <span className="font-medium text-[#0f172a]">{lead.utm_campaign || '—'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#94a3b8] block">Term</span>
                    <span className="font-medium text-[#0f172a]">{lead.utm_term || '—'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#94a3b8] block">Content</span>
                    <span className="font-medium text-[#0f172a]">{lead.utm_content || '—'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Internal Management & Action Controls (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Status & Priority Management */}
          <div className="bg-white border border-[#e2e8f0] p-6 rounded-[2px] shadow-sm space-y-5">
            <h2 className="text-xs font-semibold text-[#0f172a] uppercase tracking-wider border-b border-[#f1f5f9] pb-3">
              Internal Pipeline Control
            </h2>

            {/* Status */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-medium text-[#475569]">
                Lead Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as LeadStatus)}
                className="w-full bg-[#f8fafc] border border-[#cbd5e1] rounded-[2px] p-2.5 text-xs text-[#0f172a] outline-none focus:border-[#0066ff]"
              >
                {STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Priority */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-medium text-[#475569]">
                Priority
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as LeadPriority)}
                className="w-full bg-[#f8fafc] border border-[#cbd5e1] rounded-[2px] p-2.5 text-xs text-[#0f172a] outline-none focus:border-[#0066ff]"
              >
                {PRIORITY_OPTIONS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* Next Follow-Up Date */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-medium text-[#475569]">
                Next Follow-Up Date
              </label>
              <input
                type="date"
                value={nextFollowUp}
                onChange={(e) => setNextFollowUp(e.target.value)}
                className="w-full bg-[#f8fafc] border border-[#cbd5e1] rounded-[2px] p-2.5 text-xs text-[#0f172a] outline-none focus:border-[#0066ff]"
              />
            </div>

            {/* Assigned Person */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-medium text-[#475569]">
                Assigned Team Member
              </label>
              <input
                type="text"
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
                placeholder="e.g. Pete Currey"
                className="w-full bg-[#f8fafc] border border-[#cbd5e1] rounded-[2px] p-2.5 text-xs text-[#0f172a] outline-none focus:border-[#0066ff]"
              />
            </div>

            {/* Private Admin Notes */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-[11px] font-medium text-[#475569]">
                  Private Admin Notes
                </label>
                <span className="text-[10px] text-[#94a3b8] italic">Internal only</span>
              </div>
              <textarea
                rows={4}
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
                placeholder="Add notes on call summary, site access requirements, quotes provided..."
                className="w-full bg-[#f8fafc] border border-[#cbd5e1] rounded-[2px] p-2.5 text-xs text-[#0f172a] outline-none focus:border-[#0066ff] leading-relaxed"
              />
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              disabled={saving}
              className="w-full bg-[#0066ff] hover:bg-[#0052cc] text-white text-xs font-medium py-3 rounded-[2px] transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
            >
              {saving ? (
                <span>Saving Changes...</span>
              ) : saveSuccess ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Changes Saved</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Lead Record</span>
                </>
              )}
            </button>
          </div>

          {/* Timeline Summary */}
          <div className="bg-[#f8fafc] border border-[#e2e8f0] p-5 rounded-[2px] space-y-3 text-xs">
            <h3 className="text-[11px] font-semibold text-[#0f172a] uppercase tracking-wider">
              Enquiry Timeline
            </h3>
            <div className="space-y-2 text-[#64748b]">
              <div className="flex justify-between">
                <span>Created:</span>
                <span className="font-medium text-[#334155]">
                  {new Date(lead.created_at).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Last Updated:</span>
                <span className="font-medium text-[#334155]">
                  {new Date(lead.updated_at).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
              </div>
              {lead.last_contacted_at && (
                <div className="flex justify-between">
                  <span>Last Contacted:</span>
                  <span className="font-medium text-[#334155]">
                    {new Date(lead.last_contacted_at).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              )}
              {lead.won_at && (
                <div className="flex justify-between text-[#16a34a]">
                  <span>Won Date:</span>
                  <span className="font-medium">
                    {new Date(lead.won_at).toLocaleDateString('en-GB')}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
