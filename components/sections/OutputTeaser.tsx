'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Search, Ruler, Camera, Activity, FileText, Box, Layers, ShieldCheck } from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'

export default function OutputTeaser() {
  const [activeOutput, setActiveOutput] = useState(0)

  const outputs = [
    {
      label: 'Inspect & Evidence',
      icon: Search,
      headline: '4K High-Resolution Condition Evidence',
      desc: 'Close-up visual defect capture for commercial roofs, cladding panels, high-level masonry, rainwater goods and industrial plant.',
      deliverables: ['Annotated High-Res Image Set', 'GPS-Referenced Defect Coordinates', 'RAG Severity Matrix PDF Report', 'Direct CAFM Portal Upload'],
      cta: '/services/drone-inspection',
    },
    {
      label: 'Measure & Map',
      icon: Ruler,
      headline: 'Survey-Grade Geospatial Deliverables',
      desc: 'Sub-20mm orthomosaics, topographical CAD line work, Digital Elevation Models (DEM) and volumetric cut & fill calculations.',
      deliverables: ['Georeferenced GeoTIFF Orthophoto', 'Dense 3D Point Cloud (LAS/XYZ)', 'AutoCAD / Civil 3D Compatible Files', 'Volume & Boundary Measurement Report'],
      cta: '/services/surveying-mapping',
    },
    {
      label: 'Thermal Auditing',
      icon: Activity,
      headline: 'Radiometric Heat & Moisture Detection',
      desc: 'Infrared diagnostics highlighting thermal bridging, flat roof moisture entrapment, PV solar array faults and electrical distribution hotspots.',
      deliverables: ['FLIR Radiometric Thermal Imagery', 'Temperature Delta (ΔT) Analysis', 'Roof Moisture Anomaly Map', 'Energy Efficiency Evidence Summary'],
      cta: '/services/thermal-imaging',
    },
    {
      label: 'Spatial 3D Splats',
      icon: Box,
      headline: 'Photorealistic Gaussian Splat Digital Twins',
      desc: 'Navigable 6-DoF 3D site captures allowing stakeholders to virtually inspect developments and complex architectural structures.',
      deliverables: ['Interactive Web-Viewer Link', 'High-Fidelity 3D Flythrough Video', 'Before/After Milestone Comparison', 'Shareable Client Stakeholder Portal'],
      cta: '/gaussian-splat',
    },
    {
      label: 'Progress Monitoring',
      icon: Layers,
      headline: 'Repeatable Construction Timelines',
      desc: 'Consistent vantage point aerial records tracking earthworks, substructure, frame erection, envelope and fit-out over time.',
      deliverables: ['Aligned Milestone Image History', 'Time-Lapse Video Compilation', 'Contractor Performance Records', 'Fund Monitor & Investor Packs'],
      cta: '/services/construction-monitoring',
    },
    {
      label: 'Cinematic Media',
      icon: Camera,
      headline: 'Broadcast Aerial Videography',
      desc: 'High-end 4K/6K commercial film capture and FPV flythroughs for property sales, flagship venues, corporate campaigns and events.',
      deliverables: ['Color-Graded 4K/6K Master Footage', 'FPV Dynamic Flythrough Video', '360° Aerial Virtual Tour Panoramas', 'Social Media Aspect Ratio Cuts'],
      cta: '/services/events-media',
    },
  ]

  const active = outputs[activeOutput]
  const ActiveIcon = active.icon

  return (
    <section className="py-32 px-8 md:px-20 bg-dark relative z-10 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-8">
            <SectionTag number="11" text="Tangible Deliverables" />
            <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter leading-none mb-6">
              WHAT YOU ACTUALLY <br />
              <span className="text-accent underline underline-offset-[10px] decoration-accent/30">RECEIVE</span>
            </h2>
            <p className="font-body text-lg text-white/50 uppercase tracking-widest font-light leading-relaxed max-w-2xl">
              We don’t just fly drones. We deliver structured, engineering-ready commercial intelligence formatted directly for your internal teams, contractors, surveyors and CAFM platforms.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              href="/sample-deliverables"
              className="bg-accent text-white font-display text-2xl tracking-[0.1em] px-10 py-5 hover:bg-accent-light transition-all flex items-center gap-3 group"
            >
              View Sample Deliverables <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Deliverable Category Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {outputs.map((item, idx) => {
            const Icon = item.icon
            const isSelected = activeOutput === idx
            return (
              <button
                key={idx}
                onClick={() => setActiveOutput(idx)}
                className={`p-4 text-left transition-all border ${
                  isSelected
                    ? 'border-accent bg-accent/15 text-white shadow-[0_0_15px_rgba(0,102,255,0.25)]'
                    : 'border-white/5 bg-white/[0.02] text-white/40 hover:text-white hover:border-white/20'
                }`}
              >
                <Icon className={`w-5 h-5 mb-3 ${isSelected ? 'text-accent' : 'text-white/30'}`} />
                <div className="font-display text-sm uppercase tracking-wider line-clamp-1">{item.label}</div>
              </button>
            )
          })}
        </div>

        {/* Selected Output Feature Box */}
        <div className="border border-white/10 bg-dark/80 p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-accent/10 border border-accent/30 text-accent">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <span className="font-ui text-[10px] tracking-[0.25em] text-accent uppercase">
                  Verified Deliverable Package
                </span>
              </div>

              <h3 className="font-display text-3xl md:text-4xl text-white uppercase tracking-tight">
                {active.headline}
              </h3>

              <p className="font-body text-base text-white/60 leading-relaxed font-light">
                {active.desc}
              </p>

              <div className="pt-4">
                <Link
                  href={active.cta}
                  className="inline-flex items-center gap-3 font-ui text-xs tracking-[0.25em] text-accent hover:text-white uppercase transition-colors"
                >
                  Explore Detailed Service Specifications <span>→</span>
                </Link>
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="lg:col-span-5 bg-white/[0.02] border border-white/5 p-8 space-y-4">
              <span className="font-ui text-[9px] tracking-[0.3em] uppercase text-white/40 block mb-4">
                Included in this Deliverable Pack:
              </span>
              <ul className="space-y-3">
                {active.deliverables.map((del, i) => (
                  <li key={i} className="flex items-center gap-3 font-ui text-xs tracking-wider uppercase text-white/80">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                    {del}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
