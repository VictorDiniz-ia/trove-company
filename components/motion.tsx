'use client'

import {
  animate,
  motion,
  MotionConfig,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { useEffect, useRef, useState, type ReactNode } from 'react'

export const EASE = [0.22, 1, 0.36, 1] as const

/** Respects the visitor's "reduce motion" setting across every framer-motion animation. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

/** True on devices with a real mouse and a wide screen (where heavier effects are worth it). */
export function useDesktop() {
  const [desktop, setDesktop] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px) and (hover: hover)')
    const update = () => setDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return desktop
}

/** Fades and lifts its children in when they scroll into view. */
export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 40,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

/** Splits a headline into words that slide up from behind a mask, one after the other. */
export function SplitWords({
  lines,
  className = '',
  delay = 0,
  stagger = 0.07,
  inView = false,
}: {
  lines: { text: string; className?: string }[]
  className?: string
  delay?: number
  stagger?: number
  /** Wait until the headline is on screen (otherwise it plays on load). */
  inView?: boolean
}) {
  let index = 0
  const trigger = inView
    ? { initial: 'hidden', whileInView: 'show', viewport: { once: true, margin: '0px 0px -10% 0px' } }
    : { initial: 'hidden', animate: 'show' }
  return (
    <motion.span className={className} {...trigger} transition={{ staggerChildren: stagger, delayChildren: delay }}>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.text.split(' ').map((word, wi) => {
            index++
            return (
              <span key={`${li}-${wi}`} className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em] mr-[0.22em] last:mr-0">
                <motion.span
                  className={`inline-block ${line.className ?? ''}`}
                  variants={{ hidden: { y: '110%', rotate: 4 }, show: { y: '0%', rotate: 0 } }}
                  transition={{ duration: 0.9, ease: EASE }}
                >
                  {word}
                </motion.span>
              </span>
            )
          })}
        </span>
      ))}
    </motion.span>
  )
}

/** Heading that tilts up out of the page in 3D as it scrolls into view. */
export function TiltIn({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 100%', 'start 55%'] })
  const rotateX = useTransform(scrollYProgress, [0, 1], [62, 0])
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0])
  const y = useTransform(scrollYProgress, [0, 1], [70, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.55], [0, 1])
  return (
    <div ref={ref} className={className} style={{ perspective: 1100 }}>
      <motion.div style={reduce ? undefined : { rotateX, rotate, y, opacity, transformOrigin: '50% 100%' }}>{children}</motion.div>
    </div>
  )
}

/** Card that settles from a tilted, smaller state into place while scrolling. */
export function TiltCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 100%', 'start 35%'] })
  const rotateX = useTransform(scrollYProgress, [0, 1], [18, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1])
  const y = useTransform(scrollYProgress, [0, 1], [90, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.2, 1])
  return (
    <div ref={ref} className={className} style={{ perspective: 1400 }}>
      <motion.div style={reduce ? undefined : { rotateX, scale, y, opacity, transformOrigin: '50% 0%' }}>{children}</motion.div>
    </div>
  )
}

/** Paragraph whose words light up one by one as the reader scrolls through it. */
export function WordFill({ text, className = '', accent = '' }: { text: string; className?: string; accent?: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 50%'] })
  const words = text.split(' ')
  return (
    <p ref={ref} className={className}>
      {words.map((raw, i) => {
        const highlighted = raw.startsWith('*')
        const word = raw.replace(/\*/g, '')
        const start = i / words.length
        return (
          <FillWord key={i} progress={scrollYProgress} range={[start, start + 1 / words.length]} className={highlighted ? accent : ''}>
            {word}
          </FillWord>
        )
      })}
    </p>
  )
}

function FillWord({
  children,
  progress,
  range,
  className,
}: {
  children: ReactNode
  progress: MotionValue<number>
  range: [number, number]
  className: string
}) {
  const reduce = useReducedMotion()
  const opacity = useTransform(progress, range, [0.16, 1])
  return (
    <motion.span style={reduce ? undefined : { opacity }} className={`inline-block mr-[0.25em] ${className}`}>
      {children}
    </motion.span>
  )
}

/** Number that counts up from zero the first time it appears on screen. */
export function Counter({ to, prefix = '', suffix = '', duration = 1.8 }: { to: number; prefix?: string; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  useEffect(() => {
    if (!inView || !ref.current) return
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${prefix}${Math.round(v)}${suffix}`
      },
    })
    return () => controls.stop()
  }, [inView, to, prefix, suffix, duration])
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}0{suffix}
    </span>
  )
}

/** Gently pulls its child toward the mouse pointer (desktop only). */
export function Magnetic({ children, strength = 0.25, className = '' }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })
  const desktop = useDesktop()
  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        if (!desktop || !ref.current) return
        const r = ref.current.getBoundingClientRect()
        x.set((e.clientX - (r.left + r.width / 2)) * strength)
        y.set((e.clientY - (r.top + r.height / 2)) * strength)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}

/** Card with a soft gold light that follows the mouse across it. */
export function SpotlightCard({ children, className = '', style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`spotlight-card ${className}`}
      style={style}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
        e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
      }}
    >
      {children}
    </div>
  )
}

/** Watches every element marked with data-reveal and fades it in once it is on screen. */
export function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return null
}
