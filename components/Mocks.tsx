'use client'

import { motion } from 'framer-motion'
import { Search, Star, MapPin, Globe, Navigation, MessageCircle, Heart, Send } from 'lucide-react'
import { EASE } from './motion'

const GOLD = '#D4B47A'
const view = { once: true, margin: '0px 0px -15% 0px' } as const

function Caption() {
  return <p className="mt-3 text-right text-[10px] text-white/25 tracking-wide">Exemplo ilustrativo</p>
}

/* ───────── 01 · Ser encontrado: busca no Google com a sua empresa em destaque ───────── */
export function SearchMock() {
  const query = 'seu serviço perto de mim'
  const results = [
    { name: 'Sua Empresa', rating: '4,9', reviews: '128 avaliações', you: true },
    { name: 'Concorrente A', rating: '4,2', reviews: '31 avaliações' },
    { name: 'Concorrente B', rating: '3,8', reviews: '12 avaliações' },
  ]
  return (
    <div>
      <div className="rounded-2xl bg-[#f6f7f9] text-[#1f2937] shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="p-3.5 sm:p-4 border-b border-black/5">
          <div className="flex items-center gap-2.5 rounded-full bg-white border border-black/10 px-4 py-2.5 text-[13px] sm:text-sm">
            <Search size={15} className="text-[#5f6368] shrink-0" />
            <motion.span
              className="overflow-hidden whitespace-nowrap"
              initial={{ maxWidth: 0 }}
              whileInView={{ maxWidth: 260 }}
              viewport={view}
              transition={{ duration: 0.9, ease: (t: number) => Math.floor(t * query.length) / query.length }}
            >
              {query}
            </motion.span>
            <span className="w-px h-4 bg-[#1a73e8] animate-pulse" />
          </div>
        </div>
        {/* mapa */}
        <div className="relative h-24 sm:h-28 bg-[#e8ecef] overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 110" aria-hidden="true">
            <path d="M0 70 C80 60 120 90 200 72 S330 40 400 58" stroke="#fff" strokeWidth="10" fill="none" />
            <path d="M120 0 L150 110 M290 0 L250 110" stroke="#fff" strokeWidth="7" />
            <rect x="20" y="10" width="70" height="40" rx="4" fill="#d5dde3" />
            <rect x="310" y="72" width="70" height="30" rx="4" fill="#cfe5d3" />
          </svg>
          {[{ l: '22%', t: '55%' }, { l: '74%', t: '30%' }].map((p, i) => (
            <span key={i} className="absolute w-3 h-3 rounded-full bg-[#9aa0a6] border-2 border-white" style={{ left: p.l, top: p.t }} />
          ))}
          <motion.span
            className="absolute left-[48%] top-[18%] text-[#ea4335]"
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={view}
            transition={{ type: 'spring', stiffness: 380, damping: 14, delay: 0.9 }}
          >
            <MapPin size={30} fill="#ea4335" stroke="#fff" strokeWidth={1.5} />
          </motion.span>
        </div>
        <div className="p-2.5 sm:p-3 space-y-2">
          {results.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={view}
              transition={{ duration: 0.6, ease: EASE, delay: 0.95 + i * 0.12 }}
              className={`rounded-xl px-3.5 py-3 ${r.you ? 'bg-white ring-2 ring-[#D4B47A] shadow-[0_10px_30px_rgba(184,149,79,0.25)]' : 'bg-white/60'}`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className={`text-[14px] font-semibold truncate ${r.you ? 'text-[#1a0dab]' : 'text-[#5f6368]'}`}>{r.name}</p>
                  <p className="flex items-center gap-1 text-[11px] text-[#5f6368]">
                    {r.rating}
                    <Star size={11} fill="#fbbc04" stroke="#fbbc04" />
                    <span className="truncate">· {r.reviews}</span>
                  </p>
                </div>
                {r.you && <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-[#e6f4ea] text-[#137333] whitespace-nowrap">Aberto agora</span>}
              </div>
              {r.you && (
                <div className="mt-2.5 flex gap-1.5">
                  {[
                    { i: Globe, t: 'Site' },
                    { i: Navigation, t: 'Rota' },
                    { i: MessageCircle, t: 'WhatsApp' },
                  ].map((b) => (
                    <span key={b.t} className="inline-flex items-center gap-1 rounded-full border border-black/10 px-2.5 py-1 text-[11px] text-[#1a73e8]">
                      <b.i size={11} />
                      {b.t}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <Caption />
    </div>
  )
}

/* ───────── 02 · Atrair clientes: anúncio + funil da campanha ───────── */
export function AdsMock() {
  const funnel = [
    { t: 'Pessoas alcançadas', w: 100 },
    { t: 'Visitaram o perfil', w: 64 },
    { t: 'Clicaram no anúncio', w: 41 },
    { t: 'Conversas no WhatsApp', w: 24, gold: true },
  ]
  return (
    <div>
      <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-3 sm:gap-4 items-start">
        {/* post patrocinado */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -4 }}
          whileInView={{ opacity: 1, y: 0, rotate: -2 }}
          viewport={view}
          transition={{ duration: 1, ease: EASE }}
          className="rounded-2xl bg-[#0b1628] border border-white/10 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center gap-2 p-2.5">
            <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#f1dcae] to-[#b8954f]" />
            <span className="leading-tight">
              <span className="block text-[11px] font-semibold text-white">sua.marca</span>
              <span className="block text-[9px] text-white/40">Patrocinado</span>
            </span>
          </div>
          <div className="aspect-square relative overflow-hidden" style={{ background: 'radial-gradient(120% 90% at 20% 10%, #1d3a66, #0a1426 70%)' }}>
            <div className="absolute inset-0 hero-grid opacity-70" />
            <p className="absolute left-3 right-3 bottom-3 text-[13px] sm:text-[15px] font-extrabold leading-tight text-white">
              Seu cliente está procurando <span className="text-gold-gradient">você agora.</span>
            </p>
          </div>
          <div className="flex items-center justify-between px-2.5 py-2 bg-[#D4B47A] text-[#0B1220] text-[11px] font-bold">
            Enviar mensagem <Send size={12} />
          </div>
          <div className="flex gap-3 px-2.5 py-2 text-white/50">
            <Heart size={13} />
            <MessageCircle size={13} />
            <Send size={13} />
          </div>
        </motion.div>

        {/* funil */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={view}
          transition={{ duration: 1, ease: EASE, delay: 0.15 }}
          className="rounded-2xl bg-[#0b1628] border border-white/10 p-3.5 sm:p-4 shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center justify-between gap-2 mb-4">
            <p className="text-[11px] sm:text-[12px] font-semibold text-white leading-tight">Campanha · Mensagens</p>
            <span className="flex items-center gap-1.5 text-[10px] text-emerald-300 bg-emerald-400/10 rounded-full px-2 py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Ativa
            </span>
          </div>
          <div className="space-y-3">
            {funnel.map((f, i) => (
              <div key={f.t}>
                <p className={`text-[10px] sm:text-[11px] mb-1 ${f.gold ? 'text-[#D4B47A] font-semibold' : 'text-white/45'}`}>{f.t}</p>
                <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full origin-left"
                    style={{ width: `${f.w}%`, background: f.gold ? `linear-gradient(90deg, #b8954f, #f1dcae)` : 'rgba(200,207,217,0.35)' }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={view}
                    transition={{ duration: 1.1, ease: EASE, delay: 0.4 + i * 0.15 }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 grid grid-cols-2 gap-2">
            {[
              { k: 'Público', v: 'Sua região' },
              { k: 'Objetivo', v: 'WhatsApp' },
            ].map((m) => (
              <div key={m.k}>
                <p className="text-[9px] uppercase tracking-wider text-white/30">{m.k}</p>
                <p className="text-[11px] sm:text-[12px] text-white font-semibold">{m.v}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <Caption />
    </div>
  )
}

/* ───────── 03 · Organizar e vender mais: painel de gestão ───────── */
export function DashboardMock() {
  const bars = [38, 52, 44, 63, 58, 74, 69, 88]
  const rows = [
    { n: 'Mariana Costa', s: 'Confirmado', c: '#34d399', h: '09:00' },
    { n: 'Escritório Lima', s: 'Orçamento enviado', c: GOLD, h: '10:30' },
    { n: 'Pedro Alves', s: 'Novo cliente', c: '#60a5fa', h: '14:00' },
  ]
  return (
    <div>
      <div className="relative rounded-2xl p-[1px]" style={{ background: `linear-gradient(140deg, ${GOLD}66, rgba(200,207,217,0.08) 40%, rgba(200,207,217,0.04))` }}>
        <div className="rounded-2xl bg-[#08111f] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="ml-3 text-[11px] text-white/30 tracking-wide truncate">painel.suaempresa.com.br</span>
          </div>
          <div className="grid grid-cols-[44px_minmax(0,1fr)] sm:grid-cols-[52px_minmax(0,1fr)]">
            <div className="border-r border-white/5 py-4 flex flex-col items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/trove-simbolo-dourado.svg" alt="" className="w-6 h-auto opacity-90" />
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className="w-7 h-7 rounded-lg" style={{ background: i === 0 ? `${GOLD}22` : 'rgba(255,255,255,0.04)', border: i === 0 ? `1px solid ${GOLD}44` : 'none' }} />
              ))}
            </div>
            <div className="p-3.5 sm:p-5 space-y-3.5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-white/35">Bom dia,</p>
                  <p className="text-sm font-semibold text-white">Visão geral do mês</p>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-full" style={{ color: GOLD, background: `${GOLD}14`, border: `1px solid ${GOLD}30` }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: GOLD }} />
                  Ao vivo
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { k: 'Faturamento', v: 'R$ 48,2 mil', d: '+18%' },
                  { k: 'Agendamentos', v: '126', d: '+24%' },
                  { k: 'Orçamentos', v: '37', d: '+9%' },
                ].map((m, i) => (
                  <motion.div
                    key={m.k}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={view}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.2 + i * 0.1 }}
                    className="rounded-xl p-2.5 sm:p-3 bg-white/[0.03] border border-white/5"
                  >
                    <p className="text-[9px] sm:text-[10px] text-white/35 truncate">{m.k}</p>
                    <p className="text-[12px] sm:text-base font-bold text-white mt-0.5 whitespace-nowrap">{m.v}</p>
                    <p className="text-[10px] text-emerald-400/90 mt-0.5">{m.d}</p>
                  </motion.div>
                ))}
              </div>
              <div className="rounded-xl p-3 bg-white/[0.03] border border-white/5">
                <p className="text-[10px] text-white/35 mb-2">Vendas por semana</p>
                <div className="flex items-end gap-1.5 h-16 sm:h-20">
                  {bars.map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t origin-bottom"
                      style={{ height: `${h}%`, background: i === bars.length - 1 ? `linear-gradient(to top, ${GOLD}, #f1dcae)` : 'rgba(200,207,217,0.16)' }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={view}
                      transition={{ duration: 0.9, ease: EASE, delay: 0.3 + i * 0.06 }}
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-white/[0.03] border border-white/5 divide-y divide-white/5">
                {rows.map((r, i) => (
                  <motion.div
                    key={r.n}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={view}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.8 + i * 0.12 }}
                    className="flex items-center gap-3 px-3 py-2"
                  >
                    <span className="text-[10px] text-white/35 w-9">{r.h}</span>
                    <span className="text-[12px] text-white/85 flex-1 truncate">{r.n}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap" style={{ color: r.c, background: `${r.c}18` }}>
                      {r.s}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Caption />
    </div>
  )
}
