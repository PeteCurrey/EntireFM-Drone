'use client'

// components/sections/PhotographySection.tsx
'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { gsap, registerGSAP } from '@/lib/gsap-init'
import { useLenis } from '@/lib/lenis'
import VideoBackground from '@/components/ui/VideoBackground'
import SectionTag from '@/components/ui/SectionTag'
import FeatureTags from '@/components/ui/FeatureTags'
import GhostNumber from '@/components/ui/GhostNumber'

export default function PhotographySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const lenis = useLenis()

  useEffect(() => { registerGSAP();
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ['.svc-tag', '.svc-headline', '.svc-body', '.feature-tags', '.svc-cta'],
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { 
            trigger: sectionRef.current, 
            start: 'top 75%', 
            toggleActions: 'play none none reverse' 
          }
        }
      )

      gsap.fromTo(
        '.panel-left',
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0,
          duration: 1.0,
          ease: 'power3.out',
          delay: 0.2,
          scrollTrigger: { 
            trigger: sectionRef.current, 
            start: 'top 75%', 
            toggleActions: 'play none none reverse' 
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features = [
    '4K / 6K Video', 'Real Estate', 'Events & Film', 
    'Commercial', 'HDR Stills', '360° Panoramas'
  ]

  const showreels = [
    { label: 'SHOT 01 · PROPERTY REVEAL', quality: '4K', href: '/showreel#shot-01' },
    { label: 'SHOT 02 · COASTAL ORBIT', quality: '4K', href: '/showreel#shot-02' },
    { label: 'SHOT 03 · COMMERCIAL GLIDE', quality: '4K', href: '/showreel#shot-03' },
  ]

  const scrollToContact = () => {
    if (lenis) {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        lenis.scrollTo(contactSection)
      }
    }
  }

  return (
    <section ref={sectionRef} data-index="2" className="noise-overlay flex flex-col md:flex-row-reverse items-center justify-between gap-12 md:gap-24">
      <VideoBackground 
        src="/videos/photography.mp4" 
        poster="/images/photography_poster.png"
        brightness={0.75} 
        saturation={1.3}
      />
      <div className="grid-lines" />
      <GhostNumber number="02" position="left" />

      {/* Content Column */}
      <div className="relative z-10 flex-1 max-w-[640px]">
        <div className="svc-tag">
          <SectionTag number="02" text="Service" />
        </div>

        <h2 className="svc-headline font-display text-section text-white mb-8">
          AERIAL<br/>PHOTOGRAPHY<br/>& FILM
        </h2>

        <p className="svc-body font-body text-[16px] font-light leading-relaxed text-white/50 mb-8 max-w-[500px]">
          Cinematic 4K capture from perspectives that redefine how your project is seen. Whether it&apos;s a luxury property, a commercial development, or a live event — we frame it with editorial precision and deliver footage that moves people.
        </p>

        <div className="feature-tags">
          <FeatureTags tags={features} />
        </div>

        <button 
          onClick={scrollToContact}
          className="svc-cta flex items-center gap-4 font-ui text-[13px] tracking-[0.25em] text-accent group transition-all"
        >
          REQUEST SHOWREEL 
          <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
        </button>
      </div>

      {/* Showreel Panel */}
      <div className="panel-left relative z-10 flex-1 w-full max-w-[450px]">
        <div className="bg-black/55 border border-white/7 p-4 backdrop-blur-md">
          <div className="flex flex-col gap-3">
            {showreels.map((item, idx) => (
              <Link href={item.href} key={idx} className="relative h-20 bg-white/[0.04] flex items-center px-6 group cursor-pointer transition-colors hover:bg-white/[0.08]">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" />
                <span className="font-ui text-[11px] tracking-[0.2em] uppercase text-white/80">
                  {item.label}
                </span>
                <span className="absolute top-4 right-4 font-ui text-[10px] text-accent font-bold">
                  {item.quality}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
