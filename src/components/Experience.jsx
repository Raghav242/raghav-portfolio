import { useEffect, useRef, useState } from 'react'
import { experience } from '../data/content'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { asset } from '../lib/asset'
import Section from './Section'
import './Experience.css'

/** Height of the always-visible slice of the description on mobile, in px. */
const PREVIEW_HEIGHT = 72

function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

/** Falls back to the company initials if the logo file is missing. */
function CompanyLogo({ src, initials, company }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <span className="job__logo job__logo--text" aria-hidden="true">
        {initials}
      </span>
    )
  }

  return (
    <span className="job__logo">
      <img
        src={asset(src)}
        alt={`${company} logo`}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </span>
  )
}

/** The always-visible identity row: logo, company, role, dates. */
function JobHeader({ job }) {
  return (
    <>
      <CompanyLogo src={job.logo} initials={job.initials} company={job.company} />

      <span className="job__identity">
        <span className="job__company">{job.company}</span>
        <span className="job__role">{job.role}</span>
      </span>

      <span className="job__meta">
        <span className="job__period">{job.period}</span>
        <span className="job__location">{job.location}</span>
      </span>
    </>
  )
}

function JobDetail({ job }) {
  return (
    <>
      <p className="job__summary">{job.summary}</p>

      {job.metrics?.length > 0 && (
        <ul className="metrics">
          {job.metrics.map((metric) => (
            <li className="metric" key={metric.label}>
              <span className="metric__value">{metric.value}</span>
              <span className="metric__label">{metric.label}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="job__narrative">
        {job.narrative.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <ul className="job__stack">
        {job.stack.map((tech) => (
          <li className="chip" key={tech}>
            {tech}
          </li>
        ))}
      </ul>
    </>
  )
}

/**
 * Desktop: the company list and the selected role's detail sit side by side, so
 * the section costs the height of one role rather than all three.
 */
function SplitLayout({ activeId, onSelect }) {
  const activeJob = experience.find((job) => job.id === activeId) ?? experience[0]
  const tabRefs = useRef([])

  // A tablist is expected to be arrow-navigable, with only the selected tab in
  // the tab order (roving tabindex).
  const onKeyDown = (event) => {
    const current = experience.findIndex((job) => job.id === activeJob.id)
    const last = experience.length - 1
    let next = null

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = current === last ? 0 : current + 1
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = current === 0 ? last : current - 1
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = last

    if (next === null) return
    event.preventDefault()
    onSelect(experience[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <div className="xp">
      <div
        className="xp__list"
        role="tablist"
        aria-label="Companies"
        aria-orientation="vertical"
      >
        {experience.map((job, index) => {
          const isActive = job.id === activeJob.id
          return (
            <button
              key={job.id}
              type="button"
              role="tab"
              id={`tab-${job.id}`}
              ref={(el) => {
                tabRefs.current[index] = el
              }}
              className={`xp__tab ${isActive ? 'is-active' : ''}`}
              aria-selected={isActive}
              aria-controls={`detail-${job.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSelect(job.id)}
              onKeyDown={onKeyDown}
            >
              <JobHeader job={job} />
            </button>
          )
        })}
      </div>

      <div
        className="xp__panel"
        role="tabpanel"
        id={`detail-${activeJob.id}`}
        aria-labelledby={`tab-${activeJob.id}`}
        key={activeJob.id}
      >
        <JobDetail job={activeJob} />
      </div>
    </div>
  )
}

/** Mobile: accordion. Closing minimizes the detail to a faded preview. */
function AccordionCard({ job, isOpen, onToggle }) {
  const innerRef = useRef(null)
  const [fullHeight, setFullHeight] = useState(null)

  // Measure so the open state animates to an exact height rather than a
  // guessed max-height ceiling.
  useEffect(() => {
    const el = innerRef.current
    if (!el || typeof ResizeObserver === 'undefined') return

    const observer = new ResizeObserver(() => setFullHeight(el.scrollHeight))
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const maxHeight = isOpen
    ? fullHeight === null
      ? 'none'
      : `${fullHeight}px`
    : `${PREVIEW_HEIGHT}px`

  return (
    <article className={`job ${isOpen ? 'is-open' : ''}`}>
      <h3 className="job__heading">
        <button
          type="button"
          className="job__trigger"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`panel-${job.id}`}
        >
          <JobHeader job={job} />
          <span className="job__chevron">
            <ChevronIcon />
          </span>
        </button>
      </h3>

      <div
        className={`job__panel ${isOpen ? '' : 'is-minimized'}`}
        id={`panel-${job.id}`}
        style={{ maxHeight }}
      >
        <div className="job__panel-inner" ref={innerRef}>
          <div className="job__body">
            <JobDetail job={job} />
          </div>
        </div>
      </div>
    </article>
  )
}

function AccordionLayout({ activeId, onSelect }) {
  return (
    <ol className="timeline">
      {experience.map((job) => (
        <li className="timeline__item" key={job.id}>
          <AccordionCard
            job={job}
            isOpen={activeId === job.id}
            onToggle={() => onSelect(activeId === job.id ? null : job.id)}
          />
        </li>
      ))}
    </ol>
  )
}

export default function Experience() {
  // Matches the 900px breakpoint the stylesheets switch on.
  const isDesktop = useMediaQuery('(min-width: 900px)')

  // The tablist always needs a selection; the accordion does not. Keeping them
  // apart lets every card start collapsed on mobile, which is worth about a
  // screen of scrolling, without leaving the desktop panel empty.
  const [selectedId, setSelectedId] = useState(experience[0].id)
  const [openId, setOpenId] = useState(null)

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      lede={isDesktop ? 'Select a company to read the detail.' : 'Tap a role to expand it.'}
    >
      {/* One stable wrapper carries the reveal, so swapping layouts on resize
          can't strip the observer's flag from a freshly mounted subtree. */}
      <div className="reveal">
        {isDesktop ? (
          <SplitLayout activeId={selectedId} onSelect={setSelectedId} />
        ) : (
          <AccordionLayout activeId={openId} onSelect={setOpenId} />
        )}
      </div>
    </Section>
  )
}
