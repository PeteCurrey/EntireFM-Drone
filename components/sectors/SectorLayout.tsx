'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Activity, 
  ShieldCheck, 
  ClipboardCheck, 
  ChevronRight,
  HelpCircle,
  LayoutDashboard,
  FileText,
  Package,
  Zap,
  Hammer,
  Database,
  Search,
  MousePointer2,
  AlertCircle
} from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import VideoBackground from '@/components/ui/VideoBackground'
import FAQAccordion from '@/components/ui/FAQAccordion'

interface ServiceStackItem {
  name: string
  benefit: string
  deliverables: string[]
  href: string
}

interface BundleLink {
  name: string
  fit: string
  outputs: string[]
  href: string
}

interface DeliverableLink {
  name: string
  desc: string
  href: string
}

interface OutcomeItem {
  title: string
  desc: string
  href: string
}

interface SectorLayoutProps {
  slug: string
  title: string
  hero: {
    title: string
    subheading: string
    badges: string[]
    ctaPrimary: string
  }
  challenge: {
    title: string
    text: string
  }
  outcomes: OutcomeItem[]
  workflow: { title: string, desc: string }[]
  serviceStack: ServiceStackItem[]
  bundles: BundleLink[]
  deliverables: DeliverableLink[]
  missionProfiles: { title: string, href: string }[]
  resources: { title: string, href: string }[]
  faqs: { q: string, a: string }[]
  caveat?: string
  heroVideo?: string
  heroPoster?: string
}

