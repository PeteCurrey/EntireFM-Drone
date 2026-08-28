// components/layout/Footer.tsx
import Link from 'next/link'
import { servicesData } from '@/lib/services-data'
import { locationsData } from '@/lib/locations-data'
import { industriesData } from '@/lib/industries-data'
import EntireFMLogo from '@/components/ui/EntireFMLogo'

export default function Footer() {
  const highIntentLocations = locationsData.filter(l => 
    ['london', 'manchester', 'birmingham', 'leeds', 'glasgow', 'liverpool', 'bristol'].includes(l.slug)
  )

  return (
    <footer className="bg-dark/80 backdrop-blur-md border-t border-white/5 py-24 relative z-50">
      <div className="container px-8 md:px-20">
        {/* Part of EntireFM masterbrand strip */}
        <div className="mb-16 pb-8 border-b border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="mb-2">
              <EntireFMLogo animated={false} size="w-10" showDescriptor className="gap-2.5" />
            </div>
            <div className="text-[11px] font-light tracking-[0.3em] uppercase text-white/35 mt-3">
              Technical Flight & Thermal Surveys
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link 
              href="https://www.entirefm.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[11px] font-light tracking-[0.25em] uppercase text-accent hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="w-4 h-[1px] bg-accent" />
              Part of the EntireFM group →
            </Link>
            <Link 
              href="https://www.entirefm.com/services/drone-services"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-light tracking-[0.25em] uppercase text-white/40 hover:text-white transition-colors"
            >
              TFTS Drone Hub
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <p className="font-body text-sm text-white/30 uppercase tracking-widest leading-relaxed">
              CAA-Compliant commercial drone operations. Aerial intelligence for property, construction, facilities management and infrastructure. Nationwide UK coverage.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display text-xl text-white uppercase mb-8 tracking-widest text-accent">Services</h4>
            <ul className="space-y-4">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="font-ui text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors">
                    {service.title.replace(' Services UK', '')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sector Column */}
          <div>
            <h4 className="font-display text-xl text-white uppercase mb-8 tracking-widest text-accent">Sectors</h4>
            <ul className="space-y-4">
              {industriesData.map((industry) => (
                <li key={industry.slug}>
                  <Link href={`/sectors/${industry.slug}`} className="font-ui text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors">
                    {industry.title.replace('Drone Services for ', '')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage Column */}
          <div>
            <h4 className="font-display text-xl text-white uppercase mb-8 tracking-widest text-accent">Coverage</h4>
            <ul className="space-y-4">
              {highIntentLocations.map((loc) => (
                <li key={loc.slug}>
                  <Link href={`/locations/${loc.slug}`} className="font-ui text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors">
                    Drone Services {loc.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="font-ui text-[11px] tracking-[0.2em] uppercase text-accent hover:text-white transition-colors">
                  View All Regions →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-ui text-[10px] tracking-[0.2em] text-white/20 uppercase text-center md:text-left">
            © {new Date().getFullYear()} TFTS Drone. TFTS Drone is a trading brand of EntireFM Ltd.
            <span className="mx-4 opacity-50">|</span>
            <Link href="/privacy" className="hover:text-accent">Privacy Policy</Link>
            <span className="mx-4 opacity-50">|</span>
            <Link href="/terms" className="hover:text-accent">Terms of Service</Link>
            <span className="mx-4 opacity-50">|</span>
            <Link href="/operations-standard" className="hover:text-accent">Operations Standard</Link>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-6 font-ui text-[10px] tracking-[0.3em] uppercase">
            <Link href="/cost-estimator" className="text-accent hover:text-white transition-colors">Cost Estimator</Link>
            <Link href="/project-brief-assistant" className="text-accent hover:text-white transition-colors">Brief Assistant</Link>
            <Link href="/choose-your-output" className="text-accent hover:text-white transition-colors">Output Selector</Link>
            <Link href="/sample-deliverables" className="text-accent hover:text-white transition-colors">Deliverables</Link>
            <Link href="/portfolio" className="text-white/40 hover:text-accent transition-colors">Portfolio</Link>
            <Link href="/resources" className="text-white/40 hover:text-accent transition-colors">Resources</Link>
            <Link href="/operations-standard" className="text-white/40 hover:text-accent transition-colors">Operations</Link>
            <Link href="/contact" className="text-white/40 hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
