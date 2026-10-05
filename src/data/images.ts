// Every photo on the site, with its alt text. Add a photo: put the file in
// src/assets/ (at least 1600 px wide), import it here with `?photo` and give
// it an alt text that says what is on it. Cases and the hero refer to photos
// by these names. The build makes WebP files in four widths from each.
import fieldResearch from '@/assets/field-research.jpg?photo'
import library from '@/assets/library.jpg?photo'
import paperPrototype from '@/assets/paper-prototype.jpg?photo'
import pharmacy from '@/assets/pharmacy.jpg?photo'
import studio from '@/assets/studio.jpg?photo'
import tramStop from '@/assets/tram-stop.jpg?photo'
import workshopHands from '@/assets/workshop-hands.jpg?photo'

export interface Photo {
  src: string
  srcset: string
  w: number
  h: number
  alt: string
}

export const images = {
  studio: {
    ...studio,
    alt: 'Our studio in an old warehouse: a long oak table, laptops and a wall of sticky notes',
  },
  'workshop-hands': {
    ...workshopHands,
    alt: 'Hands arranging paper cards into a journey map on a table',
  },
  'tram-stop': {
    ...tramStop,
    alt: 'A tram arriving at a stop on a rainy evening, people with umbrellas',
  },
  library: {
    ...library,
    alt: 'A light public library with wooden shelves and a self-service kiosk',
  },
  pharmacy: {
    ...pharmacy,
    alt: 'Inside a calm pharmacy: white shelves and a counter with a card terminal',
  },
  'paper-prototype': {
    ...paperPrototype,
    alt: 'Paper prototypes of phone screens on a cutting mat with a pencil and ruler',
  },
  'field-research': {
    ...fieldResearch,
    alt: 'A researcher with a notebook watching people at a service counter in a town hall',
  },
} satisfies Record<string, Photo>

export type ImageName = keyof typeof images
