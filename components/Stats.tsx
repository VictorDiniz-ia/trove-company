import { Counter, Reveal } from './motion'

const items = [
  { value: <Counter to={100} suffix="%" />, label: 'dos projetos feitos sob medida, sem pacote pronto' },
  { value: <Counter to={3} />, label: 'frentes no mesmo time: presença, clientes e gestão' },
  { value: <>R$&nbsp;0</>, label: 'para fazer o diagnóstico digital da sua empresa' },
  { value: <>BR</>, label: 'atendimento online para empresas de todo o Brasil' },
]

/** Band of honest numbers about how Trove works, counting up on arrival. */
export default function Stats() {
  return (
    <section aria-label="A Trove em números" className="relative bg-[#060e1e] px-5 sm:px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 border-t border-white/10">
        {items.map((it, i) => (
          <Reveal
            key={i}
            delay={i * 0.1}
            className={`pt-8 pb-8 lg:pb-2 pr-4 md:pr-8 ${i % 2 ? 'pl-4 md:pl-8 border-l border-white/10' : ''} ${i === 2 ? 'lg:pl-8 lg:border-l lg:border-white/10' : ''} ${i >= 2 ? 'border-t border-white/10 lg:border-t-0' : ''}`}
          >
            <p className="text-[52px] sm:text-[64px] md:text-[80px] font-extrabold tracking-[-0.05em] leading-none text-gold-gradient">{it.value}</p>
            <p className="mt-4 text-[13px] md:text-sm text-white/45 leading-relaxed max-w-[220px]">{it.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
