'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  ChevronLeft, 
  RotateCcw, 
  CheckCircle2, 
  Target, 
  Activity, 
  FileText, 
  Image as ImageIcon, 
  Video, 
  Map as MapIcon, 
  Box, 
  Zap, 
  ShieldAlert,
  Search,
  Hammer,
  ClipboardList,
  Copy,
  ExternalLink,
  ChevronRight
} from 'lucide-react'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'

// --- Types ---

type Step = 'outcome' | 'site' | 'style' | 'result' | 'comparison'

interface Option {
  id: string
  title: string
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any
  routeTo?: string
}

interface Result {
  id: string
  title: string
  description: string
  deliverables: string[]
  services: { name: string; href: string }[]
  bundles: { name: string; href: string }[]
  samples: { name: string; href: string }[]
  caveat?: string
  ctaLabel: string
}

// --- Data ---

const OUTCOME_OPTIONS: Option[] = [
  {
    id: 'inspect',
    title: 'Inspect a building, roof or asset',
    description: 'For roof condition, gutters, facades, cladding, plant areas, infrastructure, or commercial property records.',
    icon: Search,
    routeTo: 'inspection-evidence'
  },
  {
    id: 'measure',
    title: 'Measure or map a site',
    description: 'For orthomosaics, point clouds, stockpile volumes, cut/fill, land mapping, or site planning.',
    icon: MapIcon,
    routeTo: 'survey-mapping'
  },
  {
    id: 'track',
    title: 'Track project progress',
    description: 'For construction progress records, repeat site captures, stakeholder updates, or investor reporting.',
    icon: Hammer,
    routeTo: 'construction-progress'
  },
  {
    id: 'evidence',
    title: 'Evidence damage or an incident',
    description: 'For storm damage, fire damage, flood impact, insurance evidence or access-restricted condition records.',
    icon: ShieldAlert,
    routeTo: 'insurance-incident'
  },
  {
    id: 'marketing',
    title: 'Create marketing visuals',
    description: 'For aerial photography, drone video, venue content, property marketing, website hero video or campaign assets.',
    icon: Video,
    routeTo: 'aerial-media'
  },
  {
    id: 'thermal',
    title: 'Capture thermal data',
    description: 'For heat loss, solar panel anomalies, roof temperature issues, or building envelope concerns.',
    icon: Zap,
    routeTo: 'thermal-intelligence'
  },
  {
    id: 'solar',
    title: 'Inspect solar or energy assets',
    description: 'For rooftop solar, solar farms, utilities, renewable assets or energy infrastructure.',
    icon: Activity,
    routeTo: 'solar-energy'
  },
  {
    id: '3d',
    title: 'Create immersive 3D visualisation',
    description: 'For TFTS 3Ds, photogrammetry, 3D models, digital twin-style records, or 360 panoramas.',
    icon: Box,
    routeTo: 'immersive-3d'
  },
  {
    id: 'fm',
    title: 'Support facilities management',
    description: 'For planned maintenance, portfolio inspections, roof records, plant areas and asset condition visibility.',
    icon: ClipboardList,
    routeTo: 'fm-records'
  },
  {
    id: 'not-sure',
    title: 'I am not sure yet',
    description: 'Show the main output types and help me compare them.',
    icon: Target,
    routeTo: 'comparison'
  }
]

const SITE_TYPE_OPTIONS: Option[] = [
  { id: 'roof', title: 'Commercial roof', description: 'Office, warehouse, retail or industrial roof area.' },
  { id: 'building', title: 'Commercial building', description: 'Facade, glazing and envelope inspection.' },
  { id: 'estate', title: 'Industrial estate', description: 'Portfolio management and asset tracking.' },
  { id: 'construction', title: 'Construction site', description: 'Active development or civil engineering project.' },
  { id: 'solar', title: 'Solar PV system', description: 'Rooftop array or ground-mount solar farm.' },
  { id: 'infrastructure', title: 'Infrastructure asset', description: 'Bridge, tower, mast or utility corridor.' },
  { id: 'heritage', title: 'Heritage building', description: 'Sensitive condition monitoring for listed assets.' },
  { id: 'land', title: 'Development land', description: 'Greenfield or brownfield site mapping.' }
]

