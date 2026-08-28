// app/locations/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight, ChevronRight } from 'lucide-react'
import { locationsData } from '@/lib/locations-data'
import SectionTag from '@/components/ui/SectionTag'

export const metadata: Metadata = {
  title: 'UK Drone Survey Locations | TFTS Drone',
  description:
    'TFTS Drone provides commercial drone surveys, inspections and thermal imaging across the UK. Priority locations include London, Birmingham, Manchester, Derby, Nottingham and Leicester. CAA-authorised.',
  alternates: {
    canonical: 'https://tfts.co.uk/locations',
  },
}

// Priority Phase 3 locations to highlight at top
const phase3Slugs = ['london', 'birmingham', 'manchester', 'derby', 'nottingham', 'leicester']

// All other locations (excluding uk-wide which gets special treatment)
const supportingSlugs = ['sheffield', 'chesterfield', 'leeds', 'bristol', 'liverpool', 'glasgow']

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'TFTS Drone UK Service Locations',
  description: 'Commercial drone survey locations across the UK',
  url: 'https://tfts.co.uk/locations',
  numberOfItems: locationsData.filter((l) => l.slug !== 'uk').length,
  itemListElement: locationsData
    .filter((l) => l.slug !== 'uk')
    .map((loc, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://tfts.co.uk/locations/${loc.slug}`,
      name: `Commercial Drone Services ${loc.name}`,
    })),
}

export default function LocationsHubPage() {
  const priorityLocations = phase3Slugs.map((s) => locationsData.find((l) => l.slug === s)!)
  const supportingLocations = supportingSlugs.map((s) => locationsData.find((l) => l.slug === s)!)
  const ukWide = locationsData.find((l) => l.slug === 'uk')!

  return (
    <main className="bg-dark text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-dark/50 border-b border-white/5 py-4 px-8 md:px-20">
        <ol className="max-w-[1400px] mx-auto flex items-center gap-2 font-ui text-[10px] tracking-[0.3em] uppercase text-white/30">
          <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
          <li><ChevronRight className="w-3 h-3" /></li>
          <li className="text-accent">Locations</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="py-40 px-8 md:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">UK Coverage</span>
          </div>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extralight tracking-[-0.04em] leading-[1.02] text-white mb-6 uppercase">
            UK Drone Survey<br />
            <span className="text-accent">Locations</span>
          </h1>
          <p className="text-base font-light text-white/55 max-w-2xl leading-relaxed mb-12">
            TFTS Drone provides commercial drone surveys, inspections and thermal imaging across the UK.
            Operations are planned site-specifically — airspace, access and output requirements are
            assessed individually for every location.
          </p>
          <Link
            href="/brief"
            className="group inline-flex items-center gap-3 bg-accent text-white px-7 py-4 text-sm font-normal rounded-[2px] hover:bg-accent-light transition-all shadow-[0_0_20px_rgba(0,102,255,0.2)]"
          >
            Discuss Your Location <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Priority Locations Grid */}
      <section className="py-20 px-8 md:px-20 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <div className="svc-tag mb-8"><SectionTag number="01" text="Priority Locations" /></div>
            <h2 className="font-display text-4xl text-white uppercase tracking-tighter">
              Key Commercial<br />
              <span className="text-accent">Service Areas</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {priorityLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group relative p-12 bg-dark hover:bg-accent/[0.03] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all">
                  <ArrowRight className="w-5 h-5 text-accent rotate-[-45deg]" />
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span className="font-ui text-[10px] tracking-[0.35em] uppercase text-accent">{loc.region}</span>
                </div>
                <h3 className="font-display text-3xl text-white mb-4 uppercase tracking-wide group-hover:text-accent transition-colors">
                  {loc.name}
                </h3>
                <p className="font-body text-[12px] text-white/40 leading-relaxed mb-8 group-hover:text-white/60 transition-colors line-clamp-3">
                  {loc.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {loc.sectors.slice(0, 3).map((s) => (
                    <span key={s} className="px-3 py-1 border border-white/5 font-ui text-[9px] tracking-[0.3em] uppercase text-white/25">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 font-ui text-[11px] tracking-[0.3em] uppercase text-white/25 group-hover:text-accent transition-colors">
                  View Location Page <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Locations */}
      <section className="py-20 px-8 md:px-20 bg-dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <div className="svc-tag mb-8"><SectionTag number="02" text="Additional Coverage" /></div>
            <h2 className="font-display text-4xl text-white uppercase tracking-tighter">
              Further UK<br />
              <span className="text-accent">Service Locations</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {supportingLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group p-8 border border-white/5 hover:border-accent/20 transition-all duration-300 flex items-center justify-between"
              >
                <div>
                  <div className="font-ui text-[9px] tracking-[0.35em] uppercase text-white/25 mb-2">{loc.region}</div>
                  <h3 className="font-display text-xl text-white uppercase tracking-wide group-hover:text-accent transition-colors">
                    {loc.name}
                  </h3>
                </div>
                <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* UK-Wide Portfolio Section */}
      <section className="py-20 px-8 md:px-20 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="svc-tag mb-8"><SectionTag number="03" text="Multi-site" /></div>
            <h2 className="font-display text-4xl text-white uppercase tracking-tighter mb-6">
              UK-Wide Portfolio<br />
              <span className="text-accent">Survey Programmes</span>
            </h2>
            <p className="font-body text-base text-white/50 leading-relaxed mb-8">
              {ukWide.description}
            </p>
            <Link
              href={`/locations/${ukWide.slug}`}
              className="group inline-flex items-center gap-3 font-ui text-[11px] tracking-[0.3em] uppercase text-accent hover:text-white transition-colors border-b border-accent/30 pb-1"
            >
              Nationwide Portfolio Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="p-12 border border-white/10 bg-dark">
            <div className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent mb-6">Multi-site Capabilities</div>
            <ul className="space-y-4">
              {ukWide.useCases.map((uc, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1 h-1 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span className="font-body text-sm text-white/50">{uc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 md:px-20 bg-accent text-dark">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-display text-5xl md:text-6xl mb-8 uppercase tracking-tighter leading-[0.9]">
            Commercial Drone Services<br />
            <span className="underline decoration-dark/30 underline-offset-[8px]">Anywhere in the UK</span>
          </h2>
          <p className="font-body text-lg text-dark/65 max-w-xl mx-auto mb-12 leading-relaxed">
            Tell us your location and what you need — roof survey, thermal inspection, construction monitoring, or 3D digital capture. TFTS Drone will assess the site and recommend the right approach.
          </p>
          <Link
            href="/brief"
            className="group inline-flex items-center gap-5 bg-dark text-white px-10 py-7 font-display text-3xl tracking-[0.08em] transition-all hover:bg-white hover:text-dark shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
          >
            Start Project Brief <ArrowRight className="w-7 h-7 group-hover:translate-x-3 transition-transform duration-500" />
          </Link>
        </div>
      </section>
    </main>
  )
}
