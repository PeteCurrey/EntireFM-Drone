'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Thermometer, ShieldAlert, Zap, Sun } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import VideoBackground from '@/components/ui/VideoBackground'
import SectionTag from '@/components/ui/SectionTag'
import GhostNumber from '@/components/ui/GhostNumber'
import ThermalCompare from '@/components/ui/ThermalCompare'

export default function ThermalSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
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

  const applications = [
    { label: 'Building Envelope & Heat Loss', desc: 'Identify thermal bridging, air leakage and insulation deficiencies across high-rise facades.' },
    { label: 'Roof Moisture Entrapment', desc: 'Detect trapped moisture beneath flat roof membranes before internal water ingress causes structural rot.' },
    { label: 'Solar PV Array Audits', desc: 'Pinpoint defective bypass diodes, string failures and micro-cracked cells at utility scale.' },
    { label: 'High-Voltage Electrical Plant', desc: 'Isolate overheating switchgear, transformers and distribution hardware under operational load.' },
  ]

  return (
    <section
      ref={sectionRef}
      data-index="4"
      className="noise-overlay min-h-screen py-32 px-8 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative"
    >
      <VideoBackground
        src="/videos/thermal.mp4"
        poster="/images/thermal_poster.jpg"
        brightness={0.65}
        saturation={1.2}
      />
      <div className="grid-lines" />
      <GhostNumber number="04" />

      {/* Left Column: Proposition */}
      <div className="relative z-10 flex-1 max-w-[620px]">
        <div className="svc-tag">
          <SectionTag number="07" text="Radiometric Thermal Imaging" />
        </div>

        <h2 className="svc-headline font-display text-section text-white mb-6">
          INFRARED<br />
          <span className="text-accent">THERMAL AUDITING &</span><br />
          ANOMALY DETECTION
        </h2>

        <p className="svc-body font-body text-base md:text-lg font-light leading-relaxed text-white/60 mb-8 max-w-[540px]">
          Radiometric thermal drone capture identifies surface temperature differentials that can highlight insulation voids, trapped roof moisture, solar cell anomalies or electrical hotspots. Scoped to support facilities managers and sustainability audits.
        </p>

        {/* Applications List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {applications.map((app, i) => (
            <div key={i} className="p-4 bg-black/40 border border-white/5 backdrop-blur-sm">
              <div className="font-display text-base text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                {app.label}
              </div>
              <div className="font-body text-xs text-white/45 font-light">
                {app.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="svc-cta flex flex-col sm:flex-row gap-6">
          <Link
            href="/services/thermal-imaging"
            className="bg-accent text-white font-display text-xl tracking-[0.1em] px-8 py-4 hover:bg-accent-light transition-all flex items-center justify-center gap-3 group"
          >
            Explore Thermal Surveys <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <Link
            href="/brief?service=thermal-imaging"
            className="border border-white/20 text-white font-display text-xl tracking-[0.1em] px-8 py-4 hover:bg-white/10 transition-all text-center flex items-center justify-center"
          >
            Request Thermal Brief
          </Link>
        </div>
      </div>

      {/* Right Column: Interactive Before/After Split Slider */}
      <div className="relative z-10 flex-1 w-full max-w-[520px]">
        <ThermalCompare baseImage="/images/thermal_poster.jpg" />
        <div className="mt-3 flex items-center justify-between font-mono text-[9px] text-white/40 px-2 uppercase">
          <span>FLIR 640×512 Radiometric Sensor</span>
          <span>Thermal Sensitivity: ≤50 mK</span>
        </div>
      </div>
    </section>
  )
}
