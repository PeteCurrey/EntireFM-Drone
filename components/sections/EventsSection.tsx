'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { Play, ArrowRight, Video, Camera, Sparkles } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import VideoBackground from '@/components/ui/VideoBackground'
import SectionTag from '@/components/ui/SectionTag'
import GhostNumber from '@/components/ui/GhostNumber'

export default function EventsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ['.svc-tag', '.svc-headline', '.svc-body', '.svc-cta'],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      data-index="6"
      className="noise-overlay min-h-screen py-32 px-8 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative"
    >
      <VideoBackground
        src="/videos/photography.mp4"
        poster="/images/photography_poster.png"
        brightness={0.65}
        saturation={1.25}
      />
      <div className="grid-lines" />
      <GhostNumber number="06" />

      {/* Proposition Column */}
      <div className="relative z-10 flex-1 max-w-[620px]">
        <div className="svc-tag">
          <SectionTag number="09" text="Cinematic Media & Production" />
        </div>

        <h2 className="svc-headline font-display text-section text-white mb-6">
          CINEMATIC<br />
          <span className="text-accent">AERIAL MEDIA &</span><br />
          VENUE PRODUCTION
        </h2>

        <p className="svc-body font-body text-base md:text-lg font-light leading-relaxed text-white/60 mb-8 max-w-[520px]">
          High-fidelity 4K and 6K commercial aerial cinematography, dynamic FPV flythroughs and promotional media for flagship developments, corporate events, stadium venues and brand marketing campaigns.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10 font-mono text-[10px] text-white/60 uppercase">
          <div className="p-3 bg-black/40 border border-white/5 backdrop-blur-sm">
            <span className="text-accent block text-xs font-display">6K RAW</span> Apple ProRes / D-Log
          </div>
          <div className="p-3 bg-black/40 border border-white/5 backdrop-blur-sm">
            <span className="text-accent block text-xs font-display">FPV SPEED</span> Dynamic Interior Fly
          </div>
          <div className="p-3 bg-black/40 border border-white/5 backdrop-blur-sm">
            <span className="text-accent block text-xs font-display">BROADCAST</span> Live HDMI Low-Latency
          </div>
        </div>

        <div className="svc-cta flex flex-col sm:flex-row gap-5">
          <Link
            href="/showreel"
            className="bg-accent text-white font-display text-xl tracking-[0.1em] px-8 py-4 hover:bg-accent-light transition-all flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(0,102,255,0.3)]"
          >
            <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
            Watch Showreel
          </Link>
          <Link
            href="/services/events-media"
            className="border border-white/20 text-white font-display text-xl tracking-[0.1em] px-8 py-4 hover:bg-white/10 transition-all text-center flex items-center justify-center"
          >
            Explore Media Production
          </Link>
        </div>
      </div>

      {/* Film Reel Callout Panel */}
      <div className="relative z-10 flex-1 w-full max-w-[460px]">
        <div className="border border-white/10 bg-black/70 backdrop-blur-md p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <Video className="w-5 h-5 text-accent" />
            <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/80">
              Commercial Film Standard
            </span>
          </div>

          <div className="space-y-4 font-body text-xs text-white/60 leading-relaxed font-light mb-8">
            <p>
              Dual-operator configurations allow independent camera gimbal control while the pilot maintains complex flight paths through tight architectural spaces.
            </p>
            <p>
              Color-graded deliverables delivered ready for digital campaigns, broadcast, social formats and corporate presentations.
            </p>
          </div>

          <Link
            href="/brief?service=events-media"
            className="inline-flex items-center gap-2 font-ui text-[11px] tracking-[0.2em] uppercase text-accent hover:text-white transition-colors"
          >
            Request Production Scoping <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
