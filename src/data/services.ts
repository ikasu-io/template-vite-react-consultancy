import type { LucideIcon } from 'lucide-react'
import { BarChart3, Layers, Search, Smartphone } from 'lucide-react'

export interface Service {
  title: string
  icon: LucideIcon
  text: string
  /** Short list of what this includes. */
  includes: string[]
}

export const services: Service[] = [
  {
    title: 'Research',
    icon: Search,
    text: 'We find out how people actually use a service: at the counter, on the phone, at the tram stop.',
    includes: ['Field studies', 'Interviews', 'Call and complaint analysis'],
  },
  {
    title: 'Service design',
    icon: Layers,
    text: 'We redesign the whole journey, including the parts nobody sees: forms, back offices, rules.',
    includes: ['Journey maps', 'Prototypes', 'Workshops with your staff'],
  },
  {
    title: 'Digital products',
    icon: Smartphone,
    text: 'We design and build the app or site that the new service needs, with your IT team, not around it.',
    includes: ['Interface design', 'Front-end development', 'Accessibility'],
  },
  {
    title: 'Measurement',
    icon: BarChart3,
    text: 'We agree on one number before we start and keep measuring it after launch, so you can see what changed.',
    includes: ['Baselines', 'Dashboards', 'Six-month review'],
  },
]
