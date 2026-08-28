import Image from 'next/image'
import { Linkedin } from 'lucide-react'

const TEAM = [
  {
    name: 'James Reynolds',
    role: 'Chief Pilot & Operations Director',
    desc: 'Former military aviation specialist with over 2,000 logged commercial drone hours. James leads complex industrial deployment strategies and oversees safety protocol integration.',
    image: '/images/team/james.jpg'
  },
  {
    name: 'Sarah Linnehan',
    role: 'Head of Data & Photogrammetry',
    desc: 'Geospatial analyst specializing in millimeter-accuracy digital twin generation. Sarah translates complex LiDAR and RTK datasets into actionable structural intelligence.',
    image: '/images/team/sarah.jpg'
  },
  {
    name: 'Dan Foster',
    role: 'Lead Thermographer',
    desc: 'Level 2 Certified Thermographer with deep expertise in solar array efficiency audits and large-scale commercial envelope inspections.',
    image: '/images/team/dan.jpg'
  },
  {
    name: 'Rachel Davies',
    role: 'Client Success & Media Coordinator',
    desc: 'Bridges the gap between complex aerial data and executive stakeholders. Rachel ensures deliverables align perfectly with client expectations and regulatory constraints.',
    image: '/images/team/rachel.jpg'
  }
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex flex-col justify-end px-10 md:px-20 pb-32 overflow-hidden noise-overlay">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/events_poster.jpg" 
            alt="TFTS Drone Team" 
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-[800px]">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Operations Leadership</span>
          </div>
          <h1 className="text-[clamp(2.25rem,3.7vw,3.5rem)] font-extralight tracking-[-0.04em] leading-[1.02] text-white mb-5 sm:mb-6">THE<br/><span className="text-accent underline underline-offset-8">TEAM</span></h1>
          <p className="font-body text-lg md:text-xl text-white/40 leading-relaxed max-w-[600px]">
            Technology is only as capable as the operators behind it. TFTS Drone is driven by certified aviation professionals, geospatial analysts, and industrial inspection specialists.
          </p>
        </div>
      </section>

      {/* Team Roster Grid */}
      <section className="py-24 px-10 md:px-20 bg-dark relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1200px]">
          {TEAM.map((member) => (
            <div key={member.name} className="group border border-white/10 bg-white/[0.02] p-8 flex flex-col md:flex-row gap-8 hover:bg-white/[0.05] transition-colors duration-500">
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 rounded-sm">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 border border-white/20" />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-3xl text-white tracking-wide">{member.name}</h3>
                  <a href="#" className="text-white/20 hover:text-accent transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <div className="font-ui text-[11px] tracking-[0.2em] uppercase text-accent mb-6">{member.role}</div>
                <p className="font-body text-sm text-white/40 leading-relaxed">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Careers Callout */}
      <section className="py-24 border-t border-white/10 bg-black text-center px-10">
         <h2 className="font-display text-4xl text-white tracking-wide mb-6">JOIN THE ENTIREFM DRONE FLEET</h2>
         <p className="font-body text-white/40 mb-10 max-w-lg mx-auto">We are always looking for CAA-certified operators and geospatial data experts to join our rapidly expanding regional hubs.</p>
         <button className="border border-white/20 px-8 py-4 font-ui text-[11px] tracking-widest text-white/70 uppercase hover:text-accent hover:border-accent transition-all mx-auto block">VIEW OPEN OPPORTUNITIES</button>
      </section>
    </main>
  )
}
