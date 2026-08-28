// components/ui/AssetContentRenderer.tsx
import { AssetContent } from '@/lib/asset-content'
import { AlertTriangle, CheckSquare, ChevronRight, FileText } from 'lucide-react'

interface Props {
  content: AssetContent
}

export default function AssetContentRenderer({ content }: Props) {
  return (
    <div className="space-y-16">

      {/* Disclaimer */}
      <div className="flex items-start gap-4 p-6 bg-accent/[0.03] border border-accent/10">
        <AlertTriangle className="w-4 h-4 text-accent/40 shrink-0 mt-0.5" />
        <p className="font-body text-[11px] text-accent/50 uppercase tracking-widest leading-relaxed italic">
          {content.disclaimer}
        </p>
      </div>

      {/* Sections */}
      {content.sections.map((section, idx) => (
        <div key={idx} className="space-y-8">
          {/* Section Heading */}
          <div className="flex items-center gap-4 pb-4 border-b border-white/10">
            <div className="w-6 h-6 bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
              <span className="font-display text-[10px] text-accent">{String(idx + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="font-display text-2xl text-white uppercase tracking-widest">{section.heading}</h3>
          </div>

          {/* Intro paragraph */}
          {section.intro && (
            <p className="font-body text-sm text-white/50 uppercase tracking-widest leading-relaxed">
              {section.intro}
            </p>
          )}

          {/* Warning block */}
          {section.warning && (
            <div className="flex items-start gap-4 p-6 bg-white/[0.02] border-l-2 border-accent">
              <p className="font-body text-[11px] text-accent/80 uppercase tracking-widest leading-relaxed italic">
                {section.warning}
              </p>
            </div>
          )}

          {/* Checklist */}
          {section.checklist && (
            <ul className="space-y-3">
              {section.checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckSquare className="w-4 h-4 text-accent/40 shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-white/60 uppercase tracking-widest leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Labelled items */}
          {section.items && (
            <div className="space-y-px bg-white/5 border border-white/5">
              {section.items.map((item, i) => (
                <div key={i} className="flex items-start gap-6 p-4 bg-dark hover:bg-white/[0.02] transition-colors group">
                  <div className="w-4 h-4 border border-white/10 group-hover:border-accent/40 transition-colors shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="font-ui text-[11px] tracking-widest uppercase text-white/70">{item.label}</span>
                    {item.note && (
                      <span className="block font-body text-[10px] text-white/30 uppercase tracking-widest mt-1">{item.note}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Paragraphs */}
          {section.paragraphs && (
            <div className="space-y-4">
              {section.paragraphs.map((para, i) => (
                <p key={i} className="font-body text-sm text-white/50 uppercase tracking-widest leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          )}

          {/* Comparison Table */}
          {section.table && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02]">
                    {[section.table.col1, section.table.col2, section.table.col3, section.table.col4].map((col, i) => (
                      <th key={i} className="p-4 font-ui text-[9px] tracking-[0.3em] uppercase text-accent/60">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {section.table.rows.map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      {row.map((cell, j) => (
                        <td key={j} className={`p-4 font-body text-xs uppercase tracking-widest leading-relaxed ${j === 0 ? 'text-white font-medium' : 'text-white/40'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}

      {/* Version marker */}
      <div className="pt-8 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FileText className="w-4 h-4 text-white/20" />
          <span className="font-ui text-[9px] tracking-widest uppercase text-white/20">{content.version}</span>
        </div>
        <span className="font-ui text-[9px] tracking-widest uppercase text-white/10">drone.entirefm.com</span>
      </div>
    </div>
  )
}
