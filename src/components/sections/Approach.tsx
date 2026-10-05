import { useRef } from 'react'

import { useScrollProgress } from '@/hooks/use-scroll-progress'

const steps = [
  { weeks: 'Weeks 1–3', title: 'Look', text: 'We spend time where the service happens and agree on the one number to move.' },
  { weeks: 'Weeks 4–8', title: 'Try', text: 'Paper and clickable prototypes, tested with real customers and your staff every week.' },
  { weeks: 'Months 3–6', title: 'Build', text: 'We build the new service with your teams, release it in steps and keep testing.' },
  { weeks: 'After launch', title: 'Measure', text: 'We watch the number for six months and fix what the data shows. Then we leave.' },
]

export function Approach() {
  const ref = useRef<HTMLElement>(null)
  // The line fills from the first to the last step while the section
  // crosses the middle of the screen.
  useScrollProgress(ref, 1)

  return (
    <section ref={ref} id="approach" aria-labelledby="approach-heading" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 id="approach-heading" className="font-serif text-5xl leading-none sm:text-6xl">
            How a project runs
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Short phases, a fixed price for each, and a decision at the end of every one: go on, change course or stop.
          </p>
        </div>
        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div aria-hidden="true" className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-stone md:inset-x-0 md:top-[7px] md:bottom-auto md:h-0.5 md:w-auto">
            <div className="timeline-fill h-full w-full bg-primary" />
          </div>
          {steps.map((step) => (
            <li key={step.title} className="relative pl-10 md:pl-0 md:pt-12">
              <span aria-hidden="true" className="absolute left-0 top-0 size-4 rounded-full border-4 border-background bg-primary ring-2 ring-primary" />
              <p className="text-sm text-muted-foreground">{step.weeks}</p>
              <h3 className="mt-1 font-serif text-3xl">{step.title}</h3>
              <p className="mt-3 text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
