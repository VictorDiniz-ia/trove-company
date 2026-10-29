'use client'

import { useEffect, useRef } from 'react'
import { WA, WhatsAppIcon } from './WhatsApp'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const isMobile = window.innerWidth < 768
    if (isMobile) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = []
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      })
    }

    let animId: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 207, 217, ${p.opacity})`
        ctx.fill()
      })

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(200, 207, 217, ${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060e1e] pt-28 pb-20">
      {/* Partículas animadas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 via-transparent to-[#060e1e]" />

      {/* Círculo de luz central */}
      <div className="blur-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#152847]/30 blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 border border-silver-500/20 rounded-full px-4 py-1.5 mb-8 text-silver-500 text-[10px] sm:text-xs tracking-[0.18em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-silver-400 animate-pulse" />
          Marketing + Tecnologia para empresas
        </div>

        {/* Título principal */}
        <h1 className="text-[40px] sm:text-5xl md:text-7xl font-bold leading-[1.08] mb-6">
          Sua empresa no
          <br />
          <span className="text-silver-gradient">próximo nível</span> digital.
        </h1>

        {/* Subtítulo */}
        <p className="text-silver-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          A Trove traz o cliente com site, Google, Instagram e anúncios — e organiza sua empresa por dentro com{' '}
          <span className="text-silver-300">sistemas feitos sob medida</span> para o jeito que você trabalha.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WA.diagnostico}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 rounded-full text-base tracking-wide inline-flex items-center gap-2"
          >
            <WhatsAppIcon />
            Quero meu diagnóstico gratuito
          </a>
          <a
            href="#sistemas"
            className="px-8 py-4 rounded-full text-base tracking-wide border border-silver-500/30 text-silver-400 hover:border-silver-400/60 hover:text-silver-300 transition-all duration-300"
          >
            Conhecer os sistemas
          </a>
        </div>

        {/* Pilares */}
        <p className="mt-14 text-silver-500/50 text-xs tracking-[0.22em] uppercase leading-loose">
          Sites &nbsp;·&nbsp; Google &nbsp;·&nbsp; Instagram &nbsp;·&nbsp; Anúncios &nbsp;·&nbsp;{' '}
          <span className="text-[#D4B47A]/80">Sistemas sob medida</span>
        </p>
      </div>

      {/* Seta scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-silver-500/40">
          <path d="M10 3v14M3 10l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
