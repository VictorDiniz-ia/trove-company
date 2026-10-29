import type { Metadata } from 'next'
import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-jakarta' })

const title = 'Trove Company — Marketing e Sistemas sob medida para empresas'
const description =
  'A Trove traz clientes para sua empresa com sites, SEO, Google, Instagram e tráfego pago — e organiza sua operação com sistemas feitos sob medida. Atendemos todo o Brasil.'

export const metadata: Metadata = {
  metadataBase: new URL('https://trovecompany.com.br'),
  title,
  description,
  keywords:
    'agência de marketing B2B, sistemas sob medida, sistema personalizado para empresas, criação de sites, SEO, tráfego pago, gestão de Instagram, identidade visual',
  openGraph: {
    title,
    description,
    url: 'https://trovecompany.com.br',
    siteName: 'Trove Company',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/brand/trove-foto-perfil.png', width: 1080, height: 1080, alt: 'Trove Company' }],
  },
  icons: { icon: '/brand/trove-simbolo-prata.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  )
}
