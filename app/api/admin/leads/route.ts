import { NextResponse } from 'next/server'
import { getLeads, createLead, updateLead } from '@/lib/leads/db'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const status = searchParams.get('status') || undefined
    const search = searchParams.get('search') || undefined
    const priority = searchParams.get('priority') || undefined
    const service = searchParams.get('service') || undefined
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!, 10) : undefined

    const leads = await getLeads({ status, search, priority, service, limit })
    return NextResponse.json(leads)
  } catch (error) {
    console.error('Admin API getLeads error:', error)
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const newLead = await createLead(body)
    return NextResponse.json(newLead, { status: 201 })
  } catch (error) {
    console.error('Admin API createLead error:', error)
    return NextResponse.json({ error: 'Failed to create lead' }, { status: 500 })
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json()
    const { id, ...updates } = body

    if (!id) {
      return NextResponse.json({ error: 'Lead ID is required' }, { status: 400 })
    }

    const updated = await updateLead(id, updates)
    if (!updated) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 })
    }

    return NextResponse.json(updated)
  } catch (error) {
    console.error('Admin API updateLead error:', error)
    return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 })
  }
}
