'use client'

import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from 'framer-motion'
import { BarChart3, MapPin, Megaphone, MessageCircle, ShoppingBag, ArrowDown } from 'lucide-react'
import { WA, WhatsAppIcon } from './WhatsApp'
import { EASE, Magnetic, SplitWords, useDesktop } from './motion'

/* What Trove delivers, shown as live notifications around the headline. */
const chips = [
  { icon: MapPin, title: 'Você apareceu no Google', sub: 'Busca: seu serviço + sua cidade', pos: 'left-[3%] top-[24%]' },
  { icon: Megaphone, title: 'Novo contato pelo anúncio', sub: 'Campanha no Instagram', pos: 'right-[3%] top-[20%]' },
  { icon: ShoppingBag, title: 'Pedido recebido pelo site', sub: 'Já registrado no painel', pos: 'left-[5%] bottom-[18%]' },
  { icon: MessageCircle, title: 'Cobrança enviada', sub: 'Mensagem pronta no WhatsApp', pos: 'right-[5%] bottom-[22%]' },
  { icon: BarChart3, title: 'Relatório do mês pronto', sub: 'Vendas, custos e lucro', pos: '' },
]

function Chip({ icon: Icon, title, sub }: { icon: typeof MapPin; title: string; sub: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl pl-3 pr-5 py-3 bg-[#0b1628]/80 border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-md">
      <span className="w-9 h-9 shrink-0 rounded-xl flex items-center justify-center bg-[#D4B47A]/[0.12] border border-[#D4B47A]/25 text-[#D4B47A]">
        <Icon size={17} strokeWidth={1.8} />
      </span>
      <span className="text-left">
        <span className="block text-[13px] font-semibold text-white whitespace-nowrap">{title}</span>
        <span className="block text-[11px] text-white/40 whitespace-nowrap">{sub}</span>
      </span>
      <span className="ml-1 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
    </div>
  )
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const desktop = useDesktop()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94])
  const markY = useTransform(scrollYProgress, [0, 1], [0, 220])
  const markRotate = useTransform(scrollYProgress, [0, 1], [0, 8])

  const mx = useMotionValue(-999)
  const my = useMotionValue(-999)
  const spotlight = useMotionTemplate`radial-gradient(620px circle at ${mx}px ${my}px, rgba(212,180,122,0.09), transparent 60%)`

  return (
    <section
      id="topo"
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#060e1e] pt-28 pb-44 xl:pb-24"
      onMouseMove={(e) => {
        if (!desktop) return
        const r = e.currentTarget.getBoundingClientRect()
        mx.set(e.clientX - r.left)
        my.set(e.clientY - r.top)
      }}
    >
      {/* Fundo: grade animada, brilho e monograma */}
      <div className="absolute inset-0 hero-grid pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(60% 50% at 50% 35%, rgba(21,40,71,0.55), transparent 70%)' }} />
      <motion.div className="absolute inset-0 pointer-events-none hidden md:block" style={{ background: spotlight }} />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <motion.img
          src="/brand/trove-simbolo-prata.svg"
          alt=""
          aria-hidden="true"
          className="w-[560px] md:w-[820px] max-w-none"
          style={{ y: markY, rotate: markRotate }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 0.045, scale: 1 }}
          transition={{ duration: 2.2, ease: EASE }}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#060e1e] to-transparent pointer-events-none" />

      {/* Notificações flutuantes (telas grandes) */}
      {chips.slice(0, 4).map((c, i) => (
        <motion.div
          key={c.title}
          className={`absolute z-10 hidden xl:block ${c.pos}`}
          initial={{ opacity: 0, y: 30, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 1.1 + i * 0.18 }}
        >
          <div className="float-y" style={{ animationDelay: `${i * -1.4}s` }}>
            <Chip {...c} />
          </div>
        </motion.div>
      ))}

      <motion.div style={{ y: contentY, opacity: contentOpacity, scale: contentScale }} className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 mb-8 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-silver-400"
        >
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inset-0 rounded-full bg-[#D4B47A] animate-ping opacity-60" />
            <span className="relative w-1.5 h-1.5 rounded-full bg-[#D4B47A]" />
          </span>
          Marketing + tecnologia para empresas
        </motion.div>

        <h1 className="font-extrabold tracking-[-0.045em] leading-[0.98] text-[clamp(42px,11.5vw,108px)] mb-7">
          <SplitWords
            delay={0.25}
            lines={[
              { text: 'Sua empresa no', className: 'text-white' },
              { text: 'próximo nível', className: 'text-gold-gradient pr-[0.04em]' },
              { text: 'digital.', className: 'text-silver-gradient' },
            ]}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
          className="text-silver-500 text-[17px] md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A Trove traz o cliente com <span className="text-white">site, Google, Instagram e anúncios</span> — e organiza sua empresa por dentro com{' '}
          <span className="text-[#D4B47A]">sistemas feitos sob medida</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 1 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4"
        >
          <Magnetic>
            <a
              href={WA.diagnostico}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full sm:w-auto px-8 py-4 rounded-full text-[15px] tracking-wide inline-flex items-center justify-center gap-2.5"
            >
              <WhatsAppIcon />
              Quero meu diagnóstico gratuito
            </a>
          </Magnetic>
          <a href="#cases" className="btn-ghost px-8 py-4 rounded-full text-[15px] tracking-wide inline-flex items-center justify-center gap-2">
            Ver cases reais
          </a>
        </motion.div>
      </motion.div>

      {/* Notificações em faixa (celular e telas médias) */}
      <motion.div
        className="xl:hidden absolute left-0 right-0 bottom-16 z-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <div className="marquee-track flex w-max gap-3" style={{ ['--dur' as string]: '38s' }}>
          {[...chips, ...chips].map((c, i) => (
            <div key={i} className="scale-[0.92] origin-left">
              <Chip {...c} />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Indicador de rolagem */}
      <a href="#sobre" className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-white/60 transition-colors">
        Role
        <span className="relative w-px h-10 bg-white/10 overflow-hidden">
          <span className="scroll-cue absolute inset-0 bg-[#D4B47A]" />
        </span>
      </a>
      <a href="#sobre" aria-label="Rolar para baixo" className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/30">
        <ArrowDown size={18} />
      </a>
    </section>
  )
}
