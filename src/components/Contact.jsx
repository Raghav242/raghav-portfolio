import { profile } from '../data/content'
import {
  ArrowRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from './Icons'
import Section from './Section'
import './Contact.css'

const channels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^\d+]/g, '')}`,
    Icon: PhoneIcon,
  },
  {
    label: 'LinkedIn',
    value: 'Connect with me',
    href: profile.links.linkedin,
    external: true,
    Icon: LinkedinIcon,
  },
  {
    label: 'GitHub',
    value: 'See my code',
    href: profile.links.github,
    external: true,
    Icon: GithubIcon,
  },
]

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      lede="Open to software engineering roles. Email is fastest — I reply within a day."
      alt
    >
      <div className="contact">
        <div className="contact__cta reveal">
          <p className="contact__cta-label">
            <MapPinIcon width="15" height="15" />
            Based in {profile.location} · open to relocation
          </p>
          <h3 className="contact__cta-title">Have a role or an idea in mind?</h3>
          <p className="contact__cta-text">
            Whether it's a backend team, a full-stack product, or something AI-shaped —
            send a note and let's talk.
          </p>
          <a className="btn btn--primary contact__button" href={`mailto:${profile.email}`}>
            <MailIcon />
            {profile.email}
            <ArrowRightIcon width="16" height="16" />
          </a>
        </div>

        <ul className="contact__channels">
          {channels.map(({ label, value, href, external, Icon }, index) => (
            <li key={label} className="reveal" style={{ '--reveal-delay': `${index * 70}ms` }}>
              <a
                className="channel"
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
              >
                <span className="channel__icon">
                  <Icon width="17" height="17" />
                </span>
                <span className="channel__body">
                  <span className="channel__label">{label}</span>
                  <span className="channel__value">{value}</span>
                </span>
                <ArrowRightIcon width="16" height="16" className="channel__arrow" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
