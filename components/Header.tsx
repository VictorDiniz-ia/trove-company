'use client'

import { useState, useEffect } from 'react'
import { LogoWordmark } from './Logo'
import { WA } from './WhatsApp'

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sistemas', label: 'Sistemas' },
  { href: '#processo', label: 'Como trabalhamos' },
  { href: '#diagnostico', label: 'Diagnóstico grátis' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#060e1e]/95 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-6">
        <a href="#" aria-label="Trove Company — início">
          <LogoWordmark className="h-8 md:h-9" />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-silver-500 hover:text-silver-300 text-sm tracking-wide transition-colors duration-200">
              {l.label}
            </a>
          ))}
          <a href={WA.conversa} target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-2 rounded-full text-sm tracking-wide">
            Falar com especialista
          </a>
        </nav>

        <a href={WA.conversa} target="_blank" rel="noopener noreferrer" className="lg:hidden btn-primary px-4 py-2 rounded-full text-xs tracking-wide">
          Contato
        </a>
      </div>
    </header>
  )
}
