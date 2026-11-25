'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { WA, WhatsAppIcon, PHONE_LABEL } from './WhatsApp'
import { Magnetic, SplitWords } from './motion'

/** Closing call to action with oversized type and a slowly turning monogram. */
export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [-12, 12])
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#060e1e] px-5 sm:px-6 py-24 md:py-40 border-t border-white/[0.06]">
      <div className="absolute inset-0 hero-grid opacity-70 pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.img
          src="/brand/trove-simbolo-dourado.svg"
          alt=""
          aria-hidden="true"
          style={{ rotate, y }}
          className="w-[520px] md:w-[760px] max-w-none opacity-[0.06]"
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <p className="text-[11px] font-bold tracking-[0.28em] uppercase text-[#D4B47A] mb-8">Próximo passo</p>
        <h2 className="font-extrabold tracking-[-0.045em] leading-[1] text-[clamp(38px,7vw,84px)] mb-8">
          <SplitWords
            inView
            lines={[
              { text: 'Vamos levar sua empresa', className: 'text-white' },
              { text: 'para o próximo nível?', className: 'text-gold-gradient' },
            ]}
          />
        </h2>
        <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-11 leading-relaxed">
          Uma conversa rápida no WhatsApp para entender o seu negócio. Sem custo e sem compromisso.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <Magnetic strength={0.35}>
            <a
              href={WA.conversa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full sm:w-auto px-10 py-5 rounded-full text-base tracking-wide inline-flex items-center justify-center gap-3"
            >
              <WhatsAppIcon size={20} />
              Agendar conversa gratuita
            </a>
          </Magnetic>
          <a href={WA.conversa} target="_blank" rel="noopener noreferrer" className="btn-ghost px-8 py-5 rounded-full text-base tracking-wide inline-flex items-center justify-center">
            {PHONE_LABEL}
          </a>
        </div>
      </div>
    </section>
  )
}
