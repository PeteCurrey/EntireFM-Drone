import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'
import { LenisProvider } from '@/lib/lenis'
import TrackingProvider from '@/components/analytics/TrackingProvider'
import PublicLayoutWrapper from '@/components/layout/PublicLayoutWrapper'
import { SITE_URL } from '@/lib/brand'

// Work Sans — TFTS Drone brand typeface
// 200 = dominant display/headlines, 300 = supporting UI, 400 = body copy, 700 = wordmark
const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '700'],
  display: 'swap',
  variable: '--font-work-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s | TFTS Drone',
    default: 'Commercial Drone Surveys & Inspections | TFTS Drone',
  },
  description: 'TFTS Drone (Technical Flight & Thermal Surveys) provides commercial drone inspections, roof surveys, thermal imaging, mapping, construction monitoring and high-fidelity 3D capture across the UK.',
  keywords: 'drone inspection, aerial survey, drone roof survey, thermal imaging drone, UAV surveying, drone mapping, construction monitoring, drone services UK, TFTS Drone, Technical Flight and Thermal Surveys',
  metadataBase: new URL('https://tfts.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Commercial Drone Surveys & Inspections | TFTS Drone',
    description: 'Commercial drone inspections, roof surveys, thermal imaging, mapping and high-fidelity 3D capture across the UK. TFTS Drone — Technical Flight & Thermal Surveys.',
    url: 'https://tfts.co.uk',
    siteName: 'TFTS Drone',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'TFTS Drone — Technical Flight & Thermal Surveys',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Drone Surveys & Inspections | TFTS Drone',
    description: 'Commercial drone inspections, roof surveys, thermal imaging and 3D capture across the UK. TFTS Drone.',
    images: ['/images/og-default.jpg'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://tfts.co.uk/#organization',
  name: 'TFTS Drone',
  alternateName: 'Technical Flight & Thermal Surveys',
  description: 'Specialist commercial drone inspection, thermal imaging, surveying and 3D digital capture across the UK.',
  url: 'https://tfts.co.uk',
  parentOrganization: {
    '@type': 'Organization',
    name: 'EntireFM Ltd',
    url: 'https://www.entirefm.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Drone Survey & Inspection Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drone Roof Inspection' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Thermal Drone Survey' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aerial Photography & Videography' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drone Surveying & Mapping' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Construction Progress Monitoring' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'TFTS 3D Interactive Capture' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Solar PV Drone Inspection' } },
    ],
  },
  sameAs: [
    'https://www.entirefm.com',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://tfts.co.uk/#website',
  name: 'TFTS Drone',
  url: 'https://tfts.co.uk',
  publisher: { '@id': 'https://tfts.co.uk/#organization' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the weather constraints for drone flight?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our enterprise platforms are IP55 rated, allowing operation in light rain and winds up to 12m/s. For high-precision surveying or thermal auditing, dry conditions provide maximum data integrity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have permission for night drone operations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drone operations at night are possible subject to pilot qualification, site-specific risk assessment and operational safety requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly is drone survey data delivered?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard visual data is delivered within defined working days. Complex outputs such as 3D models or thermal analysis typically require 3–5 business days for processing and quality assurance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you insured for commercial drone environments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. TFTS Drone carries comprehensive Public Liability Insurance specifically for commercial UAV operations in industrial and urban environments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle NOTAMs and airspace permissions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As part of mission planning, we manage all necessary NOTAMs, landowner permissions and stakeholder notifications to ensure a fully compliant deployment.',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={workSans.variable}
    >
      <head>
        {/* LCP hero poster preload — server-rendered for maximum speed */}
        <link
          rel="preload"
          as="image"
          href="/images/hero_poster.jpg"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="bg-dark text-white selection:bg-accent selection:text-white">
        <TrackingProvider>
          <LenisProvider>
            <PublicLayoutWrapper>
              {children}
            </PublicLayoutWrapper>
          </LenisProvider>
        </TrackingProvider>
      </body>
    </html>
  )
}
