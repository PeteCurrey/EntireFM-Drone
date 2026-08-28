import { industriesData } from '@/lib/industries-data'
import SectorLayout from '@/components/sectors/SectorLayout'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Drone Data for Surveyors & Engineers | EntireFM Drone',
  description: 'Professional drone data for surveyors. Orthomosaic mapping, topographic surveys, LiDAR point clouds and as-built verification.',
}

export default function SurveyorsSector() {
  const data = industriesData.find(d => d.slug === 'surveyors')
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
