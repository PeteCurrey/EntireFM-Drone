'use client'

// components/ui/EntireFMLogo.tsx
// Exact reproduction of the EntireFM masterbrand flying-fragments assembly logo
// Source: https://www.entirefm.com
// 1. Initial State: SVG wireframe in header
// 2. Flying Fragments: 24 polygon facets scatter in 3D/viewport space and converge into the wireframe
// 3. Settled State: Seamlessly locks into the complete solid color logo with shine sweep and glow accents

import React, { useEffect, useState, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'

// --- GEOMETRIC CONSTANTS & FUNCTIONS (Identical to entirefm.com) ---

const MARK_BOUNDS = {
  minX: -1.7496000000000003,
  maxX: 1.7496000000000003,
  minY: -1,
  maxY: 1,
}

const VIEWBOX = [
  MARK_BOUNDS.minX - 0.16,
  -MARK_BOUNDS.maxY - 0.16,
  MARK_BOUNDS.maxX - MARK_BOUNDS.minX + 0.32,
  MARK_BOUNDS.maxY - MARK_BOUNDS.minY + 0.32,
].join(' ')

function generateHexagon(size: number, offsetX: number): [number, number][] {
  return Array.from({ length: 6 }, (_, i) => {
    const r = Math.PI / 2 + (i * Math.PI) / 3
    return [offsetX + size * Math.cos(r), size * Math.sin(r)]
  })
}

function getBaseVertices(scale: number): [number, number][] {
  const left = generateHexagon(scale, -1.16)
  const right = generateHexagon(scale, 1.16)
  return [
    left[5], left[0], left[1], left[2], left[3], left[4],
    right[1], right[0], right[5], right[4], right[3], right[2],
  ]
}

const transformPoint = ([x, y]: [number, number]): [number, number] => [0.81 * x, y]

interface FacetColor {
  fill: string
  altFill?: string
  highlight?: boolean
}

const FACET_COLORS: FacetColor[] = [
  { fill: '#c7d2fe', altFill: '#6366f1', highlight: true },
  { fill: '#3b82f6', altFill: '#1d4ed8' },
  { fill: '#1d4ed8', altFill: '#1e40af' },
  { fill: '#0d4db8', altFill: '#092d6e' },
  { fill: '#38bdf8', altFill: '#0284c7', highlight: true },
  { fill: '#0369a1', altFill: '#0c2340' },
  { fill: '#0066ff', altFill: '#0047b3' },
  { fill: '#0137aa', altFill: '#012066' },
  { fill: '#0122ba', altFill: '#001366' },
  { fill: '#0024b8', altFill: '#00104d' },
  { fill: '#0284c7', altFill: '#0369a1' },
  { fill: '#3b82f6', altFill: '#2563eb' },
  { fill: '#1e1145', altFill: '#100826' },
  { fill: '#6366f1', altFill: '#4338ca' },
  { fill: '#ab58f1', altFill: '#7c3aed', highlight: true },
  { fill: '#c084fc', altFill: '#9333ea', highlight: true },
  { fill: '#403a4f', altFill: '#231f2b' },
  { fill: '#252030', altFill: '#14111a' },
  { fill: '#1e1929', altFill: '#0f0c14' },
  { fill: '#281c3b', altFill: '#150d21' },
  { fill: '#e879f9', altFill: '#c026d3', highlight: true },
  { fill: '#7c3aed', altFill: '#4c1d95' },
  { fill: '#002191', altFill: '#00114d' },
  { fill: '#4f46e5', altFill: '#3730a3' },
]

export interface MarkPlate {
  points: [number, number][]
  fill: string
  altFill: string
  highlight?: boolean
  index: number
  centroid: [number, number]
}

export function buildMarkEdges(): [[number, number], [number, number]][] {
  const outer = getBaseVertices(1).map(transformPoint)
  const inner = getBaseVertices(0.61).map(transformPoint)
  const edges: [[number, number], [number, number]][] = []
  for (let a = 0; a < outer.length; a++) {
    const i = (a + 1) % outer.length
    edges.push([outer[a], outer[i]])
    edges.push([inner[a], inner[i]])
    edges.push([outer[a], inner[a]])
    edges.push([outer[i], inner[a]])
  }
  return edges
}

export function buildMarkPlates(): MarkPlate[] {
  const outer = getBaseVertices(1).map(transformPoint)
  const inner = getBaseVertices(0.61).map(transformPoint)
  const plates: MarkPlate[] = []
  let n = 0
  for (let a = 0; a < outer.length; a++) {
    const i = (a + 1) % outer.length
    const s = outer[a]
    const o = outer[i]
    const c = inner[a]
    for (const tri of [[s, o, c], [o, inner[i], c]] as [number, number][][]) {
      const cx = (tri[0][0] + tri[1][0] + tri[2][0]) / 3
      const cy = (tri[0][1] + tri[1][1] + tri[2][1]) / 3
      const info = FACET_COLORS[n] || { fill: '#2563eb', altFill: '#1d4ed8' }
      plates.push({
        points: tri,
        fill: info.fill,
        altFill: info.altFill || info.fill,
        highlight: info.highlight,
        index: n++,
        centroid: [cx, cy],
      })
    }
  }
  return plates
}

const MARK_EDGES = buildMarkEdges()
const MARK_PLATES = buildMarkPlates()
const formatPoints = (pts: [number, number][]) =>
  pts.map(([x, y]) => `${x.toFixed(4)},${(-y).toFixed(4)}`).join(' ')

// --- WIREFRAME & SOLID SVG RENDERER ---

function MarkWireEdges({
  stroke,
  width,
  opacity,
  transitionMs,
}: {
  stroke: string
  width: number
  opacity: number
  transitionMs?: number
}) {
  return (
    <g
      style={{
        opacity,
        transition: transitionMs
          ? `opacity ${transitionMs}ms cubic-bezier(0.22, 0.61, 0.36, 1)`
          : undefined,
      }}
    >
      {MARK_EDGES.map(([p1, p2], idx) => (
        <line
          key={idx}
          x1={p1[0].toFixed(4)}
          y1={(-p1[1]).toFixed(4)}
          x2={p2[0].toFixed(4)}
          y2={(-p2[1]).toFixed(4)}
          stroke={stroke}
          strokeWidth={width}
          strokeLinecap="round"
        />
      ))}
    </g>
  )
}

export function BrandMarkSvg({
  state = 'solid',
  className = '',
  transitionMs = 520,
}: {
  state?: 'wire' | 'solid'
  className?: string
  transitionMs?: number
}) {
  const isSolid = state === 'solid'

  return (
    <svg
      viewBox={VIEWBOX}
      className={`brand-mark-svg block w-full ${className}`}
      role="img"
      aria-label="TFTS Drone"
      shapeRendering="geometricPrecision"
    >
      <defs>
        {MARK_PLATES.map((p) => (
          <linearGradient
            key={`grad-${p.index}`}
            id={`efm-facet-grad-${p.index}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={p.fill} />
            <stop offset="100%" stopColor={p.altFill || p.fill} />
          </linearGradient>
        ))}

        <filter id="efmGlowCyan" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="0" stdDeviation="0.035" floodColor="#00d2ff" floodOpacity="0.9" />
          <feDropShadow dx="0" dy="0" stdDeviation="0.08" floodColor="#2563eb" floodOpacity="0.65" />
        </filter>
        <filter id="efmGlowMagenta" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="0" stdDeviation="0.035" floodColor="#e879f9" floodOpacity="0.9" />
          <feDropShadow dx="0" dy="0" stdDeviation="0.08" floodColor="#a855f7" floodOpacity="0.65" />
        </filter>

        <linearGradient id="efmShineSweep" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="35%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.65" />
          <stop offset="65%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        <clipPath id="efmRibbonClip">
          {MARK_PLATES.map((p) => (
            <polygon key={`clip-${p.index}`} points={formatPoints(p.points)} />
          ))}
        </clipPath>

        <style>{`
          @keyframes efmMarkShine {
            0% { transform: translateX(-160%) skewX(-20deg); opacity: 0; }
            12% { opacity: 0.75; }
            26% { transform: translateX(160%) skewX(-20deg); opacity: 0; }
            100% { transform: translateX(160%) skewX(-20deg); opacity: 0; }
          }
          .efm-shine-sweep {
            animation: efmMarkShine 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
          .group:hover .efm-shine-sweep {
            animation: efmMarkShine 1.8s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .efm-shine-sweep { animation: none !important; }
          }
        `}</style>
      </defs>

      {/* Wireframe Outline (visible when state === 'wire') */}
      <MarkWireEdges
        stroke="currentColor"
        width={0.03}
        opacity={isSolid ? 0 : 1}
        transitionMs={transitionMs}
      />

      {/* Solid Color Render (fades in when state === 'solid') */}
      <g
        style={{
          opacity: isSolid ? 1 : 0,
          transition: `opacity ${transitionMs}ms cubic-bezier(0.22, 0.61, 0.36, 1)`,
        }}
      >
        {/* Color Facets */}
        <g>
          {MARK_PLATES.map((p) => (
            <polygon
              key={p.index}
              points={formatPoints(p.points)}
              fill={`url(#efm-facet-grad-${p.index})`}
            />
          ))}
        </g>

        {/* Crisp Surface Wire Lines */}
        <MarkWireEdges stroke="rgba(255,255,255,0.72)" width={0.015} opacity={1} />

        {/* Highlight Edges */}
        <g stroke="rgba(255,255,255,0.95)" strokeWidth={0.018} strokeLinecap="round">
          {MARK_PLATES.filter((p) => p.highlight).map((p) => (
            <line
              key={`hl-${p.index}`}
              x1={p.points[0][0].toFixed(4)}
              y1={(-p.points[0][1]).toFixed(4)}
              x2={p.points[1][0].toFixed(4)}
              y2={(-p.points[1][1]).toFixed(4)}
            />
          ))}
        </g>

        {/* Glow Cyan Accent lines */}
        <g stroke="#00d2ff" strokeWidth={0.024} strokeLinecap="round" opacity={0.95} filter="url(#efmGlowCyan)">
          {MARK_EDGES.slice(4, 16)
            .filter((_, idx) => idx % 4 === 0)
            .map(([p1, p2], idx) => (
              <line
                key={`glow-l-${idx}`}
                x1={p1[0].toFixed(4)}
                y1={(-p1[1]).toFixed(4)}
                x2={p2[0].toFixed(4)}
                y2={(-p2[1]).toFixed(4)}
              />
            ))}
        </g>

        {/* Glow Magenta Accent lines */}
        <g stroke="#e879f9" strokeWidth={0.024} strokeLinecap="round" opacity={0.95} filter="url(#efmGlowMagenta)">
          {MARK_EDGES.slice(28, 44)
            .filter((_, idx) => idx % 4 === 0)
            .map(([p1, p2], idx) => (
              <line
                key={`glow-r-${idx}`}
                x1={p1[0].toFixed(4)}
                y1={(-p1[1]).toFixed(4)}
                x2={p2[0].toFixed(4)}
                y2={(-p2[1]).toFixed(4)}
              />
            ))}
        </g>

        {/* Shine Sweep Overlay */}
        <g clipPath="url(#efmRibbonClip)" opacity={0.6} style={{ mixBlendMode: 'overlay' }}>
          <rect
            className="efm-shine-sweep"
            x="-2.5"
            y="-1.5"
            width="5"
            height="3"
            fill="url(#efmShineSweep)"
          />
        </g>
      </g>
    </svg>
  )
}

// --- FLYING FRAGMENTS ASSEMBLY PORTAL ---

const MARK_WIDTH = MARK_BOUNDS.maxX - MARK_BOUNDS.minX
const ASSEMBLY_TOTAL_MS = 1410 + 26 * MARK_PLATES.length + 120

function BrandMarkAssembly({
  target,
  onLanded,
}: {
  target: React.RefObject<HTMLElement | null>
  onLanded: () => void
}) {
  const [rect, setRect] = useState<DOMRect | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onLanded()
      return
    }

    const t = target.current?.getBoundingClientRect()
    if (!t || t.width === 0) {
      onLanded()
      return
    }

    setRect(t)
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setMounted(true))
      return () => cancelAnimationFrame(raf2)
    })

    const timer = setTimeout(onLanded, ASSEMBLY_TOTAL_MS)
    const handleResize = () => onLanded()
    window.addEventListener('resize', handleResize, { once: true })

    return () => {
      cancelAnimationFrame(raf1)
      clearTimeout(timer)
      window.removeEventListener('resize', handleResize)
    }
  }, [target, onLanded])

  if (!rect || typeof document === 'undefined') return null

  const scale = rect.width / MARK_WIDTH
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2

  return createPortal(
    <svg
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[120] h-full w-full"
      style={{ contain: 'strict' }}
    >
      <g transform={`translate(${centerX} ${centerY}) scale(${scale} ${-scale})`}>
        {MARK_PLATES.map((p) => {
          // Deterministic pseudorandom scatter trajectory (identical to entirefm.com)
          const rng = (k: number) => {
            const val = 43758.5453 * Math.sin(12.9898 * p.index + 78.233 * k)
            return val - Math.floor(val)
          }

          const angle = Math.PI * (0.08 + 0.84 * rng(1))
          const dist = 20 + 40 * rng(2)
          const ox = Math.cos(angle) * dist * 1.6
          const oy = -Math.sin(angle) * dist
          const rotate = (rng(3) - 0.5) * 200
          const pScale = 2.8 + 3.4 * rng(4)

          const [cx, cy] = p.centroid
          const landedTransform = `translate(${cx}px, ${cy}px) translate(${-cx}px, ${-cy}px)`
          const scatterTransform = `translate(${cx + ox}px, ${cy + oy}px) rotate(${rotate}deg) scale(${pScale}) translate(${-cx}px, ${-cy}px)`

          return (
            <polygon
              key={p.index}
              points={p.points.map(([x, y]) => `${x},${y}`).join(' ')}
              fill={p.fill}
              style={{
                transform: mounted ? landedTransform : scatterTransform,
                opacity: mounted ? 1 : 0,
                transition: `transform 1150ms cubic-bezier(0.16, 0.84, 0.3, 1) ${
                  260 + 26 * p.index
                }ms, opacity 240ms ease-out ${260 + 26 * p.index}ms`,
              }}
            />
          )
        })}
      </g>
    </svg>,
    document.body
  )
}

