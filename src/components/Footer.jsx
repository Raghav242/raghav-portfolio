import { navItems, profile } from '../data/content'
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">{profile.name}</span>
          <span className="footer__role">{profile.role} · {profile.location}</span>
        </div>

        <nav className="footer__links" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <GithubIcon width="17" height="17" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon width="17" height="17" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Send an email">
            <MailIcon width="17" height="17" />
          </a>
        </div>
      </div>

      <div className="container footer__base">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React and Vite.</p>
      </div>
    </footer>
  )
}
