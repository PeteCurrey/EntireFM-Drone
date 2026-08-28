'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  Info, 
  Target, 
  Layers, 
  ShieldCheck, 
  Activity, 
  Mail, 
  User, 
  Building2, 
  Copy,
  Check,
  ChevronRight,
  Database,
  Search,
  Zap,
  Map as MapIcon,
  LayoutDashboard
} from 'lucide-react'
import { estimatorConfig, EstimatorStep, CostBand } from '@/lib/estimator-config'
import SectionTag from '@/components/ui/SectionTag'
import FAQAccordion from '@/components/ui/FAQAccordion'
import { trackEvent, recordJourneyStep } from '@/lib/analytics'
import { useAttribution } from '@/components/analytics/useAttribution'

// Helper for mapping project types to services and bundles
const mapToRecommendations = (projectTypeId: string) => {
  const mapping: Record<string, { service: string, bundle: string, serviceUrl: string, bundleUrl: string }> = {
    'roof-inspection': { 
      service: 'Drone Roof Inspections', 
      bundle: 'Roof Intelligence Pack', 
      serviceUrl: '/services/roof-inspections', 
      bundleUrl: '/bundles#roof-intelligence-pack' 
    },
    'envelope-inspection': { 
      service: 'Building Envelope Inspections', 
      bundle: 'Building Envelope & Asset Condition Pack', 
      serviceUrl: '/services/facade-inspections', 
      bundleUrl: '/bundles#building-envelope-asset-condition-pack' 
    },
    'thermal-survey': { 
      service: 'Thermal Drone Surveys', 
      bundle: 'Solar & Energy Asset Pack', 
      serviceUrl: '/services/thermal-imaging', 
      bundleUrl: '/bundles#solar-energy-asset-pack' 
    },
    'solar-inspection': { 
      service: 'Solar Panel Inspections', 
      bundle: 'Solar & Energy Asset Pack', 
      serviceUrl: '/services/solar-panel-inspections', 
      bundleUrl: '/bundles#solar-energy-asset-pack' 
    },
    'construction-progress': { 
      service: 'Construction Monitoring', 
      bundle: 'Construction Progress Pack', 
      serviceUrl: '/services/construction-monitoring', 
      bundleUrl: '/bundles#construction-progress-pack' 
    },
    'surveying-mapping': { 
      service: 'Surveying & Mapping', 
      bundle: 'Survey Data Pack', 
      serviceUrl: '/services/surveying-mapping', 
      bundleUrl: '/bundles#survey-data-pack' 
    },
    'stockpile-volume': { 
      service: 'Stockpile Volume Surveys', 
      bundle: 'Survey Data Pack', 
      serviceUrl: '/services/stockpile-volume-surveys', 
      bundleUrl: '/bundles#survey-data-pack' 
    },
    'aerial-media': { 
      service: 'Aerial Photography & Film', 
      bundle: 'Visual Sales Pack', 
      serviceUrl: '/services/aerial-photography-film', 
      bundleUrl: '/bundles#visual-sales-pack' 
    },
    'fpv-flythrough': { 
      service: 'FPV Drone Filming', 
      bundle: 'Visual Sales Pack', 
      serviceUrl: '/services/fpv-drone-filming', 
      bundleUrl: '/bundles#visual-sales-pack' 
    },
    'gaussian-splat': { 
      service: 'Gaussian Splat Capture', 
      bundle: 'Immersive Digital Capture Pack', 
      serviceUrl: '/services/gaussian-splat-capture', 
      bundleUrl: '/bundles#immersive-digital-capture-pack' 
    },
    'insurance-evidence': { 
      service: 'Insurance & Loss Adjuster Surveys', 
      bundle: 'Insurance & Incident Evidence Pack', 
      serviceUrl: '/services/insurance-loss-adjuster-surveys', 
      bundleUrl: '/bundles#insurance-incident-evidence-pack' 
    },
    'emergency-response': { 
      service: 'Drone Emergency Response', 
      bundle: 'Insurance & Incident Evidence Pack', 
      serviceUrl: '/services/drone-emergency-response', 
      bundleUrl: '/bundles#insurance-incident-evidence-pack' 
    }
  }
  return mapping[projectTypeId] || { 
    service: 'Drone Inspection', 
    bundle: 'Commercial Drone Bundle', 
    serviceUrl: '/services', 
    bundleUrl: '/bundles' 
  };
}