const STYLE_OPTIONS: Option[] = [
  { id: 'visual', title: 'Visual evidence', description: 'Images, annotated defect photos, or inspection summaries.' },
  { id: 'technical', title: 'Technical data', description: 'Maps, point clouds, volume calculations or 3D models.' },
  { id: 'report', title: 'Report or evidence pack', description: 'PDF summaries, insurance support or FM documents.' },
  { id: 'media', title: 'Media assets', description: 'Edited video, social clips, or property visuals.' },
  { id: 'interactive', title: 'Interactive visualisation', description: 'TFTS 3D, 360 panorama or immersive viewer.' }
]

const RESULTS: Record<string, Result> = {
  'inspection-evidence': {
    id: 'inspection-evidence',
    title: 'Inspection Evidence Pack',
    description: 'This is best when you need clear visual records of roofs, facades, gutters, cladding, plant areas, or access-restricted assets.',
    deliverables: ['High-resolution image set', 'Annotated defect images', 'PDF inspection summary', 'Contractor briefing pack'],
    services: [
      { name: 'Drone Inspection', href: '/services/drone-inspection' },
      { name: 'Roof Inspections', href: '/services/roof-inspections' },
      { name: 'Building Envelope Inspections', href: '/services/building-envelope-inspections' }
    ],
    bundles: [
      { name: 'Roof Intelligence Pack', href: '/bundles#roof-intelligence-pack' },
      { name: 'Building Envelope & Asset Condition Pack', href: '/bundles#building-envelope-asset-condition-pack' }
    ],
    samples: [
      { name: 'Roof Inspection Image Set', href: '/sample-deliverables' },
      { name: 'Annotated Defect Image Pack', href: '/sample-deliverables' }
    ],
    ctaLabel: 'Request Inspection Brief'
  },
  'survey-mapping': {
    id: 'survey-mapping',
    title: 'Survey & Mapping Data',
    description: 'This is best when you need maps, measurements, 3D site data, stockpile volumes, or survey-supported outputs.',
    deliverables: ['Orthomosaic map', 'Point cloud', '3D model', 'Stockpile volume report', 'Cut and fill calculation'],
    services: [
      { name: 'Surveying & Mapping', href: '/services/surveying-mapping' },
      { name: 'Orthomosaic Mapping', href: '/services/orthomosaic-mapping' },
      { name: 'Volumetric Surveys', href: '/services/volumetric-surveys' }
    ],
    bundles: [
      { name: 'Survey Data Pack', href: '/bundles#survey-data-pack' }
    ],
    samples: [
      { name: 'Orthomosaic Map', href: '/sample-deliverables' },
      { name: 'Drone Point Cloud', href: '/sample-deliverables' }
    ],
    caveat: 'Survey-grade outputs require appropriate methodology, control, processing and accuracy verification.',
    ctaLabel: 'Discuss Survey Outputs'
  },
  'construction-progress': {
    id: 'construction-progress',
    title: 'Construction Progress Records',
    description: 'This is best when you need consistent visual records of a project over time for reporting and stakeholder updates.',
    deliverables: ['Progress image archive', 'Monthly progress report', 'Before-and-after comparisons', 'Edited progress video'],
    services: [
      { name: 'Construction Monitoring', href: '/services/construction-monitoring' },
      { name: 'Construction Progress Photography', href: '/services/construction-progress-photography' }
    ],
    bundles: [
      { name: 'Construction Progress Pack', href: '/bundles#construction-progress-pack' }
    ],
    samples: [
      { name: 'Construction Progress Image Archive', href: '/sample-deliverables' },
      { name: 'Construction Progress Report', href: '/sample-deliverables' }
    ],
    ctaLabel: 'Plan Construction Monitoring'
  },
  'insurance-incident': {
    id: 'insurance-incident',
    title: 'Insurance & Incident Evidence Pack',
    description: 'This is best when you need visual evidence after storm damage, fire, flood, or a property incident.',
    deliverables: ['Damage evidence image set', 'Annotated damage images', 'Condition summary', 'Insurance evidence pack'],
    services: [
      { name: 'Insurance & Loss Adjuster Surveys', href: '/services/insurance-loss-adjuster-surveys' },
      { name: 'Emergency Drone Response', href: '/services/emergency-response' }
    ],
    bundles: [
      { name: 'Insurance & Incident Evidence Pack', href: '/bundles#insurance-incident-evidence-pack' }
    ],
    samples: [
      { name: 'Insurance Evidence Pack', href: '/sample-deliverables' },
      { name: 'Annotated Defect Image Pack', href: '/sample-deliverables' }
    ],
    caveat: 'Drone evidence can support insurance documentation, but acceptance depends on the insurer and claim context.',
    ctaLabel: 'Request Evidence Capture'
  },
  'aerial-media': {
    id: 'aerial-media',
    title: 'Aerial Media Pack',
    description: 'This is best when you need high-quality visuals for property marketing, venues, events, or commercial campaigns.',
    deliverables: ['High-resolution image pack', 'Edited drone video', 'Social media clips', 'Website hero footage'],
    services: [
      { name: 'Aerial Photography & Film', href: '/services/aerial-photography-film' },
      { name: 'Events & Media', href: '/services/events-media' },
      { name: 'FPV Drone Filming', href: '/services/fpv-drone-filming' }
    ],
    bundles: [
      { name: 'Visual Sales Pack', href: '/bundles#visual-sales-pack' }
    ],
    samples: [
      { name: 'Aerial Media Pack', href: '/sample-deliverables' },
      { name: 'FPV Flythrough Video', href: '/sample-deliverables' }
    ],
    ctaLabel: 'Create Media Brief'
  },
  'thermal-intelligence': {
    id: 'thermal-intelligence',
    title: 'Thermal Evidence Pack',
    description: 'This is best when temperature anomalies may help identify heat loss, solar panel issues, or asset condition concerns.',
    deliverables: ['Thermal image set', 'Visual reference images', 'Thermal anomaly summary', 'Solar hotspot evidence'],
    services: [
      { name: 'Thermal Imaging', href: '/services/thermal-imaging' },
      { name: 'Solar Panel Inspections', href: '/services/solar-panel-inspections' }
    ],
    bundles: [
      { name: 'Solar & Energy Asset Pack', href: '/bundles#solar-energy-asset-pack' },
      { name: 'Roof Intelligence Pack', href: '/bundles#roof-intelligence-pack' }
    ],
    samples: [
      { name: 'Thermal Image Set', href: '/sample-deliverables' },
      { name: 'Solar Panel Anomaly Evidence Pack', href: '/sample-deliverables' }
    ],
    caveat: 'Thermal imaging indicates temperature anomalies. Findings should be interpreted in context and verified where required.',
    ctaLabel: 'Request Thermal Survey'
  },
  'solar-energy': {
    id: 'solar-energy',
    title: 'Solar & Energy Asset Evidence Pack',
    description: 'This is best when you need drone visual or thermal evidence for solar PV, utility assets or renewable energy sites.',
    deliverables: ['Visual image set', 'Thermal image set', 'Solar anomaly evidence', 'Asset condition notes'],
    services: [
      { name: 'Solar Panel Inspections', href: '/services/solar-panel-inspections' },
      { name: 'Thermal Imaging', href: '/services/thermal-imaging' },
      { name: 'Utilities & Energy Inspections', href: '/services/utilities-energy-inspections' }
    ],
    bundles: [
      { name: 'Solar & Energy Asset Pack', href: '/bundles#solar-energy-asset-pack' }
    ],
    samples: [
      { name: 'Solar Panel Anomaly Evidence Pack', href: '/sample-deliverables' },
      { name: 'Thermal Image Set', href: '/sample-deliverables' }
    ],
    ctaLabel: 'Request Solar Inspection'
  },
  'immersive-3d': {
    id: 'immersive-3d',
    title: 'Immersive 3D Visualisation',
    description: 'This is best when you need a site, building, or asset to be explored visually rather than viewed as flat media.',
    deliverables: ['TFTS 3D', '3D model', '360 aerial panorama', 'Web-ready viewer'],
    services: [
      { name: 'TFTS 3D Capture', href: '/services/tfts-3d' },
      { name: 'Drone Digital Twin Capture', href: '/services/digital-twin-capture' },
      { name: 'Drone Photogrammetry', href: '/services/photogrammetry' }
    ],
    bundles: [
      { name: 'Immersive Digital Capture Pack', href: '/bundles#immersive-digital-capture-pack' }
    ],
    samples: [
      { name: 'TFTS 3D Visualisation', href: '/sample-deliverables' },
      { name: 'Digital Twin-Style Visual Record', href: '/sample-deliverables' }
    ],
    caveat: 'TFTS 3Ds are visualisation-first assets. Measurement-critical outputs should use photogrammetry or LiDAR.',
    ctaLabel: 'Request Immersive Capture Brief'
  },
  'fm-records': {
    id: 'fm-records',
    title: 'FM Inspection & Asset Record Pack',
    description: 'This is best when facilities teams need planned maintenance evidence, roof records, or asset condition visibility.',
    deliverables: ['Roof inspection image set', 'Annotated defect images', 'PDF inspection summary', 'Building envelope condition pack'],
    services: [
      { name: 'Facilities Management Inspections', href: '/services/facilities-management-inspections' },
      { name: 'Roof Inspections', href: '/services/roof-inspections' },
      { name: 'Building Envelope Inspections', href: '/services/building-envelope-inspections' }
    ],
    bundles: [
      { name: 'Roof Intelligence Pack', href: '/bundles#roof-intelligence-pack' },
      { name: 'Building Envelope & Asset Condition Pack', href: '/bundles#building-envelope-asset-condition-pack' }
    ],
    samples: [
      { name: 'Roof Inspection Image Set', href: '/sample-deliverables' },
      { name: 'Building Envelope Condition Pack', href: '/sample-deliverables' }
    ],
    ctaLabel: 'Start FM Inspection Brief'
  }
}

