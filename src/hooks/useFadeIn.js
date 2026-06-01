import { useEffect, useRef } from 'react'

// Fades an element in when it scrolls into view. `delay` (ms) staggers the
// reveal, but only for elements already on screen at load — sections scrolled
// into view later reveal immediately so they never feel laggy.
export function useFadeIn(delay = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const start = performance.now()
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const isInitial = performance.now() - start < 400
          el.style.transitionDelay = isInitial ? `${delay}ms` : '0ms'
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return ref
}
