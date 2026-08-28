// app/brief/page.tsx
'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Box, 
  Shield,
  Clock,
  Upload,
  MapPin,
  Mail,
  Phone,
  User,
  Building2,
  Activity,
  ChevronRight
} from 'lucide-react'
import Link from 'next/link'
import { trackEvent, recordJourneyStep } from '@/lib/analytics'
import { useAttribution } from '@/components/analytics/useAttribution'

function BriefFormContent() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    role: '',
    contactMethod: 'Email',
    
    location: searchParams.get('location') || '',
    town: '',
    region: '',
    easyAccess: 'Not sure',
    liveSite: 'Not sure',
    accessRestrictions: '',
    
    outcomes: searchParams.get('outcome') ? [searchParams.get('outcome')!] : ([] as string[]),
    serviceInterest: searchParams.get('service') || 'Not sure yet',
    packageInterest: searchParams.get('package') || 'Not sure yet',
    
    deliverables: [] as string[],
    
    timing: 'Flexible / planning stage',
    isUrgent: 'No',
    urgencyReason: '',
    
    constraints: [] as string[],
    
    description: '',
    budget: 'Not sure yet',
    consent: false,
    
    // Hidden metadata
    source: searchParams.get('source') || '',
    sector: searchParams.get('sector') || '',
    siteType: searchParams.get('site-type') || '',
    urgency: searchParams.get('urgency') || '',
    ctaLabel: searchParams.get('cta') || '',
    toolPath: searchParams.get('tool') || ''
  })

  const [showSummary, setShowSummary] = useState(!!(searchParams.get('service') || searchParams.get('package') || searchParams.get('outcome')))

  const { getAttributionData } = useAttribution()

  const toggleCheckbox = (listName: 'outcomes' | 'deliverables' | 'constraints', value: string) => {
    setFormData(prev => {
      const list = [...prev[listName]]
      if (list.includes(value)) {
        return { ...prev, [listName]: list.filter(item => item !== value) }
      } else {
        return { ...prev, [listName]: [...list, value] }
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    
    const attribution = getAttributionData()

    trackEvent('project_brief_submitted', {
      service: formData.serviceInterest,
      bundle: formData.packageInterest,
      location: formData.location,
      sector: formData.sector,
      ...attribution
    })

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'brief',
          attribution: attribution
        })
      })
      setStatus('success')
      recordJourneyStep(`Submitted project brief: ${formData.serviceInterest}`)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      console.error('Brief submission failed:', err)
      setStatus('idle')
    }
  }

  const handleFormFocus = () => {
    trackEvent('project_brief_started', {
      service: formData.serviceInterest,
      bundle: formData.packageInterest
    })
    recordJourneyStep(`Started project brief form`)
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-32 animate-in fade-in zoom-in duration-1000">
        <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center mb-12 shadow-[0_0_80px_rgba(205,174,130,0.3)]">
          <CheckCircle2 className="w-16 h-16 text-dark" />
        </div>
        <h2 className="font-display text-7xl text-white mb-8 tracking-tighter uppercase">Brief Received</h2>
        <p className="font-body text-xl text-white/50 uppercase tracking-widest max-w-2xl leading-relaxed mb-16">
          Thanks — your project brief has been submitted. EntireFM Drone will review the site details, required output and any constraints before advising on the best capture route.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
           {[
             { title: 'Step 01', desc: 'Outcome Review', detail: 'We review the required outcome and deliverables.' },
             { title: 'Step 02', desc: 'Site Audit', detail: 'We check location, airspace and site constraints.' },
             { title: 'Step 03', desc: 'Solution Mapping', detail: 'We identify the right service, package or capture workflow.' },
             { title: 'Step 04', desc: 'Response', detail: 'We respond with recommended next steps and scoping.' }
           ].map((step, i) => (
             <div key={i} className="p-8 border border-white/5 bg-white/[0.02] text-left">
                <div className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-4">{step.title}</div>
                <div className="font-display text-lg text-white uppercase tracking-widest mb-4">{step.desc}</div>
                <p className="font-body text-[10px] text-white/30 uppercase tracking-widest leading-relaxed">{step.detail}</p>
             </div>
           ))}
        </div>

        <Link href="/" className="font-display text-2xl text-accent border border-accent/20 px-12 py-6 hover:bg-accent hover:text-dark transition-all uppercase tracking-[0.2em]">
          Return to Mission Control
        </Link>
        <p className="mt-12 font-body text-xs text-white/20 uppercase tracking-widest italic">
          Urgent requests are reviewed with site access, weather, permissions and operational safety in mind.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-24">
      {/* Context Summary Layer */}
      {showSummary && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-accent/5 border border-accent/20 p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4">
             <button 
               type="button"
               onClick={() => setShowSummary(false)}
               className="font-ui text-[9px] tracking-widest uppercase text-accent/40 hover:text-accent transition-colors"
             >
               Clear Selection [x]
             </button>
          </div>
          <div className="flex items-center gap-4 mb-8">
            <Target className="w-5 h-5 text-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Your Project Context</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
             {formData.serviceInterest !== 'Not sure yet' && (
               <div>
                 <span className="block font-ui text-[9px] tracking-widest text-white/30 uppercase mb-2">Selected Service</span>
                 <span className="block font-display text-xl text-white uppercase tracking-widest">{formData.serviceInterest.replace(/-/g, ' ')}</span>
               </div>
             )}
             {formData.packageInterest !== 'Not sure yet' && (
               <div>
                 <span className="block font-ui text-[9px] tracking-widest text-white/30 uppercase mb-2">Recommended Bundle</span>
                 <span className="block font-display text-xl text-accent uppercase tracking-widest">{formData.packageInterest.replace(/-/g, ' ')}</span>
               </div>
             )}
             {formData.location && (
               <div>
                 <span className="block font-ui text-[9px] tracking-widest text-white/30 uppercase mb-2">Target Location</span>
                 <span className="block font-display text-xl text-white uppercase tracking-widest">{formData.location}</span>
               </div>
             )}
             {formData.sector && (
               <div>
                 <span className="block font-ui text-[9px] tracking-widest text-white/30 uppercase mb-2">Target Sector</span>
                 <span className="block font-display text-xl text-white uppercase tracking-widest">{formData.sector.replace(/-/g, ' ')}</span>
               </div>
             )}
          </div>
          <div className="mt-8 pt-8 border-t border-accent/10 flex items-center gap-4">
             <CheckCircle2 className="w-4 h-4 text-accent/50" />
             <p className="font-body text-[10px] text-accent/60 uppercase tracking-widest italic">
               This brief will be pre-filled with your previous selections. You can still modify any detail below.
             </p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} onFocus={handleFormFocus} className="space-y-24">
        {/* Attribution context captured on submission */}


      {/* Step 1: Contact Details */}
      <div className="section-group">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-10 h-px bg-accent/30" />
          <h2 className="font-display text-3xl text-white uppercase tracking-widest">01. Contact Details</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="form-field">
            <label className="field-label">Full Name</label>
            <div className="relative">
              <User className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/40" />
              <input 
                required
                type="text" 
                placeholder="Operator Name" 
                className="form-input-premium pl-8"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
          </div>
          <div className="form-field">
            <label className="field-label">Company / Organization</label>
            <div className="relative">
              <Building2 className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/40" />
              <input 
                type="text" 
                placeholder="Company Name" 
                className="form-input-premium pl-8"
                value={formData.company}
                onChange={e => setFormData({...formData, company: e.target.value})}
              />
            </div>
          </div>
          <div className="form-field">
            <label className="field-label">Email Uplink</label>
            <div className="relative">
              <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/40" />
              <input 
                required
                type="email" 
                placeholder="contact@company.com" 
                className="form-input-premium pl-8"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>
          <div className="form-field">
            <label className="field-label">Direct Frequency (Phone)</label>
            <div className="relative">
              <Phone className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/40" />
              <input 
                type="tel" 
                placeholder="+44 0000 000000" 
                className="form-input-premium pl-8"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>
          <div className="form-field">
            <label className="field-label">Your Role / Position</label>
            <input 
              type="text" 
              placeholder="e.g. Facilities Manager, Project Director" 
              className="form-input-premium"
              value={formData.role}
              onChange={e => setFormData({...formData, role: e.target.value})}
            />
          </div>
          <div className="form-field">
            <label className="field-label">Preferred Contact Method</label>
            <div className="flex gap-4">
               {['Email', 'Phone', 'Either'].map(method => (
                 <button
                   key={method}
                   type="button"
                   onClick={() => setFormData({...formData, contactMethod: method})}
                   className={`px-6 py-3 border font-ui text-[10px] tracking-widest uppercase transition-all ${formData.contactMethod === method ? 'border-accent text-accent bg-accent/5' : 'border-white/10 text-white/30 hover:border-white/30'}`}
                 >
                   {method}
                 </button>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: Project Location */}
      <div className="section-group">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-10 h-px bg-accent/30" />
          <h2 className="font-display text-3xl text-white uppercase tracking-widest">02. Project Location</h2>
          <span className="font-ui text-[9px] tracking-widest text-white/20 uppercase ml-4">Mission Origin / Site Address</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="form-field md:col-span-2">
            <label className="field-label">Site Address or Postcode</label>
            <div className="relative">
              <MapPin className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/40" />
              <input 
                required
                type="text" 
                placeholder="Full address or nearest postcode" 
                className="form-input-premium pl-8"
                value={formData.location}
                onChange={e => setFormData({...formData, location: e.target.value})}
              />
            </div>
            <p className="mt-4 font-body text-[10px] text-white/20 uppercase tracking-widest">If you do not have the full address yet, provide the nearest postcode, site name or general location.</p>
          </div>
          <div className="form-field">
            <label className="field-label">Town / City</label>
            <input 
              type="text" 
              className="form-input-premium"
              value={formData.town}
              onChange={e => setFormData({...formData, town: e.target.value})}
            />
          </div>
          <div className="form-field">
            <label className="field-label">Region / County</label>
            <input 
              type="text" 
              className="form-input-premium"
              value={formData.region}
              onChange={e => setFormData({...formData, region: e.target.value})}
            />
          </div>
          <div className="form-field">
            <label className="field-label">Is the site easy to access?</label>
            <div className="flex gap-4">
               {['Yes', 'No', 'Not sure'].map(opt => (
                 <button
                   key={opt}
                   type="button"
                   onClick={() => setFormData({...formData, easyAccess: opt})}
                   className={`px-6 py-3 border font-ui text-[10px] tracking-widest uppercase transition-all ${formData.easyAccess === opt ? 'border-accent text-accent bg-accent/5' : 'border-white/10 text-white/30 hover:border-white/30'}`}
                 >
                   {opt}
                 </button>
               ))}
            </div>
          </div>
          <div className="form-field">
            <label className="field-label">Is this a live site?</label>
            <div className="flex gap-4">
               {['Yes', 'No', 'Not sure'].map(opt => (
                 <button
                   key={opt}
                   type="button"
                   onClick={() => setFormData({...formData, liveSite: opt})}
                   className={`px-6 py-3 border font-ui text-[10px] tracking-widest uppercase transition-all ${formData.liveSite === opt ? 'border-accent text-accent bg-accent/5' : 'border-white/10 text-white/30 hover:border-white/30'}`}
                 >
                   {opt}
                 </button>
               ))}
            </div>
          </div>
          <div className="form-field md:col-span-2">
            <label className="field-label">Any known access restrictions?</label>
            <input 
              type="text" 
              placeholder="e.g. Permitted times, security clearance required, keys needed..." 
              className="form-input-premium"
              value={formData.accessRestrictions}
              onChange={e => setFormData({...formData, accessRestrictions: e.target.value})}
            />
          </div>
        </div>
      </div>

      {/* Step 3: Required Outcome */}
      <div className="section-group">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-10 h-px bg-accent/30" />
          <h2 className="font-display text-3xl text-white uppercase tracking-widest">03. Required Outcome</h2>
        </div>
        <div className="form-field">
          <label className="field-label mb-8">What do you need the drone output for?</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
             {[
               "Inspect a roof, building or asset",
               "Capture evidence for insurance or damage",
               "Survey or map a site",
               "Measure stockpiles, earthworks or quantities",
               "Monitor construction progress",
               "Create aerial photography or video",
               "Capture thermal imagery",
               "Inspect solar panels or energy assets",
               "Create a Gaussian Splat or immersive 3D model",
               "Create a 360 aerial panorama",
               "Capture event, venue or media content",
               "Support facilities management or maintenance",
               "I am not sure yet"
             ].map(opt => (
               <label key={opt} className={`p-6 border transition-all cursor-pointer flex items-center gap-4 ${formData.outcomes.includes(opt) ? 'border-accent bg-accent/5' : 'border-white/5 bg-white/[0.01] hover:border-white/20'}`}>
                 <input 
                   type="checkbox" 
                   className="hidden" 
                   checked={formData.outcomes.includes(opt)}
                   onChange={() => toggleCheckbox('outcomes', opt)}
                 />
                 <div className={`w-5 h-5 border flex items-center justify-center ${formData.outcomes.includes(opt) ? 'border-accent bg-accent text-dark' : 'border-white/20'}`}>
                    {formData.outcomes.includes(opt) && <CheckCircle2 className="w-3.5 h-3.5" />}
                 </div>
                 <span className="font-ui text-[11px] tracking-widest uppercase text-white/60 leading-tight">{opt}</span>
               </label>
             ))}
          </div>
          <p className="mt-8 font-body text-[10px] text-white/20 uppercase tracking-widest italic">Select everything that applies. We’ll help narrow it down.</p>
        </div>
      </div>

      {/* Step 4: Service & Package Interest */}
      <div className="section-group grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="form-field">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-px bg-accent/30" />
            <label className="field-label m-0">04. Which service are you interested in?</label>
          </div>
          <select 
            className="form-input-premium uppercase text-xs"
            value={formData.serviceInterest}
            onChange={e => setFormData({...formData, serviceInterest: e.target.value})}
          >
            <option value="Not sure yet">Not sure yet</option>
            <optgroup label="Property & Assets">
              <option value="drone-inspection">Drone Inspection</option>
              <option value="roof-inspections">Roof Inspections</option>
              <option value="facade-inspections">Building Envelope Inspections</option>
              <option value="facilities-management-inspections">Facilities Management Inspections</option>
              <option value="insurance-loss-adjuster-surveys">Insurance & Loss Adjuster Surveys</option>
            </optgroup>
            <optgroup label="Construction & Surveying">
              <option value="surveying-mapping">Surveying & Mapping</option>
              <option value="construction-monitoring">Construction Monitoring</option>
              <option value="photogrammetry">Photogrammetry</option>
              <option value="lidar-point-cloud-surveys">LiDAR Point Cloud Surveys</option>
              <option value="stockpile-volume-surveys">Stockpile Volume Surveys</option>
            </optgroup>
            <optgroup label="Specialist & Media">
              <option value="thermal-imaging">Thermal Drone Surveys</option>
              <option value="solar-panel-inspections">Solar Panel Inspections</option>
              <option value="gaussian-splat-capture">Gaussian Splat Capture</option>
              <option value="aerial-photography-film">Aerial Photography & Film</option>
              <option value="fpv-drone-filming">FPV Drone Filming</option>
            </optgroup>
          </select>
        </div>
        <div className="form-field">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-px bg-accent/30" />
            <label className="field-label m-0">05. Interested package (Optional)</label>
          </div>
          <select 
            className="form-input-premium uppercase text-xs"
            value={formData.packageInterest}
            onChange={e => setFormData({...formData, packageInterest: e.target.value})}
          >
            <option value="Not sure yet">Not sure yet</option>
            <option value="roof-intelligence-pack">Roof Intelligence Pack</option>
            <option value="building-envelope-asset-condition-pack">Building Envelope & Asset Condition Pack</option>
            <option value="construction-progress-pack">Construction Progress Pack</option>
            <option value="survey-data-pack">Survey Data Pack</option>
            <option value="visual-sales-pack">Visual Sales Pack</option>
            <option value="insurance-incident-evidence-pack">Insurance & Incident Evidence Pack</option>
            <option value="solar-energy-asset-pack">Solar & Energy Asset Pack</option>
            <option value="immersive-digital-capture-pack">Immersive Digital Capture Pack</option>
          </select>
          <p className="mt-4 font-body text-[10px] text-white/20 uppercase tracking-widest italic">Packages are optional. If you are unsure, leave this as “Not sure yet”.</p>
        </div>
      </div>

      {/* Step 6: Deliverables */}
      <div className="section-group">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-10 h-px bg-accent/30" />
          <h2 className="font-display text-3xl text-white uppercase tracking-widest">06. Deliverables Required</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[
             "High-resolution image set",
             "Annotated inspection images",
             "PDF inspection summary",
             "Thermal image set",
             "Edited drone video",
             "Raw footage",
             "Social media clips",
             "Orthomosaic map",
             "Point cloud",
             "3D model",
             "Gaussian Splat",
             "Digital twin-style viewer",
             "360 aerial panorama",
             "Volume report",
             "Insurance evidence pack",
             "Not sure yet"
           ].map(opt => (
             <label key={opt} className={`p-4 border transition-all cursor-pointer flex items-center gap-3 ${formData.deliverables.includes(opt) ? 'border-accent bg-accent/5' : 'border-white/5 bg-white/[0.01] hover:border-white/20'}`}>
               <input 
                 type="checkbox" 
                 className="hidden" 
                 checked={formData.deliverables.includes(opt)}
                 onChange={() => toggleCheckbox('deliverables', opt)}
               />
               <div className={`w-4 h-4 border flex items-center justify-center shrink-0 ${formData.deliverables.includes(opt) ? 'border-accent bg-accent text-dark' : 'border-white/20'}`}>
                  {formData.deliverables.includes(opt) && <CheckCircle2 className="w-2.5 h-2.5" />}
               </div>
               <span className="font-ui text-[9px] tracking-widest uppercase text-white/60 leading-tight">{opt}</span>
             </label>
           ))}
        </div>
        <p className="mt-8 font-body text-[10px] text-white/20 uppercase tracking-widest italic flex flex-wrap gap-x-8 gap-y-2">
          <span>You do not need to know the final format. Select what sounds useful and we’ll advise.</span>
          <Link href="/sample-deliverables" className="text-accent hover:underline">View sample deliverables →</Link>
          <Link href="/choose-your-output" className="text-accent hover:underline">Use output selector →</Link>
        </p>
      </div>

      {/* Step 7: Timing & Urgency */}
      <div className="section-group grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="form-field">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-px bg-accent/30" />
            <label className="field-label m-0">07. When do you need this completed?</label>
          </div>
          <select 
            className="form-input-premium uppercase text-xs"
            value={formData.timing}
            onChange={e => setFormData({...formData, timing: e.target.value})}
          >
            <option value="Urgent / as soon as possible">Urgent / as soon as possible</option>
            <option value="This week">This week</option>
            <option value="Next 2–4 weeks">Next 2–4 weeks</option>
            <option value="Specific date">Specific date</option>
            <option value="Flexible / planning stage">Flexible / planning stage</option>
          </select>
        </div>
        <div className="form-field">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-px bg-accent/30" />
            <label className="field-label m-0">Is this linked to an incident or deadline?</label>
          </div>
          <div className="flex gap-4">
             {['Yes', 'No', 'Not sure'].map(opt => (
               <button
                 key={opt}
                 type="button"
                 onClick={() => setFormData({...formData, isUrgent: opt})}
                 className={`px-6 py-3 border font-ui text-[10px] tracking-widest uppercase transition-all ${formData.isUrgent === opt ? 'border-accent text-accent bg-accent/5' : 'border-white/10 text-white/30 hover:border-white/30'}`}
               >
                 {opt}
               </button>
             ))}
          </div>
        </div>
        {formData.isUrgent === 'Yes' && (
          <div className="form-field md:col-span-2 animate-in fade-in slide-in-from-top-4">
            <label className="field-label">Briefly explain the deadline or incident</label>
            <input 
              type="text" 
              className="form-input-premium"
              value={formData.urgencyReason}
              onChange={e => setFormData({...formData, urgencyReason: e.target.value})}
            />
          </div>
        )}
      </div>

      {/* Step 8: Site Constraints */}
      <div className="section-group">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-10 h-px bg-accent/30" />
          <h2 className="font-display text-3xl text-white uppercase tracking-widest">08. Known Site Constraints</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[
             "Busy public area",
             "Residential area",
             "City centre",
             "Near airport / restricted",
             "Live construction site",
             "Industrial site",
             "Railway / highway nearby",
             "Powerlines / utilities",
             "People or crowds present",
             "Limited take-off space",
             "Indoor flight required",
             "Tall buildings",
             "Unknown / not sure"
           ].map(opt => (
             <label key={opt} className={`p-4 border transition-all cursor-pointer flex items-center gap-3 ${formData.constraints.includes(opt) ? 'border-accent bg-accent/5' : 'border-white/5 bg-white/[0.01] hover:border-white/20'}`}>
               <input 
                 type="checkbox" 
                 className="hidden" 
                 checked={formData.constraints.includes(opt)}
                 onChange={() => toggleCheckbox('constraints', opt)}
               />
               <div className={`w-4 h-4 border flex items-center justify-center shrink-0 ${formData.constraints.includes(opt) ? 'border-accent bg-accent text-dark' : 'border-white/20'}`}>
                  {formData.constraints.includes(opt) && <CheckCircle2 className="w-2.5 h-2.5" />}
               </div>
               <span className="font-ui text-[9px] tracking-widest uppercase text-white/60 leading-tight">{opt}</span>
             </label>
           ))}
        </div>
        <p className="mt-8 font-body text-[10px] text-white/20 uppercase tracking-widest italic">Do not worry if you are unsure. We review airspace, safety and access requirements during planning.</p>
      </div>

      {/* Step 10: Project Description */}
      <div className="section-group">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-10 h-px bg-accent/30" />
          <h2 className="font-display text-3xl text-white uppercase tracking-widest">09. Project Description</h2>
        </div>
        <div className="form-field">
          <label className="field-label">Tell us what you need to understand, prove, inspect, measure, monitor or visualise.</label>
          <textarea 
            required
            rows={6} 
            placeholder="Example: We need roof and gutter inspection images for a commercial building in Sheffield, with a short PDF summary and annotated defect photos for our maintenance contractor."
            className="form-input-premium h-auto py-6"
            value={formData.description}
            onChange={e => setFormData({...formData, description: e.target.value})}
          />
        </div>
      </div>

      {/* Step 11: Budget Guidance */}
      <div className="section-group grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="form-field">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-px bg-accent/30" />
            <label className="field-label m-0">10. Budget range, if known (Optional)</label>
          </div>
          <select 
            className="form-input-premium uppercase text-xs"
            value={formData.budget}
            onChange={e => setFormData({...formData, budget: e.target.value})}
          >
            <option value="Not sure yet">Not sure yet</option>
            <option value="Under £500">Under £500</option>
            <option value="£500–£1,000">£500–£1,000</option>
            <option value="£1,000–£2,500">£1,000–£2,500</option>
            <option value="£2,500–£5,000">£2,500–£5,000</option>
            <option value="£5,000+">£5,000+</option>
          </select>
          <p className="mt-4 font-body text-[10px] text-white/20 uppercase tracking-widest italic">Optional. This helps us recommend a realistic scope.</p>
        </div>
        
        <div className="form-field">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-px bg-accent/30" />
            <label className="field-label m-0">11. Supporting Files</label>
          </div>
          <div className="p-8 border border-white/5 bg-white/[0.01] border-dashed flex flex-col items-center justify-center text-center group hover:border-accent/30 transition-all">
             <Upload className="w-8 h-8 text-white/20 mb-4 group-hover:text-accent transition-colors" />
             <p className="font-ui text-[10px] tracking-widest uppercase text-white/30 group-hover:text-white transition-colors">Upload supporting files after submission</p>
             <p className="mt-2 font-body text-[8px] text-white/10 uppercase tracking-widest italic">Site photos, plans, drawings or previous reports.</p>
          </div>
        </div>
      </div>

      {/* Step 12: Consent & Submit */}
      <div className="section-group pt-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <label className="flex items-center gap-4 cursor-pointer group">
            <input 
              required
              type="checkbox" 
              className="hidden" 
              checked={formData.consent}
              onChange={() => setFormData({...formData, consent: !formData.consent})}
            />
            <div className={`w-6 h-6 border flex items-center justify-center shrink-0 ${formData.consent ? 'border-accent bg-accent text-dark' : 'border-white/20 group-hover:border-white/40'}`}>
               {formData.consent && <CheckCircle2 className="w-4 h-4" />}
            </div>
            <span className="font-ui text-[11px] tracking-widest uppercase text-white/40 leading-tight select-none">I consent to be contacted regarding this project brief.</span>
          </label>
          
          <button 
            type="submit"
            disabled={status === 'submitting'}
            className="group flex items-center gap-8 bg-accent text-dark px-16 py-8 font-display text-4xl tracking-[0.1em] transition-all hover:bg-white w-full md:w-auto shadow-[0_30px_60px_rgba(205,174,130,0.2)] disabled:opacity-50"
          >
            {status === 'submitting' ? 'TRANSMITTING...' : 'SUBMIT PROJECT BRIEF'} <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </form>
    </div>
  )
}

