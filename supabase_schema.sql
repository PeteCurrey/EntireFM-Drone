-- Database Schema for EntireFM Drone
-- Run this in the Supabase SQL Editor

-- 1. Enquiries Table (Contact Form)
CREATE TABLE IF NOT EXISTS enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' -- 'new', 'responded', 'archived'
);

-- 2. Project Briefs Table (Interactive Brief Tool)
CREATE TABLE IF NOT EXISTS project_briefs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  missionType TEXT NOT NULL,
  location TEXT,
  scale TEXT,
  deadline TEXT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  notes TEXT,
  status TEXT DEFAULT 'pending' -- 'pending', 'actioned', 'declined'
);

-- 3. Case Studies Table (Dynamic Portfolio - Optional Upgrade)
CREATE TABLE IF NOT EXISTS case_studies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  title TEXT NOT NULL,
  client TEXT,
  industry TEXT,
  location TEXT,
  year TEXT,
  image_url TEXT,
  description TEXT
);

-- Basic Row Level Security (RLS) - Adjust as needed for production
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_briefs ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;

-- Allow public inserts for forms
CREATE POLICY "Allow public insert to enquiries" ON enquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert to project_briefs" ON project_briefs FOR INSERT WITH CHECK (true);

-- Admin access (Simplified)
-- Replace 'authenticated' with specific admin roles in production
CREATE POLICY "Allow authenticated read to enquiries" ON enquiries FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated read to project_briefs" ON project_briefs FOR SELECT TO authenticated USING (true);
