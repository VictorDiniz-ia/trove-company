'use client'

import { useState } from 'react'
import { waLink, WhatsAppIcon } from './WhatsApp'

const GOLD = '#D4B47A'

type Tab = 'painel' | 'colheita' | 'vendas' | 'custos'

/* Screens are real captures of the system running with sample data (no client data). */
const tabs: { id: Tab; label: string; features: string[]; shots: [string, string]; alt: [string, string] }[] = [
  {
    id: 'painel',
    label: 'Painel do dia',
    features: [
      'Caixas colhidas ontem e na semana, por produto',
      'Previsão de recebimentos dos próximos dias',
      'Alerta de contas vencendo e atrasadas',
      'Tudo no celular, direto da roça',
    ],
    shots: ['/cases/mizinho-painel.jpg', '/cases/mizinho-financeiro.jpg'],
    alt: ['Painel inicial do sistema da fazenda', 'Financeiro com valores a receber e cobranças do dia'],
  },
  {
    id: 'colheita',
    label: 'Colheita e colhedores',
    features: [
      'Lançamento das caixas colhidas por colhedor e produto',
      'Valor por caixa definido para cada produto',
      'Fechamento do mês de cada colhedor, com o valor a pagar',
      'Relatório dos colhedores em PDF',
    ],
    shots: ['/cases/mizinho-colheita.jpg', '/cases/mizinho-fechamento.jpg'],
    alt: ['Tela de lançamento da colheita', 'Fechamento do mês por colhedor'],
  },
  {
    id: 'vendas',
    label: 'Vendas e cobrança',
    features: [
      'Venda por caixa com o total calculado sozinho',
      'Nota da venda pronta para enviar ao cliente',
      'Vencimento criado pelo prazo de cada cliente',
      'Cobrança pelo WhatsApp com mensagem pronta e baixa do pagamento',
    ],
    shots: ['/cases/mizinho-venda.jpg', '/cases/mizinho-nota.jpg'],
    alt: ['Tela de nova venda', 'Nota da venda pronta para enviar'],
  },
  {
    id: 'custos',
    label: 'Custos e relatórios',
    features: [
      'Custos fixos e despesas do dia a dia',
      'Pagamento dos colhedores entra como custo automaticamente',
      'Relatórios de clientes e colhedores em PDF',
      'Acessos separados para dono, equipe e quem só visualiza',
    ],
    shots: ['/cases/mizinho-custos.jpg', '/cases/mizinho-relatorios.jpg'],
    alt: ['Controle de custos da fazenda', 'Relatórios em PDF'],
  },
]

function Phone({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`rounded-[26px] p-[5px] bg-[#0b111c] border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.6)] ${className}`}>
      <div className="relative rounded-[21px] overflow-hidden aspect-[9/19] bg-[#f4f7f2]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={390} height={823} className="absolute inset-0 w-full h-full object-cover object-top" />
      </div>
    </div>
  )
}

export default function FarmShowcase() {
  const [tab, setTab] = useState<Tab>('painel')
  const active = tabs.find((t) => t.id === tab)!

  return (
    <div data-reveal className="relative rounded-3xl p-[1px] mb-6" style={{ background: `linear-gradient(225deg, ${GOLD}55, rgba(200,207,217,0.08) 45%, ${GOLD}22)` }}>
      <div className="rounded-3xl p-6 sm:p-8 md:p-10" style={{ background: 'radial-gradient(120% 120% at 100% 0%, #12213b 0%, #0a1426 45%, #070d19 100%)' }}>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 items-center">
          {/* Visual: two phones with real screens */}
          <div className="min-w-0 order-2 lg:order-1">
            <div className="relative mx-auto max-w-[460px] aspect-[5/6]">
              <div className="absolute inset-x-0 bottom-0 h-1/2 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(76,160,90,0.18), transparent 70%)' }} />
              <Phone key={active.shots[0]} src={active.shots[0]} alt={active.alt[0]} className="absolute left-[4%] top-0 w-[54%] z-10" />
              <Phone key={active.shots[1]} src={active.shots[1]} alt={active.alt[1]} className="absolute right-[4%] top-[12%] w-[48%] opacity-95" />
            </div>
            <p className="mt-4 text-center text-[10px] text-white/25 tracking-wide">Telas reais do sistema · dados de demonstração</p>
          </div>

          {/* Copy */}
          <div className="min-w-0 order-1 lg:order-2">
            <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-5" style={{ color: '#0B1220', background: GOLD }}>
              Solução para o agro
            </span>
            <h4 className="text-[28px] md:text-[34px] font-bold leading-[1.1] tracking-tight mb-4">
              Da colheita à cobrança, <span className="text-gold-gradient">sem caderno.</span>
            </h4>
            <p className="text-white/50 leading-relaxed mb-6">
              Um sistema de gestão feito para uma produção de hortifrúti: controla as caixas colhidas, o pagamento dos colhedores, as vendas, as cobranças e os custos. Tudo que antes ficava no caderno, agora em um só lugar.
            </p>

            <div role="tablist" aria-label="Partes do sistema" className="flex flex-wrap gap-2 mb-5">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={tab === t.id}
                  onClick={() => setTab(t.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${tab === t.id ? 'font-semibold text-[#0B1220]' : 'text-white/55 border border-white/10 hover:text-white hover:border-white/25'}`}
                  style={tab === t.id ? { background: GOLD } : undefined}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <ul className="space-y-2.5 mb-7 min-h-[132px]">
              {active.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/65">
                  <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full flex items-center justify-center text-[11px]" style={{ color: '#0B1220', background: GOLD }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 rounded-2xl p-4 bg-white/[0.03] border border-white/[0.06] mb-7">
              <div className="min-w-0">
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/35">Case real</p>
                <p className="text-white font-semibold">Mizinho e Eder · Hortifrúti</p>
                <p className="text-white/40 text-xs">Sistema de gestão da produção · em uso</p>
              </div>
              <span className="ml-auto text-xs font-semibold whitespace-nowrap px-3 py-1.5 rounded-full" style={{ color: GOLD, border: `1px solid ${GOLD}40` }}>
                Acesso pelo celular
              </span>
            </div>

            <a
              href={waLink('Olá! Vi o case da Mizinho e Eder e quero um sistema de gestão para a minha empresa.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-7 py-4 rounded-full text-sm tracking-wide inline-flex items-center gap-2.5 max-w-full"
            >
              <WhatsAppIcon />
              Quero um sistema assim
            </a>
          </div>
        </div>

        {/* How it connects */}
        <div className="mt-10 pt-8 border-t border-white/[0.06] grid sm:grid-cols-3 gap-4 text-sm">
          {[
            { t: 'Colheu', d: 'Lança as caixas de cada colhedor e o mês dele já vai sendo fechado.' },
            { t: 'Vendeu', d: 'O total sai calculado e a cobrança nasce com o vencimento certo.' },
            { t: 'Recebeu', d: 'Dá baixa no financeiro e tudo entra no relatório do mês.' },
          ].map((s, i) => (
            <div key={s.t} className="flex gap-3">
              <span className="text-gold-gradient text-xl font-black leading-none mt-0.5">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <p className="text-white font-semibold">{s.t}</p>
                <p className="text-white/40">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
