// app/portfolio/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Filter, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  ShieldCheck, 
  Box,
  Building2,
  Construction,
  Zap,
  ArrowUpRight
} from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import { portfolioProjects } from '@/lib/portfolio-data'

export const metadata: Metadata = {
  title: 'Drone Project Workflows, Mission Profiles & Case Studies | EntireFM Drone',
  description: 'Explore EntireFM Drone’s portfolio of drone project workflows, mission profiles and commercial use cases across property, infrastructure, energy and construction.',
}

export default function PortfolioPage() {
  return (
    <main className="bg-dark text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-8 md:px-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Commercial Proof</span>
          </div>
          
          <h1 className="font-display text-[8vw] md:text-[6vw] leading-[0.85] text-white mb-10 uppercase tracking-tighter">
            DRONE PROJECT WORKFLOWS, <br/>
            <span className="text-accent">MISSION PROFILES</span> & <br/>
            COMMERCIAL USE CASES
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10 pb-16">
            <div className="lg:col-span-8">
              <p className="font-body text-xl md:text-2xl font-light text-white/50 max-w-3xl uppercase tracking-widest leading-relaxed">
                Explore how EntireFM Drone’s drone services can support commercial inspections, surveying, construction monitoring, insurance evidence, aerial media and immersive 3D capture across property, infrastructure, energy and asset management environments.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end gap-6">
              <Link 
                href="/brief"
                className="group bg-accent text-dark px-10 py-6 font-display text-2xl tracking-widest flex items-center gap-4 hover:bg-white transition-all w-full lg:w-auto justify-center"
              >
                START PROJECT BRIEF <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <p className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/20 italic max-w-[300px] text-right">
                Some examples may be anonymised or presented as mission profiles to protect client confidentiality or demonstrate service workflows. Verified case studies are labelled clearly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section (Visual Only for now) */}
      <section className="px-8 md:px-20 mb-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap gap-3">
             {["All", "Verified Case Studies", "Anonymised Profiles", "Mission Profiles", "Inspection", "Surveying & Mapping", "Construction Monitoring", "Thermal", "Insurance", "Aerial Media", "Gaussian Splat / 3D Capture"].map((tab) => (
               <button 
                 key={tab}
                 className={`px-6 py-2 border font-ui text-[11px] tracking-widest uppercase transition-all ${tab === "All" ? "border-accent text-accent bg-accent/5" : "border-white/10 text-white/40 hover:border-white/30 hover:text-white"}`}
               >
                 {tab}
               </button>
             ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-8 md:px-20 pb-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {portfolioProjects.map((project) => (
            <Link key={project.slug} href={`/portfolio/${project.slug}`} className="group">
              <div className="relative aspect-[16/10] bg-white/5 border border-white/10 overflow-hidden mb-8">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-6 left-6 font-ui text-[10px] tracking-[0.3em] uppercase bg-accent text-dark px-4 py-1.5 font-bold">
                  {project.label}
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div className="max-w-[80%]">
                  <div className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-3">{project.sector}</div>
                  <h3 className="font-display text-4xl text-white mb-6 uppercase tracking-wider group-hover:text-accent transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-white/40 uppercase tracking-widest leading-relaxed mb-8 line-clamp-3">
                    {project.intro}
                  </p>
                  <div className="flex items-center gap-2 text-accent font-ui text-[11px] tracking-[0.3em] uppercase group-hover:gap-4 transition-all">
                    EXPLORE MISSION PROFILE <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-dark transition-all duration-500 shrink-0">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 border-t border-white/5 bg-accent text-dark">
        <div className="container mx-auto px-8 md:px-20 text-center">
          <div className="font-ui text-[11px] tracking-[0.4em] uppercase font-bold mb-8">Initiate Operations</div>
          <h2 className="font-display text-6xl md:text-8xl mb-12 uppercase tracking-tighter leading-none">
            HAVE A SPECIFIC <br/>
            <span className="underline decoration-dark/30 underline-offset-[10px]">REQUIREMENT?</span>
          </h2>
          <p className="font-body text-xl md:text-2xl text-dark/70 max-w-3xl mx-auto mb-16 uppercase tracking-widest font-medium leading-relaxed">
            Tell us what you need to inspect, measure, monitor or visualise. EntireFM Drone will recommend the right capture workflow and deliverables.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link 
              href="/brief" 
              className="group flex items-center gap-8 bg-dark text-white px-12 py-8 font-display text-4xl tracking-[0.1em] transition-all hover:bg-white hover:text-dark w-full sm:w-auto shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
            >
              START PROJECT BRIEF <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
