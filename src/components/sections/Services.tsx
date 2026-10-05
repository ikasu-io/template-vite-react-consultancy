import { Check } from 'lucide-react'

import { services } from '@/data/services'

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 id="services-heading" className="font-serif text-5xl leading-none sm:text-6xl">
            What we do
          </h2>
          <p className="mt-5 text-lg text-paper/70">
            Four things, usually in this order. You can hire us for one of them, but they work best together.
          </p>
        </div>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-xl border border-paper/15 bg-paper/15 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <li key={service.title} className="flex flex-col gap-4 bg-ink p-7">
              <div className="flex items-center justify-between">
                <service.icon className="size-7 text-peach" aria-hidden="true" />
                <span className="font-serif text-xl text-paper/50">0{i + 1}</span>
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-paper/70">{service.text}</p>
              <ul className="mt-auto space-y-2 pt-4 text-sm">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="size-4 text-peach" aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
