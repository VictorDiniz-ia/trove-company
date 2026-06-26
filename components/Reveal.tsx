'use client'

import { useEffect, useRef } from 'react'

export default function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.opacity = '0'
    el.style.transform = 'translateY(60px)'

    requestAnimationFrame(() => {
      el.style.transition = 'opacity 1.2s ease-out, transform 1.2s ease-out'

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0px)'
            obs.disconnect()
          }
        },
        { threshold: 0.05 }
      )

      obs.observe(el)
    })
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
