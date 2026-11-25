import { Search, MonitorSmartphone, Instagram, Workflow } from 'lucide-react'
import { WA, WhatsAppIcon } from './WhatsApp'
import { Magnetic, Reveal } from './motion'

const checks = [
  { icon: Search, t: 'Google', d: 'Como sua empresa aparece nas buscas e no Google Maps' },
  { icon: MonitorSmartphone, t: 'Site', d: 'Velocidade, celular e se ele realmente gera contatos' },
  { icon: Instagram, t: 'Instagram', d: 'Perfil, conteúdo e o que está travando as vendas' },
  { icon: Workflow, t: 'Processos internos', d: 'Onde um sistema sob medida economiza tempo e dinheiro' },
]

/** Free diagnostic offer inside a card with a slowly rotating gold border. */
export default function Offer() {
  return (
    <section id="diagnostico" className="relative z-20 -mt-10 rounded-t-[36px] md:rounded-t-[64px] bg-[#060e1e] px-5 sm:px-6 pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="relative rounded-[32px] p-[1.5px] overflow-hidden">
            <div className="absolute inset-[-50%] border-spin" />
            <div
              className="relative rounded-[30px] px-6 py-12 sm:px-10 md:px-14 md:py-16 overflow-hidden"
              style={{ background: 'radial-gradient(120% 120% at 100% 0%, #13233f 0%, #0a1426 45%, #070d19 100%)' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/trove-simbolo-dourado.svg" alt="" aria-hidden="true" className="absolute -right-16 -bottom-20 w-[340px] opacity-[0.05] pointer-events-none" />
              <div className="relative grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-center">
                <div>
                  <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-6 text-[#0B1220] bg-[#D4B47A]">
                    Gratuito · sem compromisso
                  </span>
                  <h2 className="text-[36px] sm:text-[44px] md:text-[54px] font-extrabold leading-[1.02] tracking-[-0.04em] mb-5">
                    Diagnóstico Digital <span className="text-gold-gradient">gratuito</span>
                  </h2>
                  <p className="text-white/55 text-[15px] md:text-base leading-relaxed mb-8 max-w-md">
                    Analisamos a presença digital e a rotina da sua empresa e mostramos, com clareza, o que fazer para atrair mais clientes e trabalhar com mais controle.
                  </p>
                  <Magnetic>
                    <a
                      href={WA.diagnostico}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold px-8 py-4 rounded-full text-sm tracking-wide inline-flex items-center gap-2.5"
                    >
                      <WhatsAppIcon />
                      Quero meu diagnóstico
                    </a>
                  </Magnetic>
                  <p className="text-white/30 text-xs mt-4">Resposta pelo WhatsApp · Atendemos todo o Brasil</p>
                </div>
                <ul className="space-y-3">
                  {checks.map((c, i) => (
                    <li key={c.t}>
                      <Reveal delay={0.15 + i * 0.1}>
                        <div className="flex gap-4 rounded-2xl p-4 bg-white/[0.03] border border-white/[0.06] hover:border-[#D4B47A]/30 transition-colors duration-500">
                          <span className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center bg-[#D4B47A]/10 border border-[#D4B47A]/20 text-[#D4B47A]">
                            <c.icon size={18} strokeWidth={1.7} />
                          </span>
                          <div>
                            <p className="text-white font-semibold text-sm">{c.t}</p>
                            <p className="text-white/45 text-sm leading-snug">{c.d}</p>
                          </div>
                        </div>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
