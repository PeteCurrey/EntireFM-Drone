'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  FileText, 
  Image as ImageIcon, 
  Map as MapIcon, 
  Video, 
  Box, 
  Activity, 
  Target, 
  CheckCircle2, 
  ChevronRight,
  Search,
  Filter,
  Download,
  ExternalLink,
  ShieldAlert,
  Zap,
  Hammer
} from 'lucide-react'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import { AccreditationsStrip } from '@/components/ui/Strips'

// --- Types ---

interface Deliverable {
  id: string
  title: string
  category: string
  categories: string[]
  description: string
  bestFor: string[]
  service: string
  serviceHref: string
  bundle: string
  bundleHref: string
  formats: string[]
  cta: string
  isSample?: boolean
  caveat?: string
}

// --- Data ---

const CATEGORIES = [
  'All', 'Inspection', 'Roof & Building', 'Thermal', 'Survey & Mapping', 
  'Construction', 'Insurance', 'Aerial Media', 'Gaussian Splat / 3D', 
  'Facilities Management', 'Solar & Energy'
]

const DELIVERABLES: Deliverable[] = [
  {
    id: 'roof-images',
    title: 'Roof Inspection Image Set',
    category: 'Inspection / Roof & Building',
    categories: ['Inspection', 'Roof & Building', 'Facilities Management'],
    description: 'High-resolution aerial image set covering roof areas, gutters, drainage, flashing, roof plant, parapets and access-restricted details.',
    bestFor: ['Facilities managers', 'Landlords', 'Managing agents', 'Commercial property owners', 'Maintenance contractors', 'Insurance teams'],
    service: 'Roof Inspections',
    serviceHref: '/services/roof-inspections',
    bundle: 'Roof Intelligence Pack',
    bundleHref: '/bundles#roof-intelligence-pack',
    formats: ['JPG image set', 'Organised folders', 'Numbered image references', 'Optional annotated image set'],
    cta: 'Request Roof Inspection Images'
  },
  {
    id: 'annotated-defect',
    title: 'Annotated Defect Image Pack',
    category: 'Inspection / Evidence',
    categories: ['Inspection', 'Insurance', 'Facilities Management'],
    description: 'Selected images marked up with defect notes, areas of concern, access issues or maintenance observations.',
    bestFor: ['Contractor scoping', 'FM reporting', 'Insurance support', 'Maintenance planning', 'Dilapidation records'],
    service: 'Building Envelope Inspections',
    serviceHref: '/services/building-envelope-inspections',
    bundle: 'Building Envelope & Asset Condition Pack',
    bundleHref: '/bundles#building-envelope-asset-condition-pack',
    formats: ['Annotated JPG / PNG', 'PDF image schedule', 'Defect reference table'],
    cta: 'Request Annotated Evidence'
  },
  {
    id: 'pdf-summary',
    title: 'PDF Roof Inspection Summary',
    category: 'Inspection / Reporting',
    categories: ['Inspection', 'Roof & Building', 'Facilities Management'],
    description: 'A structured PDF summary showing project context, inspection areas, selected images, observations and recommended next steps.',
    bestFor: ['FM teams', 'Property managers', 'Landlords', 'Commercial asset owners', 'Contractor briefings'],
    service: 'Roof Inspections',
    serviceHref: '/services/roof-inspections',
    bundle: 'Roof Intelligence Pack',
    bundleHref: '/bundles#roof-intelligence-pack',
    formats: ['PDF report', 'Image appendix', 'Defect summary'],
    cta: 'Request a Roof Inspection Report',
    caveat: 'This is an inspection summary for evidence purposes, not a chartered surveyor report.'
  },
  {
    id: 'envelope-pack',
    title: 'Building Envelope Condition Pack',
    category: 'Building / Property / Asset Condition',
    categories: ['Roof & Building', 'Facilities Management'],
    description: 'Visual condition evidence for facades, cladding, glazing, masonry, parapets, rooflines and high-level building elements.',
    bestFor: ['Managing agents', 'Surveyors', 'Property owners', 'FM providers', 'Dilapidation support', 'Maintenance planning'],
    service: 'Building Envelope Inspections',
    serviceHref: '/services/building-envelope-inspections',
    bundle: 'Building Envelope & Asset Condition Pack',
    bundleHref: '/bundles#building-envelope-asset-condition-pack',
    formats: ['Elevation image set', 'Annotated images', 'PDF condition summary', 'Contractor scoping pack'],
    cta: 'Request Building Envelope Capture'
  },
  {
    id: 'thermal-set',
    title: 'Thermal Image Set',
    category: 'Thermal / Energy',
    categories: ['Thermal', 'Solar & Energy', 'Facilities Management'],
    description: 'Thermal imagery showing temperature anomalies that may support further investigation into heat loss, roof issues, or asset concerns.',
    bestFor: ['Solar inspections', 'Building heat loss checks', 'Roof anomaly review', 'FM maintenance', 'Energy asset teams'],
    service: 'Thermal Imaging',
    serviceHref: '/services/thermal-imaging',
    bundle: 'Solar & Energy Asset Pack',
    bundleHref: '/bundles#solar-energy-asset-pack',
    formats: ['Radiometric thermal image set', 'Thermal JPG exports', 'Visual reference images'],
    cta: 'Request Thermal Capture',
    caveat: 'Thermal imaging indicates temperature anomalies. Findings should be interpreted in context and verified where required.'
  },
  {
    id: 'solar-pack',
    title: 'Solar Panel Anomaly Evidence Pack',
    category: 'Solar / Energy / Thermal',
    categories: ['Thermal', 'Solar & Energy'],
    description: 'Visual and thermal evidence to help identify possible solar PV anomalies, hotspots, damaged panels or maintenance areas.',
    bestFor: ['Solar farm operators', 'Commercial landlords', 'Renewable energy contractors', 'FM teams', 'Asset managers'],
    service: 'Solar Panel Inspections',
    serviceHref: '/services/solar-panel-inspections',
    bundle: 'Solar & Energy Asset Pack',
    bundleHref: '/bundles#solar-energy-asset-pack',
    formats: ['Thermal image set', 'Visual reference images', 'Panel/array notes', 'PDF anomaly summary'],
    cta: 'Request Solar Inspection Evidence'
  },
  {
    id: 'construction-archive',
    title: 'Construction Progress Image Archive',
    category: 'Construction / Monitoring',
    categories: ['Construction'],
    description: 'Repeatable aerial image records captured weekly, fortnightly or monthly to track site progress and support stakeholder reporting.',
    bestFor: ['Contractors', 'Developers', 'Project managers', 'Quantity surveyors', 'Investors', 'Client-side teams'],
    service: 'Construction Monitoring',
    serviceHref: '/services/construction-monitoring',
    bundle: 'Construction Progress Pack',
    bundleHref: '/bundles#construction-progress-pack',
    formats: ['Dated image archive', 'Repeat viewpoint sets', 'Monthly progress folders'],
    cta: 'Plan Construction Monitoring'
  },
  {
    id: 'construction-report',
    title: 'Construction Progress Report',
    category: 'Construction / Reporting',
    categories: ['Construction'],
    description: 'A structured progress report combining aerial imagery, timeline notes, milestone visuals and stakeholder-ready summaries.',
    bestFor: ['Progress meetings', 'Investor updates', 'Client reporting', 'Variation/dispute context', 'Project records'],
    service: 'Construction Monitoring',
    serviceHref: '/services/construction-monitoring',
    bundle: 'Construction Progress Pack',
    bundleHref: '/bundles#construction-progress-pack',
    formats: ['PDF report', 'Image comparison pages', 'Milestone notes', 'Optional video summary'],
    cta: 'Request Progress Reporting'
  },
  {
    id: 'orthomosaic',
    title: 'Orthomosaic Map',
    category: 'Survey & Mapping',
    categories: ['Survey & Mapping', 'Construction'],
    description: 'A high-resolution stitched aerial map produced from overlapping drone imagery, useful for site context, mapping, and visual measurement.',
    bestFor: ['Surveyors', 'Developers', 'Landowners', 'Construction teams', 'Estate managers'],
    service: 'Orthomosaic Mapping',
    serviceHref: '/services/orthomosaic-mapping',
    bundle: 'Survey Data Pack',
    bundleHref: '/bundles#survey-data-pack',
    formats: ['GeoTIFF where scoped', 'JPG / PNG map export', 'PDF site map'],
    cta: 'Request Orthomosaic Mapping'
  },
  {
    id: 'point-cloud',
    title: 'Drone Point Cloud',
    category: 'Survey & Mapping / 3D Data',
    categories: ['Survey & Mapping', 'Gaussian Splat / 3D'],
    description: 'A point cloud output created through photogrammetry or LiDAR-supported workflows, useful for 3D site understanding and modelling.',
    bestFor: ['Surveyors', 'Engineers', 'Infrastructure teams', 'Developers', 'Construction teams'],
    service: 'Drone Photogrammetry',
    serviceHref: '/services/photogrammetry',
    bundle: 'Survey Data Pack',
    bundleHref: '/bundles#survey-data-pack',
    formats: ['LAS / LAZ', 'E57', 'RCP / RCS where scoped'],
    cta: 'Discuss Point Cloud Outputs',
    caveat: 'Survey-grade outputs require appropriate capture methodology, control and accuracy verification.'
  },
  {
    id: 'volume-report',
    title: 'Stockpile Volume Report',
    category: 'Survey & Mapping / Volumetrics',
    categories: ['Survey & Mapping', 'Construction'],
    description: 'Drone-supported volume calculations for aggregates, earthworks, waste, quarry materials or site stockpiles.',
    bestFor: ['Quarry operators', 'Aggregates companies', 'Earthworks contractors', 'Waste operators', 'Construction teams'],
    service: 'Stockpile Volume Surveys',
    serviceHref: '/services/stockpile-volume-surveys',
    bundle: 'Survey Data Pack',
    bundleHref: '/bundles#survey-data-pack',
    formats: ['PDF volume report', 'Measured pile references', 'Orthomosaic context image'],
    cta: 'Request Stockpile Measurement'
  },
  {
    id: 'cut-fill',
    title: 'Cut and Fill Calculation',
    category: 'Survey & Mapping / Earthworks',
    categories: ['Survey & Mapping', 'Construction'],
    description: 'Drone-supported earthworks comparison and cut/fill reporting for construction, civil engineering and land development projects.',
    bestFor: ['Civil engineering contractors', 'Developers', 'Earthworks teams', 'Quantity surveyors', 'Site managers'],
    service: 'Cut & Fill Analysis',
    serviceHref: '/services/cut-fill-analysis',
    bundle: 'Survey Data Pack',
    bundleHref: '/bundles#survey-data-pack',
    formats: ['PDF summary', 'Cut/fill table', 'Surface comparison visuals'],
    cta: 'Discuss Cut & Fill Analysis'
  },
  {
    id: 'insurance-pack',
    title: 'Insurance Evidence Pack',
    category: 'Insurance / Incident Evidence',
    categories: ['Insurance', 'Inspection'],
    description: 'A structured visual evidence pack for storm damage, fire damage, flood impact, roof condition, or contractor scoping.',
    bestFor: ['Property owners', 'Landlords', 'FM teams', 'Insurers', 'Loss adjusters', 'Contractors'],
    service: 'Insurance & Loss Adjuster Surveys',
    serviceHref: '/services/insurance-loss-adjuster-surveys',
    bundle: 'Insurance & Incident Evidence Pack',
    bundleHref: '/bundles#insurance-incident-evidence-pack',
    formats: ['High-resolution image set', 'Annotated damage images', 'PDF evidence summary'],
    cta: 'Request Insurance Evidence Capture',
    caveat: 'Drone evidence can support documentation, but acceptance depends on the insurer and claim context.'
  },
  {
    id: 'media-pack',
    title: 'Aerial Media Pack',
    category: 'Aerial Media / Marketing',
    categories: ['Aerial Media'],
    description: 'A curated set of aerial images and video assets for property marketing, venues, events, tourism, and brand content.',
    bestFor: ['Estate agents', 'Developers', 'Hotels and venues', 'Tourism businesses', 'Marketing teams'],
    service: 'Aerial Photography & Film',
    serviceHref: '/services/aerial-photography-film',
    bundle: 'Visual Sales Pack',
    bundleHref: '/bundles#visual-sales-pack',
    formats: ['High-resolution image pack', 'Edited drone video', 'Social media clips', 'Website hero loops'],
    cta: 'Create Aerial Media Pack'
  },
  {
    id: 'fpv-video',
    title: 'FPV Flythrough Video',
    category: 'Aerial Media / FPV',
    categories: ['Aerial Media'],
    description: 'Dynamic flythrough video for venues, factories, showrooms, property, events or brand campaigns.',
    bestFor: ['Venues', 'Factories', 'Gyms', 'Showrooms', 'Property marketing', 'Social-first content'],
    service: 'FPV Drone Filming',
    serviceHref: '/services/fpv-drone-filming',
    bundle: 'Visual Sales Pack',
    bundleHref: '/bundles#visual-sales-pack',
    formats: ['Edited FPV video', 'Social clips', 'Website video loop'],
    cta: 'Request FPV Flythrough'
  },
  {
    id: 'gaussian-splat',
    title: 'Gaussian Splat Visualisation',
    category: 'Gaussian Splat / 3D',
    categories: ['Gaussian Splat / 3D'],
    description: 'A photorealistic 3D visualisation created from drone imagery, allowing users to explore a captured environment from any viewpoint.',
    bestFor: ['Property visualisation', 'Construction records', 'Heritage documentation', 'Stakeholder presentations'],
    service: 'Gaussian Splat Capture',
    serviceHref: '/services/gaussian-splat-capture',
    bundle: 'Immersive Digital Capture Pack',
    bundleHref: '/bundles#immersive-digital-capture-pack',
    formats: ['Gaussian Splat file', 'Web-ready viewer', 'Screenshot set', 'Flythrough video'],
    cta: 'Request Gaussian Splat Capture',
    caveat: 'Gaussian Splats are visualisation-first assets. Measurement-critical outputs should use photogrammetry or LiDAR.'
  },
  {
    id: 'digital-twin',
    title: 'Digital Twin-Style Visual Record',
    category: '3D / Asset Records',
    categories: ['Gaussian Splat / 3D', 'Facilities Management'],
    description: 'A visual record of a site, building, or asset environment, combining drone capture, imagery, and 3D outputs.',
    bestFor: ['Asset owners', 'FM teams', 'Estates', 'Developers', 'Infrastructure teams'],
    service: 'Digital Twin Capture',
    serviceHref: '/services/digital-twin-capture',
    bundle: 'Immersive Digital Capture Pack',
    bundleHref: '/bundles#immersive-digital-capture-pack',
    formats: ['Visual model', '360 panorama set', 'Image archive', '3D model'],
    cta: 'Discuss Digital Twin Capture'
  },
  {
    id: '360-pano',
    title: '360 Aerial Panorama',
    category: '3D / Visualisation / Media',
    categories: ['Gaussian Splat / 3D', 'Aerial Media'],
    description: 'Interactive aerial panorama for developments, venues, estates, public consultation, tourism and site context.',
    bestFor: ['Property marketing', 'Public consultation', 'Estates', 'Tourism', 'Venues'],
    service: '360 Aerial Panoramas',
    serviceHref: '/services/360-aerial-panoramas',
    bundle: 'Immersive Digital Capture Pack',
    bundleHref: '/bundles#immersive-digital-capture-pack',
    formats: ['Web panorama viewer', 'Embed-ready output', 'Still image export'],
    cta: 'Request 360 Aerial Panorama'
  }
]

