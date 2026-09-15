import { useEffect, useState } from 'react'
import { navItems, profile } from '../data/content'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { asset } from '../lib/asset'
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './Icons'
import './Navbar.css'

const sectionIds = navItems.map((item) => item.id)

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock the page behind the mobile menu, and let Escape close it.
  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const isDark = theme === 'dark'

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a
          href="#home"
          className="nav__brand"
          onClick={() => setMenuOpen(false)}
          aria-label={`${profile.name} — back to top`}
        >
          <span className="nav__monogram">{profile.initials}</span>
          <span className="nav__brand-text">{profile.shortName}</span>
        </a>

        <nav className="nav__links" aria-label="Section navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__link ${activeId === item.id ? 'is-active' : ''}`}
              aria-current={activeId === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="nav__icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <a className="btn btn--primary nav__cta" href={asset(profile.resume)} download>
            Resume
          </a>

          <button
            type="button"
            className="nav__icon-btn nav__burger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div
        className={`nav__sheet ${menuOpen ? 'is-open' : ''}`}
        hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      >
        <nav className="nav__sheet-inner" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__sheet-link ${activeId === item.id ? 'is-active' : ''}`}
            >
              {item.label}
            </a>
          ))}
          <a className="btn btn--primary nav__sheet-cta" href={asset(profile.resume)} download>
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  )
}
