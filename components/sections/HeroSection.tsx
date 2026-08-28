'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Play, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'
import VideoBackground from '@/components/ui/VideoBackground'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const tl = gsap.timeline({ delay: 0.2 })

    tl.fromTo(
      '.hero-eyebrow',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }
    )
      .fromTo(
        '.hero-headline-line',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08 },
        '-=0.4'
      )
      .fromTo(
        '.hero-supporting',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
        '-=0.3'
      )
      .fromTo(
        '.hero-actions',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
        '-=0.3'
      )
      .fromTo(
        '.hero-right-panel',
        { opacity: 0, x: 25 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power2.out' },
        '-=0.5'
      )
  }, [])

  return (
    <section
      ref={sectionRef}
      data-index="0"
      className="noise-overlay min-h-screen pt-36 pb-20 px-8 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative"
    >
      <VideoBackground
        src="/videos/hero.mp4"
        poster="/images/hero_poster.jpg"
        alt="EntireFM Drone — commercial aerial intelligence and facilities inspection"
        brightness={0.65}
        saturation={1.2}
        isHero={true}
      />
      <div className="grid-lines" />

      {/* Left Column: Hero Narrative */}
      <div className="relative z-10 flex-1 max-w-[720px] w-full">
        {/* Masterbrand Badge */}
        <div className="hero-eyebrow flex items-center gap-3 mb-8">
          <div className="w-8 h-[1px] bg-accent" />
          <span className="font-ui text-[11px] tracking-[0.35em] uppercase text-accent font-medium">
            Part of EntireFM · Aerial Intelligence Platform
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="hero-headline font-display text-hero text-white mb-8 tracking-tight">
          <div className="hero-headline-line">AERIAL INTELLIGENCE.</div>
          <div className="hero-headline-line text-accent">BUILT FOR THE REAL WORLD.</div>
        </h1>

        {/* Supporting Proposition */}
        <div className="hero-supporting mb-10 max-w-[620px]">
          <p className="font-body text-lg md:text-xl text-white/70 leading-relaxed font-light">
            Inspection, surveying, mapping and spatial capture integrated with EntireFM’s wider facilities management and engineering delivery capability.
          </p>
        </div>

        {/* Call to Actions */}
        <div className="hero-actions flex flex-col sm:flex-row items-stretch sm:items-center gap-5 mb-10">
          <Link
            href="/services"
            className="bg-accent text-white font-display text-xl tracking-[0.1em] px-10 py-5 hover:bg-accent-light transition-all text-center flex items-center justify-center gap-3 group shadow-[0_0_25px_rgba(0,102,255,0.3)]"
          >
            Explore Capabilities <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <Link
            href="/brief"
            className="border border-white/25 text-white font-display text-xl tracking-[0.1em] px-10 py-5 hover:bg-white/10 transition-all text-center"
          >
            Start a Project
          </Link>
          <Link
            href="/showreel"
            className="flex items-center justify-center gap-2 font-ui text-[11px] tracking-[0.25em] text-white/60 hover:text-white uppercase px-4 py-5 transition-colors group"
          >
            <Play className="w-3.5 h-3.5 fill-current group-hover:scale-110 transition-transform" />
            View Showreel
          </Link>
        </div>
      </div>

      {/* Right Column: Operational Trust Specs */}
      <div className="hero-right-panel relative z-10 w-full lg:max-w-[420px] shrink-0">
        <div className="border border-white/10 bg-black/60 backdrop-blur-md p-8">
          <div className="mb-6 pb-6 border-b border-white/10">
            <span className="font-ui text-[9px] tracking-[0.3em] uppercase text-accent block mb-2">
              UK Airspace Compliance
            </span>
            <p className="font-body text-xs text-white/60 leading-relaxed font-light">
              CAA Operational Authorisation, GVC-certified flight pilots, £10M Public Liability insurance and complete NOTAM management.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 font-mono text-[11px]">
            <div className="p-3 bg-white/[0.03] border border-white/5">
              <div className="text-accent font-display text-xl mb-0.5">GVC</div>
              <div className="text-white/40 text-[9px] uppercase font-ui tracking-wider">Certified Crew</div>
            </div>
            <div className="p-3 bg-white/[0.03] border border-white/5">
              <div className="text-accent font-display text-xl mb-0.5">CAA</div>
              <div className="text-white/40 text-[9px] uppercase font-ui tracking-wider">Compliant Ops</div>
            </div>
            <div className="p-3 bg-white/[0.03] border border-white/5">
              <div className="text-accent font-display text-xl mb-0.5">4K / 6K</div>
              <div className="text-white/40 text-[9px] uppercase font-ui tracking-wider">High-Res Optical</div>
            </div>
            <div className="p-3 bg-white/[0.03] border border-white/5">
              <div className="text-accent font-display text-xl mb-0.5">CAFM</div>
              <div className="text-white/40 text-[9px] uppercase font-ui tracking-wider">FM Integration</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-40 animate-pulse pointer-events-none">
        <span className="font-ui text-[9px] tracking-[0.3em] uppercase text-white/70">SCROLL TO EXPLORE</span>
        <div className="h-6 w-[1px] bg-accent" />
      </div>
    </section>
  )
}
