'use client'

/**
 * GaussianSplatViewer — shell component (SSR-safe)
 *
 * Handles: poster, real progress bar (driven by canvas onProgress),
 * mobile/no-WebGL fallback, fullscreen toggle, control overlay.
 *
 * The heavy WebGL canvas is loaded via next/dynamic { ssr: false } so
 * Three.js never runs server-side.
 */

import { useState, useEffect, useRef, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { Move, ZoomIn, Maximize2, Minimize2, RotateCcw, AlertCircle, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const GaussianSplatCanvas = dynamic(
  () => import('./GaussianSplatCanvas'),
  { ssr: false, loading: () => null }
)

interface GaussianSplatViewerProps {
  splatSrc?: string
  posterSrc: string
  title: string
  description?: string
  splatCount?: number
  caption?: string
  ctaLabel?: string
  ctaHref?: string
  forceFallback?: boolean
}

const LOAD_LABELS: Record<number, string> = {
  0:  'Connecting to spatial data server',
  20: 'Downloading spatial splat data',
  60: 'Processing Gaussian primitives',
  90: 'Rendering 3D environment',
}

function getLabel(pct: number): string {
  const keys = Object.keys(LOAD_LABELS).map(Number).sort((a, b) => b - a)
  for (const k of keys) {
    if (pct >= k) return LOAD_LABELS[k]
  }
  return LOAD_LABELS[0]
}

function useIsWebGLSupported() {
  const [supported, setSupported] = useState<boolean | null>(null)
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('webgl2') || canvas.getContext('webgl')
      setSupported(!!ctx)
    } catch { setSupported(false) }
  }, [])
  return supported
}

function useInView(ref: React.RefObject<HTMLElement | null>, rootMargin = '200px') {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { rootMargin }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref, rootMargin])
  return inView
}

