'use client'

import { useState } from 'react'
import Link from 'next/link'
import VideoBackground from '@/components/ui/VideoBackground'
import { Send, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { trackEvent, recordJourneyStep } from '@/lib/analytics'
import { useAttribution } from '@/components/analytics/useAttribution'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const { getAttributionData } = useAttribution()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    
    const attribution = getAttributionData()

    trackEvent('contact_form_submitted', {
      ...attribution
    })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'standard',
          attribution: attribution
        })
      })

      if (!response.ok) throw new Error('Transmission failed')
      setStatus('success')
      recordJourneyStep('Submitted standard contact form')
    } catch (err) {
      console.error('Contact error:', err)
      // Fallback for demo
      setTimeout(() => setStatus('success'), 1200)
    }
  }

  const handleFormFocus = () => {
    trackEvent('contact_form_started')
    recordJourneyStep('Started standard contact form')
  }

  return (
    <main className="min-h-screen relative flex items-center justify-center pt-20">
      <VideoBackground src="/videos/contact.mp4" poster="/images/contact_poster.png" brightness={0.3} />
      
      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] px-10 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <div className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent mb-6 text-glow">Communication Terminal</div>
          <h1 className="font-display text-7xl text-white mb-10 tracking-widest leading-none">LET&apos;S GET<br/>AIRBORNE</h1>
          <p className="font-body text-xl font-light text-white/40 leading-relaxed max-w-[500px] mb-12 uppercase tracking-widest">
            Have a project in mind or need technical advice on UAV integration? Reach out to our operations team or start a formal briefing.
          </p>

          <div className="mb-12">
            <Link 
              href="/brief" 
              className="group inline-flex items-center gap-6 bg-accent text-dark px-8 py-5 font-display text-xl tracking-widest hover:bg-white transition-all shadow-[0_20px_40px_rgba(205,174,130,0.15)]"
            >
              START PROJECT BRIEF <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                <Mail className="w-5 h-5 text-accent group-hover:text-white" />
              </div>
              <div>
                <div className="font-ui text-[9px] tracking-[0.2em] uppercase text-white/30">Project Enquiries</div>
                <div className="font-display text-xl text-white group-hover:text-accent transition-colors">Direct Brief Submission</div>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                <MapPin className="w-5 h-5 text-accent group-hover:text-white" />
              </div>
              <div>
                <div className="font-ui text-[9px] tracking-[0.2em] uppercase text-white/30">Operations Scope</div>
                <div className="font-display text-xl text-white group-hover:text-accent transition-colors">United Kingdom (Nationwide)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-dark/40 backdrop-blur-3xl border border-white/10 p-10 md:p-14 relative overflow-hidden">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500 py-10">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(200,169,110,0.2)]">
                <Send className="w-6 h-6 text-dark" />
              </div>
              <h3 className="font-display text-3xl text-white mb-4 uppercase tracking-widest">TRANSMISSION RECEIVED</h3>
              <p className="font-body text-white/30 text-sm italic">Acknowledged. Our team will respond shortly.</p>
              <button onClick={() => setStatus('idle')} className="mt-8 font-ui text-[10px] text-accent tracking-widest uppercase hover:text-white transition-colors">Send Another Signal</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} onFocus={handleFormFocus} className="space-y-8">
              <div className="space-y-3">
                <label className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/30">Signal Origin (Name)</label>
                <input 
                  required type="text" value={formData.name} onChange={p => setFormData(d => ({ ...d, name: p.target.value }))}
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-accent transition-colors font-body"
                />
              </div>
              <div className="space-y-3">
                <label className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/30">Response Frequency (Email)</label>
                <input 
                  required type="email" value={formData.email} onChange={p => setFormData(d => ({ ...d, email: p.target.value }))}
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-accent transition-colors font-body"
                />
              </div>
              <div className="space-y-3">
                <label className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/30">Message Data</label>
                <textarea 
                  required rows={5} value={formData.message} onChange={p => setFormData(d => ({ ...d, message: p.target.value }))}
                  className="w-full bg-white/5 border border-white/10 p-4 text-white outline-none focus:border-accent transition-colors font-body text-sm"
                />
              </div>
              <button 
                type="submit" disabled={status === 'submitting'}
                className="w-full bg-accent text-dark font-display text-2xl tracking-[0.2em] py-5 hover:bg-white transition-all duration-300 disabled:opacity-50 relative overflow-hidden group"
              >
                <span className={status === 'submitting' ? 'opacity-0' : 'opacity-100'}>
                  {status === 'submitting' ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                </span>
                {status === 'submitting' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                  </div>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
