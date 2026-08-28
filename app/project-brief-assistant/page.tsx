'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Target, 
  Box, 
  Shield, 
  Clock, 
  MapPin, 
  Activity, 
  AlertTriangle,
  ChevronRight,
  Info
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// --- Types ---

type StepId = 'landing' | 'intent' | 'site-type' | 'location' | 'outcomes' | 'urgency' | 'constraints' | 'recommendation'

interface AssistantState {
  intent: string
  siteType: string
  location: string
  deliverables: string[]
  urgency: string
  constraints: string[]
}

// --- Data ---

const INTENT_OPTIONS = [
  { id: 'inspection', label: 'Inspect a building, roof or asset', desc: 'Route toward Drone Inspection, Roof Inspections, Building Envelope, FM' },
  { id: 'survey', label: 'Survey, map or measure a site', desc: 'Route toward Surveying & Mapping, Orthomosaic, Photogrammetry, LiDAR' },
  { id: 'construction', label: 'Monitor construction or project progress', desc: 'Route toward Construction Monitoring, Progress Photography, Time-Lapse' },
  { id: 'insurance', label: 'Capture evidence for insurance, damage or an incident', desc: 'Route toward Insurance & Claims, Emergency Response, Thermal Imaging' },
  { id: 'media', label: 'Create aerial photography or video', desc: 'Route toward Aerial Photography & Film, Events & Media, FPV' },
  { id: 'visualisation', label: 'Create immersive 3D visualisation', desc: 'Route toward Gaussian Splat, Digital Twin Capture, Photogrammetry' },
  { id: 'energy', label: 'Inspect solar panels or energy assets', desc: 'Route toward Solar Panel Inspections, Thermal Imaging, Utilities' },
  { id: 'not-sure', label: 'I’m not sure yet', desc: 'We will help you identify the right route based on your project goals' },
]

const SITE_TYPES = [
  'Commercial building', 'Industrial site', 'Construction site', 
  'Residential block / managed property', 'Retail park', 'School / public estate',
  'Infrastructure asset', 'Utility / energy asset', 'Solar PV installation',
  'Farm / rural estate', 'Heritage building', 'Venue / event location',
  'Land / development site', 'Other / not sure'
]

const DELIVERABLE_OPTIONS = [
  'High-resolution image set', 'Annotated inspection images', 'PDF inspection summary',
  'Thermal image set', 'Edited drone video', 'Social media clips',
  'Orthomosaic map', 'Point cloud', '3D model', 'Gaussian Splat',
  'Digital twin-style viewer', '360 aerial panorama', 'Stockpile volume report',
  'Cut and fill calculation', 'Construction progress report', 'Insurance evidence pack',
  'Contractor briefing pack', 'Not sure yet'
]

const URGENCY_OPTIONS = [
  { id: 'urgent', label: 'Urgent / incident-related', desc: 'Required as soon as possible' },
  { id: 'week', label: 'Needed this week', desc: 'Short-term requirement' },
  { id: 'month', label: 'Needed within 2–4 weeks', desc: 'Standard project lead time' },
  { id: 'planning', label: 'Planning ahead', desc: 'Future requirement' },
  { id: 'ongoing', label: 'Repeat / ongoing requirement', desc: 'Contract or recurring service' },
  { id: 'not-sure', label: 'Not sure', desc: 'Timeline to be confirmed' }
]

const CONSTRAINT_OPTIONS = [
  'Busy public area', 'City centre', 'Near airport or controlled airspace',
  'Live construction site', 'Industrial hazards', 'Railway / highway nearby',
  'Powerlines or utilities nearby', 'Crowds or public access',
  'Limited take-off area', 'Indoor flight', 'Multiple sites', 'Unknown / not sure'
]

// --- Helper Functions ---

