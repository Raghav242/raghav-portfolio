import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'

/**
 * Light is the default, regardless of the visitor's OS setting — dark mode is
 * opt-in via the toggle. Once picked, that choice persists across visits.
 */
function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'

  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'dark' || stored === 'light' ? stored : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)

    // Keeps the mobile browser chrome in step with the page background.
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0c0e13' : '#fbfbfd')
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      window.localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }, [])

  return { theme, toggleTheme }
}
