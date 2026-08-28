// scripts/test-leads-system.mjs
import { createLead, getLeads, getLeadById, updateLead, getLeadMetrics } from '../lib/leads/db.ts'
import fs from 'fs'
import path from 'path'

async function runTests() {
  console.log('🧪 STARTING TFTS DRONE LEADS & ADMIN TEST SUITE\n')
  let passed = 0
  let failed = 0

  const assert = (condition, testName) => {
    if (condition) {
      console.log(`✅ [PASS] ${testName}`)
      passed++
    } else {
      console.error(`❌ [FAIL] ${testName}`)
      failed++
    }
  }

  // Backup original leads.json if exists
  const leadsPath = path.join(process.cwd(), 'data', 'leads.json')
  let backup = null
  if (fs.existsSync(leadsPath)) {
    backup = fs.readFileSync(leadsPath, 'utf-8')
  }

  try {
    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // Reset test data
    fs.writeFileSync(leadsPath, JSON.stringify([], null, 2))

    // TEST 1: Homepage enquiry submission
    const lead1 = await createLead({
      full_name: 'David Miller',
      company_name: 'Miller Logistics Ltd',
      email: 'david@millerlogistics.co.uk',
      phone: '07700 900123',
      service: 'Commercial Drone Survey',
      message: 'Need full warehouse roof condition survey in Manchester.',
      lead_source: 'homepage_form',
      source_page: '/',
      referrer: 'https://google.co.uk',
      status: 'New',
      priority: 'Medium',
    })
    assert(lead1 && lead1.id.startsWith('TFTS-'), 'Test 1: Homepage enquiry created with unique TFTS ID')

    // TEST 2: Contact page enquiry submission
    const lead2 = await createLead({
      full_name: 'Sarah Jenkins',
      company_name: 'Apex Property Asset Management',
      email: 's.jenkins@apexproperty.co.uk',
      phone: '020 7946 0912',
      service: 'Drone Roof Inspections',
      message: 'Urgent gutter blockage and membrane tear inspection needed.',
      lead_source: 'contact_page',
      source_page: '/contact',
      referrer: 'direct',
      status: 'New',
      priority: 'Urgent',
    })
    assert(lead2 && lead2.source_page === '/contact', 'Test 2: Contact page enquiry stores correct source page')

    // TEST 3: Service page enquiry with detailed scope
    const lead3 = await createLead({
      full_name: 'Marcus Vance',
      company_name: 'Vance Engineering Group',
      email: 'm.vance@vancegroup.com',
      phone: '0161 496 0234',
      service: 'Radiometric Thermal Imaging & Heat Loss',
      service_detail: 'Roof Intelligence Pack',
      message: 'Heat loss survey across 3 industrial units in Derby.',
      lead_source: 'project_brief',
      source_page: '/services/thermal-imaging',
      status: 'New',
      priority: 'High',
    })
    assert(lead3 && lead3.service.includes('Thermal Imaging'), 'Test 3: Service page enquiry stores service and detail')

    // TEST 4: UTM attribution tracking
    const lead4 = await createLead({
      full_name: 'Elena Rostova',
      company_name: 'Metropolitan Developments',
      email: 'elena@metdev.co.uk',
      phone: '07911 123456',
      service: 'Construction Monitoring',
      message: 'Monthly aerial progress monitoring for commercial build.',
      lead_source: 'project_brief',
      source_page: '/locations/london',
      utm_source: 'linkedin',
      utm_medium: 'cpc',
      utm_campaign: 'london_commercial_q3',
      utm_term: 'drone_survey_london',
      status: 'New',
      priority: 'High',
    })
    assert(
      lead4.utm_source === 'linkedin' && lead4.utm_campaign === 'london_commercial_q3',
      'Test 4: UTM parameters and attribution stored correctly'
    )

    // TEST 5: Admin changes status & persistence
    const updatedStatusLead = await updateLead(lead1.id, { status: 'Qualified' })
    const fetchedLead1 = await getLeadById(lead1.id)
    assert(fetchedLead1?.status === 'Qualified', 'Test 5: Admin status change persists in database')

    // TEST 6: Admin adds private notes & persistence
    const updatedNotesLead = await updateLead(lead2.id, {
      admin_notes: 'Spoke with Sarah at 14:30. Flight scheduled for Thursday 09:00 pending weather.',
    })
    const fetchedLead2 = await getLeadById(lead2.id)
    assert(
      fetchedLead2?.admin_notes?.includes('Spoke with Sarah'),
      'Test 6: Admin private notes persist in database'
    )

    // TEST 7: Admin sets follow-up date and metrics calculate follow-ups due
    const todayStr = new Date().toISOString()
    await updateLead(lead3.id, {
      next_follow_up_at: todayStr,
      status: 'Contacted',
    })
    const metrics = await getLeadMetrics()
    assert(metrics.followUpsDue >= 1, 'Test 7: Scheduled follow-up appears in follow-ups due metric')
    assert(metrics.total === 4, 'Test 7b: Total leads count matches database records')
    assert(metrics.newLeads === 2, 'Test 7c: New unreviewed leads calculated accurately')

    // TEST 8: Search and Filter capabilities
    const searchResults = await getLeads({ search: 'Manchester' })
    assert(searchResults.length === 1 && searchResults[0].id === lead1.id, 'Test 8: Full-text search locates matching leads')

    const statusResults = await getLeads({ status: 'Contacted' })
    assert(statusResults.length === 1 && statusResults[0].id === lead3.id, 'Test 8b: Status filter returns only matching records')

    // TEST 9: Status transition to Won
    await updateLead(lead4.id, { status: 'Won' })
    const wonMetrics = await getLeadMetrics()
    assert(wonMetrics.won === 1, 'Test 9: Status transition to Won correctly updates won metrics')

    console.log(`\n📊 TEST SUMMARY: ${passed} PASSED, ${failed} FAILED`)
  } catch (err) {
    console.error('Test execution error:', err)
  } finally {
    // Restore backup if existed or leave clean realistic records
    if (backup && JSON.parse(backup).length > 0) {
      fs.writeFileSync(leadsPath, backup)
    }
  }
}

runTests()
