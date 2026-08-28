'use client'

// components/ui/FAQAccordion.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { Plus } from 'lucide-react'
import { gsap } from '@/lib/gsap-init'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: 'auto',
        duration: 0.5,
        ease: 'power2.out',
        opacity: 1
      })
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.4,
        ease: 'power2.inOut',
        opacity: 0
      })
    }
  }, [isOpen])

  return (
    <div className="border-b border-white/10 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className="font-display text-2xl md:text-3xl text-white group-hover:text-accent transition-colors tracking-wide uppercase">
          {question}
        </span>
        <Plus 
          className={`w-6 h-6 text-accent transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`} 
        />
      </button>
      <div 
        ref={contentRef} 
        className="h-0 opacity-0 overflow-hidden"
      >
        <div className="pb-8 pr-12">
          <p className="font-body text-lg font-light text-white/40 leading-relaxed max-w-3xl">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQAccordion({ faqs }: { faqs: { question: string, answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="w-full">
      {faqs.map((faq, i) => (
        <FAQItem
          key={i}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === i}
          onClick={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  )
}
