import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export default function NotFound() {
  const location = useLocation()

  useEffect(() => {
    document.title = 'Page not found · Tidsrum'
  }, [location.pathname])

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="font-serif text-8xl text-primary">404</p>
      <h1 className="font-serif text-4xl">This page took a different route.</h1>
      <p className="text-muted-foreground">
        There is nothing at <code className="rounded bg-muted px-1.5 py-0.5">{location.pathname}</code>.
      </p>
      <Button asChild>
        <Link to="/">Back to the home page</Link>
      </Button>
    </main>
  )
}
