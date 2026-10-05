import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { faq } from '@/data/faq'

export function Faq() {
  return (
    <section aria-labelledby="faq-heading" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_2fr] lg:px-8">
        <h2 id="faq-heading" className="font-serif text-5xl leading-none sm:text-6xl">
          Questions we get
        </h2>
        <Accordion type="single" collapsible className="border-t">
          {faq.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
