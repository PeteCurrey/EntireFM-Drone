'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

interface Shot {
  src: string
  poster?: string
  alt: string
}

const HERO_SHOTS: Shot[] = [
  {
    src: '/media/drone/hero/tfts-drone-office-shot.mp4',
    poster: '/media/drone/hero/tfts-drone-office-shot.jpg',
    alt: 'Commercial drone operating around modern commercial building',
  },
  {
    src: '/media/drone/hero/tfts-operator-ppe-shot.mp4',
    poster: '/media/drone/hero/tfts-operator-ppe-shot.jpg',
    alt: 'Remote pilot engineer in PPE conducting aerial commercial inspection',
  },
  {
    src: '/media/drone/roof-facade/tfts-commercial-roof-inspection.mp4',
    poster: '/media/drone/roof-facade/tfts-commercial-roof-inspection.jpg',
    alt: 'Commercial and industrial rooftop survey from inspection altitude',
  },
]

interface HeroVideoSequenceProps {
  brightness?: number
  saturation?: number
  className?: string
}

export default function HeroVideoSequence({
  brightness = 0.55,
  saturation = 1.15,
  className = '',
}: HeroVideoSequenceProps) {
  const [currentShotIndex, setCurrentShotIndex] = useState(0)
  const [mediaCapabilityResolved, setMediaCapabilityResolved] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 768px)')
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    setIsMobile(mobileQuery.matches)
    setPrefersReducedMotion(motionQuery.matches)
    setMediaCapabilityResolved(true)

    const handleMobileChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)

    mobileQuery.addEventListener('change', handleMobileChange)
    motionQuery.addEventListener('change', handleMotionChange)

    return () => {
      mobileQuery.removeEventListener('change', handleMobileChange)
      motionQuery.removeEventListener('change', handleMotionChange)
    }
  }, [])

  // Sequence rotation timer: 5.5 seconds per shot
  useEffect(() => {
    if (!mediaCapabilityResolved || isMobile || prefersReducedMotion) return

    const interval = setInterval(() => {
      setCurrentShotIndex((prev) => (prev + 1) % HERO_SHOTS.length)
    }, 5500)

    return () => clearInterval(interval)
  }, [mediaCapabilityResolved, isMobile, prefersReducedMotion])

  // Play the active video
  useEffect(() => {
    if (!mediaCapabilityResolved || isMobile || prefersReducedMotion) return

    videoRefs.current.forEach((video, idx) => {
      if (!video) return
      if (idx === currentShotIndex) {
        video.currentTime = 0
        video.play().catch(() => {})
      } else {
        // Pause inactive videos to conserve CPU/GPU
        setTimeout(() => {
          if (video && idx !== currentShotIndex) {
            video.pause()
          }
        }, 1200) // allow crossfade duration before pausing
      }
    })
  }, [currentShotIndex, mediaCapabilityResolved, isMobile, prefersReducedMotion])

  const showVideo = mediaCapabilityResolved && !isMobile && !prefersReducedMotion

  return (
    <div className={`absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden ${className}`}>
      {/* High-priority Server-rendered Poster for LCP */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_SHOTS[0].poster || '/images/hero_poster.jpg'}
          alt={HERO_SHOTS[0].alt}
          fill
          priority
          className="object-cover"
          style={{ filter: `brightness(${brightness}) saturate(${saturation})` }}
          sizes="100vw"
        />
      </div>

      {/* Multi-shot Video Layer with smooth crossfades */}
      {showVideo && (
        <div className="absolute inset-0 z-1">
          {HERO_SHOTS.map((shot, idx) => {
            const isActive = idx === currentShotIndex
            return (
              <video
                key={shot.src}
                ref={(el) => {
                  videoRefs.current[idx] = el
                }}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                style={{
                  filter: `brightness(${brightness}) saturate(${saturation})`,
                }}
                muted
                loop
                playsInline
                autoPlay={idx === 0}
                preload={idx === 0 ? 'auto' : 'metadata'}
              >
                <source src={shot.src} type="video/mp4" />
              </video>
            )
          })}
        </div>
      )}

      {/* Subtle Cinematic Vignette / Atmospheric Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-dark/40 pointer-events-none z-2" />
    </div>
  )
}
