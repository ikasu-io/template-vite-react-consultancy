import { quotes } from '@/data/quotes'

export function Quotes() {
  return (
    <section aria-labelledby="quotes-heading" className="bg-primary py-24 text-primary-foreground sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="quotes-heading" className="sr-only">
          What clients say
        </h2>
        <ul className="grid gap-12 lg:grid-cols-3">
          {quotes.map((quote) => (
            <li key={quote.role}>
              <figure>
                <blockquote className="font-serif text-3xl leading-tight">“{quote.text}”</blockquote>
                <figcaption className="mt-6 text-sm text-primary-foreground/80">
                  {quote.name}, <span className="font-medium text-primary-foreground">{quote.role}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
