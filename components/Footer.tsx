import { LogoFull } from './Logo'
import { WA, WhatsAppIcon } from './WhatsApp'

const links = [
  { label: 'Criação de Sites', href: '#servicos' },
  { label: 'Landing Pages', href: '#servicos' },
  { label: 'SEO', href: '#servicos' },
  { label: 'Identidade Visual', href: '#servicos' },
  { label: 'Tráfego Pago', href: '#servicos' },
  { label: 'Social Media', href: '#servicos' },
  { label: 'Automação', href: '#servicos' },
  { label: 'Sistemas sob medida', href: '#sistemas' },
]

export default function Footer() {
  return (
    <footer id="contato" className="border-t border-white/5 bg-[#060e1e] py-20 px-6 pb-28 md:pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Logo completa */}
          <div className="flex flex-col items-center md:items-start">
            <LogoFull className="w-48" />
            <p className="text-silver-500/40 text-xs mt-6">Atendemos empresas de todo o Brasil.</p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-center md:text-left">
            <p className="col-span-2 text-silver-500/40 text-xs tracking-widest uppercase mb-1">Serviços</p>
            {links.map((s) => (
              <a key={s.label} href={s.href} className={`text-sm hover:text-silver-300 transition-colors duration-200 ${s.href === '#sistemas' ? 'text-[#D4B47A]/80' : 'text-silver-500/60'}`}>
                {s.label}
              </a>
            ))}
          </div>

          {/* CTA de contato */}
          <div className="text-center md:text-right">
            <p className="text-silver-300 text-xl font-semibold mb-2">Pronto para crescer?</p>
            <p className="text-silver-500/60 text-sm mb-6 max-w-xs">
              Fale com um especialista hoje mesmo e descubra o que a Trove pode fazer pela sua empresa.
            </p>
            <a href={WA.conversa} target="_blank" rel="noopener noreferrer" className="btn-primary px-7 py-3.5 rounded-full text-sm tracking-wide inline-flex items-center gap-2">
              <WhatsAppIcon />
              Agendar conversa gratuita
            </a>
            <p className="text-silver-500/50 text-sm mt-4">WhatsApp (11) 91319-2334</p>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-silver-500/30 text-xs">© {new Date().getFullYear()} Trove Company. Todos os direitos reservados.</p>
          <p className="text-silver-500/20 text-xs tracking-widest">ESTRATÉGIA · TECNOLOGIA · RESULTADOS</p>
        </div>
      </div>
    </footer>
  )
}
