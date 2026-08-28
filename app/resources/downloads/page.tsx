import { Metadata } from 'next'
import Link from 'next/link'
import { 
  ArrowRight, 
  Download, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Users, 
  Briefcase,
  ChevronRight,
  ShieldCheck,
  Target,
  FileSearch,
  LayoutDashboard
} from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import { leadMagnets } from '@/lib/lead-magnets-config'

export const metadata: Metadata = {
  title: 'Commercial Drone Guides, Checklists and Templates | EntireFM Drone',
  description: 'Download practical commercial drone guides and checklists for inspections, roof surveys, facilities management, construction monitoring, insurance evidence, Gaussian Splats and drone survey cost planning.',
}

export default function LeadMagnetHub() {
  return (
    <main className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-8 md:px-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-accent/[0.02] pointer-events-none" />
        <div className="container relative z-10 max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Resource Library</span>
          </div>
          <h1 className="font-display text-5xl md:text-8xl text-white mb-8 tracking-tighter leading-[0.9] uppercase">
            Commercial Drone <br/><span className="text-accent underline underline-offset-8 decoration-accent/20">Guides & Checklists</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/50 leading-relaxed max-w-4xl uppercase tracking-widest font-light mb-12">
            Download practical resources for drone inspections, roof surveys, facilities management, construction monitoring, insurance evidence, Gaussian Splat capture and drone survey cost planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 mb-16">
             <a href="#browse-downloads" className="bg-accent text-dark font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white transition-all text-center">
               BROWSE DOWNLOADS
             </a>
             <Link href="/brief" className="border border-white/20 text-white font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white hover:text-dark transition-all text-center">
               START PROJECT BRIEF
             </Link>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-6 items-center text-[10px] tracking-[0.3em] uppercase text-white/30 font-ui border-t border-white/10 pt-10">
             <span className="flex items-center gap-2"><FileText className="w-4 h-4 text-accent/40" /> Buyer Guides</span>
             <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent/40" /> Checklists</span>
             <span className="flex items-center gap-2"><LayoutDashboard className="w-4 h-4 text-accent/40" /> Templates</span>
             <span className="flex items-center gap-2"><Target className="w-4 h-4 text-accent/40" /> Cost Planning</span>
             <span className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-accent/40" /> Sector Resources</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-8 md:px-20 bg-[#0a0a0a]">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="svc-tag mb-8"><SectionTag number="01" text="Context" /></div>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-10 uppercase leading-tight tracking-tighter">
                Useful Resources Before You <span className="text-accent">Request a Drone Quote</span>
              </h2>
              <p className="font-body text-lg text-white/50 leading-relaxed uppercase tracking-widest font-light mb-10 italic border-l-2 border-accent/20 pl-8">
                &quot;Not every visitor is ready to submit a project brief immediately. These guides help teams understand what drone capture provides and what information is needed.&quot;
              </p>
              <div className="p-8 border border-white/10 bg-white/[0.02] text-accent font-ui text-[12px] tracking-[0.2em] uppercase">
                Better briefs create better drone outputs.
              </div>
            </div>
            <div className="space-y-8">
               <div className="p-8 bg-dark border border-white/5">
                  <h3 className="font-display text-xl text-white mb-4 uppercase tracking-widest">Industry Authority</h3>
                  <p className="font-body text-xs text-white/40 uppercase tracking-widest leading-relaxed">
                    EntireFM Drone provides structured technical guidance to ensure clients receive high-quality, survey-grade data and inspection evidence.
                  </p>
               </div>
               <div className="p-8 bg-dark border border-white/5">
                  <h3 className="font-display text-xl text-white mb-4 uppercase tracking-widest">Decision Support</h3>
                  <p className="font-body text-xs text-white/40 uppercase tracking-widest leading-relaxed">
                    Our guides help property managers, contractors and surveyors choose the right drone capture method and processing route for their specific project.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asset Grid */}
      <section id="browse-downloads" className="py-32 px-8 md:px-20 bg-dark">
        <div className="container max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-white/10 border border-white/5">
            {leadMagnets.map((asset) => (
              <div key={asset.id} className="bg-[#0a0a0a] p-12 flex flex-col group hover:bg-accent/[0.02] transition-all">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-white/5 border border-white/10 text-accent group-hover:border-accent/40 transition-colors">
                    <FileText className="w-8 h-8" />
                  </div>
                  <span className="font-ui text-[9px] tracking-[0.3em] uppercase text-white/20 border border-white/10 px-3 py-1">
                    {asset.type}
                  </span>
                </div>
                
                <h3 className="font-display text-2xl text-white mb-6 uppercase tracking-widest leading-tight group-hover:text-accent transition-colors">
                  {asset.title}
                </h3>
                
                <p className="font-body text-[11px] text-white/40 uppercase tracking-widest leading-relaxed mb-8 flex-1">
                  {asset.description}
                </p>

                <div className="space-y-6 mb-12">
                   <div>
                      <span className="block font-ui text-[9px] tracking-widest uppercase text-white/20 mb-2">Target Audience</span>
                      <p className="font-body text-[10px] text-white/50 uppercase tracking-widest leading-relaxed">
                         {asset.audience.slice(0, 3).join(', ')}{asset.audience.length > 3 ? '...' : ''}
                      </p>
                   </div>
                   <div className="flex gap-4">
                      <div className="flex-1">
                         <span className="block font-ui text-[9px] tracking-widest uppercase text-white/20 mb-2">Related Service</span>
                         <span className="block font-body text-[10px] text-accent/60 uppercase tracking-widest">{asset.relatedServices[0].name}</span>
                      </div>
                      <div className="flex-1">
                         <span className="block font-ui text-[9px] tracking-widest uppercase text-white/20 mb-2">Related Bundle</span>
                         <span className="block font-body text-[10px] text-accent/60 uppercase tracking-widest">{asset.relatedBundles[0].name}</span>
                      </div>
                   </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-3 text-white/30 font-ui text-[9px] tracking-widest uppercase">
                      {asset.status === 'preparing' ? (
                        <>
                          <Clock className="w-3 h-3 text-accent/30" />
                          <span>Preparing Asset</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-accent" />
                          <span>Download Ready</span>
                        </>
                      )}
                   </div>
                   <Link 
                     href={`/resources/downloads/${asset.slug}`}
                     className="flex items-center gap-3 bg-white/5 hover:bg-accent hover:text-dark px-6 py-3 font-ui text-[10px] tracking-[0.3em] uppercase transition-all group/btn"
                   >
                     {asset.status === 'preparing' ? 'REQUEST ACCESS' : 'DOWNLOAD ASSET'}
                     <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-8 md:px-20 bg-mid border-y border-white/5">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-24">
             <div className="svc-tag mb-8 inline-flex"><SectionTag number="02" text="Support" /></div>
             <h2 className="font-display text-5xl text-white uppercase tracking-tighter mb-4">Resource FAQs</h2>
          </div>
          
          <div className="space-y-px bg-white/10 border border-white/5">
             {[
               {
                 q: "Are the drone guides free?",
                 a: "Yes, selected guides and checklists can be downloaded by submitting the short form. Some resources may be previewed publicly before download."
               },
               {
                 q: "What happens after I download a guide?",
                 a: "You will receive access to the selected resource and may be shown relevant services, bundles or project brief options based on your sector and project type."
               },
               {
                 q: "Do I need to know which drone service I need?",
                 a: "No. Select the closest sector and project type. EntireFM Drone can recommend the right service, bundle and deliverable route."
               },
               {
                 q: "Can I request a project after downloading a guide?",
                 a: "Yes. Each resource includes a route to submit a project brief with relevant context."
               },
               {
                 q: "Are these guides a substitute for professional advice?",
                 a: "No. The guides are designed to help with planning and scoping. Drone operations, surveys and professional assessments should be scoped around the specific project and qualified professional requirements where needed."
               }
             ].map((item, i) => (
               <div key={i} className="bg-dark p-10">
                  <h4 className="font-display text-xl text-white mb-4 uppercase tracking-widest">{item.q}</h4>
                  <p className="font-body text-sm text-white/40 uppercase tracking-widest leading-relaxed">{item.a}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 px-8 md:px-20 text-center bg-dark">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-display text-6xl text-white uppercase tracking-tighter mb-8 leading-[0.85]">
            Better Visibility.<br/>Better Decisions.
          </h2>
          <p className="font-body text-xl text-white/50 uppercase tracking-widest leading-relaxed mb-16 font-light">
            EntireFM Drone helps teams move from guessing to knowing by providing technical aerial evidence and structured data.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link href="/brief" className="bg-accent text-dark font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white transition-all flex items-center justify-center gap-4 group">
              Start Project Brief <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/services" className="border border-white/20 text-white font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white hover:text-dark transition-all">
              View Drone Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
