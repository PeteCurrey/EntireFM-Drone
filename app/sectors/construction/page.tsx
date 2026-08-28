import { industriesData } from '@/lib/industries-data'
import SectorLayout from '@/components/sectors/SectorLayout'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Drone Services for Construction | Progress Monitoring & Site Surveys | TFTS Drone',
  description: 'Construction monitoring, progress photography, stockpile volumes, and site surveying. High-accuracy data to keep projects on track and stakeholders informed.',
}

export default function ConstructionSector() {
  const data = industriesData.find(d => d.slug === 'construction')
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
      heroVideo="/videos/construction.mp4"
    />
  )
}
