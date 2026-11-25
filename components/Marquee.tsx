'use client'

import { motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'

const rowA = ['Sites', 'Landing pages', 'Google', 'Tráfego pago', 'Instagram']
const rowB = ['Sistemas sob medida', 'Identidade visual', 'Automações', 'Painéis de gestão', 'SEO']

function Mark() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/brand/trove-simbolo-dourado.svg" alt="" aria-hidden="true" className="h-[0.55em] w-auto mx-[0.45em] opacity-90 shrink-0" />
  )
}

function Row({ words, reverse, outline }: { words: string[]; reverse?: boolean; outline?: boolean }) {
  const items = [...words, ...words, ...words, ...words]
  return (
    <div className="overflow-hidden">
      <div className={`marquee-track flex w-max items-center ${reverse ? 'reverse' : ''}`} style={{ ['--dur' as string]: '60s' }}>
        {items.map((w, i) => (
          <span key={i} className="flex items-center">
            <span className={(i + (outline ? 1 : 0)) % 2 ? 'text-outline' : 'text-silver-gradient'}>{w}</span>
            <Mark />
          </span>
        ))}
      </div>
    </div>
  )
}

/** Two endless bands of service names that lean with the speed of the scroll. */
export default function Marquee() {
  const { scrollY } = useScroll()
  const velocity = useSpring(useVelocity(scrollY), { damping: 40, stiffness: 300 })
  const skew = useTransform(velocity, [-2000, 0, 2000], [5, 0, -5], { clamp: true })

  return (
    <section aria-label="Serviços da Trove" className="relative bg-[#060e1e] pt-6 pb-24 md:pb-32">
      <motion.div
        style={{ skewX: skew }}
        className="flex flex-col gap-1 md:gap-2 font-extrabold tracking-[-0.04em] leading-[1.05] text-[44px] sm:text-[64px] md:text-[96px] select-none whitespace-nowrap"
      >
        <Row words={rowA} />
        <Row words={rowB} reverse outline />
      </motion.div>
    </section>
  )
}
