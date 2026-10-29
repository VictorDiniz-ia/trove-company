'use client'

import { useEffect } from 'react'
import { WA, WhatsAppIcon } from './WhatsApp'

type Service = {
  number: string; color: string; shadowColor: string; highlight?: boolean
  icon: React.ReactNode; title: string; tag: string; description: string; features: string[]
}

const services: Service[] = [
  {
    number: '01', color: '#3b82f6', shadowColor: 'rgba(59,130,246,0.18)',
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>),
    title: 'Criação de Sites', tag: 'Web Development',
    description: 'Sites profissionais, rápidos e otimizados para converter visitantes em clientes. Do design exclusivo à publicação, cuidamos de cada detalhe.',
    features: ['Design responsivo', 'Alta performance', 'SEO integrado'],
  },
  {
    number: '02', color: '#8b5cf6', shadowColor: 'rgba(139,92,246,0.18)',
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
    title: 'Landing Pages', tag: 'Conversão',
    description: 'Páginas de alta conversão para campanhas e captação de leads qualificados — projetadas para transformar cliques em negócios.',
    features: ['CTA estratégico', 'A/B Testing', 'Integração com CRM'],
  },
  {
    number: '03', color: '#10b981', shadowColor: 'rgba(16,185,129,0.18)',
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>),
    title: 'SEO', tag: 'Orgânico',
    description: 'Estratégias de otimização que posicionam sua empresa no topo do Google de forma orgânica e sustentável.',
    features: ['Audit completo', 'Link building', 'Conteúdo otimizado'],
  },
  {
    number: '04', color: '#f59e0b', shadowColor: 'rgba(245,158,11,0.18)',
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>),
    title: 'Identidade Visual', tag: 'Branding',
    description: 'Branding estratégico que diferencia sua marca: logo, paleta de cores, tipografia e manual completo para uso consistente.',
    features: ['Logotipo profissional', 'Manual de marca', 'Materiais gráficos'],
  },
  {
    number: '05', color: '#ef4444', shadowColor: 'rgba(239,68,68,0.18)',
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>),
    title: 'Tráfego Pago', tag: 'Performance',
    description: 'Campanhas no Google Ads e Meta Ads gerenciadas para maximizar seu ROI e atrair leads com menor custo por aquisição.',
    features: ['Google Ads', 'Meta Ads', 'Relatórios semanais'],
  },
  {
    number: '06', color: '#ec4899', shadowColor: 'rgba(236,72,153,0.18)',
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
    title: 'Social Media B2B', tag: 'Relacionamento',
    description: 'Gestão estratégica de redes sociais que posiciona sua empresa como autoridade e gera relacionamentos comerciais qualificados.',
    features: ['LinkedIn', 'Instagram', 'Calendário editorial'],
  },
  {
    number: '07', color: '#06b6d4', shadowColor: 'rgba(6,182,212,0.18)',
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="16,3 21,3 21,8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21,16 21,21 16,21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>),
    title: 'Automação de Postagens', tag: 'Automação',
    description: 'Sistemas inteligentes que publicam conteúdo automaticamente nas suas redes, mantendo presença digital constante sem esforço manual.',
    features: ['Agendamento inteligente', 'Multi-plataforma', 'Relatórios automáticos'],
  },
  {
    number: '08', color: '#D4B47A', shadowColor: 'rgba(212,180,122,0.2)', highlight: true,
    icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>),
    title: 'Sistemas sob medida', tag: 'Tecnologia',
    description: 'Sistemas desenvolvidos especificamente para a sua empresa: agenda, orçamentos, estoque, painel de gestão e muito mais.',
    features: ['Feito do zero para você', 'Celular e computador', 'Treinamento e suporte'],
  },
]

const steps = [
  { num: '1', title: 'Diagnóstico', desc: 'Analisamos seu negócio, concorrência e oportunidades digitais para identificar as maiores alavancas de crescimento.' },
  { num: '2', title: 'Estratégia',  desc: 'Desenvolvemos um plano personalizado com metas claras, canais prioritários e cronograma adaptado à sua realidade.' },
  { num: '3', title: 'Execução',    desc: 'Implementamos com precisão, monitoramos em tempo real e ajustamos continuamente para maximizar o retorno.' },
]

