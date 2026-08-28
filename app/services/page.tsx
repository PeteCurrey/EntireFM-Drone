// app/services/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, Search, Building2, Hammer, BarChart3, 
  Camera, ShieldAlert, ShieldCheck, Zap, Box, LayoutGrid, 
  ChevronRight, CheckCircle2, MapPin, Target, Activity
} from 'lucide-react'
import VideoBackground from '@/components/ui/VideoBackground'
import FAQAccordion from '@/components/ui/FAQAccordion'
import SectionTag from '@/components/ui/SectionTag'

export const metadata: Metadata = {
  title: 'Commercial Drone Services UK | Drone Surveys, Inspections & Aerial Media | EntireFM Drone',
  description: 'EntireFM Drone provides commercial drone services across the UK, including drone inspections, roof surveys, thermal imaging, construction monitoring, mapping, photogrammetry, Gaussian Splat capture, digital twin visualisation and aerial media.',
}

const CATEGORIES = [
  {
    title: "Infrastructure & Energy",
    description: "Drone inspections and aerial data capture for infrastructure assets, utilities, renewable energy sites, corridors, structures and hard-to-access operational environments.",
    cta: "Explore Infrastructure Drone Services",
    href: "/services/infrastructure-inspections",
    services: [
      { name: "Infrastructure Inspections", slug: "infrastructure-inspections", desc: "Aerial inspection evidence for bridges, structures, towers, industrial assets and high-level infrastructure." },
      { name: "Utilities & Energy Inspections", slug: "utilities-energy-inspections", desc: "Drone support for utility assets, energy sites, corridors, substations and operational infrastructure." },
      { name: "Solar Panel Inspections", slug: "solar-panel-inspections", desc: "Visual and thermal drone inspections for rooftop solar arrays, commercial PV systems and solar farms." },
      { name: "Volumetric Surveys", slug: "volumetric-surveys", desc: "Drone-based measurement for stockpiles, earthworks, aggregates, waste materials and site quantities." },
      { name: "Bridge Drone Inspections", slug: "bridge-drone-inspections", desc: "High-level visual capture for bridge structures, access-restricted details and inspection evidence." },
      { name: "Rail & Highway Corridor Surveys", slug: "rail-corridor-surveys", desc: "Aerial corridor mapping and inspection support for transport, infrastructure and linear assets." },
      { name: "Pipeline Corridor Surveys", slug: "pipeline-corridor-surveys", desc: "Aerial monitoring and corridor capture for pipelines, utility routes, land corridors and remote assets." }
    ]
  },
  {
    title: "Construction & Surveying",
    description: "Drone mapping, progress monitoring, site measurement and visual reporting for contractors, developers, surveyors and project teams.",
    cta: "Explore Survey & Construction Services",
    href: "/services/surveying-mapping",
    services: [
      { name: "Surveying & Mapping", slug: "surveying-mapping", desc: "Drone mapping outputs including orthomosaics, 3D models, point clouds and survey-ready deliverables." },
      { name: "Construction Monitoring", slug: "construction-monitoring", desc: "Repeat aerial capture for progress records, stakeholder updates, investor reporting and site visibility." },
      { name: "Orthomosaic Mapping", slug: "orthomosaic-mapping", desc: "High-resolution aerial maps for sites, land, development areas, estates and construction projects." },
      { name: "Drone Photogrammetry", slug: "photogrammetry", desc: "3D models, textured meshes and point-cloud outputs created from high-overlap drone imagery." },
      { name: "LiDAR Point Cloud Surveys", slug: "lidar-point-cloud-surveys", desc: "Specialist point-cloud capture for terrain, infrastructure, vegetation and complex survey environments." },
      { name: "Stockpile Volume Surveys", slug: "stockpile-volume-surveys", desc: "Material quantity evidence and volume calculations for aggregates, quarry, earthworks and waste sites." },
      { name: "Cut & Fill Analysis", slug: "cut-fill-analysis", desc: "Drone-supported earthworks measurement and cut/fill reporting for construction and civil projects." },
      { name: "Construction Progress Photography", slug: "construction-progress-photography", desc: "Consistent site imagery for progress meetings, reporting, marketing and project evidence." }
    ]
  },
  {
    title: "Property & Assets",
    description: "Drone inspections and asset condition capture for commercial property, facilities management, landlords, managing agents, surveyors and insurers.",
    cta: "Explore Property Drone Services",
    href: "/services/commercial-property-drone-surveys",
    services: [
      { name: "Drone Roof Inspections", slug: "roof-inspections", desc: "High-resolution roof, gutter, drainage and roof plant inspection evidence without defaulting to scaffolding." },
      { name: "Building Envelope Inspections", slug: "building-envelope-inspections", desc: "External condition capture for facades, cladding, parapets, glazing, masonry and high-level details." },
      { name: "Facade Inspections", slug: "facade-inspections", desc: "Aerial visual inspection support for elevations, cladding, glazing, brickwork and access-restricted facades." },
      { name: "Commercial Property Drone Surveys", slug: "commercial-property-drone-surveys", desc: "Aerial condition evidence for offices, industrial estates, retail parks, warehouses and managed properties." },
      { name: "Facilities Management Inspections", slug: "facilities-management-inspections", desc: "Drone-supported planned maintenance evidence for FM teams, asset managers and property portfolios." },
      { name: "Dilapidation Drone Surveys", slug: "dilapidation-drone-surveys", desc: "Before, during and after condition records to support lease, works, contractor and property disputes." },
      { name: "Heritage & Conservation Surveys", slug: "heritage-conservation-archaeology", desc: "Sensitive aerial capture for listed buildings, historic assets, conservation projects and archaeology." }
    ]
  },
  {
    title: "Specialist & Response",
    description: "Advanced drone outputs for thermal imaging, insurance evidence, emergency response, media capture, immersive 3D visualisation and digital twin-style assets.",
    cta: "Explore Specialist Drone Outputs",
    href: "/services/thermal-imaging",
    services: [
      { name: "Thermal Drone Surveys", slug: "thermal-imaging", desc: "Thermal imaging for buildings, roofs, solar panels, infrastructure, heat loss and asset condition investigations." },
      { name: "Insurance & Loss Adjuster Surveys", slug: "insurance-loss-adjuster-surveys", desc: "Fast aerial evidence capture for storm damage, fire damage, flood impact, roof damage and claim support." },
      { name: "Emergency Drone Response", slug: "emergency-response", desc: "Urgent drone capture for post-incident evidence, damage assessment and access-restricted site review." },
      { name: "Events & Media", slug: "events-media", desc: "Aerial filming and photography for venues, events, brand campaigns, tourism and commercial content." },
      { name: "FPV Drone Filming", slug: "fpv-drone-filming", desc: "Dynamic indoor and outdoor flythrough content for venues, property, events, factories and branded media." },
      { name: "Gaussian Splat Capture", slug: "gaussian-splat-capture", desc: "Photorealistic 3D visualisation from drone imagery for immersive site viewing and stakeholder engagement." },
      { name: "Drone Digital Twin Capture", slug: "digital-twin-capture", desc: "Visual digital twin-style capture for assets, sites, buildings, estates, progress records and visual documentation." },
      { name: "360 Aerial Panoramas", slug: "360-aerial-panoramas", desc: "Interactive aerial panoramas for developments, venues, estates, tourism, public consultation and site context." }
    ]
  }
]

