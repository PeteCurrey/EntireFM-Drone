'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Download, 
  Eye, 
  FileText, 
  Image as ImageIcon, 
  PlayCircle, 
  Box, 
  Map as MapIcon, 
  CheckCircle2, 
  Info,
  ExternalLink,
  Activity,
  LayoutDashboard,
  ShieldAlert,
  Clock,
  Briefcase,
  Layers
} from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'

interface Deliverable {
  title: string
  type: string
  desc: string
  status: 'Available' | 'Sample' | 'Preview'
  actionLabel?: string
}

interface PortalLayoutProps {
  slug: string
  title: string
  subtitle: string
  projectTitle: string
  serviceCategory: string
  bundleName: string
  statusText: string
  summary: string
  deliverables: Deliverable[]
  galleryCategories: string[]
  nextSteps: string[]
  relatedLinks: { title: string, href: string }[]
  ctaText: string
}

export default function PortalLayout({
  slug,
  title,
  subtitle,
  projectTitle,
  serviceCategory,
  bundleName,
  statusText,
  summary,
  deliverables,
  galleryCategories,
  nextSteps,
  relatedLinks,
  ctaText
}: PortalLayoutProps) {
  return (
    <main className="min-h-screen bg-[#080808] text-white font-body pb-32">
      {/* Demo Top Bar */}
      <div className="bg-accent py-2 px-10 text-center flex items-center justify-center gap-4 border-b border-dark/10 relative z-50">
        <ShieldAlert className="w-4 h-4 text-dark" />
        <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-dark font-bold">
          Demo Client Portal · Representative Delivery Format · Sample Data Only
        </span>
      </div>

      {/* Portal Header */}
      <header className="px-10 md:px-20 pt-16 pb-12 bg-mid border-b border-white/5">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
                <span className="font-ui text-[9px] tracking-widest uppercase text-accent">Active Demo</span>
              </div>
              <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-white/30">{statusText}</span>
            </div>
            <h1 className="text-[clamp(2rem,3.1vw,2.75rem)] font-extralight tracking-[-0.035em] leading-[1.05] text-white mb-3 uppercase">{title}</h1>
            <p className="font-body text-sm text-white/40 uppercase tracking-widest max-w-2xl">{subtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
            <Link href={`/brief?source=portal-demo-${slug}`} className="bg-accent text-dark font-display text-xl tracking-[0.1em] px-8 py-4 hover:bg-white transition-all flex items-center justify-center gap-3 group">
              {ctaText} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </header>

      {/* Project Snapshot Bar */}
      <div className="px-10 md:px-20 py-8 bg-dark border-b border-white/5 overflow-x-auto">
        <div className="max-w-[1600px] mx-auto flex items-center gap-12 min-w-max">
          <SnapshotItem icon={Briefcase} label="Service" value={serviceCategory} />
          <SnapshotItem icon={Layers} label="Bundle" value={bundleName} />
          <SnapshotItem icon={Clock} label="Status" value="Ready for Review" />
          <SnapshotItem icon={Activity} label="Site Type" value="Commercial Asset" />
        </div>
      </div>

      <div className="px-10 md:px-20 py-20 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-16">
            {/* Project Summary */}
            <section className="bg-mid p-12 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <h2 className="font-display text-3xl uppercase tracking-widest mb-8 text-white flex items-center gap-4">
                <Info className="w-6 h-6 text-accent" /> Project Summary
              </h2>
              <p className="font-body text-lg text-white/60 leading-relaxed uppercase tracking-widest font-light mb-8">
                {summary}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div>
                  <h4 className="font-ui text-[10px] tracking-widest uppercase text-white/30 mb-4">Site Location</h4>
                  <p className="font-body text-sm text-white/80 uppercase tracking-widest">Representative Site · UK Territory</p>
                </div>
                <div>
                  <h4 className="font-ui text-[10px] tracking-widest uppercase text-white/30 mb-4">Capture Methodology</h4>
                  <p className="font-body text-sm text-white/80 uppercase tracking-widest">Automated Grid · EntireFM Flight Desk Scoped</p>
                </div>
              </div>
            </section>

            {/* Gallery / Preview */}
            <section>
              <div className="flex justify-between items-end mb-10">
                <h2 className="font-display text-3xl uppercase tracking-widest text-white">Representative Previews</h2>
                <div className="flex gap-4">
                  {galleryCategories.map((cat, i) => (
                    <button key={i} className={`font-ui text-[9px] tracking-widest uppercase px-4 py-2 border transition-all ${i === 0 ? 'bg-accent border-accent text-dark font-bold' : 'bg-white/5 border-white/10 text-white/40 hover:border-white/30'}`}>
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5 border border-white/5 overflow-hidden">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-video bg-mid relative group overflow-hidden">
                    <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/0 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Eye className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-dark/60 backdrop-blur-md px-3 py-1 border border-white/10">
                      <span className="font-ui text-[8px] tracking-widest uppercase text-white/60">Sample Preview 0{i}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Next Steps */}
            <section className="bg-accent/5 p-12 border border-accent/10">
              <h2 className="font-display text-3xl uppercase tracking-widest text-white mb-8">Utilisation & Next Steps</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {nextSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 border border-white/5 bg-dark/30">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-3 h-3 text-accent" />
                    </div>
                    <p className="font-ui text-[10px] tracking-widest uppercase text-white/60 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar / Deliverables */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-mid border border-white/5 p-8">
              <h3 className="font-display text-xl uppercase tracking-widest mb-8 border-b border-white/5 pb-4">Deliverables Panel</h3>
              <div className="space-y-4">
                {deliverables.map((del, i) => (
                  <div key={i} className="p-5 bg-dark border border-white/5 group hover:border-accent/40 transition-all">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <DeliverableIcon type={del.type} />
                        <span className="font-display text-sm uppercase tracking-widest text-white">{del.title}</span>
                      </div>
                      <div className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-sm">
                        <span className="font-ui text-[7px] tracking-widest uppercase text-white/40">{del.status}</span>
                      </div>
                    </div>
                    <p className="font-body text-[9px] text-white/30 uppercase tracking-widest mb-4 leading-relaxed">
                      {del.desc}
                    </p>
                    <button className="w-full py-2 bg-white/5 border border-white/10 font-ui text-[8px] tracking-[0.3em] uppercase text-white/40 group-hover:bg-accent group-hover:text-dark group-hover:border-accent transition-all flex items-center justify-center gap-2">
                      {del.actionLabel || 'Preview Sample'} <Download className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Context */}
            <div className="bg-dark border border-white/5 p-8">
              <h3 className="font-display text-lg uppercase tracking-widest mb-6">Related Context</h3>
              <div className="space-y-3">
                {relatedLinks.map((link, i) => (
                  <Link key={i} href={link.href} className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 hover:border-accent/30 transition-all group">
                    <span className="font-ui text-[9px] tracking-widest uppercase text-white/40 group-hover:text-white transition-colors">{link.title}</span>
                    <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-accent transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Operations Trust */}
            <div className="p-8 border border-accent/20 bg-accent/5">
              <h4 className="font-display text-sm uppercase tracking-widest text-white mb-4">Operational Standard</h4>
              <p className="font-body text-[10px] text-white/40 uppercase tracking-widest leading-relaxed mb-6">
                Delivery managed through EntireFM Flight Desk workflow.
              </p>
              <Link href="/operations-standard" className="font-ui text-[9px] tracking-widest uppercase text-accent hover:text-white transition-colors flex items-center gap-2">
                View Standard <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <section className="px-10 md:px-20 py-20 bg-mid border-y border-white/5 text-center">
        <div className="max-w-3xl mx-auto">
          <ShieldAlert className="w-10 h-10 text-accent/20 mx-auto mb-6" />
          <h3 className="font-display text-2xl uppercase tracking-widest text-white mb-6">Demo Portal Information</h3>
          <p className="font-body text-xs text-white/40 uppercase tracking-[0.2em] leading-relaxed">
            These demo portals show representative delivery formats. Final client portals, reports and deliverables depend on project scope, service type and agreed outputs. EntireFM Drone ensures all real client data is hosted in private, secure environments.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-10 md:px-20 text-center">
        <LayoutDashboard className="w-16 h-16 text-accent/20 mx-auto mb-10" />
        <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-8 leading-none">
          Want this delivery <br/>experience <span className="text-accent underline underline-offset-[10px] decoration-accent/30">for your project?</span>
        </h2>
        <p className="font-body text-lg text-white/50 uppercase tracking-widest leading-relaxed mb-16 max-w-2xl mx-auto font-light">
          Tell us what you need to capture, measure or monitor. We will structure the portal around your specific project outputs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          <Link href={`/brief?source=portal-demo-${slug}-footer`} className="bg-accent text-dark font-display text-3xl tracking-[0.1em] px-12 py-8 hover:bg-white transition-all flex items-center justify-center gap-4 group">
            {ctaText} <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-500" />
          </Link>
          <Link href="/sample-deliverables" className="border border-white/20 text-white font-display text-3xl tracking-[0.1em] px-12 py-8 hover:bg-white hover:text-dark transition-all">
            View All Samples
          </Link>
        </div>
      </section>
    </main>
  )
}

function SnapshotItem({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value: string }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm group-hover:border-accent/40 transition-colors">
        <Icon className="w-5 h-5 text-accent/40 group-hover:text-accent transition-colors" />
      </div>
      <div>
        <p className="font-ui text-[8px] tracking-[0.3em] uppercase text-white/30 mb-1">{label}</p>
        <p className="font-display text-sm tracking-widest uppercase text-white group-hover:text-accent transition-colors">{value}</p>
      </div>
    </div>
  )
}

function DeliverableIcon({ type }: { type: string }) {
  switch (type.toLowerCase()) {
    case 'image': return <ImageIcon className="w-4 h-4 text-accent/50" />
    case 'report': return <FileText className="w-4 h-4 text-accent/50" />
    case 'map': return <MapIcon className="w-4 h-4 text-accent/50" />
    case 'video': return <PlayCircle className="w-4 h-4 text-accent/50" />
    case '3d': return <Box className="w-4 h-4 text-accent/50" />
    default: return <FileText className="w-4 h-4 text-accent/50" />
  }
}
