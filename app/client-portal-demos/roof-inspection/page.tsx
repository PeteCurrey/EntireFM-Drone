import { Metadata } from 'next'
import PortalLayout from '@/components/portals/PortalLayout'

export const metadata: Metadata = {
  title: 'Roof Inspection Client Portal Demo | EntireFM Drone',
  description: 'View a representative roof inspection client portal showing how drone images, annotated defects, PDF summaries and contractor evidence can be organised for commercial property teams.',
}

export default function RoofInspectionPortalDemo() {
  return (
    <PortalLayout
      slug="roof-inspection"
      title="Roof Inspection Client Portal Demo"
      subtitle="Representative delivery portal for commercial roof inspection imagery, annotated defects, PDF summaries and contractor-ready evidence."
      projectTitle="Commercial Roof Inspection — Demo Portal"
      serviceCategory="Drone Inspection / Roof Surveys"
      bundleName="Roof Intelligence Pack"
      statusText="Project: ALT-DEMO-001"
      summary="This demo shows how roof inspection outputs can be organised for a facilities manager, landlord, managing agent or commercial property team. The portal brings together high-resolution roof imagery, defect references, annotated images, inspection summaries and next-step records to support maintenance planning and repair scoping."
      deliverables={[
        { title: "Roof Inspection Image Set", type: "image", desc: "Full-coverage high-resolution imagery of the roof deck, plant and drainage.", status: "Sample" },
        { title: "Annotated Defect Pack", type: "image", desc: "Selected imagery with technical annotations highlighting areas of concern.", status: "Preview" },
        { title: "PDF Inspection Summary", type: "report", desc: "A structured summary of findings, asset condition and priority repair guidance.", status: "Sample", actionLabel: "Preview PDF" },
        { title: "Gutter & Drainage Records", type: "image", desc: "Specific evidence of drainage condition, leaf build-up and gutter integrity.", status: "Available" },
        { title: "Contractor Evidence Pack", type: "report", desc: "A curated set of evidence images formatted for sharing with repair contractors.", status: "Sample" }
      ]}
      galleryCategories={["Roof Deck", "Drainage", "Parapets", "Plant Areas", "Defects"]}
      nextSteps={[
        "Share defect images with roofing contractor",
        "Use PDF report for FM budget meeting",
        "Compare findings with future annual inspection",
        "Add annotated images to planned maintenance record",
        "Support insurance evidence documentation"
      ]}
      relatedLinks={[
        { title: "Roof Inspection Service", href: "/services/roof-inspections" },
        { title: "Thermal Imaging Service", href: "/services/thermal-imaging" },
        { title: "Building Envelope Inspections", href: "/services/building-envelope-inspections" },
        { title: "Roof Intelligence Bundle", href: "/bundles#roof-intelligence-pack" },
        { title: "Sample Deliverables Library", href: "/sample-deliverables" }
      ]}
      ctaText="Request a Roof Inspection Portal"
    />
  )
}
