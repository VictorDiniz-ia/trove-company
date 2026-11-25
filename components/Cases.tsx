import StoreShowcase from './StoreShowcase'
import FarmShowcase from './FarmShowcase'
import { Reveal, TiltCard, TiltIn } from './motion'

/** Real client work: the Use Vivi's store and the Mizinho e Eder farm system. */
export default function Cases() {
  return (
    <section id="cases" className="relative bg-[#060e1e] px-5 sm:px-6 pt-16 md:pt-28 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none blur-orb" style={{ background: 'radial-gradient(circle, rgba(212,180,122,0.07), transparent 65%)', filter: 'blur(40px)' }} />
      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.24em] uppercase text-[#D4B47A] mb-6">
            <span className="w-8 h-px bg-[#D4B47A]" />
            Cases reais
          </p>
        </Reveal>
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-16 items-end mb-14 md:mb-20">
          <TiltIn>
            <h2 className="text-[44px] sm:text-[60px] md:text-[80px] font-extrabold tracking-[-0.045em] leading-[0.98]">
              Feito para usar
              <br />
              <span className="text-silver-gradient">todo dia.</span>
            </h2>
          </TiltIn>
          <Reveal delay={0.1}>
            <p className="text-white/50 text-base md:text-lg leading-relaxed lg:pb-3">
              Uma loja de moda e uma produção de hortifrúti. Negócios diferentes, mesmo resultado: menos tempo apagando incêndio e mais controle das vendas.
            </p>
          </Reveal>
        </div>

        <div className="space-y-8 md:space-y-10">
          <TiltCard>
            <StoreShowcase />
          </TiltCard>
          <TiltCard>
            <FarmShowcase />
          </TiltCard>
        </div>
      </div>
    </section>
  )
}
