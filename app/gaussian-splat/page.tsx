// app/gaussian-splat/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowUpRight, 
  CheckCircle2, 
  HelpCircle, 
  Zap, 
  Target, 
  Layers, 
  Eye, 
  Users,
  Search,
  Building2,
  Box,
  ChevronRight,
  ShieldCheck,
  Activity,
  FileText,
  Database,
  ArrowRight,
  MousePointer2,
  AlertCircle
} from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import FAQAccordion from '@/components/ui/FAQAccordion'
import GaussianSplatViewer from '@/components/interactive/GaussianSplatViewer'

export const metadata: Metadata = {
  title: 'Gaussian Splat Drone Capture UK | Interactive 3D Site Visualisation | EntireFM Drone',
  description: 'Explore Gaussian Splat drone capture from EntireFM Drone, including interactive 3D visualisation, photorealistic site records, property presentation, construction progress, heritage documentation and digital twin-style outputs.',
}

export default function GaussianSplatShowcasePage() {
  const faqs = [
    {
      question: 'What is a Gaussian Splat?',
      answer: 'A Gaussian Splat is a photorealistic 3D reconstruction created from overlapping images. It allows users to explore a captured environment from different viewpoints instead of viewing it only as flat photos or video.'
    },
    {
      question: 'Can a Gaussian Splat be made from drone footage?',
      answer: 'Gaussian Splats are usually created from carefully captured overlapping imagery. Drone imagery can be used, especially when combined with ground-level capture for better coverage and visual continuity.'
    },
    {
      question: 'Is a Gaussian Splat survey-grade?',
      answer: 'Not by default. Gaussian Splats are primarily visualisation assets. For measurement-critical work, capture should be combined with photogrammetry, LiDAR, RTK, ground control or survey-controlled workflows.'
    },
    {
      question: 'What is Gaussian Splat capture best used for?',
      answer: 'It is best for immersive visualisation, stakeholder engagement, site records, property marketing, construction progress, heritage documentation, public consultation and location scouting.'
    },
    {
      question: 'Can the Gaussian Splat be embedded on a website?',
      answer: 'Yes, where technically suitable. A web-viewable model can be prepared using an appropriate viewer workflow. For performance reasons, interactive models should usually load on demand rather than automatically.'
    },
    {
      question: 'How is it different from photogrammetry?',
      answer: 'Photogrammetry is often used for measurable 3D models, meshes, orthomosaics and survey-related outputs. Gaussian Splats usually provide a more photorealistic viewing experience but are not automatically measurement-ready.'
    }
  ]

  return (
    <main className="bg-dark text-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 px-10 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/gaussian-splat/casa-hotel.jpg" 
            alt="Gaussian Splat drone capture example for immersive site visualisation"
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
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">3D Visual Intelligence</span>
          </div>
          <h1 className="font-display text-hero leading-[0.9] mb-12 tracking-wider uppercase">
            GAUSSIAN SPLAT <br/>
            <span className="text-accent underline underline-offset-8 decoration-accent/20">DRONE CAPTURE</span> <br/>
            FOR IMMERSIVE <br/>SITE VISUALISATION
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/60 leading-relaxed mb-16 max-w-[850px] uppercase tracking-widest font-light">
            Photorealistic 3D visualisation created from drone and ground-level imagery — helping clients explore, present and preserve real-world sites beyond flat photos or video.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 mb-20">
            <Link href="#demo" className="bg-accent text-dark font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white transition-all text-center">
              LAUNCH INTERACTIVE DEMO
            </Link>
            <Link href="/services/gaussian-splat-capture" className="border border-white/20 text-white font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white hover:text-dark transition-all text-center">
              REQUEST SPLAT CAPTURE
            </Link>
          </div>
          <div className="flex items-center gap-8 text-white/30 font-ui text-[10px] tracking-[0.3em] uppercase">
             <span>Immersive viewing</span>
             <div className="w-1 h-1 rounded-full bg-accent" />
             <span>Site visualisation</span>
             <div className="w-1 h-1 rounded-full bg-accent" />
             <span>Stakeholder presentation</span>
             <div className="w-1 h-1 rounded-full bg-accent" />
             <span>Digital twin-style records</span>
          </div>
        </div>
      </section>

      {/* 2. Interactive Demo Section */}
      <section id="demo" className="py-32 px-10 md:px-20 bg-mid">
         <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-24">
               <div className="svc-tag mb-8 inline-flex"><SectionTag number="01" text="Showcase" /></div>
               <h2 className="font-display text-5xl md:text-7xl text-white mb-6 uppercase tracking-tighter leading-none">INTERACTIVE <br/><span className="text-accent underline underline-offset-[10px] decoration-accent/30">GAUSSIAN SPLAT DEMO</span></h2>
               <p className="font-body text-white/40 max-w-2xl mx-auto uppercase tracking-widest text-sm leading-relaxed mt-10">
                  Explore a representative Gaussian Splat capture to see how photorealistic 3D visualisation can help stakeholders understand a site from multiple viewpoints.
               </p>
            </div>

            <div className="max-w-6xl mx-auto">
               <GaussianSplatViewer 
                  title="EntireFM Drone Command Centre Demo"
                  description="A photorealistic 3D reconstruction of a commercial development site."
                  viewerSrc="/splats/demo/index.html"
                  posterSrc="/images/gaussian-splat/casa-hotel.jpg"
                  viewerAvailable={false} // Placeholder as requested
                  fallbackVideoSrc="/videos/gaussian-flythrough.mp4"
                  caption="This demo is provided as a visualisation example. Final output quality depends on site conditions, image coverage, lighting, capture workflow and processing."
               />
            </div>
         </div>
      </section>

      {/* 3. Plain English Explanation */}
      <section className="py-32 px-10 md:px-20 bg-dark border-y border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="svc-tag mb-8"><SectionTag number="02" text="Clarification" /></div>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-10 uppercase leading-none tracking-tighter">
              WHAT IS A <br/><span className="text-accent underline underline-offset-8 decoration-accent/30">GAUSSIAN SPLAT?</span>
            </h2>
            <p className="font-body text-xl text-white/50 leading-relaxed mb-8 uppercase tracking-widest font-light">
               A Gaussian Splat is a photorealistic 3D scene reconstructed from overlapping images. Instead of viewing a site as flat photographs or a fixed video, users can explore a captured environment from different angles and viewpoints.
            </p>
            <p className="font-body text-lg text-white/40 leading-relaxed mb-12">
              For commercial clients, the value is not the technology itself. The value is the ability to preserve, present and communicate a real-world location as an immersive visual asset.
            </p>
          </div>
          <div className="bg-mid border border-white/5 p-12 backdrop-blur-sm">
            <h3 className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent mb-10">Commercial Value Drivers:</h3>
            <ul className="space-y-6">
              {[
                "Immersive site visualisation",
                "Property and development marketing",
                "Construction progress records",
                "Heritage and conservation documentation",
                "Stakeholder briefings",
                "Film and location scouting",
                "Public consultation",
                "Digital twin-style visual records"
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
            <div className="svc-tag mb-8"><SectionTag number="03" text="Utility" /></div>
            <h2 className="font-display text-6xl text-white uppercase leading-none">WHERE GAUSSIAN SPLATS <br/><span className="text-accent">ADD COMMERCIAL VALUE</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/5">
            {[
              { title: "Property & Development", desc: "Help investors, buyers, tenants or planning stakeholders understand a site through immersive visual context." },
              { title: "Construction Progress", desc: "Capture project stages and site conditions as visual records for stakeholder updates and future comparison." },
              { title: "Heritage & Conservation", desc: "Preserve historic buildings, estates and sensitive environments as photorealistic visual records." },
              { title: "Public Consultation", desc: "Help non-technical stakeholders understand the layout, scale and visual context of a real-world location." },
              { title: "Facilities & Asset Management", desc: "Create visual records of buildings, roof zones, plant areas, estates and access-restricted assets." },
              { title: "Insurance & Claims", desc: "Support visual records of site condition, access constraints or damage context where immersive understanding is useful." },
              { title: "Film & Location Scouting", desc: "Allow creative teams to assess sites remotely using immersive visual context." },
              { title: "Venues & Tourism", desc: "Create engaging visual experiences for venues, estates, destinations and visitor attractions." }
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

      {/* 5. Comparison Section */}
      <section id="benchmarking" className="py-32 px-10 md:px-20 bg-dark border-y border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-24 text-center">
            <div className="svc-tag mb-8 inline-flex"><SectionTag number="04" text="Benchmarking" /></div>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-6 uppercase tracking-tighter leading-none">GAUSSIAN SPLAT VS <br/><span className="text-accent underline underline-offset-8 decoration-accent/20">TRADITIONAL 3D OUTPUTS</span></h2>
          </div>

          <div className="overflow-x-auto border border-white/5 bg-mid/30">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-left bg-white/[0.02]">
                  <th className="py-10 px-8 font-ui text-[11px] tracking-[0.3em] uppercase text-accent">Output Type</th>
                  <th className="py-10 px-8 font-ui text-[11px] tracking-[0.3em] uppercase text-accent">Best For</th>
                  <th className="py-10 px-8 font-ui text-[11px] tracking-[0.3em] uppercase text-accent">Strengths</th>
                  <th className="py-10 px-8 font-ui text-[11px] tracking-[0.3em] uppercase text-accent">Limitations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { 
                    type: "Gaussian Splat", 
                    for: "Photorealistic visualisation and immersive walkthroughs", 
                    strengths: "Realistic visual feel, stakeholder engagement, site presentation", 
                    limitations: "Not survey-grade by default; measurement-critical work needs additional workflow" 
                  },
                  { 
                    type: "Photogrammetry", 
                    for: "3D models, meshes, orthomosaics and measurable outputs", 
                    strengths: "Can support mapping, modelling and measurement workflows", 
                    limitations: "Accuracy depends on capture/control workflow; may look less photorealistic" 
                  },
                  { 
                    type: "LiDAR", 
                    for: "Point clouds, terrain, vegetation, complex geometry and survey data", 
                    strengths: "Strong geometry and point-cloud outputs", 
                    limitations: "Less visually photorealistic; specialist hardware/processing required" 
                  },
                  { 
                    type: "360 Panorama", 
                    for: "Fixed-point immersive viewing", 
                    strengths: "Lightweight, easy to embed, useful for context", 
                    limitations: "Limited movement; not full 3D reconstruction" 
                  },
                  { 
                    type: "Drone Video", 
                    for: "Guided storytelling and marketing", 
                    strengths: "Shareable, simple, strong emotional impact", 
                    limitations: "Viewer cannot freely explore the scene" 
                  }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="py-10 px-8 font-display text-2xl text-white group-hover:text-accent transition-colors">{row.type}</td>
                    <td className="py-10 px-8 font-body text-[12px] text-white/50 uppercase tracking-widest leading-relaxed">{row.for}</td>
                    <td className="py-10 px-8 font-body text-[12px] text-white/70 uppercase tracking-tighter leading-relaxed">{row.strengths}</td>
                    <td className="py-10 px-8 font-ui text-[10px] tracking-wider text-white/30 uppercase">{row.limitations}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Capture Workflow */}
      <section className="py-32 px-10 md:px-20 bg-dark border-b border-white/5 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="svc-tag mb-12 text-center"><SectionTag number="05" text="Execution" /></div>
          <h2 className="font-display text-5xl md:text-7xl text-white mb-20 uppercase leading-none text-center">HOW GAUSSIAN SPLAT <br/><span className="text-accent">CAPTURE WORKS</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/5 border border-white/5 max-w-7xl mx-auto">
            {[
              { step: '01', title: 'Define Purpose', desc: 'We confirm whether the output is for property, construction, heritage, consultation, insurance context, media or asset records.' },
              { step: '02', title: 'Plan Route', desc: 'Drone and ground-level image capture is planned around coverage, overlap, lighting, access and visual continuity.' },
              { step: '03', title: 'Capture Images', desc: 'The site is captured from multiple aerial and ground-level viewpoints to provide high visual density.' },
              { step: '04', title: 'Process Model', desc: 'The Gaussian Splat is processed, reviewed and cleaned where required to reduce artefacts or visual noise.' },
              { step: '05', title: 'Deliver Outputs', desc: 'Outputs can include screenshots, flythrough video, web-ready viewer or source files depending on scope.' }
            ].map((p, i) => (
              <div key={i} className="p-10 bg-mid relative group hover:bg-accent/[0.03] transition-all flex flex-col h-full">
                <span className="font-display text-6xl text-accent/10 mb-8 block group-hover:text-accent/30 transition-colors">{p.step}</span>
                <h3 className="font-display text-xl text-white mb-6 tracking-widest uppercase leading-tight flex-1">{p.title}</h3>
                <p className="font-body text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Deliverables Section */}
      <section className="py-32 px-10 md:px-20 bg-mid">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="svc-tag mb-8 inline-flex"><SectionTag number="06" text="Outputs" /></div>
          <h2 className="font-display text-5xl text-white uppercase tracking-tighter mb-16">Gaussian Splat Deliverables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/5 mb-16">
            {[
               { name: "Gaussian Splat Visualisation", desc: "The core immersive scene." },
               { name: "Screenshot Set", desc: "Extracted high-res perspectives." },
               { name: "Flythrough Video", desc: "Guided cinematic site tours." },
               { name: "Web-Ready Viewer", desc: "Browser-based interactive format." },
               { name: "Digital Twin-Style Record", desc: "Visual spatial documentation." },
               { name: "360 Aerial Panorama", desc: "Complementary contextual views." }
            ].map((item, i) => (
              <Link 
                key={i} 
                href="/sample-deliverables"
                className="bg-dark p-12 group hover:bg-accent/5 transition-all text-center flex flex-col items-center justify-center min-h-[220px]"
              >
                <FileText className="w-8 h-8 text-accent/30 group-hover:text-accent mb-6 transition-colors" />
                <h4 className="font-display text-lg text-white mb-4 uppercase tracking-widest group-hover:text-accent transition-colors">{item.name}</h4>
                <p className="font-body text-[9px] text-white/30 uppercase tracking-widest leading-relaxed">
                   {item.desc}
                </p>
              </Link>
            ))}
          </div>
          <Link href="/sample-deliverables" className="inline-flex items-center gap-6 font-ui text-[12px] tracking-[0.4em] uppercase text-accent hover:text-white transition-all">
            View Gaussian Splat Deliverables <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* 8. Accuracy & Limitations */}
      <section className="py-32 px-10 md:px-20 bg-dark border-y border-white/5">
        <div className="max-w-[1000px] mx-auto text-center">
          <div className="svc-tag mb-12 inline-flex"><SectionTag number="07" text="Disclaimer" /></div>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-10 uppercase leading-tight">VISUALISATION FIRST, <br/><span className="text-accent underline underline-offset-8">MEASUREMENT SECOND</span></h2>
          <div className="bg-mid/30 border border-white/5 p-12 mb-12">
            <p className="font-body text-xl text-white/60 leading-relaxed uppercase tracking-widest font-light mb-8">
              Gaussian Splats are powerful visualisation assets, but they should not be treated as survey-grade by default. They are ideal for photorealistic walkthroughs, stakeholder engagement, visual site records and immersive presentations.
            </p>
            <p className="font-body text-lg text-white/40 leading-relaxed uppercase tracking-widest">
              For measurement-critical projects, Gaussian Splat capture should be paired with appropriate photogrammetry, LiDAR, RTK, ground control or survey-controlled workflows where required.
            </p>
          </div>
          <div className="p-8 border-l-4 border-accent bg-accent/5 inline-block text-left max-w-3xl">
             <p className="font-display text-2xl text-accent uppercase tracking-widest italic mb-2">Technical Guidance:</p>
             <p className="font-body text-white/70 leading-relaxed uppercase tracking-widest text-sm font-medium">
                Use Gaussian Splat when you need people to experience the space. Use survey-controlled photogrammetry or LiDAR when you need verified measurements. Use both when the project needs visual impact and technical data.
             </p>
          </div>
        </div>
      </section>

      {/* 9. Bundle Recommendation */}
      <section className="py-24 bg-accent text-dark">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20 text-center">
          <div className="inline-flex mb-8"><SectionTag number="08" text="Recommendation" /></div>
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-tight mb-8 tracking-tighter">
            IMMERSIVE <span className="underline decoration-dark/20 underline-offset-8">DIGITAL CAPTURE PACK</span>
          </h2>
          <p className="font-body text-xl md:text-2xl uppercase tracking-widest font-medium opacity-80 max-w-4xl mx-auto mb-16 leading-relaxed">
            For clients who need Gaussian Splat capture alongside drone imagery, 360 panoramas, photogrammetry, flythrough video or digital twin-style visual records, the Immersive Digital Capture Pack provides a structured route from capture to usable visual deliverables.
          </p>
          <Link 
            href="/bundles#immersive-digital"
            className="inline-flex items-center gap-6 bg-dark text-white px-16 py-8 font-display text-3xl tracking-widest hover:bg-white hover:text-dark transition-all"
          >
            VIEW IMMERSIVE DIGITAL CAPTURE PACK <ArrowUpRight className="w-8 h-8" />
          </Link>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <section className="py-32 px-10 md:px-20 bg-dark border-y border-white/5">
        <div className="max-w-4xl mx-auto">
           <div className="text-center mb-16">
              <div className="svc-tag mb-8 inline-flex"><SectionTag number="09" text="Support" /></div>
              <h2 className="font-display text-6xl text-white uppercase tracking-tighter">GAUSSIAN SPLAT <span className="text-accent underline underline-offset-8 decoration-accent/20">FAQ</span></h2>
           </div>
           <FAQAccordion faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />
        </div>
      </section>

      {/* 11. Final CTA Section */}
      <section className="py-48 px-10 md:px-20 bg-dark text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Box className="w-16 h-16 mx-auto mb-12 text-accent/80" />
          <h2 className="font-display text-6xl md:text-8xl text-white mb-10 uppercase tracking-tighter leading-[0.85]">
            NEED TO CAPTURE A SITE <br/>PEOPLE CAN <span className="text-accent underline decoration-accent/30 underline-offset-[10px]">EXPLORE</span>, <br/>NOT JUST VIEW?
          </h2>
          <p className="font-body text-xl md:text-2xl text-white/50 max-w-3xl mx-auto mb-20 uppercase tracking-widest font-light leading-relaxed">
            Gaussian Splat drone capture gives clients a more immersive way to present, preserve and understand real-world spaces. Tell us what you need to visualise, and we’ll recommend the right capture workflow.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Link 
              href="/brief?service=gaussian-splat"
              className="group flex items-center gap-8 bg-accent text-dark px-16 py-10 font-display text-4xl tracking-[0.1em] transition-all hover:bg-white w-full md:w-auto"
            >
              START PROJECT BRIEF <ArrowRight className="w-12 h-12 group-hover:translate-x-4 transition-transform duration-500" />
            </Link>
            <Link 
              href="/project-brief-assistant"
              className="font-ui text-[14px] font-bold tracking-[0.5em] uppercase text-white/40 hover:text-white transition-colors border border-white/10 px-16 py-10"
            >
              Project Brief Assistant
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
