// Client names set as wordmarks in different type styles, no logos.
const clients = [
  { name: 'Nordhavn Transit', className: 'font-sans font-bold uppercase tracking-[0.2em] text-base' },
  { name: 'City of Østervig', className: 'font-serif text-2xl' },
  { name: 'Brask Pharmacies', className: 'font-sans font-semibold text-xl tracking-tight' },
  { name: 'Kollund Libraries', className: 'font-serif italic text-2xl' },
  { name: 'Vind Energi Service', className: 'font-sans font-light uppercase tracking-[0.3em] text-sm' },
  { name: 'Hjem Housing', className: 'font-sans font-black text-xl lowercase' },
]

export function Clients() {
  return (
    <section aria-labelledby="clients-heading" className="border-y bg-card/60 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="clients-heading" className="mb-6 text-center text-sm text-muted-foreground">
          Recent work for
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5 text-foreground/80">
          {clients.map((client) => (
            <li key={client.name} className={client.className}>
              {client.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