const OUTCOMES = [
  {
    title: "I need to inspect something",
    text: "For roofs, facades, buildings, assets, solar panels, damage evidence and high-level inspection requirements.",
    cta: "View Inspection Services",
    links: [
      { name: "Drone Inspection", href: "/services/drone-inspection" },
      { name: "Roof Inspections", href: "/services/roof-inspections" },
      { name: "Building Envelope Inspections", href: "/services/building-envelope-inspections" },
      { name: "Thermal Imaging", href: "/services/thermal-imaging" },
      { name: "Insurance & Claims", href: "/services/insurance-loss-adjuster-surveys" }
    ]
  },
  {
    title: "I need to measure or map something",
    text: "For land, stockpiles, earthworks, construction sites, corridors and survey data outputs.",
    cta: "View Survey Services",
    links: [
      { name: "Surveying & Mapping", href: "/services/surveying-mapping" },
      { name: "Orthomosaic Mapping", href: "/services/orthomosaic-mapping" },
      { name: "Photogrammetry", href: "/services/photogrammetry" },
      { name: "LiDAR Point Clouds", href: "/services/lidar-point-cloud-surveys" },
      { name: "Volumetric Surveys", href: "/services/volumetric-surveys" },
      { name: "Cut & Fill Analysis", href: "/services/cut-fill-analysis" }
    ]
  },
  {
    title: "I need to monitor progress",
    text: "For contractors, developers, investors and project teams needing regular visual evidence and progress reporting.",
    cta: "View Monitoring Services",
    links: [
      { name: "Construction Monitoring", href: "/services/construction-monitoring" },
      { name: "Construction Progress Photography", href: "/services/construction-progress-photography" },
      { name: "Drone Time-Lapse Monitoring", href: "/services/drone-time-lapse-monitoring" },
      { name: "Survey Data Pack", href: "/bundles" },
      { name: "Construction Progress Pack", href: "/bundles" }
    ]
  },
  {
    title: "I need marketing visuals",
    text: "For property, venues, tourism, events, commercial campaigns and premium brand content.",
    cta: "View Media Services",
    links: [
      { name: "Aerial Photography & Film", href: "/services/aerial-photography-film" },
      { name: "Events & Media", href: "/services/events-media" },
      { name: "FPV Drone Filming", href: "/services/fpv-drone-filming" },
      { name: "360 Aerial Panoramas", href: "/services/360-aerial-panoramas" },
      { name: "Visual Sales Pack", href: "/bundles" }
    ]
  },
  {
    title: "I need immersive 3D capture",
    text: "For visualisation, walkthroughs, stakeholder engagement, heritage documentation and digital twin-style outputs.",
    cta: "View 3D Capture Services",
    links: [
      { name: "Gaussian Splat Capture", href: "/services/gaussian-splat-capture" },
      { name: "Drone Photogrammetry", href: "/services/photogrammetry" },
      { name: "Digital Twin Capture", href: "/services/digital-twin-capture" },
      { name: "360 Aerial Panoramas", href: "/services/360-aerial-panoramas" },
      { name: "Immersive Digital Capture Pack", href: "/bundles" }
    ]
  }
]

