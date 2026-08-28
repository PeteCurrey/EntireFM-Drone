import { industriesData } from '@/lib/industries-data'
import SectorLayout from '@/components/sectors/SectorLayout'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Drone Services for Solar PV & Renewable Energy | TFTS Drone',
  description: 'Visual and thermal drone inspections for rooftop solar arrays, commercial PV systems and solar farms. Helping renewable energy teams identify anomalies and monitor asset health.',
}

export default function SolarSectorPage() {
  const data = industriesData.find(d => d.slug === 'solar-renewable-energy')
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
      heroVideo="/videos/thermal.mp4"
    />
  )
}
