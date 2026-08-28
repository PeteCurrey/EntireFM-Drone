'use client'

import Link from 'next/link'
import { ArrowRight, ClipboardCheck, Map, Zap, CheckCircle2 } from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'

export default function OperationsTrust() {
  const points = [
    { title: 'Brief', desc: 'Capture the required output, site details and project context.', icon: ClipboardCheck },
    { title: 'Plan', desc: 'Review airspace, site access, weather, safety and operational constraints.', icon: Map },
    { title: 'Capture', desc: 'Select the correct drone, sensor and workflow for the deliverable.', icon: Zap },
    { title: 'Deliver', desc: 'Issue usable outputs such as reports, image sets, maps, models or evidence.', icon: CheckCircle2 }
  ]

  return (
    <section className="py-32 px-10 md:px-20 bg-mid relative z-10 border-y border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-24">
          <div className="svc-tag mb-8 inline-flex"><SectionTag number="00" text="Standard" /></div>
          <h2 className="font-display text-5xl md:text-6xl text-white uppercase tracking-tighter mb-8 leading-none">
            Commercial Drone Work Managed Through<br/><span className="text-accent">A Structured Operating Standard</span>
          </h2>
          <p className="font-body text-lg text-white/50 uppercase tracking-widest leading-relaxed max-w-3xl mx-auto font-light">
            TFTS Drone uses a structured operating model supported by TFTS Drone Flight Desk to manage project briefs, site information, planning notes, capture requirements, deliverables and project records.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {points.map((point, idx) => (
            <div key={idx} className="p-10 border border-white/5 bg-dark hover:border-accent/30 transition-all group">
              <point.icon className="w-8 h-8 text-accent mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-2xl text-white mb-4 uppercase tracking-widest">{point.title}</h3>
              <p className="font-body text-[13px] text-white/40 uppercase tracking-widest leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/operations-standard" className="border border-white/20 text-white px-12 py-6 font-display text-2xl tracking-[0.1em] hover:bg-white hover:text-dark transition-all flex items-center gap-4 group">
            View Operations Standard <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
