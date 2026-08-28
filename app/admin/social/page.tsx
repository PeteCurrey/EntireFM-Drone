'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import { 
  Share2, 
  Sparkles, 
  Linkedin, 
  Instagram, 
  X, 
  Copy, 
  RefreshCcw,
  Terminal
} from 'lucide-react'

export default function SocialGenPage() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [output, setOutput] = useState<{ linkedin?: string; instagram?: string; x?: string } | null>(null)

  const handleGenerate = async () => {
    setIsGenerating(true)
    // In a real app, this would call /api/admin/generate
    // For demo/prototype, we simulate the high-quality output
    setTimeout(() => {
      setOutput({
        linkedin: `[Operational Update] High-precision asset monitoring in progress. EntireFM Drone is currently deploying M350 RTK systems across UK infrastructure hubs to deliver mm-perfect structural intelligence. \n\nOur pilots are operating in complex airspace under full GVC authority, ensuring that "seeing further" leads to "knowing more". \n\n#DronesInConstruction #UAV #AssetInspection #EntireFMDrone`,
        instagram: `Commanding the horizon. 🚁🇬🇧\n\nPrecision at every coordinate. High-fidelity cinematic data capture. \n\n#EntireFMDrone #DronePhotography #UKPilots #CinematicUAV`,
        x: `New technical project brief acknowledged. Fleet deploying to Sector 07 for infrastructure monitoring. Precision intelligence, delivered. ⚡️ #EntireFMDrone #UAV`
      })
      setIsGenerating(false)
    }, 2000)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert('Signal copied to buffer.')
  }

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-20">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-3 py-2 px-4 border border-accent/20 bg-accent/5 mb-6">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent">AI Content Synthesis</span>
        </div>
        <h1 className="font-display text-5xl text-white tracking-widest uppercase mb-4">Social Intelligence</h1>
        <p className="font-body text-xs text-white/30 tracking-[0.3em] uppercase">Synthesize brand-aligned signals from mission data</p>
      </div>

      {/* Input Deck */}
      <div className="bg-white/[0.02] border border-white/5 p-10 backdrop-blur-sm">
        <label className="block font-ui text-[10px] tracking-widest text-white/40 uppercase mb-4">Input Parameters (Mission Data / Service News)</label>
        <div className="relative">
          <Terminal className="absolute left-6 top-6 w-4 h-4 text-white/20" />
          <textarea 
            rows={5}
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            placeholder="e.g. Completed a major bridge inspection in Birmingham using the M350 RTK. Noteworthy findings: 40% time reduction compared to traditional scaffolding."
            className="w-full bg-white/5 border border-white/10 p-10 pl-16 text-white outline-none focus:border-accent transition-colors font-body text-sm leading-relaxed"
          />
        </div>
        <div className="mt-8 flex justify-end">
          <button 
            onClick={handleGenerate}
            disabled={isGenerating || !prompt}
            className="flex items-center gap-4 bg-accent text-dark px-10 py-5 font-display text-xl tracking-widest hover:bg-white transition-all disabled:opacity-30 group"
          >
            {isGenerating ? (
              <>SYNTHESIZING... <RefreshCcw className="w-5 h-5 animate-spin" /></>
            ) : (
              <>GENERATE CONTENT DECK <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" /></>
            )}
          </button>
        </div>
      </div>

      {/* Output Deck */}
      {output && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
          {[
            { platform: 'LinkedIn', icon: Linkedin, content: output.linkedin, color: 'text-blue-400' },
            { platform: 'Instagram', icon: Instagram, content: output.instagram, color: 'text-pink-400' },
            { platform: 'X Corridors', icon: X, content: output.x, color: 'text-white' },
          ].map((block, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className={`p-3 bg-white/5 border border-white/10 ${block.color}`}>
                    <block.icon className="w-4 h-4" />
                  </div>
                  <button 
                    onClick={() => copyToClipboard(block.content || '')}
                    className="text-white/20 hover:text-accent transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <div className="font-ui text-[11px] tracking-widest text-white uppercase mb-4">{block.platform}</div>
                <p className="font-body text-[13px] text-white/50 leading-relaxed italic line-clamp-[10]">
                  &quot;{block.content}&quot;
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/5">
                 <button className="font-ui text-[10px] text-accent tracking-widest uppercase hover:text-white transition-colors">Adjust Voice →</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Brand Voice Guide */}
      <div className="border-l-2 border-accent/20 pl-8 space-y-4">
        <h4 className="font-display text-white tracking-widest uppercase">Brand Voice Constraints</h4>
        <div className="flex flex-wrap gap-4">
          {['Tough', 'Technical', 'Premium', 'British', 'Clinical', 'Aero-focused'].map(tag => (
            <span key={tag} className="font-ui text-[9px] text-white/20 border border-white/10 px-3 py-1 uppercase tracking-widest">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
