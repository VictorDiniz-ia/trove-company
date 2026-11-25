'use client'

import { useState } from 'react'
import { waLink, WhatsAppIcon } from './WhatsApp'

const GOLD = '#D4B47A'
const STORE_URL = 'https://usevivis.netlify.app'

type Tab = 'loja' | 'catalogo' | 'painel'

const tabs: { id: Tab; label: string; features: string[] }[] = [
  {
    id: 'loja',
    label: 'Loja online',
    features: [
      'Site da loja com a identidade da marca',
      'Vitrine de novidades e categorias',
      'Botão de compra direto no WhatsApp',
      'Feito para o celular, onde o cliente compra',
    ],
  },
  {
    id: 'catalogo',
    label: 'Catálogo e pedidos',
    features: [
      'Produtos com fotos, tamanhos, cores e preço no Pix',
      'Sacola e pedido online com QR Code Pix',
      'Retirada na loja, entrega local ou envio para todo o Brasil',
      'O cliente acompanha o pedido por um link',
    ],
  },
  {
    id: 'painel',
    label: 'Painel da loja',
    features: [
      'Lançar vendas do balcão em segundos (PDV)',
      'Estoque por tamanho e cor, com alerta de estoque baixo',
      'Pedidos do site, clientes e histórico de compras',
      'Relatórios de faturamento e acesso separado para dono e equipe',
    ],
  },
]

function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-[1px]" style={{ background: `linear-gradient(140deg, ${GOLD}55, rgba(200,207,217,0.08) 40%, rgba(200,207,217,0.04))` }}>
      <div className="rounded-2xl bg-[#08111f] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="ml-3 text-[11px] text-white/30 tracking-wide truncate">{url}</span>
        </div>
        {children}
      </div>
    </div>
  )
}

