import { useCallback, useEffect, useState } from 'react'
import { fetchCounts } from '../lib/visits.js'

const format = new Intl.NumberFormat('en-US')

export default function Dashboard() {
  const [counts, setCounts] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [updatedAt, setUpdatedAt] = useState(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      setCounts(await fetchCounts())
      setUpdatedAt(new Date())
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const tiles = [
    { label: 'Unique visitors', hint: 'Distinct browsers', value: counts?.visitors },
    { label: 'Total visits', hint: 'One per browser session', value: counts?.visits },
  ]

  return (
    <main className="count">
      <header className="count__head">
        <h1 className="count__title">Visitor count</h1>
        <button className="count__refresh" onClick={load} disabled={loading}>
          {loading ? 'Loading…' : 'Refresh'}
        </button>
      </header>

      {error && <p className="count__error">Couldn't load counts: {error}</p>}

      <div className="count__grid">
        {tiles.map((tile) => (
          <section key={tile.label} className="count__tile">
            <p className="count__label">{tile.label}</p>
            <p className="count__value">{tile.value == null ? '—' : format.format(tile.value)}</p>
            <p className="count__hint">{tile.hint}</p>
          </section>
        ))}
      </div>

      {counts?.visitors > 0 && (
        <p className="count__ratio">
          {(counts.visits / counts.visitors).toFixed(2)} visits per visitor
        </p>
      )}

      {updatedAt && (
        <p className="count__updated">Updated {updatedAt.toLocaleTimeString()}</p>
      )}
    </main>
  )
}
