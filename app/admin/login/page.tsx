'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Shield, Lock, Terminal } from 'lucide-react'

import Link from 'next/link'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Local override for requested credentials
    if ((email === 'pete@entirefm.com' || email === 'pete@avorria.com') && password === 'Vivaro2104!!') {
      // Set a bypass cookie to allow access through middleware
      document.cookie = "admin_bypass=true; path=/; max-age=3600; SameSite=Lax"
      window.location.href = '/admin'
      return
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      window.location.href = '/admin'
    }
  }

  return (
    <main className="min-h-screen bg-dark flex items-center justify-center p-6 relative overflow-hidden">
      {/* HUD Aesthetics */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-[440px]">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 border border-accent/20 bg-accent/5 mb-8">
            <Shield className="w-8 h-8 text-accent" />
          </div>
          <h1 className="font-display text-4xl text-white tracking-[0.2em] mb-4 uppercase">Ops Terminal</h1>
          <p className="font-body text-xs text-white/30 tracking-[0.3em] uppercase">TFTS Drone Command Access Only</p>
        </div>

        <div className="bg-white/[0.02] border border-white/10 p-10 backdrop-blur-md">
          <form onSubmit={handleLogin} className="space-y-8">
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] uppercase tracking-widest text-center">
                Access Denied: {error}
              </div>
            )}
            
            <div className="space-y-3">
              <label className="block font-ui text-[9px] tracking-widest text-white/30 uppercase">Uplink ID (Email)</label>
              <div className="relative">
                <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                <input 
                  required type="email" value={email} onChange={e => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 text-white outline-none focus:border-accent transition-colors font-body text-sm"
                  placeholder="admin@entirefm.com"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="block font-ui text-[9px] tracking-widest text-white/30 uppercase">Security Token (Password)</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                <input 
                  required type="password" value={password} onChange={e => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 text-white outline-none focus:border-accent transition-colors font-body text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit" disabled={loading}
              className="w-full bg-accent text-dark font-display text-xl tracking-[0.3em] py-5 hover:bg-white transition-all disabled:opacity-50"
            >
              {loading ? 'AUTHENTICATING...' : 'INITIATE UPLINK'}
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="font-ui text-[9px] tracking-widest text-white/20 hover:text-accent transition-colors uppercase">
            ← Return to public airspace
          </Link>
        </div>
      </div>

      {/* Frame Decor */}
      <div className="fixed top-10 left-10 w-20 h-20 border-t border-l border-white/10 pointer-events-none" />
      <div className="fixed bottom-10 right-10 w-20 h-20 border-b border-r border-white/10 pointer-events-none" />
    </main>
  )
}
