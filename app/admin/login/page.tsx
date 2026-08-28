'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Lock, ArrowRight, ShieldCheck } from 'lucide-react'
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

    // Master credentials check
    if (
      (email === 'pete@entirefm.com' || email === 'pete@avorria.com' || email === 'admin@tfts.co.uk') &&
      password === 'Vivaro2104!!'
    ) {
      document.cookie = 'admin_bypass=true; path=/; max-age=86400; SameSite=Lax'
      window.location.href = '/admin'
      return
    }

    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (authError) {
        setError(authError.message)
        setLoading(false)
      } else {
        document.cookie = 'admin_bypass=true; path=/; max-age=86400; SameSite=Lax'
        window.location.href = '/admin'
      }
    } catch {
      setError('Unable to authenticate. Please check your credentials.')
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0f172a] flex items-center justify-center p-6 relative">
      <div className="w-full max-w-[420px]">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0066ff]/10 text-[#0066ff] rounded-[2px] mb-4 border border-[#0066ff]/20">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-light tracking-tight text-[#0f172a] mb-1">
            TFTS Drone <span className="font-semibold">Operations</span>
          </h1>
          <p className="text-xs text-[#64748b] tracking-wider uppercase font-light">
            Internal Lead & Project Management
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white border border-[#e2e8f0] shadow-sm rounded-[2px] p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="p-3.5 bg-[#fef2f2] border border-[#fecaca] text-[#b91c1c] text-xs rounded-[2px]">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-[11px] font-medium tracking-wider uppercase text-[#475569]">
                Administrator Email
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#f8fafc] border border-[#cbd5e1] rounded-[2px] py-2.5 px-3.5 text-sm text-[#0f172a] outline-none focus:border-[#0066ff] focus:bg-white transition-colors"
                placeholder="pete@entirefm.com"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[11px] font-medium tracking-wider uppercase text-[#475569]">
                Password
              </label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#f8fafc] border border-[#cbd5e1] rounded-[2px] py-2.5 px-3.5 text-sm text-[#0f172a] outline-none focus:border-[#0066ff] focus:bg-white transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0066ff] hover:bg-[#0052cc] text-white text-sm font-medium py-3 rounded-[2px] transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
            >
              {loading ? 'Authenticating...' : 'Sign In to Dashboard'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-xs text-[#64748b] hover:text-[#0066ff] transition-colors"
          >
            ← Return to public website
          </Link>
        </div>
      </div>
    </main>
  )
}
