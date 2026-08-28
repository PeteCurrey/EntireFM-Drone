'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, MapPin, Layers, Ruler, Database } from 'lucide-react'
import { gsap, registerGSAP } from '@/lib/gsap-init'
import VideoBackground from '@/components/ui/VideoBackground'
import SectionTag from '@/components/ui/SectionTag'
import GhostNumber from '@/components/ui/GhostNumber'

export default function SurveyingSection() {
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

  const outputs = [
    { title: 'Orthomosaic Mapping', desc: 'Millimeter-accurate 2D georeferenced orthophoto map composites.' },
    { title: '3D Point Clouds & LiDAR', desc: 'Dense LAS / XYZ point clouds calibrated to real-world Ordnance Survey grid.' },
    { title: 'Digital Surface & Elevation', desc: 'DSM / DTM surface models for drainage, flood risk and slope analysis.' },
    { title: 'Volumetric Calculations', desc: 'Accurate cut & fill, stockpile volumes and quarry earthworks extraction.' },
  ]

  return (
    <section
      ref={sectionRef}
      data-index="2"
      className="noise-overlay min-h-screen py-32 px-8 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 relative"
    >
      <VideoBackground
        src="/videos/surveying.mp4"
        poster="/images/surveying_poster.png"
        brightness={0.65}
        saturation={1.2}
      />
      <div className="grid-lines" />
      <GhostNumber number="02" />

      {/* Left Column */}
      <div className="relative z-10 flex-1 max-w-[640px]">
        <div className="svc-tag">
          <SectionTag number="04" text="Surveying & Spatial Mapping" />
        </div>

        <h2 className="svc-headline font-display text-section text-white mb-6">
          SURVEY-GRADE<br />
          <span className="text-accent">MAPPING & GEOSPATIAL</span><br />
          INTELLIGENCE
        </h2>

        <p className="svc-body font-body text-base md:text-lg font-light leading-relaxed text-white/60 mb-8 max-w-[540px]">
          Convert physical terrains, civil engineering assets and commercial sites into high-density 2D orthomosaics, 3D point clouds and topographical CAD datasets calibrated with Ground Control Points (GCPs) and RTK positioning.
        </p>

        {/* Survey Deliverables Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {outputs.map((out, i) => (
            <div key={i} className="p-4 bg-black/40 border border-white/5 backdrop-blur-sm">
              <div className="font-display text-base text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                {out.title}
              </div>
              <div className="font-body text-xs text-white/45 font-light">
                {out.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="svc-cta flex flex-col sm:flex-row gap-6">
          <Link
            href="/services/surveying-mapping"
            className="bg-accent text-white font-display text-xl tracking-[0.1em] px-8 py-4 hover:bg-accent-light transition-all flex items-center justify-center gap-3 group"
          >
            Explore Surveying & Mapping <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <Link
            href="/brief?service=surveying-mapping"
            className="border border-white/20 text-white font-display text-xl tracking-[0.1em] px-8 py-4 hover:bg-white/10 transition-all text-center flex items-center justify-center"
          >
            Plan Survey Brief
          </Link>
        </div>
      </div>

      {/* Right Column: Architectural Geospatial Grid Matrix */}
      <div className="relative z-10 flex-1 w-full max-w-[480px] aspect-square flex items-center justify-center">
        <div className="relative w-full h-full border border-white/10 bg-black/60 backdrop-blur-md overflow-hidden p-8 flex flex-col justify-between">
          {/* Top Telemetry Header */}
          <div className="flex justify-between items-start border-b border-white/10 pb-4">
            <div>
              <div className="font-ui text-[9px] tracking-[0.25em] text-accent uppercase mb-1">
                RTK Coordinate Datum
              </div>
              <div className="font-mono text-xs text-white">
                OSGB36 / British National Grid
              </div>
            </div>
            <div className="font-mono text-[9px] text-[#4da6ff] bg-[#0066ff]/10 px-2 py-1 border border-[#0066ff]/30">
              GCP Sub-15mm
            </div>
          </div>

          {/* SVG Contours & Elevation Wireframe */}
          <div className="relative my-4 h-48 w-full">
            <svg viewBox="0 0 300 200" className="w-full h-full opacity-60">
              <path d="M 0 50 Q 80 20 150 70 T 300 40" fill="none" stroke="#0066ff" strokeWidth="1.5" />
              <path d="M 0 100 Q 100 80 180 130 T 300 110" fill="none" stroke="#4da6ff" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M 0 150 Q 70 170 160 140 T 300 160" fill="none" stroke="#6b2fff" strokeWidth="1" />
              {/* Target Crosshair */}
              <g transform="translate(160, 100)">
                <circle r="12" fill="none" stroke="#0066ff" strokeWidth="1" opacity="0.6" />
                <line x1="-18" y1="0" x2="18" y2="0" stroke="#4da6ff" strokeWidth="1.5" />
                <line x1="0" y1="-18" x2="0" y2="18" stroke="#4da6ff" strokeWidth="1.5" />
              </g>
            </svg>
          </div>

          {/* Bottom Export Compatibility */}
          <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center font-mono text-[9px] text-white/50">
            <div className="bg-white/[0.02] p-2 border border-white/5">DWG / DXF</div>
            <div className="bg-white/[0.02] p-2 border border-white/5">LAS / XYZ</div>
            <div className="bg-white/[0.02] p-2 border border-white/5">GeoTIFF</div>
          </div>
        </div>
      </div>
    </section>
  )
}
