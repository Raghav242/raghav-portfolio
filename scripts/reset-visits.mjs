/**
 * Zeroes the visitor counters on Abacus.
 *
 *   npm run count:reset
 *
 * Needs the admin keys that Abacus issued when the counters were created,
 * read from .env.local (gitignored). Those keys are shown only once by Abacus;
 * if they're lost, the counters can't be reset, only replaced by changing
 * NAMESPACE in src/lib/visits.js.
 */
const API = 'https://abacus.jasoncameron.dev'
const NAMESPACE = 'raghav242-portfolio-v2'

const counters = [
  { key: 'visits', env: 'ABACUS_VISITS_KEY' },
  { key: 'visitors', env: 'ABACUS_VISITORS_KEY' },
]

const missing = counters.filter(({ env }) => !process.env[env])
if (missing.length) {
  console.error(`Missing ${missing.map(({ env }) => env).join(', ')} in .env.local.`)
  process.exit(1)
}

let failed = false
for (const { key, env } of counters) {
  const res = await fetch(`${API}/reset/${NAMESPACE}/${key}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env[env]}` },
  })
  if (res.ok) {
    console.log(`${key}: reset to ${(await res.json()).value}`)
  } else {
    failed = true
    console.error(`${key}: reset failed (${res.status}) ${await res.text()}`)
  }
}
process.exit(failed ? 1 : 0)
