import { CalendarDays, FileText, LineChart, Boxes, UserRound, Zap, X } from 'lucide-react'
import { WA, WhatsAppIcon } from './WhatsApp'
import { Reveal, SpotlightCard } from './motion'

const pains = [
  'Agenda no caderno ou espalhada no WhatsApp',
  'Orçamentos que se perdem e ninguém faz follow-up',
  'Uma planilha diferente para cada coisa',
  'Não saber quanto vendeu, quanto tem a receber ou o que tem no estoque',
]

const examples = [
  {
    icon: CalendarDays,
    title: 'Agenda e clientes',
    desc: 'Agendamentos online, lembretes automáticos e o histórico de cada cliente em um só lugar.',
    for: 'Clínicas, salões, escritórios',
  },
  {
    icon: FileText,
    title: 'Orçamentos e pedidos',
    desc: 'Orçamentos com a sua marca em segundos, com cada etapa acompanhada até virar venda.',
    for: 'Prestadores de serviço, indústria, comércio',
  },
  {
    icon: LineChart,
    title: 'Painel de gestão',
    desc: 'Vendas, financeiro e metas em tempo real, para decidir com números.',
    for: 'Qualquer empresa',
  },
  {
    icon: Boxes,
    title: 'Estoque e vendas',
    desc: 'Entrada e saída de produtos, alerta de estoque baixo e relatório do que mais vende.',
    for: 'Lojas, distribuidoras, e-commerce',
  },
  {
    icon: UserRound,
    title: 'Portal do cliente',
    desc: 'Seu cliente acompanha pedidos, documentos e o status do serviço sem precisar te chamar.',
    for: 'Contabilidades, agências, B2B',
  },
  {
    icon: Zap,
    title: 'Automações e integrações',
    desc: 'WhatsApp, e-mail, planilhas e outros sistemas conectados para acabar com o trabalho repetido.',
    for: 'Equipes que perdem tempo com tarefas manuais',
  },
]

/** Pain checklist on the left, catalogue of systems we build on the right. */
export default function Systems() {
  return (
    <section id="sistemas" className="relative bg-[#060e1e] px-5 sm:px-6 pb-24 md:pb-36">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] gap-12 lg:gap-16">
        <div className="lg:sticky lg:top-28 self-start">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.24em] uppercase text-[#D4B47A] mb-6">
              <span className="w-8 h-px bg-[#D4B47A]" />
              Sistemas sob medida
            </p>
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-extrabold tracking-[-0.04em] leading-[1.02] mb-8">
              Isso parece com a <span className="text-gold-gradient">sua empresa?</span>
            </h2>
          </Reveal>
          <div className="space-y-3 mb-9">
            {pains.map((p, i) => (
              <Reveal key={p} delay={i * 0.08}>
                <p className="flex items-start gap-3 rounded-2xl bg-white/[0.025] border border-white/[0.06] px-4 py-3.5 text-[15px] text-white/65">
                  <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full flex items-center justify-center bg-red-500/10 text-red-400/90">
                    <X size={12} strokeWidth={2.5} />
                  </span>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="text-white/45 text-[15px] mb-6">Se marcou pelo menos um, um sistema feito para a sua rotina resolve.</p>
            <a
              href={WA.sistema}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-7 py-4 rounded-full text-sm tracking-wide inline-flex items-center gap-2.5 max-w-full"
            >
              <WhatsAppIcon />
              Quero um sistema para minha empresa
            </a>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="text-white/40 text-sm mb-5">
              O que mais podemos construir. Se a sua empresa precisa de algo diferente, a gente desenha junto.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {examples.map((e, i) => (
              <Reveal key={e.title} delay={(i % 2) * 0.1}>
                <SpotlightCard className="group h-full rounded-3xl p-7 border border-white/[0.07] bg-gradient-to-br from-[#0d1a30] to-[#070d19] transition-colors duration-500 hover:border-[#D4B47A]/30">
                  <span className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-[#D4B47A] bg-[#D4B47A]/10 border border-[#D4B47A]/20 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-6deg]">
                    <e.icon size={22} strokeWidth={1.6} />
                  </span>
                  <h3 className="text-white font-bold text-lg mb-2">{e.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-5">{e.desc}</p>
                  <p className="text-[11px] tracking-wide uppercase text-white/25">
                    Ideal para: <span className="text-white/50 normal-case tracking-normal">{e.for}</span>
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
