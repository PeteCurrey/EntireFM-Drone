// app/tfts-3d/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  CheckCircle2, 
  HelpCircle, 
  Eye, 
  Box, 
  ChevronRight, 
  Layers, 
  Activity, 
  Target, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import FAQAccordion from '@/components/ui/FAQAccordion'
import GaussianSplatViewer from '@/components/interactive/GaussianSplatViewer'

export const metadata: Metadata = {
  title: 'TFTS 3D — Interactive 3D Modelling & Digital Site Capture | TFTS Drone',
  description: 'Explore TFTS 3D from TFTS Drone — interactive, photorealistic 3D representations of real-world buildings, sites and assets captured from aerial and ground-based survey data.',
  alternates: {
    canonical: '/tfts-3d',
  },
  openGraph: {
    title: 'TFTS 3D — Interactive 3D Modelling & Digital Site Capture | TFTS Drone',
    description: 'High-fidelity 3D models created from aerial and ground-based survey data. Explore buildings, sites and assets in an immersive interactive 3D environment.',
    url: 'https://tfts.co.uk/tfts-3d',
    siteName: 'TFTS Drone',
  },
}

export default function TFTS3DShowcasePage() {
  const faqs = [
    {
      question: 'What is TFTS 3D?',
      answer: 'TFTS 3D is our proprietary interactive 3D modelling and digital site capture service. It creates photorealistic 3D representations of real-world environments, allowing stakeholders to explore assets from any angle and viewpoint rather than relying on flat photography or fixed video.'
    },
    {
      question: 'How is TFTS 3D data captured?',
      answer: 'TFTS 3D is produced from precision drone flight paths combined with ground-level capture for complete spatial coverage. Captured imagery is processed using advanced TFTS 3D modelling and photogrammetric algorithms to reconstruct high-fidelity spatial models.'
    },
    {
      question: 'Is TFTS 3D survey-grade?',
      answer: 'TFTS 3D is primarily an immersive visual intelligence asset. For measurement-critical engineering or boundary verification, we combine TFTS 3D capture with RTK GNSS, ground control points (GCPs), LiDAR and survey-grade photogrammetry workflows.'
    },
    {
      question: 'What is TFTS 3D best used for?',
      answer: 'It is ideal for stakeholder presentations, development marketing, construction progress documentation, heritage preservation, remote site induction, insurance baseline records and digital twin integration.'
    },
    {
      question: 'Can TFTS 3D models be embedded on our website or portal?',
      answer: 'Yes. We deliver web-optimised 3D models ready for integration into client portals, investor presentations or project websites, complete with interactive orbit, zoom and pan controls.'
    },
    {
      question: 'How does TFTS 3D compare with standard 3D photogrammetry meshes?',
      answer: 'Traditional photogrammetry meshes often exhibit texture distortion or simplified geometry on complex surfaces (like foliage, glass or railings). TFTS 3D delivers significantly higher visual fidelity and realistic lighting response from any viewing perspective.'
    }
  ]

  return (
    <main className="bg-dark text-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 px-10 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/gaussian-splat/casa-hotel.jpg" 
            alt="TFTS 3D interactive site capture example"
            fill
            className="object-cover opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-transparent to-dark" />
        </div>
        
        <div className="relative z-10 max-w-[1100px]">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Spatial Intelligence</span>
          </div>
          <h1 className="text-[clamp(2.25rem,3.7vw,3.5rem)] font-extralight tracking-[-0.04em] leading-[1.02] text-white mb-5 sm:mb-6 uppercase">
            TFTS 3D <br/>
            <span className="text-accent underline underline-offset-8 decoration-accent/20">INTERACTIVE 3D MODELLING</span> <br/>
            &amp; DIGITAL SITE CAPTURE
          </h1>
          <p className="text-sm sm:text-base lg:text-[1.0625rem] font-light leading-relaxed text-white/70 mb-8 max-w-2xl">
            High-fidelity 3D models created from aerial and ground-based survey data. Explore buildings, sites and assets in an immersive interactive 3D environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 mb-20">
            <Link href="#demo" className="px-6 py-3.5 text-sm font-normal rounded-[2px] bg-accent text-white hover:bg-accent-light transition-all text-center">
              LAUNCH 3D DEMO
            </Link>
            <Link href="/brief?service=tfts-3d" className="px-6 py-3.5 text-sm font-normal rounded-[2px] border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/30 transition-all text-center">
              REQUEST 3D CAPTURE
            </Link>
          </div>
          <div className="flex items-center gap-8 text-white/30 font-ui text-[10px] tracking-[0.3em] uppercase">
             <span>Immersive viewing</span>
             <div className="w-1 h-1 rounded-full bg-accent" />
             <span>High-fidelity capture</span>
             <div className="w-1 h-1 rounded-full bg-accent" />
             <span>Stakeholder presentation</span>
             <div className="w-1 h-1 rounded-full bg-accent" />
             <span>Digital twin records</span>
          </div>
        </div>
      </section>

      {/* 2. Interactive Demo Section */}
      <section id="demo" className="py-32 px-10 md:px-20 bg-mid">
         <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-24">
               <div className="svc-tag mb-8 inline-flex"><SectionTag number="01" text="Interactive 3D" /></div>
               <h2 className="font-display text-5xl md:text-7xl text-white mb-6 uppercase tracking-tighter leading-none">
                 EXPLORE <br/><span className="text-accent underline underline-offset-[10px] decoration-accent/30">TFTS 3D IN ACTION</span>
               </h2>
               <p className="font-body text-white/40 max-w-2xl mx-auto uppercase tracking-widest text-sm leading-relaxed mt-10">
                  Interact with a representative TFTS 3D digital site capture. Drag to orbit, scroll to zoom, and right-click drag to pan through the full spatial environment.
               </p>
            </div>

            <div className="max-w-6xl mx-auto">
               <GaussianSplatViewer
                   splatSrc="/splats/site.ksplat"
                   posterSrc="/images/gaussian-splat/casa-hotel.jpg"
                   title="TFTS 3D — Live Spatial Site Survey"
                   description="Interactive 3D reconstruction of a commercial development site — 540,274 spatial primitives captured by TFTS Drone."
                   splatCount={540274}
                   caption="Interactive TFTS 3D model captured by TFTS Drone. Powered by advanced TFTS 3D modelling and photogrammetric capture technology. Best experienced on a desktop device with WebGL 2 support."
                   ctaLabel="Request TFTS 3D Capture"
                   ctaHref="/brief?service=tfts-3d"
                />
            </div>
         </div>
      </section>

      {/* 3. Plain English Explanation */}
      <section className="py-32 px-10 md:px-20 bg-dark border-y border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="svc-tag mb-8"><SectionTag number="02" text="Capability" /></div>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-10 uppercase leading-none tracking-tighter">
              WHAT IS <br/><span className="text-accent underline underline-offset-8 decoration-accent/30">TFTS 3D?</span>
            </h2>
            <p className="font-body text-xl text-white/50 leading-relaxed mb-8 uppercase tracking-widest font-light">
               TFTS 3D is an immersive digital capture service that reconstructs buildings, infrastructure and land as interactive 3D spatial models. Rather than reviewing isolated photos or video, teams can navigate and inspect every facet of a site in full spatial context.
            </p>
            <p className="font-body text-lg text-white/40 leading-relaxed mb-12">
              Powered by advanced TFTS 3D modelling and precision photogrammetric processing, TFTS 3D delivers photorealistic visual fidelity that traditional polygon meshes cannot replicate.
            </p>
          </div>
          <div className="bg-mid border border-white/5 p-12 backdrop-blur-sm">
            <h3 className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent mb-10">Commercial Value Drivers:</h3>
            <ul className="space-y-6">
              {[
                "Immersive stakeholder site presentations",
                "Property and development marketing",
                "Construction progress baseline records",
                "Heritage and conservation documentation",
                "Remote asset inspection and briefing",
                "Access-restricted location scouting",
                "Planning and public consultation",
                "Digital twin visual integration"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <CheckCircle2 className="w-5 h-5 text-accent/40 group-hover:text-accent transition-colors" />
                  <span className="font-ui text-[11px] tracking-widest uppercase text-white/60 group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Commercial Use Cases */}
      <section className="py-32 px-10 md:px-20 bg-mid">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-24">
            <div className="svc-tag mb-8"><SectionTag number="03" text="Applications" /></div>
            <h2 className="font-display text-6xl text-white uppercase leading-none">WHERE TFTS 3D <br/><span className="text-accent">DELIVERS ADVANTAGE</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/5">
            {[
              { title: "Property & Development", desc: "Allow investors, buyers and planning stakeholders to explore developments through photorealistic spatial context." },
              { title: "Construction Progress", desc: "Capture project milestones as navigable 3D records for stakeholder reporting and chronological comparison." },
              { title: "Heritage & Conservation", desc: "Preserve historic architecture, estates and sensitive structures with high-fidelity visual documentation." },
              { title: "Public Consultation", desc: "Help non-technical stakeholders understand the scale, appearance and landscape integration of proposed schemes." },
              { title: "Facilities Management", desc: "Create complete visual records of complex roofs, plant areas, façades and difficult-to-access structures." },
              { title: "Insurance & Dilapidations", desc: "Establish indisputable, navigable 3D baseline records of building condition and structural context." },
              { title: "Film & Creative Scouting", desc: "Enable remote location assessment with true spatial depth and accurate lighting reproduction." },
              { title: "Estates & Infrastructure", desc: "Maintain comprehensive interactive models for asset management, masterplanning and logistics." }
            ].map((use) => (
              <div key={use.title} className="bg-dark p-12 group hover:bg-accent/[0.03] transition-all flex flex-col h-full border border-transparent hover:border-accent/20">
                <h3 className="font-display text-2xl text-white mb-6 uppercase tracking-widest group-hover:text-accent transition-colors leading-tight">{use.title}</h3>
                <p className="font-body text-[11px] text-white/30 uppercase tracking-widest leading-relaxed">
                  {use.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="py-32 px-10 md:px-20 bg-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-24 text-center">
            <div className="svc-tag mb-8 inline-flex"><SectionTag number="04" text="FAQ" /></div>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-6 uppercase tracking-tighter leading-none">
              FREQUENTLY ASKED <br/><span className="text-accent underline underline-offset-8 decoration-accent/20">QUESTIONS</span>
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-32 px-10 md:px-20 bg-mid border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="font-ui text-[11px] tracking-[0.3em] uppercase text-accent mb-6 block">Ready to Visualise Your Site?</span>
          <h2 className="font-display text-4xl md:text-6xl text-white uppercase mb-8 leading-tight">
            COMMISSION A <br/><span className="text-accent">TFTS 3D SURVEY</span>
          </h2>
          <p className="font-body text-white/50 text-base leading-relaxed mb-12">
            Speak with our aerial survey specialists to arrange high-fidelity 3D capture for your property, construction project or infrastructure asset.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/brief?service=tfts-3d" className="px-8 py-4 bg-accent text-white font-ui text-xs tracking-widest uppercase hover:bg-accent-light transition-all">
              Request 3D Capture Proposal
            </Link>
            <Link href="/contact" className="px-8 py-4 border border-white/20 text-white font-ui text-xs tracking-widest uppercase hover:bg-white/10 transition-all">
              Contact Survey Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
