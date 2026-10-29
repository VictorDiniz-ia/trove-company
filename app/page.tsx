import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services, { Process } from '@/components/Services'
import Systems from '@/components/Systems'
import Offer from '@/components/Offer'
import Footer from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsApp'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Systems />
      <Process />
      <Offer />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
