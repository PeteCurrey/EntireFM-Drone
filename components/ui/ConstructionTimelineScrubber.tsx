'use client'

import React, { useState } from 'react'

interface Milestone {
  week: string
  phase: string
  date: string
  progress: number
  deliverables: string[]
  notes: string
}

export default function ConstructionTimelineScrubber() {
  const [activeIdx, setActiveIdx] = useState(2)

  const milestones: Milestone[] = [
    {
      week: 'Week 01',
      phase: 'Site Clearance & Groundworks',
      date: 'Baseline Survey',
      progress: 100,
      deliverables: ['Topographic Digital Terrain Model', 'Volume Baseline Grid', 'Boundary Alignment Orthomosaic'],
      notes: 'Initial sub-20mm GCP mesh established. Earthworks cut/fill datum calibrated.',
    },
    {
      week: 'Week 04',
      phase: 'Foundations & Piling',
      date: 'Substructure Audit',
      progress: 100,
      deliverables: ['Piling Grid Orthophoto', 'Excavation Depth Verification', 'Site Access Logistics Map'],
      notes: 'Foundation coordinates verified against BIM engineering schematics.',
    },
    {
      week: 'Week 08',
      phase: 'Structural Steel Erection',
      date: 'Frame Milestone',
      progress: 75,
      deliverables: ['4K High-Res Visual Inspection', 'Bolted Joint Defect Pack', 'Contractor Milestone Evidence'],
      notes: 'Tier 1 frame inspection completed. No thermal anomalies or structural deflection detected.',
    },
    {
      week: 'Week 12',
      phase: 'Building Envelope & Cladding',
      date: 'Envelope Tracking',
      progress: 25,
      deliverables: ['Thermal Envelope Baseline', 'Facade Alignment Scan', 'Weekly Client Portal Package'],
      notes: 'Facade panel installation underway. Aerial tracking scheduled every Tuesday 08:00.',
    },
  ]

  const active = milestones[activeIdx]

  return (
    <div className="border border-white/10 bg-dark/70 p-6 md:p-8 backdrop-blur-md">
      {/* Step Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-white/10">
        <div>
          <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent block mb-1">
            Construction Progress Scrubber
          </span>
          <h3 className="font-display text-2xl text-white uppercase tracking-wider">
            {active.week} — {active.phase}
          </h3>
        </div>
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[10px] text-white/80 uppercase tracking-widest">
            {active.progress}% Verified Complete
          </span>
        </div>
      </div>

      {/* Interactive Milestone Buttons */}
      <div className="grid grid-cols-4 gap-2 mb-8">
        {milestones.map((ms, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={`py-3 px-2 text-center transition-all border ${
              activeIdx === idx
                ? 'border-accent bg-accent/10 text-white shadow-[0_0_15px_rgba(0,102,255,0.2)]'
                : 'border-white/10 bg-white/[0.02] text-white/40 hover:text-white hover:border-white/20'
            }`}
          >
            <div className="font-display text-sm md:text-lg tracking-wider mb-0.5">{ms.week}</div>
            <div className="font-ui text-[8px] md:text-[9px] tracking-widest uppercase truncate">{ms.date}</div>
          </button>
        ))}
      </div>

      {/* Progress Bar Track */}
      <div className="h-[2px] w-full bg-white/10 mb-8 relative">
        <div
          className="h-full bg-gradient-to-r from-[#0066ff] to-[#4da6ff] transition-all duration-500"
          style={{ width: `${((activeIdx + 1) / milestones.length) * 100}%` }}
        />
      </div>

      {/* Deliverable Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <span className="font-ui text-[9px] tracking-[0.25em] uppercase text-white/40 block mb-3">
            Milestone Deliverables:
          </span>
          <ul className="space-y-2">
            {active.deliverables.map((item, i) => (
              <li key={i} className="flex items-center gap-2 font-ui text-[11px] tracking-wider text-white/70 uppercase">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6">
          <span className="font-ui text-[9px] tracking-[0.25em] uppercase text-white/40 block mb-2">
            Operational Observation:
          </span>
          <p className="font-body text-xs text-white/60 leading-relaxed font-light">
            {active.notes}
          </p>
        </div>
      </div>
    </div>
  )
}
