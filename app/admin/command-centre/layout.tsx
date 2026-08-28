'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, Users, ShieldCheck, FileText, 
  Target, Box, MapPin, Building2, Layers, 
  Camera, Briefcase, Download, Image as ImageIcon, 
  Activity, Search, BarChart3, AlertCircle, 
  Plane, Settings, LogOut, Bell, Menu, X, 
  ChevronRight, Globe, Zap, Clock
} from 'lucide-react'

const NAV_GROUPS = [
  {
    label: 'Operations',
    items: [
      { name: 'Overview', path: '/admin/command-centre', icon: LayoutDashboard },
      { name: 'Enquiries', path: '/admin/command-centre/enquiries', icon: Briefcase },
      { name: 'Lead Qualification', path: '/admin/command-centre/lead-qualification', icon: ShieldCheck },
      { name: 'Quote Pipeline', path: '/admin/command-centre/quotes', icon: BarChart3 },
      { name: 'Flight Desk', path: '/admin/command-centre/flight-desk', icon: Plane },
    ]
  },
  {
    label: 'Content Engine',
    items: [
      { name: 'SEO Pages', path: '/admin/command-centre/seo-landing-pages', icon: Target },
      { name: 'Services', path: '/admin/command-centre/services', icon: Box },
      { name: 'Locations', path: '/admin/command-centre/locations', icon: MapPin },
      { name: 'Sectors', path: '/admin/command-centre/sectors', icon: Building2 },
      { name: 'Bundles', path: '/admin/command-centre/bundles', icon: Layers },
    ]
  },
  {
    label: 'Assets & Demos',
    items: [
      { name: 'Mission Profiles', path: '/admin/command-centre/mission-profiles', icon: Globe },
      { name: 'Sample Deliverables', path: '/admin/command-centre/sample-deliverables', icon: Camera },
      { name: 'Client Portal Demos', path: '/admin/command-centre/client-portal-demos', icon: LayoutDashboard },
      { name: 'Lead Magnets', path: '/admin/command-centre/lead-magnets', icon: Download },
      { name: 'Media Library', path: '/admin/command-centre/media-library', icon: ImageIcon },
    ]
  },
  {
    label: 'Intelligence',
    items: [
      { name: 'Analytics', path: '/admin/command-centre/analytics-attribution', icon: Activity },
      { name: 'Search Console', path: '/admin/command-centre/search-console', icon: Globe },
      { name: 'GA4 Analytics', path: '/admin/command-centre/ga4', icon: BarChart3 },
      { name: 'Content Quality', path: '/admin/command-centre/content-quality', icon: AlertCircle },
    ]
  }
]

