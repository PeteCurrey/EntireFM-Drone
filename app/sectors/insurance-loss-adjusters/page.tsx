import { industriesData } from '@/lib/industries-data'
import SectorLayout from '@/components/sectors/SectorLayout'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Drone Evidence for Insurance & Loss Adjusters | EntireFM Drone',
  description: 'Professional drone damage surveys for loss adjusters and insurers. High-resolution imagery, thermal audits, and objective evidence capture for claims.',
}

export default function InsuranceSector() {
  const data = industriesData.find(d => d.slug === 'insurance-loss-adjusters')
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
      caveat={data.caveat}
      heroVideo="/videos/thermal.mp4"
    />
  )
}
