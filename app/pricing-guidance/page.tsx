import { Metadata } from 'next'
import Link from 'next/link'
import { 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Database, 
  Target, 
  ShieldCheck, 
  Zap, 
  Map as MapIcon,
  LayoutDashboard,
  Layers,
  ArrowUpRight,
  Info,
  AlertCircle
} from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import FAQAccordion from '@/components/ui/FAQAccordion'

export const metadata: Metadata = {
  title: 'Drone Survey Pricing Guidance | Project Investment Factors | EntireFM Drone',
  description: 'Understand the commercial factors that influence drone survey costs, including site complexity, required accuracy, sensor types, deliverables and operational scale.',
}

export default function PricingGuidancePage() {
  const costFactors = [
    {
      title: 'Site Complexity & Risk',
      body: 'Operational constraints such as airspace restrictions, nearby infrastructure, public access, and take-off area security influence the planning and resource requirements.',
      impact: 'High'
    },
    {
      title: 'Required Accuracy & Scale',
      body: 'Technical surveying with millimetre accuracy (GCPs/RTK) requires significantly more planning and processing than standard visual records.',
      impact: 'Medium'
    },
    {
      title: 'Sensor & Payload Selection',
      body: 'High-resolution zoom, radiometric thermal imaging, LiDAR or multispectral sensors each involve different hardware and expertise costs.',
      impact: 'Medium'
    },
    {
      title: 'Deliverable Type & Processing',
      body: 'Processing raw imagery into orthomosaic maps, 3D models, Gaussian Splats or detailed condition reports adds value and requires specialist time.',
      impact: 'High'
    },
    {
      title: 'Operational Authorisations',
      body: 'Complex sites (over people, property or in restricted airspace) may require specific operational authorisations or safety measures.',
      impact: 'Variable'
    },
    {
      title: 'Deployment Scale & Frequency',
      body: 'Repeat visits for construction monitoring or estate-wide inspections offer economies of scale compared to one-off deployments.',
      impact: 'Significant'
    }
  ]

  const faqs = [
    {
      question: "How much does a commercial drone survey cost?",
      answer: "Commercial drone project costs are determined by the specific requirement: site location, required outcome, accuracy, deliverables, and operational complexity. We provide project-specific proposals after a brief is submitted."
    },
    {
      question: "Do you offer fixed-price drone packages?",
      answer: "Yes. Our commercial bundles (e.g. Roof Intelligence Pack, Construction Progress Pack) provide structured service levels at defined investment points for common requirements."
    },
    {
      question: "Is travel included in the pricing?",
      answer: "Our project proposals include all costs: planning, travel, deployment, and delivery. We aim for total pricing transparency with no hidden fees."
    },
    {
      question: "Do you offer discounts for multi-site portfolios?",
      answer: "Absolutely. We specialize in supporting property portfolios, estates, and multi-location projects where standardized workflows provide significant efficiency gains."
    },
    {
      question: "What is the fastest way to get a price estimate?",
      answer: "The fastest route is to use our Project Brief Assistant or submit a brief. This provides the context we need to recommend the right service level and investment."
    }
  ]

  return (
    <main className="min-h-screen bg-dark">
      {/* Hero Section */}
      <header className="relative py-48 px-10 md:px-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-accent/[0.02] pointer-events-none" />
        <div className="relative z-10 max-w-[1000px]">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Commercial Guidance</span>
          </div>
          <h1 className="font-display text-5xl md:text-8xl text-white mb-10 tracking-tighter leading-none uppercase">
            Pricing <br/>& Investment <span className="text-accent underline underline-offset-8 decoration-accent/20">Factors</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/50 leading-relaxed mb-16 max-w-[800px] uppercase tracking-widest font-light">
            Understand the factors that influence commercial drone project costs. We focus on outcome-led pricing to ensure every project delivers the required value and technical reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-8">
            <Link href="/cost-estimator" className="bg-accent text-dark font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white transition-all text-center flex items-center justify-center gap-4 group">
              Use Cost Estimator <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/project-brief-assistant" className="border border-white/20 text-white font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white hover:text-dark transition-all text-center">
              Project Brief Assistant
            </Link>
            <Link href="/bundles" className="border border-white/20 text-white font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white hover:text-dark transition-all text-center">
              View Commercial Bundles
            </Link>
          </div>
        </div>
      </header>

      {/* Intro Context */}
      <section className="py-32 px-10 md:px-20 bg-mid border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="svc-tag mb-10 inline-flex"><SectionTag number="01" text="Context" /></div>
          <h2 className="font-display text-4xl md:text-6xl text-white mb-10 uppercase tracking-tighter leading-tight">
            Reliable Data Requires <br/><span className="text-accent underline underline-offset-8 decoration-accent/20">Reliable Execution</span>
          </h2>
          <p className="font-body text-xl text-white/50 leading-relaxed uppercase tracking-widest font-light mb-12">
            In the commercial drone sector, the lowest price often indicates a lack of proper planning, insufficient insurance, poor data quality, or a lack of understanding of the required technical output. EntireFM Drone prices projects based on the operational standard required to deliver professional results.
          </p>
          <div className="flex items-center justify-center gap-8 text-[10px] tracking-[0.3em] uppercase text-white/30 font-ui pt-10 border-t border-white/5">
             <span>CAA-Compliant</span>
             <span className="text-accent/30">•</span>
             <span>Insured to £10m</span>
             <span className="text-accent/30">•</span>
             <span>Technical Delivery</span>
             <span className="text-accent/30">•</span>
             <span>Outcome Focused</span>
          </div>
        </div>
      </section>

      {/* Cost Factors Grid */}
      <section className="py-32 px-10 md:px-20 bg-dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
            <div className="svc-tag mb-8 inline-flex"><SectionTag number="02" text="Analysis" /></div>
            <h2 className="font-display text-5xl text-white uppercase tracking-tighter">Primary Cost Factors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/5">
            {costFactors.map((factor, i) => (
              <div key={i} className="bg-mid p-12 hover:bg-accent/[0.03] transition-colors flex flex-col h-full group">
                <div className="flex justify-between items-start mb-8">
                   <div className="w-10 h-10 border border-accent/20 flex items-center justify-center font-display text-accent/40 group-hover:text-accent transition-colors">0{i+1}</div>
                   <div className="flex flex-col items-end">
                      <span className="font-ui text-[8px] tracking-widest uppercase text-white/20 mb-1">Impact:</span>
                      <span className={`font-ui text-[10px] tracking-widest uppercase ${factor.impact === 'High' ? 'text-red-500/60' : factor.impact === 'Medium' ? 'text-yellow-500/60' : 'text-accent/60'}`}>{factor.impact}</span>
                   </div>
                </div>
                <h3 className="font-display text-2xl text-white mb-6 uppercase tracking-widest group-hover:text-accent transition-colors">{factor.title}</h3>
                <p className="font-body text-xs text-white/40 uppercase tracking-widest leading-relaxed">
                   {factor.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Route Section */}
      <section className="py-32 px-10 md:px-20 bg-dark border-t border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="bg-mid p-12 border border-white/10 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                <Layers className="w-48 h-48" />
             </div>
             <h3 className="font-display text-3xl text-white mb-8 uppercase tracking-widest">Fixed-Price <span className="text-accent">Bundles</span></h3>
             <p className="font-body text-sm text-white/40 uppercase tracking-widest leading-relaxed mb-10">
                For standard requirements (e.g. a single-building roof inspection or monthly site progress), our commercial bundles offer a structured, fixed-price route with defined deliverables and service levels.
             </p>
             <Link href="/bundles" className="inline-flex items-center gap-4 text-accent font-ui text-[12px] tracking-[0.4em] uppercase hover:text-white transition-all">
                Explore Bundles <ArrowUpRight className="w-4 h-4" />
             </Link>
          </div>
          <div className="bg-mid p-12 border border-white/10 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                <Target className="w-48 h-48" />
             </div>
             <h3 className="font-display text-3xl text-white mb-8 uppercase tracking-widest">Custom <span className="text-accent">Briefs</span></h3>
             <p className="font-body text-sm text-white/40 uppercase tracking-widest leading-relaxed mb-10">
                For unique, high-scale or complex sites (e.g. infrastructure networks, large estates, or multi-site portfolios), we provide custom project proposals tailored to the operational requirement and required data density.
             </p>
             <Link href="/brief" className="inline-flex items-center gap-4 text-accent font-ui text-[12px] tracking-[0.4em] uppercase hover:text-white transition-all">
                Submit a Brief <ArrowUpRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>

      {/* Value vs Cost */}
      <section className="py-32 px-10 md:px-20 bg-accent text-dark">
        <div className="max-w-[1000px] mx-auto text-center">
          <div className="svc-tag mb-10 inline-flex bg-dark/10"><SectionTag number="03" text="Philosophy" /></div>
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-10">Value-Led <br/><span className="underline decoration-dark/20 underline-offset-8">Engagement</span></h2>
          <p className="font-body text-xl md:text-2xl uppercase tracking-widest font-medium opacity-80 mb-16 leading-relaxed">
             We do not compete on &quot;cheapest day rate.&quot; We compete on &quot;best project outcome.&quot; Our pricing reflects the quality of planning, the reliability of capture, the accuracy of processing and the professional utility of the final deliverable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
             <div className="p-8 bg-dark/5 border border-dark/10">
                <h4 className="font-display text-xl mb-4 uppercase tracking-widest">What Cheapest Costs You:</h4>
                <ul className="space-y-3">
                   {['Poor data quality', 'Incomplete coverage', 'Insurance gaps', 'Unreliable scheduling', 'Unprofessional reporting'].map(item => (
                     <li key={item} className="flex items-center gap-3 font-ui text-[10px] tracking-widest uppercase opacity-60">
                        <AlertCircle className="w-3 h-3" /> {item}
                     </li>
                   ))}
                </ul>
             </div>
             <div className="p-8 bg-dark text-white border border-white/10">
                <h4 className="font-display text-xl mb-4 uppercase tracking-widest text-accent">What EntireFM Drone Delivers:</h4>
                <ul className="space-y-3">
                   {['Technical reliability', 'Operational standard', 'Full compliance', 'Structured reporting', 'Usable site records'].map(item => (
                     <li key={item} className="flex items-center gap-3 font-ui text-[10px] tracking-widest uppercase opacity-80">
                        <CheckCircle2 className="w-3 h-3 text-accent" /> {item}
                     </li>
                   ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 px-10 md:px-20 bg-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <div className="svc-tag mb-8 inline-flex"><SectionTag number="04" text="Support" /></div>
            <h2 className="font-display text-5xl text-white uppercase tracking-tighter mb-8">Pricing FAQs</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 px-10 md:px-20 text-center bg-dark border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-6xl text-white uppercase tracking-tighter mb-8 leading-tight">
            Ready to Scope <br/>Your Project?
          </h2>
          <p className="font-body text-xl text-white/50 uppercase tracking-widest leading-relaxed mb-20 font-light max-w-3xl mx-auto">
            The fastest route to a firm price is a clear brief. Use our Project Brief Assistant or submit a brief with your site details and required outcome.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link href="/project-brief-assistant" className="bg-accent text-dark font-display text-3xl tracking-[0.1em] px-16 py-8 hover:bg-white transition-all flex items-center justify-center gap-6 group">
              PROJECT BRIEF ASSISTANT <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/brief" className="border border-white/20 text-white font-display text-3xl tracking-[0.1em] px-16 py-8 hover:bg-white hover:text-dark transition-all">
              SUBMIT A BRIEF
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
