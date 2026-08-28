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
  Search, 
  BarChart3, 
  Camera, 
  Box, 
  ArrowUpRight,
  Shield,
  Clock,
  ChevronRight,
  AlertCircle,
  HelpCircle
} from 'lucide-react'
import { locationsData } from '@/lib/locations-data'
import { servicesData } from '@/lib/services-data'
import SectionTag from '@/components/ui/SectionTag'

interface Props {
  params: Promise<{ location: string }>
}

export async function generateStaticParams() {
  return locationsData.map((loc) => ({
    location: loc.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location } = await params
  const data = locationsData.find(l => l.slug === location)
  if (!data) return {}

  const title = `Drone Services ${data.name} | Commercial Surveys & Inspections | EntireFM Drone`
  const description = `EntireFM Drone provides commercial drone services in ${data.name}, including inspections, roof surveys, thermal imaging, construction monitoring, and 3D capture. CAA-compliant operations.`

  return {
    title,
    description,
    alternates: {
      canonical: `/locations/${location}`,
    },
  }
}

export default async function LocationPage({ params }: Props) {
  const { location } = await params
  const data = locationsData.find(l => l.slug === location)
  if (!data) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Commercial Drone Services in ${data.name}`,
    description: data.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'EntireFM Drone',
      url: 'https://drone.entirefm.com',
    },
    areaServed: {
      '@type': 'City',
      name: data.name,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Drone Services',
      itemListElement: servicesData.slice(0, 5).map((s, i) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
        },
      })),
    },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: data.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
  }

  // Get relevant services (limit to 8)
  const localServices = servicesData.slice(0, 8)

  return (
    <main className="bg-dark text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Local Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/fleet_m350.png" 
            alt={`Drone services in ${data.name}`}
            fill
            className="object-contain opacity-20 grayscale blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark" />
        </div>
        
        <div className="container relative z-10 px-8 md:px-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-8 translate-y-4 opacity-0 animate-[fade-up_0.8s_0.2s_forwards]">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Strategic Hub · {data.name}</span>
          </div>
          
          <h1 className="font-display text-[8vw] md:text-[6vw] leading-[0.85] text-white mb-10 uppercase tracking-tighter">
            DRONE SERVICES <br/>
            <span className="text-accent underline underline-offset-8 decoration-accent/30">{data.name.toUpperCase()}</span>
          </h1>

          <p className="font-body text-xl md:text-2xl font-light text-white/50 max-w-4xl mx-auto mb-12 opacity-0 animate-[fade-in_1s_1s_forwards] uppercase tracking-widest leading-relaxed">
            EntireFM Drone provides commercial drone inspections, surveying and mapping, thermal imaging, construction monitoring, aerial media and immersive 3D capture for {data.name} property, construction, infrastructure, energy and asset management projects.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 opacity-0 animate-[fade-in_1s_1.2s_forwards]">
            <Link 
              href={`/brief?location=${data.slug}`}
              className="group bg-accent text-dark px-10 py-6 font-display text-2xl tracking-widest flex items-center gap-4 hover:bg-white transition-all shadow-[0_20px_40px_rgba(205,174,130,0.15)]"
            >
              START PROJECT BRIEF <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link 
              href="/services"
              className="font-ui text-[14px] font-bold tracking-[0.4em] uppercase text-white/40 hover:text-white transition-colors"
            >
              View Drone Services
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 text-white/20 font-ui text-[10px] tracking-[0.3em] uppercase">
             <span>CAA-compliant operations</span>
             <span className="w-1 h-1 bg-white/20 rounded-full my-auto" />
             <span>GVC-qualified pilots</span>
             <span className="w-1 h-1 bg-white/20 rounded-full my-auto" />
             <span>Fully insured commercial drone services</span>
             <span className="w-1 h-1 bg-white/20 rounded-full my-auto" />
             <span>Site-specific flight planning</span>
          </div>
        </div>
      </section>

      {/* 2. Local Relevance Section */}
      <section className="py-32 px-8 md:px-20 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="svc-tag mb-8"><SectionTag number="01" text="Regional Operations" /></div>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-10 uppercase leading-none">
              DRONE SERVICES FOR <br/><span className="text-accent underline underline-offset-8 decoration-accent/30">{data.name.toUpperCase()} COMMERCIAL</span> ENVIRONMENTS
            </h2>
            <p className="font-body text-xl text-white/50 leading-relaxed mb-10 uppercase tracking-widest font-light italic">
              {data.localRelevance}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <h4 className="font-display text-lg text-white uppercase tracking-widest mb-2">CAA-Compliant</h4>
                    <p className="font-body text-[10px] text-white/40 uppercase tracking-widest">Operational Authorisation for commercial drone flights.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <h4 className="font-display text-lg text-white uppercase tracking-widest mb-2">Technical Data</h4>
                    <p className="font-body text-[10px] text-white/40 uppercase tracking-widest">High-accuracy mapping and high-resolution inspection evidence.</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="p-12 border border-white/10 bg-dark relative group overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 -translate-y-16 translate-x-16 rounded-full blur-3xl" />
             <div className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent mb-8">Service Summary</div>
             <p className="font-body text-white/60 leading-relaxed uppercase tracking-widest text-sm mb-12">
               {data.description}
             </p>
             <Link 
               href="/brief"
               className="flex items-center gap-4 font-ui text-[12px] font-bold tracking-[0.3em] uppercase text-white hover:text-accent transition-colors"
             >
               Discuss a {data.name} Project <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>

      {/* 3. Services Available in this Location */}
      <section className="py-32 px-8 md:px-20 bg-dark">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-xl">
              <div className="svc-tag mb-8"><SectionTag number="02" text="Capability" /></div>
              <h2 className="font-display text-6xl text-white uppercase tracking-tighter leading-none">
                DRONE SERVICES <br/><span className="text-accent">AVAILABLE IN {data.name.toUpperCase()}</span>
              </h2>
            </div>
            <Link href="/services" className="font-ui text-[12px] tracking-[0.3em] uppercase text-white/40 hover:text-white transition-colors border-b border-white/10 pb-2 mb-2">
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 shadow-2xl">
            {localServices.map((svc, i) => (
              <Link 
                key={svc.slug} 
                href={`/services/${svc.slug}`}
                className="group relative p-12 bg-dark hover:bg-accent/[0.03] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-all">
                  <ArrowUpRight className="w-6 h-6 text-accent" />
                </div>
                <span className="block font-ui text-[10px] tracking-[0.4em] uppercase text-white/20 mb-8 group-hover:text-accent transition-colors">
                  {svc.category}
                </span>
                <h3 className="font-display text-3xl text-white mb-6 uppercase tracking-widest leading-tight group-hover:text-accent transition-colors">
                  {svc.title.replace('Services UK', '').replace('UK', '')}
                </h3>
                <p className="font-body text-[11px] text-white/40 uppercase tracking-widest leading-relaxed mb-10 group-hover:text-white/60 transition-colors">
                  {svc.intro.substring(0, 120)}...
                </p>
                <div className="flex items-center gap-3 text-white/20 font-ui text-[10px] tracking-[0.3em] uppercase group-hover:text-white/60 transition-colors">
                  LEARN MORE <ChevronRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Local Sectors Section */}
      <section className="py-32 px-8 md:px-20 bg-mid">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
             <div className="svc-tag mb-8 inline-flex"><SectionTag number="03" text="Sectors" /></div>
             <h2 className="font-display text-6xl text-white uppercase tracking-tighter">SECTORS WE SUPPORT <br/><span className="text-accent">IN {data.name.toUpperCase()}</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.sectors.map((sector) => (
              <div 
                key={sector}
                className="p-10 border border-white/5 bg-white/[0.01] hover:border-accent/20 transition-all text-center group"
              >
                <div className="font-ui text-[11px] tracking-[0.3em] uppercase text-white/40 group-hover:text-accent transition-colors">
                  {sector}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Local Operational Considerations */}
      <section className="py-32 px-8 md:px-20 bg-dark border-y border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
           <div className="lg:col-span-5">
              <div className="svc-tag mb-8"><SectionTag number="04" text="Compliance" /></div>
              <h2 className="font-display text-5xl text-white uppercase leading-none tracking-tighter mb-10">LOCAL FLIGHT <br/><span className="text-accent">PLANNING</span></h2>
              <p className="font-body text-lg text-white/50 uppercase tracking-widest leading-relaxed mb-8">
                {data.operationalConsiderations}
              </p>
              <div className="p-8 border border-accent/20 bg-accent/[0.02]">
                 <p className="font-ui text-[11px] tracking-[0.2em] uppercase text-accent leading-relaxed italic">
                    Drone operations in {data.name} are planned around the site, surrounding environment, airspace, weather and risk profile.
                 </p>
              </div>
           </div>
           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Airspace Review", desc: "Full check of NATS and local airspace restrictions." },
                { title: "Site Access", desc: "Coordination with landowners and site managers." },
                { title: "Nearby Property", desc: "Assessment of overflight and privacy requirements." },
                { title: "Weather Limits", desc: "Real-time monitoring of wind and visibility constraints." },
                { title: "Ground Safety", desc: "Securing take-off and landing points." },
                { title: "Permissions", desc: "Management of any required NATS or local authority clearances." }
              ].map((item, i) => (
                <div key={i} className="p-8 border border-white/5 bg-white/[0.02]">
                   <h4 className="font-display text-xl text-white uppercase tracking-widest mb-4 flex items-center gap-3">
                     <CheckCircle2 className="w-5 h-5 text-accent" /> {item.title}
                   </h4>
                   <p className="font-body text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
                     {item.desc}
                   </p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. Popular Commercial Packages */}
      <section className="py-32 px-8 md:px-20 bg-mid">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
             <div className="svc-tag mb-8 inline-flex"><SectionTag number="05" text="Packages" /></div>
             <h2 className="font-display text-6xl text-white uppercase tracking-tighter">POPULAR DRONE <br/><span className="text-accent">PACKAGES IN {data.name.toUpperCase()}</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.popularBundles.map((bundleSlug) => (
              <Link 
                key={bundleSlug}
                href={`/bundles#${bundleSlug}`}
                className="p-12 border border-white/10 bg-dark group hover:border-accent transition-all duration-500"
              >
                <div className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent mb-6">Commercial Bundle</div>
                <h3 className="font-display text-3xl text-white mb-8 uppercase tracking-widest leading-tight group-hover:text-accent transition-colors">
                  {bundleSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </h3>
                <div className="flex items-center gap-3 text-white/30 font-ui text-[11px] tracking-[0.3em] uppercase group-hover:text-white transition-colors">
                  VIEW PACKAGE DETAILS <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Nearby Location Links */}
      <section className="py-20 px-8 md:px-20 bg-dark border-t border-white/5">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
           <h4 className="font-display text-2xl text-white uppercase tracking-widest shrink-0">NEARBY SERVICE AREAS</h4>
           <div className="flex flex-wrap justify-center gap-6">
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
        </div>
      </section>

      {/* 8. Local FAQ Section */}
      <section className="py-32 px-8 md:px-20 bg-[#0a0a0a]">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-24">
             <HelpCircle className="w-16 h-16 text-accent/20 mx-auto mb-8" />
             <h2 className="font-display text-6xl text-white uppercase tracking-tighter">{data.name.toUpperCase()} <span className="text-accent">PROJECT FAQS</span></h2>
          </div>

          <div className="space-y-6">
            {data.faqs.map((faq, i) => (
              <div key={i} className="p-10 border border-white/5 bg-dark group">
                <h3 className="font-display text-2xl text-white mb-6 uppercase tracking-widest group-hover:text-accent transition-colors">
                  {faq.q}
                </h3>
                <p className="font-body text-lg text-white/50 leading-relaxed uppercase tracking-widest font-light">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-8 md:px-20 bg-accent text-dark">
        <div className="max-w-[1200px] mx-auto text-center">
          <Target className="w-16 h-16 mx-auto mb-10 text-dark/80" />
          <h2 className="font-display text-6xl md:text-8xl mb-10 uppercase tracking-tighter leading-[0.85]">
            NEED DRONE SERVICES <br/>IN <span className="underline decoration-dark/30 underline-offset-[10px]">{data.name.toUpperCase()}?</span>
          </h2>
          <p className="font-body text-xl md:text-2xl text-dark/70 max-w-3xl mx-auto mb-16 uppercase tracking-widest font-medium leading-relaxed">
            Tell us what you need to inspect, measure, monitor, film or visualise. EntireFM Drone will review the location, site constraints and required output before recommending the right drone capture route.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link 
              href={`/brief?location=${data.slug}`}
              className="group flex items-center gap-6 bg-dark text-white px-12 py-8 font-display text-4xl tracking-[0.1em] transition-all hover:bg-white hover:text-dark w-full sm:w-auto shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
            >
              START PROJECT BRIEF <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition-transform duration-500" />
            </Link>
            <Link 
              href="/services"
              className="font-ui text-[14px] font-bold tracking-[0.5em] uppercase text-dark/60 hover:text-dark transition-colors"
            >
              View Drone Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function CheckCircle2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
