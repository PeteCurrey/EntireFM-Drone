'use client'

// components/layout/ProgressDots.tsx
'use client'

import { useEffect, useState } from 'react'

interface ProgressDotsProps {
  totalSections?: number
}

export default function ProgressDots({ totalSections: propTotal }: ProgressDotsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [sectionCount, setSectionCount] = useState(propTotal || 0)

  useEffect(() => {
    const sections = document.querySelectorAll('section[data-index]')
    if (!propTotal) {
      setSectionCount(sections.length)
    }

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(parseInt(entry.target.getAttribute('data-index') || '0', 10))
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [propTotal])

  if (sectionCount < 2) return null

  const scrollToSection = (index: number) => {
    const target = document.querySelector(`[data-index="${index}"]`)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-[90] hidden md:flex flex-col gap-2.5 pointer-events-auto">
      {Array.from({ length: sectionCount }).map((_, i) => (
        <button
          key={i}
          onClick={() => scrollToSection(i)}
          className="group relative flex items-center justify-end h-6 px-1.5 transition-all duration-300"
          aria-label={`Scroll to section ${i + 1}`}
        >
          <div 
            className={`transition-all duration-300 ease-out
              ${activeIndex === i 
                ? 'w-[3px] h-5 bg-accent rounded-[2px]' 
                : 'w-[3px] h-[3px] bg-white/20 rounded-full group-hover:bg-white/50'
              }`}
          />
        </button>
      ))}
    </div>
  )
}
