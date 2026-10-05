import { site } from '@/data/site'
import { Logo } from './Navbar'

export function Footer() {
  return (
    <footer className="border-t border-paper/15 bg-ink py-10 text-sm text-paper/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <Logo className="text-paper" />
        <p className="max-w-2xl">
          {site.name} is a fictional studio: the clients, people, cases and figures are made up. This site, its texts
          and its images were generated with AI and are maintained with{' '}
          <a href="https://ikasu.io" className="text-paper underline underline-offset-4">
            Ikasu
          </a>
          .
        </p>
        <p>© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  )
}
