// app/fleet/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheck, 
  Target, 
  Zap, 
  Search, 
  BarChart3, 
  Camera, 
  Box, 
  ArrowRight,
  Maximize,
  Thermometer,
  Layers,
  Video,
  Database,
  Cpu,
  Navigation,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'

export const metadata: Metadata = {
  title: 'Commercial Drone Fleet & Specialist Capture Capability | EntireFM Drone',
  description: 'Explore EntireFM Drone’s commercial drone capability for inspections, thermal imaging, surveying, mapping, LiDAR-supported workflows, aerial media, Gaussian Splats and digital twin-style capture.',
}

export default function FleetPage() {
  const categories = [
    {
      id: "inspection",
      title: "Inspection Platforms",
      purpose: "For roof inspections, building envelope surveys, infrastructure inspections, asset condition capture, insurance evidence and high-level visual records.",
      platforms: ["DJI Mavic 3 Enterprise", "DJI Matrice 30 / 30T", "DJI Matrice 300 / 350 RTK", "Equivalent enterprise inspection platforms"],
      copy: "Inspection platforms are selected for image quality, stability, zoom capability, safe standoff distance, obstacle awareness and suitability for commercial environments.",
      outputs: ["High-resolution inspection imagery", "Annotated defect images", "Roof and facade evidence", "Asset condition records", "Insurance support imagery", "Contractor briefing packs"],
      services: [
        { name: "Roof Inspections", href: "/services/roof-inspections" },
        { name: "Building Envelope Inspections", href: "/services/building-envelope-inspections" },
        { name: "Infrastructure Inspections", href: "/services/infrastructure-inspections" },
        { name: "Insurance & Claims", href: "/services/insurance-loss-adjuster-surveys" },
        { name: "Facilities Management Inspections", href: "/services/facilities-management-inspections" }
      ],
      icon: Search
    },
    {
      id: "thermal",
      title: "Thermal Imaging Platforms",
      purpose: "For solar inspections, building heat loss investigations, roof anomaly checks, electrical asset review and thermal evidence capture.",
      platforms: ["DJI Mavic 3 Thermal", "DJI Matrice 30T", "Zenmuse H20T", "Equivalent radiometric thermal payloads"],
      copy: "Thermal platforms are selected where temperature anomaly evidence is required. Thermal outputs should be interpreted in context and, where required, verified through further investigation.",
      outputs: ["Thermal image sets", "Solar panel hotspot evidence", "Building heat loss indicators", "Roof anomaly imagery", "Thermal inspection summaries", "Asset condition evidence"],
      services: [
        { name: "Thermal Imaging", href: "/services/thermal-imaging" },
        { name: "Solar Panel Inspections", href: "/services/solar-panel-inspections" },
        { name: "Roof Inspections", href: "/services/roof-inspections" },
        { name: "Utilities & Energy Inspections", href: "/services/utilities-energy-inspections" }
      ],
      icon: Thermometer
    },
    {
      id: "surveying",
      title: "Surveying & Mapping Platforms",
      purpose: "For orthomosaics, point clouds, photogrammetry, stockpile volumes, construction mapping, agricultural mapping and site measurement outputs.",
      platforms: ["RTK-enabled drone platforms", "DJI Mavic 3 Enterprise RTK", "DJI Matrice 300 / 350 RTK", "Equivalent survey-mapping platforms"],
      copy: "Mapping workflows can be planned with RTK, ground control and processing methods where high-accuracy or survey-supported outputs are required. Accuracy depends on the project methodology, control, site conditions and deliverable requirements.",
      outputs: ["Orthomosaic maps", "Point clouds", "3D models", "DSM / DTM", "Contours", "Stockpile volumes", "Cut and fill analysis", "CAD / GIS exports where scoped"],
      services: [
        { name: "Surveying & Mapping", href: "/services/surveying-mapping" },
        { name: "Orthomosaic Mapping", href: "/services/orthomosaic-mapping" },
        { name: "Drone Photogrammetry", href: "/services/photogrammetry" },
        { name: "Volumetric Surveys", href: "/services/volumetric-surveys" },
        { name: "Cut & Fill Analysis", href: "/services/cut-fill-analysis" },
        { name: "Stockpile Volume Surveys", href: "/services/stockpile-volume-surveys" }
      ],
      icon: BarChart3
    },
    {
      id: "lidar",
      title: "LiDAR & Specialist Survey Payloads",
      purpose: "For complex survey environments, terrain capture, vegetation, infrastructure, corridors and point-cloud-focused deliverables.",
      platforms: ["Zenmuse L1", "Zenmuse L2", "Equivalent drone LiDAR payloads", "Ground control / survey control equipment where relevant"],
      copy: "LiDAR and specialist survey payloads can be specified through specialist delivery partners where required by the project scope.",
      outputs: ["LAS / LAZ point clouds", "E57 point clouds", "Classified point clouds", "Terrain data", "Corridor data", "Vegetation-aware survey outputs", "BIM / CAD / GIS-compatible data where scoped"],
      services: [
        { name: "LiDAR Point Cloud Surveys", href: "/services/lidar-point-cloud-surveys" },
        { name: "Surveying & Mapping", href: "/services/surveying-mapping" },
        { name: "Infrastructure Inspections", href: "/services/infrastructure-inspections" },
        { name: "Rail Corridor Surveys", href: "/services/infrastructure-inspections" }
      ],
      icon: Database
    },
    {
      id: "media",
      title: "Aerial Media Platforms",
      purpose: "For commercial photography, cinematic drone video, property marketing, venue content, construction showcase films and social media assets.",
      platforms: ["DJI Mavic 3 Pro / Cine", "DJI Inspire series", "DJI Air series where appropriate", "Equivalent cinematic drone platforms"],
      copy: "Aerial media platforms are selected for image quality, motion, lens flexibility, colour performance and the required production style.",
      outputs: ["High-resolution aerial image packs", "Edited drone video", "Website hero footage", "Social media clips", "Property marketing assets", "Venue showcase films", "Construction update films"],
      services: [
        { name: "Aerial Photography & Film", href: "/services/aerial-photography-film" },
        { name: "Events & Media", href: "/services/events-media" },
        { name: "Construction Progress Photography", href: "/services/construction-progress-photography" }
      ],
      icon: Camera
    },
    {
      id: "fpv",
      title: "FPV Capture Platforms",
      purpose: "For dynamic flythroughs, indoor/outdoor visual sequences, venue showcases, factory walkthroughs, property tours and social-first content.",
      platforms: ["Custom-built FPV cinewhoops", "DJI Avata series", "High-performance FPV platforms"],
      copy: "FPV flights require careful planning around people, property, indoor constraints, risk controls, flight path and the intended visual sequence.",
      outputs: ["FPV flythrough video", "Venue walkthrough", "Factory/process flythrough", "Property showcase", "Event content", "Social-first video"],
      services: [
        { name: "FPV Drone Filming", href: "/services/fpv-drone-filming" },
        { name: "Events & Media", href: "/services/events-media" },
        { name: "Aerial Photography & Film", href: "/services/aerial-photography-film" }
      ],
      icon: Video
    },
    {
      id: "immersive",
      title: "3D & Immersive Capture Workflows",
      purpose: "For Gaussian Splats, photogrammetry, digital twin-style visual records, 360 aerial panoramas and immersive site visualisation.",
      platforms: ["High-overlap mapping drones", "360-degree capture payloads", "Gaussian Splat-optimized capture workflows"],
      copy: "Immersive outputs depend on the capture pattern, image overlap, site coverage, lighting, processing workflow and intended viewer experience. Drone capture can be combined with ground-level imagery where required.",
      outputs: ["Gaussian Splats", "Photogrammetry models", "3D meshes", "Point clouds", "360 aerial panoramas", "Flythrough videos", "Digital twin-style visual records"],
      services: [
        { name: "Gaussian Splat Capture", href: "/services/gaussian-splat-capture" },
        { name: "Drone Photogrammetry", href: "/services/photogrammetry" },
        { name: "Digital Twin Capture", href: "/services/digital-twin-capture" },
        { name: "360 Aerial Panoramas", href: "/services/360-aerial-panoramas" }
      ],
      icon: Box
    }
  ]

  return (
    <main className="bg-dark text-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/fleet_m350.png" 
            alt="Commercial drone fleet for industrial inspection and survey"
            fill
            className="object-contain opacity-30 grayscale blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark" />
        </div>
        
        <div className="container relative z-10 px-8 md:px-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-8 translate-y-4 opacity-0 animate-[fade-up_0.8s_0.2s_forwards]">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Technical Capability</span>
          </div>
          
          <h1 className="text-[clamp(2.25rem,3.7vw,3.5rem)] font-extralight tracking-[-0.04em] leading-[1.02] text-white mb-5 sm:mb-6 uppercase">
            COMMERCIAL DRONE FLEET & <br/>
            <span className="text-accent underline underline-offset-8">SPECIALIST CAPTURE</span> CAPABILITY
          </h1>

          <p className="font-body text-xl md:text-2xl font-light text-white/50 max-w-4xl mx-auto mb-12 opacity-0 animate-[fade-in_1s_1s_forwards] uppercase tracking-widest">
            EntireFM Drone specifies drone platforms, sensors and capture workflows around the required output — from roof inspection imagery and thermal evidence to mapping, photogrammetry, LiDAR-supported surveys, aerial media and immersive 3D visualisation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 opacity-0 animate-[fade-in_1s_1.2s_forwards]">
            <Link 
              href="/brief"
              className="group bg-accent text-dark px-10 py-6 font-display text-2xl tracking-widest flex items-center gap-4 hover:bg-white transition-all"
            >
              START PROJECT BRIEF <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link 
              href="/services"
              className="font-ui text-[14px] font-bold tracking-[0.4em] uppercase text-white/40 hover:text-white transition-colors"
            >
              View Drone Services
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 text-white/20 font-ui text-[10px] tracking-[0.3em] uppercase">
             <span>Inspection</span>
             <span>Surveying</span>
             <span>Thermal</span>
             <span>Media</span>
             <span>Mapping</span>
             <span>3D Capture</span>
          </div>
        </div>
      </section>

      {/* 2. Capability-led Intro */}
      <section className="py-32 px-8 md:px-20 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="svc-tag mb-8"><SectionTag number="01" text="Mission Planning" /></div>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-10 uppercase leading-none">
              THE RIGHT PLATFORM FOR THE <br/><span className="text-accent underline underline-offset-8 decoration-accent/30">REQUIRED OUTPUT</span>
            </h2>
            <p className="font-body text-xl text-white/50 leading-relaxed mb-8 uppercase tracking-widest font-light italic">
              &quot;EntireFM Drone selects the equipment and workflow around the deliverable, site constraints, risk profile and intended use of the output.&quot;
            </p>
            <p className="font-body text-lg text-white/40 leading-relaxed">
              Different drone projects require different capture workflows. A roof inspection, solar thermal survey, construction progress flight, stockpile volume survey, FPV flythrough and Gaussian Splat capture do not need the same platform or sensor setup.
            </p>
          </div>
          <div className="p-12 border border-white/10 bg-dark relative group">
             <AlertCircle className="w-12 h-12 text-accent/20 mb-8" />
             <p className="font-display text-2xl text-white uppercase tracking-widest mb-6">Operational Setup</p>
             <p className="font-body text-white/60 leading-relaxed uppercase tracking-widest text-sm mb-8">
               Available through our operational fleet and specialist delivery partners, EntireFM Drone works with an operational drone fleet and specialist delivery partners to specify the right platform and payload for each project.
             </p>
             <p className="font-ui text-[11px] tracking-[0.2em] uppercase text-accent/60 italic">
               Specialist platforms and payloads can be specified according to project requirements.
             </p>
          </div>
        </div>
      </section>

      {/* 3. Fleet Categories */}
      <section className="py-32 px-8 md:px-20">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-24">
            <div className="svc-tag mb-8"><SectionTag number="02" text="Platform Tiers" /></div>
            <h2 className="font-display text-6xl text-white uppercase tracking-tighter">OPERATIONAL <span className="text-accent">CAPABILITIES</span></h2>
          </div>

          <div className="space-y-32">
            {categories.map((cat, i) => (
              <div key={cat.id} id={cat.id} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-t border-white/5 pt-20 group">
                <div className="lg:col-span-5">
                   <cat.icon className="w-16 h-16 text-accent/40 mb-10 group-hover:text-accent transition-colors" />
                   <h3 className="font-display text-5xl text-white mb-8 uppercase tracking-widest leading-none">{cat.title}</h3>
                   <p className="font-body text-xl text-white/50 leading-relaxed uppercase tracking-widest font-light mb-10">
                     {cat.purpose}
                   </p>
                   <div className="p-8 border border-white/10 bg-white/[0.02]">
                      <h4 className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-6">Relevant Platforms:</h4>
                      <ul className="space-y-3">
                        {cat.platforms.map((p, idx) => (
                          <li key={idx} className="flex items-center gap-3 font-ui text-[11px] tracking-widest uppercase text-white/70">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                            {p}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>

                <div className="lg:col-span-7">
                   <div className="bg-mid/50 border border-white/5 p-12 mb-12">
                      <p className="font-body text-lg text-white/70 leading-relaxed mb-10">
                        {cat.copy}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div>
                            <h4 className="font-ui text-[10px] tracking-[0.4em] uppercase text-white/30 mb-6">Outputs Supported:</h4>
                            <ul className="space-y-4">
                               {cat.outputs.map((out, idx) => (
                                 <li key={idx} className="flex items-start gap-3 text-white/40 font-ui text-[10px] tracking-widest uppercase leading-tight">
                                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                                    {out}
                                 </li>
                               ))}
                            </ul>
                         </div>
                         <div>
                            <h4 className="font-ui text-[10px] tracking-[0.4em] uppercase text-white/30 mb-6">Related Services:</h4>
                            <div className="flex flex-wrap gap-2">
                               {cat.services.map((svc, idx) => (
                                 <Link 
                                   key={idx} 
                                   href={svc.href}
                                   className="px-4 py-2 border border-white/10 font-ui text-[10px] tracking-widest uppercase text-white/40 hover:border-accent hover:text-accent transition-colors"
                                 >
                                   {svc.name}
                                 </Link>
                               ))}
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Selection Process Section */}
      <section className="py-32 px-8 md:px-20 bg-mid border-y border-white/5">
        <div className="container mx-auto">
          <div className="svc-tag mb-12"><SectionTag number="03" text="Methodology" /></div>
          <h2 className="font-display text-6xl text-white mb-20 uppercase leading-none text-center">HOW WE SELECT THE <br/><span className="text-accent underline underline-offset-8 decoration-accent/20">RIGHT DRONE FOR THE JOB</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/5 border border-white/5">
            {[
              { step: '01', title: 'Required Output', desc: 'Define whether the client needs inspection evidence, survey data, thermal imagery, video, mapping or immersive 3D capture.' },
              { step: '02', title: 'Site Constraints', desc: 'Review the site, airspace, access, hazards, people, buildings, weather and operating environment.' },
              { step: '03', title: 'Sensor Requirements', desc: 'Determine whether the project needs RGB imagery, zoom, thermal, RTK, LiDAR, FPV or high-overlap image capture.' },
              { step: '04', title: 'Accuracy & Reporting', desc: 'Identify whether RTK, ground control, accuracy checks or specialist processing are required for survey outputs.' },
              { step: '05', title: 'Delivery Format', desc: 'Select the capture workflow based on the final deliverable — report, image pack, map, model, video or point cloud.' }
            ].map((p, i) => (
              <div key={i} className="p-10 bg-dark relative group hover:bg-accent/5 transition-all">
                <span className="font-display text-5xl text-accent/10 mb-8 block group-hover:text-accent/30 transition-colors">{p.step}</span>
                <h3 className="font-display text-xl text-white mb-6 tracking-widest uppercase leading-tight">{p.title}</h3>
                <p className="font-body text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Output-First Section */}
      <section className="py-32 px-8 md:px-20 bg-dark">
        <div className="max-w-[1200px] mx-auto text-center">
           <div className="svc-tag mb-12 inline-flex"><SectionTag number="04" text="Principle" /></div>
           <h2 className="font-display text-6xl text-white uppercase mb-12 tracking-tighter">OUTPUT-FIRST <br/><span className="text-accent">DRONE OPERATIONS</span></h2>
           <p className="font-body text-xl text-white/50 leading-relaxed uppercase tracking-widest font-light mb-20 max-w-3xl mx-auto">
             EntireFM Drone does not specify equipment simply because it looks impressive on a fleet page. The correct drone is the one that safely captures the required data and produces the deliverable the client can actually use.
           </p>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Inspection evidence", href: "/services/drone-inspection" },
                { name: "Thermal anomaly data", href: "/services/thermal-imaging" },
                { name: "Survey and mapping", href: "/services/surveying-mapping" },
                { name: "Construction progress", href: "/services/construction-monitoring" },
                { name: "Commercial media assets", href: "/services/aerial-photography-film" },
                { name: "Immersive 3D visualization", href: "/services/gaussian-splat-capture" },
                { name: "Insurance evidence packs", href: "/services/insurance-loss-adjuster-surveys" },
                { name: "Asset condition records", href: "/services/building-envelope-inspections" }
              ].map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="p-8 border border-white/5 bg-white/[0.01] hover:border-accent hover:bg-accent/5 transition-all text-center group"
                >
                  <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/40 group-hover:text-accent transition-colors">{item.name}</p>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* 6. Payload and Sensor Glossary */}
      <section className="py-32 px-8 md:px-20 bg-mid">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-20">
            <div className="svc-tag mb-8"><SectionTag number="05" text="Technology" /></div>
            <h2 className="font-display text-6xl text-white uppercase leading-none">DRONE SENSORS AND <br/><span className="text-accent">PAYLOADS EXPLAINED</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/5">
            {[
              { title: "RGB Camera", desc: "Standard high-resolution visual imaging for inspection, photography, video, mapping and documentation." },
              { title: "Zoom Camera", desc: "Useful for detailed inspection from safer standoff distances where close visual capture is needed." },
              { title: "Thermal Camera", desc: "Captures temperature differences that may indicate heat loss, solar panel anomalies, moisture concerns or asset condition issues." },
              { title: "RTK Positioning", desc: "Supports higher-accuracy mapping workflows by improving positioning data during capture." },
              { title: "LiDAR", desc: "Uses laser scanning to create point clouds, often useful for terrain, vegetation, corridors and geometry-focused survey work." },
              { title: "FPV Camera", desc: "Used for dynamic close-range flythrough filming and immersive motion-based video content." },
              { title: "360 Capture", desc: "Creates panoramic views for fixed-point interactive viewing and site context." },
              { title: "High-Overlap Imagery", desc: "Used for photogrammetry, Gaussian Splats, 3D reconstruction and mapping workflows." }
            ].map((p) => (
              <div key={p.title} className="bg-dark p-12 group hover:bg-accent/5 transition-all border border-transparent hover:border-accent/20">
                <h3 className="font-display text-2xl text-white mb-6 uppercase tracking-widest group-hover:text-accent transition-colors leading-tight">{p.title}</h3>
                <p className="font-body text-[10px] text-white/30 uppercase tracking-tighter leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA Section */}
      <section className="py-32 px-8 md:px-20 bg-accent text-dark">
        <div className="max-w-[1200px] mx-auto text-center">
          <Navigation className="w-16 h-16 mx-auto mb-10 text-dark/80" />
          <h2 className="font-display text-6xl md:text-8xl mb-10 uppercase tracking-tighter leading-[0.85]">
            NOT SURE WHICH DRONE <br/>OR SENSOR YOUR <br/><span className="underline decoration-dark/30 underline-offset-[10px]">PROJECT NEEDS?</span>
          </h2>
          <p className="font-body text-xl md:text-2xl text-dark/70 max-w-3xl mx-auto mb-16 uppercase tracking-widest font-medium leading-relaxed">
            Tell us the site, the output and the decision you need to make. EntireFM Drone will recommend the right capture workflow, platform and deliverable route.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link 
              href="/brief"
              className="group flex items-center gap-6 bg-dark text-white px-12 py-8 font-display text-4xl tracking-[0.1em] transition-all hover:bg-white hover:text-dark w-full sm:w-auto shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
            >
              START PROJECT BRIEF <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition-transform duration-500" />
            </Link>
            <Link 
              href="/bundles"
              className="font-ui text-[14px] font-bold tracking-[0.5em] uppercase text-dark/60 hover:text-dark transition-colors"
            >
              View Commercial Packages
            </Link>
          </div>
          
          <div className="mt-24 pt-12 border-t border-dark/10">
             <div className="flex items-center justify-center gap-4 mb-6">
                <ShieldCheck className="w-6 h-6 text-dark/60" />
                <h4 className="font-ui text-[12px] tracking-[0.4em] uppercase font-bold">Operational Integrity</h4>
             </div>
             <p className="font-body text-sm text-dark/60 uppercase tracking-widest max-w-3xl mx-auto italic">
               EntireFM Drone works with an operational drone fleet and specialist delivery partners to specify the right platform and payload for each project. Some advanced sensors, LiDAR systems or specialist platforms may be deployed through approved partners depending on the project requirement.
             </p>
          </div>
        </div>
      </section>
    </main>
  )
}
