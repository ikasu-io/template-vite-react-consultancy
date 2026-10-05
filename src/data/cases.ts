import type { ImageName } from './images'

export type Sector = 'public' | 'transport' | 'retail' | 'utilities'

export const sectors: Record<Sector, string> = {
  public: 'Public sector',
  transport: 'Transport',
  retail: 'Retail',
  utilities: 'Utilities',
}

export interface Case {
  /** Short id, used for the link to the case (#case-<slug>). */
  slug: string
  client: string
  sector: Sector
  year: number
  title: string
  /** The problem in one sentence, shown on the card. */
  problem: string
  /** What we did, one paragraph per entry, shown in the full case. */
  work: string[]
  /** The headline result: a big value and what it measures. */
  result: { value: string; label: string }
  /** The key metric month by month, drawn as a chart. */
  metric: {
    name: string
    unit: string
    /** First month of `values`, as YYYY-MM. */
    start: string
    values: number[]
    /** Index in `values` of the month the new service launched. */
    launch: number
    /** True when going down is the good direction (waiting times, calls). */
    lowerIsBetter?: boolean
  }
  image: ImageName
}

// One object per case, newest first. Add a case: copy an object and change
// it; the cards, the filter and the charts follow.
export const cases: Case[] = [
  {
    slug: 'nordhavn-refunds',
    client: 'Nordhavn Transit',
    sector: 'transport',
    year: 2025,
    title: 'Refunds in two taps',
    problem: 'Getting money back for a cancelled trip took a paper form and nineteen days.',
    work: [
      'We rode the delayed trains with the people who ask for refunds and read 400 of their complaints. Most were not about the money but about having to prove a delay the company already knew about.',
      'Together with the ticketing team we turned the refund round: the app now offers it when a trip is cancelled, with the amount filled in. Paper forms stay for those who want them.',
    ],
    result: { value: '−89%', label: 'days to a refund' },
    metric: {
      name: 'Average days to a refund',
      unit: 'days',
      start: '2024-01',
      values: [19, 18, 20, 19, 21, 19, 18, 19, 12, 6, 4, 3, 2.6, 2.4, 2.1, 2.2, 2.0, 2.1],
      launch: 8,
      lowerIsBetter: true,
    },
    image: 'tram-stop',
  },
  {
    slug: 'ostervig-moving',
    client: 'City of Østervig',
    sector: 'public',
    year: 2025,
    title: 'Moving house, told once',
    problem: 'Residents who moved had to tell seven departments, and called the city to ask which.',
    work: [
      'Six weeks at the citizen service desk, listening in on calls about moving. We mapped every letter, form and office a move touches.',
      'One online notice now reaches all seven departments: parking permits, waste collection, school places and the rest. The desk staff helped design it and now answer the calls that are left.',
    ],
    result: { value: '−62%', label: 'calls about moving' },
    metric: {
      name: 'Calls about moving house per month',
      unit: 'calls',
      start: '2024-03',
      values: [2380, 2450, 2610, 2720, 2530, 2410, 2350, 1890, 1420, 1180, 1050, 980, 940, 960, 910, 900],
      launch: 7,
      lowerIsBetter: true,
    },
    image: 'field-research',
  },
  {
    slug: 'brask-prescriptions',
    client: 'Brask Pharmacies',
    sector: 'retail',
    year: 2024,
    title: 'Prescriptions ready when you arrive',
    problem: 'Customers queued for a prescription that was then prepared while they waited.',
    work: [
      'We timed 1,200 visits in four pharmacies and found that most waiting happened after the queue, not in it.',
      'A message now tells customers when their prescription is packed, and a shelf by the door holds the ready ones. The counter is for questions again.',
    ],
    result: { value: '4 min', label: 'average wait, down from 14' },
    metric: {
      name: 'Average wait at the counter',
      unit: 'min',
      start: '2023-09',
      values: [14, 13.5, 15, 14.2, 13.8, 14.6, 9.5, 7, 5.6, 4.8, 4.4, 4.1, 4.2, 3.9],
      launch: 6,
      lowerIsBetter: true,
    },
    image: 'pharmacy',
  },
  {
    slug: 'kollund-library-card',
    client: 'Kollund Libraries',
    sector: 'public',
    year: 2024,
    title: 'A library card on the phone',
    problem: 'Joining the library meant coming in with ID during opening hours.',
    work: [
      'Interviews with people who had never joined, at the station, the gym and the job centre. The card was not the problem; the visit to get one was.',
      'Sign-up now takes two minutes with the national digital ID, and the card lives in the phone wallet. The kiosks in all branches read it.',
    ],
    result: { value: '3.4×', label: 'new members a month' },
    metric: {
      name: 'New members per month',
      unit: 'members',
      start: '2023-06',
      values: [118, 124, 131, 109, 122, 115, 127, 240, 330, 365, 390, 402, 397, 415, 410],
      launch: 7,
    },
    image: 'library',
  },
  {
    slug: 'vind-first-visit',
    client: 'Vind Energi Service',
    sector: 'utilities',
    year: 2023,
    title: 'Fixed on the first visit',
    problem: 'Wind turbine technicians often arrived without the part or the history they needed.',
    work: [
      'We went out on the boats with three repair crews and followed a dozen jobs from the first alarm to the closed work order.',
      'A tablet app built with their engineers shows each turbine’s history and checks the parts list before the boat leaves. It works offline, out at sea.',
    ],
    result: { value: '84%', label: 'repairs fixed on the first visit' },
    metric: {
      name: 'Repairs fixed on the first visit',
      unit: '%',
      start: '2022-11',
      values: [61, 59, 63, 60, 62, 64, 61, 70, 76, 79, 81, 83, 82, 84, 85, 84],
      launch: 7,
    },
    image: 'paper-prototype',
  },
  {
    slug: 'hjem-repairs',
    client: 'Hjem Housing',
    sector: 'public',
    year: 2023,
    title: 'Repairs reported in a minute',
    problem: 'Tenants could only report a broken tap by phone, on weekdays from 9 to 12.',
    work: [
      'With tenants from three estates we drew up the twenty repairs that make up most calls, in their words, not the caretakers’.',
      'Reporting now works from a photo and a few taps, any time; the caretaker gets the job with the photo. The phone line is still there and now gets through.',
    ],
    result: { value: '71%', label: 'of repairs reported online' },
    metric: {
      name: 'Repairs reported online',
      unit: '%',
      start: '2022-08',
      values: [12, 11, 13, 12, 14, 13, 31, 44, 52, 58, 63, 66, 69, 71],
      launch: 6,
    },
    image: 'workshop-hands',
  },
]
