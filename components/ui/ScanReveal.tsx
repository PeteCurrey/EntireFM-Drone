'use client'

import React, { useState, useEffect, useRef } from 'react'

interface ScanRevealProps {
  baseImage: string
  overlayImage?: string
  alt?: string
  aspectRatio?: string
  autoScan?: boolean
  labelLeft?: string
  labelRight?: string
  className?: string
}

export default function ScanReveal({
  baseImage,
  overlayImage,
  alt = 'Aerial intelligence scan comparison',
  aspectRatio = 'aspect-[16/10]',
  autoScan = true,
  labelLeft = 'VISUAL CAPTURE',
  labelRight = 'SPATIAL TELEMETRY',
  className = '',
}: ScanRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Optional subtle auto-sweep when scrolled into view
  useEffect(() => {
    if (!autoScan || !inView || isDragging) return

    let direction = 1
    let pos = 50
    const interval = setInterval(() => {
      pos += 0.3 * direction
      if (pos >= 80) direction = -1
      if (pos <= 20) direction = 1
      setSliderPos(pos)
    }, 30)

    return () => clearInterval(interval)
  }, [autoScan, inView, isDragging])

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPos(percent)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX)
    }
  }

  return (
    <div
      ref={containerRef}
      className={`relative select-none overflow-hidden border border-white/10 bg-dark ${aspectRatio} ${className}`}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Base Layer (Visual RGB) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${baseImage})` }}
      />

      {/* Overlay Layer (Technical/Thermal/Spatial) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)` }}
      >
        {overlayImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${overlayImage})` }}
          />
        ) : (
          /* Procedural Technical HUD Matrix if no secondary image provided */
          <div className="absolute inset-0 bg-[#001433]/70 backdrop-blur-[2px]">
            {/* Technical Grid & Coordinates */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,102,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.25) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            {/* Point Cloud Dots Effect */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'radial-gradient(circle at center, #4da6ff 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            />
            <div className="absolute bottom-6 right-6 font-mono text-[9px] tracking-widest text-[#4da6ff] uppercase bg-black/60 px-3 py-1.5 border border-[#0066ff]/40">
              LiDAR POINT CLOUD · SUB-20MM GCP RESOLUTION
            </div>
          </div>
        )}
      </div>

      {/* Signature Scan Beam / Divider */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#0066ff] via-[#4da6ff] to-[#6b2fff] shadow-[0_0_15px_#0066ff] z-20 cursor-ew-resize"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-dark border border-[#4da6ff] flex items-center justify-center shadow-[0_0_12px_rgba(0,102,255,0.6)]">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-[#4da6ff]/80" />
            <div className="w-1 h-3 bg-[#4da6ff]/80" />
          </div>
        </div>
      </div>

      {/* Badges / Labels */}
      <div className="absolute top-4 left-4 z-10 font-ui text-[9px] tracking-[0.25em] text-white/70 uppercase bg-black/70 px-3 py-1 border border-white/10 backdrop-blur-sm">
        {labelLeft}
      </div>
      <div className="absolute top-4 right-4 z-10 font-ui text-[9px] tracking-[0.25em] text-[#4da6ff] uppercase bg-black/70 px-3 py-1 border border-[#0066ff]/30 backdrop-blur-sm">
        {labelRight}
      </div>
    </div>
  )
}