export default function GaussianSplatViewer({
  splatSrc = '/splats/site.ksplat',
  posterSrc,
  title,
  description,
  splatCount = 540274,
  caption,
  ctaLabel = 'Request TFTS 3D Capture',
  ctaHref = '/brief?service=gaussian-splat',
  forceFallback = false,
}: GaussianSplatViewerProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const inView     = useInView(wrapperRef as React.RefObject<HTMLElement | null>)
  const webgl      = useIsWebGLSupported()

  type Phase = 'idle' | 'loading' | 'live' | 'error' | 'fallback'
  const [phase, setPhase]       = useState<Phase>('idle')
  const [progress, setProgress] = useState(0)
  const [isFullscreen, setIsFS] = useState(false)
  const [resetKey, setResetKey] = useState(0)

  const isMobile = typeof navigator !== 'undefined' &&
    /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)
  const shouldFallback = forceFallback || isMobile || webgl === false

  useEffect(() => {
    if (inView && webgl !== null && phase === 'idle') {
      setPhase(shouldFallback ? 'fallback' : 'loading')
    }
  }, [inView, webgl, phase, shouldFallback])

  useEffect(() => {
    if (!isFullscreen) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsFS(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isFullscreen])

  const handleProgress = useCallback((pct: number) => {
    setProgress(pct)
  }, [])
  const handleReady = useCallback(() => {
    setProgress(100)
    setPhase('live')
  }, [])
  const handleError = useCallback(() => setPhase('error'), [])
  const handleReset = useCallback(() => setResetKey(k => k + 1), [])
  const handleRetry = useCallback(() => {
    setPhase('loading')
    setProgress(0)
    setResetKey(k => k + 1)
  }, [])

  return (
    <div
      ref={wrapperRef}
      className={
        isFullscreen
          ? 'fixed inset-0 z-[9999] bg-black flex flex-col'
          : 'relative w-full'
      }
      role="region"
      aria-label={`Interactive TFTS 3D viewer: ${title}`}
    >
      <div className={`relative bg-black border border-white/10 overflow-hidden ${
        isFullscreen ? 'flex-1' : 'aspect-video'
      }`}>
        {/* Poster — always underneath, fades out when live */}
        <img
          src={posterSrc}
          alt={title}
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-all duration-1000 ${
            phase === 'live' ? 'opacity-0' : 'opacity-70'
          } ${phase === 'loading' ? 'scale-105 blur-sm' : ''}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none z-[1]" />

        {/* IDLE */}
        {phase === 'idle' && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="text-center px-8">
              <div className="inline-flex items-center gap-2 text-white/30 font-ui text-[9px] tracking-[0.35em] uppercase mb-2">
                <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                Spatial data ready
              </div>
              <p className="text-white/20 text-[10px] tracking-widest uppercase font-ui">
                Scroll to activate 3D viewer
              </p>
            </div>
          </div>
        )}

        {/* LOADING — real progress driven by canvas onProgress */}
        {phase === 'loading' && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-10 text-center">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-8 relative" aria-hidden="true">
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <circle
                  cx="32" cy="32" r="30" fill="none"
                  stroke="#0066ff" strokeWidth="1.5"
                  strokeDasharray={`${2 * Math.PI * 30}`}
                  strokeDashoffset={`${2 * Math.PI * 30 * (1 - progress / 100)}`}
                  className="transition-all duration-500"
                />
              </svg>
              <span className="text-white/60 text-[11px] font-ui tabular-nums">{Math.round(progress)}%</span>
            </div>
            <p className="font-ui text-[10px] tracking-[0.35em] uppercase text-accent mb-2">
              {getLabel(progress)}
            </p>
            <p className="font-ui text-[9px] tracking-[0.25em] uppercase text-white/30">
              Preparing {splatCount.toLocaleString()} spatial splats
            </p>
            <div className="mt-8 w-64 h-[1px] bg-white/10 relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-accent transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* WebGL canvas — mounted during loading, visible when live */}
        {(phase === 'loading' || phase === 'live') && !shouldFallback && (
          <div className={`absolute inset-0 z-10 transition-opacity duration-1000 ${
            phase === 'live' ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
            <GaussianSplatCanvas
              key={resetKey}
              splatSrc={splatSrc}
              onReady={handleReady}
              onError={handleError}
              onProgress={handleProgress}
            />
          </div>
        )}

        {/* FALLBACK */}
        {phase === 'fallback' && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-10 text-center">
            <div className="max-w-md">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-5 h-5 text-white/40" />
              </div>
              <h3 className="font-ui text-[11px] tracking-[0.35em] uppercase text-white/60 mb-3">
                3D viewer not available on this device
              </h3>
              <p className="font-ui text-[10px] text-white/30 tracking-widest uppercase leading-relaxed">
                The interactive TFTS 3D viewer requires a desktop device with WebGL 2 support.
              </p>
            </div>
          </div>
        )}

        {/* ERROR */}
        {phase === 'error' && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-10 text-center">
            <AlertCircle className="w-10 h-10 text-red-500/60 mb-6" />
            <h3 className="font-ui text-[11px] tracking-[0.35em] uppercase text-white/60 mb-3">
              3D viewer failed to load
            </h3>
            <p className="font-ui text-[10px] text-white/30 tracking-widest uppercase leading-relaxed mb-8">
              The interactive model could not be initialised on this device.
            </p>
            <button
              onClick={handleRetry}
              className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent hover:text-white transition-colors"
            >
              Try again
            </button>
          </div>
        )}

        {/* Live overlay */}
        {phase === 'live' && (
          <>
            <div className="absolute top-5 left-5 z-30 pointer-events-none">
              <div className="bg-black/50 backdrop-blur-md border border-white/[0.08] px-4 py-2 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="font-ui text-[9px] tracking-[0.35em] uppercase text-white/60">
                  Live 3D Spatial Survey
                </span>
                <span className="font-ui text-[9px] tracking-[0.2em] uppercase text-white/30 hidden sm:inline">
                  · {splatCount.toLocaleString()} splats
                </span>
              </div>
            </div>

            <div className="absolute bottom-5 left-5 z-30 pointer-events-none">
              <div className="bg-black/50 backdrop-blur-md border border-white/[0.08] px-4 py-2.5 flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Move className="w-3 h-3 text-accent/70" aria-hidden="true" />
                  <span className="font-ui text-[8px] tracking-widest uppercase text-white/40">Drag orbit</span>
                </div>
                <div className="w-px h-3 bg-white/10" />
                <div className="flex items-center gap-1.5">
                  <ZoomIn className="w-3 h-3 text-accent/70" aria-hidden="true" />
                  <span className="font-ui text-[8px] tracking-widest uppercase text-white/40">Scroll zoom</span>
                </div>
                <div className="w-px h-3 bg-white/10 hidden sm:block" />
                <span className="font-ui text-[8px] tracking-widest uppercase text-white/30 hidden sm:inline">Right-drag pan</span>
              </div>
            </div>

            <div className="absolute top-5 right-5 z-30 flex items-center gap-2">
              <button
                onClick={handleReset}
                title="Reset camera"
                aria-label="Reset camera to default view"
                className="p-2.5 bg-black/50 backdrop-blur-md border border-white/[0.08] text-white/40 hover:text-white hover:border-white/20 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsFS(f => !f)}
                title={isFullscreen ? 'Exit fullscreen (Esc)' : 'Fullscreen'}
                aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                className="p-2.5 bg-black/50 backdrop-blur-md border border-white/[0.08] text-white/40 hover:text-white hover:border-white/20 transition-all"
              >
                {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </>
        )}
      </div>

      {!isFullscreen && (
        <div className="mt-8 flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex-1">
            {caption && (
              <p className="font-ui text-[10px] text-white/25 uppercase tracking-widest leading-relaxed mb-3 italic max-w-2xl">
                {caption}
              </p>
            )}
            <div className="flex items-center gap-4 text-[9px] tracking-widest uppercase text-white/20">
              <span>TFTS 3D Visualisation</span>
              <span>·</span>
              <span>Desktop with WebGL 2 recommended</span>
            </div>
          </div>
          <Link
            href={ctaHref}
            className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent hover:text-white transition-colors flex items-center gap-2 shrink-0"
          >
            {ctaLabel} <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      )}
    </div>
  )
}
