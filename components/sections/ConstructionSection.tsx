'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, Layers, ShieldCheck } from 'lucide-react'
import { gsap, registerGSAP } from '@/lib/gsap-init'
import VideoBackground from '@/components/ui/VideoBackground'
import SectionTag from '@/components/ui/SectionTag'
import GhostNumber from '@/components/ui/GhostNumber'
import ConstructionTimelineScrubber from '@/components/ui/ConstructionTimelineScrubber'

export default function ConstructionSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    registerGSAP()
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ['.svc-tag', '.svc-headline', '.svc-body', '.svc-cta'],
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

  return (
    <section
      ref={sectionRef}
      data-index="3"
      className="noise-overlay min-h-screen py-32 px-8 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative"
    >
      <VideoBackground
        src="/videos/construction.mp4"
        poster="/images/construction_poster.png"
        brightness={0.65}
        saturation={1.2}
      />
      <div className="grid-lines" />
      <GhostNumber number="03" position="left" />

      {/* Left Column: Proposition */}
      <div className="relative z-10 flex-1 max-w-[600px]">
        <div className="svc-tag">
          <SectionTag number="06" text="Construction & Progress" />
        </div>

        <h2 className="svc-headline font-display text-section text-white mb-6">
          PROGRAMME<br />
          <span className="text-accent">PROGRESS & MILESTONE</span><br />
          MONITORING
        </h2>

        <p className="svc-body font-body text-base md:text-lg font-light leading-relaxed text-white/60 mb-8">
          Maintain repeatable, georeferenced aerial records across every phase of your build. Provide main contractors, developers, fund monitors and project directors with indisputable progress evidence and remote site visibility.
        </p>

        <div className="space-y-3 mb-10">
          <div className="flex items-center gap-3 font-ui text-xs tracking-wider uppercase text-white/70">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            Scheduled Weekly / Fortnightly / Monthly Repeat Flights
          </div>
          <div className="flex items-center gap-3 font-ui text-xs tracking-wider uppercase text-white/70">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            Aligned Vantage Points & Orthomosaic Timeline Overlays
          </div>
          <div className="flex items-center gap-3 font-ui text-xs tracking-wider uppercase text-white/70">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            Direct CAFM & Project Portal Asset Archiving
          </div>
        </div>

        <div className="svc-cta flex flex-col sm:flex-row gap-6">
          <Link
            href="/services/construction-monitoring"
            className="bg-accent text-white font-display text-xl tracking-[0.1em] px-8 py-4 hover:bg-accent-light transition-all flex items-center justify-center gap-3 group"
          >
            Explore Construction Monitoring <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <Link
            href="/brief?service=construction-monitoring"
            className="border border-white/20 text-white font-display text-xl tracking-[0.1em] px-8 py-4 hover:bg-white/10 transition-all text-center flex items-center justify-center"
          >
            Plan Monitoring Brief
          </Link>
        </div>
      </div>

      {/* Right Column: Interactive Construction Scrubber Component */}
      <div className="relative z-10 flex-1 w-full max-w-[540px]">
        <ConstructionTimelineScrubber />
      </div>
    </section>
  )
}
