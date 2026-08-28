'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

interface VideoBackgroundProps {
  src: string          // path to mp4 in /public/videos/ (without extension)
  poster?: string      // poster image while loading
  alt?: string         // alt for the poster image
  brightness?: number  // default 0.40
  saturation?: number  // default 1.00
  className?: string
  isHero?: boolean     // hero gets high priority, others get lazy loading
}

export default function VideoBackground({
  src,
  poster,
  alt = 'Cinematic drone operations background',
  brightness = 0.40,
  saturation = 1.0,
  className = '',
  isHero = false
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  // mediaCapabilityResolved = JS has finished checking device; until then, NO video elements rendered
  const [mediaCapabilityResolved, setMediaCapabilityResolved] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 768px)')
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    
    const mobile = mobileQuery.matches
    const reducedMotion = motionQuery.matches

    setIsMobile(mobile)
    setPrefersReducedMotion(reducedMotion)
    setMediaCapabilityResolved(true)

    // Hero: if desktop + no reduced motion, begin loading immediately
    if (isHero && !mobile && !reducedMotion) {
      setShouldLoad(true)
    }

    const handleMobileChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)

    mobileQuery.addEventListener('change', handleMobileChange)
    motionQuery.addEventListener('change', handleMotionChange)

    return () => {
      mobileQuery.removeEventListener('change', handleMobileChange)
      motionQuery.removeEventListener('change', handleMotionChange)
    }
  }, [isHero])

  useEffect(() => {
    // Non-hero videos are lazy-loaded via IntersectionObserver
    if (!mediaCapabilityResolved) return
    if (isMobile || prefersReducedMotion) return
    if (isHero || shouldLoad) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { threshold: 0.01, rootMargin: '150px' }
    )

    if (videoRef.current) observer.observe(videoRef.current)
    return () => observer.disconnect()
  }, [mediaCapabilityResolved, isHero, shouldLoad, isMobile, prefersReducedMotion])

  useEffect(() => {
    if (!mediaCapabilityResolved) return
    if (isMobile || prefersReducedMotion) return
    if (!videoRef.current) return

    const video = videoRef.current

    const playPauseObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '0px' }
    )

    playPauseObserver.observe(video)
    return () => playPauseObserver.disconnect()
  }, [mediaCapabilityResolved, isMobile, prefersReducedMotion])

  // Derive base path without extension for serving both webm and mp4
  const baseSrc = src.replace(/\.mp4$/i, '')
  const mp4Src = `${baseSrc}.mp4`
  const webmSrc = `${baseSrc}.webm`

  const showVideo = mediaCapabilityResolved && !isMobile && !prefersReducedMotion

  return (
    <div className={`absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden ${className}`}>
      {poster && (
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Image
            src={poster}
            alt={alt}
            fill
            priority={isHero}
            className="object-cover"
            style={{ filter: `brightness(${brightness}) saturate(${saturation})` }}
            sizes="100vw"
          />
        </div>
      )}

      {showVideo && (
        <video
          ref={videoRef}
          className="w-full h-full object-cover transition-opacity duration-1000"
          style={{
            filter: `brightness(${brightness}) saturate(${saturation})`,
            opacity: videoLoaded ? 1 : 0,
          }}
          onPlaying={() => setVideoLoaded(true)}
          muted
          loop
          playsInline
          autoPlay={isHero}
          preload={shouldLoad ? 'metadata' : 'none'}
        >
          {shouldLoad && (
            <source src={mp4Src} type="video/mp4" />
          )}
        </video>
      )}

      {/* Protection Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/30 pointer-events-none" />
    </div>
  )
}
