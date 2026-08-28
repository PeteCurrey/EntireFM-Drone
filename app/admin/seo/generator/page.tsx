'use client'

import { useState } from 'react'
import { 
  PlusCircle, Search, Layers, MapPin, Building2, 
  Target, Zap, AlertCircle, ArrowRight, CheckCircle2
} from 'lucide-react'

const SERVICES = ['Drone Roof Inspections', 'Drone Surveying & Mapping', 'Construction Drone Monitoring', 'Drone Thermal Imaging', 'TFTS 3D Capture']
const LOCATIONS = ['London', 'Manchester', 'Birmingham', 'Leeds', 'Bristol', 'Sheffield', 'Glasgow', 'Bristol', 'Newcastle']
const SECTORS = ['Facilities Management', 'Construction', 'Commercial Property', 'Insurance', 'Civil Engineering', 'Managing Agents']

export default function PageGenerator() {
  const [selectedService, setSelectedService] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedSector, setSelectedSector] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [previewData, setPreviewData] = useState<any>(null)

  const handleGenerate = () => {
    setIsGenerating(true)
    // Simulate generation delay
    setTimeout(() => {
      setPreviewData({
        h1: `${selectedService} ${selectedLocation ? `in ${selectedLocation}` : ''} ${selectedSector ? `for ${selectedSector}` : ''}`,
        seoTitle: `${selectedService} ${selectedLocation ? `in ${selectedLocation}` : ''} ${selectedSector ? `for ${selectedSector}` : ''} | TFTS Drone`,
        slug: `/${selectedLocation ? `drone-services/${selectedLocation.toLowerCase()}/` : 'industries/'}${selectedService.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`,
        qualityScore: 65,
        warnings: ['Thin content (AI draft only)', 'Missing local nuance', 'Missing sector-specific FAQs']
      })
      setIsGenerating(false)
    }, 1500)
  }

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-4xl text-white uppercase tracking-widest mb-2">Page Generator</h1>
          <p className="font-ui text-[11px] text-white/40 tracking-[0.2em] uppercase">Controlled Programmatic Generation</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Configuration Panel */}
        <div className="lg:col-span-4 space-y-8">
          <div className="p-8 border border-white/10 bg-white/[0.01]">
             <h2 className="font-display text-xl text-white uppercase tracking-widest mb-8 border-b border-white/5 pb-4 flex items-center gap-3">
               <Zap className="w-4 h-4 text-accent" /> Configuration
             </h2>
             
             <div className="space-y-8">
                <div className="space-y-4">
                   <label className="font-ui text-[9px] tracking-widest text-white/30 uppercase block">Primary Service</label>
                   <select 
                     value={selectedService}
                     onChange={e => setSelectedService(e.target.value)}
                     className="w-full bg-white/5 border border-white/10 p-4 font-ui text-[10px] text-white uppercase tracking-widest outline-none focus:border-accent/50"
                   >
                     <option value="">SELECT SERVICE...</option>
                     {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                   </select>
                </div>

                <div className="space-y-4">
                   <label className="font-ui text-[9px] tracking-widest text-white/30 uppercase block">Target Location (Optional)</label>
                   <select 
                     value={selectedLocation}
                     onChange={e => setSelectedLocation(e.target.value)}
                     className="w-full bg-white/5 border border-white/10 p-4 font-ui text-[10px] text-white uppercase tracking-widest outline-none focus:border-accent/50"
                   >
                     <option value="">NATIONWIDE / NONE</option>
                     {LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
                   </select>
                </div>

                <div className="space-y-4">
                   <label className="font-ui text-[9px] tracking-widest text-white/30 uppercase block">Target Sector (Optional)</label>
                   <select 
                     value={selectedSector}
                     onChange={e => setSelectedSector(e.target.value)}
                     className="w-full bg-white/5 border border-white/10 p-4 font-ui text-[10px] text-white uppercase tracking-widest outline-none focus:border-accent/50"
                   >
                     <option value="">GENERAL / NONE</option>
                     {SECTORS.map(s => <option key={s} value={s}>{s}</option>)}
                   </select>
                </div>

                <button 
                  onClick={handleGenerate}
                  disabled={!selectedService || isGenerating}
                  className={`w-full py-5 font-display text-lg tracking-widest uppercase transition-all ${
                    !selectedService || isGenerating 
                    ? 'bg-white/5 text-white/20 cursor-not-allowed' 
                    : 'bg-accent text-dark hover:bg-white'
                  }`}
                >
                  {isGenerating ? 'ANALYSING COMBINATION...' : 'GENERATE DRAFT'}
                </button>
             </div>
          </div>
          
          <div className="p-8 border border-white/5 bg-dark italic">
             <p className="font-body text-[10px] text-white/30 uppercase tracking-widest leading-relaxed">
               Every generated page starts as <span className="text-accent/60">DRAFT / NOINDEX</span>. It must pass human review and unique content scoring before going live.
             </p>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="lg:col-span-8">
           {previewData ? (
             <div className="border border-white/10 bg-white/[0.01] animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="p-8 border-b border-white/5 bg-white/[0.01] flex items-center justify-between">
                   <h2 className="font-display text-xl text-white uppercase tracking-widest flex items-center gap-3">
                     <AlertCircle className="w-4 h-4 text-yellow-500" /> Draft Preview
                   </h2>
                   <div className="flex items-center gap-4">
                      <span className="font-ui text-[10px] text-white/30 uppercase tracking-widest">Quality Score:</span>
                      <span className="font-display text-2xl text-yellow-500">{previewData.qualityScore}</span>
                   </div>
                </div>
                
                <div className="p-10 space-y-10">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-6">
                         <div className="space-y-2">
                            <span className="font-ui text-[9px] tracking-widest text-white/20 uppercase">H1 Headline</span>
                            <div className="font-display text-xl text-white uppercase tracking-wider">{previewData.h1}</div>
                         </div>
                         <div className="space-y-2">
                            <span className="font-ui text-[9px] tracking-widest text-white/20 uppercase">SEO Title</span>
                            <div className="font-body text-sm text-white/60">{previewData.seoTitle}</div>
                         </div>
                      </div>
                      <div className="space-y-6">
                         <div className="space-y-2">
                            <span className="font-ui text-[9px] tracking-widest text-white/20 uppercase">Target URL</span>
                            <div className="font-mono text-[10px] text-accent uppercase tracking-widest truncate">{previewData.slug}</div>
                         </div>
                         <div className="space-y-4">
                            <span className="font-ui text-[9px] tracking-widest text-white/20 uppercase">Critical Warnings</span>
                            <div className="space-y-2">
                               {previewData.warnings.map((w: string, i: number) => (
                                 <div key={i} className="flex items-center gap-3 text-[9px] text-red-400 uppercase tracking-widest">
                                    <AlertCircle className="w-3 h-3" /> {w}
                                 </div>
                               ))}
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="pt-10 border-t border-white/5 flex gap-4">
                      <button className="flex-1 py-4 border border-white/10 font-ui text-[10px] tracking-widest text-white uppercase hover:bg-white/5 transition-all">
                        Edit Full Draft
                      </button>
                      <button className="flex-1 py-4 bg-white/5 border border-white/10 font-ui text-[10px] tracking-widest text-white/40 uppercase cursor-not-allowed">
                        Publish [LOCKED]
                      </button>
                   </div>
                </div>
             </div>
           ) : (
             <div className="h-full border border-dashed border-white/10 flex flex-col items-center justify-center py-32 text-center text-white/20">
                <PlusCircle className="w-12 h-12 mb-6 opacity-20" />
                <p className="font-ui text-[11px] tracking-[0.4em] uppercase max-w-xs">
                  Configure a combination on the left to generate a landing page draft.
                </p>
             </div>
           )}
        </div>
      </div>
    </div>
  )
}
