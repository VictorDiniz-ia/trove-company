import type { Metadata } from 'next'
import './globals.css'
import { Cinzel, Inter } from 'next/font/google'

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-cinzel' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Trove Company — Estratégia. Tecnologia. Resultados.',
  description:
    'Agência de marketing B2B especializada em criação de sites, SEO, tráfego pago, identidade visual e automação digital para empresas que querem crescer.',
  keywords: 'agência marketing B2B, criação de sites, SEO, tráfego pago, identidade visual',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cinzel.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
