'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Plane, Cpu, LineChart, Wrench, ShieldCheck } from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'

export default function LifecycleSection() {
  const [selectedPillar, setSelectedPillar] = useState(0)

  const pillars = [
    {
      num: '01',
      title: 'Capture',
      subtitle: 'Precision Aerial Flight',
      icon: Plane,
      desc: 'CAA-compliant GVC pilots deploy enterprise UAV platforms with high-resolution RGB, LiDAR and radiometric thermal sensors across complex UK airspace.',
      deliverable: '48MP Visual / 640×512 Radiometric Thermal / Laser Scan',
    },
    {
      num: '02',
      title: 'Process',
      subtitle: 'Geospatial Reconstruction',
      icon: Cpu,
      desc: 'Raw aerial imagery and telemetry are processed through photogrammetry, Gaussian Splatting and point cloud pipelines calibrated to real-world ground control.',
      deliverable: 'Orthomosaics / 3D Point Clouds / Digital Elevation Models',
    },
    {
      num: '03',
      title: 'Analyse',
      subtitle: 'Engineering Intelligence',
      icon: LineChart,
      desc: 'Specialist condition assessment classifies defects, thermal anomalies, volumetric changes and structural deviations to give stakeholders immediate clarity.',
      deliverable: 'RAG-Rated Defect Packs / Cut & Fill Quantities / Heat Maps',
    },
    {
      num: '04',
      title: 'Act',
      subtitle: 'Operational Intervention',
      icon: Wrench,
      desc: 'Aerial findings seamlessly convert into physical work orders executed by EntireFM’s nationwide facilities, maintenance and engineering teams.',
      deliverable: 'CAFM Work Orders / Contractor Briefings / Access Strategy',
    },
    {
      num: '05',
      title: 'Verify',
      subtitle: 'Post-Remedial Assurance',
      icon: ShieldCheck,
      desc: 'Follow-up drone flights and engineering sign-offs capture visual proof of completion, logging permanent before-and-after audit trails in client portals.',
      deliverable: 'Compliance Sign-Off / Historical Asset Archive / Audit Pack',
    },
  ]

  return (
    <section className="py-32 px-8 md:px-20 bg-dark relative z-10 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-8">
            <SectionTag number="01" text="Operating Philosophy" />
            <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter leading-none mb-6">
              THE 5-STAGE<br />
              <span className="text-accent">INTELLIGENCE LIFECYCLE</span>
            </h2>
            <p className="font-body text-lg text-white/50 uppercase tracking-widest font-light leading-relaxed max-w-2xl">
              This is not just someone with a drone. EntireFM Drone captures, interprets and converts physical assets into actionable operational intelligence.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              href="/choose-your-output"
              className="bg-accent text-white font-display text-2xl tracking-[0.1em] px-10 py-5 hover:bg-accent-light transition-all flex items-center gap-3 group"
            >
              Choose Your Output <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 5-Column Strategic Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[1px] bg-white/10 border border-white/10 overflow-hidden mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            const isHovered = selectedPillar === idx
            return (
              <div
                key={idx}
                onMouseEnter={() => setSelectedPillar(idx)}
                className={`p-8 md:p-10 transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isHovered ? 'bg-[#0d0628]/90' : 'bg-dark/80'
                }`}
              >
                {/* Active Indicator Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] transition-colors ${
                    isHovered ? 'bg-accent shadow-[0_0_12px_#0066ff]' : 'bg-transparent'
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-accent tracking-widest">{pillar.num}</span>
                    <Icon className={`w-6 h-6 transition-transform ${isHovered ? 'text-accent scale-110' : 'text-white/30'}`} />
                  </div>

                  <h3 className="font-display text-3xl text-white uppercase tracking-wider mb-2">
                    {pillar.title}
                  </h3>
                  <div className="font-ui text-[10px] tracking-[0.25em] text-accent uppercase mb-6">
                    {pillar.subtitle}
                  </div>

                  <p className="font-body text-xs text-white/50 leading-relaxed mb-8 font-light">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <span className="font-ui text-[8px] tracking-[0.25em] uppercase text-white/30 block mb-1">
                    Primary Output
                  </span>
                  <span className="font-mono text-[10px] text-white/70 block">
                    {pillar.deliverable}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
