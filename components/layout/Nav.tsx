'use client'

// components/layout/Nav.tsx
'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLenis } from '@/lib/lenis'
import { Rocket, Menu, X, ChevronDown, Box, ShieldCheck, Zap, BarChart3, Hammer, Building2, Search, Camera, Database, LayoutGrid } from 'lucide-react'

const sectorMenu = [
  {
    title: 'Infrastructure & Energy',
    image: '/images/nav/thermal.png',
    services: [
      { name: 'Infrastructure Inspections', slug: 'infrastructure-inspections', desc: 'Critical asset auditing and structural monitoring.' },
      { name: 'Utilities & Energy', slug: 'utilities-energy-inspections', desc: 'Transmission and renewable asset inspections.' },
      { name: 'Solar Panel Inspections', slug: 'solar-panel-inspections', desc: 'Thermal efficiency and cell-level fault detection.' },
      { name: 'Bridge Drone Inspections', slug: 'bridge-drone-inspections', desc: 'Non-disruptive structural bridge audits.' },
    ]
  },
  {
    title: 'Construction & Surveying',
    image: '/images/nav/surveying.png',
    services: [
      { name: 'Surveying & Mapping', slug: 'surveying-mapping', desc: 'Orthomosaics, point clouds and 3D site data.' },
      { name: 'Construction Monitoring', slug: 'construction-monitoring', desc: 'Repeat aerial progress capture and reporting.' },
      { name: 'Volumetric Surveys', slug: 'volumetric-surveys', desc: 'Precise stockpile and earthworks measurement.' },
      { name: 'LiDAR Point Clouds', slug: 'lidar-point-cloud-surveys', desc: 'High-density laser scans for true terrain data.' },
    ]
  },
  {
    title: 'Property & Assets',
    image: '/images/nav/inspection.png',
    services: [
      { name: 'Roof Inspections', slug: 'roof-inspections', desc: 'Commercial roof, gutter and asset evidence.' },
      { name: 'Building Envelope', slug: 'building-envelope-inspections', desc: 'Facade, cladding and high-level structural audits.' },
      { name: 'Facade Inspections', slug: 'facade-inspections', desc: 'Detailed cladding and elevation condition reports.' },
      { name: 'Facilities Management', slug: 'facilities-management-inspections', desc: 'Strategic asset visibility for FM providers.' },
    ]
  },
  {
    title: 'Specialist & Response',
    image: '/images/nav/photography.png',
    services: [
      { name: 'Gaussian Splat Capture', slug: 'gaussian-splat-capture', desc: 'Photorealistic 3D site visualisation.' },
      { name: 'Thermal Drone Surveys', slug: 'thermal-imaging', desc: 'Radiometric evidence for building physics.' },
      { name: 'Emergency Response', slug: 'emergency-response', desc: 'Rapid intelligence for incidents and claims.' },
      { name: 'Insurance Surveys', slug: 'insurance-loss-adjuster-surveys', desc: 'Detailed evidence for adjusters and insurers.' },
    ]
  }
]

const packagesMenu = [
  { name: 'Roof Intelligence', slug: 'roof-intelligence', icon: Search, desc: 'Complete roof and gutter audit pack.' },
  { name: 'Asset Condition', slug: 'building-envelope', icon: Building2, desc: 'External envelope and facade record.' },
  { name: 'Construction Progress', slug: 'construction-progress', icon: Hammer, desc: 'Scheduled build monitoring cycles.' },
  { name: 'Survey Data', slug: 'survey-data', icon: BarChart3, desc: 'Accurate mapping and volumetric data.' },
  { name: 'Visual Sales', slug: 'visual-sales', icon: Camera, desc: 'High-end marketing and media assets.' },
  { name: 'Insurance Evidence', slug: 'insurance-incident', icon: ShieldCheck, desc: 'Rapid post-incident damage records.' },
  { name: 'Solar & Energy', slug: 'solar-energy', icon: Zap, desc: 'PV array thermal and visual audits.' },
  { name: 'Immersive Digital', slug: 'immersive-digital', icon: Box, desc: 'Gaussian Splats and 3D digital twins.' },
]

