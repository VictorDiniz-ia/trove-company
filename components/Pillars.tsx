'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { WA, WhatsAppIcon } from './WhatsApp'
import { SearchMock, AdsMock, DashboardMock } from './Mocks'
import { Reveal, TiltIn, useDesktop } from './motion'

type Pillar = {
  n: string
  tag: string
  title: string
  desc: string
  services: string[]
  cta: { label: string; href: string }
  visual: ReactNode
  gold?: boolean
}

const pillars: Pillar[] = [
  {
    n: '01',
    tag: 'Presença',
    title: 'Ser encontrado',
    desc: 'Quando alguém procura o que você vende, sua empresa precisa aparecer primeiro e passar confiança logo no primeiro clique.',
    services: ['Criação de sites', 'Landing pages', 'SEO', 'Google Meu Negócio', 'Identidade visual'],
    cta: { label: 'Quero ser encontrado', href: WA.presenca },
    visual: <SearchMock />,
  },
  {
    n: '02',
    tag: 'Aquisição',
    title: 'Atrair clientes',
    desc: 'Anúncios e conteúdo que colocam sua marca na frente de quem pode comprar, com meta clara e resultado medido.',
    services: ['Tráfego pago (Google e Meta Ads)', 'Social media B2B', 'Conteúdo para Instagram e LinkedIn', 'Automação de postagens'],
    cta: { label: 'Quero mais clientes', href: WA.anuncios },
    visual: <AdsMock />,
  },
  {
    n: '03',
    tag: 'Sistemas sob medida',
    title: 'Organizar e vender mais',
    desc: 'Um sistema feito para a rotina da sua empresa: pedidos, agenda, orçamentos, estoque, cobrança e relatórios num só lugar, no celular e no computador.',
    services: ['Painel de gestão', 'Agenda e clientes', 'Orçamentos e pedidos', 'Estoque e vendas', 'Portal do cliente', 'Automações'],
    cta: { label: 'Quero um sistema assim', href: WA.sistema },
    visual: <DashboardMock />,
    gold: true,
  },
]

function PillarCard({
  p,
  i,
  progress,
  range,
  targetScale,
  desktop,
}: {
  p: Pillar
  i: number
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
  desktop: boolean
}) {
  const scale = useTransform(progress, range, [1, targetScale])
  const dim = useTransform(progress, range, [0, 0.35])

  return (
    <div className="md:h-screen md:sticky md:top-0 flex md:items-center mb-5 md:mb-0">
      <motion.article
        style={desktop ? { scale, top: `calc(-3vh + ${i * 26}px)` } : undefined}
        className="relative w-full origin-top rounded-[28px] md:rounded-[36px] p-[1px] overflow-hidden"
      >
        <div
          className="absolute inset-0 rounded-[inherit]"
          style={{
            background: p.gold
              ? 'linear-gradient(135deg, rgba(212,180,122,0.65), rgba(200,207,217,0.08) 45%, rgba(212,180,122,0.3))'
              : 'linear-gradient(135deg, rgba(200,207,217,0.22), rgba(200,207,217,0.04) 50%, rgba(200,207,217,0.12))',
          }}
        />
        <div
          className="relative rounded-[inherit] px-6 py-8 sm:p-10 lg:p-14 md:min-h-[min(76vh,640px)] grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-10 lg:gap-14 items-center"
          style={{ background: 'radial-gradient(120% 120% at 0% 0%, #13233f 0%, #0a1426 48%, #070d19 100%)' }}
        >
          {/* número gigante ao fundo */}
          <span className="absolute -top-6 right-4 md:right-10 text-[120px] md:text-[200px] font-black leading-none text-outline opacity-40 select-none pointer-events-none">
            {p.n}
          </span>

          <div className="relative min-w-0">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
              style={p.gold ? { color: '#0B1220', background: '#D4B47A' } : { color: '#D4B47A', border: '1px solid rgba(212,180,122,0.35)' }}
            >
              {p.n} · {p.tag}
            </span>
            <h3 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold tracking-[-0.035em] leading-[1.02] mb-5">
              {p.gold ? <span className="text-gold-gradient">{p.title}</span> : p.title}
            </h3>
            <p className="text-white/55 text-[15px] md:text-[17px] leading-relaxed mb-7 max-w-md">{p.desc}</p>
            <ul className="flex flex-wrap gap-2 mb-8">
              {p.services.map((s) => (
                <li key={s} className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 text-[12px] md:text-[13px] text-white/75">
                  <Check size={12} className="text-[#D4B47A]" strokeWidth={2.5} />
                  {s}
                </li>
              ))}
            </ul>
            <a
              href={p.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${p.gold ? 'btn-gold' : 'btn-ghost'} group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm tracking-wide`}
            >
              <WhatsAppIcon size={16} />
              {p.cta.label}
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="relative min-w-0">{p.visual}</div>

          {/* escurece levemente quando o próximo card passa por cima */}
          {desktop && <motion.div style={{ opacity: dim }} className="absolute inset-0 rounded-[inherit] bg-[#020611] pointer-events-none" />}
        </div>
      </motion.article>
    </div>
  )
}

/** Three service fronts as cards that stack on top of each other while scrolling. */
export default function Pillars() {
  const container = useRef<HTMLDivElement>(null)
  const desktop = useDesktop()
  const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] })

  return (
    <section id="solucoes" className="relative z-20 -mt-10 rounded-t-[36px] md:rounded-t-[64px] bg-[#060e1e] px-5 sm:px-6 pt-20 md:pt-32 pb-16 md:pb-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.24em] uppercase text-[#D4B47A] mb-6">
            <span className="w-8 h-px bg-[#D4B47A]" />O que fazemos
          </p>
        </Reveal>
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-16 items-end">
          <TiltIn>
            <h2 className="text-[44px] sm:text-[60px] md:text-[80px] font-extrabold tracking-[-0.045em] leading-[0.98]">
              Três frentes.
              <br />
              <span className="text-gold-gradient">Um só time.</span>
            </h2>
          </TiltIn>
          <Reveal delay={0.1}>
            <p className="text-white/50 text-base md:text-lg leading-relaxed lg:pb-3">
              Para crescer, sua empresa precisa ser encontrada, atrair as pessoas certas e dar conta das vendas. A Trove cuida das três coisas, juntas.
            </p>
          </Reveal>
        </div>

        <div ref={container} className="relative mt-14 md:mt-10">
          {pillars.map((p, i) => (
            <PillarCard
              key={p.n}
              p={p}
              i={i}
              progress={scrollYProgress}
              range={[i / pillars.length, 1]}
              targetScale={1 - (pillars.length - 1 - i) * 0.05}
              desktop={desktop}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
