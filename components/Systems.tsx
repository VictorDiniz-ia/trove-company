import { WA, WhatsAppIcon } from './WhatsApp'
import StoreShowcase from './StoreShowcase'
import FarmShowcase from './FarmShowcase'

const GOLD = '#D4B47A'

const pains = [
  'Agenda no caderno ou espalhada no WhatsApp',
  'Orçamentos que se perdem e ninguém faz follow-up',
  'Planilhas diferentes para cada coisa',
  'Não saber quanto vendeu, quanto tem a receber ou o que tem no estoque',
]

const examples = [
  {
    title: 'Agenda e clientes',
    desc: 'Agendamentos online, lembretes automáticos e histórico de cada cliente em um só lugar.',
    for: 'Clínicas, salões, escritórios',
    icon: <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />,
  },
  {
    title: 'Orçamentos e pedidos',
    desc: 'Gere orçamentos com a sua marca em segundos, acompanhe cada etapa e não perca nenhuma venda.',
    for: 'Prestadores de serviço, indústria, comércio',
    icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h5" />,
  },
  {
    title: 'Painel de gestão',
    desc: 'Vendas, financeiro e metas em tempo real — você decide com números, não no achismo.',
    for: 'Qualquer empresa',
    icon: <path d="M3 3v18h18M7 15l4-4 3 3 5-6" />,
  },
  {
    title: 'Estoque e vendas',
    desc: 'Entrada e saída de produtos, alerta de estoque baixo e relatório do que mais vende.',
    for: 'Lojas, distribuidoras, e-commerce',
    icon: <path d="M21 8 12 3 3 8v8l9 5 9-5zM3 8l9 5 9-5M12 13v8" />,
  },
  {
    title: 'Portal do cliente',
    desc: 'Seu cliente acessa pedidos, documentos e status do serviço sem precisar te chamar.',
    for: 'Contabilidades, agências, B2B',
    icon: <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />,
  },
  {
    title: 'Automações e integrações',
    desc: 'Conectamos WhatsApp, e-mail, planilhas e outros sistemas para eliminar trabalho repetido.',
    for: 'Equipes que perdem tempo com tarefas manuais',
    icon: <path d="M13 2 3 14h9l-1 8 10-12h-9z" />,
  },
]

const steps = [
  { t: 'Diagnóstico', d: 'Entendemos como sua empresa funciona hoje e onde estão os gargalos.' },
  { t: 'Protótipo', d: 'Você vê e aprova as telas do sistema antes de começarmos a construir.' },
  { t: 'Desenvolvimento', d: 'Construímos em etapas, com entregas que você já pode usar.' },
  { t: 'Treinamento e suporte', d: 'Sua equipe aprende a usar e nós seguimos ao seu lado.' },
]

const perks = ['Acesso pelo celular e pelo computador', 'Feito para o seu processo, não o contrário', 'Cresce junto com a sua empresa', 'Dados seguros na nuvem']

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  )
}

