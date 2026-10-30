import { profile } from '../data/content'
import { ArrowRightIcon, GithubIcon, LinkedinIcon, MailIcon } from './Icons'
import Section from './Section'
import './Contact.css'

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something."
      lede="Open to software engineering opportunities. Based in Boston and open to relocation."
      alt
    >
      <div className="contact reveal">
        <a className="btn btn--primary contact__button" href={`mailto:${profile.email}`}>
          <MailIcon />
          <span>{profile.email}</span>
          <ArrowRightIcon width="16" height="16" />
        </a>

        <div className="contact__links">
          <a
            className="btn btn--ghost"
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon width="17" height="17" />
            GitHub
          </a>
          <a
            className="btn btn--ghost"
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon width="17" height="17" />
            LinkedIn
          </a>
        </div>
      </div>

      <p className="contact__phone reveal" style={{ '--reveal-delay': '80ms' }}>
        Prefer a call?{' '}
        <a href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}>{profile.phone}</a>
      </p>
    </Section>
  )
}
