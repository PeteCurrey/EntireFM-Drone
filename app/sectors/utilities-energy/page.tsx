import { industriesData } from '@/lib/industries-data'
import SectorLayout from '@/components/sectors/SectorLayout'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Drone Services for Utilities & Energy | TFTS Drone',
  description: 'Specialist drone services for utilities. Solar farm audits, powerline inspection, and wind turbine assessment. CAA-compliant, thermal imaging specialist.',
}

export default function UtilitiesSector() {
  const data = industriesData.find(d => d.slug === 'utilities-energy')
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