// --- Components ---

export default function SampleDeliverablesPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const filteredDeliverables = useMemo(() => {
    if (activeFilter === 'All') return DELIVERABLES
    return DELIVERABLES.filter(d => d.categories.includes(activeFilter))
  }, [activeFilter])

  return (
    <main className="bg-dark text-white min-h-screen pt-40 pb-32">
      <div className="max-w-[1400px] mx-auto px-8 md:px-20">
        
        {/* Hero */}
        <header className="mb-24 relative">
          <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none -translate-y-20">
            <FileText className="w-96 h-96" />
          </div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Output Library</span>
          </div>
          <h1 className="font-display text-[8vw] md:text-[6vw] leading-[0.85] text-white mb-10 uppercase tracking-tighter">
            SAMPLE DRONE <br/><span className="text-accent underline underline-offset-8 decoration-accent/30">DELIVERABLES</span>
          </h1>
          <p className="font-body text-xl md:text-2xl font-light text-white/50 max-w-4xl uppercase tracking-widest leading-relaxed mb-12">
            See the types of reports, image sets, maps, media assets, evidence packs and immersive visual outputs EntireFM Drone can provide after a commercial drone project.
          </p>
          <div className="flex flex-wrap gap-x-12 gap-y-6 text-white/20 font-ui text-[9px] tracking-[0.3em] uppercase border-t border-white/5 pt-12">
             <span>Inspection reports</span>
             <span className="w-1 h-1 bg-white/20 rounded-full my-auto" />
             <span>Survey data</span>
             <span className="w-1 h-1 bg-white/20 rounded-full my-auto" />
             <span>Progress records</span>
             <span className="w-1 h-1 bg-white/20 rounded-full my-auto" />
             <span>Evidence packs</span>
             <span className="w-1 h-1 bg-white/20 rounded-full my-auto" />
             <span>Aerial media</span>
             <span className="w-1 h-1 bg-white/20 rounded-full my-auto" />
             <span>3D visualisation</span>
          </div>
        </header>

        {/* Intro Logic */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
           <div className="lg:col-span-5 bg-white/[0.02] border border-white/10 p-12">
              <h2 className="font-display text-4xl text-white uppercase tracking-widest mb-8 leading-none">THE VALUE IS <br/><span className="text-accent">IN THE OUTPUT</span></h2>
              <p className="font-body text-sm text-white/40 uppercase tracking-widest leading-relaxed mb-8">
                A drone flight only matters if the client receives something useful from it. EntireFM Drone structures projects around the final deliverable — whether that is inspection evidence, a survey map, a construction progress record, or a 3D visualisation.
              </p>
              <div className="font-display text-2xl text-accent border-l-2 border-accent/30 pl-8 py-2 uppercase tracking-widest">
                You are not buying flight time. You are buying usable aerial intelligence.
              </div>
           </div>
           <div className="lg:col-span-7">
              <div className="p-12 border border-white/5 bg-dark/40 backdrop-blur-md">
                 <h3 className="font-display text-xl text-white uppercase tracking-widest mb-6">Honesty & Compliance</h3>
                 <p className="font-body text-[11px] text-white/30 uppercase tracking-widest leading-relaxed mb-6">
                   The examples below show representative deliverable formats. Final outputs depend on the project scope, site conditions, agreed service and required level of processing or reporting.
                 </p>
                 <div className="flex items-center gap-4 text-accent/50 font-ui text-[10px] tracking-widest uppercase">
                    <CheckCircle2 className="w-4 h-4" /> Representative Format Labelled
                    <CheckCircle2 className="w-4 h-4" /> Confidentiality Respected
                    <CheckCircle2 className="w-4 h-4" /> Technical Accuracy Prioritised
                 </div>
              </div>
           </div>
        </section>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <nav className="flex-1 sticky top-24 z-30 bg-dark/80 backdrop-blur-md border-y border-white/5 py-6 overflow-x-auto no-scrollbar">
             <div className="flex gap-4">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-8 py-3 whitespace-nowrap font-ui text-[10px] tracking-[0.3em] uppercase transition-all border ${activeFilter === cat ? 'bg-accent text-dark border-accent' : 'bg-transparent text-white/40 border-white/10 hover:border-white/30 hover:text-white'}`}
                  >
                    {cat}
                  </button>
                ))}
             </div>
          </nav>
          <div className="bg-white/[0.02] border border-white/5 p-6 md:w-80">
             <h4 className="font-display text-sm text-white uppercase tracking-widest mb-4">Not Sure Which One?</h4>
             <Link href="/choose-your-output" className="font-ui text-[10px] tracking-widest uppercase text-accent hover:text-white transition-colors flex items-center gap-2">
                Use Output Selector <ArrowRight className="w-3 h-3" />
             </Link>
          </div>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/5 mb-32">
           <AnimatePresence mode="popLayout">
              {filteredDeliverables.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-dark p-10 flex flex-col h-full group hover:bg-accent/[0.02] transition-colors border border-transparent hover:border-accent/10"
                >
                  <div className="flex justify-between items-start mb-8">
                     <div className="p-4 bg-white/5 rounded-sm">
                        {item.categories.includes('Survey & Mapping') ? <MapIcon className="w-6 h-6 text-accent/60" /> : 
                         item.categories.includes('Aerial Media') ? <Video className="w-6 h-6 text-accent/60" /> :
                         item.categories.includes('Thermal') ? <Zap className="w-6 h-6 text-accent/60" /> :
                         <FileText className="w-6 h-6 text-accent/60" />}
                     </div>
                     <span className="font-ui text-[9px] tracking-[0.3em] uppercase text-white/20 group-hover:text-accent/40 transition-colors">Sample Deliverable</span>
                  </div>

                  <h3 className="font-display text-2xl text-white mb-4 uppercase tracking-widest leading-tight group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="font-body text-[11px] text-white/40 uppercase tracking-widest leading-relaxed mb-8 flex-1">
                    {item.description}
                  </p>

                  <div className="mb-8 space-y-4">
                     <div>
                        <span className="font-ui text-[9px] tracking-[0.2em] uppercase text-accent mb-2 block">Best For:</span>
                        <p className="font-body text-[11px] text-white/50 uppercase tracking-widest leading-tight">{item.bestFor.join(', ')}</p>
                     </div>
                     <div>
                        <span className="font-ui text-[9px] tracking-[0.2em] uppercase text-accent mb-2 block">Typical Formats:</span>
                        <div className="flex flex-wrap gap-2">
                           {item.formats.map(f => (
                             <span key={f} className="font-ui text-[8px] tracking-widest uppercase px-2 py-1 bg-white/5 text-white/30">{f}</span>
                           ))}
                        </div>
                     </div>
                  </div>

                  {item.caveat && (
                    <div className="mb-8 p-4 bg-white/[0.01] border-l border-white/10 flex gap-3 items-start">
                       <InfoIcon className="w-3 h-3 text-white/20 mt-0.5 shrink-0" />
                       <p className="font-body text-[9px] text-white/20 uppercase tracking-widest italic leading-relaxed">{item.caveat}</p>
                    </div>
                  )}

                  <div className="mt-auto space-y-6 pt-8 border-t border-white/5">
                     <div className="flex flex-col gap-3">
                        <Link href={item.serviceHref} className="flex items-center gap-2 font-ui text-[9px] tracking-[0.3em] uppercase text-white/40 hover:text-white transition-colors">
                           <ChevronRight className="w-3 h-3" /> Related Service: {item.service}
                        </Link>
                        <Link href={item.bundleHref} className="flex items-center gap-2 font-ui text-[9px] tracking-[0.3em] uppercase text-white/40 hover:text-white transition-colors">
                           <ChevronRight className="w-3 h-3" /> Included in: {item.bundle}
                        </Link>
                     </div>
                     <Link href={`/brief?deliverable=${item.title}&source=deliverables-library&cta=${item.cta}`} className="w-full flex items-center justify-center gap-4 bg-white/5 border border-white/10 py-4 font-ui text-[10px] tracking-[0.4em] uppercase text-white hover:bg-accent hover:text-dark hover:border-accent transition-all">
                        {item.cta} <ArrowRight className="w-4 h-4" />
                     </Link>
                  </div>
                </motion.div>
              ))}
           </AnimatePresence>
        </div>

        {/* Final CTA */}
        <section className="py-32 px-10 md:px-20 bg-accent text-dark border-t border-white/10 text-center">
           <Activity className="w-12 h-12 mb-8 mx-auto animate-pulse" />
           <h2 className="font-display text-6xl md:text-8xl mb-8 leading-[0.8] uppercase tracking-tighter">
             KNOW THE OUTPUT <br/>YOU <span className="underline decoration-dark/30 underline-offset-[10px]">NEED?</span>
           </h2>
           <p className="font-body text-xl md:text-2xl text-dark/70 max-w-3xl mx-auto mb-16 uppercase tracking-widest font-medium leading-relaxed">
             Whether you need an inspection report, evidence pack, survey dataset, progress record, media asset or immersive 3D visualisation, EntireFM Drone can structure the drone project around the deliverable.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
             <Link 
               href="/brief?source=deliverables-footer"
               className="group flex items-center gap-6 bg-dark text-white px-12 py-8 font-display text-4xl tracking-[0.1em] transition-all hover:bg-white hover:text-dark w-full sm:w-auto shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
             >
               START PROJECT BRIEF <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition-transform duration-500" />
             </Link>
             <Link 
               href="/bundles"
               className="font-ui text-[14px] font-bold tracking-[0.5em] uppercase text-dark/50 hover:text-dark transition-colors"
             >
               View Commercial Packages
             </Link>
           </div>
        </section>

      </div>
    </main>
  )
}

function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}
