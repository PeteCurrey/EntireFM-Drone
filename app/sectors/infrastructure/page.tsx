import { industriesData } from '@/lib/industries-data'
import SectorLayout from '@/components/sectors/SectorLayout'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Drone Services for Infrastructure & Transport | EntireFM Drone',
  description: 'Specialist drone services for infrastructure. Bridge inspection, rail corridor mapping, and port surveys. CAA-compliant, high-accuracy LiDAR and photogrammetry.',
}

export default function InfrastructureSector() {
  const data = industriesData.find(d => d.slug === 'infrastructure')
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
      heroVideo="/videos/infrastructure.mp4"
    />
  )
}
