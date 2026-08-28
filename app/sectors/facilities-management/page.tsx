import { industriesData } from '@/lib/industries-data'
import SectorLayout from '@/components/sectors/SectorLayout'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Drone Services for Facilities Management | Roof & Asset Inspections | EntireFM Drone',
  description: 'Roof inspections, building envelope capture, and thermal imaging for FM teams managing commercial buildings and estates. Professional reporting without scaffolding.',
}

export default function FacilitiesManagementSector() {
  const data = industriesData.find(d => d.slug === 'facilities-management')
  if (!data) notFound()

  return (
    <SectorLayout
      slug={data.slug}
      title={data.title}
      hero={data.hero}
      challenge={data.challenge}
      outcomes={data.outcomes}
      workflow={data.workflow}
      serviceStack={data.serviceStack}
      bundles={data.recommendedBundles}
      deliverables={data.deliverables}
      missionProfiles={data.missionProfiles}
      resources={data.resources}
      faqs={data.faqs}
      heroVideo="/videos/inspection.mp4"
    />
  )
}
