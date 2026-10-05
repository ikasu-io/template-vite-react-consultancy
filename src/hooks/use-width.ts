import { useEffect, useState, type RefObject } from 'react'

/** The measured width of an element in pixels, for charts to build their scales from. */
export function useWidth(ref: RefObject<Element | null>, initial: number, enabled = true) {
  const [width, setWidth] = useState(initial)
  useEffect(() => {
    const el = ref.current
    if (!el || !enabled) return
    const observer = new ResizeObserver(([entry]) => setWidth(Math.round(entry.contentRect.width)))
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, enabled])
  return width
}
