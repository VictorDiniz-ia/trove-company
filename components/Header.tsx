'use client'

import { useState, useEffect } from 'react'
import { LogoWordmark } from './Logo'

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
        scrolled
          ? 'bg-[#060e1e]/95 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <LogoWordmark className="h-10 w-32" />

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#servicos"
            className="text-silver-500 hover:text-silver-300 text-sm tracking-wide transition-colors duration-200"
          >
            Serviços
          </a>
          <a
            href="https://wa.me/5511913192334?text=Olá!%20Gostaria%20de%20agendar%20uma%20conversa%20gratuita%20com%20a%20Trove%20Company."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-5 py-2 rounded-full text-sm tracking-wide"
          >
            Falar com especialista
          </a>
        </nav>

        <a
          href="https://wa.me/5511913192334?text=Olá!%20Gostaria%20de%20agendar%20uma%20conversa%20gratuita%20com%20a%20Trove%20Company."
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden btn-primary px-4 py-2 rounded-full text-xs tracking-wide"
        >
          Contato
        </a>
      </div>
    </header>
  )
}
