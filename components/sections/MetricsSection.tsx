import { Building2, Hammer, ShieldAlert, Video, ClipboardCheck } from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'

const CARDS = [
  {
    title: "Property & Facilities",
    desc: "Roof, gutter, building envelope and asset condition capture for commercial property and FM teams.",
    icon: Building2
  },
  {
    title: "Construction & Surveying",
    desc: "Progress records, site mapping, orthomosaics, volumetric outputs and visual documentation for project teams.",
    icon: Hammer
  },
  {
    title: "Insurance & Incident Evidence",
    desc: "Drone evidence packs that can support property, contractor and insurance reporting workflows.",
    icon: ShieldAlert
  },
  {
    title: "Aerial Media & 3D Capture",
    desc: "Aerial photography, video, 360 panoramas, TFTS 3Ds and immersive digital site records.",
    icon: Video
  },
  {
    title: "Operations Standard",
    desc: "Projects are scoped around the required output, site constraints, flight planning and deliverables.",
    icon: ClipboardCheck
  }
]

export default function MetricsSection() {
  return (
    <section data-index="8" className="bg-dark py-32 px-10 md:px-20 border-y border-white/5 relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-24">
          <div className="svc-tag mb-8 inline-flex"><SectionTag number="00" text="Capability" /></div>
          <h2 className="font-display text-5xl md:text-6xl text-white uppercase tracking-tighter leading-none mb-8">
            Built for Serious Commercial <br/><span className="text-accent">Drone Requirements</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-white/10 border border-white/5">
          {CARDS.map((card) => (
            <div key={card.title} className="bg-mid p-10 flex flex-col group hover:bg-accent/[0.03] transition-colors">
              <div className="mb-8 p-4 bg-white/5 w-fit rounded-sm group-hover:bg-accent/10 transition-colors duration-500">
                <card.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="font-display text-2xl text-white mb-4 tracking-widest uppercase group-hover:text-accent transition-colors">
                {card.title}
              </div>
              <p className="font-body text-xs text-white/40 uppercase tracking-[0.1em] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
