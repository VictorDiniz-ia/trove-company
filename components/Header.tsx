'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion'
import { LogoWordmark } from './Logo'
import { WA, WhatsAppIcon, PHONE_LABEL } from './WhatsApp'
import { EASE } from './motion'

const links = [
  { href: '#solucoes', label: 'Soluções' },
  { href: '#cases', label: 'Cases' },
  { href: '#processo', label: 'Como trabalhamos' },
  { href: '#faq', label: 'Dúvidas' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY, scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setScrolled(y > 24)
    setHidden(y > 480 && y > prev + 4)
    if (y < prev - 4) setHidden(false)
  })

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? '-110%' : '0%' }}
        transition={{ duration: 0.45, ease: EASE }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-[background-color,border-color,padding] duration-500 ${
          scrolled || open ? 'bg-[#060e1e]/90 backdrop-blur-xl border-b border-white/[0.06] py-3' : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6 flex items-center justify-between gap-6">
          <a href="#topo" aria-label="Trove Company — início" onClick={() => setOpen(false)}>
            <LogoWordmark className="h-7 md:h-8" />
          </a>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Seções do site">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-[13px] tracking-wide text-silver-500 hover:text-white transition-colors duration-300 group"
              >
                {l.label}
                <span className="absolute left-4 right-4 bottom-1 h-px bg-[#D4B47A] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </a>
            ))}
            <a href={WA.diagnostico} target="_blank" rel="noopener noreferrer" className="btn-gold ml-4 px-5 py-2.5 rounded-full text-[13px] tracking-wide">
              Diagnóstico gratuito
            </a>
          </nav>

          <button
            type="button"
            className="lg:hidden relative w-11 h-11 -mr-2 flex items-center justify-center rounded-full"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`absolute h-[1.5px] w-6 bg-white transition-transform duration-500 ${open ? 'rotate-45' : '-translate-y-[5px]'}`} />
            <span className={`absolute h-[1.5px] w-6 bg-white transition-transform duration-500 ${open ? '-rotate-45' : 'translate-y-[5px]'}`} />
          </button>
        </div>

        {/* Barra de leitura */}
        <motion.span style={{ scaleX: progress }} className="absolute left-0 right-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-[#b8954f] via-[#f1dcae] to-[#b8954f]" />
      </motion.header>

      {/* Menu do celular */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            className="fixed inset-0 z-[55] lg:hidden bg-[#060e1e] flex flex-col pt-28 pb-10 px-6"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="absolute inset-0 hero-grid opacity-60 pointer-events-none" />
            <nav className="relative flex flex-col" aria-label="Menu">
              {[{ href: '#topo', label: 'Início' }, ...links, { href: '#diagnostico', label: 'Diagnóstico grátis' }].map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-3 border-b border-white/[0.06] text-[34px] font-bold tracking-tight text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.15 + i * 0.06 }}
                >
                  <span className="text-xs font-semibold text-[#D4B47A] tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              className="relative mt-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.55 }}
            >
              <a
                href={WA.conversa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full py-4 rounded-full text-sm tracking-wide inline-flex items-center justify-center gap-2.5"
              >
                <WhatsAppIcon />
                Falar no WhatsApp
              </a>
              <p className="text-center text-white/35 text-xs mt-4">{PHONE_LABEL} · Atendemos todo o Brasil</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
