'use client'

import Link from 'next/link'
import { ArrowRight, Package, CheckCircle2 } from 'lucide-react'

export default function BundlesTeaser() {
  const bundles = [
    { title: 'Roof Intelligence Pack', desc: 'Comprehensive roof and building envelope inspection evidence.' },
    { title: 'Construction Progress Pack', desc: 'Repeatable site monitoring and stakeholder progress records.' },
    { title: 'Survey Data Pack', desc: 'High-accuracy mapping, orthomosaics and site measurement data.' },
    { title: 'Insurance Evidence Pack', desc: 'Aerial capture for damage assessment and incident records.' },
    { title: 'Visual Sales Pack', desc: 'Cinematic aerial media for property and brand marketing.' },
    { title: 'Immersive Digital Capture', desc: 'TFTS 3Ds and digital twin-style 3D visualisation.' }
  ]

  return (
    <section className="bg-accent py-32 px-10 md:px-20 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-dark/5 skew-x-12 translate-x-20 pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <Package className="w-6 h-6 text-dark" />
              <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-dark/60 font-bold">Commercial Bundles</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-dark mb-6 leading-none tracking-tighter">
              Commercial Drone Packages<br/>Built Around <span className="underline decoration-2 underline-offset-8">Real Outcomes</span>
            </h2>
            <p className="font-body text-dark/70 text-lg max-w-[600px] leading-relaxed uppercase tracking-widest font-light">
              From roof intelligence and survey data to construction progress, insurance evidence, solar inspections and immersive 3D capture.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link 
              href="/bundles" 
              className="bg-dark text-white font-display text-2xl tracking-[0.2em] px-12 py-6 hover:bg-white hover:text-dark transition-all duration-500 flex items-center gap-4 group/btn"
            >
              VIEW ALL PACKAGES <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bundles.map((bundle, idx) => (
            <div key={idx} className="bg-white/90 backdrop-blur-sm p-10 border border-dark/5 hover:border-dark/20 transition-all group/card cursor-pointer">
              <CheckCircle2 className="w-5 h-5 text-dark/30 mb-6 group-hover/card:text-dark transition-colors" />
              <h3 className="font-display text-2xl text-dark mb-4 uppercase tracking-widest">{bundle.title}</h3>
              <p className="font-body text-[13px] text-dark/60 uppercase tracking-widest leading-relaxed">
                {bundle.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