const BUNDLES = [
  "Roof Intelligence Pack",
  "Building Envelope & Asset Condition Pack",
  "Construction Progress Pack",
  "Survey Data Pack",
  "Visual Sales Pack",
  "Insurance & Incident Evidence Pack",
  "Solar & Energy Asset Pack",
  "Immersive Digital Capture Pack"
]

const SECTORS = [
  { name: "Construction", desc: "Progress monitoring, site mapping, earthworks measurement and stakeholder reporting." },
  { name: "Facilities Management", desc: "Roof, gutter, facade, asset and thermal evidence for planned maintenance and property reporting." },
  { name: "Commercial Property", desc: "Aerial evidence for offices, industrial estates, retail parks and managed assets." },
  { name: "Infrastructure", desc: "Specialist inspection support for bridges, transport networks and industrial structures." },
  { name: "Utilities & Energy", desc: "Corridor monitoring, solar PV inspections and renewable energy asset audits." },
  { name: "Insurance", desc: "Aerial evidence capture for damage, claims, access-restricted inspections and contractor scoping." },
  { name: "Agriculture & Estates", desc: "Field mapping, crop health analytics and estate boundary visualisation." },
  { name: "Heritage & Conservation", desc: "Non-destructive digital preservation and condition auditing for listed assets." },
  { name: "Events & Media", desc: "High-end visual content for brand campaigns, tourism and large-scale venues." },
  { name: "Public Sector", desc: "Estate condition auditing and visual intelligence for councils and public bodies." }
]

const LOCATIONS = [
  "London", "Manchester", "Birmingham", "Leeds", "Sheffield", "Chesterfield", "Derby", "Nottingham", "Bristol", "Liverpool", "Glasgow", "UK-wide drone services"
]

