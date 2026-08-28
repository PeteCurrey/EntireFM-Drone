'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Users, 
  Globe, 
  FolderKanban, 
  Building, 
  FileBarChart, 
  Settings, 
  LogOut,
  ExternalLink,
  ShieldCheck,
  Circle
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

const PRIMARY_NAV = [
  { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { name: 'Leads', path: '/admin/leads', icon: Users },
]

const FUTURE_NAV = [
  { name: 'Website', icon: Globe },
  { name: 'Projects', icon: FolderKanban },
  { name: 'Clients', icon: Building },
  { name: 'Reports', icon: FileBarChart },
  { name: 'Settings', icon: Settings },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const supabase = createClient()
  
  const isLoginPage = pathname === '/admin/login'
  if (isLoginPage) return <>{children}</>

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut()
    } catch {
      // ignore
    }
    document.cookie = 'admin_bypass=; path=/; max-age=0'
    window.location.href = '/admin/login'
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] flex font-sans antialiased">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#e2e8f0] bg-white flex flex-col shrink-0">
        {/* Brand Header */}
        <div className="h-16 px-6 border-b border-[#e2e8f0] flex items-center justify-between">
          <Link href="/admin" className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-[#0066ff] text-white rounded-[2px] flex items-center justify-center font-bold text-xs">
              T
            </div>
            <div>
              <span className="font-semibold text-sm tracking-tight text-[#0f172a] block leading-none">
                TFTS Drone
              </span>
              <span className="text-[10px] text-[#64748b] tracking-wider uppercase font-medium">
                Operations
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#f1f5f9] rounded text-[10px] font-medium text-[#475569]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            Live
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 py-6 px-3 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-6">
            {/* Active Modules */}
            <div>
              <div className="px-3 mb-2 text-[10px] font-semibold tracking-wider text-[#94a3b8] uppercase">
                Core Operations
              </div>
              <nav className="space-y-1">
                {PRIMARY_NAV.map((item) => {
                  const isActive = pathname === item.path || (item.path === '/admin/leads' && pathname.startsWith('/admin/leads/'))
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-[2px] transition-colors ${
                        isActive
                          ? 'bg-[#0066ff]/10 text-[#0066ff]'
                          : 'text-[#475569] hover:bg-[#f1f5f9] hover:text-[#0f172a]'
                      }`}
                    >
                      <item.icon className={`w-4 h-4 ${isActive ? 'text-[#0066ff]' : 'text-[#64748b]'}`} />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </nav>
            </div>

            {/* Future Modules */}
            <div>
              <div className="px-3 mb-2 text-[10px] font-semibold tracking-wider text-[#94a3b8] uppercase">
                Modules (Upcoming)
              </div>
              <div className="space-y-1">
                {FUTURE_NAV.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between px-3 py-2 text-xs text-[#94a3b8] rounded-[2px] cursor-not-allowed select-none opacity-60"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-4 h-4 text-[#cbd5e1]" />
                      <span>{item.name}</span>
                    </div>
                    <span className="text-[9px] px-1.5 py-0.5 bg-[#f1f5f9] rounded text-[#94a3b8] font-mono">
                      Soon
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Public Link & Logout */}
          <div className="pt-6 border-t border-[#e2e8f0] space-y-1">
            <Link
              href="/"
              target="_blank"
              className="flex items-center justify-between px-3 py-2 text-xs text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#0f172a] rounded-[2px] transition-colors"
            >
              <span>View Public Site</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#94a3b8]" />
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2 text-xs text-[#dc2626] hover:bg-[#fef2f2] rounded-[2px] transition-colors text-left font-medium"
            >
              <LogOut className="w-4 h-4 text-[#dc2626]" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-[#e2e8f0] px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="text-xs text-[#64748b]">
              Platform: <span className="font-medium text-[#0f172a]">TFTS Lead CRM v1.0</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-xs font-medium text-[#0f172a] block leading-tight">
                Operations Administrator
              </span>
              <span className="text-[11px] text-[#64748b]">enquiries@tfts.co.uk</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#0066ff]/10 text-[#0066ff] border border-[#0066ff]/20 flex items-center justify-center text-xs font-semibold">
              OA
            </div>
          </div>
        </header>

        {/* Scrollable Page Body */}
        <main className="flex-1 overflow-y-auto p-8 lg:p-10">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}
