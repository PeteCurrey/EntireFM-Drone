'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Send, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react'
import VideoBackground from '@/components/ui/VideoBackground'
import { useAttribution } from '@/components/analytics/useAttribution'
import { trackEvent, recordJourneyStep } from '@/lib/analytics'

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Commercial Drone Survey',
    message: '',
    _hp: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
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
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'submitting') return
    setStatus('submitting')
    setErrorMessage('')

    const attribution = getAttributionData()

    trackEvent('homepage_contact_submitted', {
      service: formData.service,
      ...attribution,
    })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'standard',
          source_page: '/',
          attribution,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit enquiry')
      }

      setStatus('success')
      recordJourneyStep('Submitted homepage contact form')
    } catch (err: unknown) {
      console.error('Contact error:', err)
      setStatus('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Unable to transmit enquiry. Please try again or email us directly.'
      )
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      data-index="11"
      className="min-h-screen bg-dark relative flex items-center justify-center py-32 px-6 sm:px-10 md:px-20 overflow-hidden"
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

      <div className="relative z-10 w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        <div>
          <div data-contact-anim className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent mb-6">
            Project Engagement
          </div>
          <h2 data-contact-anim className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-8 tracking-tight leading-none">
            START YOUR<br />
            <span className="text-accent">AERIAL BRIEF</span>
          </h2>
          <p data-contact-anim className="font-body text-base md:text-lg font-light text-white/50 leading-relaxed max-w-[500px] mb-10">
            Whether scoping a single roof condition audit or rolling out nationwide commercial asset monitoring, our operations desk is ready to assist.
          </p>

          <div className="space-y-6">
            <div data-contact-anim className="flex items-center gap-5">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="font-ui text-[9px] tracking-[0.2em] uppercase text-white/30 mb-0.5">Direct Operations</div>
                <a href="mailto:enquiries@tfts.co.uk" className="text-base font-medium text-white hover:text-accent transition-colors">
                  enquiries@tfts.co.uk
                </a>
              </div>
            </div>

            <div data-contact-anim className="flex items-center gap-5">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-ui text-[9px] tracking-[0.2em] uppercase text-white/30 mb-0.5">Deployment Footprint</div>
                <div className="text-base font-medium text-white">United Kingdom (Nationwide Coverage)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div data-contact-anim className="bg-dark/70 border border-white/10 p-8 sm:p-12 relative backdrop-blur-md">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16 animate-in fade-in duration-500">
              <div className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,102,255,0.4)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-3xl text-white mb-3 tracking-wide uppercase">
                Enquiry Received
              </h3>
              <p className="font-body text-white/60 text-sm leading-relaxed max-w-md mb-8">
                Thank you. Your enquiry has been received. A member of the TFTS team will contact you shortly to review your project requirements.
              </p>
              <button
                onClick={() => {
                  setStatus('idle')
                  setFormData({ name: '', email: '', phone: '', company: '', service: 'Commercial Drone Survey', message: '', _hp: '' })
                }}
                className="font-ui text-[11px] text-accent tracking-widest uppercase hover:underline"
              >
                Submit another enquiry →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot field */}
              <input
                type="text"
                name="_hp"
                value={formData._hp}
                onChange={(e) => setFormData((d) => ({ ...d, _hp: e.target.value }))}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {status === 'error' && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs rounded-[2px]">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 p-3 text-white text-sm outline-none focus:border-accent transition-colors rounded-[2px]"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 p-3 text-white text-sm outline-none focus:border-accent transition-colors rounded-[2px]"
                    placeholder="john@company.co.uk"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">
                    Telephone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData((d) => ({ ...d, phone: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 p-3 text-white text-sm outline-none focus:border-accent transition-colors rounded-[2px]"
                    placeholder="07123 456789"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData((d) => ({ ...d, company: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 p-3 text-white text-sm outline-none focus:border-accent transition-colors rounded-[2px]"
                    placeholder="Acme Facilities Management"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">
                  Service of Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData((d) => ({ ...d, service: e.target.value }))}
                  className="w-full bg-dark border border-white/10 p-3 text-white text-sm outline-none focus:border-accent transition-colors rounded-[2px]"
                >
                  <option value="Commercial Drone Survey">Commercial Drone Survey</option>
                  <option value="Drone Roof Inspections">Drone Roof & Parapet Inspection</option>
                  <option value="Façade & Cladding Inspection">High-Level Façade & Cladding Inspection</option>
                  <option value="Thermal Imaging & Energy Loss">Radiometric Thermal Imaging & Heat Loss</option>
                  <option value="Solar Panel PV Inspection">Solar PV Array Inspection</option>
                  <option value="Surveying & Photogrammetry">Surveying & Photogrammetry</option>
                  <option value="Construction Monitoring">Construction Progress & Site Monitoring</option>
                  <option value="TFTS 3D Spatial Capture">TFTS 3D Interactive Spatial Capture</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">
                  Project Scope & Location *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 p-3.5 text-white text-sm outline-none focus:border-accent transition-colors rounded-[2px]"
                  placeholder="Outline your site requirements, location, timeframe, or specific issues to inspect..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-accent hover:bg-accent-light text-white font-display text-xl tracking-wider py-4 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 rounded-[2px] shadow-[0_5px_20px_rgba(0,102,255,0.25)]"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Transmitting Enquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
