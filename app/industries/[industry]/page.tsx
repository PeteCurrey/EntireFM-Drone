// app/industries/[industry]/page.tsx
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { industriesData } from '@/lib/industries-data'
import VideoBackground from '@/components/ui/VideoBackground'

interface Props {
  params: Promise<{ industry: string }>
}

export async function generateStaticParams() {
  return industriesData.map((ind) => ({
    industry: ind.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params
  const data = industriesData.find(i => i.slug === industry)
  if (!data) return {}

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `/industries/${industry}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://drone.entirefm.com/industries/${industry}`,
      images: [{ url: '/images/og-default.jpg' }],
    },
  }
}

export default async function IndustryPage({ params }: Props) {
  const { industry } = await params
  const data = industriesData.find(i => i.slug === industry)
  if (!data) notFound()

  return (
    <main className="bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {(() => {
          const videoMap: Record<string, string> = {
            'facilities-management': 'inspection',
            'construction': 'construction',
            'insurance-loss-adjusters': 'inspection',
            'infrastructure': 'inspection',
            'utilities-energy': 'thermal',
            'commercial-property': 'photography',
            'surveyors': 'surveying',
            'heritage-conservation': 'photography',
            'agriculture-rural-estates': 'agriculture',
            'events-venues-media': 'events',
            'solar-renewable-energy': 'thermal'
          }

          const assetBase = videoMap[data.slug] || 'inspection'
          const posterExt = assetBase === 'agriculture' || assetBase === 'events' || assetBase === 'thermal' ? 'jpg' : 'png'
          
          return (
            <VideoBackground 
              src={`/videos/${assetBase}.mp4`} 
              poster={`/images/${assetBase}_poster.${posterExt}`}
              alt={`${data.title} cinematic background`}
              brightness={0.35} 
              isHero={true}
            />
          )
        })()}
        <div className="grid-lines" />
        <div className="noise-overlay" />
        
        <div className="container relative z-10 px-8 md:px-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8 translate-y-4 opacity-0 animate-[fade-up_0.8s_0.2s_forwards]">
              <div className="w-12 h-[1px] bg-accent" />
              <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Industry Solutions</span>
            </div>
            
            <h1 className="text-[clamp(2.25rem,3.7vw,3.5rem)] font-extralight tracking-[-0.04em] leading-[1.02] text-white mb-5 sm:mb-6 uppercase">
              {data.headline.map((line, i) => (
                <div key={i}>
                  <span className={i === 1 ? 'text-accent' : ''}>{line}</span>
                  {i < data.headline.length - 1 && <br/>}
                </div>
              ))}
            </h1>

            <p className="text-sm sm:text-base lg:text-[1.0625rem] font-light leading-relaxed text-white/70 max-w-2xl opacity-0 animate-[fade-in_1s_1s_forwards]">
              {data.description}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-32 border-b border-white/5 relative bg-[#0a0a0a]">
        <div className="container px-8 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/5">
            {data.benefits.map((benefit, i) => (
              <div key={i} className="p-12 bg-dark hover:bg-accent/5 transition-colors group">
                <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-white/20 mb-8 block group-hover:text-accent transition-colors">
                  Benefit 0{i + 1}
                </span>
                <p className="font-display text-2xl text-white uppercase tracking-wider leading-snug">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missions and Services */}
      <section className="py-32">
        <div className="container px-8 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-1 py-12 hidden lg:block">
              <span className="font-display text-8xl text-white/5 opacity-50 block rotate-90 origin-left translate-x-12">
                OPERATIONS
              </span>
            </div>
            <div className="lg:col-span-5">
              <h2 className="font-display text-5xl md:text-6xl text-white mb-12 uppercase leading-none">
                Typical<br/><span className="text-accent underline underline-offset-8">Missions</span>
              </h2>
              <div className="space-y-6">
                {data.missions.map((mission, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 border border-white/5 bg-white/5 flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="font-body text-lg text-white/60 tracking-wider uppercase">{mission}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6">
              <h2 className="font-display text-5xl md:text-6xl text-white mb-12 uppercase leading-none">
                Core<br/><span className="text-accent underline underline-offset-8">Technology</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.relatedServices.map((slug, i) => (
                  <Link 
                    key={i} 
                    href={`/services/${slug}`}
                    className="group p-8 bg-white/5 border border-white/10 hover:border-accent/40 transition-all transition-colors"
                  >
                    <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-white/30 block mb-4 group-hover:text-accent">Service</span>
                    <h3 className="font-display text-2xl text-white uppercase tracking-widest mb-4">{slug.replace('-', ' ')}</h3>
                    <div className="flex items-center gap-2 text-accent font-ui text-[10px] tracking-[0.2em] uppercase mt-auto">
                      Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/5 bg-[#0a0a0a] text-center">
        <div className="container px-8 md:px-20">
          <h2 className="font-display text-6xl md:text-8xl text-white mb-12 uppercase">
            Specialist Solutions for<br/>
            <span className="text-accent">{data.title.replace('Drone Services for ', '').toUpperCase()}</span>
          </h2>
          <Link 
            href="/contact"
            className="group inline-flex items-center gap-6 bg-accent text-dark px-16 py-8 font-display text-4xl tracking-[0.1em] transition-all hover:bg-white"
          >
            DISCUSS YOUR SECTOR <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </main>
  )
}
