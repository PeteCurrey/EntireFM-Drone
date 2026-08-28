'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  LayoutDashboard, 
  ShieldCheck, 
  FileText, 
  Database,
  Image as ImageIcon,
  Box,
  Map as MapIcon,
  PlayCircle,
  Activity,
  ChevronRight,
  Monitor
} from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import FAQAccordion from '@/components/ui/FAQAccordion'

const DEMO_PORTALS = [
  {
    slug: 'roof-inspection',
    title: 'Roof Inspection Demo Portal',
    desc: 'A sample portal showing how roof inspection images, annotated defects, PDF summaries and contractor evidence can be organised for FM and property teams.',
    icon: ImageIcon,
    href: '/client-portal-demos/roof-inspection'
  },
  {
    slug: 'construction-monitoring',
    title: 'Construction Monitoring Demo Portal',
    desc: 'A sample construction progress portal showing dated image archives, milestone records, site updates and stakeholder reporting outputs.',
    icon: Activity,
    href: '/client-portal-demos/construction-monitoring'
  },
  {
    slug: 'survey-data',
    title: 'Survey Data Demo Portal',
    desc: 'A sample survey delivery portal showing orthomosaic maps, point clouds, stockpile volume reports, cut/fill summaries and export files.',
    icon: MapIcon,
    href: '/client-portal-demos/survey-data'
  },
  {
    slug: 'insurance-evidence',
    title: 'Insurance Evidence Demo Portal',
    desc: 'A sample evidence portal showing damage imagery, annotated inspection records, summary reports and contractor/insurance support files.',
    icon: ShieldCheck,
    href: '/client-portal-demos/insurance-evidence'
  },
  {
    slug: 'gaussian-splat',
    title: 'Gaussian Splat / 3D Capture Demo Portal',
    desc: 'A sample immersive capture portal showing Gaussian Splat screenshots, flythrough video, 3D visualisation assets and related deliverables.',
    icon: Box,
    href: '/client-portal-demos/gaussian-splat'
  },
  {
    slug: 'aerial-media',
    title: 'Aerial Media Demo Portal',
    desc: 'A sample media delivery portal showing aerial image packs, edited videos, social clips, website hero loops and download-ready assets.',
    icon: PlayCircle,
    href: '/client-portal-demos/aerial-media'
  }
]

const FAQS = [
  {
    question: "Are these real client portals?",
    answer: "These are representative demo portals showing potential delivery formats. Real client portals and project outputs depend on scope, confidentiality, deliverables and agreed service requirements."
  },
  {
    question: "Can EntireFM Drone provide a portal for my project?",
    answer: "Where suitable, project outputs can be organised into a structured delivery area or client-facing portal format to help teams review, share and download deliverables."
  },
  {
    question: "What can a client portal include?",
    answer: "A portal can include project summaries, image galleries, annotated evidence, PDF reports, maps, videos, Gaussian Splat previews, download links and next-step records depending on the project."
  },
  {
    question: "Are client portals private?",
    answer: "Real client portals are private and access-controlled. These public pages are demos only to showcase the delivery experience."
  },
  {
    question: "Can the portal support repeat visits?",
    answer: "Yes. A portal-style structure is especially useful for repeat construction monitoring, portfolio inspections, planned maintenance and before-and-after records."
  }
]

