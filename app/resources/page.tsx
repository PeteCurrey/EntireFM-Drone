// app/resources/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, 
  BookOpen, 
  FileText, 
  ShieldCheck, 
  HelpCircle, 
  Target, 
  Search, 
  BarChart3, 
  Box, 
  Clock, 
  ChevronRight,
  ArrowUpRight
} from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import LeadMagnetTeaser from '@/components/sections/LeadMagnetTeaser'
import { blogPosts } from '@/lib/blog-posts'

export default function ResourcesHubPage() {
  const featuredPosts = blogPosts.slice(0, 3)
  
  const categories = [
    "Drone Inspections",
    "Roof & Building Surveys",
    "Surveying & Mapping",
    "Thermal Imaging",
    "Construction Monitoring",
    "Insurance Evidence",
    "Gaussian Splat & 3D Capture",
    "Aerial Photography & Film",
    "Facilities Management",
    "Solar & Energy",
    "Regulations & Planning",
    "Buyer Guides"
  ]

  const outcomes = [
    {
      title: "I need to inspect a building or roof",
      links: [
        { name: "Drone roof inspection guide", href: "/resources/drone-roof-inspections-commercial-property-guide" },
        { name: "Can drones replace scaffolding?", href: "/resources/can-drone-inspections-replace-scaffolding" },
        { name: "Roof Intelligence Pack", href: "/bundles#roof-intelligence" },
        { name: "Roof Inspections service page", href: "/services/roof-inspections" }
      ]
    },
    {
      title: "I need survey or mapping data",
      links: [
        { name: "Drone survey cost guide", href: "/resources/drone-survey-cost-uk" },
        { name: "Orthomosaic mapping guide", href: "/resources/what-is-an-orthomosaic-map" },
        { name: "Photogrammetry guide", href: "/resources/drone-photogrammetry-commercial-sites" },
        { name: "Survey Data Pack", href: "/bundles#survey-data" }
      ]
    },
    {
      title: "I need construction progress records",
      links: [
        { name: "Construction drone monitoring guide", href: "/resources/construction-monitoring" },
        { name: "Construction Progress Pack", href: "/bundles#construction-progress" },
        { name: "Construction Monitoring service", href: "/services/construction-monitoring" }
      ]
    },
    {
      title: "I need insurance or damage evidence",
      links: [
        { name: "Insurance drone evidence guide", href: "/resources/drone-insurance-evidence-damage-surveys" },
        { name: "Thermal imaging guide", href: "/resources/drone-thermal-imaging-surveys-guide" },
        { name: "Insurance & Incident Evidence Pack", href: "/bundles#insurance-incident" }
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-dark pt-40 pb-32 text-white">
      {/* 1. Hero Section */}
      <section className="px-10 md:px-20 mb-32">
        <div className="max-w-[1200px]">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Commercial Knowledge Hub</span>
          </div>
          <h1 className="font-display text-[8vw] md:text-[6vw] leading-[0.85] mb-12 uppercase tracking-tighter">
            COMMERCIAL DRONE<br/>
            <span className="text-accent underline underline-offset-8 decoration-accent/30">RESOURCES, GUIDES</span><br/>
            AND INSIGHTS
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/50 leading-relaxed max-w-4xl uppercase tracking-widest font-light mb-16">
            Practical guides for drone inspections, roof surveys, thermal imaging, mapping, construction monitoring, insurance evidence, Gaussian Splats, digital twin-style capture and commercial aerial media.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 mb-20">
            <Link href="/brief" className="bg-accent text-dark font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white transition-all text-center">
              START PROJECT BRIEF
            </Link>
            <Link href="/services" className="border border-white/20 text-white font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white hover:text-dark transition-all text-center">
              VIEW DRONE SERVICES
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-12 gap-y-6 pt-12 border-t border-white/5 text-white/30 font-ui text-[10px] tracking-[0.3em] uppercase">
            <span>Inspection</span>
            <span>Surveying</span>
            <span>Thermal</span>
            <span>Construction</span>
            <span>Insurance</span>
            <span>Aerial Media</span>
            <span>3D Capture</span>
          </div>
        </div>
      </section>

      {/* 2. Featured Guides Section */}
      <section className="px-10 md:px-20 mb-40">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="svc-tag mb-6"><SectionTag number="01" text="Priority Reading" /></div>
            <h2 className="font-display text-5xl md:text-6xl text-white uppercase tracking-tighter">FEATURED DRONE GUIDES</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuredPosts.map((post) => (
            <Link key={post.slug} href={`/resources/${post.slug}`} className="group flex flex-col h-full bg-white/[0.02] border border-white/5 hover:border-accent/40 transition-all duration-500 overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute top-4 left-4 bg-dark/80 backdrop-blur-md px-4 py-1.5 border border-white/10 font-ui text-[9px] tracking-widest uppercase text-accent">
                  {post.category}
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-white/30 font-ui text-[9px] tracking-widest uppercase mb-6">
                  <span>{post.readTime} Read</span>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <span>{post.author}</span>
                </div>
                <h3 className="font-display text-2xl text-white mb-6 uppercase tracking-widest group-hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="font-body text-xs text-white/40 uppercase tracking-tighter leading-relaxed mb-10 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-accent font-ui text-[11px] tracking-[0.3em] uppercase group-hover:gap-4 transition-all">
                  READ GUIDE <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Buyer Journey Section */}
      <section className="px-10 md:px-20 py-32 bg-mid border-y border-white/5 mb-40">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <div className="svc-tag mb-8 inline-flex"><SectionTag number="02" text="Navigation" /></div>
            <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter">FIND THE RIGHT GUIDE <br/><span className="text-accent">FOR YOUR REQUIREMENT</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, i) => (
              <div key={i} className="p-12 bg-dark border border-white/5 flex flex-col h-full">
                <h3 className="font-display text-2xl text-white mb-10 uppercase tracking-widest leading-tight">{outcome.title}</h3>
                <div className="space-y-6 flex-grow">
                  {outcome.links.map((link, j) => (
                    <Link 
                      key={j} 
                      href={link.href}
                      className="group flex items-center justify-between py-1 border-b border-white/5 hover:border-accent/30 transition-colors"
                    >
                      <span className="font-ui text-[10px] tracking-widest uppercase text-white/40 group-hover:text-white transition-colors">
                        {link.name}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/10 group-hover:text-accent transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadMagnetTeaser />

      {/* 4. Topic Categories Section */}
      <section className="px-10 md:px-20 mb-40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="svc-tag mb-6"><SectionTag number="03" text="Directory" /></div>
            <h2 className="font-display text-5xl md:text-6xl text-white uppercase tracking-tighter">RESOURCE TOPICS</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-white/10 border border-white/5">
          {categories.map((cat) => (
            <div key={cat} className="bg-dark p-8 flex flex-col items-center justify-center text-center hover:bg-accent/5 transition-all cursor-default group">
              <span className="font-ui text-[10px] tracking-[0.2em] uppercase text-white/40 group-hover:text-accent transition-colors leading-tight">{cat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Service-Linked Article Blocks */}
      <section className="px-10 md:px-20 mb-40">
        <div className="space-y-32">
          {/* Inspection Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
               <div className="svc-tag mb-8"><SectionTag number="04" text="Focus" /></div>
               <h3 className="font-display text-5xl text-white uppercase mb-8 leading-tight">INSPECTION & <br/><span className="text-accent underline underline-offset-8">PROPERTY GUIDES</span></h3>
               <p className="font-body text-lg text-white/40 uppercase tracking-widest mb-12">Practical advice for landlords, FM teams and asset owners on using drone intelligence for building audits.</p>
               <Link href="/services/drone-inspection" className="inline-flex items-center gap-6 border border-white/20 text-white px-10 py-5 font-display text-xl tracking-widest hover:bg-white hover:text-dark transition-all">
                 VIEW INSPECTION SERVICES <ArrowRight className="w-5 h-5" />
               </Link>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
               {blogPosts.filter(p => p.category === 'Roof & Building Surveys' || p.category === 'Drone Inspections' || p.category === 'Facilities Management').slice(0, 4).map(post => (
                 <Link key={post.slug} href={`/resources/${post.slug}`} className="p-8 border border-white/5 bg-white/[0.01] hover:border-accent/40 transition-all group">
                   <h4 className="font-display text-xl text-white mb-4 uppercase tracking-widest group-hover:text-accent transition-colors leading-tight">{post.title}</h4>
                   <span className="font-ui text-[9px] tracking-widest uppercase text-white/20">Read Guide →</span>
                 </Link>
               ))}
            </div>
          </div>

          {/* Surveying Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 lg:order-2">
               <div className="svc-tag mb-8"><SectionTag number="05" text="Focus" /></div>
               <h3 className="font-display text-5xl text-white uppercase mb-8 leading-tight">SURVEYING & <br/><span className="text-accent underline underline-offset-8">MAPPING GUIDES</span></h3>
               <p className="font-body text-lg text-white/40 uppercase tracking-widest mb-12">Technical guides on orthomosaic mapping, photogrammetry and survey-grade drone data.</p>
               <Link href="/services/surveying-mapping" className="inline-flex items-center gap-6 border border-white/20 text-white px-10 py-5 font-display text-xl tracking-widest hover:bg-white hover:text-dark transition-all">
                 VIEW SURVEY SERVICES <ArrowRight className="w-5 h-5" />
               </Link>
            </div>
            <div className="lg:col-span-7 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
               {blogPosts.filter(p => p.category === 'Surveying & Mapping' || p.category === 'Gaussian Splat & 3D Capture').slice(0, 4).map(post => (
                 <Link key={post.slug} href={`/resources/${post.slug}`} className="p-8 border border-white/5 bg-white/[0.01] hover:border-accent/40 transition-all group">
                   <h4 className="font-display text-xl text-white mb-4 uppercase tracking-widest group-hover:text-accent transition-colors leading-tight">{post.title}</h4>
                   <span className="font-ui text-[9px] tracking-widest uppercase text-white/20">Read Guide →</span>
                 </Link>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA Section */}
      <section className="px-10 md:px-20 py-32 bg-accent text-dark">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-display text-6xl md:text-8xl mb-12 uppercase tracking-tighter leading-[0.85]">
            NEED ADVICE ON A <br/><span className="underline decoration-dark/30 underline-offset-[10px]">DRONE REQUIREMENT?</span>
          </h2>
          <p className="font-body text-xl md:text-2xl text-dark/70 max-w-3xl mx-auto mb-16 uppercase tracking-widest font-medium leading-relaxed">
            Submit a project brief and EntireFM Drone will recommend the right capture workflow, deliverables and package route.
          </p>
          <Link 
            href="/brief"
            className="group inline-flex items-center gap-8 bg-dark text-white px-16 py-8 font-display text-4xl tracking-[0.1em] transition-all hover:bg-white hover:text-dark shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
          >
            START PROJECT BRIEF <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition-transform duration-500" />
          </Link>
        </div>
      </section>
    </main>
  )
}
