// app/[crosspage]/page.tsx
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react'
import { getCrossPageData, getAllCrossPageSlugs } from '@/lib/cross-pages'
import VideoBackground from '@/components/ui/VideoBackground'
import FAQAccordion from '@/components/ui/FAQAccordion'

interface Props {
  params: Promise<{ crosspage: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCrossPageSlugs()
  return slugs.map((slug) => ({
    crosspage: slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { crosspage } = await params
  const data = getCrossPageData(crosspage)
  if (!data) return {}

  const title = `${data.service.title} ${data.location.name} — EntireFM Drone`
  const description = `Professional ${data.service.title.toLowerCase()} in ${data.location.name}. ${data.service.intro} Serving ${data.location.region} with CAA-compliant UAV technology.`

  return {
    title,
    description,
    alternates: {
      canonical: `/${crosspage}`,
    },
    openGraph: {
      title,
      description,
      url: `https://drone.entirefm.com/${crosspage}`,
      images: [{ url: '/images/og-default.jpg' }],
    },
  }
}

export default async function CrossPage({ params }: Props) {
  const { crosspage } = await params
  const data = getCrossPageData(crosspage)
  if (!data) notFound()

  const { service, location } = data

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} in ${location.name}`,
    description: service.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'EntireFM Drone',
      url: 'https://drone.entirefm.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: location.name,
        addressRegion: location.region,
        addressCountry: 'GB',
      },
    },
    areaServed: {
      '@type': 'City',
      name: location.name,
    },
  }

  return (
    <main className="bg-dark min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {(() => {
          const videoMap: Record<string, string> = {
            'drone-inspection': 'inspection',
            'roof-inspections': 'inspection',
            'facade-inspections': 'inspection',
            'building-envelope-inspections': 'inspection',
            'facilities-management-inspections': 'inspection',
            'commercial-property-drone-surveys': 'inspection',
            'dilapidation-drone-surveys': 'inspection',
            'infrastructure-inspections': 'inspection',
            'bridge-drone-inspections': 'inspection',
            'rail-corridor-surveys': 'inspection',
            'pipeline-corridor-surveys': 'inspection',
            'surveying-mapping': 'surveying',
            'construction-monitoring': 'construction',
            'volumetric-surveys': 'surveying',
            'orthomosaic-mapping': 'surveying',
            'lidar-point-cloud-surveys': 'surveying',
            'photogrammetry': 'surveying',
            'agricultural-surveys': 'agriculture',
            'thermal-imaging': 'thermal',
            'solar-panel-inspections': 'thermal',
            'aerial-photography-film': 'photography',
            'events-media': 'events',
            'heritage-conservation-archaeology': 'photography',
            'insurance-loss-adjuster-surveys': 'inspection',
            'emergency-response': 'thermal',
            'fpv-drone-filming': 'photography',
            '360-aerial-panoramas': 'photography',
            'digital-twin-capture': 'surveying',
            'gaussian-splat-capture': 'surveying',
            'construction-progress-photography': 'construction',
            'drone-time-lapse-monitoring': 'construction'
          }

          const assetBase = videoMap[service.slug] || 'inspection'
          const posterExt = assetBase === 'agriculture' || assetBase === 'events' || assetBase === 'thermal' ? 'jpg' : 'png'
          
          return (
            <VideoBackground 
              src={`/videos/${assetBase}.mp4`} 
              poster={`/images/${assetBase}_poster.${posterExt}`}
              alt={`${service.title} in ${location.name}`}
              brightness={0.35} 
              isHero={true}
            />
          )
        })()}
        <div className="grid-lines" />
        <div className="noise-overlay" />
        
        <div className="container relative z-10 px-8 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-12">
            <div className="flex items-center gap-4 mb-8 translate-y-4 opacity-0 animate-[fade-up_0.8s_0.2s_forwards]">
              <div className="w-12 h-[1px] bg-accent" />
              <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Strategic Deployment · {location.name}</span>
            </div>
            
            <h1 className="font-display text-[10vw] md:text-[6vw] leading-[0.85] text-white mb-12">
              {service.headline[0].toUpperCase()}<br/>
              <span className="text-accent">{location.name.toUpperCase()}</span>
            </h1>

            <p className="font-body text-xl md:text-2xl font-light text-white/50 max-w-2xl mb-12 opacity-0 animate-[fade-in_1s_1s_forwards]">
              {service.intro} EntireFM Drone is the leading provider of {service.title.toLowerCase()} for commercial and industrial clients across {location.name} and {location.region}.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 opacity-0 animate-[fade-in_1s_1.2s_forwards]">
              <Link 
                href="/contact"
                className="group flex items-center gap-6 bg-accent text-dark px-10 py-5 font-display text-2xl tracking-[0.1em] transition-all hover:bg-white"
              >
                REQUEST QUOTE <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Specific Content with Location Context */}
      <section className="py-32 border-b border-white/5">
        <div className="container px-8 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
            <div className="md:col-span-5">
              <h2 className="font-display text-5xl md:text-6xl text-white mb-12 leading-none uppercase">
                {service.title}<br/><span className="text-accent underline underline-offset-8">Local Expertise</span>
              </h2>
              <div className="space-y-8">
                <p className="font-body text-lg font-light text-white/60 leading-relaxed">
                  Our operations in {location.name} are managed by CAA GVC certified pilots with extensive experience in the {location.region} area. We understand the specific airspace challenges of {location.name}, including local restricted zones and coordination requirements.
                </p>
                <p className="font-body text-lg font-light text-white/40 leading-relaxed">
                  {service.problemStatement}
                </p>
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.capabilities.map((cap, i) => (
                  <div key={i} className="p-8 bg-white/5 border border-white/10 hover:border-accent/40 transition-colors group">
                    <CheckCircle2 className="w-5 h-5 text-accent mb-6" />
                    <h3 className="font-display text-2xl text-white mb-4 uppercase">{cap.title}</h3>
                    <p className="font-body text-sm text-white/40 leading-relaxed uppercase tracking-tighter">
                      {cap.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reliability Stats */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container px-8 md:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {service.heroStat.map((stat, i) => (
              <div key={i} className="border-x border-white/5 px-8">
                <div className="font-display text-5xl text-accent mb-2">{stat.value}</div>
                <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-dark">
        <div className="container px-8 md:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-5xl md:text-6xl text-white mb-12 uppercase text-center">{service.title} FAQ</h2>
            <FAQAccordion faqs={service.faqs.map(f => ({ question: f.q, answer: f.a }))} />
          </div>
        </div>
      </section>

      {/* Regional CTA */}
      <section className="py-32 border-t border-white/5">
        <div className="container px-8 md:px-20 text-center">
          <MapPin className="w-12 h-12 text-accent mx-auto mb-10" />
          <h2 className="font-display text-6xl md:text-8xl text-white mb-12 uppercase">
            NOW DEPLOYING ACROSS<br/><span className="text-accent underline underline-offset-[20px]">{location.name.toUpperCase()}</span>
          </h2>
          <p className="font-body text-xl text-white/40 max-w-2xl mx-auto mb-16 uppercase tracking-[0.2em]">
            Rapid response drone services for {location.name}&apos;s most demanding projects.
          </p>
          <Link 
            href="/contact"
            className="group inline-flex items-center gap-6 bg-accent text-dark px-16 py-8 font-display text-4xl tracking-[0.1em] transition-all hover:bg-white"
          >
            START PROJECT <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </main>
  )
}
