import { MetadataRoute } from 'next'
import { servicesData } from '@/lib/services-data'
import { locationsData } from '@/lib/locations-data'
import { blogPosts } from '@/lib/blog-posts'

const BASE_URL = 'https://tfts.co.uk'

const services = servicesData.map(s => s.slug)
const locations = locationsData.map(l => l.slug)

const industries = [
  'construction', 'utilities', 'agriculture', 'real-estate',
  'insurance', 'events', 'infrastructure', 'facilities-management',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/sectors`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/tfts-3d`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/portfolio`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/resources`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/bundles`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/brief`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/cost-estimator`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/project-brief-assistant`, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/choose-your-output`, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/sample-deliverables`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/operations-standard`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/showreel`, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE_URL}/pricing-guidance`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/fleet`, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE_URL}/team`, changeFrequency: 'monthly', priority: 0.65 },
  ]

  const resourcePages: MetadataRoute.Sitemap = blogPosts.map(p => ({
    url: `${BASE_URL}/resources/${p.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const servicePages: MetadataRoute.Sitemap = services.map(s => ({
    url: `${BASE_URL}/services/${s}`,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const locationPages: MetadataRoute.Sitemap = locations.map(l => ({
    url: `${BASE_URL}/locations/${l}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))


  const sectorPages: MetadataRoute.Sitemap = [
    'construction', 'facilities-management', 'commercial-property',
    'utilities-energy', 'solar-renewable-energy', 'agriculture-rural-estates',
    'events-venues-media', 'insurance-loss-adjusters', 'infrastructure',
    'heritage-conservation', 'surveyors',
  ].map(s => ({
    url: `${BASE_URL}/sectors/${s}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // NOTE: Programmatic cross pages (service × location) are omitted from sitemap
  // and set to noindex until audited per Phase 1 Technical SEO policy.

  return [
    ...staticPages,
    ...servicePages,
    ...resourcePages,
    ...locationPages,
    ...sectorPages,
  ]
}
