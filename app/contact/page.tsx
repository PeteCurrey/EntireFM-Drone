'use client'

import { useState } from 'react'
import Link from 'next/link'
import VideoBackground from '@/components/ui/VideoBackground'
import { Send, Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react'
import { trackEvent, recordJourneyStep } from '@/lib/analytics'
import { useAttribution } from '@/components/analytics/useAttribution'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Commercial Drone Survey',
    message: '',
    _hp: '', // honeypot
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const { getAttributionData } = useAttribution()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'submitting') return
    setStatus('submitting')
    setErrorMessage('')

    const attribution = getAttributionData()

    trackEvent('contact_form_submitted', {
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
          source_page: '/contact',
          attribution,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit enquiry')
      }

      setStatus('success')
      recordJourneyStep('Submitted standard contact form')
    } catch (err: unknown) {
      console.error('Contact error:', err)
      setStatus('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Unable to submit enquiry. Please try again or call us directly.'
      )
    }
  }

  const handleFormFocus = () => {
    trackEvent('contact_form_started')
    recordJourneyStep('Started standard contact form')
  }

  return (
    <main className="min-h-screen relative flex items-center justify-center pt-28 pb-20">
      <VideoBackground src="/videos/contact.mp4" poster="/images/contact_poster.png" brightness={0.3} />

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] px-6 sm:px-10 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        <div>
          <div className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent mb-6">
            Commercial Enquiries
          </div>
          <h1 className="text-[clamp(2.25rem,3.7vw,3.5rem)] font-extralight tracking-[-0.04em] leading-[1.02] text-white mb-5 sm:mb-6">
            COMMERCIAL DRONE<br />
            <span className="text-accent">SURVEYS & INSPECTION</span>
          </h1>
          <p className="font-body text-base md:text-lg font-light text-white/50 leading-relaxed max-w-[500px] mb-10">
            Have a project in mind or need technical advice on UAV deployment across UK airspace? Reach out to our operations desk or submit a detailed brief.
          </p>

          <div className="mb-10">
            <Link
              href="/brief"
              className="group inline-flex items-center gap-4 bg-accent text-white px-8 py-4 font-display text-xl tracking-widest hover:bg-accent-light transition-all shadow-[0_10px_30px_rgba(0,102,255,0.2)]"
            >
              START PROJECT BRIEF <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-5">
              <div className="w-11 h-11 bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="font-ui text-[9px] tracking-[0.2em] uppercase text-white/30">Direct Email</div>
                <a href="mailto:enquiries@tfts.co.uk" className="text-sm font-medium text-white hover:text-accent transition-colors">
                  enquiries@tfts.co.uk
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-11 h-11 bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-ui text-[9px] tracking-[0.2em] uppercase text-white/30">Operations Scope</div>
                <div className="text-sm font-medium text-white">United Kingdom (Nationwide Coverage)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="bg-dark/60 backdrop-blur-2xl border border-white/10 p-8 sm:p-12 relative">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in duration-500">
              <div className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,102,255,0.4)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-3xl text-white mb-3 tracking-wide uppercase">
                Enquiry Received
              </h3>
              <p className="font-body text-white/60 text-sm leading-relaxed max-w-md mb-8">
                Thank you. Your enquiry has been received. A member of the TFTS technical operations team will review your requirements and contact you shortly.
              </p>
              <button
                onClick={() => {
                  setStatus('idle')
                  setFormData({ name: '', email: '', phone: '', company: '', service: 'Commercial Drone Survey', message: '', _hp: '' })
                }}
                className="font-ui text-[11px] text-accent tracking-widest uppercase hover:underline"
              >
                Send Another Message →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} onFocus={handleFormFocus} className="space-y-6">
              {/* Honeypot field (hidden from legitimate users) */}
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 p-3 text-white text-sm outline-none focus:border-accent transition-colors rounded-[2px]"
                    placeholder="Jane Smith"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 p-3 text-white text-sm outline-none focus:border-accent transition-colors rounded-[2px]"
                    placeholder="jane@company.co.uk"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
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

                <div className="space-y-2">
                  <label className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">
                    Company / Organisation
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData((d) => ({ ...d, company: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 p-3 text-white text-sm outline-none focus:border-accent transition-colors rounded-[2px]"
                    placeholder="Acme Estates Ltd"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">
                  Service Requirement
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData((d) => ({ ...d, service: e.target.value }))}
                  className="w-full bg-dark/80 border border-white/10 p-3 text-white text-sm outline-none focus:border-accent transition-colors rounded-[2px]"
                >
                  <option value="Commercial Drone Survey">Commercial Drone Survey (General)</option>
                  <option value="Drone Roof Inspections">Drone Roof & Parapet Inspection</option>
                  <option value="Façade & Cladding Inspection">High-Level Façade & Cladding Inspection</option>
                  <option value="Thermal Imaging & Energy Loss">Radiometric Thermal Imaging & Heat Loss</option>
                  <option value="Solar Panel PV Inspection">Solar PV Farm & Rooftop Array Audit</option>
                  <option value="Surveying & Photogrammetry">Surveying, Mapping & Photogrammetry</option>
                  <option value="Construction Monitoring">Construction Progress & Site Monitoring</option>
                  <option value="TFTS 3D Spatial Capture">TFTS 3D Interactive Spatial Capture</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">
                  Project Details & Scope *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 p-3.5 text-white text-sm outline-none focus:border-accent transition-colors rounded-[2px]"
                  placeholder="Describe your site location, access constraints, required deliverables..."
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
    </main>
  )
}
