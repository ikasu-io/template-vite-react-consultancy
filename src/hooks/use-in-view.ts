import { useEffect, useState, type RefObject } from 'react'

/** True once the element has scrolled into view (and stays true). */
export function useInView(ref: RefObject<Element | null>, margin = '0px 0px -15% 0px') {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || inView) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { rootMargin: margin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, margin, inView])
  return inView
}
