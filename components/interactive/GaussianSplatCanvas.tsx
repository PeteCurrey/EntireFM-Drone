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
  const readyFired = useRef(false)

  const safeReady = useCallback(() => {
    if (readyFired.current) return
    readyFired.current = true
    onReady()
  }, [onReady])

  const cleanup = useCallback(() => {
    try {
      if (viewerRef.current) {
        viewerRef.current.stop()
        viewerRef.current.dispose()
      }
    } catch {}
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
          selfDrivenMode: true,
          useBuiltInControls: true,
          gpuAcceleratedSort: false,
          sharedMemoryForWorkers: false,
          halfPrecisionCovariancesOnGPU: false,
          dynamicScene: false,
          logLevel: GaussianSplats3D.LogLevel.None,
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
          progressiveLoad: false,
          showLoadingUI: false,
          onProgress: (percentComplete: number) => {
            if (!cancelled && typeof percentComplete === 'number') {
              const clamped = Math.min(98, Math.max(1, Math.round(percentComplete)))
              onProgress?.(clamped)
            }
          },
        })

        if (cancelled) {
          try {
            viewer.stop()
            viewer.dispose()
          } catch {}
          return
        }

        // Start viewer render loop
        viewer.start()

        // Signal completion
        onProgress?.(100)
        safeReady()
      } catch (err) {
        if (!cancelled) {
          console.error('[GaussianSplatCanvas] init error:', err)
          onError()
        }
      }
    }

    init()

    return () => {
      cancelled = true
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
