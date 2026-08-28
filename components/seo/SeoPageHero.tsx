import Link from 'next/link'
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react'

interface SeoPageHeroProps {
  h1: string;
  subheading: string;
  ctaPrimary: string;
  ctaSecondary: string;
  trustLine: string;
  locationSlug?: string;
  serviceSlug?: string;
  sectorSlug?: string;
}

export default function SeoPageHero({ 
  h1, 
  subheading, 
  ctaPrimary, 
  ctaSecondary, 
  trustLine,
  locationSlug,
  serviceSlug,
  sectorSlug
}: SeoPageHeroProps) {
  
  // Construct the prefilled brief link
  const briefUrl = new URLSearchParams()
  if (serviceSlug) briefUrl.append('service', serviceSlug)
  if (locationSlug) briefUrl.append('location', locationSlug)
  if (sectorSlug) briefUrl.append('sector', sectorSlug)
  
  const ctaLink = `/brief${briefUrl.toString() ? `?${briefUrl.toString()}` : ''}`

  return (
    <header className="relative py-40 px-10 md:px-20 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-dark to-dark z-0" />
      
      <div className="relative z-10 max-w-[1000px]">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-accent" />
          <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Commercial Service Configuration</span>
        </div>
        
        <h1 className="text-[clamp(2.25rem,3.7vw,3.5rem)] font-extralight tracking-[-0.04em] leading-[1.02] text-white mb-5 sm:mb-6 uppercase">
          {h1}
        </h1>
        
        <p className="font-body text-xl md:text-2xl text-white/60 leading-relaxed mb-12 max-w-[800px] uppercase tracking-widest font-light">
          {subheading}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 mb-16">
          <Link href={ctaLink} className="bg-accent text-dark font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white transition-all text-center flex items-center justify-center gap-4 group">
            {ctaPrimary} <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
          <Link href="/bundles" className="border border-white/20 text-white font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white hover:text-dark transition-all text-center">
            {ctaSecondary}
          </Link>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-wrap gap-8 items-center">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <span className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">CAA-compliant operations</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">GVC-qualified pilots</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <span className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40">Fully Insured £10M PL</span>
          </div>
        </div>
      </div>
    </header>
  )
}
