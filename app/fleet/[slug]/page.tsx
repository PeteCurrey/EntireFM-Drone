import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ShieldCheck } from 'lucide-react'
import { FLEET_ASSETS, PAYLOADS } from '@/lib/data/fleet'

export default async function FleetDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const asset = FLEET_ASSETS.find((a) => a.slug === slug)
  
  // If not in primary assets, check payloads
  const payload = !asset ? PAYLOADS.find((p) => p.slug === slug) : null
  
  if (!asset && !payload) {
    notFound()
  }

  const data = asset || payload!
  const isPayload = !!payload

  return (
    <main className="min-h-screen bg-dark">
      {/* Cinematic Hero */}
      <section className="relative h-[70vh] flex items-end px-10 md:px-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={data.image} 
            alt={data.name} 
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-[1000px] w-full">
          <Link 
            href="/fleet" 
            className="inline-flex items-center gap-2 font-ui text-[10px] tracking-widest text-accent uppercase mb-12 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Back to Fleet
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">{data.type}</span>
          </div>
          <h1 className="text-[clamp(2.25rem,3.7vw,3.5rem)] font-extralight tracking-[-0.04em] leading-[1.02] text-white mb-5 sm:mb-6">{data.name}</h1>
        </div>
      </section>

      {/* Overview & Specs */}
      <section className="py-24 px-10 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-7">
          <h2 className="font-ui text-[11px] tracking-[0.4em] uppercase text-white/30 mb-8">Performance Overview</h2>
          <p className="font-body text-2xl text-white/70 leading-relaxed mb-12">
            {data.desc}
          </p>

          {!isPayload && asset?.features && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {asset.features.map((feature: { name: string; desc: string }) => (
                <div key={feature.name} className="border-l border-accent/30 pl-8 py-2">
                  <h4 className="font-display text-xl text-white mb-3 tracking-wide uppercase">{feature.name}</h4>
                  <p className="font-body text-sm text-white/40 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-5 bg-white/[0.03] border border-white/5 p-12">
          <h3 className="font-display text-2xl text-white mb-10 tracking-widest uppercase">TECHNICAL SPECS</h3>
          <div className="space-y-6">
            {data.specs.map((spec) => (
              <div key={spec.label} className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="font-ui text-[11px] tracking-widest text-white/30 uppercase">{spec.label}</span>
                <span className="font-ui text-[12px] tracking-widest text-accent uppercase font-bold text-right">{spec.value}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex flex-col gap-4">
            <Link 
              href="/brief"
              className="w-full text-center bg-accent text-dark font-display text-lg py-4 hover:bg-white transition-colors"
            >
              REQUEST DEPLOYMENT
            </Link>
            <div className="flex items-center justify-center gap-3">
              <ShieldCheck className="w-4 h-4 text-accent/50" />
              <span className="font-ui text-[9px] tracking-widest text-white/20 uppercase">Insured & Certified Operations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Matrix (If Asset has Payloads) */}
      {!isPayload && asset?.payloads && (
        <section className="py-32 px-10 md:px-20 bg-white/[0.01] border-t border-white/5">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Integrated Sensor Payloads</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {asset.payloads.map((pSlug) => {
              const pData = PAYLOADS.find(p => p.slug === pSlug)
              if (!pData) return null
              return (
                <Link key={pSlug} href={`/fleet/${pSlug}`} className="group block bg-dark border border-white/5 p-8 hover:border-accent/30 transition-all">
                  <div className="relative aspect-square mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image src={pData.image} alt={pData.name} fill className="object-cover opacity-30 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  </div>
                  <h4 className="font-display text-2xl text-white group-hover:text-accent transition-colors mb-2 tracking-wide uppercase">{pData.name}</h4>
                  <p className="font-ui text-[10px] text-white/30 uppercase tracking-widest">{pData.type}</p>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {/* Final CTA Strip */}
      <section className="py-20 border-t border-white/5 bg-dark">
        <div className="max-w-[1400px] mx-auto px-10 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h3 className="font-display text-4xl text-white tracking-widest mb-4">READY TO SCALE?</h3>
            <p className="font-body text-white/30 max-w-[500px]">Combine our {data.name} ecosystem with our elite flight teams to capture the data that moves your industry forward.</p>
          </div>
          <Link href="/contact" className="group flex items-center gap-6 font-display text-3xl text-accent hover:text-white transition-all">
            COMMISSION A MISSION <span className="group-hover:translate-x-4 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

export async function generateStaticParams() {
  const assets = FLEET_ASSETS.map((a) => ({ slug: a.slug }))
  const payloads = PAYLOADS.map((p) => ({ slug: p.slug }))
  return [...assets, ...payloads]
}
