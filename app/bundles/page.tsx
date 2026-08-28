// app/bundles/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Building2, 
  Hammer, 
  Search, 
  BarChart3, 
  Camera, 
  ShieldAlert, 
  Zap, 
  Box, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import FAQAccordion from '@/components/ui/FAQAccordion'

export const metadata: Metadata = {
  title: 'Commercial Drone Service Packages | Drone Surveys, Inspections & 3D Capture | EntireFM Drone',
  description: 'EntireFM Drone provides commercial drone service packages for roof inspections, construction monitoring, mapping, thermal surveys, aerial media, Gaussian Splats and digital twin capture.',
}

const BUNDLES = [
  {
    slug: "roof-intelligence-pack",
    title: "Roof Intelligence Pack",
    icon: Search,
    positioning: "A safer, faster way to inspect commercial roofs, gutters, drainage, high-level details and hard-to-access building elements.",
    bestFor: ["Facilities managers", "Landlords", "Managing agents", "Commercial property owners", "Schools and academies", "Industrial estates", "Insurance and maintenance teams"],
    includes: ["Drone roof inspection", "High-resolution aerial imagery", "Close visual inspection of roof coverings, gutters, drainage, flashing, plant areas and high-level defects", "Optional thermal imaging", "Optional storm damage capture", "Optional before-and-after repair record"],
    deliverables: ["Roof condition image set", "Annotated defect images", "PDF inspection summary", "Maintenance priority notes", "Contractor briefing pack", "Insurance evidence pack where required"],
    cta: "Book a Roof Inspection",
    links: [
      { name: "Drone Roof Inspections", href: "/services/roof-inspections" },
      { name: "Thermal Drone Surveys", href: "/services/thermal-imaging" },
      { name: "Commercial Drone Inspections", href: "/services/drone-inspection" },
      { name: "Facilities Management Drone Services", href: "/services/facilities-management-inspections" }
    ]
  },
  {
    slug: "building-envelope-asset-condition-pack",
    title: "Building Envelope & Asset Condition Pack",
    icon: Building2,
    positioning: "External condition capture for facades, cladding, parapets, chimneys, glazing, masonry, high-level plant and wider property assets.",
    bestFor: ["Surveyors", "Managing agents", "Property owners", "FM providers", "Industrial site operators", "Housing providers", "Public sector estates"],
    includes: ["Facade and elevation drone inspection", "High-level masonry and cladding imagery", "Chimney, parapet and roofline capture", "External plant and access-restricted area photography", "Defect-focused image capture", "Optional annotated reporting"],
    deliverables: ["External condition evidence pack", "Annotated elevation images", "Defect image schedule", "Maintenance scoping pack", "Pre-acquisition or dilapidation support pack", "Asset condition archive"],
    cta: "Request an Asset Survey",
    links: [
      { name: "Building Envelope Drone Inspections", href: "/services/building-envelope-inspections" },
      { name: "Facade Drone Inspections", href: "/services/facade-inspections" },
      { name: "Commercial Property Drone Surveys", href: "/services/commercial-property-drone-surveys" },
      { name: "Drone Inspection Services", href: "/services/drone-inspection" }
    ]
  },
  {
    slug: "construction-progress-pack",
    title: "Construction Progress Pack",
    icon: Hammer,
    positioning: "Regular aerial capture for contractors, developers and stakeholders who need clear visual evidence of project progress.",
    bestFor: ["Main contractors", "Developers", "Project managers", "Quantity surveyors", "Investors", "Architects", "Client-side construction teams"],
    includes: ["Weekly, fortnightly or monthly drone visits", "Consistent aerial viewpoints", "Site overview imagery", "Progress photography", "Optional edited update video", "Optional time-lapse style comparison", "Optional site logistics mapping"],
    deliverables: ["Progress image archive", "Monthly stakeholder update pack", "Before-and-after comparisons", "Construction progress video", "Investor update content", "Site logistics overview", "Dispute or variation evidence where required"],
    cta: "Plan Construction Monitoring",
    links: [
      { name: "Construction Drone Monitoring", href: "/services/construction-monitoring" },
      { name: "Drone Progress Photography", href: "/services/construction-progress-photography" },
      { name: "Drone Time-Lapse Monitoring", href: "/services/drone-time-lapse-monitoring" },
      { name: "Earthworks Cut & Fill Analysis", href: "/services/cut-fill-analysis" }
    ]
  },
  {
    slug: "survey-data-pack",
    title: "Survey Data Pack",
    icon: BarChart3,
    positioning: "Drone-based mapping and measurement outputs for land, sites, stockpiles, earthworks and development projects.",
    bestFor: ["Surveyors", "Developers", "Landowners", "Civil engineering contractors", "Quarry operators", "Earthworks contractors", "Planning consultants"],
    includes: ["Drone mapping flight", "High-overlap image capture", "Ground-control workflow where required", "Photogrammetry processing", "Optional volume calculations", "Optional cut and fill analysis", "Optional CAD/GIS export support"],
    deliverables: ["Orthomosaic map", "3D mesh", "Point cloud", "DSM/DTM where required", "Contour data where required", "Stockpile volume report", "Cut/fill calculation", "CAD/GIS-ready outputs where specified"],
    cta: "Discuss Survey Outputs",
    links: [
      { name: "Drone Surveying and Mapping", href: "/services/surveying-mapping" },
      { name: "Drone Photogrammetry", href: "/services/photogrammetry" },
      { name: "Orthomosaic Mapping", href: "/services/orthomosaic-mapping" },
      { name: "Stockpile Volume Surveys", href: "/services/stockpile-volume-surveys" },
      { name: "Drone LiDAR Surveys", href: "/services/lidar-point-cloud-surveys" }
    ]
  },
  {
    slug: "visual-sales-pack",
    title: "Visual Sales Pack",
    icon: Camera,
    positioning: "Premium aerial content for property, venues, developments, estates, tourism, automotive and commercial marketing campaigns.",
    bestFor: ["Estate agents", "Developers", "Hotels and venues", "Tourism businesses", "Automotive brands", "Marketing teams", "Business parks", "Commercial property agents"],
    includes: ["Aerial photography", "Cinematic drone video", "Edited social media clips", "Website hero footage", "Optional FPV flythrough", "Optional 360 aerial panorama", "Optional location overview graphics"],
    deliverables: ["High-resolution aerial image pack", "Edited promotional video", "Short-form reels/social clips", "Website-ready video loops", "Property or venue showcase content", "Brochure-ready imagery", "Raw footage archive if required"],
    cta: "Create a Visual Content Pack",
    links: [
      { name: "Commercial Drone Photography", href: "/services/aerial-photography-film" },
      { name: "Events Drone Coverage", href: "/services/events-media" },
      { name: "FPV Drone Filming", href: "/services/fpv-drone-filming" },
      { name: "Property Drone Photography", href: "/services/commercial-property-drone-surveys" },
      { name: "360 Aerial Panoramas", href: "/services/360-aerial-panoramas" }
    ]
  },
  {
    slug: "insurance-incident-evidence-pack",
    title: "Insurance & Incident Evidence Pack",
    icon: ShieldAlert,
    positioning: "Rapid aerial evidence capture for storm damage, roof damage, fire damage, flood impact, access-restricted inspections and claim support.",
    bestFor: ["Insurers", "Loss adjusters", "Property owners", "Landlords", "FM companies", "Contractors", "Commercial tenants"],
    includes: ["Urgent drone inspection", "Damage-focused aerial capture", "High-resolution images", "Access-restricted area inspection", "Optional thermal imaging", "Optional before-and-after record", "Optional annotated damage summary"],
    deliverables: ["Insurance evidence image pack", "Annotated damage images", "Condition summary report", "Contractor scoping evidence", "Claim support documentation", "Emergency works briefing pack"],
    cta: "Request Evidence Capture",
    links: [
      { name: "Insurance Drone Surveys", href: "/services/insurance-loss-adjuster-surveys" },
      { name: "Emergency Incident Response", href: "/services/emergency-response" },
      { name: "Thermal Damage Detection", href: "/services/thermal-imaging" },
      { name: "Drone Roof Inspections", href: "/services/roof-inspections" }
    ]
  },
  {
    slug: "solar-energy-asset-pack",
    title: "Solar & Energy Asset Pack",
    icon: Zap,
    positioning: "Drone inspection and thermal imaging for solar PV arrays, commercial rooftops, energy assets and infrastructure sites.",
    bestFor: ["Solar farm operators", "Commercial landlords", "Facilities managers", "Renewable energy contractors", "Asset managers", "Maintenance providers"],
    includes: ["Solar panel drone inspection", "Thermal imaging where required", "Visual image capture", "Panel/array anomaly identification", "Rooftop access review", "Optional maintenance evidence pack"],
    deliverables: ["Thermal anomaly image set", "Hotspot evidence", "Solar asset condition report", "Rooftop PV inspection pack", "Maintenance planning notes", "Warranty or contractor evidence pack"],
    cta: "Inspect Solar Assets",
    links: [
      { name: "Solar Panel Drone Inspections", href: "/services/solar-panel-inspections" },
      { name: "Thermal Drone Surveys", href: "/services/thermal-imaging" },
      { name: "Utility Drone Inspections", href: "/services/utilities-energy-inspections" },
      { name: "Infrastructure Inspections", href: "/services/infrastructure-inspections" }
    ]
  },
  {
    slug: "immersive-digital-capture-pack",
    title: "Immersive Digital Capture Pack",
    icon: Box,
    positioning: "Advanced visual capture for clients who need more than flat photos — including 3D models, Gaussian Splats, digital twin-style assets and immersive site visualisation.",
    bestFor: ["Developers", "Architects", "Heritage teams", "Film/location scouts", "Property marketers", "Construction teams", "Estate owners", "Public consultation teams"],
    includes: ["Drone image capture for 3D reconstruction", "Photogrammetry workflow", "Gaussian Splat capture workflow where suitable", "Optional ground-level image capture", "Optional 360 aerial panorama", "Optional edited flythrough video", "Optional digital twin-style web viewer"],
    deliverables: ["Gaussian Splat visualisation", "3D model", "3D mesh", "Point cloud where required", "Interactive web viewer", "Flythrough video", "Still renders", "Immersive stakeholder presentation asset"],
    cta: "Build an Immersive Site Model",
    links: [
      { name: "Gaussian Splat Drone Capture", href: "/services/gaussian-splat-capture" },
      { name: "Drone Photogrammetry", href: "/services/photogrammetry" },
      { name: "Heritage & Conservation", href: "/services/heritage-conservation-archaeology" },
      { name: "Digital Twin Capture", href: "/services/digital-twin-capture" },
      { name: "360 Aerial Panoramas", href: "/services/360-aerial-panoramas" }
    ]
  }
]

