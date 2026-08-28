// lib/leads/db.ts — Canonical Lead Persistence & Query Engine
import fs from 'fs'
import path from 'path'
import { Lead, LeadMetrics, LeadStatus, LeadPriority } from './types'
import { createClient as createSupabaseServerClient } from '@/lib/supabase/server'

const DATA_DIR = path.join(process.cwd(), 'data')
const LEADS_FILE = path.join(DATA_DIR, 'leads.json')

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
  if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), 'utf-8')
  }
}

function readLocalLeads(): Lead[] {
  ensureDataDir()
  try {
    const raw = fs.readFileSync(LEADS_FILE, 'utf-8')
    return JSON.parse(raw) as Lead[]
  } catch (err) {
    console.error('Error reading local leads.json:', err)
    return []
  }
}

function writeLocalLeads(leads: Lead[]) {
  ensureDataDir()
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8')
  } catch (err) {
    console.error('Error writing local leads.json:', err)
  }
}

// Generate unique readable ID
function generateLeadId(): string {
  const ts = Date.now().toString(36).toUpperCase()
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `TFTS-${ts}-${rand}`
}

/**
 * Fetch all leads with optional filters
 */
export async function getLeads(filters?: {
  status?: string
  service?: string
  priority?: string
  search?: string
  limit?: number
}): Promise<Lead[]> {
  try {
    const supabase = await createSupabaseServerClient()
    const isPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('your-project-id')
    
    if (!isPlaceholder) {
      let query = supabase.from('leads').select('*').order('created_at', { ascending: false })

      if (filters?.status && filters.status !== 'all') {
        query = query.eq('status', filters.status)
      }
      if (filters?.priority && filters.priority !== 'all') {
        query = query.eq('priority', filters.priority)
      }
      if (filters?.service && filters.service !== 'all') {
        query = query.ilike('service', `%${filters.service}%`)
      }
      if (filters?.search) {
        query = query.or(
          `full_name.ilike.%${filters.search}%,company_name.ilike.%${filters.search}%,email.ilike.%${filters.search}%,phone.ilike.%${filters.search}%,message.ilike.%${filters.search}%`
        )
      }
      if (filters?.limit) {
        query = query.limit(filters.limit)
      }

      const { data, error } = await query
      if (!error && Array.isArray(data) && data.length > 0) {
        return data as Lead[]
      }
    }
  } catch (err) {
    console.warn('Supabase query unavailable, using local persistence store:', err)
  }

  // Local storage fallback
  let leads = readLocalLeads()

  // Sort newest first
  leads.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

  if (filters?.status && filters.status !== 'all') {
    leads = leads.filter((l) => l.status.toLowerCase() === filters.status?.toLowerCase())
  }
  if (filters?.priority && filters.priority !== 'all') {
    leads = leads.filter((l) => l.priority?.toLowerCase() === filters.priority?.toLowerCase())
  }
  if (filters?.service && filters.service !== 'all') {
    leads = leads.filter((l) => (l.service || '').toLowerCase().includes(filters.service?.toLowerCase() || ''))
  }
  if (filters?.search) {
    const q = filters.search.toLowerCase()
    leads = leads.filter(
      (l) =>
        (l.full_name || '').toLowerCase().includes(q) ||
        (l.company_name || '').toLowerCase().includes(q) ||
        (l.email || '').toLowerCase().includes(q) ||
        (l.phone || '').toLowerCase().includes(q) ||
        (l.message || '').toLowerCase().includes(q) ||
        (l.service || '').toLowerCase().includes(q)
    )
  }
  if (filters?.limit) {
    leads = leads.slice(0, filters.limit)
  }

  return leads
}

/**
 * Fetch a single lead by ID
 */
export async function getLeadById(id: string): Promise<Lead | null> {
  try {
    const supabase = await createSupabaseServerClient()
    const isPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('your-project-id')
    
    if (!isPlaceholder) {
      const { data, error } = await supabase.from('leads').select('*').eq('id', id).single()
      if (!error && data) {
        return data as Lead
      }
    }
  } catch (err) {
    console.warn('Supabase getLeadById unavailable:', err)
  }

  const leads = readLocalLeads()
  return leads.find((l) => l.id === id) || null
}

/**
 * Create a new canonical lead
 */
