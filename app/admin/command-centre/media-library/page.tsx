'use client'

import React from 'react'
import { Image as ImageIcon, Search, Filter, MoreVertical, AlertCircle, Play, FileText, Camera } from 'lucide-react'

export default function MediaLibraryAdminPage() {
  const assets = [
    { name: 'inspection_hero.mp4', type: 'Video', size: '12.4 MB', usage: 4, warning: null },
    { name: 'surveying_poster.png', type: 'Poster', size: '1.2 MB', usage: 2, warning: null },
    { name: 'facade_audit_preview.jpg', type: 'Image', size: '850 KB', usage: 1, warning: 'Large file size' },
    { name: 'thermal_audit.mp4', type: 'Video', size: '45.8 MB', usage: 1, warning: 'Missing poster' },
  ]

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-accent/30" />
            <span className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent/60">Digital Assets</span>
          </div>
          <h1 className="font-display text-5xl text-white tracking-widest uppercase mb-4">Media Library</h1>
          <p className="font-body text-xs text-white/30 tracking-[0.3em] uppercase">Manage videos, posters, images and 3D assets across the TFTS Drone platform.</p>
        </div>
      </div>

      <div className="bg-white/[0.01] border border-white/5 overflow-hidden">
         <table className="w-full text-left border-collapse">
            <thead>
               <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Asset Name / Type</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">File Size</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Usage</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase">Health</th>
                  <th className="p-6 font-ui text-[9px] tracking-widest text-white/40 uppercase text-right">Actions</th>
               </tr>
            </thead>
            <tbody className="font-mono text-[10px]">
               {assets.map((a, i) => (
                 <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group text-white/60">
                    <td className="p-6">
                       <div className="flex items-center gap-4">
                          <div className="p-2 bg-white/5 border border-white/10 text-white/20">
                             {a.type === 'Video' ? <Play className="w-4 h-4" /> : a.type === 'Poster' ? <ImageIcon className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                          </div>
                          <div>
                             <div className="font-ui text-[11px] text-white tracking-widest uppercase">{a.name}</div>
                             <div className="text-[8px] text-white/20 uppercase">{a.type}</div>
                          </div>
                       </div>
                    </td>
                    <td className="p-6 text-white/40">{a.size}</td>
                    <td className="p-6 text-accent">{a.usage} Pages</td>
                    <td className="p-6">
                       {a.warning ? (
                         <div className="flex items-center gap-2 text-orange-400">
                            <AlertCircle className="w-3 h-3" />
                            <span className="text-[8px] uppercase tracking-widest">{a.warning}</span>
                         </div>
                       ) : (
                         <span className="text-green-500 text-[8px] uppercase tracking-widest">Optimized</span>
                       )}
                    </td>
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
