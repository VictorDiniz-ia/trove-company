import { useEffect, useRef } from 'react'

export function useScrollReveal(distance = 40, speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let ticking = false
    let done = false

    el.style.willChange = 'transform, opacity'
    el.style.opacity = '0'
    el.style.transform = `translateY(${distance}px)`

    const update = () => {
      if (done) { ticking = false; return }
      const rect = el.getBoundingClientRect()
      const wh = window.innerHeight
      const progress = Math.min(Math.max((wh - rect.top) / (wh * speed), 0), 1)

      el.style.opacity = `${progress}`
      el.style.transform = `translateY(${(1 - progress) * distance}px)`

      if (progress >= 1) {
        done = true
        el.style.willChange = 'auto'
      }
      ticking = false
    }

    const onScroll = () => {
      if (!ticking && !done) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    requestAnimationFrame(update)
    return () => window.removeEventListener('scroll', onScroll)
  }, [distance, speed])

  return ref
}
