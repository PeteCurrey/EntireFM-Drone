import { Metadata } from 'next'
import PortalLayout from '@/components/portals/PortalLayout'

export const metadata: Metadata = {
  title: 'Insurance Evidence Client Portal Demo | TFTS Drone',
  description: 'View a representative insurance evidence portal showing damage imagery, annotated inspection records, summary reports and contractor/insurance support files.',
}

export default function InsuranceEvidencePortalDemo() {
  return (
    <PortalLayout
      slug="insurance-evidence"
      title="Insurance Evidence Client Portal Demo"
      subtitle="Representative delivery portal for damage imagery, annotated evidence, condition summaries and contractor/insurance support records."
      projectTitle="Insurance Evidence Capture — Demo Portal"
      serviceCategory="Insurance & Loss Adjuster Surveys"
      bundleName="Insurance & Incident Evidence Pack"
      statusText="Project: ALT-DEMO-004"
      summary="This demo shows how post-incident drone outputs can be organised into an evidence portal for property owners, landlords, contractors, insurers or loss adjusters. The portal centralises damage imagery, annotated evidence and summary reports to support claim documentation and repair scoping. *Subject to insurer acceptance requirements.*"
      deliverables={[
        { title: "Damage Evidence Image Set", type: "image", desc: "Detailed visual documentation of storm, fire or impact damage.", status: "Available" },
        { title: "Annotated Damage Pack", type: "image", desc: "Key evidence images with technical annotations highlighting impact areas.", status: "Preview" },
        { title: "PDF Evidence Summary", type: "report", desc: "A concise summary of incident impact, site context and visual findings.", status: "Sample", actionLabel: "Preview Report" },
        { title: "Roof Condition Imagery", type: "image", desc: "High-resolution inspection of roof coverings and structures post-incident.", status: "Available" },
        { title: "Contractor Scoping Pack", type: "report", desc: "A curated set of imagery formatted to help contractors quote for repairs.", status: "Sample" }
      ]}
      galleryCategories={["Roof Damage", "Building Envelope", "Water Ingress", "Site Context", "Annotations"]}
      nextSteps={[
        "Share evidence portal with insurance provider",
        "Send scoping pack to repair contractors",
        "Use summary report in loss adjuster meetings",
        "Compare with pre-incident records if available",
        "Document access-restricted damage areas"
      ]}
      relatedLinks={[
        { title: "Insurance Survey Service", href: "/services/insurance-loss-adjuster-surveys" },
        { title: "Emergency Response Service", href: "/services/emergency-response" },
        { title: "Roof Inspection Service", href: "/services/roof-inspections" },
        { title: "Insurance Evidence Bundle", href: "/bundles#insurance-incident-evidence-pack" },
        { title: "Sample Deliverables Library", href: "/sample-deliverables" }
      ]}
      ctaText="Request Evidence Capture"
    />
  )
}
