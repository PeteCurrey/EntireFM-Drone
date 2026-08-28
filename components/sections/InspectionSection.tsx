'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, CheckCircle2, Eye, FileText, Layers } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import VideoBackground from '@/components/ui/VideoBackground'
import SectionTag from '@/components/ui/SectionTag'
import GhostNumber from '@/components/ui/GhostNumber'
import ScanReveal from '@/components/ui/ScanReveal'

export default function InspectionSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ['.svc-tag', '.svc-headline', '.svc-body', '.feature-tags', '.svc-cta'],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const capabilities = [
    { title: 'Commercial Roofs & Gutters', desc: 'Identify standing water, membrane tears, blocked valleys and loose flashing.' },
    { title: 'High-Level Façades & Cladding', desc: 'Detailed condition records for panels, curtain walling, brickwork and expansion joints.' },
    { title: 'Industrial Infrastructure', desc: 'Bridges, chimneys, pipe gantries, silos and access-restricted plant.' },
    { title: 'Condition Evidence Packs', desc: 'Annotated high-res imagery, GPS-tagged defects and RAG-rated PDF summaries.' },
  ]

  return (
    <section
      ref={sectionRef}
      data-index="1"
      className="noise-overlay min-h-screen py-32 px-8 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 relative"
    >
      <VideoBackground
        src="/media/drone/roof-facade/tfts-commercial-roof-inspection.mp4"
        poster="/media/drone/roof-facade/tfts-commercial-roof-inspection.jpg"
        brightness={0.65}
        saturation={1.2}
      />
      <div className="grid-lines" />
      <GhostNumber number="01" />

      {/* Left Column: Inspection Proposition */}
      <div className="relative z-10 flex-1 max-w-[640px]">
        <div className="svc-tag">
          <SectionTag number="03" text="Aerial Inspection" />
        </div>

        <h2 className="svc-headline font-display text-section text-white mb-6">
          COMMERCIAL<br />
          <span className="text-accent">ROOF & FAÇADE</span><br />
          INSPECTIONS
        </h2>

        <p className="svc-body font-body text-base md:text-lg font-light leading-relaxed text-white/60 mb-8 max-w-[540px]">
          Gather definitive visual and thermal condition evidence across inaccessible assets without scaffolding, MEWPs or high-risk manual climbing. Scoped specifically for facilities managers, building surveyors and estates directors.
        </p>

        {/* Micro-Details Pill List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {capabilities.map((cap, i) => (
            <div key={i} className="p-4 bg-black/40 border border-white/5 backdrop-blur-sm">
              <div className="font-display text-base text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                {cap.title}
              </div>
              <div className="font-body text-xs text-white/45 font-light">
                {cap.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="svc-cta flex flex-col sm:flex-row gap-6">
          <Link
            href="/services/roof-inspections"
            className="bg-accent text-white font-display text-xl tracking-[0.1em] px-8 py-4 hover:bg-accent-light transition-all flex items-center justify-center gap-3 group"
          >
            Explore Roof Surveys <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <Link
            href="/brief?service=roof-inspections"
            className="border border-white/20 text-white font-display text-xl tracking-[0.1em] px-8 py-4 hover:bg-white/10 transition-all text-center flex items-center justify-center"
          >
            Start Inspection Brief
          </Link>
        </div>
      </div>

      {/* Right Column: Interactive Scan Comparison Showcase */}
      <div className="relative z-10 flex-1 w-full max-w-[500px]">
        <div className="space-y-4">
          <ScanReveal
            baseImage="/media/drone/roof-facade/tfts-roof-defect-scan-base.jpg"
            alt="Commercial roof condition inspection and defect scan telemetry"
            labelLeft="48MP Optical"
            labelRight="Defect Telemetry"
            autoScan={false}
          />
          <div className="flex items-center justify-between font-mono text-[9px] text-white/40 px-2 uppercase">
            <span>Asset: Commercial Roof Envelope</span>
            <span>Accuracy: Sub-20mm Resolution</span>
          </div>
        </div>
      </div>
    </section>
  )
}
