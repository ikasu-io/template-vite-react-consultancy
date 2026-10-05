export interface Quote {
  text: string
  name: string
  role: string
}

export const quotes: Quote[] = [
  {
    text: 'They spent more time behind our counters than our area managers do. The result was obvious once they showed it to us.',
    name: 'Operations director',
    role: 'Brask Pharmacies',
  },
  {
    text: 'People now thank us for a cancelled train. That has never happened before.',
    name: 'Head of customer service',
    role: 'Nordhavn Transit',
  },
  {
    text: 'Our desk staff designed half of it. That is why it still works two years later.',
    name: 'Head of citizen services',
    role: 'City of Østervig',
  },
]
