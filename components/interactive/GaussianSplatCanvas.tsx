'use client'

/**
 * GaussianSplatCanvas — raw WebGL canvas using @mkkellogg/gaussian-splats-3d
 *
 * This component is dynamically imported with { ssr: false } so it only ever
 * runs in the browser. It mounts and owns the Three.js / WebGL lifecycle.
 *
 * Polycam exports with Y-axis down. We compensate by setting:
 *   cameraUp: [0, -1, 0]
 * which flips the viewer's sense of "up" so the scene renders correctly.
 */

import { useEffect, useRef, useCallback } from 'react'
import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d'

interface Props {
  splatSrc: string
  onReady: () => void
  onError: () => void
  onProgress?: (pct: number) => void
}

export default function GaussianSplatCanvas({ splatSrc, onReady, onError, onProgress }: Props) {
  const mountRef   = useRef<HTMLDivElement>(null)
  const viewerRef  = useRef<InstanceType<typeof GaussianSplats3D.Viewer> | null>(null)
  const frameRef   = useRef<number>(0)
  const pausedRef  = useRef(false)
  const readyFired = useRef(false)

  const safeReady = useCallback(() => {
    if (readyFired.current) return
    readyFired.current = true
    onReady()
  }, [onReady])

  const cleanup = useCallback(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    try { viewerRef.current?.dispose() } catch {}
    viewerRef.current = null
  }, [])

  useEffect(() => {
    const el = mountRef.current
    if (!el) return

    let cancelled = false
    readyFired.current = false

    async function init() {
      try {
        const viewer = new GaussianSplats3D.Viewer({
          rootElement: el || undefined,
          cameraUp: [0, -1, 0],
          initialCameraPosition: [2, -8, 12],
          initialCameraLookAt:   [0,  0,  0],
          gpuAcceleratedSort: true,
          halfPrecisionCovariancesOnGPU: true,
          progressiveLoad: true,
          dynamicScene: false,
          logLevel: GaussianSplats3D.LogLevel.Error,
          orbitControls: {
            enableDamping: true,
            dampingFactor: 0.08,
            enableZoom: true,
            zoomSpeed: 0.8,
            minDistance: 1,
            maxDistance: 60,
            enablePan: true,
            panSpeed: 0.6,
            autoRotate: false,
            maxPolarAngle: Math.PI,
          },
        })

        viewerRef.current = viewer

        await viewer.addSplatScene(splatSrc, {
          splatAlphaRemovalThreshold: 5,
          rotation: [1, 0, 0, 0],
          position: [0, 0, 0],
          scale: [1, 1, 1],
          progressiveLoad: true,
          showLoadingUI: false,
          onProgress: (pct: number) => {
            onProgress?.(Math.min(99, Math.round(pct * 100)))
          },
        })

        if (cancelled) { viewer.dispose(); return }

        // Signal 100% and ready
        onProgress?.(100)
        safeReady()
        viewer.start()

        // ── Pause rendering when offscreen ──────────────────────────────
        const obs = new IntersectionObserver(([entry]) => {
          pausedRef.current = !entry.isIntersecting
          // @ts-ignore — renderer exists on viewer
          if (viewer.renderer) {
            // @ts-ignore
            viewer.renderer.setAnimationLoop(pausedRef.current ? null : () => viewer.update())
          }
        }, { threshold: 0.05 })
        if (el) obs.observe(el)

        return () => obs.disconnect()
      } catch (err) {
        if (!cancelled) {
          console.error('[GaussianSplatCanvas] init error:', err)
          onError()
        }
      }
    }

    const cleanupObs = init()

    return () => {
      cancelled = true
      cleanupObs?.then(fn => fn?.())
      cleanup()
    }
  }, [splatSrc, onReady, onError, onProgress, safeReady, cleanup])

  return (
    <div
      ref={mountRef}
      className="w-full h-full"
      aria-label="Interactive TFTS 3D viewer — drag to orbit, scroll to zoom"
      role="img"
      style={{ cursor: 'grab' }}
    />
  )
}
