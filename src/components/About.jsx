import { useState } from 'react'
import { about, education } from '../data/content'
import { GraduationIcon } from './Icons'
import Section from './Section'
import './About.css'

export default function About() {
  // Phones show a trimmed lead with the rest behind a tap; from 640px up the
  // CSS lifts the clamp and hides the toggle, so this state stops mattering.
  const [introExpanded, setIntroExpanded] = useState(false)

  return (
    <Section
      id="about"
      eyebrow="About"
      title="A bit more about me"
      alt
    >
      <div className="about">
        <div className="about__main">
          <div
            id="about-intro"
            className={`about__prose reveal ${
              introExpanded ? '' : 'about__prose--clamped'
            }`}
          >
            {about.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <button
            type="button"
            className="about__more"
            onClick={() => setIntroExpanded((open) => !open)}
            aria-expanded={introExpanded}
            aria-controls="about-intro"
          >
            {introExpanded ? 'Show less' : 'Read more'}
          </button>
        </div>

        <aside className="about__side">
          <dl className="about__facts reveal" style={{ '--reveal-delay': '80ms' }}>
            {about.facts.map((fact) => (
              <div className="about__fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="about__education reveal" style={{ '--reveal-delay': '140ms' }}>
            <h3 className="about__education-title">
              <GraduationIcon width="17" height="17" />
              Education
            </h3>
            {education.map((entry) => (
              <article className="edu" key={entry.school}>
                <div className="edu__head">
                  <h4 className="edu__school">{entry.school}</h4>
                  {entry.current && <span className="edu__badge">In progress</span>}
                </div>
                <p className="edu__degree">{entry.degree}</p>
                <p className="edu__meta">
                  <span>{entry.period}</span>
                  <span className="edu__dot">·</span>
                  <span>{entry.location}</span>
                  {entry.detail && (
                    <>
                      <span className="edu__dot">·</span>
                      <span>{entry.detail}</span>
                    </>
                  )}
                </p>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </Section>
  )
}
