// app/portfolio/[slug]/page.tsx
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  ShieldCheck, 
  Box,
  Building2,
  Construction,
  Zap,
  ArrowUpRight,
  ClipboardCheck,
  Plane,
  Database,
  BarChart3,
  ChevronRight
} from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import { portfolioProjects } from '@/lib/portfolio-data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = portfolioProjects.find(p => p.slug === slug)
  if (!project) return {}

  const title = `${project.title} | Drone ${project.label} | EntireFM Drone`
  const description = `${project.intro} Explore this ${project.label.toLowerCase()} for drone capture in the ${project.sector} sector.`

  return {
    title,
    description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = portfolioProjects.find(p => p.slug === slug)
  if (!project) notFound()

  return (
    <main className="bg-dark text-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-40 pb-24 px-8 md:px-20 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            className="object-cover opacity-20 grayscale blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="inline-block px-4 py-1.5 bg-accent text-dark font-ui text-[11px] tracking-[0.3em] uppercase font-bold mb-10">
            {project.label}
          </div>
          
          <h1 className="text-[clamp(2.25rem,3.7vw,3.5rem)] font-extralight tracking-[-0.04em] leading-[1.02] text-white mb-5 sm:mb-6 uppercase max-w-3xl">
            {project.title}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <p className="font-body text-xl md:text-2xl font-light text-white/50 max-w-3xl uppercase tracking-widest leading-relaxed mb-12">
                {project.intro}
              </p>
              
              <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-white/10 pt-12">
                 <div>
                    <div className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-2">Sector</div>
                    <div className="font-display text-xl text-white uppercase tracking-widest">{project.sector}</div>
                 </div>
                 <div>
                    <div className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-2">Service Type</div>
                    <div className="font-display text-xl text-white uppercase tracking-widest">{project.services[0]}</div>
                 </div>
                 <div>
                    <div className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-2">Output Type</div>
                    <div className="font-display text-xl text-white uppercase tracking-widest">{project.outputs[0]}</div>
                 </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 flex justify-end">
              <Link 
                href={`/brief?project=${project.slug}`}
                className="group bg-accent text-dark px-10 py-6 font-display text-2xl tracking-widest flex items-center gap-4 hover:bg-white transition-all w-full lg:w-auto justify-center shadow-[0_20px_40px_rgba(205,174,130,0.15)]"
              >
                DISCUSS A SIMILAR PROJECT <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Challenge / Scenario */}
      <section className="py-32 px-8 md:px-20 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="svc-tag mb-8"><SectionTag number="01" text="Context" /></div>
            <h2 className="font-display text-5xl text-white mb-10 uppercase leading-none tracking-tighter">
              THE <span className="text-accent">{project.label === 'Mission Profile' ? 'SCENARIO' : 'CLIENT REQUIREMENT'}</span>
            </h2>
            <p className="font-body text-xl text-white/60 leading-relaxed uppercase tracking-widest font-light italic">
              {project.scenario}
            </p>
          </div>
          <div className="p-12 border border-white/10 bg-dark relative group">
             <Target className="w-12 h-12 text-accent/20 mb-8" />
             <h4 className="font-display text-2xl text-white uppercase tracking-widest mb-6">Key Focus</h4>
             <ul className="space-y-4">
               {project.outputs.map((out, i) => (
                 <li key={i} className="flex items-center gap-3 font-ui text-[11px] tracking-widest uppercase text-white/50">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {out}
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </section>

      {/* 3. Drone Workflow */}
      <section className="py-32 px-8 md:px-20 bg-dark">
        <div className="max-w-[1400px] mx-auto">
           <div className="svc-tag mb-12"><SectionTag number="02" text="Execution" /></div>
           <h2 className="font-display text-6xl text-white uppercase mb-20 tracking-tighter">DRONE CAPTURE <span className="text-accent underline underline-offset-8 decoration-accent/20">WORKFLOW</span></h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10">
             {project.workflow.map((step, i) => (
               <div key={i} className="p-12 bg-dark group hover:bg-accent/5 transition-all relative">
                 <span className="font-display text-4xl text-accent/10 mb-8 block group-hover:text-accent/30 transition-colors">0{i+1}</span>
                 <p className="font-body text-[11px] text-white/40 uppercase tracking-widest leading-relaxed">
                   {step}
                 </p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 4. Outputs / Deliverables */}
      <section className="py-32 px-8 md:px-20 bg-mid border-y border-white/5">
        <div className="max-w-[1200px] mx-auto">
           <div className="text-center mb-24">
              <div className="svc-tag mb-8 inline-flex"><SectionTag number="03" text="Results" /></div>
              <h2 className="font-display text-6xl text-white uppercase tracking-tighter">
                {project.label === 'Mission Profile' ? 'POTENTIAL' : 'DELIVERED'} <span className="text-accent">OUTPUTS</span>
              </h2>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
             {project.deliverables.map((del, i) => (
               <div key={i} className="p-10 bg-dark border border-white/5 group hover:border-accent/20 transition-all">
                  <div className="flex items-start gap-4">
                     <ClipboardCheck className="w-6 h-6 text-accent shrink-0" />
                     <p className="font-ui text-[12px] tracking-widest uppercase text-white/60 group-hover:text-white transition-colors">
                        {del}
                     </p>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 5. Commercial Value */}
      <section className="py-32 px-8 md:px-20 bg-dark">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="relative aspect-square border border-white/10 overflow-hidden">
              <Image 
                src={project.image} 
                alt="Commercial Value of Drone Capture"
                fill
                className="object-cover opacity-40 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
              <div className="absolute bottom-12 left-12">
                 <ShieldCheck className="w-16 h-16 text-accent mb-6" />
                 <h3 className="font-display text-4xl text-white uppercase tracking-widest">Operationally<br/>Mature</h3>
              </div>
           </div>
           <div>
              <div className="svc-tag mb-8"><SectionTag number="04" text="Impact" /></div>
              <h2 className="font-display text-6xl text-white uppercase tracking-tighter mb-12">COMMERCIAL <br/><span className="text-accent">VALUE</span></h2>
              <div className="space-y-6">
                {project.commercialValue.map((val, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 border border-white/5 bg-white/[0.01]">
                     <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                     <p className="font-body text-lg text-white/60 leading-tight uppercase tracking-widest font-light italic">
                        {val}
                     </p>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* 6. Related Services & 7. Recommended Bundle */}
      <section className="py-32 px-8 md:px-20 bg-mid border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
             <div className="lg:col-span-7">
                <h4 className="font-display text-2xl text-white uppercase tracking-widest mb-12 flex items-center gap-4">
                  <Box className="w-8 h-8 text-accent/40" /> RELATED SERVICES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {project.relatedServices.map((svcSlug) => (
                     <Link 
                       key={svcSlug}
                       href={`/services/${svcSlug}`}
                       className="p-8 border border-white/5 bg-dark hover:border-accent transition-all group flex items-center justify-between"
                     >
                       <span className="font-ui text-[11px] tracking-widest uppercase text-white/40 group-hover:text-white transition-colors">
                         {svcSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                       </span>
                       <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-accent transition-all" />
                     </Link>
                   ))}
                </div>
             </div>
             
             <div className="lg:col-span-5">
                <h4 className="font-display text-2xl text-white uppercase tracking-widest mb-12 flex items-center gap-4">
                  <Zap className="w-8 h-8 text-accent/40" /> RECOMMENDED BUNDLE
                </h4>
                <div className="p-12 border border-accent/20 bg-accent/[0.02] relative group">
                   <div className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent mb-6">Commercial Outcome</div>
                   <h3 className="font-display text-4xl text-white mb-8 uppercase tracking-widest leading-none group-hover:text-accent transition-colors">
                      {project.recommendedBundle.name}
                   </h3>
                   <Link 
                     href={`/bundles#${project.recommendedBundle.slug}`}
                     className="inline-flex items-center gap-4 font-ui text-[12px] font-bold tracking-[0.3em] uppercase text-white hover:text-accent transition-colors border-b border-white/10 pb-2"
                   >
                     EXPLORE BUNDLE DETAILS <ArrowRight className="w-4 h-4" />
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-32 px-8 md:px-20 bg-accent text-dark">
        <div className="max-w-[1200px] mx-auto text-center">
          <Plane className="w-16 h-16 mx-auto mb-10 text-dark/80" />
          <h2 className="font-display text-6xl md:text-8xl mb-10 uppercase tracking-tighter leading-[0.85]">
            PLANNING A SIMILAR <br/><span className="underline decoration-dark/30 underline-offset-[10px]">DRONE REQUIREMENT?</span>
          </h2>
          <p className="font-body text-xl md:text-2xl text-dark/70 max-w-3xl mx-auto mb-16 uppercase tracking-widest font-medium leading-relaxed">
            Tell us what you need to inspect, measure, monitor or visualise. EntireFM Drone will recommend the right capture workflow and deliverables.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link 
              href={`/brief?project=${project.slug}`}
              className="group flex items-center gap-8 bg-dark text-white px-12 py-8 font-display text-4xl tracking-[0.1em] transition-all hover:bg-white hover:text-dark w-full sm:w-auto shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
            >
              START PROJECT BRIEF <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition-transform duration-500" />
            </Link>
            <Link 
              href="/services"
              className="font-ui text-[14px] font-bold tracking-[0.5em] uppercase text-dark/60 hover:text-dark transition-colors"
            >
              View Related Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

