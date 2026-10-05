import { Approach } from '@/components/sections/Approach'
import { Cases } from '@/components/sections/Cases'
import { Clients } from '@/components/sections/Clients'
import { Contact } from '@/components/sections/Contact'
import { Faq } from '@/components/sections/Faq'
import { Footer } from '@/components/sections/Footer'
import { Hero } from '@/components/sections/Hero'
import { Navbar } from '@/components/sections/Navbar'
import { Quotes } from '@/components/sections/Quotes'
import { Services } from '@/components/sections/Services'
import { Team } from '@/components/sections/Team'

export default function Index() {
  return (
    <>
      <a href="#work" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        Skip to the work
      </a>
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Cases />
        <Services />
        <Approach />
        <Team />
        <Quotes />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