export async function createLead(payload: Partial<Lead>): Promise<Lead> {
  const now = new Date().toISOString()
  
  // Format names cleanly
  const fullName = payload.full_name || `${payload.first_name || ''} ${payload.last_name || ''}`.trim() || 'Anonymous Contact'
  const nameParts = fullName.split(' ')
  const firstName = payload.first_name || nameParts[0] || ''
  const lastName = payload.last_name || (nameParts.length > 1 ? nameParts.slice(1).join(' ') : '')

  const newLead: Lead = {
    id: payload.id || generateLeadId(),
    created_at: payload.created_at || now,
    updated_at: now,
    first_name: firstName,
    last_name: lastName,
    full_name: fullName,
    company_name: payload.company_name || '',
    email: payload.email || '',
    phone: payload.phone || '',
    service: payload.service || 'Commercial Drone Survey',
    service_detail: payload.service_detail || '',
    message: payload.message || '',
    site_address: payload.site_address || '',
    postcode: payload.postcode || '',
    lead_source: payload.lead_source || 'website_form',
    source_page: payload.source_page || '/',
    referrer: payload.referrer || 'direct',
    utm_source: payload.utm_source,
    utm_medium: payload.utm_medium,
    utm_campaign: payload.utm_campaign,
    utm_term: payload.utm_term,
    utm_content: payload.utm_content,
    status: (payload.status as LeadStatus) || 'New',
    priority: (payload.priority as LeadPriority) || 'Medium',
    assigned_to: payload.assigned_to,
    admin_notes: payload.admin_notes || '',
    last_contacted_at: payload.last_contacted_at || null,
    next_follow_up_at: payload.next_follow_up_at || null,
    won_at: payload.won_at || null,
    lost_at: payload.lost_at || null,
    lost_reason: payload.lost_reason || null,
    metadata: payload.metadata || {},
  }

  // 1. Try writing to Supabase
  try {
    const supabase = await createSupabaseServerClient()
    const isPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('your-project-id')
    
    if (!isPlaceholder) {
      const { error } = await supabase.from('leads').insert([newLead])
      if (error) {
        console.error('Supabase createLead error:', error)
      }
    }
  } catch (err) {
    console.warn('Supabase createLead exception:', err)
  }

  // 2. Always persist locally so lead is never lost
  const leads = readLocalLeads()
  leads.unshift(newLead)
  writeLocalLeads(leads)

  return newLead
}

/**
 * Update an existing lead (status, notes, follow-up, priority)
 */
export async function updateLead(id: string, updates: Partial<Lead>): Promise<Lead | null> {
  const now = new Date().toISOString()
  const cleanUpdates = { ...updates, updated_at: now }

  // If status changed to Won/Lost, set corresponding timestamps
  if (updates.status === 'Won' && !updates.won_at) {
    cleanUpdates.won_at = now
  } else if (updates.status === 'Lost' && !updates.lost_at) {
    cleanUpdates.lost_at = now
  }

  // 1. Try Supabase
  try {
    const supabase = await createSupabaseServerClient()
    const isPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('your-project-id')
    
    if (!isPlaceholder) {
      await supabase.from('leads').update(cleanUpdates).eq('id', id)
    }
  } catch (err) {
    console.warn('Supabase updateLead exception:', err)
  }

  // 2. Update local store
  const leads = readLocalLeads()
  const idx = leads.findIndex((l) => l.id === id)
  if (idx === -1) return null

  leads[idx] = { ...leads[idx], ...cleanUpdates }
  writeLocalLeads(leads)
  return leads[idx]
}

/**
 * Calculate live metrics from actual database records
 */
export async function getLeadMetrics(): Promise<LeadMetrics> {
  const leads = await getLeads()
  const now = new Date()

  // Start of today in local time
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime()

  // Start of this week (Monday)
  const day = now.getDay()
  const diff = now.getDate() - day + (day === 0 ? -6 : 1) // adjust when day is sunday
  const startOfWeek = new Date(now.setDate(diff))
  startOfWeek.setHours(0, 0, 0, 0)
  const startOfWeekTs = startOfWeek.getTime()

  const endOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59).getTime()

  let newLeads = 0
  let leadsToday = 0
  let leadsThisWeek = 0
  let openOpportunities = 0
  let won = 0
  let followUpsDue = 0

  leads.forEach((l) => {
    const createdTs = new Date(l.created_at).getTime()
    const status = l.status

    if (status === 'New') {
      newLeads++
    }

    if (createdTs >= startOfToday) {
      leadsToday++
    }

    if (createdTs >= startOfWeekTs) {
      leadsThisWeek++
    }

    if (['Contacted', 'Qualified', 'Quote Required', 'Quote Sent'].includes(status)) {
      openOpportunities++
    }

    if (status === 'Won') {
      won++
    }

    if (l.next_follow_up_at) {
      const followUpTs = new Date(l.next_follow_up_at).getTime()
      if (followUpTs <= endOfToday && status !== 'Won' && status !== 'Lost' && status !== 'Spam') {
        followUpsDue++
      }
    }
  })

  return {
    newLeads,
    leadsToday,
    leadsThisWeek,
    openOpportunities,
    won,
    followUpsDue,
    total: leads.length,
  }
}
