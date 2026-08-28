'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Box, Sparkles, Layers, Eye, RotateCw } from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'

export default function SpatialCaptureSection() {
  const [activeMode, setActiveMode] = useState<'visual' | 'points' | 'splat'>('splat')
  const [interactiveLoaded, setInteractiveLoaded] = useState(false)
  const [inView, setInView] = useState(false)
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.15 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={containerRef}
      data-index="9"
      className="noise-overlay min-h-screen py-32 px-8 md:px-20 bg-dark relative z-10 border-t border-white/5 flex flex-col justify-center"
    >
      <div className="max-w-[1280px] mx-auto w-full">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-8">
            <SectionTag number="05" text="Spatial Computing & 3D Visualisation" />
            <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter leading-none mb-6">
              GAUSSIAN SPLAT<br />
              <span className="text-accent underline underline-offset-[10px] decoration-accent/30">SPATIAL CAPTURE</span>
            </h2>
            <p className="font-body text-lg text-white/50 uppercase tracking-widest font-light leading-relaxed max-w-2xl">
              Photorealistic 3D environments rendered in real-time. Explore commercial assets, developments and complex structures from any viewpoint with true depth and lighting fidelity.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:justify-end gap-4">
            <Link
              href="/gaussian-splat"
              className="bg-accent text-white font-display text-2xl tracking-[0.1em] px-10 py-5 hover:bg-accent-light transition-all flex items-center justify-center gap-3 group"
            >
              Explore Spatial Capture <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Interactive Spatial Viewport Container */}
        <div className="border border-white/10 bg-black/80 backdrop-blur-md relative overflow-hidden mb-12 shadow-2xl">
          {/* Spatial Mode Selector Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 md:p-6 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveMode('visual')}
                className={`px-4 py-2 font-ui text-[10px] tracking-[0.2em] uppercase transition-all border ${
                  activeMode === 'visual'
                    ? 'border-accent bg-accent/15 text-white shadow-[0_0_10px_rgba(0,102,255,0.3)]'
                    : 'border-white/10 text-white/40 hover:text-white'
                }`}
              >
                1. 2D Photo Capture
              </button>
              <button
                onClick={() => setActiveMode('points')}
                className={`px-4 py-2 font-ui text-[10px] tracking-[0.2em] uppercase transition-all border ${
                  activeMode === 'points'
                    ? 'border-accent bg-accent/15 text-white shadow-[0_0_10px_rgba(0,102,255,0.3)]'
                    : 'border-white/10 text-white/40 hover:text-white'
                }`}
              >
                2. Point Cloud Mesh
              </button>
              <button
                onClick={() => setActiveMode('splat')}
                className={`px-4 py-2 font-ui text-[10px] tracking-[0.2em] uppercase transition-all border ${
                  activeMode === 'splat'
                    ? 'border-accent bg-accent/15 text-white shadow-[0_0_10px_rgba(0,102,255,0.3)]'
                    : 'border-white/10 text-white/40 hover:text-white'
                }`}
              >
                3. TFTS 3D Model
              </button>
            </div>

            <div className="hidden md:flex items-center gap-4 font-mono text-[10px] text-white/40">
              <span className="flex items-center gap-1 text-accent">
                <Box className="w-3.5 h-3.5" /> 3.2M Gaussian Primitives
              </span>
              <span>•</span>
              <span>WebGPU / WebGL Accelerated</span>
            </div>
          </div>

          {/* Interactive Screen */}
          <div className="relative aspect-[16/9] w-full bg-dark flex items-center justify-center overflow-hidden">
            {/* Visual Mode */}
            {activeMode === 'visual' && (
              <div className="relative w-full h-full animate-fadeIn">
                <Image
                  src="/images/gaussian-splat/casa-hotel.jpg"
                  alt="Casa Hotel 2D Aerial Baseline"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute bottom-6 left-6 font-ui text-[10px] tracking-[0.25em] text-white/80 uppercase bg-black/80 px-4 py-2 border border-white/10">
                  Raw Drone Optical Frame · 48MP Unprocessed
                </div>
              </div>
            )}

            {/* Points Mode */}
            {activeMode === 'points' && (
              <div className="relative w-full h-full bg-[#030614] flex items-center justify-center animate-fadeIn">
                <Image
                  src="/images/gaussian-splat/casa-hotel.jpg"
                  alt="Spatial Point Cloud"
                  fill
                  className="object-cover opacity-20 filter invert"
                  sizes="100vw"
                />
                {/* Procedural Point Cloud HUD matrix */}
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    backgroundImage: 'radial-gradient(circle at center, #0066ff 1.5px, transparent 1.5px)',
                    backgroundSize: '12px 12px',
                  }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center p-6 bg-black/80 border border-[#0066ff]/40 max-w-md">
                  <Layers className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="font-display text-xl text-white uppercase tracking-wider mb-2">
                    Spatial Point Geometry
                  </div>
                  <div className="font-body text-xs text-white/60">
                    Calculates camera pose estimations and sparse coordinate vertices from multiple overlapping angles.
                  </div>
                </div>
              </div>
            )}

            {/* TFTS 3D Mode */}
            {activeMode === 'splat' && (
              <div className="relative w-full h-full animate-fadeIn">
                <Image
                  src="/images/gaussian-splat/casa-hotel.jpg"
                  alt="Casa Hotel TFTS 3D Reconstruction"
                  fill
                  className="object-cover brightness-105 contrast-105"
                  sizes="100vw"
                />

                {/* Spatial Atmosphere Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-dark/30 pointer-events-none" />

                {/* Interactive HUD Overlay */}
                <div className="absolute top-6 right-6 flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-black/80 border border-accent/40 px-4 py-2 backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
                    <span className="font-ui text-[10px] tracking-[0.25em] uppercase text-white">
                      Photorealistic 3D Walkthrough
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-black/85 border border-white/10 p-6 backdrop-blur-md">
                  <div>
                    <div className="font-display text-xl text-white uppercase tracking-wider mb-1">
                      Commercial Development Spatial Scan
                    </div>
                    <div className="font-body text-xs text-white/50 font-light">
                      Enables full 6-DoF camera navigation, view-dependent lighting reflections and millimeter-grade site inspection without leaving your desk.
                    </div>
                  </div>
                  <Link
                    href="/gaussian-splat"
                    className="shrink-0 bg-accent text-white font-ui text-[11px] tracking-[0.2em] uppercase px-6 py-3 hover:bg-accent-light transition-all flex items-center gap-2"
                  >
                    Launch Full 3D Viewer <RotateCw className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-white/5 bg-white/[0.01]">
            <div className="font-ui text-[10px] tracking-[0.25em] text-accent uppercase mb-3">01 · Reality Capture</div>
            <h4 className="font-display text-2xl text-white uppercase mb-2">Photorealistic Fidelity</h4>
            <p className="font-body text-xs text-white/45 leading-relaxed font-light">
              Unlike traditional polygonal 3D models with blurred textures, TFTS 3D modelling captures true surface reflections, foliage transparency and intricate architectural geometries.
            </p>
          </div>
          <div className="p-8 border border-white/5 bg-white/[0.01]">
            <div className="font-ui text-[10px] tracking-[0.25em] text-accent uppercase mb-3">02 · Stakeholders</div>
            <h4 className="font-display text-2xl text-white uppercase mb-2">Frictionless Web Delivery</h4>
            <p className="font-body text-xs text-white/45 leading-relaxed font-light">
              Deliverable via standard web links without requiring specialized CAD software or heavy local downloads. Works smoothly on modern desktop and tablet browsers.
            </p>
          </div>
          <div className="p-8 border border-white/5 bg-white/[0.01]">
            <div className="font-ui text-[10px] tracking-[0.25em] text-accent uppercase mb-3">03 · FM Integration</div>
            <h4 className="font-display text-2xl text-white uppercase mb-2">Asset Digital Twins</h4>
            <p className="font-body text-xs text-white/45 leading-relaxed font-light">
              Integrate spatial 3D records into EntireFM CAFM asset histories to preserve permanent condition baselines before major renovations or lease handovers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