/* Illustrative mock of the store panel, using the client's colors and fictitious numbers. */
function PanelMock() {
  const brown = '#75381E'
  const sand = '#FAF6F0'
  const stats = [
    { k: 'Faturamento', v: 'R$ 12.480' },
    { k: 'Vendas', v: '64' },
    { k: 'Peças vendidas', v: '97' },
    { k: 'Ticket médio', v: 'R$ 195' },
  ]
  const channels = [
    { c: 'Balcão', p: 58 },
    { c: 'Site', p: 27 },
    { c: 'WhatsApp', p: 15 },
  ]
  const orders = [
    { n: '#1042', who: 'Cliente Ana', v: 'R$ 189,90', s: 'Aguardando Pix' },
    { n: '#1041', who: 'Cliente Júlia', v: 'R$ 339,80', s: 'Separando' },
  ]
  const menu = ['Início', 'Lançar venda', 'Pedidos', 'Produtos', 'Coleções', 'Clientes', 'Relatórios']
  return (
    <div className="grid grid-cols-[minmax(0,110px)_minmax(0,1fr)] sm:grid-cols-[150px_minmax(0,1fr)] text-[#2b211c]" style={{ background: sand }}>
      <aside className="py-4 px-2 sm:px-3 text-[#F6EEE2]" style={{ background: brown }}>
        <p className="px-2 text-[13px] sm:text-[15px] tracking-[0.12em] text-[#E8CFA0] leading-none">USE VIVI&apos;S</p>
        <p className="px-2 mt-1 text-[7px] sm:text-[8px] tracking-[0.2em] text-[#E8CFA0]/80">PAINEL DA LOJA</p>
        <ul className="mt-4 space-y-0.5">
          {menu.map((m, i) => (
            <li key={m} className={`px-2 py-1.5 rounded text-[10px] sm:text-[11px] truncate ${i === 0 ? 'bg-white/15 text-white' : 'text-[#F6EEE2]/75'}`}>{m}</li>
          ))}
        </ul>
      </aside>
      <div className="p-3 sm:p-5 space-y-3 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[15px] sm:text-[18px] font-medium">Início</p>
          <span className="text-[9px] sm:text-[10px] px-2.5 py-1.5 text-white whitespace-nowrap" style={{ background: brown }}>+ Lançar venda</span>
        </div>
        <div className="flex flex-wrap gap-1.5 text-[9px] sm:text-[10px]">
          {['Hoje', '7 dias', '30 dias', 'Este mês'].map((p, i) => (
            <span key={p} className={`px-2 py-1 whitespace-nowrap ${i === 3 ? 'text-white' : 'bg-white border border-[#e7ddd0]'}`} style={i === 3 ? { background: brown } : undefined}>{p}</span>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {stats.map((s) => (
            <div key={s.k} className="bg-white border border-[#ece3d7] p-2 sm:p-2.5">
              <p className="text-[8px] sm:text-[9px] text-[#8a7a6e] truncate">{s.k}</p>
              <p className="text-[12px] sm:text-[14px] font-semibold whitespace-nowrap">{s.v}</p>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-2">
          <div className="bg-white border border-[#ece3d7] p-2.5 sm:p-3">
            <p className="text-[10px] font-medium mb-2">Vendas por canal</p>
            {channels.map((c) => (
              <div key={c.c} className="mb-1.5">
                <div className="flex justify-between text-[9px] text-[#5d5049]"><span>{c.c}</span><span>{c.p}%</span></div>
                <div className="h-1.5 bg-[#f1e9de]"><div className="h-1.5" style={{ width: `${c.p}%`, background: brown }} /></div>
              </div>
            ))}
          </div>
          <div className="bg-white border border-[#ece3d7] p-2.5 sm:p-3">
            <p className="text-[10px] font-medium mb-1.5">Pedidos do site aguardando</p>
            {orders.map((o) => (
              <div key={o.n} className="flex items-center justify-between gap-2 py-1.5 border-t first:border-t-0 border-[#f1e9de]">
                <span className="text-[9px] sm:text-[10px] truncate"><b className="font-semibold">{o.n}</b> {o.who}<span className="block text-[8px] text-[#8a7a6e]">{o.s}</span></span>
                <span className="text-[9px] sm:text-[10px] font-semibold whitespace-nowrap">{o.v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#FBE9DE] text-[#8A2F0C] text-[9px] sm:text-[10px] px-2.5 py-1.5">Estoque baixo: Vestido Priscila (M) · Conjunto Julyana (P)</div>
      </div>
    </div>
  )
}

export default function StoreShowcase() {
  const [tab, setTab] = useState<Tab>('loja')
  const active = tabs.find((t) => t.id === tab)!

  return (
    <div className="relative rounded-3xl p-[1px]" style={{ background: `linear-gradient(135deg, ${GOLD}55, rgba(200,207,217,0.08) 45%, ${GOLD}22)` }}>
      <div className="rounded-3xl p-6 sm:p-8 md:p-10" style={{ background: 'radial-gradient(120% 120% at 0% 0%, #12213b 0%, #0a1426 45%, #070d19 100%)' }}>
        <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-10 items-center">
          {/* Copy */}
          <div className="min-w-0">
            <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-5" style={{ color: '#0B1220', background: GOLD }}>
              Solução para lojas
            </span>
            <h4 className="text-[28px] md:text-[34px] font-bold leading-[1.1] tracking-tight mb-4">
              Loja online + painel de gestão, <span className="text-gold-gradient">tudo conectado.</span>
            </h4>
            <p className="text-white/50 leading-relaxed mb-6">
              Um site de vendas com a cara da sua loja, ligado a um painel onde você controla balcão, estoque e pedidos. Vendeu na loja física, o estoque do site baixa na hora.
            </p>

            {/* Tabs */}
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

            {/* Case */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 rounded-2xl p-4 bg-white/[0.03] border border-white/[0.06] mb-7">
              <div className="min-w-0">
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/35">Case real</p>
                <p className="text-white font-semibold">Use Vivi&apos;s · Moda Feminina</p>
                <p className="text-white/40 text-xs">Natal/RN · loja e painel em uso</p>
              </div>
              <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="ml-auto text-sm font-semibold whitespace-nowrap hover:underline" style={{ color: GOLD }}>
                Ver a loja no ar ↗
              </a>
            </div>

            <a
              href={waLink('Olá! Tenho uma loja e quero um site de vendas com painel de gestão, como o da Use Vivis.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-7 py-4 rounded-full text-sm tracking-wide inline-flex items-center gap-2.5 max-w-full"
            >
              <WhatsAppIcon />
              Quero isso na minha loja
            </a>
          </div>

          {/* Visual */}
          <div className="min-w-0 relative pb-8 sm:pb-0 sm:pr-10">
            {tab === 'loja' && (
              <>
                <BrowserFrame url="usevivis.netlify.app">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/cases/usevivis-loja.jpg" alt="Página inicial da loja online Use Vivi's" width={1200} height={692} className="w-full h-auto block" />
                </BrowserFrame>
                <div className="absolute -bottom-2 right-0 sm:-bottom-8 w-[30%] max-w-[150px] rounded-[22px] p-[5px] bg-[#0b111c] border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/cases/usevivis-mobile.jpg" alt="Loja Use Vivi's no celular" width={390} height={760} className="w-full h-auto block rounded-[17px]" />
                </div>
              </>
            )}
            {tab === 'catalogo' && (
              <BrowserFrame url="usevivis.netlify.app/produtos">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/cases/usevivis-catalogo.jpg" alt="Catálogo de produtos da loja Use Vivi's" width={1200} height={692} className="w-full h-auto block" />
              </BrowserFrame>
            )}
            {tab === 'painel' && (
              <>
                <BrowserFrame url="usevivis.netlify.app/admin">
                  <PanelMock />
                </BrowserFrame>
                <p className="mt-3 text-right text-[10px] text-white/25 tracking-wide">Tela ilustrativa · dados fictícios</p>
              </>
            )}
          </div>
        </div>

        {/* How it connects */}
        <div className="mt-10 pt-8 border-t border-white/[0.06] grid sm:grid-cols-3 gap-4 text-sm">
          {[
            { t: 'Cliente compra no site', d: 'Pedido chega no painel com Pix ou WhatsApp.' },
            { t: 'Você vende no balcão', d: 'Lança no PDV e o estoque do site atualiza sozinho.' },
            { t: 'Tudo em um só lugar', d: 'Faturamento, clientes e estoque em tempo real.' },
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
