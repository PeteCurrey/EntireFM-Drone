// app/locations/london/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  MapPin,
  ArrowRight,
  ShieldCheck,
  Target,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Layers,
  Zap,
  FileText,
  Building2,
  Compass,
  Eye,
  Camera,
  Activity,
  Box,
  Cpu,
} from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import FAQAccordion from '@/components/ui/FAQAccordion'
import VideoBackground from '@/components/ui/VideoBackground'

export const metadata: Metadata = {
  title: 'Commercial Drone Services London | TFTS Drone',
  description:
    'Commercial drone surveys and inspections across London for property, facilities, construction and infrastructure. Roof, thermal, façade, mapping and 3D capture by TFTS Drone.',
  alternates: {
    canonical: 'https://tfts.co.uk/locations/london',
  },
  openGraph: {
    title: 'Commercial Drone Services London | TFTS Drone',
    description:
      'Commercial drone surveys and inspections across London for property, facilities, construction and infrastructure. Roof, thermal, façade, mapping and 3D capture by TFTS Drone.',
    url: 'https://tfts.co.uk/locations/london',
    siteName: 'TFTS Drone',
    images: [
      {
        url: '/images/inspection_poster.png',
        width: 1200,
        height: 630,
        alt: 'TFTS Drone — Commercial Drone Services London',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Drone Services London | TFTS Drone',
    description:
      'Commercial drone surveys and inspections across London for property, facilities, construction and infrastructure. Roof, thermal, façade, mapping and 3D capture by TFTS Drone.',
    images: ['/images/inspection_poster.png'],
  },
}

const londonFaqs = [
  {
    question: 'Can drones be used for commercial building inspections in London?',
    answer:
      'Yes. Drones are routinely deployed across London to inspect commercial buildings, office towers, logistics assets, retail centres, and infrastructure. They provide high-resolution visual and thermal evidence of roof coverings, cladding systems, parapets, and plant equipment without the immediate requirement for costly and disruptive scaffolding, cherry pickers, or rope access.',
  },
  {
    question: 'Can TFTS carry out drone roof surveys in central London?',
    answer:
      'Yes. We operate across Central London, including the City of London, Westminster, and the South Bank. Central London involves complex airspace including NATS-controlled airspace and specific restricted areas (such as EGR157/EGR158). We manage all necessary airspace notifications, flight planning, and site-specific risk assessments (RAMS) to ensure fully compliant operations.',
  },
  {
    question: 'What information is required before planning a London drone survey?',
    answer:
      'To plan a London drone survey, we require the site address and postcode, an outline of the asset or areas requiring inspection (e.g. whole roof, specific elevations, solar array), any known site access or rooftop constraints, and the target deliverable format. Our operations team conducts a preliminary desk-based airspace and hazard assessment before confirming operational feasibility.',
  },
  {
    question: 'Can a drone survey reduce the need for scaffolding?',
    answer:
      'A drone survey significantly reduces the need for access equipment during the initial inspection, condition assessment, and defect identification phase. It provides surveyors and asset managers with clear visual evidence to diagnose problems and target physical repairs accurately. Intrusive physical testing or remediation works may still require physical access, but the scope and duration can be greatly reduced.',
  },
  {
    question: 'Can TFTS provide thermal drone surveys in London?',
    answer:
      'Yes. We utilise high-resolution radiometric thermal cameras to conduct aerial building envelope thermography, flat roof moisture ingress detection, and commercial rooftop solar PV inspections across London. Thermal surveys are planned during specific temperature and weather windows to deliver accurate, quantifiable delta-T measurements.',
  },
  {
    question: 'Can you inspect commercial façades and cladding?',
    answer:
      'Yes. Our drones are equipped with high-resolution optical zoom sensors capable of capturing detailed imagery of cladding panels, curtain walling, mastic seals, louvres, and masonry joints from a safe standoff distance. This visual data supports EWS1 assessments, routine condition monitoring, and post-storm defect reporting.',
  },
  {
    question: 'What deliverables can be provided after the survey?',
    answer:
      'Deliverables are defined around the purpose of the survey. Standard outputs include high-resolution georeferenced inspection imagery, structured photographic defect schedules, radiometric thermal datasets, 2D orthomosaics, 3D photogrammetric point clouds, and interactive TFTS 3D digital site models.',
  },
  {
    question: 'Can TFTS survey multiple buildings across a London property portfolio?',
    answer:
      'Yes. We regularly deliver structured multi-site survey programmes for commercial managing agents, REITs, and corporate estate directors with distributed London portfolios. We coordinate scheduling geographically to maximise operational efficiency and supply uniform, standardized reporting across all assets.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://tfts.co.uk/locations/london#webpage',
    url: 'https://tfts.co.uk/locations/london',
    name: 'Commercial Drone Services London | TFTS Drone',
    description:
      'Commercial drone surveys and inspections across London for property, facilities, construction and infrastructure. Roof, thermal, façade, mapping and 3D capture by TFTS Drone.',
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://tfts.co.uk/#website',
      name: 'TFTS Drone',
      url: 'https://tfts.co.uk',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': 'https://tfts.co.uk/locations/london#breadcrumb',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://tfts.co.uk',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Locations',
        item: 'https://tfts.co.uk/locations',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'London',
        item: 'https://tfts.co.uk/locations/london',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://tfts.co.uk/locations/london#service',
    name: 'Commercial Drone Services in London',
    serviceType: 'Commercial Drone Surveys & Inspections',
    description:
      'Technical aerial inspection, radiometric thermal imaging, façade surveys, construction progress monitoring, photogrammetry and TFTS 3D digital capture across London and Greater London.',
    url: 'https://tfts.co.uk/locations/london',
    provider: {
      '@type': 'Organization',
      '@id': 'https://tfts.co.uk/#organization',
      name: 'TFTS Drone',
      alternateName: 'Technical Flight & Thermal Surveys',
      url: 'https://tfts.co.uk',
      logo: 'https://tfts.co.uk/images/og-default.jpg',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'commercial sales',
        email: 'enquiries@tfts.co.uk',
      },
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'London',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Greater London',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Commercial Drone Services London',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Drone Roof Surveys London',
            url: 'https://tfts.co.uk/services/roof-inspections',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Drone Inspections London',
            url: 'https://tfts.co.uk/services/drone-inspection',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Thermal Drone Surveys London',
            url: 'https://tfts.co.uk/services/thermal-imaging',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Solar PV Drone Inspections London',
            url: 'https://tfts.co.uk/services/solar-panel-inspections',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Façade & Cladding Inspections London',
            url: 'https://tfts.co.uk/services/facade-inspections',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Drone Surveying & Mapping London',
            url: 'https://tfts.co.uk/services/surveying-mapping',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Construction Progress Monitoring London',
            url: 'https://tfts.co.uk/services/construction-monitoring',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'TFTS 3D Spatial Capture London',
            url: 'https://tfts.co.uk/tfts-3d',
          },
        },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://tfts.co.uk/locations/london#faq',
    mainEntity: londonFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  },
]

