'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { EASE, Reveal } from './motion'
import { WA } from './WhatsApp'

const faqs = [
  {
    q: 'Quanto custa um projeto?',
    a: 'Depende do que a sua empresa precisa. Por isso começamos pelo diagnóstico gratuito: você recebe uma proposta com escopo, prazo e investimento definidos antes de qualquer compromisso.',
  },
  {
    q: 'Em quanto tempo fica pronto?',
    a: 'Landing pages e ajustes de perfil costumam sair em poucas semanas. Sites completos e sistemas são entregues por etapas, para você já usar as primeiras partes enquanto o resto é construído.',
  },
  {
    q: 'Vocês atendem a minha cidade?',
    a: 'Sim. Atendemos empresas de todo o Brasil, com reuniões online e acompanhamento pelo WhatsApp.',
  },
  {
    q: 'Preciso contratar tudo junto?',
    a: 'Não. Você pode começar só pelo site, só pelos anúncios ou só pelo sistema. O diagnóstico mostra por onde vale mais a pena começar.',
  },
  {
    q: 'O sistema funciona no celular?',
    a: 'Sim. Os sistemas funcionam no navegador do celular e do computador, com acessos separados para o dono e para a equipe.',
  },
  {
    q: 'E depois que o projeto é entregue?',
    a: 'Sua equipe recebe treinamento e a gente segue disponível para suporte, ajustes e novas funções conforme a empresa cresce.',
  },
]

function Item({ q, a, open, onToggle, i }: { q: string; a: string; open: boolean; onToggle: () => void; i: number }) {
  return (
    <div className="border-b border-white/[0.08]">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-${i}`}
          className="w-full flex items-center justify-between gap-6 py-6 md:py-7 text-left group"
        >
          <span className={`text-lg md:text-[22px] font-semibold tracking-tight transition-colors duration-300 ${open ? 'text-white' : 'text-white/75 group-hover:text-white'}`}>{q}</span>
          <span
            className={`w-10 h-10 shrink-0 rounded-full border flex items-center justify-center transition-all duration-500 ${
              open ? 'rotate-45 bg-[#D4B47A] border-[#D4B47A] text-[#0B1220]' : 'border-white/15 text-white/70 group-hover:border-[#D4B47A]/60'
            }`}
          >
            <Plus size={18} />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-${i}`}
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="pb-7 pr-14 text-[15px] md:text-base leading-relaxed text-white/50 max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/** Frequently asked questions, one answer open at a time. */
export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="relative bg-[#060e1e] px-5 sm:px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] gap-10 lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 self-start">
          <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.24em] uppercase text-[#D4B47A] mb-6">
            <span className="w-8 h-px bg-[#D4B47A]" />
            Dúvidas frequentes
          </p>
          <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-extrabold tracking-[-0.04em] leading-[1.02] mb-5">
            Antes de <span className="text-silver-gradient">conversar.</span>
          </h2>
          <p className="text-white/45 text-[15px] leading-relaxed mb-6">Não achou sua dúvida? Manda no WhatsApp que a gente responde.</p>
          <a href={WA.conversa} target="_blank" rel="noopener noreferrer" className="text-[#D4B47A] text-sm font-semibold underline underline-offset-4 decoration-[#D4B47A]/40 hover:decoration-[#D4B47A]">
            Perguntar no WhatsApp
          </a>
        </Reveal>
        <Reveal delay={0.1} className="border-t border-white/[0.08]">
          {faqs.map((f, i) => (
            <Item key={f.q} {...f} i={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