const FAQS = [
  { 
    question: "What drone service do I need?", 
    answer: "It depends on the outcome required. If you need visual evidence, start with inspection services. If you need measurements or maps, start with surveying and mapping. If you need progress records, use construction monitoring. If you need promotional content, use aerial photography and film. If you need immersive visualisation, use Gaussian Splat, photogrammetry or digital twin capture." 
  },
  { 
    question: "Can EntireFM Drone help define the right drone output?", 
    answer: "Yes. Clients do not need to know the technical workflow before making contact. EntireFM Drone can advise on the right capture method, deliverables, permissions and processing route based on the project objective." 
  },
  { 
    question: "Do drone inspections replace scaffolding or MEWPs?", 
    answer: "Drone inspections can reduce the need for access equipment during initial inspection and evidence capture, but repair works, invasive checks or hands-on inspection may still require physical access." 
  },
  { 
    question: "Are drone survey outputs survey-grade?", 
    answer: "Survey-grade outputs are available where the project is scoped with appropriate methodology, control, processing and accuracy verification. Survey-grade accuracy should not be assumed unless it is part of the agreed scope." 
  },
  { 
    question: "Can you provide reports as well as images?", 
    answer: "Yes. Depending on the service, deliverables can include annotated images, PDF summaries, progress reports, thermal image sets, orthomosaics, point clouds, volume reports, 3D models and visual evidence packs." 
  },
  { 
    question: "Do you operate across the UK?", 
    answer: "EntireFM Drone supports commercial drone work across the UK, subject to project requirements, airspace, permissions, weather, site constraints and scheduling." 
  }
]

