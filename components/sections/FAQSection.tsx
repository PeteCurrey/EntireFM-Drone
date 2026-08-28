'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    question: "WHAT ARE THE WEATHER CONSTRAINTS FOR FLIGHT?",
    answer: "Drone operations are subject to weather minimums. While some specialist platforms have enhanced weather resistance, we generally recommend dry, calm conditions for maximum data integrity, especially for thermal auditing or precision surveying."
  },
  {
    question: "DO YOU HAVE PERMISSION FOR NIGHT OPERATIONS?",
    answer: "Our GVC-qualified pilots can conduct night operations subject to site-specific risk assessments, flight planning, and operational safety requirements."
  },
  {
    question: "HOW QUICKLY IS THE DATA DELIVERED?",
    answer: "Delivery timelines depend on the project scope and deliverables. Standard visual data is typically delivered promptly, while complex outputs like point clouds or immersive digital site records require additional processing and quality assurance time."
  },
  {
    question: "ARE YOU FULLY INSURED?",
    answer: "Yes. TFTS Drone provides fully insured commercial drone services. Insurance documentation is available for approved projects where required."
  },
  {
    question: "HOW DO YOU HANDLE AIRSPACE PERMISSIONS?",
    answer: "As part of our mission planning, we manage all necessary airspace reviews, NOTAMs, landowner permissions, and stakeholder notifications to ensure a fully compliant and safe deployment."
  }
]


export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section data-index="10" className="bg-dark py-32 px-10 md:px-20 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-[1px] bg-accent" />
          <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Strategic FAQ</span>
        </div>
        <h2 className="font-display text-5xl text-white mb-20 tracking-wider">OPERATIONAL<br/><span className="text-accent underline underline-offset-8">INTELLIGENCE</span></h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/5 bg-white/[0.02] overflow-hidden group hover:border-accent/30 transition-all duration-500"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-8 flex items-center justify-between text-left group-hover:bg-white/[0.01]"
              >
                <span className="font-display text-lg tracking-widest text-white/80 group-hover:text-white transition-colors">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-accent" />
                ) : (
                  <Plus className="w-5 h-5 text-white/20 group-hover:text-accent transition-colors" />
                )}
              </button>
              
              <div 
                className={`px-8 transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-10 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="font-body text-white/40 leading-relaxed text-sm max-w-2xl border-l border-accent/20 pl-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
