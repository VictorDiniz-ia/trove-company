import { WA, WhatsAppIcon } from './WhatsApp'

const GOLD = '#D4B47A'

const checks = [
  { t: 'Google', d: 'Como sua empresa aparece nas buscas e no Google Maps' },
  { t: 'Site', d: 'Velocidade, celular e se ele realmente gera contatos' },
  { t: 'Instagram', d: 'Perfil, conteúdo e o que está travando as vendas' },
  { t: 'Processos internos', d: 'Onde um sistema sob medida economiza tempo e dinheiro' },
]

export default function Offer() {
  return (
    <section id="diagnostico" className="relative py-24 md:py-28 px-6 bg-[#060e1e]">
      <div className="max-w-5xl mx-auto">
        <div data-reveal className="relative rounded-3xl p-[1px]" style={{ background: `linear-gradient(135deg, ${GOLD}66, rgba(200,207,217,0.1) 45%, ${GOLD}33)` }}>
          <div className="rounded-3xl px-7 py-12 md:px-14 md:py-14 overflow-hidden relative" style={{ background: 'radial-gradient(120% 120% at 100% 0%, #13233f 0%, #0a1426 45%, #070d19 100%)' }}>
            <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 items-center relative z-10">
              <div>
                <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-6" style={{ color: '#0B1220', background: GOLD }}>
                  Gratuito · sem compromisso
                </span>
                <h2 className="text-3xl md:text-[42px] font-bold leading-[1.1] tracking-tight mb-5">
                  Diagnóstico Digital <span className="text-gold-gradient">gratuito</span>
                </h2>
                <p className="text-white/55 leading-relaxed mb-8">
                  Analisamos a presença digital e a rotina da sua empresa e mostramos, com clareza, o que fazer para atrair mais clientes e trabalhar com mais controle.
                </p>
                <a href={WA.diagnostico} target="_blank" rel="noopener noreferrer" className="btn-gold px-8 py-4 rounded-full text-sm tracking-wide inline-flex items-center gap-2.5">
                  <WhatsAppIcon />
                  Quero meu diagnóstico
                </a>
                <p className="text-white/30 text-xs mt-4">Atendemos empresas de todo o Brasil.</p>
              </div>
              <ul className="space-y-3">
                {checks.map((c) => (
                  <li key={c.t} className="flex gap-4 rounded-2xl p-4 bg-white/[0.03] border border-white/5">
                    <span className="w-6 h-6 shrink-0 rounded-full flex items-center justify-center text-xs mt-0.5" style={{ color: '#0B1220', background: GOLD }}>✓</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{c.t}</p>
                      <p className="text-white/40 text-sm leading-snug">{c.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
