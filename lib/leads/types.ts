// lib/leads/types.ts — Canonical TFTS Drone Lead Types

export type LeadStatus =
  | 'New'
  | 'Contacted'
  | 'Qualified'
  | 'Quote Required'
  | 'Quote Sent'
  | 'Won'
  | 'Lost'
  | 'Spam'

export type LeadPriority = 'Low' | 'Medium' | 'High' | 'Urgent'

export interface Lead {
  id: string
  created_at: string
  updated_at: string

  first_name: string
  last_name: string
  full_name: string
  company_name: string

  email: string
  phone: string

  service: string
  service_detail?: string

  message: string

  site_address?: string
  postcode?: string

  lead_source: string // e.g. 'contact_page', 'homepage_form', 'project_brief', 'cost_estimator', 'lead_magnet'
  source_page: string
  referrer: string

  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string

  status: LeadStatus
  priority: LeadPriority

  assigned_to?: string
  admin_notes?: string

  last_contacted_at?: string | null
  next_follow_up_at?: string | null

  won_at?: string | null
  lost_at?: string | null
  lost_reason?: string | null

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata?: Record<string, any>
}

export interface LeadMetrics {
  newLeads: number
  leadsToday: number
  leadsThisWeek: number
  openOpportunities: number
  won: number
  followUpsDue: number
  total: number
}