export default function ClientPortalDemosIndex() {
  return (
    <main className="min-h-screen bg-dark pb-32">
      {/* Hero */}
      <header className="relative py-48 px-10 md:px-20 bg-mid overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-[1200px]">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Delivery Experience</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl text-white mb-8 tracking-tighter leading-none uppercase">
            CLIENT PORTAL <br/><span className="text-accent underline underline-offset-8 decoration-accent/30">DEMO EXPERIENCE</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/60 leading-relaxed mb-12 max-w-[900px] uppercase tracking-widest font-light">
            See how EntireFM Drone can organise drone project outputs into clear client-facing portals — from roof inspections and construction progress records to survey data, insurance evidence, aerial media and Gaussian Splat visualisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 mb-16">
            <Link href="/brief?source=portal-demos-index" className="bg-accent text-dark font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white transition-all text-center flex items-center justify-center gap-4 group">
              Start Project Brief <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/sample-deliverables" className="bg-white text-dark font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-accent transition-all text-center">
              View Sample Deliverables
            </Link>
          </div>
          <div className="pt-10 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-4 items-center font-ui text-[10px] tracking-[0.2em] uppercase text-white/30">
            <SnapshotBadge text="Project Summary" />
            <SnapshotBadge text="Image Galleries" />
            <SnapshotBadge text="Reports" />
            <SnapshotBadge text="Maps" />
            <SnapshotBadge text="Media" />
            <SnapshotBadge text="3D Previews" />
            <SnapshotBadge text="Download Records" />
          </div>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-32 px-10 md:px-20 bg-dark border-b border-white/5">
        <div className="max-w-[1000px] mx-auto text-center">
          <div className="svc-tag mb-12 inline-flex"><SectionTag number="00" text="Delivery" /></div>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-10 uppercase tracking-tighter leading-tight">
            A BETTER WAY TO <span className="text-accent">RECEIVE DRONE OUTPUTS</span>
          </h2>
          <p className="font-body text-xl text-white/40 uppercase tracking-widest leading-relaxed font-light mb-12">
            Commercial drone work should not end with a random folder of files. EntireFM Drone can organise project outputs into structured client-facing portals so teams can review imagery, download reports, inspect evidence, track progress and share deliverables with stakeholders.
          </p>
          <p className="font-display text-3xl text-accent uppercase tracking-widest">
            The capture matters. The delivery experience matters just as much.
          </p>
        </div>
      </section>

      {/* Demo Grid */}
      <section className="py-32 px-10 md:px-20 bg-dark">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/5">
            {DEMO_PORTALS.map((portal) => (
              <Link 
                key={portal.slug} 
                href={portal.href}
                className="bg-mid p-12 group hover:bg-accent/[0.03] transition-all flex flex-col h-full border border-transparent hover:border-accent/20"
              >
                <div className="mb-10 w-16 h-16 bg-dark border border-white/10 flex items-center justify-center group-hover:border-accent transition-colors">
                  <portal.icon className="w-8 h-8 text-accent/40 group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-display text-3xl text-white mb-6 uppercase tracking-tight group-hover:text-accent transition-colors">{portal.title}</h3>
                <p className="font-body text-xs text-white/30 uppercase tracking-widest leading-relaxed mb-12 flex-1">
                  {portal.desc}
                </p>
                <div className="flex items-center gap-3 text-accent/40 font-ui text-[10px] tracking-[0.3em] uppercase group-hover:text-accent transition-colors">
                  View Demo Portal <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 px-10 md:px-20 bg-mid border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="svc-tag mb-8"><SectionTag number="01" text="Support" /></div>
          <h2 className="font-display text-5xl text-white mb-16 uppercase tracking-tighter leading-tight">DEMO PORTAL <span className="text-accent underline underline-offset-8 decoration-accent/20">FAQs</span></h2>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-10 md:px-20 text-center bg-dark">
        <div className="max-w-4xl mx-auto">
          <Monitor className="w-16 h-16 mb-8 mx-auto animate-pulse text-accent" />
          <h2 className="font-display text-6xl md:text-8xl text-white uppercase tracking-tighter mb-8 leading-[0.8]">
            READY FOR A <br/><span className="text-accent underline underline-offset-[10px] decoration-accent/30">BETTER DELIVERY?</span>
          </h2>
          <p className="font-body text-xl text-white/50 uppercase tracking-widest leading-relaxed mb-16 max-w-2xl mx-auto font-light">
            Tell us about your project requirements. EntireFM Drone will structure the delivery format around your specific project outputs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link href="/brief?source=portal-demos-index-footer" className="bg-accent text-dark font-display text-3xl tracking-[0.1em] px-12 py-8 hover:bg-white transition-all flex items-center justify-center gap-4 group">
              Start Project Brief <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
            <Link href="/project-brief-assistant" className="border border-white/20 text-white font-display text-3xl tracking-[0.1em] px-12 py-8 hover:bg-white hover:text-dark transition-all">
              Use Brief Assistant
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function SnapshotBadge({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-2">
      <div className="w-1 h-1 bg-accent/40 rounded-full" />
      {text}
    </span>
  )
}
