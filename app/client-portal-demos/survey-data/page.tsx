import { Metadata } from 'next'
import PortalLayout from '@/components/portals/PortalLayout'

export const metadata: Metadata = {
  title: 'Survey Data Client Portal Demo | TFTS Drone',
  description: 'View a representative survey delivery portal showing orthomosaic maps, point clouds, volume reports, cut/fill summaries and export files.',
}

export default function SurveyDataPortalDemo() {
  return (
    <PortalLayout
      slug="survey-data"
      title="Survey Data Client Portal Demo"
      subtitle="Representative delivery portal for orthomosaic maps, point clouds, volume reports, cut/fill summaries and survey-supported drone outputs."
      projectTitle="Drone Survey Data Pack — Demo Portal"
      serviceCategory="Surveying & Mapping / Data Capture"
      bundleName="Survey Data Pack"
      statusText="Project: ALT-DEMO-003"
      summary="This demo shows how survey and mapping outputs can be organised for surveyors, contractors, developers and technical teams. The portal provides access to high-resolution orthomosaics, 3D data, volumetric reports and export-ready files for use in CAD, GIS and BIM workflows. *Survey-grade outputs require appropriate methodology and control.*"
      deliverables={[
        { title: "Orthomosaic Map", type: "map", desc: "High-resolution, georeferenced aerial map for site documentation and context.", status: "Available", actionLabel: "Preview Map" },
        { title: "3D Point Cloud", type: "3d", desc: "Technical dataset of millions of georeferenced points for site measurement.", status: "Sample" },
        { title: "Stockpile Volume Report", type: "report", desc: "A summary report showing volume calculations for stockpiles or earthworks.", status: "Preview" },
        { title: "Cut & Fill Summary", type: "report", desc: "Comparison data showing surface changes relative to a baseline or design.", status: "Available" },
        { title: "CAD / GIS Export Files", type: "report", desc: "Technical files (GeoTIFF, LAS, DXF) formatted for engineering software.", status: "Sample" }
      ]}
      galleryCategories={["Orthomosaic", "Point Cloud", "Volumetrics", "DSM / DTM", "3D Mesh"]}
      nextSteps={[
        "Import orthomosaic into CAD or GIS software",
        "Use point cloud for site topographical review",
        "Verify earthworks volumes with technical reports",
        "Share cut/fill data with site management team",
        "Maintain as-built data record for project closure"
      ]}
      relatedLinks={[
        { title: "Surveying & Mapping Service", href: "/services/surveying-mapping" },
        { title: "Orthomosaic Mapping Service", href: "/services/orthomosaic-mapping" },
        { title: "Stockpile Volume Service", href: "/services/stockpile-volume-surveys" },
        { title: "Survey Data Bundle", href: "/bundles#survey-data-pack" },
        { title: "Photogrammetry Service", href: "/services/photogrammetry" }
      ]}
      ctaText="Discuss Survey Data Delivery"
    />
  )
}
