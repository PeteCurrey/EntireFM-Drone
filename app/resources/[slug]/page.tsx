// app/resources/[slug]/page.tsx
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Share2, 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  HelpCircle,
  FileText,
  Activity,
  Box,
  Layers,
  Search,
  Target
} from 'lucide-react'
import { blogPosts } from '@/lib/blog-posts'
import FAQAccordion from '@/components/ui/FAQAccordion'
import SectionTag from '@/components/ui/SectionTag'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return {}

  const title = `${post.title} | EntireFM Drone`
  
  return {
    title,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: `/resources/${slug}`,
    },
    openGraph: {
      title,
      description: post.metaDescription || post.excerpt,
      url: `https://drone.entirefm.com/resources/${slug}`,
      images: [{ url: post.image }],
      type: 'article',
    },
  }
}

export default async function ResourceArticlePage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: `https://drone.entirefm.com${post.image}`,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'EntireFM Drone',
    },
    publisher: {
      '@type': 'Organization',
      name: 'EntireFM Drone',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://drone.entirefm.com/resources/${slug}`,
    },
  }

  const faqJsonLd = post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null

  return (
    <main className="bg-dark min-h-screen pt-40 pb-32 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      
      <div className="container px-8 md:px-20 mx-auto">
        {/* Back Link */}
        <Link 
          href="/resources" 
          className="group flex items-center gap-4 font-ui text-[11px] tracking-[0.4em] uppercase text-white/40 hover:text-accent transition-colors mb-16"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
          Back to Knowledge Hub
        </Link>

        {/* 1. Article Hero */}
        <header className="max-w-[1200px] mb-24">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-6 mb-8 font-ui text-[10px] tracking-[0.3em] uppercase">
                <span className="px-4 py-1.5 border border-accent/40 text-accent bg-accent/5">{post.category}</span>
                <span className="text-white/30">{post.readTime} Read</span>
              </div>
              <h1 className="text-[clamp(2.25rem,3.7vw,3.5rem)] font-extralight tracking-[-0.04em] leading-[1.02] text-white mb-5 sm:mb-6 uppercase">
                {post.title}
              </h1>
              <p className="font-body text-xl md:text-2xl text-white/50 uppercase tracking-widest font-light leading-relaxed mb-12 max-w-3xl">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-12 font-ui text-[10px] tracking-widest uppercase text-white/40 py-8 border-y border-white/5">
                <span className="flex items-center gap-3"><User className="w-4 h-4 text-accent/50" /> {post.author}</span>
                <span className="flex items-center gap-3"><Clock className="w-4 h-4 text-accent/50" /> Updated {post.date}</span>
                {post.relatedServices[0] && (
                   <Link href={`/services/${post.relatedServices[0]}`} className="flex items-center gap-3 text-accent hover:underline underline-offset-4 decoration-accent/30 ml-auto">
                     VIEW RELATED SERVICE <ArrowRight className="w-4 h-4" />
                   </Link>
                )}
              </div>
            </div>
            <div className="lg:w-1/3 w-full">
               <div className="relative aspect-[4/5] overflow-hidden border border-white/10 grayscale">
                 <Image src={post.image} alt={post.title} fill className="object-cover opacity-60" />
                 <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
               </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8">
            {/* Regulatory Note for Old Posts */}
            {new Date(post.date).getFullYear() < 2024 && post.category === 'Regulations & Planning' && (
              <div className="mb-16 p-8 border-l-4 border-accent bg-accent/5 flex items-start gap-6">
                <Shield className="w-6 h-6 text-accent shrink-0 mt-1" />
                <p className="font-body text-xs text-accent/80 uppercase tracking-widest leading-relaxed italic">
                  This guide should be reviewed against current CAA guidance before being used for operational planning. Do not present outdated drone regulation content as current advice.
                </p>
              </div>
            )}

            {/* 2. Main Article Content */}
            <article className="prose prose-invert prose-lg max-w-none font-body font-light text-white/60 leading-relaxed">
               <div className="resource-content">
                  {post.content.split('\n\n').map((block, i) => {
                    const cleanBlock = block.trim();
                    if (!cleanBlock) return null;
                    
                    if (cleanBlock.startsWith('## ')) {
                      return <h2 key={i} className="font-display text-4xl text-white uppercase mt-20 mb-8 border-b border-white/5 pb-6">{cleanBlock.replace('## ', '')}</h2>
                    }
                    if (cleanBlock.startsWith('### ')) {
                      return <h3 key={i} className="font-display text-2xl text-white uppercase mt-12 mb-6">{cleanBlock.replace('### ', '')}</h3>
                    }
                    if (cleanBlock.startsWith('- ')) {
                      return (
                        <ul key={i} className="space-y-6 my-10">
                          {cleanBlock.split('\n').map((item, j) => (
                            <li key={j} className="flex gap-6 items-start">
                              <CheckCircle2 className="w-5 h-5 text-accent/40 shrink-0 mt-1" />
                              <span className="uppercase tracking-widest text-[13px] leading-relaxed text-white/50">{item.replace('- ', '')}</span>
                            </li>
                          ))}
                        </ul>
                      )
                    }
                    return <p key={i} className="mb-8 uppercase tracking-widest text-sm leading-relaxed text-white/50">{cleanBlock}</p>
                  })}
               </div>

               {/* 3. Practical Guidance Section */}
               <div className="mt-24 p-12 bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-4 mb-8">
                    <Target className="w-6 h-6 text-accent" />
                    <h3 className="font-display text-2xl text-white uppercase tracking-widest m-0">Practical Considerations</h3>
                  </div>
                  <div className="space-y-6 font-ui text-[11px] tracking-widest uppercase text-white/40 leading-relaxed italic">
                     <p>— Drone operations are subject to airspace, weather, site access, permissions, nearby people and property, and operational safety requirements.</p>
                     {post.slug.includes('thermal') && <p>— Thermal imaging can indicate temperature anomalies but should be interpreted in context and verified where required.</p>}
                     {post.slug.includes('survey') && <p>— Survey-grade outputs require suitable methodology, control, processing and accuracy verification.</p>}
                     {post.slug.includes('insurance') && <p>— Drone evidence can support claim documentation but acceptance depends on the insurer, policy, claim context and required evidence.</p>}
                     {post.slug.includes('gaussian') && <p>— Gaussian Splats are visualisation-first assets and should not be treated as survey-grade by default.</p>}
                  </div>
               </div>

               {/* 4. Related Services & Bundle */}
               <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-10 border border-white/5 bg-dark">
                     <h4 className="font-display text-xl text-white uppercase tracking-widest mb-6">Related Services</h4>
                     <div className="space-y-4">
                        {post.relatedServices.map(svc => (
                           <Link key={svc} href={`/services/${svc}`} className="flex items-center justify-between group py-2 border-b border-white/5">
                              <span className="font-ui text-[10px] tracking-widest uppercase text-white/40 group-hover:text-accent transition-colors">{svc.split('-').join(' ')}</span>
                              <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-accent group-hover:translate-x-2 transition-all" />
                           </Link>
                        ))}
                     </div>
                  </div>
                  {post.relatedBundle && (
                    <div className="p-10 border border-accent/20 bg-accent/5">
                       <h4 className="font-display text-xl text-accent uppercase tracking-widest mb-6">Recommended Bundle</h4>
                       <p className="font-body text-[10px] text-white/40 uppercase tracking-widest leading-relaxed mb-8">
                          The {post.relatedBundle.name} provides a structured route from site capture to usable commercial deliverables.
                       </p>
                       <Link href={`/bundles#${post.relatedBundle.slug.replace('-pack', '')}`} className="inline-flex items-center gap-3 text-white font-ui text-[11px] tracking-widest uppercase hover:gap-5 transition-all">
                          VIEW BUNDLE <ArrowRight className="w-4 h-4 text-accent" />
                       </Link>
                    </div>
                  )}
               </div>
            </article>

            {/* 5. Article FAQ */}
            {post.faqs.length > 0 && (
              <section className="mt-32 pt-24 border-t border-white/10">
                 <div className="flex items-center gap-4 mb-12">
                   <HelpCircle className="w-8 h-8 text-accent/40" />
                   <h2 className="font-display text-4xl text-white uppercase tracking-tighter m-0">ARTICLE FAQ</h2>
                 </div>
                 <FAQAccordion faqs={post.faqs.map(f => ({ question: f.q, answer: f.a }))} />
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-16">
            <div className="sticky top-40">
               <div className="p-12 bg-accent text-dark mb-12">
                  <Activity className="w-10 h-10 mb-8 opacity-40" />
                  <h4 className="font-display text-4xl mb-6 uppercase tracking-tighter leading-none">NEED TO SCOPE <br/>A PROJECT?</h4>
                  <p className="font-body text-sm font-bold uppercase tracking-widest mb-10 opacity-70 leading-relaxed">
                    Tell us what you need to inspect, measure, monitor or visualise.
                  </p>
                  <Link href="/brief" className="group flex items-center justify-between bg-dark text-white p-6 font-display text-xl tracking-widest hover:bg-white hover:text-dark transition-all">
                    START BRIEF <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
               </div>

               <div>
                 <h4 className="font-display text-2xl text-white uppercase mb-8 tracking-widest border-b border-accent pb-4 inline-block">More Resources</h4>
                 <div className="space-y-10">
                   {blogPosts.filter(p => p.slug !== post.slug).slice(0, 4).map((p) => (
                     <Link key={p.slug} href={`/resources/${p.slug}`} className="group block">
                       <span className="font-ui text-[9px] tracking-[0.3em] uppercase text-accent mb-3 block">{p.category}</span>
                       <h5 className="font-display text-xl text-white group-hover:text-accent transition-colors uppercase leading-tight">{p.title}</h5>
                       <span className="font-ui text-[9px] tracking-widest uppercase text-white/20 opacity-0 group-hover:opacity-100 transition-opacity mt-2 block">Read Guide →</span>
                     </Link>
                   ))}
                 </div>
               </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
