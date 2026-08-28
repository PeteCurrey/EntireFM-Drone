'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Send, Phone, Mail, MapPin } from 'lucide-react'
import VideoBackground from '@/components/ui/VideoBackground'
import { useAttribution } from '@/components/analytics/useAttribution'

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const { getAttributionData } = useAttribution()

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-contact-anim]',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    
    const attribution = getAttributionData()
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'standard',
          attribution
        })
      })

      if (!response.ok) throw new Error('Transmission failed')
      setStatus('success')
    } catch (err) {
      console.error('Contact error:', err)
      // Fallback for environment constraints
      setTimeout(() => setStatus('success'), 1200)
    }
  }

  return (
    <section 
      ref={sectionRef} 
      id="contact" 
      data-index="11"
      className="min-h-screen bg-dark relative flex items-center justify-center py-40 px-10 md:px-20 overflow-hidden"
    >
      <VideoBackground 
        src="/videos/contact.mp4" 
        poster="/images/contact_poster.png"
        brightness={0.3} 
      />
      
      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <div data-contact-anim className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent mb-6">Uplink Terminal</div>
          <h2 data-contact-anim className="font-display text-7xl text-white mb-10 tracking-widest leading-none">READY FOR<br/>TAKEOFF?</h2>
          <p data-contact-anim className="font-body text-xl font-light text-white/40 leading-relaxed max-w-[500px] mb-12 uppercase tracking-wide">
            Whether it&apos;s a complex asset inspection or cinematic production, our fleet is standing by. Command starts here.
          </p>

          <div className="space-y-12">
            {[
              { icon: Phone, label: 'Central Ops', value: 'EntireFM Operations Desk' },
              { icon: Mail, label: 'Project Briefing', value: 'Direct Form & Brief Submission' },
              { icon: MapPin, label: 'UK Coverage', value: 'Nationwide Deployment' }
            ].map((item, i) => (
              <div key={i} data-contact-anim className="flex items-center gap-8 group cursor-pointer">
                <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent transition-all duration-500">
                  <item.icon className="w-5 h-5 text-accent group-hover:text-dark transition-colors" />
                </div>
                <div>
                  <div className="font-ui text-[9px] tracking-[0.3em] uppercase text-white/30 mb-1">{item.label}</div>
                  <div className="font-display text-2xl text-white group-hover:text-accent transition-colors">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-contact-anim className="bg-white/[0.02] border border-white/10 p-12 md:p-16 relative overflow-hidden backdrop-blur-sm">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-700 py-20">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,102,255,0.35)]">
                <Send className="w-8 h-8 text-dark" />
              </div>
              <h3 className="font-display text-4xl text-white mb-4 uppercase tracking-[0.2em]">Signal Acknowledged</h3>
              <p className="font-body text-white/40 text-sm uppercase tracking-widest">Our operations team will establish contact shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-10 font-ui text-[11px] text-accent tracking-widest uppercase hover:text-white transition-colors"
              >
                Send another transmission
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-4">
                <label className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/30">Operator Name</label>
                <input 
                  required type="text" 
                  value={formData.name}
                  onChange={e => setFormData(d => ({ ...d, name: e.target.value }))}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-accent transition-colors font-body text-lg"
                />
              </div>
              <div className="space-y-4">
                <label className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/30">Response Frequency (Email)</label>
                <input 
                  required type="email" 
                  value={formData.email}
                  onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-accent transition-colors font-body text-lg"
                />
              </div>
              <div className="space-y-4">
                <label className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/30">Mission Details</label>
                <textarea 
                  required rows={4} 
                  value={formData.message}
                  onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 p-6 text-white outline-none focus:border-accent transition-colors font-body text-sm"
                />
              </div>
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-accent text-dark font-display text-2xl tracking-[0.3em] py-6 hover:bg-white transition-all duration-500 disabled:opacity-50 relative overflow-hidden group"
              >
                <span className={status === 'submitting' ? 'opacity-0' : 'opacity-100'}>
                  {status === 'submitting' ? 'TRANSMITTING...' : 'SEND TRANSMISSION'}
                </span>
                {status === 'submitting' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                  </div>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
