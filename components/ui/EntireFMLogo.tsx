'use client'

// components/ui/EntireFMLogo.tsx
// Exact reproduction of the EntireFM masterbrand animated infinity mark
// Source: scraped from https://www.entirefm.com live HTML + CSS
// Do NOT modify gradient stops or polygon geometry — these are canonical brand assets.

import { useEffect, useState } from 'react'

interface EntireFMLogoProps {
  /** animated=true: shine sweep runs on load, accelerates on hover. animated=false: static mark, hover scale only */
  animated?: boolean
  /** Tailwind width class e.g. 'w-10' — controls mark size */
  size?: string
  /** Additional classes on the outer wrapper */
  className?: string
  /** Show "Drone" descriptor beneath/beside the wordmark */
  showDescriptor?: boolean
}

export default function EntireFMLogo({
  animated = false,
  size = 'w-10',
  className = '',
  showDescriptor = false,
}: EntireFMLogoProps) {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const shouldAnimate = animated && !reduceMotion

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      {/* ── Infinity mark ── */}
      <span
        data-brand-mark="true"
        className={`brand-mark relative block ${size} transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105`}
      >
        <svg
          viewBox="-1.9096000000000002 -1.16 3.8192000000000004 2.32"
          className="brand-mark-svg block w-full"
          role="img"
          aria-label="EntireFM"
          shapeRendering="geometricPrecision"
        >
          <defs>
            {/* ── 24 facet gradients — exact colours from entirefm.com ── */}
            <linearGradient id="efm-d-grad-0" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c7d2fe" /><stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <linearGradient id="efm-d-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="efm-d-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1d4ed8" /><stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
            <linearGradient id="efm-d-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0d4db8" /><stop offset="100%" stopColor="#092d6e" />
            </linearGradient>
            <linearGradient id="efm-d-grad-4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="efm-d-grad-5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0369a1" /><stop offset="100%" stopColor="#0c2340" />
            </linearGradient>
            <linearGradient id="efm-d-grad-6" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066ff" /><stop offset="100%" stopColor="#0047b3" />
            </linearGradient>
            <linearGradient id="efm-d-grad-7" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0137aa" /><stop offset="100%" stopColor="#012066" />
            </linearGradient>
            <linearGradient id="efm-d-grad-8" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0122ba" /><stop offset="100%" stopColor="#001366" />
            </linearGradient>
            <linearGradient id="efm-d-grad-9" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0024b8" /><stop offset="100%" stopColor="#00104d" />
            </linearGradient>
            <linearGradient id="efm-d-grad-10" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" /><stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
            <linearGradient id="efm-d-grad-11" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <linearGradient id="efm-d-grad-12" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e1145" /><stop offset="100%" stopColor="#100826" />
            </linearGradient>
            <linearGradient id="efm-d-grad-13" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" /><stop offset="100%" stopColor="#4338ca" />
            </linearGradient>
            <linearGradient id="efm-d-grad-14" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ab58f1" /><stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
            <linearGradient id="efm-d-grad-15" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c084fc" /><stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
            <linearGradient id="efm-d-grad-16" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#403a4f" /><stop offset="100%" stopColor="#231f2b" />
            </linearGradient>
            <linearGradient id="efm-d-grad-17" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#252030" /><stop offset="100%" stopColor="#14111a" />
            </linearGradient>
            <linearGradient id="efm-d-grad-18" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e1929" /><stop offset="100%" stopColor="#0f0c14" />
            </linearGradient>
            <linearGradient id="efm-d-grad-19" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#281c3b" /><stop offset="100%" stopColor="#150d21" />
            </linearGradient>
            <linearGradient id="efm-d-grad-20" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e879f9" /><stop offset="100%" stopColor="#c026d3" />
            </linearGradient>
            <linearGradient id="efm-d-grad-21" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" /><stop offset="100%" stopColor="#4c1d95" />
            </linearGradient>
            <linearGradient id="efm-d-grad-22" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#002191" /><stop offset="100%" stopColor="#00114d" />
            </linearGradient>
            <linearGradient id="efm-d-grad-23" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" /><stop offset="100%" stopColor="#3730a3" />
            </linearGradient>

            {/* ── Glow filters ── */}
            <filter id="efm-d-glow-cyan" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="0" stdDeviation="0.035" floodColor="#00d2ff" floodOpacity="0.9" />
              <feDropShadow dx="0" dy="0" stdDeviation="0.08" floodColor="#2563eb" floodOpacity="0.65" />
            </filter>
            <filter id="efm-d-glow-magenta" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="0" stdDeviation="0.035" floodColor="#e879f9" floodOpacity="0.9" />
              <feDropShadow dx="0" dy="0" stdDeviation="0.08" floodColor="#a855f7" floodOpacity="0.65" />
            </filter>

            {/* ── Shine sweep gradient ── */}
            <linearGradient id="efm-d-shine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#ffffff" stopOpacity="0" />
              <stop offset="35%"  stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="50%"  stopColor="#ffffff" stopOpacity="0.65" />
              <stop offset="65%"  stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* ── Clip path for the ribbon/shine ── */}
            <clipPath id="efm-d-clip">
              <polygon points="-0.2381,-0.5000 -0.9396,-1.0000 -0.5117,-0.3050" />
              <polygon points="-0.9396,-1.0000 -0.9396,-0.6100 -0.5117,-0.3050" />
              <polygon points="-0.9396,-1.0000 -1.6411,-0.5000 -0.9396,-0.6100" />
              <polygon points="-1.6411,-0.5000 -1.3675,-0.3050 -0.9396,-0.6100" />
              <polygon points="-1.6411,-0.5000 -1.6411,0.5000 -1.3675,-0.3050" />
              <polygon points="-1.6411,0.5000 -1.3675,0.3050 -1.3675,-0.3050" />
              <polygon points="-1.6411,0.5000 -0.9396,1.0000 -1.3675,0.3050" />
              <polygon points="-0.9396,1.0000 -0.9396,0.6100 -1.3675,0.3050" />
              <polygon points="-0.9396,1.0000 -0.2381,0.5000 -0.9396,0.6100" />
              <polygon points="-0.2381,0.5000 -0.5117,0.3050 -0.9396,0.6100" />
              <polygon points="-0.2381,0.5000 0.2381,-0.5000 -0.5117,0.3050" />
              <polygon points="0.2381,-0.5000 0.5117,-0.3050 -0.5117,0.3050" />
              <polygon points="0.2381,-0.5000 0.9396,-1.0000 0.5117,-0.3050" />
              <polygon points="0.9396,-1.0000 0.9396,-0.6100 0.5117,-0.3050" />
              <polygon points="0.9396,-1.0000 1.6411,-0.5000 0.9396,-0.6100" />
              <polygon points="1.6411,-0.5000 1.3675,-0.3050 0.9396,-0.6100" />
              <polygon points="1.6411,-0.5000 1.6411,0.5000 1.3675,-0.3050" />
              <polygon points="1.6411,0.5000 1.3675,0.3050 1.3675,-0.3050" />
              <polygon points="1.6411,0.5000 0.9396,1.0000 1.3675,0.3050" />
              <polygon points="0.9396,1.0000 0.9396,0.6100 1.3675,0.3050" />
              <polygon points="0.9396,1.0000 0.2381,0.5000 0.9396,0.6100" />
              <polygon points="0.2381,0.5000 0.5117,0.3050 0.9396,0.6100" />
              <polygon points="0.2381,0.5000 -0.2381,-0.5000 0.5117,0.3050" />
              <polygon points="-0.2381,-0.5000 -0.5117,-0.3050 0.5117,0.3050" />
            </clipPath>

            {/* ── Shine animation keyframes ── */}
            <style>{`
              @keyframes efm-d-shine-anim {
                0%   { transform: translateX(-160%) skewX(-20deg); opacity: 0; }
                12%  { opacity: 0.75; }
                26%  { transform: translateX(160%) skewX(-20deg); opacity: 0; }
                100% { transform: translateX(160%) skewX(-20deg); opacity: 0; }
              }
              .efm-d-shine-rect {
                animation: efm-d-shine-anim 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
              }
              .group:hover .efm-d-shine-rect {
                animation: efm-d-shine-anim 1.8s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
              }
              @media (prefers-reduced-motion: reduce) {
                .efm-d-shine-rect { animation: none !important; }
              }
            `}</style>
          </defs>

          {/* ── 24 faceted polygons ── */}
          <g>
            <polygon points="-0.2381,-0.5000 -0.9396,-1.0000 -0.5117,-0.3050" fill="url(#efm-d-grad-0)" />
            <polygon points="-0.9396,-1.0000 -0.9396,-0.6100 -0.5117,-0.3050" fill="url(#efm-d-grad-1)" />
            <polygon points="-0.9396,-1.0000 -1.6411,-0.5000 -0.9396,-0.6100" fill="url(#efm-d-grad-2)" />
            <polygon points="-1.6411,-0.5000 -1.3675,-0.3050 -0.9396,-0.6100" fill="url(#efm-d-grad-3)" />
            <polygon points="-1.6411,-0.5000 -1.6411,0.5000 -1.3675,-0.3050" fill="url(#efm-d-grad-4)" />
            <polygon points="-1.6411,0.5000 -1.3675,0.3050 -1.3675,-0.3050" fill="url(#efm-d-grad-5)" />
            <polygon points="-1.6411,0.5000 -0.9396,1.0000 -1.3675,0.3050" fill="url(#efm-d-grad-6)" />
            <polygon points="-0.9396,1.0000 -0.9396,0.6100 -1.3675,0.3050" fill="url(#efm-d-grad-7)" />
            <polygon points="-0.9396,1.0000 -0.2381,0.5000 -0.9396,0.6100" fill="url(#efm-d-grad-8)" />
            <polygon points="-0.2381,0.5000 -0.5117,0.3050 -0.9396,0.6100" fill="url(#efm-d-grad-9)" />
            <polygon points="-0.2381,0.5000 0.2381,-0.5000 -0.5117,0.3050" fill="url(#efm-d-grad-10)" />
            <polygon points="0.2381,-0.5000 0.5117,-0.3050 -0.5117,0.3050" fill="url(#efm-d-grad-11)" />
            <polygon points="0.2381,-0.5000 0.9396,-1.0000 0.5117,-0.3050" fill="url(#efm-d-grad-12)" />
            <polygon points="0.9396,-1.0000 0.9396,-0.6100 0.5117,-0.3050" fill="url(#efm-d-grad-13)" />
            <polygon points="0.9396,-1.0000 1.6411,-0.5000 0.9396,-0.6100" fill="url(#efm-d-grad-14)" />
            <polygon points="1.6411,-0.5000 1.3675,-0.3050 0.9396,-0.6100" fill="url(#efm-d-grad-15)" />
            <polygon points="1.6411,-0.5000 1.6411,0.5000 1.3675,-0.3050" fill="url(#efm-d-grad-16)" />
            <polygon points="1.6411,0.5000 1.3675,0.3050 1.3675,-0.3050" fill="url(#efm-d-grad-17)" />
            <polygon points="1.6411,0.5000 0.9396,1.0000 1.3675,0.3050" fill="url(#efm-d-grad-18)" />
            <polygon points="0.9396,1.0000 0.9396,0.6100 1.3675,0.3050" fill="url(#efm-d-grad-19)" />
            <polygon points="0.9396,1.0000 0.2381,0.5000 0.9396,0.6100" fill="url(#efm-d-grad-20)" />
            <polygon points="0.2381,0.5000 0.5117,0.3050 0.9396,0.6100" fill="url(#efm-d-grad-21)" />
            <polygon points="0.2381,0.5000 -0.2381,-0.5000 0.5117,0.3050" fill="url(#efm-d-grad-22)" />
            <polygon points="-0.2381,-0.5000 -0.5117,-0.3050 0.5117,0.3050" fill="url(#efm-d-grad-23)" />
          </g>

          {/* ── Facet edge lines ── */}
          <g style={{ opacity: 1 }}>
            <line x1="-0.2381" y1="-0.5000" x2="-0.9396" y2="-1.0000" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="-0.5117" y1="-0.3050" x2="-0.9396" y2="-0.6100" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="-0.2381" y1="-0.5000" x2="-0.5117" y2="-0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="-0.9396" y1="-1.0000" x2="-0.5117" y2="-0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="-0.9396" y1="-1.0000" x2="-1.6411" y2="-0.5000" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="-0.9396" y1="-0.6100" x2="-1.3675" y2="-0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="-0.9396" y1="-1.0000" x2="-0.9396" y2="-0.6100" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="-1.6411" y1="-0.5000" x2="-0.9396" y2="-0.6100" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="-1.6411" y1="-0.5000" x2="-1.6411" y2="0.5000" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="-1.3675" y1="-0.3050" x2="-1.3675" y2="0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="-1.6411" y1="-0.5000" x2="-1.3675" y2="-0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="-1.6411" y1="0.5000" x2="-1.3675" y2="-0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="-1.6411" y1="0.5000" x2="-0.9396" y2="1.0000" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="-1.3675" y1="0.3050" x2="-0.9396" y2="0.6100" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="-1.6411" y1="0.5000" x2="-1.3675" y2="0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="-0.9396" y1="1.0000" x2="-1.3675" y2="0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="-0.9396" y1="1.0000" x2="-0.2381" y2="0.5000" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="-0.9396" y1="0.6100" x2="-0.5117" y2="0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="-0.9396" y1="1.0000" x2="-0.9396" y2="0.6100" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="-0.2381" y1="0.5000" x2="-0.9396" y2="0.6100" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="-0.2381" y1="0.5000" x2="0.2381" y2="-0.5000" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="-0.5117" y1="0.3050" x2="0.5117" y2="-0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="-0.2381" y1="0.5000" x2="-0.5117" y2="0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="0.2381" y1="-0.5000" x2="-0.5117" y2="0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="0.2381" y1="-0.5000" x2="0.9396" y2="-1.0000" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="0.5117" y1="-0.3050" x2="0.9396" y2="-0.6100" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="0.2381" y1="-0.5000" x2="0.5117" y2="-0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="0.9396" y1="-1.0000" x2="0.5117" y2="-0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="0.9396" y1="-1.0000" x2="1.6411" y2="-0.5000" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="0.9396" y1="-0.6100" x2="1.3675" y2="-0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="0.9396" y1="-1.0000" x2="0.9396" y2="-0.6100" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="1.6411" y1="-0.5000" x2="0.9396" y2="-0.6100" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="1.6411" y1="-0.5000" x2="1.6411" y2="0.5000" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="1.3675" y1="-0.3050" x2="1.3675" y2="0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="1.6411" y1="-0.5000" x2="1.3675" y2="-0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="1.6411" y1="0.5000" x2="1.3675" y2="-0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="1.6411" y1="0.5000" x2="0.9396" y2="1.0000" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="1.3675" y1="0.3050" x2="0.9396" y2="0.6100" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="1.6411" y1="0.5000" x2="1.3675" y2="0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="0.9396" y1="1.0000" x2="1.3675" y2="0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="0.9396" y1="1.0000" x2="0.2381" y2="0.5000" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="0.9396" y1="0.6100" x2="0.5117" y2="0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="0.9396" y1="1.0000" x2="0.9396" y2="0.6100" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="0.2381" y1="0.5000" x2="0.9396" y2="0.6100" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="0.2381" y1="0.5000" x2="-0.2381" y2="-0.5000" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="0.5117" y1="0.3050" x2="-0.5117" y2="-0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="0.2381" y1="0.5000" x2="0.5117" y2="0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
            <line x1="-0.2381" y1="-0.5000" x2="0.5117" y2="0.3050" stroke="rgba(255,255,255,0.72)" strokeWidth="0.015" strokeLinecap="round" />
          </g>

          {/* ── Shine sweep (clipped to ribbon outline) ── */}
          {shouldAnimate && (
            <g clipPath="url(#efm-d-clip)" opacity="0.6" style={{ mixBlendMode: 'overlay' }}>
              <rect
                className="efm-d-shine-rect"
                x="-2.5"
                y="-1.5"
                width="5"
                height="3"
                fill="url(#efm-d-shine)"
              />
            </g>
          )}
        </svg>
      </span>

      {/* ── Wordmark ── */}
      <span className="flex flex-col leading-none">
        <span className="text-[17px] font-extralight tracking-[0.08em] text-white">
          Entire<span className="font-bold text-white">FM</span>
        </span>
        {showDescriptor && (
          <span className="mt-0.5 text-[9px] font-light tracking-[0.22em] uppercase text-white/45">
            Drone Services
          </span>
        )}
      </span>
    </span>
  )
}
