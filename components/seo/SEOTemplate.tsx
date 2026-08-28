'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, CheckCircle2, Target, Box, 
  ShieldCheck, Zap, BarChart3, HelpCircle,
  FileText, MapPin, Building2, Search
} from 'lucide-react'
import { SeoLandingPage } from '@/lib/seo-types'

interface SEOTemplateProps {
  page: SeoLandingPage
}

export default function SEOTemplate({ page }: SEOTemplateProps) {
  // Logic to determine which bundle to recommend if not explicitly set
  const recommendedBundle = page.parentBundle || 'roof-intelligence'
  
  return (
    <main className="bg-dark text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-accent/20 to-transparent" />
        </div>
        
        <div className="container px-8 md:px-20 relative z-10">
          <div className="max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[1px] bg-accent" />
              <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">
                {page.pageType.replace(/_/g, ' ')}
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-[8vw] md:text-[6vw] leading-[0.85] text-white mb-10 uppercase tracking-tighter"
            >
              {page.h1.split(' ').map((word, i) => (
                <React.Fragment key={i}>
                  {word.toUpperCase() === page.parentLocation?.toUpperCase() || word.toUpperCase() === page.parentSector?.toUpperCase() ? (
                    <span className="text-accent underline underline-offset-8 decoration-accent/30">{word}</span>
                  ) : word}{' '}
                </React.Fragment>
              ))}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-body text-xl md:text-2xl font-light text-white/50 max-w-3xl uppercase tracking-widest leading-relaxed mb-16"
            >
              {page.metaDescription}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-8"
            >
              <Link 
                href={`/brief?source=${page.pageId}&service=${page.parentService || ''}&location=${page.parentLocation || ''}&sector=${page.parentSector || ''}`}
                className="group inline-flex items-center gap-6 bg-accent text-dark px-10 py-6 font-display text-2xl tracking-widest hover:bg-white transition-all"
              >
                START PROJECT BRIEF <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              {page.parentBundle && (
                <Link 
                  href={`/bundles#${page.parentBundle}`}
                  className="inline-flex items-center gap-6 border border-white/10 px-10 py-6 font-display text-2xl tracking-widest hover:bg-white/5 transition-all text-white/80"
                >
                  VIEW {page.parentBundle.replace(/-/g, ' ')}
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Context / Problem Section */}
      <section className="py-32 border-b border-white/5 bg-white/[0.01]">
        <div className="container px-8 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Target className="w-5 h-5 text-accent/50" />
                <h2 className="font-ui text-[12px] tracking-[0.3em] uppercase text-white/40">The Challenge</h2>
              </div>
              <h3 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight leading-tight mb-8">
                {page.searchIntent.split(' - ')[1] || 'Specialist Drone Intelligence for Complex Projects'}
              </h3>
              <p className="font-body text-lg text-white/50 leading-relaxed font-light uppercase tracking-widest">
                Traditional access methods for {page.parentService?.replace(/-/g, ' ') || 'commercial drone services'} in {page.parentLocation || 'the UK'} often introduce unnecessary risk, cost, and operational downtime. TFTS Drone provides a data-first alternative.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {page.h2Outline.slice(0, 4).map((point, i) => (
                 <div key={i} className="p-8 border border-white/5 bg-white/[0.02]">
                    <div className="font-ui text-[10px] tracking-widest text-accent mb-4 uppercase">Focus {i+1}</div>
                    <div className="font-display text-xl text-white uppercase tracking-widest">{point}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables / Output Section */}
      <section className="py-32 border-b border-white/5">
        <div className="container px-8 md:px-20 text-center">
          <h2 className="font-display text-5xl md:text-7xl text-white mb-10 uppercase leading-none">
            WHAT THE <br/>
            <span className="text-accent underline underline-offset-[10px] decoration-accent/30">CLIENT RECEIVES</span>
          </h2>
          <p className="font-body text-xl text-white/50 leading-relaxed font-light uppercase tracking-widest mb-20 max-w-3xl mx-auto">
            TFTS Drone does not just provide drone flights. We provide usable commercial intelligence formatted for engineering, construction and property teams.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { title: 'High-Res Image Archive', icon: Box, desc: 'Every defect, angle and site detail captured in 4K/6K quality.' },
               { title: 'Annotated Condition Pack', icon: FileText, desc: 'Visual evidence tagged with severity levels and location data.' },
               { title: 'Technical Report', icon: ShieldCheck, desc: 'Comprehensive PDF summaries for internal stakeholder review.' }
             ].map((item, i) => (
               <div key={i} className="p-12 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group">
                  <item.icon className="w-10 h-10 text-accent/30 group-hover:text-accent mb-8 mx-auto transition-colors" />
                  <h3 className="font-display text-2xl text-white uppercase tracking-widest mb-6">{item.title}</h3>
                  <p className="font-body text-[11px] text-white/30 uppercase tracking-widest leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
          
          <div className="mt-20">
             <Link href="/sample-deliverables" className="font-ui text-[12px] tracking-[0.4em] uppercase text-white/40 hover:text-white transition-colors">
               Explore Full Output Library →
             </Link>
          </div>
        </div>
      </section>

      {/* Local / Sector Nuance Section */}
      <section className="py-32 bg-white/[0.02] border-b border-white/5">
        <div className="container px-8 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
             <div className="lg:col-span-4">
                <div className="p-12 border border-white/10 bg-dark">
                   <h3 className="font-display text-3xl text-white uppercase tracking-widest mb-8">
                      {page.parentLocation ? 'LOCATION' : 'SECTOR'} <span className="text-accent">NUANCE</span>
                   </h3>
                   <p className="font-body text-sm text-white/40 uppercase tracking-widest leading-relaxed mb-8">
                      Operating {page.parentService?.replace(/-/g, ' ')} in {page.parentLocation || page.parentSector || 'commercial environments'} requires specific planning and compliance.
                   </p>
                   <ul className="space-y-4">
                      {['Airspace verification', 'Site risk assessment', 'Privacy compliance', 'Weather windowing'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 font-ui text-[10px] tracking-widest uppercase text-white/60">
                           <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
             </div>
             <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                   <h4 className="font-display text-xl text-white uppercase tracking-widest mb-6 border-b border-white/5 pb-4">Operational Context</h4>
                   <p className="font-body text-[11px] text-white/40 uppercase tracking-widest leading-relaxed">
                      TFTS Drone manages all required permissions for drone operations in {page.parentLocation || 'the UK'}. This includes Flight Information Region (FIR) notifications, land owner permissions and site safety cordons.
                   </p>
                </div>
                <div>
                   <h4 className="font-display text-xl text-white uppercase tracking-widest mb-6 border-b border-white/5 pb-4">Reporting Standard</h4>
                   <p className="font-body text-[11px] text-white/40 uppercase tracking-widest leading-relaxed">
                      All deliverables are provided via the EntireFM Client Portal, allowing for direct download of high-resolution visual evidence, survey data and technical reports.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32">
        <div className="container px-8 md:px-20 max-w-4xl mx-auto">
          <div className="text-center mb-20">
             <div className="svc-tag mb-8 flex justify-center">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-accent/30" />
                  <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent">Questions & Answers</span>
                  <div className="w-8 h-px bg-accent/30" />
                </div>
             </div>
             <h2 className="font-display text-5xl text-white uppercase tracking-widest">TECHNICAL <span className="text-accent">CLARITY</span></h2>
          </div>
          
          <div className="space-y-6">
             {[
               { q: `Can you operate in ${page.parentLocation || 'restricted areas'}?`, a: `Yes, TFTS Drone holds the required Operational Authorisation and flight planning expertise to navigate complex environments safely and legally.` },
               { q: 'How quickly is the data delivered?', a: 'Typically within 48-72 hours of the flight mission, depending on the level of processing and reporting required.' },
               { q: 'Is the data survey-grade?', a: 'We can provide survey-grade accuracy (sub-20mm) when scoped with Ground Control Points (GCPs) and appropriate methodology.' }
             ].map((faq, i) => (
               <div key={i} className="p-10 border border-white/5 bg-white/[0.01]">
                  <h4 className="font-display text-lg text-white uppercase tracking-widest mb-6 flex items-start gap-4">
                     <span className="text-accent/30">0{i+1}</span> {faq.q}
                  </h4>
                  <p className="font-body text-xs text-white/40 uppercase tracking-widest leading-relaxed pl-10">
                     {faq.a}
                  </p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-accent text-dark overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none hidden md:block">
           <span className="font-display text-[200px] leading-none text-dark uppercase select-none">
             ENTIREFM
           </span>
        </div>
        <div className="container px-8 md:px-20 relative z-10">
          <div className="max-w-4xl">
            <h2 className="font-display text-6xl md:text-8xl mb-10 uppercase tracking-tighter leading-[0.9]">
              NEED {page.parentService?.replace(/-/g, ' ') || 'DRONE SERVICES'} <br/>
              IN <span className="underline underline-offset-8 decoration-dark/20">{page.parentLocation || page.parentSector || 'THE UK'}?</span>
            </h2>
            <p className="font-body text-xl md:text-2xl font-light text-dark/70 uppercase tracking-widest leading-relaxed mb-16">
              Tell us what you need to inspect, measure, monitor, film or visualise. TFTS Drone will review the site, required output and operational constraints before recommending the right capture route.
            </p>
            <Link 
              href={`/brief?source=${page.pageId}&service=${page.parentService || ''}&location=${page.parentLocation || ''}`}
              className="inline-flex items-center gap-6 bg-dark text-white px-12 py-8 font-display text-3xl tracking-widest hover:bg-white hover:text-dark transition-all"
            >
              START PROJECT BRIEF <ArrowRight className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
