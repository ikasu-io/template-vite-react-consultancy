import { ArrowRight, Mail, MapPin } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { site } from '@/data/site'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="contact-heading" className="max-w-4xl font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.95]">
          Got a service people <em className="text-peach">complain about?</em>
        </h2>
        <p className="mt-8 max-w-xl text-lg text-paper/70">
          Tell us about it in a few lines. We answer within two working days, and the first conversation is always
          free.
        </p>
        <Button asChild size="lg" className="mt-10 bg-peach text-ink hover:bg-paper">
          <a href={`mailto:${site.email}?subject=A%20conversation`}>
            Start a conversation <ArrowRight />
          </a>
        </Button>
        <dl className="mt-20 grid gap-8 border-t border-paper/15 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <dt className="flex items-center gap-2 text-sm text-paper/60">
              <Mail className="size-4 text-peach" aria-hidden="true" /> Email
            </dt>
            <dd className="mt-1">
              <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="flex items-center gap-2 text-sm text-paper/60">
              <MapPin className="size-4 text-peach" aria-hidden="true" /> Studio
            </dt>
            <dd className="mt-1">
              {site.address.street}, {site.address.postcode} {site.address.city}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
