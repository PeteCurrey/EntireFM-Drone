import { industriesData } from '@/lib/industries-data'
import SectorLayout from '@/components/sectors/SectorLayout'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Drone Services for Events, Venues & Media | TFTS Drone',
  description: 'Aerial photography, drone video, FPV flythroughs, venue showcases, 360 panoramas and campaign-ready content for events, venues, tourism and commercial media teams.',
}

export default function EventsMediaSectorPage() {
  const data = industriesData.find(d => d.slug === 'events-venues-media')
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
      heroVideo="/videos/hero.mp4"
    />
  )
}