// --- Components ---

export default function OutputSelectorPage() {
  const [step, setStep] = useState<Step>('outcome')
  const [answers, setAnswers] = useState({
    outcome: '',
    site: '',
    style: ''
  })
  const [copied, setCopied] = useState(false)

  const handleSelect = (id: string, nextStep: Step) => {
    if (step === 'outcome') {
       if (id === 'not-sure') {
         setStep('comparison')
         return
       }
       setAnswers(prev => ({ ...prev, outcome: id }))
    } else if (step === 'site') {
       setAnswers(prev => ({ ...prev, site: id }))
    } else if (step === 'style') {
       setAnswers(prev => ({ ...prev, style: id }))
    }
    setStep(nextStep)
  }

  const resultId = useMemo(() => {
    const outcome = OUTCOME_OPTIONS.find(o => o.id === answers.outcome)
    return outcome?.routeTo || 'inspection-evidence'
  }, [answers.outcome])

  const result = RESULTS[resultId]

  const copySummary = () => {
    const text = `I need an output for: ${OUTCOME_OPTIONS.find(o => o.id === answers.outcome)?.title}. 
Site type: ${SITE_TYPE_OPTIONS.find(o => o.id === answers.site)?.title}. 
Style: ${STYLE_OPTIONS.find(o => o.id === answers.style)?.title}.
Recommended Route: ${result?.title}.`
    
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const reset = () => {
    setStep('outcome')
    setAnswers({ outcome: '', site: '', style: '' })
  }

  return (
    <main className="bg-dark text-white min-h-screen pt-40 pb-32">
      <div className="max-w-[1200px] mx-auto px-8 md:px-20">
        
        {/* Progress */}
        {step !== 'result' && step !== 'comparison' && (
          <div className="mb-12 flex gap-4">
             {['outcome', 'site', 'style'].map((s, i) => (
               <div key={s} className="flex-1 h-1 bg-white/5 relative">
                  <motion.div 
                    className="absolute inset-0 bg-accent origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: ['outcome', 'site', 'style'].indexOf(step) >= i ? 1 : 0 }}
                  />
               </div>
             ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          {step === 'outcome' && (
            <motion.div 
              key="outcome"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="mb-16">
                <SectionTag number="01" text="Requirement" />
                <h1 className="text-[clamp(2.25rem,3.7vw,3.5rem)] font-extralight tracking-[-0.04em] leading-[1.02] text-white mt-6 mb-5 uppercase">
                  What do you need the <br/><span className="text-accent underline underline-offset-8 decoration-accent/30">Drone Output to help you do?</span>
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/5">
                {OUTCOME_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(opt.id, 'site')}
                    className="bg-dark p-10 text-left group hover:bg-accent/[0.03] transition-colors border border-transparent hover:border-accent/10"
                  >
                    <div className="flex items-center gap-6 mb-6">
                      <div className="p-4 bg-white/5 rounded-sm">
                         <opt.icon className="w-6 h-6 text-accent/50" />
                      </div>
                      <h3 className="font-display text-2xl text-white uppercase tracking-widest group-hover:text-accent transition-colors">{opt.title}</h3>
                    </div>
                    <p className="font-body text-[11px] text-white/40 uppercase tracking-widest leading-relaxed">
                      {opt.description}
                    </p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'site' && (
            <motion.div 
              key="site"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="mb-16">
                <button onClick={() => setStep('outcome')} className="flex items-center gap-2 font-ui text-[9px] tracking-widest uppercase text-white/30 hover:text-white mb-8">
                  <ChevronLeft className="w-3 h-3" /> Back
                </button>
                <SectionTag number="02" text="Environment" />
                <h1 className="text-[clamp(2.25rem,3.7vw,3.5rem)] font-extralight tracking-[-0.04em] leading-[1.02] text-white mt-6 mb-5 uppercase">
                  What type of <br/><span className="text-accent">Site or Asset is involved?</span>
                </h1>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/5">
                {SITE_TYPE_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(opt.id, 'style')}
                    className="bg-dark p-8 text-left group hover:bg-accent/[0.03] transition-colors border border-transparent hover:border-accent/10"
                  >
                    <h3 className="font-display text-xl text-white uppercase tracking-widest mb-4 group-hover:text-accent transition-colors">{opt.title}</h3>
                    <p className="font-body text-[10px] text-white/30 uppercase tracking-widest leading-relaxed">
                      {opt.description}
                    </p>
                  </button>
                ))}
                <button
                    onClick={() => handleSelect('not-sure', 'style')}
                    className="bg-dark p-8 text-left group hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/10"
                  >
                    <h3 className="font-display text-xl text-white/40 uppercase tracking-widest mb-4 group-hover:text-white transition-colors">Not sure</h3>
                    <p className="font-body text-[10px] text-white/20 uppercase tracking-widest leading-relaxed">
                      I am not sure of the site type yet.
                    </p>
                  </button>
              </div>
            </motion.div>
          )}

          {step === 'style' && (
            <motion.div 
              key="style"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="mb-16">
                <button onClick={() => setStep('site')} className="flex items-center gap-2 font-ui text-[9px] tracking-widest uppercase text-white/30 hover:text-white mb-8">
                  <ChevronLeft className="w-3 h-3" /> Back
                </button>
                <SectionTag number="03" text="Format" />
                <h1 className="text-[clamp(2.25rem,3.7vw,3.5rem)] font-extralight tracking-[-0.04em] leading-[1.02] text-white mt-6 mb-5 uppercase">
                  What type of <br/><span className="text-accent underline underline-offset-8">Deliverable would be most useful?</span>
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/5">
                {STYLE_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(opt.id, 'result')}
                    className="bg-dark p-10 text-left group hover:bg-accent/[0.03] transition-colors border border-transparent hover:border-accent/10"
                  >
                    <h3 className="font-display text-2xl text-white uppercase tracking-widest mb-6 group-hover:text-accent transition-colors">{opt.title}</h3>
                    <p className="font-body text-[11px] text-white/40 uppercase tracking-widest leading-relaxed">
                      {opt.description}
                    </p>
                  </button>
                ))}
                <button
                    onClick={() => handleSelect('not-sure', 'result')}
                    className="bg-dark p-10 text-left group hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/10"
                  >
                    <h3 className="font-display text-2xl text-white/40 uppercase tracking-widest mb-6 group-hover:text-white transition-colors">Not sure yet</h3>
                    <p className="font-body text-[11px] text-white/20 uppercase tracking-widest leading-relaxed">
                      Recommend based on the project outcome.
                    </p>
                  </button>
              </div>
            </motion.div>
          )}

          {step === 'result' && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16"
            >
              <div className="lg:col-span-7">
                <button onClick={reset} className="flex items-center gap-2 font-ui text-[9px] tracking-widest uppercase text-white/30 hover:text-white mb-12">
                   <RotateCcw className="w-3 h-3" /> Restart Selector
                </button>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[1px] bg-accent" />
                  <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Recommended Output</span>
                </div>
                
                <h1 className="text-[clamp(2.25rem,3.7vw,3.5rem)] font-extralight tracking-[-0.04em] leading-[1.02] text-white mb-5 uppercase">
                   {result?.title}
                </h1>
                
                <p className="font-body text-xl text-white/60 leading-relaxed mb-12 uppercase tracking-widest">
                   {result?.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                   <div>
                      <h4 className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-6">Deliverables Included</h4>
                      <ul className="space-y-4">
                         {result?.deliverables.map(d => (
                           <li key={d} className="flex items-center gap-3">
                              <CheckCircle2 className="w-4 h-4 text-accent/50" />
                              <span className="font-ui text-[11px] tracking-widest text-white/70 uppercase">{d}</span>
                           </li>
                         ))}
                      </ul>
                   </div>
                   <div>
                      <h4 className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-6">Sample Deliverables</h4>
                      <ul className="space-y-4">
                         {result?.samples.map(s => (
                           <li key={s.name}>
                              <Link href={s.href} className="flex items-center gap-3 text-white/40 hover:text-white transition-colors group">
                                 <ImageIcon className="w-4 h-4 group-hover:text-accent transition-colors" />
                                 <span className="font-ui text-[11px] tracking-widest uppercase">{s.name}</span>
                              </Link>
                           </li>
                         ))}
                      </ul>
                   </div>
                </div>

                {result?.caveat && (
                  <div className="mb-16 p-8 bg-white/[0.02] border border-white/5">
                     <p className="font-body text-[10px] text-white/30 uppercase tracking-[0.2em] italic leading-relaxed">
                        {result.caveat}
                     </p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-6">
                   <Link 
                     href={`/brief?output=${result?.id}&service=${result?.services[0].href.split('/').pop()}&source=choose-your-output&tool=selector&cta=${result?.ctaLabel}`}
                     className="bg-white text-dark px-10 py-6 font-display text-2xl tracking-[0.1em] transition-all hover:bg-accent flex items-center justify-center gap-4 text-center"
                   >
                     {result?.ctaLabel} <ArrowRight className="w-5 h-5" />
                   </Link>
                   <button 
                     onClick={copySummary}
                     className="flex items-center justify-center gap-4 border border-white/10 px-10 py-6 font-ui text-[11px] tracking-[0.3em] uppercase text-white hover:bg-white/5 transition-all"
                   >
                     <Copy className="w-4 h-4" /> {copied ? 'Copied to clipboard' : 'Copy Output Summary'}
                   </button>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-8">
                 <div className="bg-white/[0.02] border border-white/5 p-12">
                    <h4 className="font-display text-xl text-white uppercase tracking-widest mb-8">Related Services</h4>
                    <div className="space-y-4">
                       {result?.services.map(s => (
                         <Link key={s.name} href={s.href} className="flex items-center justify-between p-6 bg-dark hover:bg-accent/5 border border-white/5 hover:border-accent/20 transition-all group">
                            <span className="font-ui text-[11px] tracking-widest uppercase text-white/50 group-hover:text-white">{s.name}</span>
                            <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-accent transition-colors" />
                         </Link>
                       ))}
                    </div>
                 </div>

                 <div className="bg-accent/5 border border-accent/10 p-12">
                    <h4 className="font-display text-xl text-accent uppercase tracking-widest mb-8">Commercial Bundles</h4>
                    <div className="space-y-4">
                       {result?.bundles.map(b => (
                         <Link key={b.name} href={b.href} className="flex items-center justify-between p-6 bg-dark/40 hover:bg-accent/10 border border-accent/10 transition-all group">
                            <span className="font-ui text-[11px] tracking-widest uppercase text-accent/70 group-hover:text-accent">{b.name}</span>
                            <ArrowRight className="w-3 h-3 text-accent/30 group-hover:text-accent transition-colors" />
                         </Link>
                       ))}
                    </div>
                 </div>
              </div>
            </motion.div>
          )}

          {step === 'comparison' && (
            <motion.div 
              key="comparison"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="mb-16">
                 <button onClick={reset} className="flex items-center gap-2 font-ui text-[9px] tracking-widest uppercase text-white/30 hover:text-white mb-12">
                    <RotateCcw className="w-3 h-3" /> Start Over
                 </button>
                 <SectionTag number="Compare" text="Output Types" />
                 <h1 className="text-[clamp(2.25rem,3.7vw,3.5rem)] font-extralight tracking-[-0.04em] leading-[1.02] text-white mt-6 mb-5 uppercase">
                    Not Sure? <span className="text-accent">Compare Output Families</span>
                 </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/5 mb-24">
                 {[
                   { title: 'Inspection Evidence', icon: Search, best: 'Roofs, facades, assets, damage, maintenance and contractor scoping.' },
                   { title: 'Survey Data', icon: MapIcon, best: 'Maps, point clouds, measurements, volumes and site planning.' },
                   { title: 'Progress Records', icon: Hammer, best: 'Construction updates, repeat visits and stakeholder reporting.' },
                   { title: 'Media Assets', icon: Video, best: 'Marketing, property, venues, events and social content.' },
                   { title: 'Thermal Evidence', icon: Zap, best: 'Heat loss, solar anomalies, roof issues and asset temperature review.' },
                   { title: '3D Visualisation', icon: Box, best: 'TFTS 3Ds, photogrammetry, immersive viewing and digital twin records.' }
                 ].map(item => (
                   <div key={item.title} className="bg-dark p-10 flex flex-col h-full">
                      <div className="p-4 bg-white/5 w-fit rounded-sm mb-8">
                         <item.icon className="w-6 h-6 text-accent/50" />
                      </div>
                      <h3 className="font-display text-2xl text-white uppercase tracking-widest mb-6">{item.title}</h3>
                      <div className="mb-4">
                         <span className="font-ui text-[9px] tracking-widest uppercase text-accent block mb-2">Best For:</span>
                         <p className="font-body text-[11px] text-white/40 uppercase tracking-widest leading-relaxed">{item.best}</p>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="text-center p-20 bg-white/[0.02] border border-white/5">
                 <h2 className="font-display text-4xl text-white uppercase tracking-widest mb-8">Still Not Sure?</h2>
                 <p className="font-body text-sm text-white/40 uppercase tracking-widest max-w-2xl mx-auto leading-relaxed mb-12">
                    Use the Project Brief Assistant for a guided multi-step scoping process that maps your requirement to a specific commercial service.
                 </p>
                 <Link href="/project-brief-assistant" className="inline-flex items-center gap-6 bg-accent text-dark px-12 py-6 font-display text-2xl tracking-widest hover:bg-white transition-all">
                    START PROJECT BRIEF ASSISTANT <ArrowRight className="w-6 h-6" />
                 </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  )
}
