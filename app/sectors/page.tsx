'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Building2, 
  Hammer, 
  Map as MapIcon, 
  ShieldCheck, 
  Zap, 
  Camera, 
  ArrowRight,
  Target,
  Activity,
  ChevronRight,
  HardHat,
  LayoutDashboard,
  Factory,
  Globe,
  Trees,
  Clapperboard,
  School
} from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import VideoBackground from '@/components/ui/VideoBackground'

const SECTOR_CATEGORIES = [
  {
    title: "Property & Assets",
    description: "Inspection, condition monitoring and marketing visuals for commercial property portfolios, managed assets and facilities management teams.",
    sectors: [
      { name: "Facilities Management", href: "/sectors/facilities-management", icon: Building2, desc: "Roof inspections, planned maintenance and asset condition records." },
      { name: "Commercial Property", href: "/sectors/commercial-property", icon: Target, desc: "Building envelope inspections, facade checks and property visuals." },
      { name: "Managing Agents & Landlords", href: "/sectors/managing-agents-landlords", icon: ClipboardCheck, desc: "Condition evidence, dilapidation records and tenant-side reporting." },
      { name: "Industrial Estates & Warehousing", href: "/sectors/industrial-estates-warehousing", icon: Factory, desc: "Large-scale roof audits, site monitoring and asset visibility." }
    ]
  },
  {
    title: "Construction & Surveying",
    description: "Progress monitoring, site mapping, volumetric surveys and high-accuracy data capture for contractors, developers and technical teams.",
    sectors: [
      { name: "Construction", href: "/sectors/construction", icon: HardHat, desc: "Progress photography, stakeholder updates and site logistics monitoring." },
      { name: "Surveyors & Mapping Professionals", href: "/sectors/surveyors", icon: MapIcon, desc: "Orthomosaics, point clouds, LiDAR and survey-supported outputs." },
      { name: "Developers & Property Marketing", href: "/sectors/developers-property-marketing", icon: LayoutDashboard, desc: "Aerial media, 360 panoramas and Gaussian Splat visualisation." },
      { name: "Civil Engineering", href: "/sectors/civil-engineering", icon: Hammer, desc: "Infrastructure monitoring, cut & fill analysis and site data." }
    ]
  },
  {
    title: "Infrastructure & Energy",
    description: "Specialist inspection and mapping support for utility networks, energy assets, transport infrastructure and hard-to-access structures.",
    sectors: [
      { name: "Infrastructure", href: "/sectors/infrastructure", icon: Globe, desc: "Bridge inspections, corridor monitoring and structural evidence." },
      { name: "Utilities & Energy", href: "/sectors/utilities-energy", icon: Zap, desc: "Network monitoring, pipeline surveys and asset condition audits." },
      { name: "Solar PV & Renewable Energy", href: "/sectors/solar-renewable-energy", icon: Zap, desc: "Visual and thermal inspections for solar farms and PV arrays." }
    ]
  },
  {
    title: "Specialist Sectors",
    description: "Outcome-led drone services for insurance evidence, heritage documentation, emergency response and commercial media projects.",
    sectors: [
      { name: "Insurance & Loss Adjusters", href: "/sectors/insurance-loss-adjusters", icon: ShieldCheck, desc: "Post-incident damage evidence, storm damage and claim support." },
      { name: "Heritage & Conservation", href: "/sectors/heritage-conservation", icon: Target, desc: "Sensitive aerial capture, digital preservation and condition records." },
      { name: "Events, Venues & Media", href: "/sectors/events-venues-media", icon: Camera, desc: "Cinematic film, photography, FPV flythroughs and brand content." },
      { name: "Agriculture & Rural Estates", href: "/sectors/agriculture-rural-estates", icon: Trees, desc: "Field mapping, crop health analytics and estate boundary records." },
      { name: "Public Sector & Education", href: "/sectors/public-sector-education", icon: School, desc: "Estate condition auditing and visual intelligence for public bodies." },
      { name: "Film & Location Scouting", href: "/sectors/film-location-scouting", icon: Clapperboard, desc: "High-end cinematic capture and location visibility for production." }
    ]
  }
]

