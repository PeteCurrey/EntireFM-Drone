import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Search, Target, FileText, Database } from 'lucide-react'
import { servicesData } from '@/lib/services-data'
import VideoBackground from '@/components/ui/VideoBackground'
import FAQAccordion from '@/components/ui/FAQAccordion'
import SectionTag from '@/components/ui/SectionTag'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData.find(s => s.slug === slug)
  if (!service) return {}

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://drone.entirefm.com/services/${slug}`,
      images: [{ url: '/images/og-default.jpg' }],
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = servicesData.find(s => s.slug === slug)
  if (!service) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'EntireFM Drone',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title,
      itemListElement: service.capabilities.map((cap) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: cap.title,
          description: cap.description,
        },
      })),
    },
  }

  return (
    <main className="bg-dark min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {(() => {
          const videoMap: Record<string, string> = {
            'drone-inspection': 'inspection',
            'roof-inspections': 'inspection',
            'facade-inspections': 'inspection',
            'building-envelope-inspections': 'inspection',
            'facilities-management-inspections': 'inspection',
            'commercial-property-drone-surveys': 'inspection',
            'dilapidation-drone-surveys': 'inspection',
            'insurance-loss-adjuster-surveys': 'inspection',
            'infrastructure-inspections': 'inspection',
            'utilities-energy-inspections': 'inspection',
            'bridge-drone-inspections': 'inspection',
            'rail-corridor-surveys': 'inspection',
            'pipeline-corridor-surveys': 'inspection',
            'surveying-mapping': 'surveying',
            'volumetric-surveys': 'surveying',
            'orthomosaic-mapping': 'surveying',
            'lidar-point-cloud-surveys': 'surveying',
            'photogrammetry': 'surveying',
            'digital-twin-capture': 'surveying',
            'gaussian-splat-capture': 'surveying',
            'cut-fill-analysis': 'surveying',
            'stockpile-volume-surveys': 'surveying',
            'construction-monitoring': 'construction',
            'construction-progress-photography': 'construction',
            'drone-time-lapse-monitoring': 'construction',
            'agricultural-surveys': 'agriculture',
            'thermal-imaging': 'thermal',
            'solar-panel-inspections': 'thermal',
            'emergency-response': 'thermal',
            'aerial-photography-film': 'photography',
            'fpv-drone-filming': 'photography',
            '360-aerial-panoramas': 'photography',
            'heritage-conservation-archaeology': 'photography',
            'events-media': 'events'
          }

          const assetBase = videoMap[slug] || 'inspection'
          const posterExt = assetBase === 'agriculture' || assetBase === 'events' || assetBase === 'thermal' ? 'jpg' : 'png'
          
          return (
            <VideoBackground 
              src={`/videos/${assetBase}.mp4`} 
              poster={`/images/${assetBase}_poster.${posterExt}`}
              alt={`${service.title} cinematic background`}
              brightness={0.35} 
              isHero={true}
            />
          )
        })()}
        <div className="grid-lines" />
        <div className="noise-overlay" />
        
        <div className="container relative z-10 px-8 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <div className="flex items-center gap-4 mb-8 translate-y-4 opacity-0 animate-[fade-up_0.8s_0.2s_forwards]">
              <div className="w-12 h-[1px] bg-accent" />
              <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">{service.category}</span>
            </div>
            
            <h1 className="text-[clamp(2.25rem,3.7vw,3.5rem)] font-extralight tracking-[-0.04em] leading-[1.02] text-white mb-5 sm:mb-6">
              {service.headline.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <span className={`block translate-y-full animate-[reveal-up_1s_forwards] ${i === service.headline.length - 1 ? 'text-accent' : ''}`} style={{ animationDelay: `${0.4 + (i * 0.1)}s` }}>
                    {line}
                  </span>
                </div>
              ))}
            </h1>

            <p className="text-sm sm:text-base lg:text-[1.0625rem] font-light leading-relaxed text-white/70 max-w-2xl mb-8 opacity-0 animate-[fade-in_1s_1s_forwards]">
              {service.intro}
            </p>

            {/* Stats Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/10 opacity-0 animate-[fade-in_1s_1.2s_forwards]">
              {service.heroStat.map((stat, i) => (
                <div key={i}>
                  <div className="font-display text-4xl text-accent mb-2">{stat.value}</div>
                  <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-32 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none hidden md:block">
          <span className="font-display text-[200px] leading-none text-white uppercase select-none">
            STRATEGY
          </span>
        </div>
        <div className="container px-8 md:px-20">
          <div className="max-w-4xl">
            <div className="svc-tag mb-8"><SectionTag number="01" text="Problem Statement" /></div>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-12 uppercase leading-[0.9]">
              CHALLENGING THE <br/>
              <span className="text-accent underline underline-offset-[10px] decoration-accent/30">STATUS QUO</span>
            </h2>
            <p className="font-body text-xl md:text-2xl text-white/60 leading-relaxed font-light italic">
              &quot;{service.problemStatement}&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities & Industries */}
      <section className="py-32 border-b border-white/5">
        <div className="container px-8 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5">
              <div className="svc-tag mb-8"><SectionTag number="02" text="Capabilities" /></div>
              <h2 className="font-display text-5xl md:text-6xl text-white mb-12 leading-none uppercase">
                TECHNICAL <br/>EXCELLENCE
              </h2>
              <div className="space-y-6">
                {service.capabilities.map((cap, i) => (
                  <div key={i} className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-accent hover:text-dark transition-all duration-300">
                    <h3 className="font-display text-2xl mb-4 tracking-widest uppercase">{cap.title}</h3>
                    <p className="font-body text-sm opacity-60 leading-relaxed uppercase tracking-tighter group-hover:opacity-100">
                      {cap.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                <div className="p-10 border border-white/10 bg-dark group hover:border-accent/30 transition-colors">
                  <div className="flex items-center gap-4 mb-8">
                    <Target className="w-6 h-6 text-accent" />
                    <h3 className="font-display text-2xl text-white uppercase tracking-wider">What We Capture</h3>
                  </div>
                  <ul className="space-y-4">
                    {service.whatWeCapture.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/40 font-ui text-[11px] tracking-widest uppercase leading-tight group-hover:text-white/70 transition-colors">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-10 border border-white/10 bg-dark group hover:border-accent/30 transition-colors">
                  <div className="flex items-center gap-4 mb-8">
                    <FileText className="w-6 h-6 text-accent" />
                    <h3 className="font-display text-2xl text-white uppercase tracking-wider">What You Receive</h3>
                  </div>
                  <ul className="space-y-4">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/40 font-ui text-[11px] tracking-widest uppercase leading-tight group-hover:text-white/70 transition-colors">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-12 bg-white/[0.01] border border-white/5">
                <h4 className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/30 mb-8">Key Industrial Sectors</h4>
                <div className="flex flex-wrap gap-3">
                  {service.industries.map((ind, i) => {
                    const sectorMap: Record<string, string> = {
                      'Facilities Management': 'facilities-management',
                      'Construction': 'construction',
                      'Commercial Property': 'commercial-property',
                      'Insurance': 'insurance-loss-adjusters',
                      'Surveyors': 'surveyors',
                      'Infrastructure': 'infrastructure',
                      'Utilities': 'utilities-energy',
                      'Solar PV': 'solar-renewable-energy',
                      'Heritage': 'heritage-conservation',
                      'Events': 'events-venues-media',
                      'Agriculture': 'agriculture-rural-estates'
                    }
                    const slug = sectorMap[ind] || sectorMap[ind.split(' & ')[0]] || sectorMap[ind.split(' / ')[0]]
                    
                    if (slug) {
                      return (
                        <Link 
                          key={i} 
                          href={`/sectors/${slug}`}
                          className="px-5 py-2 border border-white/10 font-ui text-[11px] tracking-widest uppercase text-white/60 hover:border-accent hover:text-accent transition-colors"
                        >
                          {ind}
                        </Link>
                      )
                    }
                    return (
                      <span key={i} className="px-5 py-2 border border-white/10 font-ui text-[11px] tracking-widest uppercase text-white/60">
                        {ind}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Use Cases Section */}
      <section className="py-32 bg-mid relative overflow-hidden">
        <div className="container px-8 md:px-20">
          <div className="svc-tag mb-12"><SectionTag number="03" text="Common Use Cases" /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.useCases.map((use, i) => (
              <div key={i} className="group border-l border-white/10 pl-8 py-4">
                <h3 className="font-display text-2xl text-white mb-4 tracking-widest uppercase group-hover:text-accent transition-colors">
                  {use.title}
                </h3>
                <p className="font-body text-sm text-white/40 leading-relaxed uppercase tracking-tighter">
                  {use.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-dark border-y border-white/5 relative overflow-hidden">
        <div className="container px-8 md:px-20">
          <div className="svc-tag mb-12"><SectionTag number="04" text="Execution Workflow" /></div>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-16 uppercase leading-none">
            HOW THE <br/><span className="text-accent">PROCESS WORKS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Project Brief', desc: 'We define the site, objective, deliverables, access constraints, and safety requirements.' },
              { step: '02', title: 'Flight Planning', desc: 'We review airspace, permissions, weather, take-off areas, and operational constraints.' },
              { step: '03', title: 'Drone Capture', desc: 'The flight is completed using the appropriate drone, sensor, and capture workflow for the outcome.' },
              { step: '04', title: 'Processing', desc: 'Imagery, maps, or data are processed into a usable, high-fidelity client-ready format.' },
              { step: '05', title: 'Delivery', desc: 'Final assets are issued via our secure terminal with clear next-step guidance.' }
            ].map((p, i) => (
              <div key={i} className="p-8 bg-white/[0.02] border border-white/5 relative group hover:border-accent/30 transition-all">
                <span className="font-display text-4xl text-accent/20 mb-6 block group-hover:text-accent transition-colors">{p.step}</span>
                <h3 className="font-display text-xl text-white mb-4 tracking-widest uppercase">{p.title}</h3>
                <p className="font-body text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Bundle Section */}
      <section className="py-24 bg-accent text-dark">
        <div className="container px-8 md:px-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <span className="font-ui text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">Strategic Recommendation</span>
              <h2 className="font-display text-4xl md:text-5xl uppercase leading-none mb-6">
                ACCELERATE YOUR <br/>PROJECT WITH A <span className="underline decoration-dark/20 underline-offset-4">BUNDLE</span>
              </h2>
              <p className="font-body text-sm uppercase tracking-widest font-medium opacity-70">
                This service is a core component of our specialized commercial packages, designed to provide comprehensive site intelligence at a fixed investment level.
              </p>
            </div>
            <Link 
              href="/bundles"
              className="group bg-dark text-white px-10 py-6 font-display text-2xl tracking-widest flex items-center gap-4 hover:bg-white hover:text-dark transition-all"
            >
              EXPLORE BUNDLES <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Linking / Related Services Hub */}
      <section className="py-32 border-b border-white/5 bg-white/[0.02]">
        <div className="container px-8 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="svc-tag mb-6"><SectionTag number="06" text="Service Hub" /></div>
              <h2 className="font-display text-5xl md:text-6xl text-white uppercase leading-none">
                RELATED <br/><span className="text-accent">INTELLIGENCE</span>
              </h2>
            </div>
            <p className="font-body text-sm text-white/40 uppercase tracking-widest max-w-xs text-right">
              Explore complementary services to enhance your asset visibility and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData
              .filter(s => service.relatedServices.includes(s.slug))
              .map((related, i) => (
                <Link 
                  key={related.slug} 
                  href={`/services/${related.slug}`}
                  className="group p-10 border border-white/5 bg-dark hover:border-accent/30 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <span className="font-ui text-[10px] text-accent/40 mb-6 block tracking-[0.3em] uppercase">0{i + 1} {"//"} COMPLEMENTARY</span>
                    <h3 className="font-display text-2xl text-white mb-6 group-hover:text-accent transition-colors uppercase leading-none">{related.title.replace(' UK', '')}</h3>
                    <p className="font-body text-xs text-white/30 leading-relaxed uppercase mb-10 line-clamp-3">
                      {related.intro}
                    </p>
                    <div className="flex items-center gap-2 text-accent font-ui text-[11px] tracking-[0.3em] uppercase group-hover:gap-4 transition-all">
                      VIEW SERVICE <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Database className="w-20 h-20 text-white" />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-dark relative">
        <div className="container px-8 md:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="svc-tag mb-8"><SectionTag number="07" text="Support" /></div>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-16 uppercase leading-tight">TECHNICAL <br/><span className="text-accent underline underline-offset-8 decoration-accent/20">INSIGHTS</span></h2>
            <div className="space-y-4">
              <FAQAccordion faqs={service.faqs.map(f => ({ question: f.q, answer: f.a }))} />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 border-t border-white/5 bg-accent">
        <div className="container px-8 md:px-20 text-center text-dark">
          <div className="flex flex-center justify-center mb-8">
            <div className="px-4 py-1 border border-dark/20 font-ui text-[10px] tracking-[0.3em] uppercase font-bold">
              Compliance: CAA PDRA-01 / GVC Operational Authorisation
            </div>
          </div>
          <h2 className="font-display text-7xl md:text-[10vw] mb-12 leading-[0.8] uppercase tracking-tighter">
            INITIATE <br/>
            <span className="underline decoration-dark/20 underline-offset-[10px]">OPERATIONS</span>
          </h2>
          <p className="font-body text-xl text-dark/70 max-w-2xl mx-auto mb-16 uppercase tracking-[0.2em] font-medium leading-relaxed">
            Deployment-ready aerial intelligence for commercial, industrial and infrastructure assets.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link 
              href={service.cta.href}
              className="group flex items-center gap-6 bg-dark text-white px-12 py-7 font-display text-3xl tracking-[0.1em] transition-all hover:bg-white hover:text-dark w-full sm:w-auto"
            >
              {service.cta.label} <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform duration-300" />
            </Link>
            <Link 
              href="/brief"
              className="font-ui text-[14px] font-bold tracking-[0.4em] uppercase text-dark/40 hover:text-dark transition-colors"
            >
              Start Project Briefing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
