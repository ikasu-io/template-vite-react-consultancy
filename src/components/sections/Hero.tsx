import { useRef } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Photo } from '@/components/Photo'
import type { ImageName } from '@/data/images'
import { site } from '@/data/site'
import { useScrollProgress } from '@/hooks/use-scroll-progress'

// Three photos in layered frames. While the page scrolls they drift apart
// at different speeds (the `speed` in pixels over the whole scroll).
const layers: { image: ImageName; className: string; speed: number; sizes: string }[] = [
  { image: 'studio', className: 'left-0 top-10 w-[78%] aspect-[3/2] z-10', speed: -60, sizes: '(min-width: 1024px) 38vw, 78vw' },
  { image: 'workshop-hands', className: 'right-0 top-0 w-[42%] aspect-[4/5] z-20', speed: -220, sizes: '(min-width: 1024px) 20vw, 42vw' },
  { image: 'paper-prototype', className: 'bottom-0 left-[14%] w-[36%] aspect-[4/5] z-30', speed: -380, sizes: '(min-width: 1024px) 18vw, 36vw' },
]

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  useScrollProgress(ref, 0.5)

  return (
    <section ref={ref} id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pb-28" style={{ '--progress': 0.5 } as React.CSSProperties}>
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8">
        <div>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Service design · Copenhagen · since {site.founded}
          </p>
          <h1 className="font-serif text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] tracking-tight text-balance">
            We make services people <em className="text-primary">don’t have to think</em> about.
          </h1>
          <p className="mt-7 max-w-xl text-lg text-muted-foreground">
            Tidsrum is a studio of {site.people} researchers, designers and engineers. We help transport companies,
            cities and retailers take the queues, forms and phone calls out of everyday services, and we measure
            what changed.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#work">
                See the work <ArrowDown />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`mailto:${site.email}`}>
                Start a conversation <ArrowRight />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto aspect-[1/1] w-full max-w-xl lg:max-w-none">
          {layers.map((layer, i) => (
            <div
              key={layer.image}
              className={`absolute overflow-hidden rounded-xl border-4 border-card shadow-xl will-change-transform ${layer.className}`}
              style={{ transform: `translate3d(0, calc((var(--progress) - 0.5) * ${layer.speed}px), 0)` }}
            >
              <Photo
                name={layer.image}
                sizes={layer.sizes}
                decorative={i > 0}
                className="size-full object-cover"
                fetchPriority={i === 0 ? 'high' : 'auto'}
              />
            </div>
          ))}
          <div
            className="absolute -right-4 bottom-8 z-40 rounded-full bg-peach px-5 py-3 font-serif text-xl shadow-lg"
            style={{ transform: 'translate3d(0, calc((var(--progress) - 0.5) * -480px), 0) rotate(-4deg)' }}
          >
            six cases, all measured
          </div>
        </div>
      </div>
    </section>
  )
}
