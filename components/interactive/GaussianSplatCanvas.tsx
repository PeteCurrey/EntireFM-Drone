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
}

export default function GaussianSplatCanvas({ splatSrc, onReady, onError }: Props) {
  const mountRef   = useRef<HTMLDivElement>(null)
  const viewerRef  = useRef<InstanceType<typeof GaussianSplats3D.Viewer> | null>(null)
  const frameRef   = useRef<number>(0)
  const pausedRef  = useRef(false)

  const cleanup = useCallback(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    try { viewerRef.current?.dispose() } catch {}
    viewerRef.current = null
  }, [])

  useEffect(() => {
    const el = mountRef.current
    if (!el) return

    let cancelled = false

    async function init() {
      try {
        const viewer = new GaussianSplats3D.Viewer({
          // Mount into our div rather than taking over document.body
          rootElement: el || undefined,
          // Polycam Y-down: flip camera "up" to compensate
          cameraUp: [0, -1, 0],
          // Elevated 3/4 aerial view of the site
          initialCameraPosition: [2, -8, 12],
          initialCameraLookAt:   [0,  0,  0],
          // Render quality
          gpuAcceleratedSort: true,
          halfPrecisionCovariancesOnGPU: true,
          // Progressive loading
          progressiveLoad: true,
          // Damped orbit controls
          dynamicScene: false,
          // Log level: errors only
          logLevel: GaussianSplats3D.LogLevel.Error,
          // Orbit controls configuration
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
          // Rotate scene 180° around X to correct Polycam Y-down orientation
          rotation: [1, 0, 0, 0], // identity — we handled it with cameraUp above
          position: [0, 0, 0],
          scale: [1, 1, 1],
          progressiveLoad: true,
          showLoadingUI: false,
        })

        if (cancelled) { viewer.dispose(); return }

        onReady()
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
  }, [splatSrc, onReady, onError, cleanup])

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
