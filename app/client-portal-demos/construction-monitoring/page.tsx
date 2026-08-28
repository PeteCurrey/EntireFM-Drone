import { Metadata } from 'next'
import PortalLayout from '@/components/portals/PortalLayout'

export const metadata: Metadata = {
  title: 'Construction Monitoring Client Portal Demo | TFTS Drone',
  description: 'View a representative construction progress portal showing dated image archives, milestone records, site updates and stakeholder reporting outputs.',
}

export default function ConstructionMonitoringPortalDemo() {
  return (
    <PortalLayout
      slug="construction-monitoring"
      title="Construction Monitoring Client Portal Demo"
      subtitle="Representative delivery portal for construction progress photography, milestone records, stakeholder updates and project reporting."
      projectTitle="Construction Progress Monitoring — Demo Portal"
      serviceCategory="Construction Monitoring / Site Progress"
      bundleName="Construction Progress Pack"
      statusText="Project: ALT-DEMO-002"
      summary="This demo shows how repeat drone visits can be organised into a structured construction progress portal with dated image sets, milestone notes, comparison views and stakeholder-ready reporting outputs. The portal provides a consistent visual timeline of the site transformation from baseline to completion."
      deliverables={[
        { title: "Dated Image Archive", type: "image", desc: "A structured archive of aerial imagery organized by capture date and milestone.", status: "Available" },
        { title: "Monthly Progress Report", type: "report", desc: "A summary report showing site changes, milestone updates and key visual evidence.", status: "Sample", actionLabel: "Preview Report" },
        { title: "Edited Progress Video", type: "video", desc: "A high-level video summary showing project transformation over the last 30 days.", status: "Preview" },
        { title: "Site Logistics Overview", type: "image", desc: "High-level orthomosaic or wide-angle context for site planning and logistics.", status: "Sample" },
        { title: "Stakeholder Update Pack", type: "report", desc: "Curated visual assets formatted for investor updates and stakeholder presentations.", status: "Available" }
      ]}
      galleryCategories={["Baseline", "Groundworks", "Frame", "Envelope", "External Works"]}
      nextSteps={[
        "Share progress with client-side project team",
        "Use imagery in weekly project progress meetings",
        "Support investor updates with high-end visuals",
        "Compare current state with previous milestones",
        "Build a permanent visual project record"
      ]}
      relatedLinks={[
        { title: "Construction Monitoring Service", href: "/services/construction-monitoring" },
        { title: "Progress Photography Service", href: "/services/construction-progress-photography" },
        { title: "Drone Time-Lapse Service", href: "/services/drone-time-lapse-monitoring" },
        { title: "Construction Progress Bundle", href: "/bundles#construction-progress-pack" },
        { title: "Surveying & Mapping Service", href: "/services/surveying-mapping" }
      ]}
      ctaText="Plan Construction Monitoring"
    />
  )
}