function getRecommendation(state: AssistantState) {
  const { intent, siteType } = state
  
  if (intent === 'inspection' || intent === 'insurance' || siteType.includes('building') || siteType.includes('Retail park')) {
    return {
      service: 'Drone Inspection',
      serviceSlug: 'drone-inspection',
      bundle: 'Roof Intelligence Pack',
      bundleSlug: 'roof-intelligence-pack',
      summary: 'Based on your answers, this project looks like a roof or building inspection requirement. EntireFM Drone would usually start with drone inspection capture and, where useful, add thermal imaging or annotated reporting.',
      deliverables: ['High-resolution image set', 'Annotated inspection images', 'PDF inspection summary', 'Optional thermal image set', 'Contractor briefing pack'],
      considerations: ['Site access', 'Nearby people and property', 'Airspace review', 'Weather window', 'Required reporting level']
    }
  }

  if (intent === 'survey' || siteType.includes('Land')) {
    return {
      service: 'Surveying & Mapping',
      serviceSlug: 'surveying-mapping',
      bundle: 'Survey Data Pack',
      bundleSlug: 'survey-data-pack',
      summary: 'Your requirement aligns with our Surveying & Mapping services. We provide high-accuracy spatial data including orthomosaics, point clouds, and volumetric analysis for land and site development.',
      deliverables: ['Orthomosaic map', 'Point cloud', '3D model', 'Stockpile volume report', 'Cut and fill calculation'],
      considerations: ['GCP placement', 'Required accuracy (Relative vs Absolute)', 'Airspace permissions', 'Site vegetation', 'Data format requirements']
    }
  }

  if (intent === 'construction' || siteType === 'Construction site') {
    return {
      service: 'Construction Monitoring',
      serviceSlug: 'construction-monitoring',
      bundle: 'Construction Progress Pack',
      bundleSlug: 'construction-progress-pack',
      summary: 'We recommend our Construction Monitoring service. This provides a repeatable, georeferenced visual record of your project from groundworks to handover, perfect for stakeholder reporting and project tracking.',
      deliverables: ['Progress image archive', 'Monthly stakeholder update', 'Construction progress report', 'Edited progress video', 'Repeat viewpoint captures'],
      considerations: ['Flight frequency', 'On-site safety protocols', 'Stakeholder access to data', 'Long-term time-lapse goals']
    }
  }

  if (intent === 'media' || intent === 'visualisation') {
    return {
      service: 'Aerial Photography & Film',
      serviceSlug: 'aerial-photography-film',
      bundle: 'Visual Sales Pack',
      bundleSlug: 'visual-sales-pack',
      summary: 'For high-impact visual content, we recommend our Aerial Media services. We deliver cinematic 4K/6K footage and high-resolution photography tailored for marketing, events, and brand campaigns.',
      deliverables: ['High-resolution image pack', 'Edited drone video', 'Social media clips', 'Website hero footage', 'FPV flythrough where suitable'],
      considerations: ['Creative brief', 'Weather and lighting', 'Public and crowd safety', 'Advanced flight authorisations']
    }
  }

  if (intent === 'visualisation' || intent === 'visualisation') {
    return {
      service: 'Gaussian Splat Capture',
      serviceSlug: 'gaussian-splat-capture',
      bundle: 'Immersive Digital Capture Pack',
      bundleSlug: 'immersive-digital-capture-pack',
      summary: 'For immersive 3D visualisation, Gaussian Splatting provides the highest level of visual fidelity. We create photorealistic digital replicas that allow stakeholders to navigate the site virtually.',
      deliverables: ['Gaussian Splat', '3D model', 'Screenshot set', 'Flythrough video', 'Web-ready viewer'],
      considerations: ['Visual vs Measurement priority', 'Site lighting/weather', 'Viewing platform (Web/Desktop/VR)', 'Data hosting']
    }
  }

  if (intent === 'energy' || siteType.includes('Solar') || siteType.includes('Utility')) {
    return {
      service: 'Solar Panel Inspections',
      serviceSlug: 'solar-panel-inspections',
      bundle: 'Solar & Energy Asset Pack',
      bundleSlug: 'solar-energy-asset-pack',
      summary: 'Specialised energy asset inspection using high-resolution visual and thermal sensors. We identify anomalies, faults, and performance issues across large-scale solar PV and utility infrastructure.',
      deliverables: ['Visual image set', 'Thermal image set', 'Solar anomaly evidence', 'Asset condition summary', 'Maintenance evidence pack'],
      considerations: ['Thermal conditions (Irradiance)', 'Site hazards (High Voltage)', 'Data analysis depth', 'Integration with asset management software']
    }
  }

  // Default
  return {
    service: 'Drone Scoping & Advisory',
    serviceSlug: 'drone-inspection',
    bundle: 'Custom Project Scoping',
    bundleSlug: 'roof-intelligence-pack',
    summary: 'Based on your requirements, we recommend a custom scoping session. EntireFM Drone will review your project goals and advise on the most effective drone capture strategy.',
    deliverables: ['Custom project plan', 'Scoping document', 'Technical advice', 'Deliverable recommendation'],
    considerations: ['Operational feasibility', 'Regulatory compliance', 'Equipment selection', 'Budget alignment']
  }
}

