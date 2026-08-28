'use client'

import React from 'react'
import { Settings, ShieldCheck, Mail, Bell, Globe, BarChart3, Zap } from 'lucide-react'

export default function CommandCentreSettingsPage() {
  return (
    <div className="space-y-16 max-w-4xl pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30" />
            <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent/60">System Config</span>
          </div>
          <h1 className="font-display text-5xl text-white tracking-widest uppercase mb-4">Settings</h1>
          <p className="font-body text-xs text-white/30 tracking-[0.3em] uppercase">Configure business logic, notification triggers and integration parameters.</p>
        </div>
      </div>

      <div className="space-y-12">
         {/* Business Details */}
         <section className="space-y-8">
            <h2 className="font-display text-2xl text-white uppercase tracking-widest border-b border-white/5 pb-6 flex items-center gap-4">
               <Settings className="w-5 h-5 text-accent" /> Business Intelligence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-2">
                  <label className="font-ui text-[9px] text-white/20 uppercase tracking-widest">Business Name</label>
                  <input type="text" defaultValue="EntireFM Drone" className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-xs text-white focus:outline-none focus:border-accent/40" />
               </div>
               <div className="space-y-2">
                  <label className="font-ui text-[9px] text-white/20 uppercase tracking-widest">HQ Location</label>
                  <input type="text" defaultValue="London, UK" className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-xs text-white focus:outline-none focus:border-accent/40" />
               </div>
            </div>
         </section>

         {/* Communications */}
         <section className="space-y-8">
            <h2 className="font-display text-2xl text-white uppercase tracking-widest border-b border-white/5 pb-6 flex items-center gap-4">
               <Mail className="w-5 h-5 text-accent" /> Uplink Protocols
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-2">
                  <label className="font-ui text-[9px] text-white/20 uppercase tracking-widest">Primary Enquiry Email</label>
                  <input type="text" defaultValue="drone@entirefm.com" className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-xs text-white focus:outline-none focus:border-accent/40" />
               </div>
               <div className="space-y-2">
                  <label className="font-ui text-[9px] text-white/20 uppercase tracking-widest">Ops Notification Alert</label>
                  <input type="text" defaultValue="ops@entirefm.com" className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-xs text-white focus:outline-none focus:border-accent/40" />
               </div>
            </div>
         </section>

         {/* Integration Status */}
         <section className="space-y-8">
            <h2 className="font-display text-2xl text-white uppercase tracking-widest border-b border-white/5 pb-6 flex items-center gap-4">
               <Zap className="w-5 h-5 text-accent" /> Systems Integration
            </h2>
            <div className="space-y-4">
               {[
                 { name: 'GA4 Analytics', status: 'Pending Connection', icon: BarChart3 },
                 { name: 'Search Console', status: 'Pending Connection', icon: Globe },
                 { name: 'Supabase DB', status: 'Operational', icon: Zap },
                 { name: 'Resend API', status: 'Operational', icon: Mail },
               ].map((int, i) => (
                 <div key={i} className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-4">
                       <int.icon className="w-4 h-4 text-white/20" />
                       <span className="font-ui text-[11px] text-white tracking-widest uppercase">{int.name}</span>
                    </div>
                    <span className={`font-mono text-[9px] uppercase tracking-widest ${int.status === 'Operational' ? 'text-green-500' : 'text-white/20'}`}>
                       {int.status}
                    </span>
                 </div>
               ))}
            </div>
         </section>

         {/* Security Note */}
         <div className="bg-red-500/5 border border-red-500/10 p-10 space-y-4">
            <div className="flex items-center gap-4">
               <ShieldCheck className="w-5 h-5 text-red-500" />
               <h3 className="font-display text-lg text-white uppercase tracking-widest">Access Control Required</h3>
            </div>
            <p className="font-body text-[11px] text-white/40 uppercase tracking-widest leading-relaxed">
               Advanced user management and role-based access control (RBAC) must be implemented before deploying the Command Centre to production. All data currently displayed uses the demo security layer.
            </p>
         </div>

         <div className="pt-10">
            <button className="bg-accent text-dark px-12 py-5 font-display text-xl tracking-[0.2em] uppercase font-bold hover:bg-white transition-all shadow-[0_20px_50px_rgba(200,169,110,0.1)]">
               SAVE CONFIGURATION
            </button>
         </div>
      </div>
    </div>
  )
}