const portfolioMenu = [
  { name: 'Featured Work', slug: 'portfolio', desc: 'High-impact project highlights.' },
  { name: 'Case Studies', slug: 'portfolio', desc: 'Detailed mission breakdowns.' },
  { name: 'Mission Profiles', slug: 'portfolio', desc: 'Technical execution examples.' },
  { name: 'Example Outputs', slug: 'portfolio', desc: 'Raw data and deliverable samples.' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<'services' | 'packages' | 'portfolio' | null>(null)
  const [mobileSectorsOpen, setMobileSectorsOpen] = useState(false)
  const [mobilePackagesOpen, setMobilePackagesOpen] = useState(false)
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false)
  
  const lenis = useLenis()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!lenis) return
    const handleScroll = (scroll: { animatedScroll: number }) => {
      setScrolled(scroll.animatedScroll > 80)
    }
    lenis.on('scroll', handleScroll)
    return () => lenis.off('scroll', handleScroll)
  }, [lenis])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      if (lenis) lenis.stop()
    } else {
      document.body.style.overflow = ''
      if (lenis) lenis.start()
    }
    return () => {
      document.body.style.overflow = ''
      if (lenis) lenis.start()
    }
  }, [mobileMenuOpen, lenis])

  const handleMouseEnter = (menu: 'services' | 'packages' | 'portfolio') => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveMenu(menu)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null)
    }, 150)
  }

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled || mobileMenuOpen || activeMenu ? 'bg-dark/90 backdrop-blur-2xl py-4 border-b border-white/5' : 'bg-transparent py-8'} px-6 md:px-12`}
      >
        <div className="max-w-[1700px] mx-auto flex justify-between items-center relative">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 group" onClick={() => { setMobileMenuOpen(false); setActiveMenu(null); }}>
              <span className="font-display text-2xl md:text-3xl tracking-[0.15em] text-white">ENTIREFM</span>
              <span className="font-display text-2xl md:text-3xl tracking-[0.15em] text-accent">DRONE</span>
            </Link>
            <div className="hidden sm:block w-[1px] h-6 bg-white/10" />
            <Link
              href="https://www.entirefm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block font-ui text-[10px] tracking-[0.2em] uppercase text-white/40 hover:text-accent transition-colors"
            >
              Part of EntireFM ↗
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {/* Services Dropdown */}
            <div 
              className="relative py-4 -my-4"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                href="/services" 
                className={`font-ui text-[15px] font-medium tracking-[0.2em] uppercase transition-colors flex items-center gap-2 ${activeMenu === 'services' ? 'text-accent' : 'text-white/80 hover:text-white'}`}
              >
                Services <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === 'services' ? 'rotate-180 text-accent' : ''}`} />
              </Link>
            </div>

            {/* Packages Dropdown */}
            <div 
              className="relative py-4 -my-4"
              onMouseEnter={() => handleMouseEnter('packages')}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                href="/bundles" 
                className={`font-ui text-[15px] font-medium tracking-[0.2em] uppercase transition-colors flex items-center gap-2 ${activeMenu === 'packages' ? 'text-accent' : 'text-white/80 hover:text-white'}`}
              >
                Packages <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === 'packages' ? 'rotate-180 text-accent' : ''}`} />
              </Link>
            </div>

            <Link href="/sectors" className="font-ui text-[15px] font-medium tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors">
              Sectors
            </Link>

            <Link href="/gaussian-splat" className="font-ui text-[15px] font-medium tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors">
              Gaussian Splat
            </Link>

            {/* Portfolio Dropdown */}
            <div 
              className="relative py-4 -my-4"
              onMouseEnter={() => handleMouseEnter('portfolio')}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                href="/portfolio" 
                className={`font-ui text-[15px] font-medium tracking-[0.2em] uppercase transition-colors flex items-center gap-2 ${activeMenu === 'portfolio' ? 'text-accent' : 'text-white/80 hover:text-white'}`}
              >
                Portfolio <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === 'portfolio' ? 'rotate-180 text-accent' : ''}`} />
              </Link>
            </div>

            <Link href="/client-portal-demos" className="font-ui text-[15px] font-medium tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors">
              Demo Portals
            </Link>
          </div>

          {/* CTA Actions */}
          <div className="flex items-center gap-4 lg:gap-6">
            <Link 
              href="/brief"
              className="hidden lg:flex items-center gap-3 font-ui text-[12px] bg-accent text-dark font-bold tracking-[0.25em] uppercase px-10 py-4 hover:bg-white transition-all duration-300"
            >
              START BRIEF
            </Link>
            <button 
              className="lg:hidden text-white hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Services Mega Menu Dropdown */}
        <div 
          className={`absolute top-full left-0 w-full bg-dark/95 backdrop-blur-3xl border-b border-white/5 transition-all duration-500 ease-in-out hidden lg:block overflow-hidden ${activeMenu === 'services' ? 'max-h-[850px] opacity-100 shadow-[0_40px_100px_rgba(0,0,0,0.9)]' : 'max-h-0 opacity-0 pointer-events-none'}`}
          onMouseEnter={() => handleMouseEnter('services')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-[1700px] mx-auto px-12 py-16 grid grid-cols-4 gap-12">
            {sectorMenu.map((sector) => (
              <div key={sector.title} className="group/sector flex flex-col h-full">
                {/* Sector Header with Image */}
                <div className="relative aspect-[16/9] overflow-hidden mb-10 border border-white/10 group-hover/sector:border-accent/40 transition-colors duration-500">
                  <Image 
                    src={sector.image} 
                    alt={sector.title}
                    fill
                    className="object-cover opacity-40 group-hover/sector:opacity-100 group-hover/sector:scale-105 transition-all duration-700 ease-out grayscale group-hover/sector:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="font-display text-2xl tracking-widest text-white uppercase">{sector.title}</h3>
                  </div>
                </div>

                {/* Service Links */}
                <ul className="space-y-6 flex-1">
                  {sector.services.map((service) => (
                    <li key={service.slug}>
                      <Link 
                        href={`/services/${service.slug}`}
                        className="group/link flex flex-col gap-1 transition-all"
                        onClick={() => setActiveMenu(null)}
                      >
                        <span className="font-ui text-[12px] tracking-[0.2em] uppercase text-white/70 group-hover/link:text-accent transition-colors flex items-center gap-3">
                           <div className="w-0 h-[1px] bg-accent transition-all group-hover/link:w-4" />
                           {service.name}
                        </span>
                        <span className="font-body text-[10px] text-white/30 uppercase tracking-tighter pl-3 group-hover/link:text-white/50 transition-colors">
                          {service.desc}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-white/[0.03] py-8 px-12 flex justify-between items-center border-t border-white/10">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-ui text-[11px] tracking-[0.3em] uppercase text-white/40">Operational Status: UK CAA GVC / PDRA-01</span>
              </div>
              <Link href="/brief" className="font-ui text-[11px] tracking-[0.3em] uppercase text-accent/60 hover:text-accent flex items-center gap-2 group/brief" onClick={() => setActiveMenu(null)}>
                <Search className="w-3 h-3" /> Not sure what you need? <span className="underline underline-offset-4 group-hover/brief:text-white transition-colors">Start a brief</span>
              </Link>
            </div>
            <Link href="/services" className="font-ui text-[12px] tracking-[0.4em] uppercase text-accent hover:text-white transition-colors flex items-center gap-3 group/all" onClick={() => setActiveMenu(null)}>
              View All Services <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Packages Mega Menu Dropdown */}
        <div 
          className={`absolute top-full left-0 w-full bg-dark/95 backdrop-blur-3xl border-b border-white/5 transition-all duration-500 ease-in-out hidden lg:block overflow-hidden ${activeMenu === 'packages' ? 'max-h-[850px] opacity-100 shadow-[0_40px_100px_rgba(0,0,0,0.9)]' : 'max-h-0 opacity-0 pointer-events-none'}`}
          onMouseEnter={() => handleMouseEnter('packages')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-[1700px] mx-auto px-12 py-16">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-[1px] bg-accent" />
              <h2 className="font-display text-4xl tracking-widest text-white uppercase">COMMERCIAL SERVICE <span className="text-accent">BUNDLES</span></h2>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {packagesMenu.map((pkg) => (
                <Link 
                  key={pkg.slug}
                  href={`/bundles#${pkg.slug}`}
                  className="bg-white/[0.02] border border-white/5 p-10 flex flex-col gap-6 group hover:bg-accent/5 hover:border-accent/40 transition-all duration-500"
                  onClick={() => setActiveMenu(null)}
                >
                  <div className="flex items-center justify-between">
                    <pkg.icon className="w-8 h-8 text-white/30 group-hover:text-accent transition-colors" />
                    <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-accent group-hover:translate-x-2 transition-all" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl tracking-widest text-white uppercase group-hover:text-accent transition-colors mb-2">{pkg.name}</h3>
                    <p className="font-body text-[10px] text-white/30 uppercase tracking-tighter leading-relaxed">{pkg.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="bg-white/[0.03] py-8 px-12 flex justify-between items-center border-t border-white/10">
            <span className="font-ui text-[11px] tracking-[0.3em] uppercase text-white/30 italic">Outcome-led drone solutions engineered for industry decision makers</span>
            <Link href="/bundles" className="font-ui text-[12px] tracking-[0.4em] uppercase text-accent hover:text-white transition-colors" onClick={() => setActiveMenu(null)}>
              Explore All Packages →
            </Link>
          </div>
        </div>

        {/* Portfolio Dropdown */}
        <div 
          className={`absolute top-full left-0 w-full bg-dark/95 backdrop-blur-3xl border-b border-white/5 transition-all duration-500 ease-in-out hidden lg:block overflow-hidden ${activeMenu === 'portfolio' ? 'max-h-[600px] opacity-100 shadow-[0_40px_100px_rgba(0,0,0,0.9)]' : 'max-h-0 opacity-0 pointer-events-none'}`}
          onMouseEnter={() => handleMouseEnter('portfolio')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-[1700px] mx-auto px-12 py-16 flex flex-col gap-12">
            <div className="flex items-center gap-6">
              <div className="w-16 h-[1px] bg-accent" />
              <h2 className="font-display text-4xl tracking-widest text-white uppercase">PROVEN <span className="text-accent">EXCELLENCE</span></h2>
            </div>
            <div className="grid grid-cols-4 gap-8">
              {portfolioMenu.map((item) => (
                <Link 
                  key={item.name}
                  href={`/${item.slug}`}
                  className="group flex flex-col gap-4 border-l border-white/10 pl-8 hover:border-accent transition-all py-2"
                  onClick={() => setActiveMenu(null)}
                >
                  <h3 className="font-display text-2xl text-white uppercase tracking-widest group-hover:text-accent transition-colors">{item.name}</h3>
                  <p className="font-body text-[11px] text-white/30 uppercase tracking-tighter">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-dark z-[90] flex flex-col transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <div className="flex flex-col items-start px-8 pt-32 gap-6 h-full overflow-y-auto pb-24 custom-scrollbar">
          {/* Services Section */}
          <div className="w-full">
            <button 
              onClick={() => setMobileSectorsOpen(!mobileSectorsOpen)}
              className="font-display text-5xl tracking-tighter text-white flex items-center justify-between w-full py-4"
            >
              SERVICES <ChevronDown className={`w-8 h-8 text-accent transition-transform ${mobileSectorsOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`space-y-12 overflow-hidden transition-all duration-500 ${mobileSectorsOpen ? 'max-h-[3000px] opacity-100 mt-10 mb-10' : 'max-h-0 opacity-0'}`}>
              {sectorMenu.map(sector => (
                <div key={sector.title} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-[1px] bg-accent" />
                    <h4 className="font-display text-2xl text-white tracking-widest uppercase">{sector.title}</h4>
                  </div>
                  <div className="grid grid-cols-1 gap-6 pl-12">
                    {sector.services.map(service => (
                      <Link 
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="group flex flex-col gap-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="font-ui text-[14px] tracking-[0.2em] uppercase text-white/70 active:text-accent">{service.name}</span>
                        <span className="font-body text-[10px] text-white/30 uppercase tracking-tighter">{service.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Packages Section */}
          <div className="w-full">
            <button 
              onClick={() => setMobilePackagesOpen(!mobilePackagesOpen)}
              className="font-display text-5xl tracking-tighter text-white flex items-center justify-between w-full py-4"
            >
              PACKAGES <ChevronDown className={`w-8 h-8 text-accent transition-transform ${mobilePackagesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`space-y-8 overflow-hidden transition-all duration-500 ${mobilePackagesOpen ? 'max-h-[1200px] opacity-100 mt-10 mb-10' : 'max-h-0 opacity-0'}`}>
              <div className="grid grid-cols-1 gap-8 pl-12">
                {packagesMenu.map(pkg => (
                  <Link 
                    key={pkg.slug}
                    href={`/bundles#${pkg.slug}`}
                    className="group flex flex-col gap-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="font-ui text-[14px] tracking-[0.2em] uppercase text-white/70 active:text-accent">{pkg.name}</span>
                    <span className="font-body text-[10px] text-white/30 uppercase tracking-tighter">{pkg.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="w-full">
            <button 
              onClick={() => setMobilePortfolioOpen(!mobilePortfolioOpen)}
              className="font-display text-5xl tracking-tighter text-white flex items-center justify-between w-full py-4"
            >
              PORTFOLIO <ChevronDown className={`w-8 h-8 text-accent transition-transform ${mobilePortfolioOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`space-y-6 overflow-hidden transition-all duration-500 ${mobilePortfolioOpen ? 'max-h-[800px] opacity-100 mt-10 mb-10' : 'max-h-0 opacity-0'}`}>
              <div className="grid grid-cols-1 gap-6 pl-12">
                {portfolioMenu.map(item => (
                  <Link 
                    key={item.name}
                    href={`/${item.slug}`}
                    className="font-ui text-[14px] tracking-[0.2em] uppercase text-white/70 active:text-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/sectors" className="font-display text-5xl tracking-tighter text-white py-4 w-full" onClick={() => setMobileMenuOpen(false)}>SECTORS</Link>
          <Link href="/client-portal-demos" className="font-display text-5xl tracking-tighter text-white py-4 w-full" onClick={() => setMobileMenuOpen(false)}>DEMO PORTALS</Link>
          <Link href="/gaussian-splat" className="font-display text-5xl tracking-tighter text-white py-4 w-full" onClick={() => setMobileMenuOpen(false)}>GAUSSIAN SPLAT</Link>
          <Link href="/fleet" className="font-display text-5xl tracking-tighter text-white py-4 w-full" onClick={() => setMobileMenuOpen(false)}>FLEET</Link>
          <Link href="/resources" className="font-display text-5xl tracking-tighter text-white py-4 w-full" onClick={() => setMobileMenuOpen(false)}>RESOURCES</Link>
          
          <div className="mt-auto w-full pt-10 pb-8">
             <Link 
              href="/brief"
              className="flex items-center justify-center gap-4 bg-accent text-white font-display text-3xl tracking-[0.1em] uppercase py-7 w-full shadow-[0_20px_40px_rgba(0,102,255,0.25)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Rocket className="w-6 h-6" />
              START BRIEF
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