/* Illustrative mock of a management panel — shows what a Trove system looks like. */
function DashboardMock() {
  const bars = [38, 52, 44, 63, 58, 74, 69, 88]
  const rows = [
    { n: 'Mariana Costa', s: 'Confirmado', c: '#34d399', h: '09:00' },
    { n: 'Escritório Lima', s: 'Orçamento enviado', c: GOLD, h: '10:30' },
    { n: 'Pedro Alves', s: 'Novo cliente', c: '#60a5fa', h: '14:00' },
  ]
  return (
    <div className="relative rounded-2xl p-[1px]" style={{ background: `linear-gradient(140deg, ${GOLD}55, rgba(200,207,217,0.08) 40%, rgba(200,207,217,0.04))` }}>
      <div className="rounded-2xl bg-[#08111f] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
        {/* window bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="ml-3 text-[11px] text-white/30 tracking-wide">painel.suaempresa.com.br</span>
        </div>
        <div className="grid grid-cols-[44px_minmax(0,1fr)] sm:grid-cols-[52px_minmax(0,1fr)]">
          {/* sidebar */}
          <div className="border-r border-white/5 py-4 flex flex-col items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/trove-simbolo-dourado.svg" alt="" className="w-6 h-auto opacity-90" />
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="w-7 h-7 rounded-lg" style={{ background: i === 0 ? `${GOLD}22` : 'rgba(255,255,255,0.04)', border: i === 0 ? `1px solid ${GOLD}44` : 'none' }} />
            ))}
          </div>
          {/* content */}
          <div className="p-4 sm:p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] text-white/35">Bom dia,</p>
                <p className="text-sm font-semibold text-white">Visão geral do mês</p>
              </div>
              <span className="text-[10px] px-2.5 py-1 rounded-full" style={{ color: GOLD, background: `${GOLD}14`, border: `1px solid ${GOLD}30` }}>
                Ao vivo
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { k: 'Faturamento', v: 'R$ 48,2 mil', d: '+18%' },
                { k: 'Agendamentos', v: '126', d: '+24%' },
                { k: 'Orçamentos', v: '37', d: '+9%' },
              ].map((m) => (
                <div key={m.k} className="rounded-xl p-2.5 sm:p-3 bg-white/[0.03] border border-white/5">
                  <p className="text-[9px] sm:text-[10px] text-white/35 truncate">{m.k}</p>
                  <p className="text-[13px] sm:text-base font-bold text-white mt-0.5 whitespace-nowrap">{m.v}</p>
                  <p className="text-[10px] text-emerald-400/90 mt-0.5">{m.d}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl p-3 bg-white/[0.03] border border-white/5">
              <p className="text-[10px] text-white/35 mb-2">Vendas por semana</p>
              <div className="flex items-end gap-1.5 h-20">
                {bars.map((h, i) => (
                  <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i === bars.length - 1 ? `linear-gradient(to top, ${GOLD}, #f1dcae)` : 'rgba(200,207,217,0.16)' }} />
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-white/[0.03] border border-white/5 divide-y divide-white/5">
              {rows.map((r) => (
                <div key={r.n} className="flex items-center gap-3 px-3 py-2">
                  <span className="text-[10px] text-white/35 w-9">{r.h}</span>
                  <span className="text-[12px] text-white/85 flex-1 truncate">{r.n}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap" style={{ color: r.c, background: `${r.c}18` }}>
                    {r.s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="absolute -bottom-7 right-2 text-[10px] text-white/20 tracking-wide">Exemplo ilustrativo</p>
    </div>
  )
}

export default function Systems() {
  return (
    <section id="sistemas" className="relative py-28 md:py-32 px-6 overflow-hidden bg-[#060e1e]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="blur-orb absolute top-20 right-[-120px] w-[560px] h-[560px] rounded-full" style={{ background: `radial-gradient(circle, ${GOLD}14 0%, transparent 65%)`, filter: 'blur(60px)' }} />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}40, transparent)` }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Intro + mock */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <div data-reveal className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs tracking-[0.2em] uppercase" style={{ color: GOLD, border: `1px solid ${GOLD}33`, background: `${GOLD}0d` }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
              Sistemas sob medida
            </div>
            <h2 className="text-[34px] sm:text-4xl md:text-5xl font-bold leading-[1.1] mb-6 tracking-tight">
              Um sistema feito para o{' '}
              <span className="text-gold-gradient">jeito que a sua empresa trabalha.</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-relaxed mb-8">
              Nada de adaptar sua rotina a um software genérico. Desenvolvemos o sistema que a sua empresa precisa — do zero, com as funções certas e a sua marca.
            </p>

            <p className="text-white/70 text-sm font-semibold mb-3">Isso parece com a sua empresa?</p>
            <ul className="space-y-2.5 mb-9">
              {pains.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-white/45">
                  <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full flex items-center justify-center bg-red-500/10 text-red-400/80 text-xs">✕</span>
                  {p}
                </li>
              ))}
            </ul>

            <a href={WA.sistema} target="_blank" rel="noopener noreferrer" className="btn-gold px-7 sm:px-8 py-4 rounded-full text-sm tracking-wide inline-flex items-center gap-2.5 max-w-full">
              <WhatsAppIcon />
              Quero um sistema para minha empresa
            </a>
          </div>

          <div data-reveal className="pb-6 min-w-0">
            <DashboardMock />
          </div>
        </div>

        {/* Examples */}
        <div data-reveal className="text-center mt-28 mb-12">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            O que podemos <span className="text-silver-gradient">construir para você</span>
          </h3>
          <p className="text-white/40 max-w-xl mx-auto">Alguns exemplos. Se a sua empresa precisa de algo diferente, a gente desenha junto.</p>
        </div>
        <StoreShowcase />
        <FarmShowcase />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {examples.map((e) => (
            <div
              data-reveal
              key={e.title}
              className="service-card rounded-2xl p-7 border border-white/[0.06]"
              style={{ background: 'linear-gradient(145deg, rgba(12,20,36,0.9), rgba(7,13,24,0.98))', ['--card-shadow' as string]: `${GOLD}14`, ['--card-border' as string]: `${GOLD}30` }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ color: GOLD, background: `${GOLD}12`, border: `1px solid ${GOLD}26` }}>
                <Icon>{e.icon}</Icon>
              </div>
              <h4 className="text-white font-bold text-lg mb-2">{e.title}</h4>
              <p className="text-white/45 text-sm leading-relaxed mb-4">{e.desc}</p>
              <p className="text-[11px] tracking-wide uppercase text-white/25">Ideal para: <span className="text-white/45 normal-case tracking-normal">{e.for}</span></p>
            </div>
          ))}
        </div>

        {/* How it's built */}
        <div data-reveal className="mt-24 rounded-3xl p-8 md:p-12 border border-white/[0.06]" style={{ background: 'linear-gradient(145deg, rgba(14,24,44,0.7), rgba(7,13,24,0.95))' }}>
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-14">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Como nasce o seu sistema</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-6">
                Processo claro, com você aprovando cada etapa. Sem surpresa e sem projeto que nunca termina.
              </p>
              <ul className="space-y-3">
                {perks.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-white/60">
                    <span className="w-5 h-5 shrink-0 rounded-full flex items-center justify-center text-[11px]" style={{ color: '#0B1220', background: GOLD }}>✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <ol className="grid sm:grid-cols-2 gap-4">
              {steps.map((s, i) => (
                <li key={s.t} className="rounded-2xl p-6 bg-white/[0.025] border border-white/5">
                  <span className="text-gold-gradient text-3xl font-black">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-white font-semibold mt-3 mb-1.5">{s.t}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
