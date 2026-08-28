// app/locations/[location]/page.tsx
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  MapPin,
  ArrowRight,
  ShieldCheck,
  Target,
  ArrowUpRight,
  CheckCircle,
  ChevronRight,
  HelpCircle,
  Layers,
  Zap,
  FileText,
} from 'lucide-react'
import { locationsData } from '@/lib/locations-data'
import { servicesData } from '@/lib/services-data'
import SectionTag from '@/components/ui/SectionTag'

interface Props {
  params: Promise<{ location: string }>
}

export async function generateStaticParams() {
  return locationsData
    .filter((loc) => loc.slug !== 'london')
    .map((loc) => ({
      location: loc.slug,
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location } = await params
  const data = locationsData.find((l) => l.slug === location)
  if (!data) return {}

  const title = `Commercial Drone Services ${data.name} | TFTS Drone`
  const description = `TFTS Drone provides commercial drone surveys and inspections in ${data.name} — roof surveys, thermal imaging, façade inspections, construction monitoring and TFTS 3D digital capture. CAA-authorised.`

  return {
    title,
    description,
    alternates: {
      canonical: `https://tfts.co.uk/locations/${location}`,
    },
  }
}

export default async function LocationPage({ params }: Props) {
  const { location } = await params
  const data = locationsData.find((l) => l.slug === location)
  if (!data) notFound()

  const coreServices = servicesData
    .filter((s, idx, arr) => arr.findIndex((x) => x.slug === s.slug) === idx)
    .slice(0, 8)

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tfts.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://tfts.co.uk/locations' },
        {
          '@type': 'ListItem',
          position: 3,
          name: `Commercial Drone Services ${data.name}`,
          item: `https://tfts.co.uk/locations/${data.slug}`,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Commercial Drone Services in ${data.name}`,
      description: data.description,
      url: `https://tfts.co.uk/locations/${data.slug}`,
      provider: {
        '@type': 'Organization',
        name: 'TFTS Drone',
        url: 'https://tfts.co.uk',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: data.name,
        containedInPlace: {
          '@type': 'Country',
          name: 'United Kingdom',
        },
      },
      serviceType: 'Commercial Drone Survey',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Drone Survey Services',
        itemListElement: coreServices.slice(0, 5).map((s) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: s.title,
          },
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
  ]

  return (
    <main className="bg-dark text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-dark/50 border-b border-white/5 py-4 px-8 md:px-20">
        <ol className="max-w-[1400px] mx-auto flex items-center gap-2 font-ui text-[10px] tracking-[0.3em] uppercase text-white/30">
          <li>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
          </li>
          <li><ChevronRight className="w-3 h-3" /></li>
          <li>
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
          </li>
          <li><ChevronRight className="w-3 h-3" /></li>
          <li className="text-accent">{data.name}</li>
        </ol>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/fleet_m350.png"
            alt={`Commercial drone services in ${data.name}`}
            fill
            className="object-contain opacity-15 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark" />
        </div>

        <div className="container relative z-10 px-8 md:px-20 text-center max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8 opacity-0 animate-[fade-in_0.8s_0.2s_forwards]">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">
              {data.region}
            </span>
          </div>

          <h1 className="text-[clamp(2rem,4.5vw,3.75rem)] font-extralight tracking-[-0.04em] leading-[1.02] text-white mb-6 uppercase opacity-0 animate-[fade-up_0.8s_0.3s_forwards]">
            Commercial Drone Services<br />
            <span className="text-accent underline underline-offset-8 decoration-accent/30">
              in {data.name}
            </span>
          </h1>

          <p className="text-sm sm:text-base font-light text-white/60 max-w-2xl mx-auto mb-10 opacity-0 animate-[fade-in_1s_0.7s_forwards] leading-relaxed">
            {data.heroIntro}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-[fade-in_1s_0.9s_forwards]">
            <Link
              href={`/brief?location=${data.slug}`}
              className="group bg-accent text-white px-7 py-4 text-sm font-normal rounded-[2px] flex items-center gap-3 hover:bg-accent-light transition-all shadow-[0_0_20px_rgba(0,102,255,0.25)]"
            >
              Discuss a {data.name} Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="text-xs font-light tracking-[0.14em] uppercase text-white/50 hover:text-white transition-colors"
            >
              View All Drone Services
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/20 font-ui text-[10px] tracking-[0.3em] uppercase">
            <span>CAA-Authorised Operations</span>
            <span className="w-px h-3 bg-white/20 my-auto" />
            <span>GVC-Qualified Pilots</span>
            <span className="w-px h-3 bg-white/20 my-auto" />
            <span>Fully Insured</span>
            <span className="w-px h-3 bg-white/20 my-auto" />
            <span>Site-Specific Flight Planning</span>
          </div>
        </div>
      </section>

      {/* 2. Local Context Section */}
      <section className="py-32 px-8 md:px-20 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="svc-tag mb-8"><SectionTag number="01" text="Regional Context" /></div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-8 uppercase leading-none tracking-tight">
              Drone Surveys<br />
              <span className="text-accent">for {data.name.toUpperCase()}</span><br />
              Commercial Environments
            </h2>
            <p className="font-body text-base text-white/55 leading-relaxed mb-10">
              {data.localRelevance}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-sm text-white uppercase tracking-widest mb-1">CAA-Authorised</h4>
                  <p className="font-body text-[11px] text-white/40 uppercase tracking-widest leading-relaxed">Operational Authorisation for commercial drone flights across the UK.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Target className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-sm text-white uppercase tracking-widest mb-1">Technical Data</h4>
                  <p className="font-body text-[11px] text-white/40 uppercase tracking-widest leading-relaxed">High-accuracy mapping and high-resolution inspection evidence.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Key Asset Types */}
            <div className="p-10 border border-white/10 bg-white/[0.01]">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-4 h-4 text-accent" />
                <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Asset Types We Cover</span>
              </div>
              <ul className="space-y-3">
                {data.keyAssetTypes.map((type, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-accent rounded-full mt-2 shrink-0" />
                    <span className="font-body text-[12px] text-white/50 leading-relaxed">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Drone Services Available */}
      <section className="py-32 px-8 md:px-20 bg-dark">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <div className="svc-tag mb-8"><SectionTag number="02" text="Capability" /></div>
              <h2 className="font-display text-5xl text-white uppercase tracking-tighter leading-none">
                Drone Services<br />
                <span className="text-accent">Available in {data.name}</span>
              </h2>
            </div>
            <Link
              href="/services"
              className="font-ui text-[11px] tracking-[0.3em] uppercase text-white/40 hover:text-white transition-colors border-b border-white/10 pb-2"
            >
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {coreServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group relative p-10 bg-dark hover:bg-accent/[0.03] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all">
                  <ArrowUpRight className="w-5 h-5 text-accent" />
                </div>
                <span className="block font-ui text-[10px] tracking-[0.4em] uppercase text-white/20 mb-6 group-hover:text-accent transition-colors">
                  {svc.category}
                </span>
                <h3 className="font-display text-2xl text-white mb-5 uppercase tracking-wide leading-tight group-hover:text-accent transition-colors">
                  {svc.title.replace('Services UK', '').replace(' UK', '')}
                </h3>
                <p className="font-body text-[11px] text-white/35 uppercase tracking-widest leading-relaxed mb-8 group-hover:text-white/55 transition-colors">
                  {svc.intro.substring(0, 110)}…
                </p>
                <div className="flex items-center gap-2 text-white/20 font-ui text-[10px] tracking-[0.3em] uppercase group-hover:text-white/60 transition-colors">
                  Learn More <ChevronRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Use Cases & Deliverables */}
      <section className="py-32 px-8 md:px-20 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <div className="svc-tag mb-8 inline-flex"><SectionTag number="03" text="Scope & Output" /></div>
            <h2 className="font-display text-5xl text-white uppercase tracking-tighter">
              What We Deliver<br />
              <span className="text-accent">in {data.name}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {/* Use Cases */}
            <div className="p-14 bg-dark">
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-5 h-5 text-accent" />
                <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Common Use Cases</span>
              </div>
              <ul className="space-y-5">
                {data.useCases.map((uc, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-white/60 leading-relaxed">{uc}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Deliverables */}
            <div className="p-14 bg-dark">
              <div className="flex items-center gap-3 mb-8">
                <FileText className="w-5 h-5 text-accent" />
                <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Standard Deliverables</span>
              </div>
              <ul className="space-y-5">
                {data.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-white/60 leading-relaxed">{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sectors */}
      <section className="py-32 px-8 md:px-20 bg-mid">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <div className="svc-tag mb-8 inline-flex"><SectionTag number="04" text="Sectors" /></div>
            <h2 className="font-display text-5xl text-white uppercase tracking-tighter">
              Sectors We Support<br />
              <span className="text-accent">in {data.name}</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.sectors.map((sector) => (
              <div
                key={sector}
                className="px-8 py-6 border border-white/5 bg-white/[0.01] hover:border-accent/20 transition-all text-center group"
              >
                <div className="font-ui text-[11px] tracking-[0.25em] uppercase text-white/40 group-hover:text-accent transition-colors leading-relaxed">
                  {sector}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Local Flight Planning */}
      <section className="py-32 px-8 md:px-20 bg-dark border-y border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-5">
            <div className="svc-tag mb-8"><SectionTag number="05" text="Compliance" /></div>
            <h2 className="font-display text-4xl text-white uppercase leading-none tracking-tighter mb-8">
              Flight Planning<br />
              <span className="text-accent">in {data.name}</span>
            </h2>
            <p className="font-body text-base text-white/50 leading-relaxed mb-8">
              {data.operationalConsiderations}
            </p>
            <div className="p-8 border border-accent/20 bg-accent/[0.02]">
              <p className="font-ui text-[11px] tracking-[0.2em] uppercase text-accent leading-relaxed">
                Every {data.name} project is planned site-specifically — airspace, ground environment, access, and output are all assessed before mobilisation.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Airspace Review', desc: 'Full assessment of NATS, ATC zones, FRZ and local airspace restrictions for every site.' },
              { title: 'Site Access', desc: 'Coordination with landowners, site managers and FM teams before mobilisation.' },
              { title: 'Nearby Property', desc: 'Assessment of overflight risk and privacy considerations for adjacent properties.' },
              { title: 'Weather Limits', desc: 'Real-time weather monitoring against operational limits for wind, visibility and precipitation.' },
              { title: 'Ground Safety', desc: 'Securing safe take-off and landing points, establishing exclusion areas where required.' },
              { title: 'Permissions', desc: 'Management of any NATS notifications, ATC coordination, or local authority consents required.' },
            ].map((item, i) => (
              <div key={i} className="p-8 border border-white/5 bg-white/[0.02]">
                <h4 className="font-display text-base text-white uppercase tracking-widest mb-3 flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  {item.title}
                </h4>
                <p className="font-body text-[11px] text-white/40 uppercase tracking-widest leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-32 px-8 md:px-20 bg-[#0a0a0a]">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-20">
            <HelpCircle className="w-12 h-12 text-accent/20 mx-auto mb-6" />
            <div className="svc-tag mb-6 inline-flex"><SectionTag number="06" text="FAQs" /></div>
            <h2 className="font-display text-5xl text-white uppercase tracking-tighter">
              {data.name} Drone Survey<br />
              <span className="text-accent">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <div key={i} className="p-10 border border-white/5 bg-dark group hover:border-white/10 transition-colors">
                <h3 className="font-display text-xl text-white mb-5 uppercase tracking-wide group-hover:text-accent transition-colors">
                  {faq.q}
                </h3>
                <p className="font-body text-base text-white/50 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Nearby Locations */}
      <section className="py-20 px-8 md:px-20 bg-dark border-t border-white/5">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <h4 className="font-display text-xl text-white uppercase tracking-widest shrink-0">
            Related Service Areas
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {data.nearbyLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="px-6 py-3 border border-white/5 font-ui text-[11px] tracking-widest uppercase text-white/40 hover:border-accent hover:text-accent transition-colors"
              >
                {loc.name}
              </Link>
            ))}
          </div>
          <Link
            href="/locations"
            className="font-ui text-[11px] tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors shrink-0"
          >
            All Locations →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-8 md:px-20 bg-accent text-dark">
        <div className="max-w-[1200px] mx-auto text-center">
          <Target className="w-14 h-14 mx-auto mb-10 text-dark/60" />
          <h2 className="font-display text-5xl md:text-7xl mb-8 uppercase tracking-tighter leading-[0.9]">
            Need Drone Services<br />
            in <span className="underline decoration-dark/30 underline-offset-[10px]">{data.name}?</span>
          </h2>
          <p className="font-body text-lg text-dark/65 max-w-2xl mx-auto mb-14 leading-relaxed">
            Tell us what you need to inspect, survey, monitor or capture. TFTS Drone will review the site location, constraints and required output before recommending the right approach.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link
              href={`/brief?location=${data.slug}`}
              className="group flex items-center gap-5 bg-dark text-white px-10 py-7 font-display text-3xl tracking-[0.08em] transition-all hover:bg-white hover:text-dark w-full sm:w-auto shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            >
              Start Project Brief <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform duration-500" />
            </Link>
            <Link
              href="/services"
              className="font-ui text-[13px] font-bold tracking-[0.4em] uppercase text-dark/55 hover:text-dark transition-colors"
            >
              View Drone Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
