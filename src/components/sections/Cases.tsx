import { ArrowUpRight } from 'lucide-react'

import { MetricChart } from '@/components/MetricChart'
import { Photo } from '@/components/Photo'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cases, sectors, type Case, type Sector } from '@/data/cases'

const filters: ('all' | Sector)[] = ['all', ...(Object.keys(sectors) as Sector[]).filter((s) => cases.some((c) => c.sector === s))]

function CaseCard({ item }: { item: Case }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          id={`case-${item.slug}`}
          role="button"
          tabIndex={0}
          className="group flex h-full cursor-pointer flex-col overflow-hidden text-left transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <div className="aspect-[3/2] overflow-hidden">
            <Photo
              name={item.image}
              sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
              loading="lazy"
              className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-1 flex-col gap-4 p-6">
            <div className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
              <span>{item.client}</span>
              <Badge variant="secondary">{sectors[item.sector]}</Badge>
            </div>
            <h3 className="font-serif text-3xl leading-tight">{item.title}</h3>
            <p className="text-muted-foreground">{item.problem}</p>
            <div className="mt-auto grid grid-cols-[auto_1fr] items-end gap-5 border-t pt-5">
              <p>
                <span className="block font-serif text-5xl leading-none text-primary">{item.result.value}</span>
                <span className="mt-1 block max-w-32 text-sm text-muted-foreground">{item.result.label}</span>
              </p>
              <MetricChart metric={item.metric} />
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
              Read the case <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <p className="text-sm text-muted-foreground">
            {item.client} · {sectors[item.sector]} · {item.year}
          </p>
          <DialogTitle>{item.title}</DialogTitle>
          <DialogDescription className="text-lg">{item.problem}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {item.work.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <div className="rounded-xl border bg-card p-4 sm:p-6">
          <p className="mb-4">
            <span className="font-serif text-4xl text-primary">{item.result.value}</span>{' '}
            <span className="text-muted-foreground">{item.result.label}</span>
          </p>
          <MetricChart metric={item.metric} size="large" />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function Cases() {
  return (
    <section id="work" aria-labelledby="work-heading" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <h2 id="work-heading" className="font-serif text-5xl leading-none sm:text-6xl">
              Work, <em>measured</em>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Every project starts with one number we agree to move. The charts show it month by month, before and
              after the new service went live.
            </p>
          </div>
        </div>
        <Tabs defaultValue="all" className="mt-10">
          <TabsList aria-label="Filter cases by sector">
            {filters.map((filter) => (
              <TabsTrigger key={filter} value={filter}>
                {filter === 'all' ? 'All' : sectors[filter]}
              </TabsTrigger>
            ))}
          </TabsList>
          {filters.map((filter) => (
            <TabsContent key={filter} value={filter}>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cases
                  .filter((item) => filter === 'all' || item.sector === filter)
                  .map((item) => (
                    <CaseCard key={item.slug} item={item} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