export default function ServicesHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "EntireFM Drone Commercial Drone Services",
    "description": "Professional drone surveys, inspections, mapping and media services across the UK.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "EntireFM Drone"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": CATEGORIES.map((cat, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": cat.title,
        "description": cat.description
      }))
    }
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <main className="min-h-screen bg-dark">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-start px-10 md:px-20 pt-40 overflow-hidden">
        <VideoBackground 
          src="/videos/surveying.mp4" 
          poster="/images/surveying_poster.png" 
          brightness={0.25} 
          isHero={true}
        />
        
        <div className="relative z-10 max-w-[1000px]">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Commercial Service Hub</span>
          </div>
          <h1 className="font-display text-7xl md:text-8xl text-white mb-8 tracking-wider leading-none uppercase">
            COMMERCIAL <br/><span className="text-accent underline underline-offset-8">DRONE SERVICES</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/60 leading-relaxed mb-12 max-w-[800px] uppercase tracking-widest font-light">
            EntireFM Drone provides commercial drone inspections, surveying and mapping, thermal imaging, construction monitoring, aerial media, Gaussian Splat capture and digital twin-style visualisation for property, construction, infrastructure, energy, insurance and asset management teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 mb-16">
            <Link href="/brief?source=services-hero" className="bg-accent text-dark font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white transition-all text-center">
              START PROJECT BRIEF
            </Link>
            <Link href="/cost-estimator" className="border border-white/20 text-white font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white hover:text-dark transition-all text-center">
              ESTIMATE PROJECT COST
            </Link>
            <Link href="/bundles" className="border border-white/20 text-white font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white hover:text-dark transition-all text-center">
              VIEW COMMERCIAL PACKAGES
            </Link>
          </div>
          <div className="pt-10 border-t border-white/10 flex flex-wrap gap-8 items-center">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">CAA-compliant operations</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">GVC-qualified pilots</span>
            </div>
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-accent" />
              <span className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">Operational Authorisation</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">Fully Insured Operations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-10 md:px-20 bg-dark border-b border-white/5">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="svc-tag mb-12 inline-flex"><SectionTag number="00" text="Philosophy" /></div>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-10 uppercase tracking-tighter">CHOOSE THE <span className="text-accent underline underline-offset-8">OUTCOME</span> FIRST.</h2>
          <p className="font-body text-xl md:text-2xl text-white/50 max-w-[900px] mx-auto leading-relaxed uppercase tracking-widest font-light mb-16">
            Clients do not usually need a drone flight for its own sake. They need evidence, visibility, measurements, inspection records, progress updates, marketing assets or immersive visualisation. EntireFM Drone structures drone operations around the required output, then selects the right capture method, sensor, workflow and deliverable.
          </p>
          <div className="p-12 border border-white/5 bg-white/[0.02] inline-block">
             <span className="font-display text-3xl text-white uppercase tracking-widest italic">&quot;Choose the outcome first. We’ll structure the drone capture around it.&quot;</span>
          </div>
        </div>
      </section>

      {/* Choose Your Service Area */}
      {CATEGORIES.map((cat, i) => (
        <section key={cat.title} className={`py-32 px-10 md:px-20 ${i % 2 === 0 ? 'bg-mid' : 'bg-dark'} border-b border-white/5`}>
          <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10">
              <div className="max-w-2xl">
                <div className="svc-tag mb-8"><SectionTag number={`0${i + 1}`} text="Category" /></div>
                <h2 className="font-display text-6xl text-white mb-6 uppercase leading-none">{cat.title}</h2>
                <p className="font-body text-lg text-white/40 uppercase tracking-widest leading-relaxed">
                  {cat.description}
                </p>
              </div>
              <Link href={cat.href} className="group flex items-center gap-4 font-ui text-[11px] tracking-[0.4em] uppercase text-accent border border-accent/20 px-8 py-4 hover:bg-accent hover:text-dark transition-all self-end">
                {cat.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/5">
              {cat.services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="bg-dark p-10 group hover:bg-accent/5 transition-all flex flex-col h-full border border-transparent hover:border-accent/20">
                  <h3 className="font-display text-2xl text-white mb-5 uppercase tracking-widest group-hover:text-accent transition-colors">{service.name}</h3>
                  <p className="font-body text-[11px] text-white/30 uppercase tracking-tighter leading-relaxed mb-8 flex-1">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-2 text-accent/40 font-ui text-[9px] tracking-[0.3em] uppercase group-hover:text-accent transition-colors">
                    View Capability <ChevronRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Outcome-led Navigation Section */}
      <section className="py-32 px-10 md:px-20 bg-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-[0.02] pointer-events-none">
          <Target className="w-[500px] h-[500px]" />
        </div>
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-24">
             <div className="svc-tag mb-8 inline-flex"><SectionTag number="05" text="Strategy" /></div>
             <h2 className="font-display text-6xl text-white uppercase mb-4 tracking-tighter">NOT SURE WHICH SERVICE YOU NEED?</h2>
             <p className="font-ui text-xl text-accent tracking-[0.2em] uppercase mb-12">Start With the Required Output.</p>
             <Link href="/choose-your-output?source=services-hub" className="inline-flex items-center gap-6 bg-accent text-dark px-12 py-6 font-display text-2xl tracking-widest hover:bg-white transition-all">
                FIND THE RIGHT DELIVERABLE <ArrowRight className="w-6 h-6" />
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-white/10 border border-white/5">
            {OUTCOMES.map((outcome) => (
              <div key={outcome.title} className="bg-mid p-12 flex flex-col h-full border border-transparent hover:border-accent/30 transition-all">
                <h3 className="font-display text-3xl text-white mb-6 uppercase tracking-tight leading-[0.9]">{outcome.title}</h3>
                <p className="font-body text-[11px] text-white/40 uppercase tracking-widest leading-relaxed mb-10 flex-1">
                  {outcome.text}
                </p>
                <div className="space-y-4 mb-12 pt-8 border-t border-white/5">
                   {outcome.links.slice(0, 5).map(link => (
                     <Link key={link.name} href={link.href} className="flex items-center gap-2 font-ui text-[10px] tracking-widest uppercase text-white/30 hover:text-accent transition-colors">
                       <div className="w-1.5 h-1.5 bg-accent/20 rounded-full" />
                       {link.name}
                     </Link>
                   ))}
                </div>
                <Link href={`/brief?outcome=${outcome.title}&source=services-outcome-grid`} className="bg-white/5 text-white font-ui text-[10px] tracking-[0.4em] uppercase py-4 text-center border border-white/10 hover:bg-accent hover:text-dark transition-all">
                  {outcome.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Bundles Section */}
      <section className="py-32 px-10 md:px-20 bg-accent text-dark">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5">
            <span className="font-ui text-[12px] tracking-[0.4em] uppercase font-bold mb-4 block">Fixed Outcome Packages</span>
            <h2 className="font-display text-6xl uppercase leading-none mb-8 tracking-tighter">COMMERCIAL DRONE <br/><span className="underline decoration-dark/30 underline-offset-8">SERVICE BUNDLES</span></h2>
            <p className="font-body text-xl uppercase tracking-widest font-medium opacity-80 leading-relaxed mb-12">
              For clients who want a clearer route to delivery, EntireFM Drone packages common requirements into outcome-led commercial bundles. Each bundle combines capture, processing and usable deliverables around a specific project need.
            </p>
            <Link href="/bundles" className="inline-flex items-center gap-6 bg-dark text-white px-12 py-6 font-display text-3xl tracking-widest hover:bg-white hover:text-dark transition-all shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              VIEW BUNDLES <ArrowRight className="w-8 h-8" />
            </Link>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
             {BUNDLES.map(b => (
               <div key={b} className="p-6 border border-dark/10 bg-dark/5 font-ui text-[11px] tracking-widest uppercase font-bold flex items-center gap-4">
                  <div className="w-2 h-2 bg-dark rounded-full" />
                  {b}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Drone Services by Sector */}
      <section className="py-32 px-10 md:px-20 bg-dark border-y border-white/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="svc-tag mb-8"><SectionTag number="06" text="Verticals" /></div>
              <h2 className="font-display text-6xl text-white uppercase leading-none">DRONE SERVICES <br/><span className="text-accent">BY SECTOR</span></h2>
            </div>
            <p className="font-ui text-[11px] tracking-[0.3em] uppercase text-white/30 max-w-xs text-right">
              Strategic aerial intelligence tailored to the unique operational constraints of your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/5">
            {SECTORS.map((sector) => (
              <div key={sector.name} className="bg-mid p-10 group hover:bg-dark transition-all border border-transparent hover:border-accent/20">
                <h3 className="font-display text-2xl text-white mb-6 uppercase tracking-widest group-hover:text-accent transition-colors">{sector.name}</h3>
                <p className="font-body text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
                  {sector.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Link Section */}
      <section className="py-24 px-10 md:px-20 bg-dark">
        <div className="max-w-[1200px] mx-auto text-center">
           <h2 className="font-display text-4xl text-white uppercase mb-12 tracking-widest">DRONE SERVICES <span className="text-accent">ACROSS THE UK</span></h2>
           <p className="font-body text-sm text-white/40 uppercase tracking-widest mb-16 max-w-2xl mx-auto leading-relaxed">
             EntireFM Drone supports commercial drone projects across the UK, with priority service coverage for major cities, industrial regions, construction hubs and commercial property portfolios.
           </p>
           <div className="flex flex-wrap justify-center gap-4">
              {LOCATIONS.map(loc => (
                <Link key={loc} href={`/locations`} className="px-6 py-3 border border-white/5 bg-white/[0.02] font-ui text-[10px] tracking-widest uppercase text-white/40 hover:border-accent hover:text-accent transition-all">
                  {loc}
                </Link>
              ))}
           </div>
           <div className="mt-16">
              <Link href="/locations" className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent/60 hover:text-accent transition-colors flex items-center justify-center gap-3">
                VIEW ALL SERVICE LOCATIONS <ArrowRight className="w-4 h-4" />
              </Link>
           </div>
        </div>
      </section>

      {/* Browse by Industry Sector Section */}
      <section className="py-32 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 p-12 opacity-5 pointer-events-none hidden md:block">
          <span className="font-display text-[200px] leading-none text-white uppercase select-none">
            AUTHORITY
          </span>
        </div>
        <div className="container px-8 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="svc-tag mb-8"><SectionTag number="03" text="Context" /></div>
              <h2 className="font-display text-5xl md:text-7xl text-white mb-10 uppercase leading-none">
                BROWSE BY <br/>
                <span className="text-accent underline underline-offset-[10px] decoration-accent/30">INDUSTRY SECTOR</span>
              </h2>
              <p className="font-body text-xl md:text-2xl text-white/50 leading-relaxed font-light uppercase tracking-widest mb-12">
                EntireFM Drone provides specialist drone workflows for Facilities Management, Construction, Commercial Property, Insurance, Surveying and Infrastructure.
              </p>
              <Link 
                href="/sectors"
                className="group inline-flex items-center gap-6 bg-accent text-dark px-10 py-6 font-display text-2xl tracking-widest hover:bg-white transition-all"
              >
                VIEW ALL SECTOR HUBS <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Facilities Management', href: '/sectors/facilities-management' },
                { name: 'Construction', href: '/sectors/construction' },
                { name: 'Commercial Property', href: '/sectors/commercial-property' },
                { name: 'Insurance', href: '/sectors/insurance-loss-adjusters' },
                { name: 'Surveyors', href: '/sectors/surveyors' },
                { name: 'Infrastructure', href: '/sectors/infrastructure' }
              ].map((s, i) => (
                <Link 
                  key={i} 
                  href={s.href}
                  className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white hover:text-dark transition-all group"
                >
                  <span className="font-display text-lg uppercase tracking-widest block">{s.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-10 md:px-20 bg-mid border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="svc-tag mb-12"><SectionTag number="08" text="Execution" /></div>
          <h2 className="font-display text-6xl text-white mb-20 uppercase leading-none">HOW WE TURN A DRONE BRIEF <br/><span className="text-accent">INTO A USEFUL OUTPUT</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/5 border border-white/5">
            {[
              { step: '01', title: 'Define the outcome', desc: 'We confirm whether the client needs inspection evidence, survey data, marketing content, progress records or immersive visualisation.' },
              { step: '02', title: 'Plan the operation', desc: 'We review the site, airspace, permissions, weather, safety requirements, access points and deliverable requirements.' },
              { step: '03', title: 'Capture the data', desc: 'The flight is completed using the appropriate drone, sensor and capture workflow.' },
              { step: '04', title: 'Process the output', desc: 'Imagery, video, maps, models, reports or data outputs are processed into usable formats.' },
              { step: '05', title: 'Deliver and advise', desc: 'Final deliverables are issued with clear next-step guidance where appropriate.' }
            ].map((p, i) => (
              <div key={i} className="p-10 bg-dark relative group hover:bg-accent/5 transition-all">
                <span className="font-display text-6xl text-accent/10 mb-8 block group-hover:text-accent/30 transition-colors">{p.step}</span>
                <h3 className="font-display text-xl text-white mb-6 tracking-widest uppercase leading-tight">{p.title}</h3>
                <p className="font-body text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-10 md:px-20 bg-dark">
        <div className="max-w-4xl mx-auto">
          <div className="svc-tag mb-8"><SectionTag number="09" text="Support" /></div>
          <h2 className="font-display text-6xl text-white mb-16 uppercase leading-tight tracking-tighter">SERVICE HUB <br/><span className="text-accent underline underline-offset-8 decoration-accent/20">INSIGHTS</span></h2>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-10 md:px-20 bg-accent text-dark border-t border-white/10">
        <div className="max-w-[1200px] mx-auto text-center">
          <Activity className="w-12 h-12 mb-8 mx-auto animate-pulse" />
          <h2 className="font-display text-6xl md:text-8xl mb-8 leading-[0.8] uppercase tracking-tighter">
            TELL US WHAT YOU <br/>NEED TO <span className="underline decoration-dark/30 underline-offset-[10px]">INSPECT</span>
          </h2>
          <p className="font-body text-xl md:text-2xl text-dark/70 max-w-3xl mx-auto mb-16 uppercase tracking-widest font-medium leading-relaxed">
            Whether you know the exact service or only know the result you need, EntireFM Drone can structure the drone operation around the required output.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link 
              href="/brief?source=services-footer"
              className="group flex items-center gap-6 bg-dark text-white px-12 py-8 font-display text-4xl tracking-[0.1em] transition-all hover:bg-white hover:text-dark w-full sm:w-auto shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
            >
              START PROJECT BRIEF <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition-transform duration-500" />
            </Link>
            <Link 
              href="/bundles"
              className="font-ui text-[14px] font-bold tracking-[0.5em] uppercase text-dark/50 hover:text-dark transition-colors"
            >
              View Commercial Packages
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
