import { useEffect } from 'react'

/**
 * Fades elements marked `.reveal` in as they enter the viewport. The content is
 * static, so one document-level observer set up after mount covers everything
 * and keeps the components free of animation plumbing.
 *
 * The revealed flag is a `data-` attribute rather than a class on purpose. React
 * rewrites `className` wholesale whenever a component's computed value changes,
 * which would silently strip an externally-added class from any element with a
 * dynamic className — the Experience cards toggle `is-open`, so they would blank
 * out on click. React never touches attributes it doesn't manage, so this sticks.
 */
export function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal')
    const reveal = (el) => {
      el.dataset.revealed = 'true'
    }

    if (!('IntersectionObserver' in window)) {
      targets.forEach(reveal)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          reveal(entry.target)
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
