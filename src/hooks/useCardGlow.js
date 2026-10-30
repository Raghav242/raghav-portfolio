import { useEffect } from 'react'
import { useMediaQuery } from './useMediaQuery'

/**
 * Tracks the cursor within whichever card under `ref` matches `selector`,
 * writing its position to `--mx` / `--my` on that card for CSS to paint a
 * highlight at. One delegated listener covers every card; the rect is read at
 * most once per frame, and nothing is wired up on touch screens.
 */
export function useCardGlow(ref, selector) {
  const finePointer = useMediaQuery('(hover: hover) and (pointer: fine)')

  useEffect(() => {
    const root = ref.current
    if (!root || !finePointer) return

    let frame = 0
    let card = null
    let pointer = null

    const tick = () => {
      frame = 0
      if (!card) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${(pointer.x - rect.left).toFixed(1)}px`)
      card.style.setProperty('--my', `${(pointer.y - rect.top).toFixed(1)}px`)
    }

    const onMove = (event) => {
      if (event.pointerType === 'touch') return
      card = event.target.closest(selector)
      pointer = { x: event.clientX, y: event.clientY }
      if (card && !frame) frame = requestAnimationFrame(tick)
    }

    root.addEventListener('pointermove', onMove, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      root.removeEventListener('pointermove', onMove)
    }
  }, [ref, selector, finePointer])
}
