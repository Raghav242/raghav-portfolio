/**
 * Visit counting for a static site.
 *
 * GitHub Pages can't run a backend, so the counters live in Abacus — a free,
 * keyless counter API. `hit` increments a key and returns the new value; `get`
 * reads it without incrementing (and 404s until the first hit creates it).
 *
 * - `visits`   — one per browser session, so refreshes and in-page navigation
 *                don't inflate it.
 * - `visitors` — one per browser, ever, marked with a localStorage flag.
 *
 * Nothing is sent from the dev server or from any local build (`npm run
 * preview`, screenshot tooling), so local work never pollutes the counts.
 *
 * The counters were made with Abacus's /create, which issues admin keys; those
 * live in .env.local and `npm run count:reset` uses them to zero the counts.
 * (The original `raghav242-portfolio` counters were created implicitly by a
 * first hit, have no admin key, and can't be reset — hence `-v2`.)
 */
const API = 'https://abacus.jasoncameron.dev'
export const NAMESPACE = 'raghav242-portfolio-v2'

const LOCAL_HOSTS = ['localhost', '127.0.0.1', '[::1]']

const VISITOR_FLAG = 'portfolio-visitor'
const SESSION_FLAG = 'portfolio-visit'

function hit(key) {
  return fetch(`${API}/hit/${NAMESPACE}/${key}`, { cache: 'no-store' }).catch(() => {})
}

function hasFlag(storage, key) {
  try {
    if (storage.getItem(key)) return true
    storage.setItem(key, '1')
  } catch {
    // Storage blocked (private mode, disabled cookies) — count the visit anyway.
  }
  return false
}

export function recordVisit() {
  if (import.meta.env.DEV || LOCAL_HOSTS.includes(window.location.hostname)) return

  if (!hasFlag(window.sessionStorage, SESSION_FLAG)) hit('visits')
  if (!hasFlag(window.localStorage, VISITOR_FLAG)) hit('visitors')
}

async function get(key) {
  const res = await fetch(`${API}/get/${NAMESPACE}/${key}`, { cache: 'no-store' })
  if (res.status === 404) return 0
  if (!res.ok) throw new Error(`Counter request failed (${res.status})`)
  return (await res.json()).value
}

export async function fetchCounts() {
  const [visits, visitors] = await Promise.all([get('visits'), get('visitors')])
  return { visits, visitors }
}
