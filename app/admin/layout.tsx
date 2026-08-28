'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Share2, 
  LogOut, 
  Settings,
  Circle,
  Activity,
  Download,
  Target
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

const NAV_ITEMS = [
  { name: 'Overview', path: '/admin', icon: LayoutDashboard },
  { name: 'Leads (CRM)', path: '/admin/leads', icon: Users },
  { name: 'Analytics & Attribution', path: '/admin/analytics', icon: Activity },
  { name: 'Lead Magnets', path: '/admin/lead-magnets', icon: Download },
  { name: 'Case Studies', path: '/admin/cms', icon: FileText },
  { name: 'SEO Engine', path: '/admin/seo', icon: Target },
  { name: 'Social Gen', path: '/admin/social', icon: Share2 },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const supabase = createClient()
  
  const isLoginPage = pathname === '/admin/login'
  if (isLoginPage) return <>{children}</>

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/admin/login'
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white flex font-body selection:bg-accent selection:text-dark">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/5 bg-black flex flex-col shrink-0">
        <div className="p-10 border-b border-white/5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-display text-xl tracking-widest uppercase">TFTS Drone</span>
          </div>
          <span className="font-ui text-[9px] tracking-[0.4em] text-white/30 uppercase">Ops Command Center</span>
        </div>

        <nav className="flex-1 p-6 space-y-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-4 px-6 py-4 transition-all duration-300 group ${
                  isActive 
                  ? 'bg-accent/5 text-accent border border-accent/20' 
                  : 'text-white/40 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className={`w-4 h-4 ${isActive ? 'text-accent' : 'text-current opacity-40 group-hover:opacity-100'}`} />
                <span className="font-ui text-[11px] tracking-widest uppercase">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-6 border-t border-white/5 space-y-2">
           <Link
            href="/admin/settings"
            className="flex items-center gap-4 px-6 py-4 text-white/40 hover:text-white transition-all group"
          >
            <Settings className="w-4 h-4 opacity-40 group-hover:opacity-100" />
            <span className="font-ui text-[11px] tracking-widest uppercase">Settings</span>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-6 py-4 text-red-500/60 hover:text-red-500 transition-all group"
          >
            <LogOut className="w-4 h-4 opacity-40 group-hover:opacity-100" />
            <span className="font-ui text-[11px] tracking-widest uppercase">Terminate Uplink</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-10 shrink-0">
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
               <Circle className="w-2 h-2 fill-green-500 text-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
               <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">System Ready</span>
             </div>
             <div className="h-4 w-px bg-white/10" />
             <div className="flex items-center gap-2">
               <Activity className="w-3 h-3 text-accent" />
               <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">Latency: 24ms</span>
             </div>
          </div>

          <div className="flex items-center gap-8">
             <div className="text-right">
                <div className="font-ui text-[10px] tracking-widest text-white uppercase">Sector 07 (Global)</div>
                <div className="font-mono text-[8px] text-white/20 uppercase">Admin Console v1.0.4</div>
             </div>
             <div className="w-10 h-10 border border-white/10 bg-white/5 flex items-center justify-center font-display text-accent">
               A
             </div>
          </div>
        </header>

        {/* Content Area */}
        <section className="flex-1 overflow-y-auto p-12 custom-scrollbar">
          {children}
        </section>
      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(200, 169, 110, 0.2);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(200, 169, 110, 0.4);
        }
      `}</style>
    </div>
  )
}
