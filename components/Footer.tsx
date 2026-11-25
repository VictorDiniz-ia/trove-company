import { LogoFull } from './Logo'
import { WA, WhatsAppIcon, PHONE_LABEL } from './WhatsApp'

const services = [
  { label: 'Criação de sites', href: '#solucoes' },
  { label: 'Landing pages', href: '#solucoes' },
  { label: 'SEO e Google', href: '#solucoes' },
  { label: 'Tráfego pago', href: '#solucoes' },
  { label: 'Social media', href: '#solucoes' },
  { label: 'Identidade visual', href: '#solucoes' },
  { label: 'Sistemas sob medida', href: '#sistemas', gold: true },
]

const pages = [
  { label: 'Por que a Trove', href: '#sobre' },
  { label: 'Cases', href: '#cases' },
  { label: 'Como trabalhamos', href: '#processo' },
  { label: 'Diagnóstico gratuito', href: '#diagnostico' },
  { label: 'Dúvidas', href: '#faq' },
]

export default function Footer() {
  return (
    <footer id="contato" className="relative bg-[#040a16] border-t border-white/[0.06] px-5 sm:px-6 pt-16 md:pt-20 pb-28 md:pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
          <div>
            <LogoFull className="w-44" />
            <p className="text-white/35 text-sm mt-6 max-w-[240px] leading-relaxed">Marketing e tecnologia para empresas de todo o Brasil.</p>
          </div>

          <nav aria-label="Serviços">
            <p className="text-white/30 text-[11px] tracking-[0.2em] uppercase mb-4">Serviços</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className={`text-sm transition-colors duration-200 hover:text-white ${s.gold ? 'text-[#D4B47A]' : 'text-white/55'}`}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Navegação">
            <p className="text-white/30 text-[11px] tracking-[0.2em] uppercase mb-4">Navegação</p>
            <ul className="space-y-2.5">
              {pages.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-sm text-white/55 hover:text-white transition-colors duration-200">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-white text-xl font-bold tracking-tight mb-2">Pronto para crescer?</p>
            <p className="text-white/45 text-sm mb-6 leading-relaxed">Fale com um especialista e descubra o que a Trove pode fazer pela sua empresa.</p>
            <a
              href={WA.conversa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-6 py-3.5 rounded-full text-sm tracking-wide inline-flex items-center gap-2"
            >
              <WhatsAppIcon />
              Falar no WhatsApp
            </a>
            <p className="text-white/40 text-sm mt-4">{PHONE_LABEL}</p>
            <a href="https://www.instagram.com/trovecompany/" target="_blank" rel="noopener noreferrer" className="inline-block text-white/40 text-sm mt-1 hover:text-white transition-colors">
              @trovecompany
            </a>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} Trove Company. Todos os direitos reservados.</p>
          <p className="text-white/20 text-[11px] tracking-[0.3em]">ESTRATÉGIA · TECNOLOGIA · RESULTADOS</p>
        </div>
      </div>
    </footer>
  )
}