// --- Components ---

export default function ProjectBriefAssistant() {
  const router = useRouter()
  const [step, setStep] = useState<StepId>('landing')
  const [answers, setAnswers] = useState<AssistantState>({
    intent: '',
    siteType: '',
    location: '',
    deliverables: [],
    urgency: '',
    constraints: []
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [recommendation, setRecommendation] = useState<any>(null)

  const progress = {
    landing: 0,
    intent: 15,
    'site-type': 30,
    location: 45,
    outcomes: 60,
    urgency: 75,
    constraints: 90,
    recommendation: 100
  }[step]

  const nextStep = () => {
    if (step === 'landing') setStep('intent')
    else if (step === 'intent') setStep('site-type')
    else if (step === 'site-type') setStep('location')
    else if (step === 'location') setStep('outcomes')
    else if (step === 'outcomes') setStep('urgency')
    else if (step === 'urgency') setStep('constraints')
    else if (step === 'constraints') {
      const rec = getRecommendation(answers)
      setRecommendation(rec)
      setStep('recommendation')
    }
  }

  const prevStep = () => {
    if (step === 'intent') setStep('landing')
    else if (step === 'site-type') setStep('intent')
    else if (step === 'location') setStep('site-type')
    else if (step === 'outcomes') setStep('location')
    else if (step === 'urgency') setStep('outcomes')
    else if (step === 'constraints') setStep('urgency')
    else if (step === 'recommendation') setStep('constraints')
  }

  const toggleAnswer = (key: 'deliverables' | 'constraints', value: string) => {
    setAnswers(prev => {
      const list = [...prev[key]]
      if (list.includes(value)) {
        return { ...prev, [key]: list.filter(v => v !== value) }
      } else {
        return { ...prev, [key]: [...list, value] }
      }
    })
  }

  const handleFinish = () => {
    const params = new URLSearchParams()
    if (recommendation.serviceSlug) params.set('service', recommendation.serviceSlug)
    if (recommendation.bundleSlug) params.set('package', recommendation.bundleSlug)
    if (answers.location) params.set('location', answers.location)
    if (answers.siteType) params.set('site-type', answers.siteType)
    if (answers.urgency) params.set('urgency', answers.urgency)
    
    // Analytics/Source
    params.set('source', 'project-brief-assistant')
    params.set('tool', 'assistant')
    params.set('cta', 'SUBMIT PROJECT BRIEF')
    
    // Map intent ID to brief form string
    const intentMap: Record<string, string> = {
      'inspection': 'Inspect a roof, building or asset',
      'survey': 'Survey or map a site',
      'construction': 'Monitor construction progress',
      'insurance': 'Capture evidence for insurance or damage',
      'media': 'Create aerial photography or video',
      'visualisation': 'Create a Gaussian Splat or immersive 3D model',
      'energy': 'Inspect solar panels or energy assets'
    }
    
    if (answers.intent && intentMap[answers.intent]) {
      params.set('outcome', intentMap[answers.intent])
    }
    
    router.push(`/brief?${params.toString()}`)
  }

  return (
    <main className="bg-dark text-white min-h-screen pt-40 pb-32">
      <div className="max-w-[1000px] mx-auto px-8 md:px-20">
        
        {/* Progress Bar */}
        {step !== 'landing' && step !== 'recommendation' && (
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent">Scoping Progress</span>
              <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/30">{progress}%</span>
            </div>
            <div className="w-full h-[2px] bg-white/10 relative">
              <motion.div 
                className="absolute left-0 top-0 h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: 'circOut' }}
              />
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {step === 'landing' && (
            <motion.section 
              key="landing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center md:text-left"
            >
              <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
                <div className="w-12 h-[1px] bg-accent" />
                <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Guided Scoping Tool</span>
              </div>
              <h1 className="font-display text-[8vw] md:text-[6vw] leading-[0.85] text-white mb-10 uppercase tracking-tighter">
                DRONE PROJECT <br/><span className="text-accent">BRIEF ASSISTANT</span>
              </h1>
              <p className="font-body text-xl md:text-2xl font-light text-white/50 max-w-3xl uppercase tracking-widest leading-relaxed mb-12">
                Tell us what you need to inspect, measure, monitor, film or visualise. The assistant will recommend the most relevant drone service, commercial bundle and deliverables before routing you into the project brief.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-16 justify-center md:justify-start">
                <button 
                  onClick={nextStep}
                  className="group flex items-center justify-center gap-6 bg-accent text-dark px-12 py-6 font-display text-2xl tracking-[0.1em] transition-all hover:bg-white"
                >
                  START ASSISTANT <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
                <Link 
                  href="/brief"
                  className="flex items-center justify-center gap-6 border border-white/10 px-12 py-6 font-display text-2xl tracking-[0.1em] text-white/60 hover:text-white hover:border-white/30 transition-all"
                >
                  SKIP TO PROJECT BRIEF
                </Link>
              </div>

              <div className="flex flex-wrap gap-x-12 gap-y-6 text-white/20 font-ui text-[9px] tracking-[0.3em] uppercase justify-center md:justify-start border-t border-white/5 pt-12">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent/30" />
                  <span>No drone terminology required</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent/30" />
                  <span>Output-led recommendations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent/30" />
                  <span>Service and package guidance</span>
                </div>
              </div>
            </motion.section>
          )}

          {step === 'intent' && (
            <motion.section 
              key="intent"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="font-display text-5xl text-white mb-6 uppercase tracking-tight">What do you need the drone output for?</h2>
              <p className="font-body text-white/40 uppercase tracking-widest mb-12 text-sm">Step 01: Defining the Project Intent</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {INTENT_OPTIONS.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => { setAnswers({...answers, intent: opt.id}); nextStep(); }}
                    className={`text-left p-8 border transition-all group ${answers.intent === opt.id ? 'border-accent bg-accent/5' : 'border-white/5 bg-white/[0.01] hover:border-white/20'}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-3 h-3 rounded-full border ${answers.intent === opt.id ? 'bg-accent border-accent' : 'border-white/20'}`} />
                      <ChevronRight className={`w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity`} />
                    </div>
                    <div className="font-display text-xl text-white uppercase tracking-widest mb-2 leading-tight">{opt.label}</div>
                    <div className="font-body text-[10px] text-white/30 uppercase tracking-widest leading-relaxed">{opt.desc}</div>
                  </button>
                ))}
              </div>
              
              <button onClick={prevStep} className="flex items-center gap-4 font-ui text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Start
              </button>
            </motion.section>
          )}

          {step === 'site-type' && (
            <motion.section 
              key="site-type"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="font-display text-5xl text-white mb-6 uppercase tracking-tight">What type of site or asset is involved?</h2>
              <p className="font-body text-white/40 uppercase tracking-widest mb-12 text-sm">Step 02: Site Classification</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {SITE_TYPES.map(opt => (
                  <button
                    key={opt}
                    onClick={() => { setAnswers({...answers, siteType: opt}); nextStep(); }}
                    className={`text-left p-6 border transition-all ${answers.siteType === opt ? 'border-accent bg-accent/5' : 'border-white/5 bg-white/[0.01] hover:border-white/20'}`}
                  >
                    <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/60 leading-tight">{opt}</div>
                  </button>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <button onClick={prevStep} className="flex items-center gap-4 font-ui text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button onClick={nextStep} className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-white">Skip Option</button>
              </div>
            </motion.section>
          )}

          {step === 'location' && (
            <motion.section 
              key="location"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="font-display text-5xl text-white mb-6 uppercase tracking-tight">Where is the project located?</h2>
              <p className="font-body text-white/40 uppercase tracking-widest mb-12 text-sm">Step 03: Operational Area</p>
              
              <div className="bg-white/[0.02] border border-white/5 p-12 mb-12">
                <div className="form-field mb-8">
                  <label className="block font-ui text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">Town, City or Postcode</label>
                  <div className="relative">
                    <MapPin className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-accent/40" />
                    <input 
                      type="text" 
                      placeholder="e.g. Sheffield, S1 1AA"
                      className="w-full bg-transparent border-b border-white/10 py-6 pl-10 font-display text-4xl text-white focus:outline-none focus:border-accent transition-colors uppercase placeholder:text-white/5"
                      value={answers.location}
                      onChange={e => setAnswers({...answers, location: e.target.value})}
                      autoFocus
                    />
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <button 
                    onClick={() => setAnswers({...answers, location: 'UK Wide / Multiple Sites'})}
                    className="font-ui text-[10px] tracking-[0.2em] uppercase text-accent hover:text-white transition-colors"
                  >
                    + UK Wide / Multiple Sites
                  </button>
                </div>
                <p className="mt-12 flex items-start gap-4 font-body text-[10px] text-white/20 uppercase tracking-widest leading-relaxed">
                  <Info className="w-4 h-4 shrink-0" />
                  A full address is not required at this stage. A town, postcode or general location is enough to start the operational assessment.
                </p>
              </div>

              <div className="flex justify-between items-center">
                <button onClick={prevStep} className="flex items-center gap-4 font-ui text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button 
                  onClick={nextStep}
                  disabled={!answers.location}
                  className="group flex items-center gap-6 bg-accent text-dark px-12 py-5 font-display text-xl tracking-[0.1em] transition-all hover:bg-white disabled:opacity-30"
                >
                  CONTINUE <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.section>
          )}

          {step === 'outcomes' && (
            <motion.section 
              key="outcomes"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="font-display text-5xl text-white mb-6 uppercase tracking-tight">What would you like to receive?</h2>
              <p className="font-body text-white/40 uppercase tracking-widest mb-12 text-sm">Step 04: Required Deliverables</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {DELIVERABLE_OPTIONS.map(opt => (
                  <button
                    key={opt}
                    onClick={() => toggleAnswer('deliverables', opt)}
                    className={`text-left p-6 border transition-all flex items-center gap-4 ${answers.deliverables.includes(opt) ? 'border-accent bg-accent/5' : 'border-white/5 bg-white/[0.01] hover:border-white/20'}`}
                  >
                    <div className={`w-4 h-4 border shrink-0 flex items-center justify-center ${answers.deliverables.includes(opt) ? 'border-accent bg-accent text-dark' : 'border-white/20'}`}>
                      {answers.deliverables.includes(opt) && <CheckCircle2 className="w-3 h-3" />}
                    </div>
                    <div className="font-ui text-[9px] tracking-[0.2em] uppercase text-white/60 leading-tight">{opt}</div>
                  </button>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <button onClick={prevStep} className="flex items-center gap-4 font-ui text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button 
                  onClick={nextStep}
                  className="group flex items-center gap-6 bg-accent text-dark px-12 py-5 font-display text-xl tracking-[0.1em] transition-all hover:bg-white"
                >
                  CONTINUE <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.section>
          )}

          {step === 'urgency' && (
            <motion.section 
              key="urgency"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="font-display text-5xl text-white mb-6 uppercase tracking-tight">Is there a deadline or urgency?</h2>
              <p className="font-body text-white/40 uppercase tracking-widest mb-12 text-sm">Step 05: Project Timeline</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {URGENCY_OPTIONS.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => { setAnswers({...answers, urgency: opt.id}); nextStep(); }}
                    className={`text-left p-8 border transition-all group ${answers.urgency === opt.id ? 'border-accent bg-accent/5' : 'border-white/5 bg-white/[0.01] hover:border-white/20'}`}
                  >
                    <div className="font-display text-xl text-white uppercase tracking-widest mb-2 leading-tight">{opt.label}</div>
                    <div className="font-body text-[10px] text-white/30 uppercase tracking-widest leading-relaxed">{opt.desc}</div>
                  </button>
                ))}
              </div>
              
              {answers.urgency === 'urgent' && (
                <div className="mb-12 p-6 border border-accent/20 bg-accent/5 flex items-start gap-6 animate-in fade-in slide-in-from-top-4">
                  <AlertTriangle className="w-6 h-6 text-accent shrink-0" />
                  <p className="font-body text-[11px] text-accent uppercase tracking-widest leading-relaxed">
                    Urgent drone capture may be possible, subject to pilot availability, weather, site access, airspace, permissions and operational safety requirements.
                  </p>
                </div>
              )}

              <button onClick={prevStep} className="flex items-center gap-4 font-ui text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            </motion.section>
          )}

          {step === 'constraints' && (
            <motion.section 
              key="constraints"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="font-display text-5xl text-white mb-6 uppercase tracking-tight">Are there any known site constraints?</h2>
              <p className="font-body text-white/40 uppercase tracking-widest mb-12 text-sm">Step 06: Operational Considerations</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {CONSTRAINT_OPTIONS.map(opt => (
                  <button
                    key={opt}
                    onClick={() => toggleAnswer('constraints', opt)}
                    className={`text-left p-6 border transition-all flex items-center gap-4 ${answers.constraints.includes(opt) ? 'border-accent bg-accent/5' : 'border-white/5 bg-white/[0.01] hover:border-white/20'}`}
                  >
                    <div className={`w-4 h-4 border shrink-0 flex items-center justify-center ${answers.constraints.includes(opt) ? 'border-accent bg-accent text-dark' : 'border-white/20'}`}>
                      {answers.constraints.includes(opt) && <CheckCircle2 className="w-3 h-3" />}
                    </div>
                    <div className="font-ui text-[9px] tracking-[0.2em] uppercase text-white/60 leading-tight">{opt}</div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <button onClick={prevStep} className="flex items-center gap-4 font-ui text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button 
                  onClick={nextStep}
                  className="group flex items-center gap-6 bg-accent text-dark px-12 py-5 font-display text-xl tracking-[0.1em] transition-all hover:bg-white"
                >
                  VIEW RECOMMENDATION <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.section>
          )}

          {step === 'recommendation' && recommendation && (
            <motion.section 
              key="recommendation"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              <div className="lg:col-span-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[1px] bg-accent" />
                  <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Recommendation Screen</span>
                </div>
                
                <div className="mb-12">
                  <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/30 mb-4 block">Recommended Route</span>
                  <h2 className="font-display text-7xl text-white mb-8 uppercase tracking-tighter leading-[0.9]">
                    {recommendation.service}
                  </h2>
                  <p className="font-body text-xl text-white/50 uppercase tracking-widest leading-relaxed max-w-2xl mb-12">
                    {recommendation.summary}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  <div className="p-8 border border-white/5 bg-white/[0.02]">
                    <div className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-6">Recommended Package</div>
                    <div className="font-display text-2xl text-white uppercase tracking-widest mb-4">{recommendation.bundle}</div>
                    <p className="font-body text-[10px] text-white/30 uppercase tracking-widest leading-relaxed">
                      Best suited for your specific project intent and site type.
                    </p>
                  </div>
                  <div className="p-8 border border-white/5 bg-white/[0.02]">
                    <div className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-6">Suggested Deliverables</div>
                    <ul className="space-y-3">
                      {recommendation.deliverables.map((item: string) => (
                        <li key={item} className="flex items-center gap-3 font-ui text-[9px] tracking-[0.2em] uppercase text-white/60">
                          <CheckCircle2 className="w-3 h-3 text-accent/40" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <button 
                    onClick={handleFinish}
                    className="group flex items-center justify-center gap-6 bg-accent text-dark px-12 py-6 font-display text-2xl tracking-[0.1em] transition-all hover:bg-white"
                  >
                    SUBMIT PROJECT BRIEF <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                  <Link 
                    href={`/services/${recommendation.serviceSlug}`}
                    className="flex items-center justify-center gap-6 border border-white/10 px-12 py-6 font-display text-2xl tracking-[0.1em] text-white/60 hover:text-white hover:border-white/30 transition-all"
                  >
                    VIEW SERVICE
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-8">
                <div className="p-10 border border-white/5 bg-black/40 backdrop-blur-md">
                  <div className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/30 mb-8 border-b border-white/5 pb-4">Project Considerations</div>
                  <ul className="space-y-6">
                    {recommendation.considerations.map((item: string) => (
                      <li key={item} className="flex items-start gap-4">
                        <Activity className="w-4 h-4 text-accent/30 mt-0.5 shrink-0" />
                        <span className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/60 leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-10 border border-white/5 bg-white/[0.01]">
                   <Info className="w-6 h-6 text-accent/20 mb-6" />
                   <div className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/30 mb-4">What Happens Next?</div>
                   <p className="font-body text-[10px] text-white/20 uppercase tracking-widest leading-relaxed">
                     Your recommendations will be passed into the project briefing form. EntireFM Drone will then perform a full operational review including airspace and site safety before providing a final scope and quote.
                   </p>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
