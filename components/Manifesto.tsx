import { Handshake, Ruler, LineChart, ArrowRight } from 'lucide-react'
import { Reveal, WordFill } from './motion'

const values = [
  {
    icon: Handshake,
    title: 'Um só time',
    text: 'Marketing e tecnologia conversando entre si. Você não precisa juntar agência, programador e designer.',
  },
  {
    icon: Ruler,
    title: 'Feito sob medida',
    text: 'Nada de pacote pronto. Cada site, campanha e sistema nasce da rotina e do objetivo da sua empresa.',
  },
  {
    icon: LineChart,
    title: 'Números na mesa',
    text: 'Você acompanha contatos, vendas e custos em relatórios claros, e não no achismo.',
  },
]

/** Light "sheet" that slides over the dark hero with the core promise, lit word by word. */
export default function Manifesto() {
  return (
    <section
      id="sobre"
      className="relative z-10 -mt-10 rounded-t-[36px] md:rounded-t-[64px] bg-[#EEF1F5] text-[#0B1A33] px-5 sm:px-6 pt-20 pb-24 md:pt-32 md:pb-36"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.24em] uppercase text-[#8a6a2f] mb-8 md:mb-10">
            <span className="w-8 h-px bg-[#B8954F]" />
            Por que a Trove
          </p>
        </Reveal>

        <WordFill
          className="text-[30px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-extrabold leading-[1.08] tracking-[-0.035em] max-w-5xl"
          accent="text-[#a8833e]"
          text="*Marketing traz o cliente. *Tecnologia faz a sua empresa dar conta dele. A Trove cuida *dos *dois, do primeiro clique no anúncio até a venda organizada no seu painel."
        />

        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-px rounded-3xl overflow-hidden bg-[#0B1A33]/10 border border-[#0B1A33]/10">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.12} className="bg-[#EEF1F5] p-7 md:p-9 group">
              <span className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#0B1A33] text-[#D4B47A] mb-6 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                <v.icon size={22} strokeWidth={1.7} />
              </span>
              <h3 className="text-xl font-bold mb-2.5">{v.title}</h3>
              <p className="text-[15px] leading-relaxed text-[#0B1A33]/60">{v.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <p className="text-[#0B1A33]/55 text-[15px] max-w-md">Atendemos empresas de todo o Brasil: comércio, serviços, indústria e agro.</p>
          <a
            href="#cases"
            className="group inline-flex items-center gap-3 self-start rounded-full bg-[#0B1A33] text-white pl-6 pr-2 py-2 text-sm font-semibold"
          >
            Ver o que já construímos
            <span className="w-9 h-9 rounded-full bg-[#D4B47A] text-[#0B1A33] flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1">
              <ArrowRight size={16} />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
