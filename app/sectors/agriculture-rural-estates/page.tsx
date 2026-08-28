import { industriesData } from '@/lib/industries-data'
import SectorLayout from '@/components/sectors/SectorLayout'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Drone Services for Agriculture & Rural Estates | TFTS Drone',
  description: 'Drone mapping, land surveys, estate visual records, agricultural aerial imagery, drainage context, rural asset inspections and development site capture for farms, estates and landowners.',
}

export default function AgricultureSectorPage() {
  const data = industriesData.find(d => d.slug === 'agriculture-rural-estates')
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
      heroVideo="/videos/surveying.mp4"
    />
  )
}
