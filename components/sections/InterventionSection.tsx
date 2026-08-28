'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ShieldCheck, Wrench, FileSearch, Database, Camera, AlertTriangle, UserCheck } from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'

export default function InterventionSection() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      num: '01',
      title: 'Drone Identifies Defect',
      desc: 'High-resolution 4K/6K visual or radiometric thermal capture spots roofing fissures, drainage blockages or facade issues without scaffolding.',
      role: 'TFTS Drone Operations',
      icon: Camera,
      meta: '48MP Optical / Radiometric IR',
    },
    {
      num: '02',
      title: 'Evidence Captured',
      desc: 'Defect location, GPS coordinates, severity classification and dimensional context are automatically packaged into high-resolution visual evidence.',
      role: 'Geospatial Data Processing',
      icon: FileSearch,
      meta: 'Sub-20mm GCP Precision',
    },
    {
      num: '03',
      title: 'Defect Categorised',
      desc: 'Technical assessment grades the issue (Low, Medium, Critical) with recommended immediate, short-term or planned maintenance horizons.',
      role: 'Survey & Condition Review',
      icon: AlertTriangle,
      meta: 'Severity Matrix RAG Rated',
    },
    {
      num: '04',
      title: 'Work Instruction Raised',
      desc: 'A precise, actionable work order is generated directly from the visual evidence, specifying exact access requirements and remedial materials.',
      role: 'EntireFM Facilities Operations',
      icon: Wrench,
      meta: 'CAFM Direct Integration',
    },
    {
      num: '05',
      title: 'Engineer Assigned',
      desc: 'Accredited EntireFM engineering and trade teams are dispatched with exact defect coordinates and visual pre-briefing, avoiding wasted site visits.',
      role: 'Engineering Delivery',
      icon: UserCheck,
      meta: 'Qualified Specialist Trades',
    },
    {
      num: '06',
      title: 'Remedial Work Completed',
      desc: 'The physical repair or maintenance is executed safely and efficiently according to the drone-informed work order.',
      role: 'On-Site Trade Operations',
      icon: CheckCircle2,
      meta: 'Method Statement Compliant',
    },
    {
      num: '07',
      title: 'Drone & Engineer Verify',
      desc: 'Post-remediation drone flight or engineering sign-off captures visual proof that the repair was completed to the required specification.',
      role: 'Quality & Compliance Assurance',
      icon: ShieldCheck,
      meta: 'Before / After Comparison',
    },
    {
      num: '08',
      title: 'CAFM Record Retained',
      desc: 'The full asset lifecycle—from initial anomaly detection through physical fix to final verification—is permanently archived in the client portal.',
      role: 'Asset Intelligence Record',
      icon: Database,
      meta: 'Audit-Ready Digital Twin',
    },
  ]

  return (
    <section className="py-32 px-8 md:px-20 bg-mid relative z-10 border-y border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[140px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6b2fff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <SectionTag number="02" text="The Strategic Advantage" />
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter leading-[0.95] mb-8">
            FROM INSPECTION<br />
            <span className="text-accent underline underline-offset-[12px] decoration-accent/30">TO INTERVENTION.</span>
          </h2>
          <p className="font-body text-xl text-white/60 uppercase tracking-widest font-light leading-relaxed mb-6">
            Most drone surveys end with a report. Ours can begin the next action.
          </p>
          <p className="font-body text-sm text-white/40 leading-relaxed max-w-2xl font-light">
            EntireFM combines aerial intelligence with comprehensive facilities management, CAFM workflows and nationwide engineering delivery. We don’t just show you what’s broken—we coordinate the physical resolution under one accountable organisation.
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-12">
          {steps.map((s, idx) => {
            const Icon = s.icon
            const isSelected = activeStep === idx
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 text-left transition-all border ${
                  isSelected
                    ? 'border-accent bg-accent/10 shadow-[0_0_20px_rgba(0,102,255,0.25)]'
                    : 'border-white/5 bg-dark/50 hover:border-white/20 hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-[10px] ${isSelected ? 'text-accent' : 'text-white/30'}`}>
                    {s.num}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-accent' : 'text-white/30'}`} />
                </div>
                <div className="font-display text-xs md:text-sm text-white uppercase tracking-wider line-clamp-2">
                  {s.title}
                </div>
              </button>
            )
          })}
        </div>

        {/* Active Step Feature Box */}
        <div className="border border-white/10 bg-dark/80 p-8 md:p-12 backdrop-blur-md relative overflow-hidden mb-16">
          <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-accent px-3 py-1 bg-accent/10 border border-accent/30 uppercase">
                  Stage {steps[activeStep].num} of 08
                </span>
                <span className="font-ui text-[10px] tracking-[0.25em] text-white/40 uppercase">
                  {steps[activeStep].role}
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-white uppercase tracking-tight">
                {steps[activeStep].title}
              </h3>
              <p className="font-body text-base md:text-lg text-white/70 leading-relaxed font-light">
                {steps[activeStep].desc}
              </p>
            </div>
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-10 space-y-4">
              <div>
                <span className="font-ui text-[9px] tracking-[0.3em] uppercase text-white/30 block mb-1">
                  Technical Standard
                </span>
                <span className="font-mono text-sm text-accent">
                  {steps[activeStep].meta}
                </span>
              </div>
              <div>
                <span className="font-ui text-[9px] tracking-[0.3em] uppercase text-white/30 block mb-1">
                  Masterbrand Ecosystem
                </span>
                <span className="font-body text-xs text-white/60">
                  Integrated with EntireFM CAFM & Helpdesk
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-8 border-t border-white/5">
          <div className="font-ui text-xs tracking-[0.2em] uppercase text-white/40">
            Looking for a complete inspect-to-remediate partner for your estate?
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/brief?service=drone-inspection&source=intervention-flow"
              className="bg-accent text-white font-display text-xl tracking-[0.1em] px-10 py-5 hover:bg-accent-light transition-all flex items-center gap-3 group"
            >
              Start Project Brief <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <Link
              href="https://www.entirefm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-ui text-xs tracking-[0.2em] text-white/60 hover:text-white uppercase transition-colors"
            >
              Explore EntireFM Services ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
