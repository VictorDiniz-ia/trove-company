import Reveal from './Reveal'

const WA = 'https://wa.me/5511913192334?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Trove%20Company.'

const services = [
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
]

const steps = [
  { num: '1', title: 'Diagnóstico', desc: 'Analisamos seu negócio, concorrência e oportunidades digitais para identificar as maiores alavancas de crescimento.' },
  { num: '2', title: 'Estratégia',  desc: 'Desenvolvemos um plano personalizado com metas claras, canais prioritários e cronograma adaptado à sua realidade.' },
  { num: '3', title: 'Execução',    desc: 'Implementamos com precisão, monitoramos em tempo real e ajustamos continuamente para maximizar o retorno.' },
]

export default function Services() {
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
          <Reveal className="text-center mb-20">
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
          </Reveal>

          {/* Grid de cards */}
          <div className="grid grid-cols-6 gap-4">
            {services.map((s, i) => (
              <Reveal
                key={i}
                className={`service-card group relative col-span-6 sm:col-span-3 lg:col-span-2 rounded-2xl overflow-hidden ${i === 6 ? 'lg:col-start-3' : ''}`}
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
                  <h3 className="text-white font-bold text-[17px] mb-3 leading-snug">{s.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">{s.description}</p>
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ COMO FUNCIONA ═══════ */}
      <section className="relative py-28 px-6 overflow-hidden" style={{ background: '#060e1e' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="blur-orb" style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', width: 700, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(14,28,58,0.5) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,207,217,0.07), transparent)' }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal className="text-center mb-16">
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
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
            <div className="hidden md:block absolute top-[54px] left-[calc(16.66%+32px)] right-[calc(16.66%+32px)] h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,207,217,0.1) 30%, rgba(200,207,217,0.1) 70%, transparent)' }} />
            {steps.map((step, i) => (
              <Reveal key={i} className="flex flex-col items-center text-center p-8 rounded-2xl"
                style={{ background: 'linear-gradient(145deg, rgba(12,20,38,0.8), rgba(8,14,26,0.95))', border: '1px solid rgba(200,207,217,0.05)' }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 relative z-10" style={{ background: 'linear-gradient(145deg, #0e1628, #090f1e)', border: '1px solid rgba(200,207,217,0.1)' }}>
                  <span className="text-silver-gradient text-lg font-bold">{step.num}</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-white/35 text-sm leading-relaxed">{step.desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-16">
            <p className="text-white/25 text-sm mb-6">Pronto para dar o próximo passo?</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary px-10 py-4 rounded-full text-sm tracking-wide inline-flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar conversa gratuita no WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