export default function SectorLayout({
  slug,
  title,
  hero,
  challenge,
  outcomes,
  workflow,
  serviceStack,
  bundles,
  deliverables,
  missionProfiles,
  resources,
  faqs,
  caveat,
  heroVideo = "/videos/inspection.mp4",
  heroPoster = "/images/hero_poster.jpg",
}: SectorLayoutProps) {
  
  // Analytics event simulation
  const trackEvent = (name: string, props: Record<string, unknown>) => {
    console.log(`[Analytics] ${name}`, { sector: slug, ...props });
  };

  return (
    <main className="min-h-screen bg-dark">
      {/* Sector Command Hero */}
      <header className="relative py-48 px-10 md:px-20 bg-dark overflow-hidden">
        <VideoBackground 
          src={heroVideo} 
          poster={heroPoster} 
          brightness={0.3} 
          isHero={true}
        />
        
        <div className="relative z-10 max-w-[1200px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Industry Command Centre</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-8xl text-white mb-8 tracking-tighter leading-[0.9] uppercase"
          >
            {hero.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-xl text-white/60 leading-relaxed mb-12 max-w-[800px] uppercase tracking-widest font-light"
          >
            {hero.subheading}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-8 mb-16"
          >
            <Link 
              href={`/brief?source=sector-command-${slug}&sector=${slug}`} 
              onClick={() => trackEvent('sector_brief_cta_clicked', { CTA_label: hero.ctaPrimary })}
              className="bg-accent text-dark font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white transition-all text-center flex items-center justify-center gap-4 group"
            >
              {hero.ctaPrimary} <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link 
              href="/sample-deliverables" 
              className="bg-white/5 border border-white/10 text-white font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white hover:text-dark transition-all text-center"
            >
              View Sample Deliverables
            </Link>
          </motion.div>
          
          <div className="pt-10 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-4 items-center font-ui text-[10px] tracking-[0.2em] uppercase text-white/30">
            {hero.badges.map((badge, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-accent/30">•</span>}
                {badge}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Sector Challenge Panel */}
      <section className="py-32 px-10 md:px-20 bg-mid">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <div className="svc-tag mb-8"><SectionTag number="01" text="Context" /></div>
            <h2 className="font-display text-4xl md:text-6xl text-white mb-10 uppercase leading-none tracking-tighter">
              {challenge.title}
            </h2>
            <div className="font-body text-lg text-white/50 leading-relaxed uppercase tracking-widest font-light space-y-6">
               <p>{challenge.text}</p>
            </div>
            {caveat && (
              <div className="mt-12 p-8 border border-accent/20 bg-accent/5 flex items-start gap-4">
                 <AlertCircle className="w-5 h-5 text-accent mt-0.5" />
                 <p className="font-body text-[10px] text-accent/80 uppercase tracking-widest italic leading-relaxed">
                   {caveat}
                 </p>
              </div>
            )}
          </div>
          <div className="bg-dark/50 border border-white/10 p-12">
            <h3 className="font-display text-2xl text-white mb-10 uppercase tracking-widest border-b border-white/5 pb-6">What Drone Capture Helps Your Team Do</h3>
            <div className="grid grid-cols-1 gap-6">
              {outcomes.map((outcome, i) => (
                <Link 
                  key={i} 
                  href={outcome.href}
                  onClick={() => trackEvent('sector_outcome_clicked', { outcome: outcome.title })}
                  className="group flex items-start gap-6 p-6 border border-white/5 bg-white/[0.01] hover:border-accent/40 transition-all"
                >
                   <div className="w-8 h-8 rounded-full border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-dark transition-all">
                      <span className="font-display text-xs">{i+1}</span>
                   </div>
                   <div>
                      <h4 className="font-display text-lg text-white mb-2 uppercase tracking-widest group-hover:text-accent transition-colors">{outcome.title}</h4>
                      <p className="font-body text-[10px] text-white/30 uppercase tracking-widest leading-relaxed">{outcome.desc}</p>
                   </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sector Workflow Map */}
      <section className="py-32 px-10 md:px-20 bg-dark border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none">
           <Activity className="w-[800px] h-[800px]" />
        </div>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
            <div className="svc-tag mb-8 inline-flex"><SectionTag number="02" text="Workflow" /></div>
            <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter mb-4">Typical {title} Drone Workflow</h2>
            <p className="font-ui text-xs text-accent tracking-[0.3em] uppercase">From Requirement to Usable Output</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/10 border border-white/5">
            {workflow.map((step, i) => (
              <div key={i} className="p-10 bg-mid relative group hover:bg-accent/5 transition-all h-full flex flex-col">
                <span className="font-display text-5xl text-accent/10 mb-8 block group-hover:text-accent transition-colors">0{i+1}</span>
                <h3 className="font-display text-lg text-white mb-6 tracking-widest uppercase leading-tight flex-1">{step.title}</h3>
                <p className="font-body text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
             <Link href="/operations-standard" className="inline-flex items-center gap-6 font-ui text-[11px] tracking-[0.4em] uppercase text-white/40 hover:text-accent transition-all">
                View the EntireFM Operations Standard <ArrowRight className="w-5 h-5" />
             </Link>
          </div>
        </div>
      </section>

      {/* Service Stack */}
      <section className="py-32 px-10 md:px-20 bg-dark">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
             <div>
                <div className="svc-tag mb-8"><SectionTag number="03" text="Capabilities" /></div>
                <h2 className="font-display text-5xl text-white uppercase tracking-tighter leading-none">RECOMMENDED <br/><span className="text-accent underline underline-offset-[10px] decoration-accent/30">SERVICE STACK</span></h2>
             </div>
             <p className="font-ui text-[11px] tracking-[0.3em] uppercase text-white/30 max-w-xs text-right">
               Precision services tailored to {title} specific reporting and data requirements.
             </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceStack.map((svc, i) => (
              <Link 
                key={i} 
                href={svc.href}
                onClick={() => trackEvent('sector_service_clicked', { service: svc.name })}
                className="bg-mid p-12 group hover:bg-accent/[0.03] transition-all flex flex-col h-full border border-white/5 hover:border-accent/40"
              >
                <h3 className="font-display text-2xl text-white mb-6 uppercase tracking-widest group-hover:text-accent transition-colors">{svc.name}</h3>
                <p className="font-body text-[11px] text-white/40 uppercase tracking-widest leading-relaxed mb-10">
                  {svc.benefit}
                </p>
                <div className="flex-1 space-y-4 mb-12 border-t border-white/5 pt-8">
                   <span className="font-ui text-[9px] tracking-widest text-white/20 uppercase">Core Deliverables:</span>
                   {svc.deliverables.map((d, j) => (
                     <div key={j} className="flex items-center gap-3 font-ui text-[9px] tracking-widest uppercase text-white/50">
                        <CheckCircle2 className="w-3 h-3 text-accent/30" /> {d}
                     </div>
                   ))}
                </div>
                <div className="flex items-center gap-2 text-accent font-ui text-[10px] tracking-[0.4em] uppercase">
                  View Service <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Recommendation */}
      <section className="py-32 px-10 md:px-20 bg-mid border-y border-white/5">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-24">
            <div className="svc-tag mb-8 inline-flex"><SectionTag number="04" text="Commercial" /></div>
            <h2 className="font-display text-5xl text-white uppercase tracking-tighter mb-4">BEST-FIT BUNDLES</h2>
            <p className="font-ui text-xs text-accent tracking-[0.3em] uppercase">Outcome-Led Packages for {title}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {bundles.map((bundle, i) => (
              <div key={i} className="bg-dark p-12 border border-white/10 flex flex-col h-full hover:border-accent/40 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                   <Package className="w-32 h-32" />
                </div>
                <Package className="w-10 h-10 text-accent mb-8" />
                <h3 className="font-display text-3xl text-white mb-6 uppercase tracking-widest">{bundle.name}</h3>
                <p className="font-body text-sm text-white/40 uppercase tracking-widest leading-relaxed mb-10 max-w-md">
                  {bundle.fit}
                </p>
                <ul className="space-y-4 mb-16 flex-1 pt-8 border-t border-white/5">
                  {bundle.outputs.map((out, j) => (
                    <li key={j} className="flex items-center gap-4 font-ui text-[10px] tracking-[0.2em] uppercase text-white/50">
                      <div className="w-2 h-2 bg-accent/40 rounded-full" />
                      {out}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={bundle.href} 
                  onClick={() => trackEvent('sector_bundle_clicked', { bundle: bundle.name })}
                  className="bg-accent text-dark font-display text-2xl tracking-[0.1em] py-6 text-center hover:bg-white transition-all uppercase"
                >
                  View Bundle
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-32 px-10 md:px-20 bg-dark">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="svc-tag mb-8 inline-flex"><SectionTag number="05" text="Intelligence" /></div>
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter mb-10">TOOLS FOR <br/><span className="text-accent underline underline-offset-[10px] decoration-accent/30">{title} TEAMS</span></h2>
          <p className="font-body text-xl text-white/40 uppercase tracking-widest leading-relaxed mb-24 max-w-3xl mx-auto">
            Not sure whether you need an inspection report, a map, a progress record or a 3D visualisation? Use the tools below to narrow the requirement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               { title: 'Project Brief Assistant', desc: 'Get a recommended service and package based on your project requirement.', href: '/project-brief-assistant', icon: Zap },
               { title: 'Choose Your Drone Output', desc: 'Match your required outcome to the right deliverable.', href: '/choose-your-output', icon: MousePointer2 },
               { title: 'Pricing Guidance', desc: 'Understand the factors that affect project cost.', href: '/pricing-guidance', icon: Database },
               { title: 'Sample Deliverables', desc: 'See example reports, maps, image sets and visual outputs.', href: '/sample-deliverables', icon: FileText },
               { title: 'Client Portal Demos', desc: 'Preview how project outputs can be organised and delivered.', href: '/client-portal-demos', icon: LayoutDashboard }
             ].map((tool, i) => (
               <Link 
                key={i} 
                href={tool.href}
                onClick={() => trackEvent('sector_tool_clicked', { tool_name: tool.title })}
                className="bg-mid p-10 border border-white/5 flex flex-col items-center text-center group hover:bg-accent/[0.03] transition-all"
               >
                  <tool.icon className="w-10 h-10 text-accent/30 group-hover:text-accent mb-8 transition-colors" />
                  <h3 className="font-display text-xl text-white uppercase tracking-widest mb-4">{tool.title}</h3>
                  <p className="font-body text-[10px] text-white/30 uppercase tracking-widest leading-relaxed">
                    {tool.desc}
                  </p>
               </Link>
             ))}
          </div>
        </div>
      </section>

      {/* Mission Profiles Section */}
      <section className="py-32 px-10 md:px-20 bg-dark border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-8 mb-20">
             <div className="w-16 h-px bg-accent/30" />
             <h2 className="font-display text-4xl text-white uppercase tracking-widest">Example <span className="text-accent">{title}</span> Mission Profiles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {missionProfiles.map((mp, i) => (
              <Link 
                key={i} 
                href={mp.href}
                onClick={() => trackEvent('sector_mission_profile_clicked', { title: mp.title })}
                className="p-10 border border-white/10 bg-white/[0.01] group hover:border-accent/40 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-6">
                   <div className="w-10 h-10 border border-accent/20 flex items-center justify-center font-display text-accent/40 group-hover:text-accent group-hover:border-accent transition-all">0{i+1}</div>
                   <span className="font-display text-lg text-white/70 group-hover:text-white uppercase tracking-widest transition-colors">{mp.title}</span>
                </div>
                <ArrowRight className="w-6 h-6 text-accent/20 group-hover:text-accent group-hover:translate-x-2 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Grid */}
      <section className="py-32 px-10 md:px-20 bg-mid">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="svc-tag mb-8 inline-flex"><SectionTag number="06" text="Outputs" /></div>
          <h2 className="font-display text-5xl text-white uppercase tracking-tighter mb-16">What {title} Clients Receive</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/5 mb-16">
            {deliverables.map((item, i) => (
              <Link 
                key={i} 
                href={item.href}
                onClick={() => trackEvent('sector_deliverable_clicked', { deliverable: item.name })}
                className="bg-dark p-12 group hover:bg-accent/5 transition-all text-center flex flex-col items-center justify-center min-h-[240px]"
              >
                <FileText className="w-8 h-8 text-accent/30 group-hover:text-accent mb-6 transition-colors" />
                <h4 className="font-display text-lg text-white mb-4 uppercase tracking-widest group-hover:text-accent transition-colors">{item.name}</h4>
                <p className="font-body text-[9px] text-white/30 uppercase tracking-widest leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">
                   {item.desc}
                </p>
              </Link>
            ))}
          </div>
          <Link href="/sample-deliverables" className="inline-flex items-center gap-6 font-ui text-[12px] tracking-[0.4em] uppercase text-accent hover:text-white transition-all">
            Explore Output Library <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Resources & Guides */}
      <section className="py-32 px-10 md:px-20 bg-dark border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
             <h3 className="font-display text-3xl text-white uppercase tracking-widest">Industry Resources</h3>
             <p className="font-ui text-[10px] text-accent tracking-[0.3em] uppercase mt-4">Guides for {title} Teams</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((res, i) => (
              <Link 
                key={i} 
                href={res.href}
                onClick={() => trackEvent('sector_resource_clicked', { title: res.title })}
                className="p-8 border border-white/10 bg-white/[0.02] flex items-center justify-between group hover:border-accent/40 transition-all"
              >
                <span className="font-ui text-[11px] tracking-widest uppercase text-white/50 group-hover:text-white transition-colors">{res.title}</span>
                <ArrowRight className="w-5 h-5 text-accent/40 group-hover:text-accent group-hover:translate-x-2 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 px-10 md:px-20 bg-mid border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="svc-tag mb-8"><SectionTag number="07" text="Support" /></div>
          <h2 className="font-display text-5xl text-white mb-16 uppercase tracking-tighter leading-tight">{title} <span className="text-accent underline underline-offset-8 decoration-accent/20">FAQs</span></h2>
          <FAQAccordion faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />
        </div>
      </section>

      {/* Final Sector CTA */}
      <section className="py-48 px-10 md:px-20 text-center bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Activity className="w-16 h-16 mb-12 mx-auto animate-pulse text-accent" />
          <h2 className="font-display text-6xl md:text-8xl text-white uppercase tracking-tighter mb-12 leading-[0.9]">
            NEED DRONE SUPPORT <br/>FOR <span className="text-accent underline underline-offset-8 decoration-accent/20">{title}?</span>
          </h2>
          <p className="font-body text-xl md:text-2xl text-white/50 uppercase tracking-widest leading-relaxed mb-20 font-light max-w-3xl mx-auto">
            Tell us what you need to inspect, measure, monitor, evidence, film or visualise. EntireFM Drone will recommend the right service, package and deliverables for your project.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <Link 
              href={`/brief?source=sector-command-footer-${slug}&sector=${slug}`} 
              onClick={() => trackEvent('sector_brief_cta_clicked', { CTA_label: 'Start Project Brief' })}
              className="bg-accent text-dark font-display text-3xl tracking-[0.1em] px-16 py-8 hover:bg-white transition-all flex items-center justify-center gap-6 group"
            >
              START PROJECT BRIEF <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/project-brief-assistant" className="border border-white/20 text-white font-display text-3xl tracking-[0.1em] px-16 py-8 hover:bg-white hover:text-dark transition-all flex items-center justify-center">
              PROJECT BRIEF ASSISTANT
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
