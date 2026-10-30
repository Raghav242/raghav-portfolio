import { useEffect } from 'react'
import { useMediaQuery } from './useMediaQuery'

// Where the light rests when no cursor is driving it. Mirrors the `--spot-x` /
// `--spot-y` fallbacks in Hero.css, which are what touch and reduced-motion
// visitors see.
const REST_X = 0.5
const REST_Y = 0.42

// Share of the remaining distance covered per frame: the light trails the
// cursor slightly rather than snapping to it.
const EASE = 0.12

/**
 * Drives the hero's cursor spotlight by writing `--spot-x` / `--spot-y` onto
 * the element. Everything runs outside React — pointer events only record the
 * latest coordinates, and a single rAF loop eases toward them, reading the
 * rect once per frame and stopping as soon as the light settles.
 */
export function useSpotlight(ref) {
  const finePointer = useMediaQuery('(hover: hover) and (pointer: fine)')
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const enabled = finePointer && !reducedMotion

  useEffect(() => {
    const el = ref.current
    if (!el || !enabled) return

    let frame = 0
    let pointer = null
    let current = null

    const tick = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const targetX = pointer ? pointer.x - rect.left : rect.width * REST_X
      const targetY = pointer ? pointer.y - rect.top : rect.height * REST_Y

      if (!current) current = { x: rect.width * REST_X, y: rect.height * REST_Y }

      const dx = targetX - current.x
      const dy = targetY - current.y
      const settled = Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5

      current.x = settled ? targetX : current.x + dx * EASE
      current.y = settled ? targetY : current.y + dy * EASE

      el.style.setProperty('--spot-x', `${current.x.toFixed(1)}px`)
      el.style.setProperty('--spot-y', `${current.y.toFixed(1)}px`)

      if (!settled) frame = requestAnimationFrame(tick)
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(tick)
    }

    const onMove = (event) => {
      if (event.pointerType === 'touch') return
      pointer = { x: event.clientX, y: event.clientY }
      schedule()
    }

    // Drift back to the resting point rather than vanishing.
    const onLeave = () => {
      pointer = null
      schedule()
    }

    el.addEventListener('pointermove', onMove, { passive: true })
    el.addEventListener('pointerleave', onLeave)

    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      el.style.removeProperty('--spot-x')
      el.style.removeProperty('--spot-y')
    }
  }, [ref, enabled])
}