// --- MASTER LOGO COMPONENT ---

interface EntireFMLogoProps {
  /** If true, fragments assemble into the wireframe on page entry, then settles into solid mark */
  animated?: boolean
  /** Tailwind size class e.g. 'w-10' or 'w-11' */
  size?: string
  /** Additional styling */
  className?: string
  /** Show Drone descriptor below wordmark */
  showDescriptor?: boolean
}

export default function EntireFMLogo({
  animated = false,
  size = 'w-11',
  className = '',
  showDescriptor = false,
}: EntireFMLogoProps) {
  const markRef = useRef<HTMLSpanElement>(null)
  const [isSolid, setIsSolid] = useState(!animated)
  const [isAssembling, setIsAssembling] = useState(false)

  useEffect(() => {
    if (!animated) return

    // Trigger wireframe + flying fragments assembly on mount
    setIsSolid(false)
    setIsAssembling(true)
  }, [animated])

  const handleLanded = useCallback(() => {
    setIsSolid(true)
    setIsAssembling(false)
  }, [])

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      {/* ── Brand Mark Container ── */}
      <span
        ref={markRef}
        data-brand-mark="true"
        className={`brand-mark relative block ${size} text-white/55 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105`}
      >
        <BrandMarkSvg state={isSolid ? 'solid' : 'wire'} className="block w-full" />
      </span>

      {/* ── Flying Fragments Portal Overlay ── */}
      {isAssembling && <BrandMarkAssembly target={markRef} onLanded={handleLanded} />}

      {/* ── Wordmark Typography ── */}
      <span className="flex flex-col leading-none">
        <span className="text-[19px] font-extralight tracking-[0.12em] text-white flex items-center gap-1.5">
          TFTS <span className="text-[12px] font-light tracking-[0.18em] text-accent">DRONE</span>
        </span>
        {showDescriptor && (
          <span className="mt-1 text-[8px] font-light tracking-[0.2em] uppercase text-white/45">
            Technical Flight & Thermal Surveys
          </span>
        )}
      </span>
    </span>
  )
}
