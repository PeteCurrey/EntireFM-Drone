'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Play, ArrowRight } from 'lucide-react'
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
      className="noise-overlay min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-20 px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative"
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

      {/* Left Column: Hero Narrative (Masterbrand Proportions) */}
      <div className="relative z-10 flex-1 max-w-3xl w-full">
        {/* Eyebrow */}
        <div className="hero-eyebrow inline-flex items-center gap-2.5 mb-5 sm:mb-6 text-[11px] font-light uppercase tracking-[0.18em] text-white/70">
          <span className="w-6 h-[1px] bg-accent" />
          <span>Part of EntireFM<span className="mx-2 text-white/25">/</span>Aerial Intelligence Platform</span>
        </div>

        {/* Primary Headline — Work Sans 200, matching EntireFM masterbrand scale */}
        <h1 className="hero-headline text-[clamp(2.25rem,3.7vw,3.5rem)] font-extralight tracking-[-0.04em] leading-[1.02] text-white mb-5 sm:mb-6">
          <div className="hero-headline-line">Aerial intelligence.</div>
          <div className="hero-headline-line text-accent">Built for the real world.</div>
        </h1>

        {/* Supporting Proposition */}
        <div className="hero-supporting mb-8 sm:mb-10 max-w-2xl">
          <p className="text-sm sm:text-base lg:text-[1.0625rem] font-light leading-relaxed text-white/70">
            Inspection, surveying, mapping and spatial capture integrated with EntireFM’s wider facilities management and engineering delivery capability.
          </p>
        </div>

        {/* Call to Actions — Proportional, refined button styling */}
        <div className="hero-actions flex flex-wrap items-center gap-3.5 sm:gap-4">
          <Link
            href="/services"
            className="px-6 py-3.5 text-sm font-normal rounded-[2px] bg-accent text-white hover:bg-accent-light transition-all inline-flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,102,255,0.25)] group"
          >
            Explore Capabilities <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/brief"
            className="px-6 py-3.5 text-sm font-normal rounded-[2px] border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/30 transition-all inline-flex items-center justify-center"
          >
            Start a Project
          </Link>
          <Link
            href="/showreel"
            className="px-4 py-3.5 text-xs font-light tracking-[0.14em] uppercase text-white/60 hover:text-white transition-colors inline-flex items-center justify-center gap-2 group"
          >
            <Play className="w-3.5 h-3.5 fill-current group-hover:scale-110 transition-transform" />
            View Showreel
          </Link>
        </div>
      </div>

      {/* Right Column: Operational Trust Specs (Subordinate Supporting Panel) */}
      <div className="hero-right-panel relative z-10 w-full lg:max-w-[380px] shrink-0">
        <div className="rounded-[2px] border border-white/10 bg-black/50 backdrop-blur-xl p-6 sm:p-7">
          <div className="mb-5 pb-5 border-b border-white/10">
            <span className="text-[10px] font-light tracking-[0.2em] uppercase text-accent block mb-1.5">
              UK Airspace Compliance
            </span>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              CAA Operational Authorisation, GVC-certified flight pilots, £10M Public Liability insurance and complete NOTAM management.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 bg-white/[0.03] border border-white/5 rounded-[2px]">
              <div className="text-accent font-extralight text-2xl tracking-tight mb-0.5">GVC</div>
              <div className="text-white/40 text-[9px] uppercase font-light tracking-wider">Certified Crew</div>
            </div>
            <div className="p-3 bg-white/[0.03] border border-white/5 rounded-[2px]">
              <div className="text-accent font-extralight text-2xl tracking-tight mb-0.5">CAA</div>
              <div className="text-white/40 text-[9px] uppercase font-light tracking-wider">Compliant Ops</div>
            </div>
            <div className="p-3 bg-white/[0.03] border border-white/5 rounded-[2px]">
              <div className="text-accent font-extralight text-2xl tracking-tight mb-0.5">4K / 6K</div>
              <div className="text-white/40 text-[9px] uppercase font-light tracking-wider">High-Res Optical</div>
            </div>
            <div className="p-3 bg-white/[0.03] border border-white/5 rounded-[2px]">
              <div className="text-accent font-extralight text-2xl tracking-tight mb-0.5">CAFM</div>
              <div className="text-white/40 text-[9px] uppercase font-light tracking-wider">FM Integration</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-40 animate-pulse pointer-events-none">
        <span className="text-[9px] font-light tracking-[0.25em] uppercase text-white/70">SCROLL TO EXPLORE</span>
        <div className="h-5 w-[1px] bg-accent" />
      </div>
    </section>
  )
}
