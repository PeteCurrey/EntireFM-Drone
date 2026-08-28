-- supabase/migrations/20260828_create_leads_table.sql
-- Canonical Leads table for TFTS Drone

CREATE TABLE IF NOT EXISTS public.leads (
    id TEXT PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    first_name TEXT,
    last_name TEXT,
    full_name TEXT NOT NULL,
    company_name TEXT,

    email TEXT NOT NULL,
    phone TEXT,

    service TEXT NOT NULL DEFAULT 'Commercial Drone Survey',
    service_detail TEXT,

    message TEXT,

    site_address TEXT,
    postcode TEXT,

    lead_source TEXT NOT NULL DEFAULT 'website_form',
    source_page TEXT NOT NULL DEFAULT '/',
    referrer TEXT DEFAULT 'direct',

    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    utm_term TEXT,
    utm_content TEXT,

    status TEXT NOT NULL DEFAULT 'New',
    priority TEXT NOT NULL DEFAULT 'Medium',

    assigned_to TEXT,
    admin_notes TEXT,

    last_contacted_at TIMESTAMPTZ,
    next_follow_up_at TIMESTAMPTZ,

    won_at TIMESTAMPTZ,
    lost_at TIMESTAMPTZ,
    lost_reason TEXT,

    metadata JSONB DEFAULT '{}'::jsonb
);

-- Indexes for lightning fast queries
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_priority ON public.leads(priority);
CREATE INDEX IF NOT EXISTS idx_leads_service ON public.leads(service);
CREATE INDEX IF NOT EXISTS idx_leads_next_follow_up ON public.leads(next_follow_up_at);

-- Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users (admin) full access
CREATE POLICY "Admins can view and edit all leads" 
    ON public.leads 
    FOR ALL 
    TO authenticated 
    USING (true) 
    WITH CHECK (true);

-- Allow public anonymous inserts for website contact forms
CREATE POLICY "Public can submit contact enquiries" 
    ON public.leads 
    FOR INSERT 
    TO anon 
    WITH CHECK (true);
