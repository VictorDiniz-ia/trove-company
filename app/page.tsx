import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Manifesto from '@/components/Manifesto'
import Pillars from '@/components/Pillars'
import Stats from '@/components/Stats'
import Cases from '@/components/Cases'
import Systems from '@/components/Systems'
import Process from '@/components/Process'
import Offer from '@/components/Offer'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsApp'
import { RevealObserver } from '@/components/motion'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Marquee />
      <Manifesto />
      <Pillars />
      <Stats />
      <Cases />
      <Systems />
      <Process />
      <Offer />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
      <RevealObserver />
    </main>
  )
}
