import { useEffect, type RefObject } from 'react'

/**
 * Writes how far an element has scrolled through the viewport into the CSS
 * variable `--progress` on that element: 0 when its top enters at the
 * bottom of the screen, 1 when its bottom leaves at the top. CSS then turns
 * it into transforms (parallax) or widths (the approach timeline). Runs in
 * one requestAnimationFrame per scroll event and never re-renders React.
 * Off for people who prefer reduced motion: the variable stays at `rest`.
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>, rest = 0) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.setProperty('--progress', String(rest))
      return
    }
    let frame = 0
    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const total = rect.height + window.innerHeight
      const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / total))
      el.style.setProperty('--progress', progress.toFixed(4))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ref, rest])
}
