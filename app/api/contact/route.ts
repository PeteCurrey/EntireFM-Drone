import { NextResponse } from 'next/server'
import { createLead } from '@/lib/leads/db'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'enquiries@tfts.co.uk'

// Simple email regex for server-side validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  try {
    const rawData = await req.json()

    // 1. Honeypot anti-spam protection
    // If a bot fills out the hidden honeypot fields (_hp or website), silently succeed without storing spam
    if (rawData._hp || rawData.website_url_hp || rawData.bot_check) {
      console.warn('Bot submission blocked via honeypot')
      return NextResponse.json({ success: true, message: 'Enquiry received' })
    }

    // 2. Server-Side Validation
    const email = (rawData.email || rawData.emailAddress || '').trim()
    const name = (rawData.name || rawData.fullName || rawData.full_name || '').trim()

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'A valid email address is required.' },
        { status: 400 }
      )
    }

    if (!name && !rawData.company && !rawData.phone) {
      return NextResponse.json(
        { error: 'Please provide your name or contact details.' },
        { status: 400 }
      )
    }

    // 3. Extract and normalize lead data
    const phone = (rawData.phone || rawData.telephone || rawData.mobile || '').trim()
    const company = (rawData.company || rawData.companyName || rawData.organisation || '').trim()
    const service = (rawData.service || rawData.serviceInterest || rawData.projectType || 'Commercial Drone Survey').trim()
    const message = (rawData.message || rawData.projectDescription || rawData.message_body || rawData.notes || '').trim()
    const siteAddress = (rawData.siteAddress || rawData.site_address || rawData.location || rawData.address || '').trim()
    const postcode = (rawData.postcode || rawData.zip || '').trim()
    const leadType = rawData.type || 'standard'

    // 4. Attribution extraction
    const attr = rawData.attribution || {}
    const referrerHeader = req.headers.get('referer') || ''

    // Derive source page from attribution or headers
    let sourcePage = rawData.source_page || attr.last_touch_url || attr.first_touch_url || ''
    if (!sourcePage && referrerHeader) {
      try {
        const parsed = new URL(referrerHeader)
        sourcePage = parsed.pathname
      } catch {
        sourcePage = referrerHeader
      }
    }
    if (!sourcePage) {
      sourcePage = '/'
    }

    const leadSource =
      leadType === 'brief'
        ? 'project_brief'
        : leadType === 'estimator_lead'
        ? 'cost_estimator'
        : leadType === 'lead_magnet'
        ? 'lead_magnet'
        : 'contact_form'

    // Determine initial priority based on message / service
    let priority: 'Low' | 'Medium' | 'High' | 'Urgent' = 'Medium'
    if (rawData.urgency === 'urgent' || (message.toLowerCase().includes('urgent') || message.toLowerCase().includes('emergency'))) {
      priority = 'Urgent'
    } else if (rawData.urgency === 'week' || leadType === 'brief') {
      priority = 'High'
    }

    // 5. Persist to canonical database
    const savedLead = await createLead({
      full_name: name || 'Direct Enquiry',
      company_name: company,
      email,
      phone,
      service,
      service_detail: rawData.packageInterest || rawData.bundle || rawData.asset_title || '',
      message,
      site_address: siteAddress,
      postcode,
      lead_source: leadSource,
      source_page: sourcePage,
      referrer: attr.referrer || referrerHeader || 'direct',
      utm_source: attr.utm_source || rawData.utm_source,
      utm_medium: attr.utm_medium || rawData.utm_medium,
      utm_campaign: attr.utm_campaign || rawData.utm_campaign,
      utm_term: attr.utm_term || rawData.utm_term,
      utm_content: attr.utm_content || rawData.utm_content,
      status: 'New',
      priority,
      metadata: {
        ...rawData,
        _processed_at: new Date().toISOString(),
      },
    })

    // 6. Send optional email alert via Resend
    if (resend) {
      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'TFTS Drone <onboarding@resend.dev>',
          to: ADMIN_EMAIL,
          subject: `[TFTS DRONE ENQUIRY] ${service} — ${name || company || email}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; color: #111827; padding: 32px; border: 1px solid #e5e7eb; border-radius: 4px;">
              <div style="border-bottom: 2px solid #0066ff; padding-bottom: 16px; margin-bottom: 24px;">
                <h1 style="color: #0066ff; font-size: 20px; font-weight: 700; margin: 0; text-transform: uppercase; letter-spacing: 0.05em;">TFTS Drone Enquiry Received</h1>
                <p style="color: #6b7280; font-size: 13px; margin: 4px 0 0 0;">Lead ID: ${savedLead.id}</p>
              </div>

              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 140px;">Contact:</td>
                  <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #111827;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Company:</td>
                  <td style="padding: 8px 0; font-size: 14px; color: #111827;">${company || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Email:</td>
                  <td style="padding: 8px 0; font-size: 14px; color: #0066ff;"><a href="mailto:${email}" style="color: #0066ff; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Phone:</td>
                  <td style="padding: 8px 0; font-size: 14px; color: #111827;"><a href="tel:${phone}" style="color: #111827; text-decoration: none;">${phone || 'N/A'}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Service:</td>
                  <td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #111827;">${service}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Source Page:</td>
                  <td style="padding: 8px 0; font-size: 14px; color: #4b5563;">${sourcePage}</td>
                </tr>
              </table>

              ${
                message
                  ? `
                <div style="background: #f9fafb; border-left: 3px solid #0066ff; padding: 16px; margin-bottom: 24px;">
                  <strong style="color: #374151; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Enquiry Details:</strong>
                  <p style="color: #1f2937; font-size: 14px; line-height: 1.6; margin: 8px 0 0 0; white-space: pre-wrap;">${message}</p>
                </div>
              `
                  : ''
              }

              <div style="border-top: 1px solid #e5e7eb; padding-top: 16px; text-align: center;">
                <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://tfts.co.uk'}/admin/leads/${savedLead.id}" style="display: inline-block; background: #0066ff; color: #ffffff; padding: 10px 20px; font-size: 13px; font-weight: 600; text-decoration: none; border-radius: 2px;">
                  Open in TFTS Admin →
                </a>
              </div>
            </div>
          `,
        })
      } catch (emailErr) {
        console.error('Failed to send Resend email notification:', emailErr)
      }
    }

    return NextResponse.json({
      success: true,
      leadId: savedLead.id,
      message: 'Thank you. Your enquiry has been received. A member of the TFTS team will contact you shortly.',
    })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred while submitting your enquiry. Please try again.' },
      { status: 500 }
    )
  }
}
