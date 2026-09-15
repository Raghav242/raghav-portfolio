import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view so the nav can highlight it.
 * Uses a band across the upper-middle of the viewport rather than a single
 * line, so short sections still register.
 */
export function useScrollSpy(ids, offset = 96) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY

      // Bottom of the page always resolves to the last section, which would
      // otherwise be unreachable when it is shorter than the viewport.
      if (window.innerHeight + scrollY >= document.body.offsetHeight - 24) {
        setActiveId(ids[ids.length - 1])
        return
      }

      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop - offset <= scrollY) current = id
      }
      setActiveId(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, offset])

  return activeId
}
