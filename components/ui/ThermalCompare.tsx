'use client'

import React, { useState, useRef } from 'react'

interface ThermalCompareProps {
  baseImage?: string
  alt?: string
}

export default function ThermalCompare({
  baseImage = '/images/thermal_poster.jpg',
  alt = 'Commercial building thermal envelope inspection comparison',
}: ThermalCompareProps) {
  const [sliderPos, setSliderPos] = useState(50)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100))
    setSliderPos(percent)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100))
    setSliderPos(percent)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative aspect-[16/10] w-full select-none overflow-hidden border border-white/10 bg-dark shadow-2xl group cursor-ew-resize"
    >
      {/* 1. Base Layer: Natural RGB Visual Capture */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${baseImage})` }}
      />
      <div className="absolute top-4 left-4 z-10 font-ui text-[9px] tracking-[0.25em] text-white/80 uppercase bg-black/80 px-3 py-1.5 border border-white/10 backdrop-blur-md">
        Natural RGB (Visual)
      </div>

      {/* 2. Overlaid Thermal Anomaly Layer (Simulated Radiometric Infrared Palette) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)` }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center filter contrast-125"
          style={{
            backgroundImage: `url(${baseImage})`,
            mixBlendMode: 'luminosity',
          }}
        />
        {/* Radiometric False-Color Heat Gradient Overlay */}
        <div
          className="absolute inset-0 opacity-80 mix-blend-color"
          style={{
            background:
              'linear-gradient(135deg, rgba(13,6,40,0.9) 0%, rgba(107,47,255,0.75) 30%, rgba(0,102,255,0.85) 60%, rgba(255,100,50,0.9) 85%, rgba(255,230,0,0.95) 100%)',
          }}
        />
        {/* Hotspot Indicators */}
        <div className="absolute top-1/3 right-1/4 flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border border-red-500 bg-red-500/30 animate-ping" />
          <span className="font-mono text-[9px] text-amber-300 bg-black/80 px-2 py-0.5 border border-amber-500/40">
            ΔT +8.4°C Anomaly
          </span>
        </div>

        {/* Thermal Palette Scale Legend */}
        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 bg-black/85 p-2 border border-white/15 backdrop-blur-md">
          <span className="font-mono text-[8px] text-white/50">8°C</span>
          <div className="w-20 h-2 bg-gradient-to-r from-[#0d0628] via-[#0066ff] via-[#ff6432] to-[#ffe600] border border-white/20" />
          <span className="font-mono text-[8px] text-amber-300">36°C</span>
        </div>
        <div className="absolute top-4 right-4 z-10 font-ui text-[9px] tracking-[0.25em] text-amber-400 uppercase bg-black/80 px-3 py-1.5 border border-amber-500/30 backdrop-blur-md">
          Radiometric Thermal
        </div>
      </div>

      {/* 3. Slider Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] z-20"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-dark border border-white/40 flex items-center justify-center shadow-lg">
          <div className="flex items-center gap-1 text-[10px] text-white/80">
            <span>‹</span>
            <span>›</span>
          </div>
        </div>
      </div>

      {/* Drag instruction helper */}
      {!isHovered && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 font-ui text-[9px] tracking-[0.3em] uppercase text-white/60 bg-black/60 px-4 py-1.5 border border-white/10 backdrop-blur-md pointer-events-none animate-pulse">
          Drag to Reveal Heat Signatures
        </div>
      )}
    </div>
  )
}
