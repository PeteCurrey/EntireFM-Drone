// lib/lead-scoring.ts

export type LeadQuality = 'Hot' | 'Qualified' | 'Nurture' | 'Low Intent'

export interface LeadScoreResult {
  score: number
  quality: LeadQuality
  breakdown: {
    intent: number
    clarity: number
    value: number
    readiness: number
    strategic: number
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function calculateLeadScore(data: any): LeadScoreResult {
  let intent = 0
  let clarity = 0
  let value = 0
  let readiness = 0
  let strategic = 0

  // 1. Commercial Intent (Max 25)
  if (data.name && data.email) intent += 10
  if (data.serviceInterest !== 'Not sure yet') intent += 5
  if (data.packageInterest !== 'Not sure yet') intent += 5
  if (data.description && data.description.length > 50) intent += 5

  // 2. Project Clarity (Max 20)
  if (data.location) clarity += 5
  if (data.siteType || data.town) clarity += 5
  if (data.deliverables && data.deliverables.length > 0) clarity += 5
  if (data.outcomes && data.outcomes.length > 0) clarity += 5

  // 3. Commercial Value (Max 20)
  // Higher value for technical or repeat services
  const highValueServices = ['surveying-mapping', 'construction-monitoring', 'lidar-point-cloud-surveys', 'tfts-3d']
  if (highValueServices.includes(data.serviceInterest)) value += 10
  if (data.deliverables?.includes('Volume report') || data.deliverables?.includes('Point cloud')) value += 5
  if (data.budget && data.budget !== 'Not sure yet' && data.budget !== 'Under £500') value += 5

  // 4. Urgency / Readiness (Max 15)
  if (data.timing === 'Urgent / as soon as possible') readiness += 7
  if (data.isUrgent === 'Yes') readiness += 4
  if (data.phone) readiness += 4

  // 5. Strategic Fit (Max 20)
  const prioritySectors = ['facilities-management', 'construction', 'utilities', 'insurance']
  if (prioritySectors.includes(data.sector)) strategic += 10
  if (data.packageInterest && data.packageInterest !== 'Not sure yet') strategic += 5
  const premiumOutputs = ['TFTS 3D', '3D model', 'Point cloud', 'Digital twin-style viewer']
  if (data.deliverables?.some((d: string) => premiumOutputs.includes(d))) strategic += 5

  const totalScore = intent + clarity + value + readiness + strategic
  
  let quality: LeadQuality = 'Low Intent'
  if (totalScore >= 80) quality = 'Hot'
  else if (totalScore >= 60) quality = 'Qualified'
  else if (totalScore >= 35) quality = 'Nurture'

  return {
    score: totalScore,
    quality,
    breakdown: {
      intent,
      clarity,
      value,
      readiness,
      strategic
    }
  }
}
