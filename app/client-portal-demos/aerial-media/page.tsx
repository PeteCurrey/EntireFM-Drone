import { Metadata } from 'next'
import PortalLayout from '@/components/portals/PortalLayout'

export const metadata: Metadata = {
  title: 'Aerial Media Client Portal Demo | EntireFM Drone',
  description: 'View a representative media delivery portal showing aerial image packs, edited videos, social clips, website hero loops and download-ready assets.',
}

export default function AerialMediaPortalDemo() {
  return (
    <PortalLayout
      slug="aerial-media"
      title="Aerial Media Client Portal Demo"
      subtitle="Representative delivery portal for aerial photography, edited drone video, FPV flythroughs, social clips and website-ready media assets."
      projectTitle="Aerial Media Delivery — Demo Portal"
      serviceCategory="Aerial Photography & Film"
      bundleName="Visual Sales Pack"
      statusText="Project: ALT-DEMO-006"
      summary="This demo shows how aerial media outputs can be organised for property marketing, venue promotion, events or commercial campaigns. The portal centralises high-resolution photography, edited video content, social clips and web-ready assets into a single delivery environment."
      deliverables={[
        { title: "High-Res Image Pack", type: "image", desc: "A curated set of high-resolution aerial photographs for print and web.", status: "Available", actionLabel: "Preview Images" },
        { title: "Edited Drone Video", type: "video", desc: "A cinematic edited video summary of the site, venue or event.", status: "Sample" },
        { title: "Social Media Clips", type: "video", desc: "Short, vertically-formatted clips optimized for social media platforms.", status: "Preview" },
        { title: "Website Hero Loop", type: "video", desc: "A high-impact video loop designed for website header backgrounds.", status: "Available" },
        { title: "FPV Flythrough Sequence", type: "video", desc: "Dynamic indoor or outdoor flythrough footage for immersive viewing.", status: "Sample" }
      ]}
      galleryCategories={["Hero Shots", "Site Details", "Video Edit", "Social Clips", "FPV"]}
      nextSteps={[
        "Download high-res images for brochure use",
        "Embed video edit on property listing page",
        "Share social clips with marketing team",
        "Use hero loop for website background",
        "Maintain visual archive for future campaigns"
      ]}
      relatedLinks={[
        { title: "Aerial Photography Service", href: "/services/aerial-photography-film" },
        { title: "FPV Drone Filming Service", href: "/services/fpv-drone-filming" },
        { title: "Events & Media Service", href: "/services/events-media" },
        { title: "Visual Sales Bundle", href: "/bundles#visual-sales-pack" },
        { title: "Sample Deliverables Library", href: "/sample-deliverables" }
      ]}
      ctaText="Create Aerial Media Brief"
    />
  )
}
