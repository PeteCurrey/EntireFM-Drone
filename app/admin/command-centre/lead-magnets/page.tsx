'use client'

import React from 'react'
import { Download, Search, MoreVertical, ExternalLink, Activity } from 'lucide-react'

export default function LeadMagnetsAdminPage() {
  const magnets = [
    { title: 'Drone Roof Inspection Checklist', downloads: 342, leads: 45, status: 'Live' },
    { title: 'Facilities Manager’s Drone Guide', downloads: 185, leads: 22, status: 'Live' },
    { title: 'TFTS 3D vs Photogrammetry', downloads: 92, leads: 12, status: 'Live' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30" />
            <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent/60">Gated Assets</span>
          </div>
          <h1 className="font-display text-5xl text-white tracking-widest uppercase mb-4">Lead Magnets</h1>
          <p className="font-body text-xs text-white/30 tracking-[0.3em] uppercase">Manage gated PDF resources and monitor conversion metrics.</p>
        </div>
      </div>

      <div className="bg-white/[0.01] border border-white/5 overflow-hidden">
         <table className="w-full text-left border-collapse">
            <thead>
               <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Asset Title</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Downloads</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Leads Generated</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Conversion Rate</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase text-right">Actions</th>
               </tr>
            </thead>
            <tbody className="font-mono text-[10px]">
               {magnets.map((m, i) => (
                 <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group text-white/60">
                    <td className="p-6 text-white uppercase tracking-widest">{m.title}</td>
                    <td className="p-6 text-white/40">{m.downloads}</td>
                    <td className="p-6 text-accent">{m.leads}</td>
                    <td className="p-6 text-white">{((m.leads / m.downloads) * 100).toFixed(1)}%</td>
                    <td className="p-6 text-right">
                       <button className="p-3 hover:bg-white/5 text-white/20 hover:text-white transition-all"><MoreVertical className="w-4 h-4" /></button>
                    </td>
                 </tr>
               ))}
            </tbody>
         </table>
      </div>
    </div>
  )
}
