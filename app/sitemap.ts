import { MetadataRoute } from 'next'
import { servicesData } from '@/lib/services-data'
import { locationsData } from '@/lib/locations-data'
import { blogPosts } from '@/lib/blog-posts'

const BASE_URL = 'https://drone.entirefm.com'

const services = servicesData.map(s => s.slug)
const locations = locationsData.map(l => l.slug)

const industries = [
  'construction', 'utilities', 'agriculture', 'real-estate',
  'insurance', 'events', 'infrastructure', 'facilities-management',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE_URL}/fleet`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/team`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/portfolio`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/resources`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/brief`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/cost-estimator`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${BASE_URL}/project-brief-assistant`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${BASE_URL}/choose-your-output`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/sample-deliverables`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${BASE_URL}/operations-standard`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${BASE_URL}/showreel`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/gaussian-splat`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${BASE_URL}/bundles`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/sectors`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${BASE_URL}/pricing-guidance`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.75 },
  ] as MetadataRoute.Sitemap

  const resourcePages = blogPosts.map(p => ({
    url: `${BASE_URL}/resources/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const servicePages = services.map(s => ({
    url: `${BASE_URL}/services/${s}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const locationPages = locations.map(l => ({
    url: `${BASE_URL}/locations/${l}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const industryPages = industries.map(i => ({
    url: `${BASE_URL}/industries/${i}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const sectorPages = [
    'construction', 'facilities-management', 'commercial-property',
    'utilities-energy', 'solar-renewable-energy', 'agriculture-rural-estates',
    'events-venues-media', 'insurance-loss-adjusters', 'infrastructure',
    'heritage-conservation', 'surveyors',
  ].map(s => ({
    url: `${BASE_URL}/sectors/${s}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Cross pages: /drone-inspection-london etc — highest commercial value
  const crossPages = services.flatMap(s =>
    locations.map(l => ({
      url: `${BASE_URL}/${s}-${l}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  )

  return [
    ...staticPages,
    ...servicePages,
    ...resourcePages,
    ...locationPages,
    ...industryPages,
    ...sectorPages,
    ...crossPages,
  ]
}