export default function CostEstimatorPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selections, setSelections] = useState<Record<string, string | string[]>>({})
  
  useEffect(() => {
    trackEvent('estimator_started')
    recordJourneyStep('Started cost estimator')
  }, [])
  const [isCompleted, setIsCompleted] = useState(false)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [leadSubmitted, setLeadSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)
  
  const [leadData, setLeadData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    sector: '',
    consent: false
  })
  const { getAttributionData } = useAttribution()

  const steps = estimatorConfig.steps
  const progress = ((currentStep) / steps.length) * 100

  const handleOptionSelect = (stepId: string, optionId: string, isMulti?: boolean) => {
    if (isMulti) {
      const current = (selections[stepId] as string[]) || []
      const updated = current.includes(optionId)
        ? current.filter(id => id !== optionId)
        : [...current, optionId]
      setSelections({ ...selections, [stepId]: updated })
    } else {
      setSelections({ ...selections, [stepId]: optionId })
      
      // Track step completion
      trackEvent('estimator_step_completed', {
        step_index: currentStep,
        step_id: stepId,
        option_id: optionId
      })
      recordJourneyStep(`Estimator: Completed step ${currentStep + 1} (${stepId})`)

      if (currentStep < steps.length - 1) {
        setTimeout(() => setCurrentStep(currentStep + 1), 300)
      } else {
        setIsCompleted(true)
        trackEvent('estimator_completed', {
          score: calculateScore()
        })
        recordJourneyStep('Completed cost estimator')
      }
    }
  }

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1)
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setSelections({})
    setIsCompleted(false)
    setShowLeadForm(false)
    setLeadSubmitted(false)
  }

  const calculateScore = () => {
    let total = 0
    steps.forEach(step => {
      const selection = selections[step.id]
      if (Array.isArray(selection)) {
        selection.forEach(id => {
          const opt = step.options.find(o => o.id === id)
          if (opt) total += opt.score
        })
      } else {
        const opt = step.options.find(o => o.id === selection)
        if (opt) total += opt.score
      }
    })
    return total
  }

  const getCostBand = (score: number): CostBand => {
    return estimatorConfig.costBands.find(b => score >= b.minScore && score <= b.maxScore) || estimatorConfig.costBands[0]
  }

  const score = calculateScore()
  const band = getCostBand(score)
  const recs = mapToRecommendations(selections['projectType'] as string)

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const attribution = getAttributionData()

    trackEvent('estimator_lead_submitted', {
      score,
      band: band.label,
      ...attribution
    })

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...leadData,
          type: 'estimator_lead',
          selections,
          score,
          band,
          attribution
        })
      })
      setLeadSubmitted(true)
      recordJourneyStep('Submitted cost estimator lead form')
    } catch (err) {
      console.error('Estimator lead failed:', err)
    }
  }

  const copySummary = () => {
    const summary = `EntireFM Drone Drone Cost Estimate:
Band: ${band.label}
Indicative Range: ${band.range}
Service: ${recs.service}
Bundle: ${recs.bundle}
Complexity Score: ${score}
Project Type: ${selections['projectType']}
Site Type: ${selections['siteType']}
Location: ${selections['locationComplexity']}`
    
    navigator.clipboard.writeText(summary)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const faqs = [
    {
      question: "Is the drone cost estimator a fixed quote?",
      answer: "No. The estimator provides indicative guidance only. Final pricing depends on project scope, site access, airspace, permissions, weather, safety requirements, deliverables and processing."
    },
    {
      question: "Why do drone project costs vary?",
      answer: "Costs vary because each project has different site conditions, risk profile, deliverables, reporting needs, accuracy requirements, travel, urgency and processing requirements."
    },
    {
      question: "Can I get an exact drone quote online?",
      answer: "For serious commercial drone work, an exact quote usually requires project review. The estimator gives a useful starting point before a formal brief."
    },
    {
      question: "What makes a drone survey more expensive?",
      answer: "Survey data, mapping, point clouds, stockpile volumes, cut/fill calculations, LiDAR, ground control and accuracy verification can increase the work required."
    }
  ]

  return (
    <main className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative py-32 px-8 md:px-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-accent/[0.02] pointer-events-none" />
        <div className="container relative z-10 max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Investment Scoping Tool</span>
          </div>
          <h1 className="text-[clamp(2.25rem,3.7vw,3.5rem)] font-extralight tracking-[-0.04em] leading-[1.02] text-white mb-5 sm:mb-6 uppercase">
            Drone Cost <br/><span className="text-accent underline underline-offset-8 decoration-accent/20">Estimator</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/50 leading-relaxed max-w-3xl uppercase tracking-widest font-light mb-12">
            Get an indicative cost band for commercial drone inspections, surveys, mapping, construction monitoring, aerial media, thermal imaging and Gaussian Splat capture.
          </p>
          <div className="flex items-center gap-6 text-[10px] tracking-[0.3em] uppercase text-white/30 font-ui">
             <span>Indicative only</span>
             <span className="text-accent/30">•</span>
             <span>Output-led pricing</span>
             <span className="text-accent/30">•</span>
             <span>Final quote after project review</span>
          </div>
        </div>
      </section>

      {/* Estimator Interface */}
      <section className="py-24 px-8 md:px-20 bg-[#0a0a0a]">
        <div className="container max-w-5xl">
          {!isCompleted ? (
            <div className="space-y-12">
              {/* Progress Bar */}
              <div className="space-y-4">
                <div className="flex justify-between items-end font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">
                  <span>Step {currentStep + 1} of {steps.length}</span>
                  <span>{Math.round(progress)}% Complete</span>
                </div>
                <div className="h-1 bg-white/5 w-full relative">
                  <motion.div 
                    className="absolute h-full bg-accent" 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Question Area */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-12"
                >
                  <h2 className="font-display text-3xl md:text-5xl text-white uppercase tracking-tight leading-tight max-w-3xl">
                    {steps[currentStep].question}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {steps[currentStep].options.map((option) => {
                      const isSelected = steps[currentStep].multiSelect 
                        ? (selections[steps[currentStep].id] as string[])?.includes(option.id)
                        : selections[steps[currentStep].id] === option.id

                      return (
                        <button
                          key={option.id}
                          onClick={() => handleOptionSelect(steps[currentStep].id, option.id, steps[currentStep].multiSelect)}
                          className={`group p-8 text-left border transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full min-h-[160px] ${
                            isSelected 
                              ? 'border-accent bg-accent/10 shadow-[0_0_30px_rgba(205,174,130,0.1)]' 
                              : 'border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                          }`}
                        >
                          <div className="space-y-4">
                            <span className={`font-display text-xl uppercase tracking-widest leading-none block ${isSelected ? 'text-accent' : 'text-white'}`}>
                              {option.label}
                            </span>
                            {option.description && (
                              <p className="font-body text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
                                {option.description}
                              </p>
                            )}
                          </div>
                          <div className="flex justify-end pt-4">
                             {steps[currentStep].multiSelect ? (
                               <div className={`w-6 h-6 border flex items-center justify-center ${isSelected ? 'border-accent bg-accent text-dark' : 'border-white/10'}`}>
                                 {isSelected && <Check className="w-4 h-4" />}
                               </div>
                             ) : (
                               <ArrowRight className={`w-5 h-5 transition-transform ${isSelected ? 'text-accent translate-x-2' : 'text-white/20 group-hover:text-white/40'}`} />
                             )}
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  {steps[currentStep].multiSelect && (
                    <div className="pt-8 flex justify-between items-center border-t border-white/5">
                       <p className="font-body text-[10px] text-white/30 uppercase tracking-widest italic">
                         Select all that apply, then click next.
                       </p>
                       <button
                         onClick={() => {
                           if (currentStep < steps.length - 1) {
                             setCurrentStep(currentStep + 1)
                           } else {
                             setIsCompleted(true)
                           }
                         }}
                         className="bg-accent text-dark px-12 py-5 font-display text-xl tracking-[0.1em] hover:bg-white transition-all flex items-center gap-4 group"
                       >
                         Next Step <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                       </button>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-12 border-t border-white/5">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className="flex items-center gap-3 font-ui text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors disabled:opacity-0"
                >
                  <ArrowLeft className="w-4 h-4" /> Go Back
                </button>
                <button
                  onClick={handleRestart}
                  className="flex items-center gap-3 font-ui text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-accent transition-colors"
                >
                  <RotateCcw className="w-4 h-4" /> Restart
                </button>
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="bg-mid border border-white/10 p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
                  <Activity className="w-64 h-64 text-accent" />
                </div>
                
                <div className="relative z-10 space-y-12">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                      <div className="svc-tag mb-6"><SectionTag number="RESULT" text="Indicative Estimate" /></div>
                      <h2 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tighter leading-none mb-4">
                        {band.label}
                      </h2>
                      <div className="text-5xl md:text-7xl font-display text-accent mb-8">
                        {band.range}
                      </div>
                    </div>
                    <div className="text-right">
                       <span className="block font-ui text-[9px] tracking-widest text-white/30 uppercase mb-2">Complexity Score</span>
                       <span className="block font-display text-4xl text-white/80">{score}</span>
                    </div>
                  </div>

                  <p className="font-body text-xl text-white/60 leading-relaxed uppercase tracking-widest font-light border-l-2 border-accent/30 pl-8 max-w-3xl italic">
                    &quot;{band.description}&quot;
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 border-t border-white/10">
                     <div className="space-y-8">
                        <div className="p-8 bg-dark border border-white/5 group hover:border-accent/30 transition-all">
                           <h3 className="font-display text-xl text-white mb-6 uppercase tracking-widest">Recommended Service</h3>
                           <p className="font-body text-sm text-white/40 uppercase tracking-widest leading-relaxed mb-8">{recs.service}</p>
                           <Link href={recs.serviceUrl} className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent hover:text-white transition-colors flex items-center gap-3">
                              View Service Details <ChevronRight className="w-3 h-3" />
                           </Link>
                        </div>
                        <div className="p-8 bg-accent text-dark group border border-dark/10">
                           <h3 className="font-display text-xl mb-6 uppercase tracking-widest">Recommended Bundle</h3>
                           <p className="font-body text-sm uppercase tracking-widest leading-relaxed mb-8 font-medium opacity-80">{recs.bundle}</p>
                           <Link href={recs.bundleUrl} className="font-ui text-[10px] tracking-[0.4em] uppercase font-bold hover:underline flex items-center gap-3">
                              View Bundle Route <ChevronRight className="w-3 h-3" />
                           </Link>
                        </div>
                     </div>

                     <div className="space-y-8">
                        <div className="p-10 border border-white/5 bg-dark">
                           <h3 className="font-display text-xl text-white mb-8 uppercase tracking-widest border-b border-white/5 pb-4">Main Cost Drivers</h3>
                           <ul className="space-y-4">
                              {[
                                selections['projectType'] === 'roof-inspection' ? 'Gutter & roof area complexity' : null,
                                selections['locationComplexity'] === 'city-centre' ? 'Urban airspace coordination' : null,
                                selections['urgency'] === 'emergency' ? 'Rapid response deployment' : null,
                                (selections['deliverables'] as string[])?.includes('point-cloud') ? '3D data processing time' : null,
                                (selections['deliverables'] as string[])?.includes('annotated-images') ? 'Detailed report generation' : null,
                                'Airspace and site planning',
                                'Professional reporting level'
                              ].filter(Boolean).map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-ui text-[9px] tracking-widest uppercase text-white/50">
                                   <div className="w-1 h-1 bg-accent rounded-full" /> {item}
                                </li>
                              ))}
                           </ul>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                           <button 
                             onClick={copySummary}
                             className="flex-1 p-6 border border-white/10 font-ui text-[10px] tracking-[0.3em] uppercase text-white/40 hover:border-accent hover:text-accent transition-all flex items-center justify-center gap-4 group"
                           >
                              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4 text-white/20 group-hover:text-accent" />}
                              {copied ? 'Copied' : 'Copy Summary'}
                           </button>
                           {!showLeadForm && !leadSubmitted && (
                             <button 
                               onClick={() => setShowLeadForm(true)}
                               className="flex-1 p-6 border border-white/10 font-ui text-[10px] tracking-[0.3em] uppercase text-white/40 hover:border-accent hover:text-accent transition-all flex items-center justify-center gap-4 group"
                             >
                                <Mail className="w-4 h-4 text-white/20 group-hover:text-accent" /> Email Estimate
                             </button>
                           )}
                        </div>
                     </div>
                  </div>

                  {/* Lead Capture Overlay/Inline */}
                  {showLeadForm && !leadSubmitted && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-12 p-12 bg-dark border border-accent/20"
                    >
                       <h3 className="font-display text-2xl text-white mb-8 uppercase tracking-widest">Send This Estimate to My Email</h3>
                       <form onSubmit={handleLeadSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                             <label className="font-ui text-[9px] tracking-widest uppercase text-white/30 ml-1">Full Name</label>
                             <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/40" />
                                <input 
                                  required
                                  type="text" 
                                  placeholder="Name" 
                                  className="w-full bg-white/[0.03] border border-white/10 p-4 pl-12 font-ui text-xs tracking-widest text-white focus:border-accent outline-none"
                                  value={leadData.name}
                                  onChange={e => setLeadData({...leadData, name: e.target.value})}
                                />
                             </div>
                          </div>
                          <div className="space-y-2">
                             <label className="font-ui text-[9px] tracking-widest uppercase text-white/30 ml-1">Email Uplink</label>
                             <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/40" />
                                <input 
                                  required
                                  type="email" 
                                  placeholder="contact@company.com" 
                                  className="w-full bg-white/[0.03] border border-white/10 p-4 pl-12 font-ui text-xs tracking-widest text-white focus:border-accent outline-none"
                                  value={leadData.email}
                                  onChange={e => setLeadData({...leadData, email: e.target.value})}
                                />
                             </div>
                          </div>
                          <div className="space-y-2">
                             <label className="font-ui text-[9px] tracking-widest uppercase text-white/30 ml-1">Company</label>
                             <div className="relative">
                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/40" />
                                <input 
                                  type="text" 
                                  placeholder="Company Name" 
                                  className="w-full bg-white/[0.03] border border-white/10 p-4 pl-12 font-ui text-xs tracking-widest text-white focus:border-accent outline-none"
                                  value={leadData.company}
                                  onChange={e => setLeadData({...leadData, company: e.target.value})}
                                />
                             </div>
                          </div>
                          <div className="flex items-end">
                             <button type="submit" className="w-full bg-accent text-dark py-4 font-display text-xl tracking-[0.1em] hover:bg-white transition-all uppercase">
                                Save & Send Estimate
                             </button>
                          </div>
                          <div className="md:col-span-2">
                             <label className="flex items-center gap-3 cursor-pointer group">
                                <input 
                                  type="checkbox" 
                                  className="hidden" 
                                  checked={leadData.consent}
                                  onChange={() => setLeadData({...leadData, consent: !leadData.consent})}
                                />
                                <div className={`w-4 h-4 border flex items-center justify-center shrink-0 ${leadData.consent ? 'border-accent bg-accent text-dark' : 'border-white/20'}`}>
                                   {leadData.consent && <Check className="w-3 h-3" />}
                                </div>
                                <span className="font-ui text-[9px] tracking-widest uppercase text-white/40 leading-tight">I consent to be contacted regarding this estimate.</span>
                             </label>
                          </div>
                       </form>
                    </motion.div>
                  )}

                  {leadSubmitted && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-12 p-12 bg-accent/10 border border-accent/30 text-center"
                    >
                       <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-6" />
                       <h3 className="font-display text-2xl text-white mb-4 uppercase tracking-widest">Estimate Saved</h3>
                       <p className="font-body text-sm text-white/60 uppercase tracking-widest leading-relaxed">
                          Your indicative estimate has been sent to your email. EntireFM Drone will review the details and confirm final pricing after a full brief review.
                       </p>
                    </motion.div>
                  )}

                  <div className="pt-12 flex flex-col md:flex-row gap-8 items-center justify-between border-t border-white/10">
                     <p className="font-body text-[10px] text-white/30 uppercase tracking-widest italic max-w-xl">
                        {estimatorConfig.disclaimer}
                     </p>
                     <div className="flex gap-4 w-full md:w-auto">
                        <Link 
                          href={`/brief?source=cost-estimator&service=${recs.service.toLowerCase().replace(/ /g, '-')}&package=${recs.bundle.toLowerCase().replace(/ /g, '-')}&estimateBand=${(band.range || '').replace(/£/g, '').replace(/–/g, '-')}`}
                          className="flex-1 md:flex-none bg-accent text-dark px-12 py-6 font-display text-2xl tracking-[0.1em] hover:bg-white transition-all flex items-center justify-center gap-4 group"
                        >
                          SUBMIT BRIEF <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </Link>
                        <button 
                          onClick={handleRestart}
                          className="flex-1 md:flex-none border border-white/20 text-white px-12 py-6 font-display text-2xl tracking-[0.1em] hover:bg-white hover:text-dark transition-all"
                        >
                          RESTART
                        </button>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-32 px-8 md:px-20 bg-dark border-y border-white/5">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="svc-tag mb-8"><SectionTag number="01" text="Context" /></div>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-10 uppercase leading-tight tracking-tighter">
                ESTIMATE THE PROJECT BEFORE YOU <span className="text-accent">REQUEST A QUOTE</span>
              </h2>
              <p className="font-body text-lg text-white/50 leading-relaxed uppercase tracking-widest font-light mb-10 italic border-l-2 border-accent/20 pl-8">
                &quot;Drone project costs depend on more than flight time. Site access, location, risk profile, reporting, processing, repeat visits, thermal capture, survey accuracy and final deliverables all affect the price.&quot;
              </p>
              <div className="p-8 border border-white/10 bg-white/[0.02] text-accent font-ui text-[12px] tracking-[0.2em] uppercase">
                You are estimating the capture, processing and deliverable — not just the drone flight.
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
               {[
                 { title: 'Project Brief Assistant', icon: Target, desc: 'Not sure which service you need? Use the assistant to map your outcome.', href: '/project-brief-assistant' },
                 { title: 'Pricing Guidance', icon: Info, desc: 'Learn more about the factors that drive commercial drone survey costs.', href: '/pricing-guidance' },
                 { title: 'Sample Deliverables', icon: Database, desc: 'Explore the types of data and reports you will receive.', href: '/sample-deliverables' }
               ].map((item, i) => (
                 <Link key={i} href={item.href} className="group p-8 border border-white/5 bg-white/[0.01] hover:border-accent/30 hover:bg-accent/[0.02] transition-all flex items-center justify-between">
                    <div className="flex items-center gap-6">
                       <item.icon className="w-6 h-6 text-accent/40 group-hover:text-accent transition-colors" />
                       <div>
                          <h4 className="font-display text-lg text-white mb-2 uppercase tracking-widest">{item.title}</h4>
                          <p className="font-body text-[10px] text-white/30 uppercase tracking-widest leading-relaxed max-w-xs">{item.desc}</p>
                       </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/10 group-hover:text-accent group-hover:translate-x-2 transition-all" />
                 </Link>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-8 md:px-20 bg-dark">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <div className="svc-tag mb-8 inline-flex"><SectionTag number="02" text="Support" /></div>
            <h2 className="font-display text-5xl text-white uppercase tracking-tighter mb-8">Estimator FAQs</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 px-8 md:px-20 text-center bg-dark border-t border-white/5">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-display text-6xl text-white uppercase tracking-tighter mb-8 leading-[0.85]">
            Start With the Output.<br/>We’ll Build the Mission.
          </h2>
          <p className="font-body text-xl text-white/50 uppercase tracking-widest leading-relaxed mb-16 font-light">
            EntireFM Drone uses its structured operating model to scope the right capture route and deliverables for your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link href="/brief?source=cost-estimator-footer" className="bg-accent text-dark font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white transition-all flex items-center justify-center gap-4 group">
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
