import HeroSection from '@/components/sections/HeroSection'
import LifecycleSection from '@/components/sections/LifecycleSection'
import InspectionSection from '@/components/sections/InspectionSection'
import SurveyingSection from '@/components/sections/SurveyingSection'
import SpatialCaptureSection from '@/components/sections/SpatialCaptureSection'
import ConstructionSection from '@/components/sections/ConstructionSection'
import ThermalSection from '@/components/sections/ThermalSection'
import AgricultureSection from '@/components/sections/AgricultureSection'
import EventsSection from '@/components/sections/EventsSection'
import InterventionSection from '@/components/sections/InterventionSection'
import OutputTeaser from '@/components/sections/OutputTeaser'
import MetricsSection from '@/components/sections/MetricsSection'
import SectorSection from '@/components/sections/SectorSection'
import FAQSection from '@/components/sections/FAQSection'
import BundlesTeaser from '@/components/sections/BundlesTeaser'
import PortfolioTeaser from '@/components/sections/PortfolioTeaser'
import ContactSection from '@/components/sections/ContactSection'
import BriefAssistantTeaser from '@/components/sections/BriefAssistantTeaser'
import CostEstimatorTeaser from '@/components/sections/CostEstimatorTeaser'
import { TrustedByStrip, AccreditationsStrip } from '@/components/ui/Strips'

export default function Home() {
  return (
    <main>
      {/* Chapter 01: Hero */}
      <HeroSection />

      {/* Chapter 02: The 5-Stage Intelligence Lifecycle */}
      <LifecycleSection />

      {/* Trust Strip */}
      <TrustedByStrip />

      {/* Chapter 03: Inspection */}
      <InspectionSection />

      {/* Chapter 04: Surveying & Mapping */}
      <SurveyingSection />

      {/* Chapter 05: TFTS 3Ds / Spatial Capture Showcase */}
      <SpatialCaptureSection />

      {/* Chapter 06: Construction Monitoring */}
      <ConstructionSection />

      {/* Accreditations Strip */}
      <AccreditationsStrip />

      {/* Chapter 07: Thermal Auditing */}
      <ThermalSection />

      {/* Chapter 08: Agriculture & Rural Estates */}
      <AgricultureSection />

      {/* Chapter 09: Cinematic Media */}
      <EventsSection />

      {/* Chapter 10: EntireFM Strategic Integration (Inspection to Intervention) */}
      <InterventionSection />

      {/* Chapter 11: Tangible Deliverables */}
      <OutputTeaser />

      {/* Interactive Project Tools */}
      <CostEstimatorTeaser />
      <BriefAssistantTeaser />

      {/* Operational Metrics & Sectors */}
      <MetricsSection />
      <SectorSection />

      {/* Portfolio & Commercial Packages */}
      <PortfolioTeaser />
      <BundlesTeaser />

      {/* FAQ & Contact */}
      <FAQSection />
      <ContactSection />
    </main>
  )
}
