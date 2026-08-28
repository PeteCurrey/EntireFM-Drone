import { Metadata } from 'next'
import PortalLayout from '@/components/portals/PortalLayout'

export const metadata: Metadata = {
  title: 'Gaussian Splat & 3D Capture Portal Demo | EntireFM Drone',
  description: 'View a representative immersive capture portal showing Gaussian Splat screenshots, flythrough video, 3D visualisation assets and related deliverables.',
}

export default function GaussianSplatPortalDemo() {
  return (
    <PortalLayout
      slug="gaussian-splat"
      title="Gaussian Splat and 3D Capture Portal Demo"
      subtitle="Representative delivery portal for Gaussian Splat visualisation, 3D capture assets, flythrough videos, screenshots and immersive site records."
      projectTitle="Immersive 3D Site Capture — Demo Portal"
      serviceCategory="Gaussian Splat Capture / 3D Visualisation"
      bundleName="Immersive Digital Capture Pack"
      statusText="Project: ALT-DEMO-005"
      summary="This demo shows how immersive capture outputs can be organised for property, construction, heritage or stakeholder engagement projects. The portal provides a gateway to photorealistic 3D visualisations, flythrough videos and high-fidelity site records that offer a level of perspective traditional media cannot match."
      deliverables={[
        { title: "Gaussian Splat Visualisation", type: "3d", desc: "A photorealistic, interactive 3D record of the site environment.", status: "Preview", actionLabel: "Preview Viewer" },
        { title: "3D Screenshot Set", type: "image", desc: "Selected high-resolution snapshots taken from the 3D capture data.", status: "Available" },
        { title: "Immersive Flythrough Video", type: "video", desc: "A cinematic video tour created from the 3D Gaussian Splat data.", status: "Sample" },
        { title: "360 Aerial Panorama", type: "image", desc: "Interactive aerial viewpoint providing full site context.", status: "Available" },
        { title: "Digital Twin Visual Record", type: "3d", desc: "A high-fidelity visual digital twin for documentation and review.", status: "Preview" }
      ]}
      galleryCategories={["3D Visualisation", "Screenshots", "Flythrough", "360 View", "Site Context"]}
      nextSteps={[
        "Use 3D viewer for stakeholder engagement",
        "Share flythrough video on project website",
        "Utilise 360 panorama for site context review",
        "Maintain immersive record for site induction",
        "Support heritage or property documentation"
      ]}
      relatedLinks={[
        { title: "Gaussian Splat Capture Service", href: "/services/gaussian-splat-capture" },
        { title: "Digital Twin Capture Service", href: "/services/digital-twin-capture" },
        { title: "360 Aerial Panorama Service", href: "/services/360-aerial-panoramas" },
        { title: "Immersive Capture Bundle", href: "/bundles#immersive-digital-capture-pack" },
        { title: "Photogrammetry Service", href: "/services/photogrammetry" }
      ]}
      ctaText="Request Immersive 3D Capture"
    />
  )
}