export default function ProjectBriefPage() {
  return (
    <main className="bg-dark text-white min-h-screen pt-40 pb-32">
      <div className="max-w-[1200px] mx-auto px-8 md:px-20">
        {/* Hero Section */}
        <header className="mb-32 relative">
          <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none -translate-y-20">
            <Activity className="w-96 h-96" />
          </div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Technical Intake</span>
          </div>
          <h1 className="text-[clamp(2.25rem,3.7vw,3.5rem)] font-extralight tracking-[-0.04em] leading-[1.02] text-white mb-5 sm:mb-6 uppercase">
            START A DRONE <br/><span className="text-accent underline underline-offset-8 decoration-accent/30">PROJECT BRIEF</span>
          </h1>
          <p className="font-body text-xl md:text-2xl font-light text-white/50 max-w-3xl uppercase tracking-widest leading-relaxed mb-12">
            Tell us what you need to inspect, measure, monitor, film or visualise. EntireFM Drone will recommend the right drone capture method, deliverables and project route.
          </p>
          <div className="flex flex-wrap gap-x-12 gap-y-6 mb-12">
            <Link href="/cost-estimator" className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent hover:text-white transition-colors flex items-center gap-3">
               Want an Indicative Estimate First? <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-white/20 font-ui text-[10px] tracking-[0.3em] uppercase">
             <span>CAA-compliant operations</span>
             <span className="w-1 h-1 bg-white/20 rounded-full my-auto" />
             <span>GVC-qualified pilots</span>
             <span className="w-1 h-1 bg-white/20 rounded-full my-auto" />
             <span>Fully insured commercial drone services</span>
             <span className="w-1 h-1 bg-white/20 rounded-full my-auto" />
             <span>Project-specific flight planning</span>
          </div>
        </header>

        {/* Reassurance Section */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
           <div className="lg:col-span-4 bg-white/[0.02] border border-white/10 p-12">
              <h3 className="font-display text-2xl text-white uppercase tracking-widest mb-6 leading-tight">YOU DO NOT NEED TO KNOW THE TECHNICAL SETUP</h3>
              <p className="font-body text-sm text-white/40 uppercase tracking-widest leading-relaxed">
                You only need to tell us the site, the outcome and any deadlines or constraints. If you are unsure whether you need inspection imagery, survey data, thermal capture, video, a Gaussian Splat or a full commercial bundle, submit the brief and we’ll advise the right route.
              </p>
           </div>
           <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Tell Us the Outcome', icon: Target, desc: 'Inspection, measurement, monitoring, media, insurance evidence or immersive visualisation.' },
                { title: 'We Plan the Workflow', icon: ClipboardCheck, desc: 'We assess the site, permissions, airspace, safety requirements, equipment and deliverables.' },
                { title: 'You Receive Usable Outputs', icon: Box, desc: 'Reports, image sets, maps, point clouds, models or visual assets depending on scope.' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-6">
                   <item.icon className="w-8 h-8 text-accent/40" />
                   <h4 className="font-display text-xl text-white uppercase tracking-widest leading-tight">{item.title}</h4>
                   <p className="font-body text-[10px] text-white/30 uppercase tracking-widest leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Briefing Form */}
        <Suspense fallback={<div className="py-20 text-center font-ui text-[11px] tracking-widest text-white/20 uppercase">Loading Terminal...</div>}>
          <BriefFormContent />
        </Suspense>

        {/* Footer Support */}
        <footer className="mt-32 pt-20 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-20">
           <div>
              <h4 className="font-display text-2xl text-white uppercase tracking-widest mb-8">NOT SURE WHAT TO CHOOSE?</h4>
              <p className="font-body text-sm text-white/40 uppercase tracking-widest leading-relaxed mb-8">
                Use the project brief assistant to identify the right drone service, commercial package and deliverables before submitting your brief.
              </p>
              <Link href="/project-brief-assistant" className="font-ui text-[11px] tracking-[0.3em] uppercase text-accent border border-accent/20 px-8 py-4 hover:bg-accent hover:text-dark transition-all">
                Open Brief Assistant →
              </Link>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                 <Shield className="w-6 h-6 text-accent/40" />
                 <p className="font-ui text-[10px] tracking-widest uppercase text-white/60">Professional Indemnity & PLI Included</p>
              </div>
              <div className="space-y-4">
                 <Clock className="w-6 h-6 text-accent/40" />
                 <p className="font-ui text-[10px] tracking-widest uppercase text-white/60">Rapid Operational Scoping</p>
              </div>
           </div>
        </footer>
      </div>
    </main>
  )
}

function ClipboardCheck(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  )
}
