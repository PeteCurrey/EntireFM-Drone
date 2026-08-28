// lib/brand.ts — Single source of truth for TFTS Drone brand constants
export const BRAND = {
  name: 'TFTS Drone',
  shortName: 'TFTS',
  fullName: 'Technical Flight & Thermal Surveys',
  domain: 'https://tfts.co.uk',
  email: 'enquiries@tfts.co.uk',
  parentCompany: 'EntireFM Ltd',
  parentUrl: 'https://www.entirefm.com',
} as const

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tfts.co.uk'