const BUNDLE_DATA = BUNDLES

const SECTORS = [
  { name: "Construction", desc: "Progress monitoring, site mapping, stakeholder updates and evidence-led project reporting." },
  { name: "Facilities Management", desc: "Roof, gutter, facade and asset condition evidence without defaulting to scaffolding or MEWPs." },
  { name: "Commercial Property", desc: "High-resolution elevation imagery, roof audits and pre-acquisition condition packs." },
  { name: "Infrastructure", desc: "Bridge, rail, mast and chimney inspections with detailed defect reporting." },
  { name: "Utilities & Energy", desc: "Solar farm thermal audits, powerline inspections and corridor mapping." },
  { name: "Insurance", desc: "Fast aerial evidence capture for damage, claims, access-restricted areas and post-incident documentation." },
  { name: "Surveying", desc: "Topographic surveys, volumetric analysis and photogrammetry data exports." },
  { name: "Heritage & Conservation", desc: "Digital preservation, 3D modelling and non-invasive condition monitoring for historic assets." },
  { name: "Agriculture & Estates", desc: "Land mapping, crop health imagery and rural asset condition records." },
  { name: "Marketing & Media", desc: "Cinematic 4K/6K video, professional stills and immersive visual content." }
]

export default function BundlesPage() {
  return (
    <main className="bg-dark text-white pt-32">
      {/* 1. Hero Section */}
      <section className="relative px-6 md:px-20 py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/images/nav/construction.png" 
            alt="Commercial Drone Service Bundles"
            fill
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto text-center">
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Commercial Solutions</span>
            <div className="w-12 h-[1px] bg-accent" />
          </div>
          <h1 className="text-[clamp(2.25rem,3.7vw,3.5rem)] font-extralight tracking-[-0.04em] leading-[1.02] text-white mb-5 sm:mb-6">
            COMMERCIAL DRONE SERVICE BUNDLES<br/>
            <span className="text-accent">BUILT AROUND PROJECT OUTCOMES</span>
          </h1>
          <p className="font-body text-xl text-white/60 max-w-[800px] mx-auto mb-12 leading-relaxed">
            From roof inspections and construction progress reports to high-accuracy mapping, cinematic content and immersive 3D capture, EntireFM Drone packages drone services around the result you actually need — not just the flight.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/brief?source=bundles-hero" className="bg-accent text-dark font-display text-xl tracking-widest px-10 py-4 hover:bg-white transition-all duration-300">
              DISCUSS A PROJECT
            </Link>
            <Link href="/cost-estimator" className="bg-white text-dark font-display text-xl tracking-widest px-10 py-4 hover:bg-accent transition-all duration-300">
              ESTIMATE THIS PACKAGE
            </Link>
            <Link href="/project-brief-assistant?mode=package&source=bundles" className="border border-white/20 font-ui text-[12px] tracking-[0.3em] uppercase px-10 py-4 hover:bg-white/5 transition-all">
              NOT SURE WHICH PACKAGE FITS?
            </Link>
          </div>
          <div className="mt-12 flex items-center justify-center gap-6 text-white/30">
             <span className="font-ui text-[10px] tracking-[0.2em] uppercase">CAA-compliant operations</span>
             <div className="w-1 h-1 rounded-full bg-accent" />
             <span className="font-ui text-[10px] tracking-[0.2em] uppercase">Fully insured</span>
             <div className="w-1 h-1 rounded-full bg-accent" />
             <span className="font-ui text-[10px] tracking-[0.2em] uppercase">Enterprise Grade Data</span>
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="px-6 md:px-20 py-24 bg-mid">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-accent" />
              <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Strategic Logic</span>
            </div>
            <h2 className="font-display text-5xl leading-tight mb-8">THE VALUE IS IN THE<br/><span className="text-accent underline underline-offset-8 decoration-accent/30">DELIVERABLE</span></h2>
            <p className="font-body text-white/50 leading-relaxed mb-6">
              Most clients do not need “a drone flight”. They need evidence, visibility, data, measurements, marketing assets or a clear record of site condition. EntireFM Drone’s commercial bundles are designed to make that process simple by combining capture, reporting and usable deliverables into clear project-focused packages.
            </p>
          </div>
          <div className="bg-dark/40 border border-white/5 p-12 backdrop-blur-sm">
            <p className="font-body text-lg italic text-accent/80 mb-6 leading-relaxed">
              &quot;A drone is only the capture method. The value is in what the client can do with the output.&quot;
            </p>
            <p className="font-body text-white/40 leading-relaxed">
              Whether the requirement is reducing access costs, documenting a roof condition, tracking construction progress, producing investor update content, calculating stockpile volumes or creating an immersive 3D site model, EntireFM Drone structures each project around the final deliverable.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Bundle Cards Section */}
      <section className="px-6 md:px-20 py-32">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col items-center mb-20 text-center">
             <div className="svc-tag mb-6"><SectionTag number="01" text="Solution Bundles" /></div>
             <h2 className="font-display text-section mb-6">CHOOSE YOUR <span className="text-accent">BUNDLE</span></h2>
             <p className="font-body text-white/40 max-w-[600px]">Outcome-led drone solutions designed for professional industrial, commercial and visual media projects.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1px] bg-white/10 border border-white/5">
            {BUNDLE_DATA.map((bundle) => (
              <div key={bundle.title} id={bundle.slug} className="bg-dark p-10 flex flex-col h-full group hover:bg-mid/50 transition-all duration-500 scroll-mt-32">
                <bundle.icon className="w-10 h-10 text-accent mb-8" />
                <h3 className="font-display text-3xl text-white mb-4 tracking-wider uppercase leading-none group-hover:text-accent transition-colors">
                  {bundle.title}
                </h3>
                <p className="font-body text-sm text-white/40 mb-8 leading-relaxed">
                  {bundle.positioning}
                </p>
                
                <div className="mb-8">
                   <h4 className="font-ui text-[10px] tracking-[0.2em] uppercase text-accent mb-3">Best For:</h4>
                   <p className="font-body text-[13px] text-white/60 leading-relaxed">
                     {bundle.bestFor.join(', ')}
                   </p>
                </div>

                <div className="mb-8">
                   <h4 className="font-ui text-[10px] tracking-[0.2em] uppercase text-accent mb-3">What&apos;s Included:</h4>
                   <ul className="space-y-2">
                     {bundle.includes.slice(0, 4).map((item, i) => (
                       <li key={i} className="flex items-start gap-3">
                         <div className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                         <span className="font-body text-[13px] text-white/50">{item}</span>
                       </li>
                     ))}
                     {bundle.includes.length > 4 && (
                        <li className="font-ui text-[10px] text-white/20 uppercase tracking-widest pl-4">+{bundle.includes.length - 4} more options</li>
                     )}
                   </ul>
                </div>

                <div className="mb-10 bg-white/5 p-6 border-l-2 border-accent/20">
                   <h4 className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40 mb-3">Key Deliverables:</h4>
                   <ul className="space-y-2">
                     {bundle.deliverables.slice(0, 3).map((item, i) => (
                       <li key={i} className="flex items-center gap-3">
                         <CheckCircle2 className="w-3 h-3 text-accent/50" />
                         <span className="font-ui text-[11px] tracking-wider text-white/70 uppercase">{item}</span>
                       </li>
                     ))}
                   </ul>
                </div>

                <div className="mt-auto pt-8 border-t border-white/5">
                   <Link href={`/brief?package=${bundle.slug}&source=bundles-card&cta=${bundle.cta}`} className="w-full flex items-center justify-between font-ui text-[11px] tracking-[0.3em] uppercase text-accent group/btn hover:text-white transition-all">
                     {bundle.cta} <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                   </Link>
                </div>

                {/* Internal Related Links */}
                <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-1 gap-2">
                   {bundle.links.map((link) => (
                     <Link key={link.href} href={link.href} className="font-ui text-[10px] tracking-widest text-white/20 hover:text-white/60 uppercase transition-colors">
                       {link.name}
                     </Link>
                   ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-accent/5 border border-accent/10 rounded-sm">
             <p className="font-body text-sm text-accent/70 text-center italic">
               Survey-grade outputs are available where the project is planned with the appropriate control, processing and accuracy workflow.
             </p>
          </div>
        </div>
      </section>

      {/* 4. Comparison Section */}
      <section className="px-6 md:px-20 py-32 bg-mid">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-5xl mb-6">NOT EVERY PROJECT NEEDS<br/><span className="text-accent">THE SAME DRONE OUTPUT</span></h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-8 px-6 text-left font-ui text-[11px] tracking-[0.3em] uppercase text-accent">Bundle</th>
                  <th className="py-8 px-6 text-left font-ui text-[11px] tracking-[0.3em] uppercase text-accent">Best Suited To</th>
                  <th className="py-8 px-6 text-left font-ui text-[11px] tracking-[0.3em] uppercase text-accent">Primary Output</th>
                  <th className="py-8 px-6 text-left font-ui text-[11px] tracking-[0.3em] uppercase text-accent">Optional Add-ons</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { bundle: "Roof Intelligence", suited: "FM, landlords, managing agents", output: "Roof condition evidence and defect report", add: "Thermal imaging, insurance pack, repair verification" },
                  { bundle: "Construction Progress", suited: "Contractors, developers, investors", output: "Regular progress imagery and stakeholder reports", add: "Time-lapse, video edits, site map, investor film" },
                  { bundle: "Survey Data", suited: "Surveyors, landowners, civil contractors", output: "Orthomosaic, point cloud, volume or mapping data", add: "CAD/GIS exports, cut/fill, ground control" },
                  { bundle: "Visual Sales", suited: "Property, venues, tourism, marketing", output: "Aerial images and edited video content", add: "FPV, social clips, 360 panoramas" },
                  { bundle: "Immersive Digital", suited: "Developers, architects, heritage, digital twin use cases", output: "Gaussian Splat, 3D model or immersive viewer", add: "Photogrammetry, LiDAR, flythrough video" },
                  { bundle: "Insurance & Incident", suited: "Insurers, loss adjusters, owners, contractors", output: "Damage evidence pack", add: "Thermal imaging, annotated report, emergency visit" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                    <td className="py-8 px-6 font-display text-xl text-white group-hover:text-accent transition-colors">{row.bundle}</td>
                    <td className="py-8 px-6 font-body text-sm text-white/50">{row.suited}</td>
                    <td className="py-8 px-6 font-body text-sm text-white/70">{row.output}</td>
                    <td className="py-8 px-6 font-ui text-[10px] tracking-wider text-white/40 uppercase">{row.add}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Outcome-led Section */}
      <section className="px-6 md:px-20 py-32 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-display text-section mb-12">CHOOSE THE <span className="text-accent">OUTCOME</span>,<br/>NOT JUST THE DRONE FLIGHT</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Roof condition report", "Annotated defect imagery", "Thermal inspection report", 
              "Orthomosaic map", "Point cloud", "3D model", "Gaussian Splat", 
              "Digital twin-style viewer", "Construction progress report", "Stockpile volume report", 
              "Cut and fill calculation", "Marketing video", "FPV flythrough", 
              "360 aerial panorama", "Insurance evidence pack", "Investor update film"
            ].map((outcome) => (
              <span key={outcome} className="px-6 py-3 border border-white/10 bg-white/5 font-ui text-[11px] tracking-[0.2em] uppercase text-white/60 hover:border-accent/40 hover:text-white transition-all cursor-default">
                {outcome}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Add-Ons Section */}
      <section className="px-6 md:px-20 py-32 bg-mid">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Strategic Upgrades</span>
          </div>
          <h2 className="font-display text-5xl mb-16">OPTIONAL <span className="text-accent">ADD-ONS</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Thermal imaging", "FPV flythrough", "Edited video production", "Social media clips", 
              "360 aerial panoramas", "Annotated reporting", "Repeat monitoring visits", 
              "Ground-level image capture", "Photogrammetry processing", "Gaussian Splat processing", 
              "CAD/GIS export support", "Contractor tender evidence pack", "Client portal/image archive", 
              "Emergency response visit", "Before-and-after comparison"
            ].map((addon) => (
              <div key={addon} className="flex items-center gap-4 p-6 bg-dark border border-white/5 hover:border-accent/30 transition-all group">
                <ChevronRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                <span className="font-ui text-[12px] tracking-widest uppercase text-white/60 group-hover:text-white">{addon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Sector Section */}
      <section className="px-6 md:px-20 py-32">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-display text-section mb-16 text-center">BUILT FOR <span className="text-accent">COMMERCIAL</span> ENVIRONMENTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/5">
            {SECTORS.map((sector) => (
              <div key={sector.name} className="bg-dark p-12 hover:bg-mid/50 transition-all group">
                <h3 className="font-display text-2xl text-white mb-4 tracking-widest uppercase group-hover:text-accent transition-colors">{sector.name}</h3>
                <p className="font-body text-sm text-white/40 leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Process Section */}
      <section className="px-6 md:px-20 py-32 bg-mid">
        <div className="max-w-[1200px] mx-auto">
          <div className="svc-tag mb-12"><SectionTag number="05" text="Lifecycle" /></div>
          <h2 className="font-display text-section mb-20 text-center">HOW THE <span className="text-accent">BUNDLE PROCESS</span> WORKS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Define Outcome", desc: "We establish whether the client needs inspection evidence, survey data, marketing content or visualisation." },
              { step: "02", title: "Plan Capture", desc: "We confirm the flight area, access requirements, safety constraints, weather window and accuracy requirements." },
              { step: "03", title: "Complete Flight", desc: "EntireFM Drone carries out the drone operation using the appropriate capture workflow for the intended output." },
              { step: "04", title: "Process Data", desc: "Images, video, maps, reports, models or data outputs are processed into a usable client-ready format." },
              { step: "05", title: "Deliver Results", desc: "The client receives the agreed deliverables, with clear next-step guidance for maintenance or reporting." }
            ].map((item, idx) => (
              <div key={item.step} className="relative">
                <div className="font-display text-5xl text-accent/20 mb-6">{item.step}</div>
                <h3 className="font-display text-xl text-white mb-4 tracking-widest uppercase">{item.title}</h3>
                <p className="font-body text-[13px] text-white/40 leading-relaxed">{item.desc}</p>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-6 -right-4 text-accent/20">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="px-6 md:px-20 py-32">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="font-display text-section mb-16 text-center underline decoration-accent/30 underline-offset-8">BUNDLE <span className="text-accent">FAQ</span></h2>
          <FAQAccordion faqs={[
            { question: 'What drone package do I need?', answer: 'Your choice should be based on the required outcome: inspection evidence, survey data, marketing content, progress monitoring or immersive 3D capture. Our specialists can advise the best bundle for your project requirements.' },
            { question: 'Can you provide a roof inspection report?', answer: 'Yes, EntireFM Drone can provide high-resolution image evidence, annotated defect imagery and inspection summaries depending on the project requirement.' },
            { question: 'Can drone surveys replace scaffolding or MEWPs?', answer: 'In many cases drones reduce the need for access equipment during initial inspection and evidence capture, although repair works or hands-on inspection may still require physical access.' },
            { question: 'Can you provide thermal drone inspections?', answer: 'Yes, thermal imaging can be added where suitable for heat loss, roof issues, solar panel anomalies or asset inspection.' },
            { question: 'Can you create Gaussian Splats or 3D models from drone footage?', answer: 'Yes, where the site and capture conditions are suitable. Gaussian Splats and 3D models are excellent for visualisation, stakeholder engagement and immersive site viewing.' },
            { question: 'Are drone mapping outputs survey-grade?', answer: 'They can be, where the project is planned with appropriate methodology, control points, processing and accuracy requirements. EntireFM Drone ensures the correct workflow for measurement-critical data.' },
            { question: 'Do you offer ongoing construction monitoring?', answer: 'Yes, repeat drone visits can be arranged weekly, fortnightly or monthly for progress records, stakeholder updates and project documentation.' },
            { question: 'Can you help with insurance evidence?', answer: 'Yes, drone capture can provide fast visual evidence for storm damage, roof issues, fire damage, flood impact and access-restricted areas.' }
          ]} />
        </div>
      </section>

      {/* 10. CTA Section */}
      <section className="px-6 md:px-20 py-32 bg-accent">
        <div className="max-w-[1000px] mx-auto text-center text-dark">
          <h2 className="font-display text-section mb-8">NEED A DRONE OUTPUT YOU CAN <span className="underline decoration-dark/30 underline-offset-8">ACTUALLY USE</span>?</h2>
          <p className="font-body text-xl mb-12 max-w-[800px] mx-auto leading-relaxed">
            Whether you need a roof inspection, progress record, survey dataset, marketing content package or immersive 3D site capture, EntireFM Drone can structure the drone operation around the commercial result.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/brief?source=bundles-footer" className="bg-dark text-white font-display text-2xl tracking-[0.2em] px-12 py-5 hover:bg-white hover:text-dark transition-all duration-500">
              START PROJECT BRIEF
            </Link>
            <Link href="/services" className="border-2 border-dark/20 font-ui text-[12px] font-bold tracking-[0.3em] uppercase px-12 py-5 hover:bg-dark hover:text-white transition-all duration-500">
              VIEW ALL SERVICES
            </Link>
          </div>
          <p className="mt-8 font-ui text-[10px] tracking-[0.2em] uppercase opacity-60">
            Tell us the outcome you need. We’ll advise the best capture method, deliverables and package structure.
          </p>
        </div>
      </section>
    </main>
  )
}