export default function SectorsPage() {
  return (
    <main className="min-h-screen bg-dark pb-32">
      {/* Hero */}
      <header className="relative h-[80vh] flex items-center justify-start px-10 md:px-20 pt-40 overflow-hidden">
        <VideoBackground 
          src="/videos/construction.mp4" 
          poster="/images/construction_poster.png" 
          brightness={0.3} 
          isHero={true}
        />
        
        <div className="relative z-10 max-w-[1000px]">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Sector Expertise</span>
          </div>
          <h1 className="font-display text-7xl md:text-8xl text-white mb-8 tracking-tighter leading-none uppercase">
            DRONE SERVICES <br/><span className="text-accent underline underline-offset-8 decoration-accent/30">BY SECTOR</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/60 leading-relaxed mb-12 max-w-[800px] uppercase tracking-widest font-light">
            Explore commercial drone inspection, surveying, mapping, thermal imaging, aerial media and immersive capture workflows tailored to the unique operational constraints of your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 mb-16">
            <Link href="/brief?source=sectors-index" className="bg-accent text-dark font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white transition-all text-center flex items-center justify-center gap-4 group">
              Start Project Brief <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/project-brief-assistant" className="border border-white/20 text-white font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white hover:text-dark transition-all text-center">
              Use Brief Assistant
            </Link>
          </div>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-32 px-10 md:px-20 bg-dark border-b border-white/5 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="svc-tag mb-12 inline-flex"><SectionTag number="00" text="Philosophy" /></div>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-10 uppercase tracking-tighter leading-none">THE VALUE OF <span className="text-accent">SPECIFICITY.</span></h2>
          <p className="font-body text-xl text-white/40 uppercase tracking-widest leading-relaxed font-light">
            Commercial drone projects require more than just a flight. They require sector-specific understanding of risks, outputs, reporting standards and deliverable requirements. EntireFM Drone structures every mission around the industry it serves.
          </p>
        </div>
      </section>

      {/* Sector Categories */}
      {SECTOR_CATEGORIES.map((cat, i) => (
        <section key={cat.title} className={`py-32 px-10 md:px-20 ${i % 2 === 0 ? 'bg-mid' : 'bg-dark'} border-b border-white/5`}>
          <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12">
              <div className="max-w-3xl">
                <div className="svc-tag mb-8"><SectionTag number={`0${i + 1}`} text="Division" /></div>
                <h2 className="font-display text-6xl text-white mb-6 uppercase tracking-tight">{cat.title}</h2>
                <p className="font-body text-lg text-white/40 uppercase tracking-widest leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/5">
              {cat.sectors.map((sector) => (
                <Link 
                  key={sector.name} 
                  href={sector.href}
                  className="bg-dark p-12 group hover:bg-accent/[0.03] transition-all flex flex-col h-full border border-transparent hover:border-accent/20"
                >
                  <div className="mb-10">
                    <sector.icon className="w-10 h-10 text-accent/40 group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-display text-3xl text-white mb-6 uppercase tracking-tight leading-[0.9] group-hover:text-accent transition-colors">{sector.name}</h3>
                  <p className="font-body text-xs text-white/30 uppercase tracking-widest leading-relaxed mb-12 flex-1">
                    {sector.desc}
                  </p>
                  <div className="flex items-center gap-3 text-accent/40 font-ui text-[10px] tracking-[0.3em] uppercase group-hover:text-accent transition-colors">
                    Explore Sector <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="py-40 px-10 md:px-20 bg-accent text-dark border-t border-white/10 text-center">
        <Activity className="w-12 h-12 mb-8 mx-auto animate-pulse" />
        <h2 className="font-display text-6xl md:text-8xl mb-8 leading-[0.8] uppercase tracking-tighter">
          NEED SECTOR-SPECIFIC <br/>DRONE <span className="underline decoration-dark/30 underline-offset-[10px]">SUPPORT?</span>
        </h2>
        <p className="font-body text-xl md:text-2xl text-dark/70 max-w-3xl mx-auto mb-16 uppercase tracking-widest font-medium leading-relaxed">
          Tell us about your industry requirements. EntireFM Drone will recommend the right capture workflow, sensors and deliverables for your project.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <Link 
            href="/brief?source=sectors-index-footer"
            className="group flex items-center gap-6 bg-dark text-white px-12 py-8 font-display text-4xl tracking-[0.1em] transition-all hover:bg-white hover:text-dark w-full sm:w-auto shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
          >
            START PROJECT BRIEF <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition-transform duration-500" />
          </Link>
          <Link 
            href="/choose-your-output"
            className="font-ui text-[14px] font-bold tracking-[0.5em] uppercase text-dark/50 hover:text-dark transition-colors"
          >
            Choose Your Output
          </Link>
        </div>
      </section>
    </main>
  )
}

function ClipboardCheck(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  )
}