export default function Services() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]')

    els.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(50px)'
      el.style.transition = 'opacity 1s ease-out, transform 1s ease-out'
    })

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.05 }
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <section id="servicos" className="relative py-32 px-6 overflow-hidden" style={{ background: '#060e1e' }}>
        {/* Orbes flutuantes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="blur-orb" style={{ position: 'absolute', top: '-120px', left: '-120px', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(15,31,65,0.55) 0%, transparent 70%)', filter: 'blur(60px)', animation: 'orbFloat1 18s ease-in-out infinite' }} />
          <div className="blur-orb" style={{ position: 'absolute', bottom: '-80px', right: '-100px', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(12,25,55,0.5) 0%, transparent 70%)', filter: 'blur(60px)', animation: 'orbFloat2 22s ease-in-out infinite', animationDelay: '-7s' }} />
          <div className="blur-orb" style={{ position: 'absolute', top: '40%', left: '35%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(9,18,42,0.35) 0%, transparent 65%)', filter: 'blur(80px)', animation: 'orbFloat3 26s ease-in-out infinite', animationDelay: '-13s' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(-45deg, rgba(200,207,217,0.016) 0px, rgba(200,207,217,0.016) 1px, transparent 1px, transparent 64px)' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #060e1e, transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to top, #060e1e, transparent)' }} />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div data-reveal className="text-center mb-20">
            <div className="inline-flex items-center gap-2 border border-white/8 rounded-full px-4 py-1.5 mb-6 text-xs tracking-[0.2em] uppercase text-white/25">
              <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
              Nossas soluções
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Soluções que geram{' '}
              <span className="text-silver-gradient">resultados reais.</span>
            </h2>
            <p className="text-white/35 max-w-xl mx-auto text-base leading-relaxed">
              Cada serviço é entregue com foco em performance, consistência e crescimento sustentável para o seu negócio.
            </p>
          </div>

          {/* Grid de cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <div data-reveal
                key={i}
                className="service-card group relative rounded-2xl overflow-hidden"
                style={{ ['--card-shadow' as string]: s.shadowColor, ['--card-border' as string]: `${s.color}30` }}
              >
                <div className="absolute inset-0 rounded-2xl" style={{ background: `linear-gradient(135deg, ${s.color}18, transparent 60%, ${s.color}08)`, border: `1px solid ${s.color}14` }} />
                <div className="absolute inset-[1px] rounded-2xl" style={{ background: 'linear-gradient(145deg, rgba(10,18,32,0.97), rgba(7,13,24,0.99))' }} />
                <div className="absolute top-0 left-6 right-6 h-px" style={{ background: `linear-gradient(90deg, transparent, ${s.color}28, transparent)` }} />

                <div className="relative p-7">
                  <span className="absolute top-3 right-4 text-8xl font-black leading-none select-none pointer-events-none" style={{ color: s.color, opacity: 0.04 }}>
                    {s.number}
                  </span>
                  <span className="inline-block text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full mb-5" style={{ background: `${s.color}12`, color: s.color, border: `1px solid ${s.color}20` }}>
                    {s.tag}
                  </span>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `radial-gradient(ellipse at 30% 30%, ${s.color}22, ${s.color}0a)`, border: `1px solid ${s.color}20`, color: s.color, boxShadow: `0 0 20px ${s.color}15` }}>
                    {s.icon}
                  </div>
                  <h3 className="text-white font-bold text-[17px] mb-3 leading-snug">
                    {s.title}
                    {s.highlight && <span className="ml-2 align-middle text-[9px] font-bold tracking-[0.15em] uppercase px-2 py-0.5 rounded-full" style={{ color: '#0B1220', background: s.color }}>Novo</span>}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">{s.description}</p>
                  {s.highlight && (
                    <a href="#sistemas" className="absolute inset-0 z-10" aria-label="Ver sistemas sob medida" />
                  )}
                  <ul className="space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-xs text-white/30">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <circle cx="6" cy="6" r="5" stroke={s.color} strokeWidth="0.8" strokeOpacity="0.4"/>
                          <circle cx="6" cy="6" r="2" fill={s.color} fillOpacity="0.7"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ═══════ COMO FUNCIONA ═══════ */
export function Process() {
  return (
    <>
      <section id="processo" className="relative py-28 px-6 overflow-hidden" style={{ background: '#060e1e' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="blur-orb" style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', width: 700, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(14,28,58,0.5) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,207,217,0.07), transparent)' }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div data-reveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 border border-white/8 rounded-full px-4 py-1.5 mb-6 text-xs tracking-[0.2em] uppercase text-white/25">
              <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
              Nosso processo
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Como <span className="text-silver-gradient">trabalhamos.</span>
            </h2>
            <p className="text-white/35 max-w-xl mx-auto text-base leading-relaxed">
              Um método claro, transparente e orientado a resultados — para que você saiba exatamente o que esperar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
            <div className="hidden md:block absolute top-[54px] left-[calc(16.66%+32px)] right-[calc(16.66%+32px)] h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,207,217,0.1) 30%, rgba(200,207,217,0.1) 70%, transparent)' }} />
            {steps.map((step, i) => (
              <div data-reveal key={i} className="flex flex-col items-center text-center p-8 rounded-2xl"
                style={{ background: 'linear-gradient(145deg, rgba(12,20,38,0.8), rgba(8,14,26,0.95))', border: '1px solid rgba(200,207,217,0.05)' }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 relative z-10" style={{ background: 'linear-gradient(145deg, #0e1628, #090f1e)', border: '1px solid rgba(200,207,217,0.1)' }}>
                  <span className="text-silver-gradient text-lg font-bold">{step.num}</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-white/35 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div data-reveal className="text-center mt-16">
            <p className="text-white/25 text-sm mb-6">Pronto para dar o próximo passo?</p>
            <a href={WA.servicos} target="_blank" rel="noopener noreferrer" className="btn-primary px-10 py-4 rounded-full text-sm tracking-wide inline-flex items-center gap-3">
              <WhatsAppIcon />
              Agendar conversa gratuita no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
