import { about, education } from '../data/content'
import { GraduationIcon } from './Icons'
import Section from './Section'
import './About.css'

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A bit more about me"
      lede="What I work on, and how I work."
      alt
    >
      <div className="about">
        <div className="about__main">
          <div className="about__prose reveal">
            {about.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <ul className="capabilities">
            {about.capabilities.map((capability, index) => (
              <li
                className="capability reveal"
                key={capability.title}
                style={{ '--reveal-delay': `${index * 70}ms` }}
              >
                <span className="capability__index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="capability__title">{capability.title}</h3>
                <p className="capability__text">{capability.text}</p>
              </li>
            ))}
          </ul>
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
