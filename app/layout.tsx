import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'
import { LenisProvider } from '@/lib/lenis'
import TrackingProvider from '@/components/analytics/TrackingProvider'
import PublicLayoutWrapper from '@/components/layout/PublicLayoutWrapper'

// Work Sans — EntireFM masterbrand typeface
// 200 = dominant display/headlines, 300 = supporting UI, 400 = body copy, 700 = FM wordmark bold
const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '700'],
  display: 'swap',
  variable: '--font-work-sans',
})

export const metadata: Metadata = {
  title: 'EntireFM Drone Services — Aerial Intelligence for Facilities & Engineering',
  description: 'EntireFM Drone delivers CAA-compliant aerial inspection, surveying, thermal imaging and site intelligence for property, construction, infrastructure and FM teams across the UK. Inspect. Identify. Remediate.',
  keywords: 'drone inspection, aerial photography, UAV surveying, drone mapping, facilities management, construction monitoring, drone services UK, CAA compliant, EntireFM',
  metadataBase: new URL('https://drone.entirefm.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'EntireFM Drone Services — Aerial Intelligence for Facilities & Engineering',
    description: 'CAA-compliant drone inspection, surveying, thermal imaging and site intelligence — integrated with facilities management and engineering delivery. Part of EntireFM.',
    url: 'https://drone.entirefm.com',
    siteName: 'EntireFM Drone Services',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'EntireFM Drone Services — Aerial Intelligence',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EntireFM Drone Services — Aerial Intelligence',
    description: 'CAA-compliant drone inspection, surveying, thermal imaging and site intelligence. Part of EntireFM.',
    images: ['/images/og-default.jpg'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://drone.entirefm.com',
  name: 'EntireFM Drone Services',
  description: 'Specialist aerial intelligence platform for facilities management, construction, infrastructure and property. Part of EntireFM.',
  url: 'https://drone.entirefm.com',
  parentOrganization: {
    '@type': 'Organization',
    name: 'EntireFM',
    url: 'https://www.entirefm.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Drone Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drone Inspection' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aerial Photography' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drone Surveying & Mapping' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Construction Monitoring' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Thermal Imaging' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agricultural Surveys' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Events Drone Coverage' } },
    ],
  },
  sameAs: [
    'https://www.entirefm.com',
    'https://www.entirefm.com/services/drone-services',
  ],
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
        text: 'Our enterprise assets like the Matrice 350 RTK are IP55 rated, allowing for operation in light rain and winds up to 12m/s. For high-precision surveying or thermal auditing, we recommend dry conditions for maximum data integrity.',
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
        text: 'Standard visual data is delivered within defined working days. Complex LiDAR point clouds or 3D digital twins typically require 3–5 business days for full processing and quality assurance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you insured for high-risk drone environments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We carry comprehensive Public Liability Insurance specifically tailored for commercial UAV operations in industrial and urban environments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle NOTAMs and permissions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As part of our mission planning, we manage all necessary NOTAMs, landowner permissions, and stakeholder notifications to ensure a fully compliant and friction-free deployment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does EntireFM Drone integrate with facilities management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EntireFM Drone can inspect an inaccessible asset by drone and then coordinate the physical repair, compliance record, client evidence and CAFM history — providing a complete inspect-to-remediate workflow under one organisation.',
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