export default function CommandCentreLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-[#050505] text-white flex font-body selection:bg-accent selection:text-dark overflow-hidden">
      {/* Sidebar */}
      <aside className={`
        ${isSidebarOpen ? 'w-80' : 'w-20'} 
        border-r border-white/5 bg-black flex flex-col shrink-0 transition-all duration-500 ease-in-out z-50
      `}>
        {/* Logo Area */}
        <div className="h-24 flex items-center px-8 border-b border-white/5 justify-between">
          {isSidebarOpen ? (
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-accent animate-pulse shadow-[0_0_15px_rgba(200,169,110,0.5)]" />
              <span className="font-display text-2xl tracking-[0.2em] uppercase">TFTS Drone</span>
            </div>
          ) : (
            <div className="w-3 h-3 rounded-full bg-accent mx-auto" />
          )}
          <button 
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors text-white/40 hover:text-white"
          >
            {isSidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-8 custom-scrollbar">
          {NAV_GROUPS.map((group, idx) => (
            <div key={idx} className="space-y-2">
              {isSidebarOpen && (
                <div className="px-4 font-ui text-[9px] tracking-[0.4em] text-white/20 uppercase mb-4">
                  {group.label}
                </div>
              )}
              {group.items.map((item) => {
                const isActive = pathname === item.path
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`
                      flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 group relative
                      ${isActive 
                        ? 'bg-accent/10 text-accent border border-accent/20' 
                        : 'text-white/40 hover:text-white hover:bg-white/5 border border-transparent'}
                    `}
                  >
                    <item.icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-accent' : 'opacity-40 group-hover:opacity-100'}`} />
                    {isSidebarOpen && (
                      <span className="font-ui text-[10px] tracking-[0.2em] uppercase whitespace-nowrap">{item.name}</span>
                    )}
                    {isActive && isSidebarOpen && (
                      <ChevronRight className="w-3 h-3 ml-auto text-accent/50" />
                    )}
                    
                    {/* Tooltip for collapsed mode */}
                    {!isSidebarOpen && (
                      <div className="absolute left-full ml-4 px-3 py-2 bg-accent text-dark font-ui text-[9px] tracking-widest uppercase opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                        {item.name}
                      </div>
                    )}
                  </Link>
                )
              })}
            </div>
          ))}
        </nav>

        {/* Footer Actions */}
        <div className="p-4 border-t border-white/5 space-y-1">
          <Link
            href="/admin/command-centre/settings"
            className="flex items-center gap-4 px-4 py-3 text-white/40 hover:text-white transition-all group rounded-lg"
          >
            <Settings className="w-4 h-4 opacity-40 group-hover:opacity-100" />
            {isSidebarOpen && <span className="font-ui text-[10px] tracking-[0.2em] uppercase">Settings</span>}
          </Link>
          <button
            className="w-full flex items-center gap-4 px-4 py-3 text-red-500/40 hover:text-red-500 transition-all group rounded-lg"
          >
            <LogOut className="w-4 h-4 opacity-40 group-hover:opacity-100" />
            {isSidebarOpen && <span className="font-ui text-[10px] tracking-[0.2em] uppercase">Disconnect</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Top Header / Command Bar */}
        <header className="h-24 border-b border-white/5 flex items-center justify-between px-10 shrink-0 bg-black/50 backdrop-blur-xl z-40">
          <div className="flex items-center gap-8 flex-1">
            {/* Global Search */}
            <div className="relative w-full max-w-xl group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-accent transition-colors" />
              <input 
                type="text"
                placeholder="GLOBAL COMMAND SEARCH (LEADS, PAGES, ASSETS...)"
                className="w-full bg-white/5 border border-white/10 rounded-none px-12 py-3 font-mono text-[10px] tracking-widest text-white placeholder:text-white/10 focus:outline-none focus:border-accent/40 focus:bg-accent/5 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="hidden xl:flex items-center gap-6">
               <div className="flex items-center gap-2">
                 <Zap className="w-3 h-3 text-green-500" />
                 <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">Sync Active</span>
               </div>
               <div className="h-4 w-px bg-white/10" />
               <div className="flex items-center gap-2">
                 <Clock className="w-3 h-3 text-accent" />
                 <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">Uptime: 99.9%</span>
               </div>
            </div>
          </div>

          <div className="flex items-center gap-8 ml-8">
             <button className="relative p-2 hover:bg-white/5 transition-colors group">
                <Bell className="w-5 h-5 text-white/40 group-hover:text-white" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full border-2 border-black" />
             </button>
             
             <div className="flex items-center gap-6 border-l border-white/5 pl-8">
                <div className="text-right hidden sm:block">
                   <div className="font-ui text-[10px] tracking-widest text-white uppercase">Pete Currey</div>
                   <div className="font-mono text-[8px] text-white/20 uppercase">Operations Chief</div>
                </div>
                <div className="w-12 h-12 border border-white/10 bg-white/5 flex items-center justify-center font-display text-accent text-xl">
                  P
                </div>
             </div>
          </div>
        </header>

        {/* Main Canvas Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-[radial-gradient(circle_at_50%_50%,rgba(200,169,110,0.02),transparent)]">
          <div className="p-10 lg:p-16 max-w-[1800px] mx-auto">
             {children}
          </div>
        </div>

        {/* Floating Security Note */}
        <div className="absolute bottom-8 right-8 z-50">
           <div className="bg-red-500/10 border border-red-500/20 px-6 py-3 backdrop-blur-md">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                 <span className="font-mono text-[9px] uppercase tracking-widest text-red-500/80">Demo Mode / Auth Required for Production</span>
              </div>
           </div>
        </div>
      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(200, 169, 110, 0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(200, 169, 110, 0.3);
        }
      `}</style>
    </div>
  )
}
