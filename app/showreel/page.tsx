import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Aerial Videography & Film Showreel | EntireFM Drone',
  description: 'Explore our gallery of cinematic 4K aerial videography, including property reveals, coastal orbits, and commercial glides.',
}

export default function ShowreelPage() {
  const videos = [
    {
      id: 'shot-01',
      title: 'SHOT 01 · PROPERTY REVEAL',
      description: 'A dynamic push-in and reveal of a luxury residential property, showcasing the surrounding landscape and architectural scale.',
      videoSrc: '/videos/photography.mp4',
      poster: '/images/photography_poster.png',
      quality: '4K',
      sector: 'Real Estate'
    },
    {
      id: 'shot-02',
      title: 'SHOT 02 · COASTAL ORBIT',
      description: 'A sweeping cinematic orbit over a coastal environment, highlighting natural beauty and dramatic topography.',
      videoSrc: '/videos/hero.mp4',
      poster: '/images/photography_poster.png',
      quality: '4K',
      sector: 'Tourism & Environment'
    },
    {
      id: 'shot-03',
      title: 'SHOT 03 · COMMERCIAL GLIDE',
      description: 'A low-altitude, high-speed tracking shot across a commercial development, delivering scale and context.',
      videoSrc: '/videos/events.mp4',
      poster: '/images/photography_poster.png',
      quality: '4K',
      sector: 'Commercial Development'
    }
  ]

  return (
    <main className="bg-dark text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-8 md:px-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Cinematic Capture</span>
          </div>
          
          <h1 className="font-display text-[8vw] md:text-[6vw] leading-[0.85] text-white mb-10 uppercase tracking-tighter">
            AERIAL VIDEOGRAPHY <br/>
            <span className="text-accent">& SHOWREEL</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10 pb-16">
            <div className="lg:col-span-8">
              <p className="font-body text-xl md:text-2xl font-light text-white/50 max-w-3xl uppercase tracking-widest leading-relaxed">
                Explore a curated selection of our aerial videography. From dynamic property reveals to cinematic commercial tracking shots, all captured in ultra-high definition 4K.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link 
                href="/brief"
                className="group bg-accent text-dark px-10 py-6 font-display text-2xl tracking-widest flex items-center gap-4 hover:bg-white transition-all w-full lg:w-auto justify-center"
              >
                BOOK A SHOOT <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="px-8 md:px-20 pb-32">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-32">
          {videos.map((video, index) => (
            <div key={video.id} id={video.id} className={`flex flex-col gap-12 scroll-mt-32 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
              
              {/* Video Player Area */}
              <div className="flex-1 w-full relative aspect-video bg-black/50 border border-white/10 overflow-hidden group">
                <video 
                  src={video.videoSrc}
                  poster={video.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-20 h-20 rounded-full bg-accent/20 backdrop-blur-sm border border-accent flex items-center justify-center">
                     <Play className="w-8 h-8 text-accent ml-2" />
                  </div>
                </div>
                <div className="absolute top-6 left-6 font-ui text-[10px] tracking-[0.3em] uppercase bg-accent text-dark px-4 py-1.5 font-bold">
                  {video.quality}
                </div>
              </div>
              
              {/* Content Area */}
              <div className="flex-1 w-full max-w-xl">
                <div className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-4">{video.sector}</div>
                <h2 className="font-display text-4xl md:text-5xl text-white mb-6 uppercase tracking-wider leading-tight">
                  {video.title}
                </h2>
                <p className="font-body text-lg text-white/50 uppercase tracking-widest leading-relaxed mb-8">
                  {video.description}
                </p>
                <Link href="/contact" className="inline-flex items-center gap-4 text-accent font-ui text-[11px] tracking-[0.3em] uppercase hover:text-white transition-colors group">
                  REQUEST SIMILAR SHOT <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 border-t border-white/5 bg-accent text-dark">
        <div className="container mx-auto px-8 md:px-20 text-center">
          <div className="font-ui text-[11px] tracking-[0.4em] uppercase font-bold mb-8">Initiate Operations</div>
          <h2 className="font-display text-6xl md:text-8xl mb-12 uppercase tracking-tighter leading-none">
            READY TO CAPTURE <br/>
            <span className="underline decoration-dark/30 underline-offset-[10px]">YOUR PROJECT?</span>
          </h2>
          <Link 
            href="/brief" 
            className="group inline-flex items-center gap-8 bg-dark text-white px-12 py-8 font-display text-4xl tracking-[0.1em] transition-all hover:bg-white hover:text-dark shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
          >
            START PROJECT BRIEF <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition-transform duration-500" />
          </Link>
        </div>
      </section>
    </main>
  )
}
