'use client'

import Link from 'next/link'
import { 
  ClipboardCheck, 
  Map as MapIcon, 
  ShieldCheck, 
  Target, 
  Database, 
  BarChart3, 
  ArrowRight,
  CheckCircle2,
  Lock,
  LayoutDashboard,
  Layers,
  Zap,
  HelpCircle
} from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import FAQAccordion from '@/components/ui/FAQAccordion'

export default function OperationsStandardPage() {
  const steps = [
    {
      title: 'Project Brief',
      icon: ClipboardCheck,
      body: 'The project starts with the required outcome: what the client needs to inspect, measure, monitor, evidence, film or visualise. EntireFM Flight Desk records the project requirement, site details, service interest, package route and deliverable expectations.',
      outputs: ['Client details', 'Site location', 'Required outcome', 'Service type', 'Relevant commercial bundle', 'Urgency', 'Deliverables requested']
    },
    {
      title: 'Scope Review',
      icon: Target,
      body: 'The brief is reviewed to identify the right drone service, capture workflow, output format and operational approach. This stage helps prevent overselling the wrong service or under-scoping the deliverable.',
      outputs: ['Required output', 'Site type', 'Client sector', 'Accuracy requirements', 'Reporting needs', 'Specialist sensor requirements']
    },
    {
      title: 'Site and Airspace Review',
      icon: MapIcon,
      body: 'Drone operations are planned around the site environment, airspace, nearby people and property, operating constraints and safety requirements. We review constraints including nearby airports, public areas, and ground hazards.',
      outputs: ['Airspace', 'Location constraints', 'Public areas', 'Roads/railways/utilities', 'Take-off points', 'Site access', 'Weather window']
    },
    {
      title: 'Risk and Method Planning',
      icon: ShieldCheck,
      body: 'Before capture, the operation is planned around site-specific risks, separation distances, access, permissions, weather, people, property and the intended deliverable.',
      outputs: ['Risk assessment workflow', 'Method statement', 'Operating area planning', 'Emergency procedures', 'Client coordination', 'Permission checks']
    },
    {
      title: 'Capture Planning',
      icon: LayoutDashboard,
      body: 'The capture method is selected based on the deliverable. A roof inspection, thermal survey, or Gaussian Splat each require different capture patterns and equipment specifications.',
      outputs: ['Inspection: close visual imagery', 'Thermal: timing & environmental conditions', 'Mapping: overlap & control requirements', 'Media: shot list & movement']
    },
    {
      title: 'Drone Operation',
      icon: Zap,
      body: 'The flight is carried out according to the scoped operation, site conditions and agreed capture requirements. The aim is not just to fly safely, but to capture the data needed for the client’s final output.',
      outputs: ['Site arrival checks', 'Weather check', 'Pre-flight checks', 'Capture workflow', 'Data quality review', 'Incident/issue logging']
    },
    {
      title: 'Processing and Reporting',
      icon: Database,
      body: 'Captured data is processed into usable deliverables. Depending on the project, this may include image sets, annotated evidence, PDF reports, thermal outputs, or 3D models.',
      outputs: ['High-res image sets', 'Annotated defect imagery', 'PDF inspection summary', 'Thermal analysis', '3D model / Orthomosaic', 'Insurance evidence packs']
    },
    {
      title: 'Delivery and Record Keeping',
      icon: BarChart3,
      body: 'The final output is delivered in the agreed format, with project records maintained through the operational workflow. This supports traceability, repeat visits, and future comparisons.',
      outputs: ['Deliverable issue record', 'File links', 'Report versioning', 'Repeat visit scheduling', 'Follow-up recommendations']
    }
  ]

  const sectors = [
    { name: 'Facilities Management', desc: 'Inspection evidence, maintenance records and planned survey support for FM teams and property portfolios.' },
    { name: 'Commercial Property', desc: 'Roof, facade, building envelope and asset condition capture for property owners and managing agents.' },
    { name: 'Construction', desc: 'Progress monitoring, site mapping, stakeholder records and visual evidence for construction teams.' },
    { name: 'Insurance & Claims', desc: 'Aerial evidence capture for damage, access-restricted areas and contractor scoping.' },
    { name: 'Surveying', desc: 'High-accuracy aerial data to support survey, engineering and contractor workflows.' },
    { name: 'Infrastructure & Energy', desc: 'Drone inspection and survey workflows for hard-to-access assets, corridors and utilities.' },
    { name: 'Public Sector', desc: 'Estates management and public infrastructure records for local authorities and government bodies.' },
    { name: 'Media & Marketing', desc: 'Cinematic aerial content for brand, event and property marketing campaigns.' }
  ]

  const faqs = [
    {
      question: "What is the EntireFM Operations Standard?",
      answer: "It is the structured workflow EntireFM Drone uses to manage commercial drone projects from brief to deliverable, including project scoping, planning, capture, processing and delivery."
    },
    {
      question: "What is EntireFM Flight Desk?",
      answer: "EntireFM Flight Desk is the management system that supports EntireFM Drone’s drone project workflow, helping organise briefs, site details, service requirements, planning notes, deliverables and project records."
    },
    {
      question: "Does EntireFM Flight Desk guarantee flight approval?",
      answer: "No. Drone operations remain subject to airspace, weather, site access, permissions, nearby people and property, and operational safety requirements. Flight Desk supports planning and record keeping; it does not remove operational requirements."
    },
    {
      question: "Why does this matter for commercial clients?",
      answer: "Commercial clients need reliable outputs, clear project records and structured delivery. A defined operating standard helps ensure the drone capture is planned around the client’s required outcome rather than treated as a generic flight."
    },
    {
      question: "Can projects be tracked through EntireFM Flight Desk?",
      answer: "Where enabled, project status, deliverables and workflow information can be managed through EntireFM Flight Desk. Client-facing visibility may be provided depending on the project setup."
    },
    {
      question: "Does this replace professional surveyor or engineer review?",
      answer: "No. Drone capture can support surveyors, engineers, contractors, insurers and property teams, but formal professional sign-off should be provided by the appropriate qualified professional where required."
    }
  ]

  return (
    <main className="min-h-screen bg-dark pb-32">
      {/* Hero Section */}
      <header className="relative py-40 px-10 md:px-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-dark to-dark z-0" />
        <div className="absolute inset-0 opacity-10 pointer-events-none z-0 overflow-hidden">
           {/* Command Centre Visual Style could go here */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[1px] border-white/10 rounded-full animate-pulse" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-[1px] border-white/5 rounded-full" />
        </div>
        
        <div className="relative z-10 max-w-[1000px]">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Operational Excellence</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl text-white mb-8 tracking-tighter leading-none uppercase">
            The EntireFM<br/>Operations Standard
          </h1>
          
          <p className="font-body text-xl text-white/60 leading-relaxed mb-12 max-w-[800px] uppercase tracking-widest font-light">
            A structured operating model for commercial drone projects — from project brief and flight planning to capture, reporting, deliverables and client oversight through EntireFM Flight Desk.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 mb-16">
            <Link href="/brief?source=ops-standard-hero" className="bg-accent text-dark font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white transition-all text-center flex items-center justify-center gap-4 group">
              Start Project Brief <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/sample-deliverables" className="bg-white text-dark font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-accent transition-all text-center">
              View Sample Deliverables
            </Link>
            <Link href="/choose-your-output" className="border border-white/20 text-white font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white hover:text-dark transition-all text-center">
              Output Selector
            </Link>
          </div>
          
          <div className="pt-10 border-t border-white/10 flex flex-wrap gap-8 items-center font-ui text-[10px] tracking-[0.2em] uppercase text-white/30">
            <span>Brief</span>
            <span className="text-accent">•</span>
            <span>Plan</span>
            <span className="text-accent">•</span>
            <span>Risk Review</span>
            <span className="text-accent">•</span>
            <span>Capture</span>
            <span className="text-accent">•</span>
            <span>Process</span>
            <span className="text-accent">•</span>
            <span>Deliver</span>
            <span className="text-accent">•</span>
            <span>Record</span>
          </div>
        </div>
      </header>

      {/* Why the Standard Exists */}
      <section className="py-32 px-10 md:px-20 bg-mid">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="svc-tag mb-8"><SectionTag number="01" text="Strategy" /></div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-10 uppercase leading-none">
              Drone Work Should Be Planned Around the Output, <span className="text-accent">Not the Aircraft</span>
            </h2>
            <p className="font-body text-lg text-white/50 leading-relaxed uppercase tracking-widest font-light mb-8">
              A commercial drone project is only successful if the client receives a usable output: inspection evidence, survey data, thermal imagery, progress records, media assets or immersive visualisation.
            </p>
            <p className="font-body text-lg text-white/50 leading-relaxed uppercase tracking-widest font-light mb-8">
              The EntireFM Operations Standard is designed to keep every project focused on the deliverable, the site conditions, the risk profile and the decisions the client needs to make.
            </p>
            <div className="p-6 border border-white/10 bg-dark text-accent font-ui text-[12px] tracking-[0.2em] uppercase mt-10">
              The drone is the capture method. The operating standard is what makes the output reliable.
            </div>
          </div>
          
          <div className="relative aspect-square border border-white/10 bg-dark/50 flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 opacity-20">
               {/* Visual representation of workflow / dashboard */}
               <div className="absolute top-10 left-10 right-10 bottom-10 border border-white/20" />
               <div className="absolute top-20 left-20 right-20 bottom-20 border border-white/10" />
             </div>
             <LayoutDashboard className="w-32 h-32 text-accent opacity-20" />
          </div>
        </div>
      </section>

      {/* EntireFM Flight Desk */}
      <section className="py-32 px-10 md:px-20 bg-dark border-y border-white/5">
        <div className="max-w-[1200px] mx-auto text-center mb-24">
          <div className="svc-tag mb-8 inline-flex"><SectionTag number="02" text="Platform" /></div>
          <h2 className="font-display text-5xl text-white uppercase tracking-tighter mb-8">
            Powered by EntireFM Flight Desk
          </h2>
          <p className="font-body text-lg text-white/50 leading-relaxed uppercase tracking-widest font-light max-w-3xl mx-auto">
            EntireFM Flight Desk is the management system behind EntireFM Drone’s project workflow. It supports the way commercial drone work is briefed, scoped, planned, tracked and delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5 border border-white/5">
          {[
            { title: 'Project Intake', desc: 'Structured briefs for service types, outcomes, and deliverable expectations.', icon: ClipboardCheck },
            { title: 'Site Planning', desc: 'Location records, access notes, and airspace considerations for every mission.', icon: MapIcon },
            { title: 'Operational Oversight', desc: 'Mission planning, risk reviews, and methodology records for compliance.', icon: ShieldCheck },
            { title: 'Deliverable Records', desc: 'Traceable records of reports, image sets, and processed technical data.', icon: Database }
          ].map((feature, i) => (
            <div key={i} className="bg-mid p-12 hover:bg-white/[0.03] transition-colors">
              <feature.icon className="w-8 h-8 text-accent mb-8" />
              <h3 className="font-display text-2xl text-white mb-4 uppercase tracking-widest leading-none">{feature.title}</h3>
              <p className="font-body text-xs text-white/40 uppercase tracking-widest leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-32 px-10 md:px-20 bg-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-24">
            <div className="svc-tag mb-8 inline-flex"><SectionTag number="03" text="Process" /></div>
            <h2 className="font-display text-5xl text-white uppercase tracking-tighter mb-8">From Brief to Deliverable</h2>
          </div>

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 p-12 border border-white/5 bg-mid hover:border-accent/30 transition-all">
                <div className="lg:col-span-1">
                  <div className="font-display text-3xl text-white/10 group-hover:text-accent transition-colors">0{idx + 1}</div>
                </div>
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-4 mb-6">
                    <step.icon className="w-6 h-6 text-accent" />
                    <h3 className="font-display text-3xl text-white uppercase tracking-widest">{step.title}</h3>
                  </div>
                  <p className="font-body text-sm text-white/50 leading-relaxed uppercase tracking-widest mb-6">
                    {step.body}
                  </p>
                  <Link href="/brief?source=ops-standard-step-link" className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent flex items-center gap-2 group/link">
                    Learn more about project briefing <ArrowRight className="w-3 h-3 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
                <div className="lg:col-span-4 border-l border-white/5 pl-12 bg-white/[0.01]">
                  <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-white/20 block mb-6">Workflow Data Points</span>
                  <ul className="space-y-3">
                    {step.outputs.map((out, i) => (
                      <li key={i} className="flex items-center gap-3 font-ui text-[9px] tracking-[0.2em] uppercase text-white/40">
                        <CheckCircle2 className="w-3 h-3 text-accent/50" />
                        {out}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Output-led Operating Model */}
      <section className="py-32 px-10 md:px-20 bg-mid border-y border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-24">
            <div className="svc-tag mb-8 inline-flex"><SectionTag number="04" text="Outputs" /></div>
            <h2 className="font-display text-5xl text-white uppercase tracking-tighter mb-8">One Standard, Different Outputs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Inspection Evidence', desc: 'For roofs, facades, infrastructure, and insurance evidence. Focused on clear visual records and usable reporting.' },
              { title: 'Survey Data', desc: 'For mapping, orthomosaics, and site measurement. Scoped around accuracy and processing requirements.' },
              { title: 'Thermal Intelligence', desc: 'For solar, building, and asset anomaly capture. Planned around timing, environment and interpretation limits.' },
              { title: 'Construction Monitoring', desc: 'For repeatable project records and timeline visibility. Focused on consistency and stakeholder updates.' },
              { title: 'Aerial Media', desc: 'For marketing, property, and brand content. Planned around shot design, movement and final edit requirements.' },
              { title: 'Immersive 3D Capture', desc: 'For Gaussian Splats, digital twin-style records and walkthroughs. Planned around visual continuity and viewer experience.' }
            ].map((card, i) => (
              <div key={i} className="p-10 border border-white/5 bg-dark">
                <h3 className="font-display text-2xl text-white mb-6 uppercase tracking-widest">{card.title}</h3>
                <p className="font-body text-[13px] text-white/40 leading-relaxed uppercase tracking-widest font-light">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procurement Confidence */}
      <section className="py-32 px-10 md:px-20 bg-dark">
        <div className="max-w-[1200px] mx-auto text-center mb-24">
          <div className="svc-tag mb-8 inline-flex"><SectionTag number="05" text="Compliance" /></div>
          <h2 className="font-display text-5xl text-white uppercase tracking-tighter mb-8">
            Built for Commercial Buyers, <span className="text-accent">Not Casual Drone Jobs</span>
          </h2>
          <p className="font-body text-lg text-white/50 leading-relaxed uppercase tracking-widest font-light max-w-3xl mx-auto">
            Commercial clients need more than attractive aerial footage. They need confidence that the project has been scoped properly, planned safely, captured consistently and delivered in a format that supports the decision they need to make.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-[1px] bg-white/5 border border-white/5">
          {sectors.map((sector, i) => (
            <div key={i} className="group relative bg-mid p-8 hover:bg-accent/10 transition-colors cursor-default aspect-square flex flex-col justify-center items-center text-center">
              <span className="font-ui text-[10px] tracking-[0.2em] uppercase text-white group-hover:text-accent transition-colors leading-tight">
                {sector.name}
              </span>
              <div className="absolute inset-0 bg-dark p-6 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <p className="font-body text-[9px] text-white/70 uppercase tracking-widest leading-relaxed">
                   {sector.desc}
                 </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commercial Bundles Connection */}
      <section className="py-32 px-10 md:px-20 bg-mid">
        <div className="max-w-[1000px] mx-auto text-center border border-white/5 p-20 bg-dark relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <h2 className="font-display text-5xl text-white uppercase tracking-tighter mb-8 relative z-10">
            Connected to Commercial Drone Packages
          </h2>
          <p className="font-body text-lg text-white/50 leading-relaxed uppercase tracking-widest font-light mb-12 relative z-10">
            The Operations Standard supports EntireFM Drone’s commercial bundles by ensuring each package is managed around a defined output.
          </p>
          <Link href="/bundles" className="inline-flex items-center gap-4 bg-accent text-dark px-12 py-6 font-display text-2xl tracking-[0.1em] hover:bg-white transition-all relative z-10">
            View Commercial Packages <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 px-10 md:px-20 bg-dark border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <div className="svc-tag mb-8 inline-flex"><SectionTag number="06" text="Support" /></div>
            <h2 className="font-display text-5xl text-white uppercase tracking-tighter mb-8">Operational FAQs</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 px-10 md:px-20 text-center bg-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-6xl text-white uppercase tracking-tighter mb-8">
            Start With the Output.<br/>We’ll Build the Mission Around It.
          </h2>
          <p className="font-body text-xl text-white/50 uppercase tracking-widest leading-relaxed mb-16">
            Tell us what you need to inspect, measure, monitor, film or visualise. EntireFM Drone will use its structured operating model and EntireFM Flight Desk workflow to scope the right capture route and deliverables.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link href="/brief?source=ops-standard-footer" className="bg-accent text-dark font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white transition-all flex items-center justify-center gap-4">
              Start Project Brief <ArrowRight className="w-6 h-6" />
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
