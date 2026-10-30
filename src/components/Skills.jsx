import { useState } from 'react'
import { brandIcons } from '../data/brandIcons'
import { practices, skills } from '../data/content'
import Section from './Section'
import './Skills.css'

/** Two letters read better than one on a small tile, but never past a space. */
function monogram(name) {
  const first = name.split(/[\s.]/)[0]
  return first.length > 1 ? first.slice(0, 2) : first
}

/**
 * Resolves an entry to its logo and the colors used in each theme. An explicit
 * `hex` in content.js wins over the brand palette — that lets Java borrow the
 * OpenJDK mark while keeping its own orange.
 */
function resolve({ name, slug, hex }) {
  const icon = slug ? brandIcons[slug] : null
  const light = hex || icon?.hex || '6b7280'
  const dark = hex || icon?.darkHex || icon?.hex || '9aa3b2'
  return { icon, light, dark, label: monogram(name) }
}

const totalCount = skills.reduce((sum, group) => sum + group.items.length, 0)
const featuredCount = skills.reduce(
  (sum, group) => sum + group.items.filter((item) => item.featured).length,
  0,
)

export default function Skills() {
  const [showAll, setShowAll] = useState(false)

  // The default view is the featured core; the full list adds everything else
  // in place, including groups that have no featured items at all.
  const groups = skills
    .map((group) => ({
      ...group,
      fullViewOnly: !group.items.some((item) => item.featured),
      items: showAll ? group.items : group.items.filter((item) => item.featured),
    }))
    .filter((group) => group.items.length > 0)

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I work with"
      lede="What I reach for across backend, full-stack, and AI work."
    >
      <div className="skills" id="skills-list">
        {groups.map((group, index) => (
          <div
            className="skills__group reveal"
            key={group.group}
            style={{ '--reveal-delay': `${index * 60}ms` }}
            // Full-view-only groups mount after the reveal observer has run, so
            // they start out revealed. The rest never carry a React-managed
            // value, so toggling can't strip the flag the observer set.
            data-revealed={group.fullViewOnly ? 'true' : undefined}
          >
            <h3 className="skills__group-title">{group.group}</h3>
            <ul className="skills__list">
              {group.items.map((item) => {
                const { icon, light, dark, label } = resolve(item)
                return (
                  <li
                    className="skill"
                    key={item.name}
                    style={{ '--brand': `#${light}`, '--brand-dark': `#${dark}` }}
                  >
                    {icon ? (
                      <svg
                        className="skill__logo"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d={icon.path} fill="currentColor" />
                      </svg>
                    ) : (
                      <span className="skill__logo skill__logo--text" aria-hidden="true">
                        {label}
                      </span>
                    )}
                    <span className="skill__name">{item.name}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>

      {showAll && (
        <p className="skills__practices">
          <span className="skills__practices-label">Ways of working</span>
          {practices.join(' · ')}
        </p>
      )}

      <button
        type="button"
        className="skills__toggle"
        onClick={() => setShowAll((all) => !all)}
        aria-expanded={showAll}
        aria-controls="skills-list"
      >
        {showAll ? 'Show fewer' : `View all technologies (${totalCount - featuredCount} more)`}
      </button>
    </Section>
  )
}
