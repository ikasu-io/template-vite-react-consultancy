export interface Person {
  name: string
  role: string
  /** One line about them. */
  line: string
}

// Shown with initials, no photos. Add someone: add an object.
export const team: Person[] = [
  { name: 'Signe Holm', role: 'Partner, service design', line: 'Used to run a citizen service desk. Still answers the phone.' },
  { name: 'Jonas Brix', role: 'Partner, data', line: 'Turns call logs and ticket data into the one number that matters.' },
  { name: 'Amira Haddad', role: 'Research lead', line: 'Has interviewed people in waiting rooms in nine countries.' },
  { name: 'Lukas Ferreira', role: 'Engineering', line: 'Builds the prototypes that become the product.' },
  { name: 'Freja Nørgaard', role: 'Design', line: 'Makes forms disappear, one field at a time.' },
  { name: 'Theo Lindqvist', role: 'Strategy', line: 'Writes the business case before and checks it after.' },
]
