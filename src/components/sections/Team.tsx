import { team } from '@/data/team'

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

export function Team() {
  return (
    <section id="team" aria-labelledby="team-heading" className="border-t py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_2fr] lg:px-8">
        <div>
          <h2 id="team-heading" className="font-serif text-5xl leading-none sm:text-6xl">
            Eleven people, <em>one room</em>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Researchers, designers, engineers and a data person, in one studio by the canal. The people you meet in
            the first conversation are the people who do the work.
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {team.map((person, i) => (
            <li key={person.name} className="flex gap-5">
              <span
                aria-hidden="true"
                className={`flex size-16 shrink-0 items-center justify-center rounded-full font-serif text-2xl ${
                  i % 3 === 0 ? 'bg-primary text-primary-foreground' : i % 3 === 1 ? 'bg-peach' : 'bg-ink text-paper'
                }`}
              >
                {initials(person.name)}
              </span>
              <div>
                <h3 className="text-lg font-semibold">{person.name}</h3>
                <p className="text-sm text-primary">{person.role}</p>
                <p className="mt-2 text-muted-foreground">{person.line}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
