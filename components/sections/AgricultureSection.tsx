'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, MapPin, TreePine, Shovel, Layers } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import VideoBackground from '@/components/ui/VideoBackground'
import SectionTag from '@/components/ui/SectionTag'
import GhostNumber from '@/components/ui/GhostNumber'

export default function AgricultureSection() {
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

  const capabilities = [
    { label: 'Estate Boundary & Land Mapping', desc: 'High-resolution georeferenced orthomosaics for property registries, land management and tenancy records.' },
    { label: 'Drainage & Topography', desc: 'Digital elevation models (DEM) identifying natural water runoff, pooling zones and irrigation planning.' },
    { label: 'Asset & Forestry Auditing', desc: 'Visual condition records for perimeter fencing, outbuildings, access roads, woodland and rural structures.' },
    { label: 'Multispectral Crop Health', desc: 'NDVI crop vigor mapping highlighting soil compaction, nutrient variability and early stress indicators.' },
  ]

  return (
    <section
      ref={sectionRef}
      data-index="5"
      className="noise-overlay min-h-screen py-32 px-8 md:px-20 flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-16 relative"
    >
      <VideoBackground
        src="/videos/agriculture.mp4"
        poster="/images/agriculture_poster.jpg"
        brightness={0.65}
        saturation={1.2}
      />
      <div className="grid-lines" />
      <GhostNumber number="05" position="left" />

      {/* Proposition Column */}
      <div className="relative z-10 flex-1 max-w-[620px]">
        <div className="svc-tag">
          <SectionTag number="08" text="Agriculture & Rural Estates" />
        </div>

        <h2 className="svc-headline font-display text-section text-white mb-6">
          RURAL ESTATE<br />
          <span className="text-accent">MAPPING & ASSET</span><br />
          INTELLIGENCE
        </h2>

        <p className="svc-body font-body text-base md:text-lg font-light leading-relaxed text-white/60 mb-8 max-w-[540px]">
          Comprehensive aerial mapping and visual documentation for rural estates, agricultural land, forestry and country properties. Deliver structured spatial records to landowners, land agents and estate managers.
        </p>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {capabilities.map((cap, i) => (
            <div key={i} className="p-4 bg-black/40 border border-white/5 backdrop-blur-sm">
              <div className="font-display text-base text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                {cap.label}
              </div>
              <div className="font-body text-xs text-white/45 font-light">
                {cap.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="svc-cta flex flex-col sm:flex-row gap-6">
          <Link
            href="/services/agricultural-surveys"
            className="bg-accent text-white font-display text-xl tracking-[0.1em] px-8 py-4 hover:bg-accent-light transition-all flex items-center justify-center gap-3 group"
          >
            Explore Estate Surveys <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <Link
            href="/brief?service=agricultural-surveys"
            className="border border-white/20 text-white font-display text-xl tracking-[0.1em] px-8 py-4 hover:bg-white/10 transition-all text-center flex items-center justify-center"
          >
            Discuss Rural Brief
          </Link>
        </div>
      </div>

      {/* Metric Telemetry Panel */}
      <div className="relative z-10 flex-1 w-full max-w-[480px]">
        <div className="border border-white/10 bg-black/60 backdrop-blur-md p-8">
          <div className="font-ui text-[9px] tracking-[0.3em] uppercase text-accent mb-6 pb-4 border-b border-white/10">
            Enterprise Rural Deployment
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-white/[0.02] border border-white/5">
              <div className="font-display text-3xl text-accent mb-1">500+</div>
              <div className="font-ui text-[9px] uppercase tracking-wider text-white/40">Acres / Flight Day</div>
            </div>
            <div className="p-4 bg-white/[0.02] border border-white/5">
              <div className="font-display text-3xl text-accent mb-1">NDVI</div>
              <div className="font-ui text-[9px] uppercase tracking-wider text-white/40">Multispectral Band</div>
            </div>
            <div className="p-4 bg-white/[0.02] border border-white/5">
              <div className="font-display text-3xl text-accent mb-1">GIS</div>
              <div className="font-ui text-[9px] uppercase tracking-wider text-white/40">GeoTIFF / Shapefiles</div>
            </div>
            <div className="p-4 bg-white/[0.02] border border-white/5">
              <div className="font-display text-3xl text-accent mb-1">RTK</div>
              <div className="font-ui text-[9px] uppercase tracking-wider text-white/40">Boundary Precision</div>
            </div>
          </div>

          <p className="font-body text-xs text-white/50 leading-relaxed font-light">
            Custom seasonal capture flights scheduled around planting, vegetative peaks or land transactions to ensure reliable condition records.
          </p>
        </div>
      </div>
    </section>
  )
}
