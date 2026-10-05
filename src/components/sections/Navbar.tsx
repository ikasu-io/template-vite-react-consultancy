import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { site } from '@/data/site'
import { cn } from '@/lib/utils'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#approach', label: 'Approach' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
]

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2 font-serif text-2xl leading-none', className)}>
      <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="var(--cobalt)" />
        <path d="M12 12 L12 3 A9 9 0 0 1 20.5 15 Z" fill="var(--peach)" />
      </svg>
      {site.name}
    </span>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-colors',
        scrolled || open ? 'border-b bg-background/90 backdrop-blur' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main">
        <a href="#top" aria-label={`${site.name}, back to the top`}>
          <Logo />
        </a>
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button asChild size="sm" className="hidden md:inline-flex">
          <a href={`mailto:${site.email}`}>Start a conversation</a>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </Button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="space-y-1 border-t px-4 pb-6 pt-3 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="block py-2 text-lg" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <Button asChild className="w-full">
              <a href={`mailto:${site.email}`}>Start a conversation</a>
            </Button>
          </li>
        </ul>
      )}
    </header>
  )
}
