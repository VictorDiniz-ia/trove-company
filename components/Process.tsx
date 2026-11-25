'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, type MotionValue } from 'framer-motion'
import { Check } from 'lucide-react'
import { Reveal, TiltIn } from './motion'

const steps = [
  {
    t: 'Diagnóstico gratuito',
    d: 'Conversamos sobre a sua empresa e analisamos site, Google, Instagram e rotina. Você sai sabendo o que trava as vendas.',
  },
  {
    t: 'Proposta clara',
    d: 'Escopo, prazo e investimento definidos antes de começar. Sem pacote pronto e sem surpresa no meio do caminho.',
  },
  {
    t: 'Execução por etapas',
    d: 'Você acompanha e aprova cada entrega: páginas do site, campanhas e telas do sistema.',
  },
  {
    t: 'Acompanhamento',
    d: 'Treinamos sua equipe, medimos os resultados e seguimos ajustando junto com você.',
  },
]

const perks = ['Você aprova cada etapa', 'Celular e computador', 'Dados seguros na nuvem', 'Suporte depois da entrega']

function Node({ i, progress }: { i: number; progress: MotionValue<number> }) {
  const at = i / steps.length
  const lit = useTransform(progress, [at, at + 0.06], [0, 1])
  const bg = useTransform(lit, [0, 1], ['#EEF1F5', '#0B1A33'])
  const fg = useTransform(lit, [0, 1], ['#0B1A33', '#D4B47A'])
  const scale = useTransform(lit, [0, 0.5, 1], [1, 1.12, 1])
  return (
    <motion.span
      style={{ backgroundColor: bg, color: fg, scale }}
      className="relative z-10 w-14 h-14 rounded-full border-2 border-[#0B1A33] flex items-center justify-center text-lg font-extrabold tabular-nums"
    >
      {String(i + 1).padStart(2, '0')}
    </motion.span>
  )
}

/** Four steps joined by a line that fills in as the visitor scrolls. */
export default function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 55%'] })
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  return (
    <section
      id="processo"
      className="relative z-10 rounded-t-[36px] md:rounded-t-[64px] bg-[#EEF1F5] text-[#0B1A33] px-5 sm:px-6 pt-20 md:pt-32 pb-28 md:pb-40"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.24em] uppercase text-[#8a6a2f] mb-6">
            <span className="w-8 h-px bg-[#B8954F]" />
            Como trabalhamos
          </p>
        </Reveal>
        <div className="grid lg:grid-cols-[1.7fr_1fr] gap-6 lg:gap-12 items-end">
          <TiltIn>
            <h2 className="text-[44px] sm:text-[60px] md:text-[72px] lg:text-[80px] font-extrabold tracking-[-0.045em] leading-[0.98]">
              Do primeiro papo
              <br />
              ao <span className="text-[#a8833e]">resultado.</span>
            </h2>
          </TiltIn>
          <Reveal delay={0.1}>
            <p className="text-[#0B1A33]/60 text-base md:text-lg leading-relaxed lg:pb-3">
              Um método claro, para você saber exatamente o que vai acontecer em cada etapa e o que vai receber.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative mt-16 md:mt-24">
          {/* linha horizontal (telas largas) */}
          <div className="hidden md:block absolute top-[27px] left-7 right-[calc(25%-28px)] h-[2px] bg-[#0B1A33]/10">
            <motion.div style={{ scaleX: fill }} className="h-full origin-left bg-gradient-to-r from-[#0B1A33] via-[#b8954f] to-[#D4B47A]" />
          </div>
          {/* linha vertical (celular) */}
          <div className="md:hidden absolute left-[27px] top-7 bottom-16 w-[2px] bg-[#0B1A33]/10">
            <motion.div style={{ scaleY: fill }} className="w-full h-full origin-top bg-gradient-to-b from-[#0B1A33] via-[#b8954f] to-[#D4B47A]" />
          </div>

          <ol className="relative grid md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((s, i) => (
              <li key={s.t} className="relative grid grid-cols-[56px_1fr] md:grid-cols-1 gap-5 md:gap-7">
                <Node i={i} progress={fill} />
                <Reveal delay={i * 0.08}>
                  <h3 className="text-xl md:text-[22px] font-bold mb-2.5 pt-3 md:pt-0">{s.t}</h3>
                  <p className="text-[15px] leading-relaxed text-[#0B1A33]/60">{s.d}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal className="mt-16 md:mt-20 flex flex-wrap gap-2.5">
          {perks.map((p) => (
            <span key={p} className="inline-flex items-center gap-2 rounded-full bg-white border border-[#0B1A33]/10 px-4 py-2 text-[13px] font-medium text-[#0B1A33]/75">
              <span className="w-5 h-5 rounded-full bg-[#0B1A33] text-[#D4B47A] flex items-center justify-center">
                <Check size={11} strokeWidth={3} />
              </span>
              {p}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