export default function LondonLocationPage() {
  return (
    <main className="bg-dark text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Semantic Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-dark/80 border-b border-white/5 py-4 px-8 md:px-20 relative z-20">
        <ol className="max-w-[1400px] mx-auto flex items-center gap-2 font-ui text-[10px] tracking-[0.3em] uppercase text-white/40">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3 h-3" />
          </li>
          <li>
            <Link href="/locations" className="hover:text-white transition-colors">
              Locations
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3 h-3" />
          </li>
          <li className="text-accent">London</li>
        </ol>
      </nav>

      {/* 1. HERO SECTION — Full Viewport Cinematic */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-8 md:px-20 py-24 overflow-hidden">
        <VideoBackground
          src="/videos/inspection.mp4"
          poster="/images/inspection_poster.png"
          alt="Commercial drone surveying over London commercial property"
          brightness={0.35}
          saturation={1.1}
          isHero={true}
        />
        <div className="grid-lines opacity-40" />

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-[1px] bg-accent" />
              <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">
                Greater London · 32 Boroughs · Commercial Aviation Standard
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-[clamp(2.5rem,5.5vw,5rem)] font-extralight tracking-[-0.04em] leading-[1.0] text-white mb-8 uppercase text-balance">
              Commercial Drone Services <br />
              <span className="text-accent underline underline-offset-8 decoration-accent/30">
                in London
              </span>
            </h1>

            {/* Supporting Line */}
            <p className="text-base sm:text-lg md:text-xl font-light text-white/70 max-w-2xl leading-relaxed mb-12">
              Technical aerial inspection, thermal imaging, mapping and 3D site intelligence for London&apos;s commercial property and built environment.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 mb-16">
              <Link
                href="/brief?location=london&source=london-hero"
                className="group bg-accent text-white px-8 py-5 text-sm font-medium rounded-[2px] flex items-center justify-center gap-3 hover:bg-accent-light transition-all shadow-[0_0_30px_rgba(0,102,255,0.3)]"
              >
                Discuss a Survey <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                href="#services"
                className="border border-white/20 text-white font-ui text-[11px] tracking-[0.3em] uppercase px-8 py-5 hover:bg-white/10 transition-all text-center flex items-center justify-center"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Operational Trust Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 max-w-5xl">
            <div className="p-6 bg-dark/60 backdrop-blur-sm">
              <div className="font-display text-2xl text-accent mb-1">CAA</div>
              <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/50">
                Operational Authorisation
              </div>
            </div>
            <div className="p-6 bg-dark/60 backdrop-blur-sm">
              <div className="font-display text-2xl text-accent mb-1">GVC</div>
              <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/50">
                Qualified Remote Pilots
              </div>
            </div>
            <div className="p-6 bg-dark/60 backdrop-blur-sm">
              <div className="font-display text-2xl text-accent mb-1">NATS</div>
              <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/50">
                Airspace Coordination
              </div>
            </div>
            <div className="p-6 bg-dark/60 backdrop-blur-sm">
              <div className="font-display text-2xl text-accent mb-1">£5M+</div>
              <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/50">
                Aviation Liability
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTORY COMMERCIAL CONTEXT */}
      <section className="py-28 px-8 md:px-20 bg-[#0c0c0c] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="svc-tag mb-8">
              <SectionTag number="01" text="Capital Operations" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight leading-none mb-6">
              Specialist Aerial Intelligence <br />
              <span className="text-accent">Across Greater London</span>
            </h2>
            <p className="font-body text-base text-white/55 leading-relaxed mb-8">
              Operating across London and Greater London, TFTS Drone provides facilities managers, commercial property consultancies, building surveyors, institutional asset owners, and construction contractors with high-resolution aerial inspection, radiometric thermography, high-level façade condition mapping, topographical photogrammetry, and TFTS 3D digital capture.
            </p>
            <div className="p-6 border border-white/10 bg-white/[0.02]">
              <p className="font-ui text-[11px] tracking-[0.2em] uppercase text-white/60 leading-relaxed">
                Commercial Focus: Designed specifically for corporate real estate portfolios, high-rise building envelopes, data centres, logistics parks, and active construction sites across the capital.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 border border-white/10 bg-dark group hover:border-accent/40 transition-colors">
              <Building2 className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-display text-xl text-white uppercase tracking-wider mb-3">
                Commercial Property &amp; FM
              </h3>
              <p className="font-body text-[13px] text-white/50 leading-relaxed">
                Proactive roof condition audits, gutter inspections, mechanical plant verification, and building envelope surveys for London managing agents and facilities directors.
              </p>
            </div>

            <div className="p-8 border border-white/10 bg-dark group hover:border-accent/40 transition-colors">
              <Layers className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-display text-xl text-white uppercase tracking-wider mb-3">
                Façade &amp; Cladding Integrity
              </h3>
              <p className="font-body text-[13px] text-white/50 leading-relaxed">
                Close-range optical capture of high-rise elevations, curtain walling, louvres, and cladding panels to support EWS1 compliance, defect tracking, and warranty claims.
              </p>
            </div>

            <div className="p-8 border border-white/10 bg-dark group hover:border-accent/40 transition-colors">
              <Zap className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-display text-xl text-white uppercase tracking-wider mb-3">
                Thermal &amp; Energy Auditing
              </h3>
              <p className="font-body text-[13px] text-white/50 leading-relaxed">
                Calibrated radiometric thermography for detecting sub-surface roof moisture ingress, thermal bridging, insulation degradation, and solar PV cell anomalies.
              </p>
            </div>

            <div className="p-8 border border-white/10 bg-dark group hover:border-accent/40 transition-colors">
              <Compass className="w-8 h-8 text-accent mb-6" />
              <h3 className="font-display text-xl text-white uppercase tracking-wider mb-3">
                Construction &amp; Development
              </h3>
              <p className="font-body text-[13px] text-white/50 leading-relaxed">
                Repeatable time-series aerial progress documentation, volumetric stockpile monitoring, and high-precision orthomosaics for major London development schemes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE LONDON SERVICES HUB */}
      <section id="services" className="py-32 px-8 md:px-20 bg-dark">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="svc-tag mb-8">
                <SectionTag number="02" text="Commercial Capabilities" />
              </div>
              <h2 className="font-display text-5xl md:text-6xl text-white uppercase tracking-tighter leading-none">
                Core Drone Services <br />
                <span className="text-accent">Available in London</span>
              </h2>
            </div>
            <p className="font-body text-sm text-white/50 max-w-md">
              Every service is delivered under standard operating procedures with calibrated enterprise UAV platforms, optical zoom payloads, and radiometric thermal sensors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {/* Service 1: Drone Roof Surveys */}
            <div className="group relative p-10 bg-dark hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-ui text-[10px] tracking-[0.35em] uppercase text-accent">01 / Inspection</span>
                  <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-4 group-hover:text-accent transition-colors">
                  <Link href="/services/roof-inspections" className="before:absolute before:inset-0">
                    Drone Roof Surveys
                  </Link>
                </h3>
                <p className="font-body text-xs text-white/50 leading-relaxed mb-6">
                  Comprehensive commercial roof condition surveys across London. We inspect flat membranes, pitched roofing, gutters, parapets, rooflights, plant penetrations, and visible water pooling.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-white/30 font-ui text-[10px] tracking-[0.25em] uppercase group-hover:text-accent transition-colors">
                <span>View Roof Surveys</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Service 2: Commercial Drone Inspections */}
            <div className="group relative p-10 bg-dark hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-ui text-[10px] tracking-[0.35em] uppercase text-accent">02 / Building Audits</span>
                  <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-4 group-hover:text-accent transition-colors">
                  <Link href="/services/drone-inspection" className="before:absolute before:inset-0">
                    Commercial Drone Inspections
                  </Link>
                </h3>
                <p className="font-body text-xs text-white/50 leading-relaxed mb-6">
                  High-level structural and fabric condition assessments for commercial office blocks, retail parks, and industrial assets where traditional access is restricted or cost-prohibitive.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-white/30 font-ui text-[10px] tracking-[0.25em] uppercase group-hover:text-accent transition-colors">
                <span>View Inspections</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Service 3: Thermal Drone Surveys */}
            <div className="group relative p-10 bg-dark hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-ui text-[10px] tracking-[0.35em] uppercase text-accent">03 / Thermography</span>
                  <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-4 group-hover:text-accent transition-colors">
                  <Link href="/services/thermal-imaging" className="before:absolute before:inset-0">
                    Thermal Drone Surveys
                  </Link>
                </h3>
                <p className="font-body text-xs text-white/50 leading-relaxed mb-6">
                  Radiometric aerial thermography for London commercial buildings. Rapidly diagnose sub-membrane moisture entrapment, insulation failures, and thermal bridging without destructive testing.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-white/30 font-ui text-[10px] tracking-[0.25em] uppercase group-hover:text-accent transition-colors">
                <span>View Thermal Surveys</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Service 4: Solar PV Drone Inspections */}
            <div className="group relative p-10 bg-dark hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-ui text-[10px] tracking-[0.35em] uppercase text-accent">04 / Renewables</span>
                  <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-4 group-hover:text-accent transition-colors">
                  <Link href="/services/solar-panel-inspections" className="before:absolute before:inset-0">
                    Solar PV Drone Inspections
                  </Link>
                </h3>
                <p className="font-body text-xs text-white/50 leading-relaxed mb-6">
                  IEC-compliant thermal and visual audits for rooftop commercial solar installations and institutional PV portfolios. Pinpoint diode faults, hotspot anomalies, and soiling losses.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-white/30 font-ui text-[10px] tracking-[0.25em] uppercase group-hover:text-accent transition-colors">
                <span>View Solar Audits</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Service 5: Façade & Cladding Inspections */}
            <div className="group relative p-10 bg-dark hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-ui text-[10px] tracking-[0.35em] uppercase text-accent">05 / Elevational</span>
                  <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-4 group-hover:text-accent transition-colors">
                  <Link href="/services/facade-inspections" className="before:absolute before:inset-0">
                    Façade &amp; Cladding Inspections
                  </Link>
                </h3>
                <p className="font-body text-xs text-white/50 leading-relaxed mb-6">
                  High-resolution optical inspections of vertical building elevations, cladding panels, curtain walling, and masonry across London&apos;s mid- and high-rise commercial structures.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-white/30 font-ui text-[10px] tracking-[0.25em] uppercase group-hover:text-accent transition-colors">
                <span>View Façade Surveys</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Service 6: Drone Surveying & Mapping */}
            <div className="group relative p-10 bg-dark hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-ui text-[10px] tracking-[0.35em] uppercase text-accent">06 / Geospatial</span>
                  <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-4 group-hover:text-accent transition-colors">
                  <Link href="/services/surveying-mapping" className="before:absolute before:inset-0">
                    Drone Surveying &amp; Mapping
                  </Link>
                </h3>
                <p className="font-body text-xs text-white/50 leading-relaxed mb-6">
                  RTK-georeferenced 2D orthomosaics, digital terrain models (DTM), and topographical photogrammetry for London development sites, brownfield plots, and infrastructure corridors.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-white/30 font-ui text-[10px] tracking-[0.25em] uppercase group-hover:text-accent transition-colors">
                <span>View Mapping Services</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Service 7: Construction Progress Monitoring */}
            <div className="group relative p-10 bg-dark hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-ui text-[10px] tracking-[0.35em] uppercase text-accent">07 / Construction</span>
                  <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-4 group-hover:text-accent transition-colors">
                  <Link href="/services/construction-monitoring" className="before:absolute before:inset-0">
                    Construction Progress Monitoring
                  </Link>
                </h3>
                <p className="font-body text-xs text-white/50 leading-relaxed mb-6">
                  Repeatable aerial time-series documentation for London contractors, fund monitors, and developers. Milestone tracking with consistent angles, GPS coordinate locking, and orthomosaic overlays.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-white/30 font-ui text-[10px] tracking-[0.25em] uppercase group-hover:text-accent transition-colors">
                <span>View Construction Capture</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Service 8: TFTS 3D Spatial Capture */}
            <div className="group relative p-10 bg-dark hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-ui text-[10px] tracking-[0.35em] uppercase text-accent">08 / Spatial 3D</span>
                  <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-4 group-hover:text-accent transition-colors">
                  <Link href="/tfts-3d" className="before:absolute before:inset-0">
                    TFTS 3D Digital Capture
                  </Link>
                </h3>
                <p className="font-body text-xs text-white/50 leading-relaxed mb-6">
                  Interactive 3D Gaussian Splatting and high-fidelity digital twins for London commercial real estate, planning submissions, heritage conservation, and immersive stakeholder reviews.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-white/30 font-ui text-[10px] tracking-[0.25em] uppercase group-hover:text-accent transition-colors">
                <span>Explore TFTS 3D</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY LONDON REQUIRES TECHNICAL FLIGHT PLANNING */}
      <section className="py-32 px-8 md:px-20 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
            <div className="lg:col-span-6">
              <div className="svc-tag mb-8">
                <SectionTag number="03" text="Operational Rigour" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight leading-none mb-8">
                Why London Requires <br />
                <span className="text-accent">Technical Flight Planning</span>
              </h2>
              <p className="font-body text-base text-white/60 leading-relaxed mb-6">
                Commercial drone operations in London exist within some of the world&apos;s most densely populated and tightly managed airspace environments. Achieving safe, compliant, and actionable survey results requires structured technical mission planning around the physical site rather than simply arriving and launching a drone.
              </p>
              <p className="font-body text-sm text-white/45 leading-relaxed">
                From Heathrow and London City Flight Restriction Zones (FRZ) to Central London restricted areas (EGR157 / EGR158), urban wind turbulence, and complex ground risk profiles, every flight is preceded by comprehensive desk and site-level risk assessments.
              </p>
            </div>

            <div className="lg:col-span-6 p-8 md:p-12 border border-white/10 bg-dark">
              <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-6 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-accent" />
                Our London Pre-Flight Protocol
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                  <span className="font-body text-xs text-white/60 leading-relaxed">
                    <strong className="text-white font-medium">Airspace Clearance:</strong> Automated and manual review of NATS AIS, NOTAMs, CTR boundaries, and local heliport corridors.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                  <span className="font-body text-xs text-white/60 leading-relaxed">
                    <strong className="text-white font-medium">Ground Environment &amp; Cordoning:</strong> Establishing dedicated takeoff/landing zones (TOAL) and cordon perimeters to manage public interface.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                  <span className="font-body text-xs text-white/60 leading-relaxed">
                    <strong className="text-white font-medium">Microclimate &amp; Wind Canyoning:</strong> Analyzing urban downdrafts and eddy currents around tall commercial structures prior to launch.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                  <span className="font-body text-xs text-white/60 leading-relaxed">
                    <strong className="text-white font-medium">Privacy &amp; Data Governance:</strong> Compliance with GDPR and CAA overflight guidelines regarding non-target third-party properties.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 border border-white/5 bg-white/[0.01]">
              <div className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-4">Constraint 01</div>
              <h4 className="font-display text-lg text-white uppercase tracking-wider mb-2">Controlled Airspace</h4>
              <p className="font-body text-xs text-white/40 leading-relaxed">
                Coordination with London Air Traffic Control, NATS, and relevant airport safeguarding authorities where required.
              </p>
            </div>

            <div className="p-8 border border-white/5 bg-white/[0.01]">
              <div className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-4">Constraint 02</div>
              <h4 className="font-display text-lg text-white uppercase tracking-wider mb-2">High-Density Urban Fabric</h4>
              <p className="font-body text-xs text-white/40 leading-relaxed">
                Meticulous line-of-sight maintenance and GPS multipath management amongst dense commercial and residential towers.
              </p>
            </div>

            <div className="p-8 border border-white/5 bg-white/[0.01]">
              <div className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-4">Constraint 03</div>
              <h4 className="font-display text-lg text-white uppercase tracking-wider mb-2">Pedestrian &amp; Traffic Density</h4>
              <p className="font-body text-xs text-white/40 leading-relaxed">
                Early morning or weekend deployment scheduling to minimise ground risk and avoid disruption to building occupants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMMERCIAL PROPERTY USE CASES */}
      <section className="py-32 px-8 md:px-20 bg-dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <div className="svc-tag mb-8 inline-flex">
              <SectionTag number="04" text="Commercial Applications" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-white uppercase tracking-tighter">
              Commercial Property <br />
              <span className="text-accent">Use Cases in London</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Use Case 1 */}
            <div className="p-10 border border-white/10 bg-[#0c0c0c] flex flex-col justify-between">
              <div>
                <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-4 block">Application 01</span>
                <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-4">
                  Planned Maintenance (PPM)
                </h3>
                <p className="font-body text-xs text-white/50 leading-relaxed mb-6">
                  Capture high-resolution baseline condition data across commercial roofs, gutters, and façades before annual capital maintenance budgets and repair contracts are committed.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 font-ui text-[10px] tracking-[0.2em] uppercase text-white/30">
                Asset Managers &amp; Managing Agents
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="p-10 border border-white/10 bg-[#0c0c0c] flex flex-col justify-between">
              <div>
                <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-4 block">Application 02</span>
                <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-4">
                  Reactive Defect Investigation
                </h3>
                <p className="font-body text-xs text-white/50 leading-relaxed mb-6">
                  Rapidly obtain high-level visual and thermal evidence following reported roof leaks, storm damage, fallen masonry, or failing cladding panels across commercial estates.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 font-ui text-[10px] tracking-[0.2em] uppercase text-white/30">
                Facilities &amp; Operations Directors
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="p-10 border border-white/10 bg-[#0c0c0c] flex flex-col justify-between">
              <div>
                <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-4 block">Application 03</span>
                <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-4">
                  Acquisition Due Diligence &amp; Dilapidations
                </h3>
                <p className="font-body text-xs text-white/50 leading-relaxed mb-6">
                  Supplement commercial building surveyors and acquisition teams with uncompromised high-level optical evidence to support technical due diligence and lease-end negotiations.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 font-ui text-[10px] tracking-[0.2em] uppercase text-white/30">
                Building Surveyors &amp; Investors
              </div>
            </div>

            {/* Use Case 4 */}
            <div className="p-10 border border-white/10 bg-[#0c0c0c] flex flex-col justify-between">
              <div>
                <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-4 block">Application 04</span>
                <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-4">
                  Portfolio-Wide Condition Auditing
                </h3>
                <p className="font-body text-xs text-white/50 leading-relaxed mb-6">
                  Apply uniform, standardized inspection workflows across distributed commercial and retail property portfolios in London, delivering comparable reporting for asset scoring.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 font-ui text-[10px] tracking-[0.2em] uppercase text-white/30">
                Property REITs &amp; Fund Managers
              </div>
            </div>

            {/* Use Case 5 */}
            <div className="p-10 border border-white/10 bg-[#0c0c0c] flex flex-col justify-between">
              <div>
                <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-4 block">Application 05</span>
                <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-4">
                  Construction Verification &amp; Monitoring
                </h3>
                <p className="font-body text-xs text-white/50 leading-relaxed mb-6">
                  Maintain an objective, timestamped photographic record of development progress, structural steelwork, concrete pours, and building envelope installation for project funders.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 font-ui text-[10px] tracking-[0.2em] uppercase text-white/30">
                Main Contractors &amp; Developers
              </div>
            </div>

            {/* Use Case 6 */}
            <div className="p-10 border border-white/10 bg-[#0c0c0c] flex flex-col justify-between">
              <div>
                <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-4 block">Application 06</span>
                <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-4">
                  Difficult-Access Inspection
                </h3>
                <p className="font-body text-xs text-white/50 leading-relaxed mb-6">
                  Safely inspect complex high-level building elements where scaffolding, MEWPs, or rope access are impractical, overly disruptive, or financially disproportionate for initial scoping.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 font-ui text-[10px] tracking-[0.2em] uppercase text-white/30">
                Consultants &amp; Estates Teams
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BUILDING ELEMENTS TFTS CAN CAPTURE */}
      <section className="py-32 px-8 md:px-20 bg-[#0c0c0c] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl mb-20">
            <div className="svc-tag mb-8">
              <SectionTag number="05" text="Technical Scope" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight leading-none mb-6">
              Building Elements <br />
              <span className="text-accent">Captured by Drone</span>
            </h2>
            <p className="font-body text-sm text-white/50 leading-relaxed">
              Scope is strictly defined around the objectives of each commercial survey. Our enterprise optical zoom and radiometric payloads allow detailed evaluation of critical external components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Group 1: Horizontal Roof Envelope */}
            <div className="p-10 border border-white/10 bg-dark">
              <div className="font-ui text-[11px] tracking-[0.35em] uppercase text-accent mb-6 flex items-center gap-2">
                <Layers className="w-4 h-4" /> Horizontal Envelope
              </div>
              <ul className="space-y-3 font-body text-xs text-white/60">
                <li className="flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-accent rounded-full" /> Flat single-ply &amp; bituminous membranes
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-accent rounded-full" /> Profiled standing seam metal roofing
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-accent rounded-full" /> Parapet walls, copings &amp; capping stones
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-accent rounded-full" /> Box gutters, valleys &amp; rainwater outlets
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-accent rounded-full" /> Rooflights, barrel vaults &amp; glazing bars
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-accent rounded-full" /> HVAC plant, ductwork &amp; pipe penetrations
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-accent rounded-full" /> Rooftop solar PV strings &amp; inverters
                </li>
              </ul>
            </div>

            {/* Group 2: Vertical Façade Envelope */}
            <div className="p-10 border border-white/10 bg-dark">
              <div className="font-ui text-[11px] tracking-[0.35em] uppercase text-accent mb-6 flex items-center gap-2">
                <Building2 className="w-4 h-4" /> Vertical Façade Envelope
              </div>
              <ul className="space-y-3 font-body text-xs text-white/60">
                <li className="flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-accent rounded-full" /> Aluminium composite &amp; rainscreen cladding
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-accent rounded-full" /> Curtain walling &amp; structural glazing seals
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-accent rounded-full" /> Portland stone &amp; terracotta architectural masonry
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-accent rounded-full" /> Brickwork spalling, pointing &amp; expansion joints
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-accent rounded-full" /> High-level louvres, vents &amp; brise soleil
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-accent rounded-full" /> Window reveals, flashing details &amp; sills
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-accent rounded-full" /> External risers, flues &amp; fire escapes
                </li>
              </ul>
            </div>

            {/* Group 3: Structural & Site Assets */}
            <div className="p-10 border border-white/10 bg-dark">
              <div className="font-ui text-[11px] tracking-[0.35em] uppercase text-accent mb-6 flex items-center gap-2">
                <Box className="w-4 h-4" /> Structural &amp; Site Assets
              </div>
              <ul className="space-y-3 font-body text-xs text-white/60">
                <li className="flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-accent rounded-full" /> Structural steel connections &amp; purlins
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-accent rounded-full" /> Bridge bearings, abutments &amp; deck undersides
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-accent rounded-full" /> Telecommunications masts &amp; towers
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-accent rounded-full" /> Hardstanding, car parks &amp; yard logistics areas
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-accent rounded-full" /> Boundary walls, fencing &amp; perimeter security
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-accent rounded-full" /> Surface water drainage runs &amp; outfalls
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-accent rounded-full" /> Brownfield development site topography
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DEFINED DELIVERABLES */}
      <section className="py-32 px-8 md:px-20 bg-dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
            <div className="lg:col-span-5">
              <div className="svc-tag mb-8">
                <SectionTag number="06" text="Tangible Outputs" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight leading-none mb-6">
                Structured Technical <br />
                <span className="text-accent">Deliverables</span>
              </h2>
              <p className="font-body text-base text-white/55 leading-relaxed mb-6">
                Deliverables are defined around the purpose of the survey. We do not provide raw, unorganized imagery dumps. Data is processed, structured, and presented to integrate seamlessly with facilities management systems, CAFM workflows, CAD software, and RICS technical condition reports.
              </p>
              <div className="p-6 border border-accent/20 bg-accent/[0.02]">
                <p className="font-ui text-[11px] tracking-[0.2em] uppercase text-accent leading-relaxed">
                  Fast turnaround available for urgent leak diagnosis and insurance incident evidence across London.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 border border-white/10 bg-[#0c0c0c]">
                <Camera className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-display text-lg text-white uppercase tracking-wider mb-2">High-Res Inspection Pack</h3>
                <p className="font-body text-xs text-white/50 leading-relaxed">
                  Georeferenced 48MP+ photographic library with optical zoom close-ups of all identified defects and asset components.
                </p>
              </div>

              <div className="p-8 border border-white/10 bg-[#0c0c0c]">
                <FileText className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-display text-lg text-white uppercase tracking-wider mb-2">Annotated Condition Reports</h3>
                <p className="font-body text-xs text-white/50 leading-relaxed">
                  Defect schedules categorized by severity rating, location markup, and photographic evidence for contractor scoping.
                </p>
              </div>

              <div className="p-8 border border-white/10 bg-[#0c0c0c]">
                <Activity className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-display text-lg text-white uppercase tracking-wider mb-2">Radiometric Thermal Datasets</h3>
                <p className="font-body text-xs text-white/50 leading-relaxed">
                  Calibrated temperature-mapped thermal imagery with spot temperature measurements and moisture ingress heatmaps.
                </p>
              </div>

              <div className="p-8 border border-white/10 bg-[#0c0c0c]">
                <Compass className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-display text-lg text-white uppercase tracking-wider mb-2">Orthomosaics &amp; CAD Maps</h3>
                <p className="font-body text-xs text-white/50 leading-relaxed">
                  Millimetre-accurate 2D stitched orthomosaics delivered in GeoTIFF, DXF, and high-resolution PDF formats.
                </p>
              </div>

              <div className="p-8 border border-white/10 bg-[#0c0c0c]">
                <Box className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-display text-lg text-white uppercase tracking-wider mb-2">3D Point Clouds &amp; Mesh</h3>
                <p className="font-body text-xs text-white/50 leading-relaxed">
                  Photogrammetric LAS point clouds and textured 3D OBJ meshes ready for integration into BIM and Revit workflows.
                </p>
              </div>

              <div className="p-8 border border-white/10 bg-[#0c0c0c]">
                <Cpu className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-display text-lg text-white uppercase tracking-wider mb-2">TFTS 3D Interactive Viewer</h3>
                <p className="font-body text-xs text-white/50 leading-relaxed">
                  Browser-based interactive 3D digital model for collaborative site exploration without specialist desktop software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TFTS 3D FEATURE SPOTLIGHT */}
      <section className="py-32 px-8 md:px-20 bg-[#080808] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative z-10">
            <div className="svc-tag mb-8">
              <SectionTag number="07" text="Spatial Innovation" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tighter leading-none mb-6">
              TFTS 3D <br />
              <span className="text-accent">Interactive Site Intelligence</span>
            </h2>
            <p className="font-body text-base text-white/60 leading-relaxed mb-6">
              TFTS 3D represents our premium capability for generating high-fidelity interactive 3D representations of real-world London buildings, commercial developments, and complex assets from aerial and terrestrial capture data.
            </p>
            <p className="font-body text-sm text-white/45 leading-relaxed mb-10">
              Unlike traditional photogrammetry which often struggles with complex glass, metallic surfaces, and fine geometric details, TFTS 3D utilizes advanced spatial neural radiance representations to produce photorealistic interactive digital environments that can be explored directly in any web browser.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
              <Link
                href="/tfts-3d"
                className="group bg-accent text-white px-8 py-4 text-xs font-semibold tracking-widest uppercase rounded-[2px] flex items-center justify-center gap-3 hover:bg-accent-light transition-all shadow-[0_0_25px_rgba(0,102,255,0.25)]"
              >
                Explore TFTS 3D Technology <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                href="/brief?service=tfts-3d&location=london"
                className="font-ui text-[11px] tracking-[0.25em] uppercase text-white/50 hover:text-white transition-colors text-center"
              >
                Request a 3D Capture Proposal
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full border border-white/10 bg-dark overflow-hidden rounded-[2px] group">
              <Image
                src="/images/gaussian-splat/casa-hotel.jpg"
                alt="TFTS 3D interactive site model capture for commercial property"
                fill
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <span className="font-ui text-[9px] tracking-[0.3em] uppercase text-accent block mb-1">
                    Proprietary Spatial Capture
                  </span>
                  <span className="font-display text-xl text-white uppercase tracking-wider">
                    Interactive 3D Digital Model
                  </span>
                </div>
                <Link
                  href="/tfts-3d"
                  className="px-4 py-2 bg-dark/80 backdrop-blur-md border border-white/20 font-ui text-[9px] tracking-[0.2em] uppercase text-white hover:bg-accent hover:border-accent hover:text-white transition-all"
                >
                  Launch Model
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LONDON SECTOR INTEGRATION */}
      <section className="py-32 px-8 md:px-20 bg-dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <div className="svc-tag mb-8 inline-flex">
              <SectionTag number="08" text="Industry Specialisms" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-white uppercase tracking-tighter">
              London Sectors We Support
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/sectors/commercial-property"
              className="p-8 border border-white/10 bg-white/[0.01] hover:border-accent/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl text-white uppercase tracking-wider group-hover:text-accent transition-colors">
                  Commercial Property
                </h3>
                <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-accent transition-colors" />
              </div>
              <p className="font-body text-xs text-white/45 leading-relaxed">
                Landlords, managing agents, and REITs managing central London office towers, business parks, and retail centres.
              </p>
            </Link>

            <Link
              href="/sectors/facilities-management"
              className="p-8 border border-white/10 bg-white/[0.01] hover:border-accent/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl text-white uppercase tracking-wider group-hover:text-accent transition-colors">
                  Facilities Management
                </h3>
                <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-accent transition-colors" />
              </div>
              <p className="font-body text-xs text-white/45 leading-relaxed">
                Total and hard FM service providers requiring rapid building envelope diagnostics and planned maintenance data.
              </p>
            </Link>

            <Link
              href="/sectors/construction"
              className="p-8 border border-white/10 bg-white/[0.01] hover:border-accent/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl text-white uppercase tracking-wider group-hover:text-accent transition-colors">
                  Construction &amp; Development
                </h3>
                <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-accent transition-colors" />
              </div>
              <p className="font-body text-xs text-white/45 leading-relaxed">
                Tier 1 and Tier 2 contractors managing active London urban development schemes and high-rise envelope installations.
              </p>
            </Link>

            <Link
              href="/sectors/surveyors"
              className="p-8 border border-white/10 bg-white/[0.01] hover:border-accent/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl text-white uppercase tracking-wider group-hover:text-accent transition-colors">
                  Building Surveyors &amp; Consultants
                </h3>
                <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-accent transition-colors" />
              </div>
              <p className="font-body text-xs text-white/45 leading-relaxed">
                RICS chartered surveyors, structural engineers, and façade consultants seeking uncompromised close-range aerial data.
              </p>
            </Link>

            <Link
              href="/sectors/infrastructure"
              className="p-8 border border-white/10 bg-white/[0.01] hover:border-accent/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl text-white uppercase tracking-wider group-hover:text-accent transition-colors">
                  Infrastructure &amp; Transport
                </h3>
                <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-accent transition-colors" />
              </div>
              <p className="font-body text-xs text-white/45 leading-relaxed">
                Rail interchanges, transport corridors, utility compounds, and river crossing infrastructure across Greater London.
              </p>
            </Link>

            <Link
              href="/sectors/solar-renewable-energy"
              className="p-8 border border-white/10 bg-white/[0.01] hover:border-accent/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl text-white uppercase tracking-wider group-hover:text-accent transition-colors">
                  Solar &amp; Renewable Energy
                </h3>
                <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-accent transition-colors" />
              </div>
              <p className="font-body text-xs text-white/45 leading-relaxed">
                Commercial solar asset operators, local authorities, and corporate clients with rooftop PV installations.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. GREATER LONDON GEOGRAPHIC COVERAGE */}
      <section className="py-28 px-8 md:px-20 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="svc-tag mb-8">
                <SectionTag number="09" text="Geographic Scope" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight leading-none mb-6">
                Operating Across <br />
                <span className="text-accent">All 32 London Boroughs</span>
              </h2>
              <p className="font-body text-sm text-white/50 leading-relaxed mb-8">
                TFTS Drone provides commercial drone survey coverage across Central London and the wider Greater London area. Our mobile remote pilot crews are equipped for prompt deployment with standardized flight planning and safety documentation.
              </p>
              <div className="p-6 border border-white/10 bg-dark">
                <div className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-2">
                  Unified Reporting Standard
                </div>
                <p className="font-body text-xs text-white/40 leading-relaxed">
                  Whether surveying a single commercial tower in the City or fifty retail units spread from Hillingdon to Havering, data is delivered in a uniform format ready for portfolio analysis.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 border border-white/5 bg-white/[0.01]">
                <h4 className="font-display text-base text-white uppercase tracking-wider mb-2">Central &amp; City</h4>
                <p className="font-body text-xs text-white/45 leading-relaxed">
                  City of London, Westminster, Camden, Islington, Southwark, Lambeth, Kensington &amp; Chelsea.
                </p>
              </div>

              <div className="p-6 border border-white/5 bg-white/[0.01]">
                <h4 className="font-display text-base text-white uppercase tracking-wider mb-2">East &amp; Docklands</h4>
                <p className="font-body text-xs text-white/45 leading-relaxed">
                  Tower Hamlets, Canary Wharf, Newham, Hackney, Greenwich, Barking &amp; Dagenham, Havering.
                </p>
              </div>

              <div className="p-6 border border-white/5 bg-white/[0.01]">
                <h4 className="font-display text-base text-white uppercase tracking-wider mb-2">West &amp; M4 Corridor</h4>
                <p className="font-body text-xs text-white/45 leading-relaxed">
                  Hammersmith &amp; Fulham, Ealing, Hounslow, Hillingdon, Brent, Harrow, Richmond upon Thames.
                </p>
              </div>

              <div className="p-6 border border-white/5 bg-white/[0.01]">
                <h4 className="font-display text-base text-white uppercase tracking-wider mb-2">North &amp; South Outer</h4>
                <p className="font-body text-xs text-white/45 leading-relaxed">
                  Barnet, Enfield, Haringey, Waltham Forest, Wandsworth, Merton, Sutton, Croydon, Bromley, Kingston, Bexley, Lewisham.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ ACCORDION SECTION */}
      <section className="py-32 px-8 md:px-20 bg-dark">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-20">
            <HelpCircle className="w-12 h-12 text-accent/30 mx-auto mb-6" />
            <div className="svc-tag mb-6 inline-flex">
              <SectionTag number="10" text="Frequently Asked Questions" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-white uppercase tracking-tighter">
              Commercial Drone Services <br />
              <span className="text-accent">London FAQs</span>
            </h2>
          </div>

          <div className="bg-[#0c0c0c] border border-white/10 p-8 md:p-12 rounded-[2px]">
            <FAQAccordion faqs={londonFaqs} />
          </div>
        </div>
      </section>

      {/* 12. FINAL HIGH-IMPACT CTA SECTION */}
      <section className="py-32 px-8 md:px-20 bg-accent text-dark relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <Target className="w-14 h-14 mx-auto mb-8 text-dark/70" />
          <h2 className="font-display text-5xl md:text-7xl mb-8 uppercase tracking-tighter leading-[0.9]">
            Commission a Commercial <br />
            <span className="underline decoration-dark/30 underline-offset-[10px]">
              Drone Survey in London
            </span>
          </h2>
          <p className="font-body text-base md:text-xl text-dark/75 max-w-2xl mx-auto mb-12 leading-relaxed">
            Tell us about your asset, location, and required deliverables. Our operations team will perform a preliminary airspace and feasibility review and provide a structured commercial proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/brief?location=london&source=london-footer-cta"
              className="group flex items-center gap-4 bg-dark text-white px-10 py-6 font-display text-2xl tracking-wider transition-all hover:bg-white hover:text-dark w-full sm:w-auto justify-center shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            >
              Start Project Brief <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact?subject=London+Commercial+Drone+Survey"
              className="font-ui text-[12px] font-bold tracking-[0.35em] uppercase text-dark/70 hover:text-dark transition-colors px-6 py-4"
            >
              Contact Operations Desk
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
