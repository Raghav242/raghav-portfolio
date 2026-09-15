import { useState } from 'react'
import { profile, stats } from '../data/content'
import {
  ArrowRightIcon,
  CodeIcon,
  FileIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
} from './Icons'
import './Hero.css'

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section id="home" className="hero">
      <div className="hero__backdrop" aria-hidden="true">
        <span className="hero__glow hero__glow--one" />
        <span className="hero__glow hero__glow--two" />
        <span className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__avatar-wrap reveal">
          <div className="hero__avatar">
            {photoFailed ? (
              <span className="hero__avatar-fallback">{profile.initials}</span>
            ) : (
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                onError={() => setPhotoFailed(true)}
                width="150"
                height="150"
              />
            )}
          </div>
        </div>

        <p className="hero__location reveal" style={{ '--reveal-delay': '60ms' }}>
          <MapPinIcon width="15" height="15" />
          {profile.location}
        </p>

        <h1 className="hero__name reveal" style={{ '--reveal-delay': '110ms' }}>
          Raghavendra <span className="hero__name-accent">Kulkarni</span>
        </h1>

        <p className="hero__role reveal" style={{ '--reveal-delay': '160ms' }}>
          {profile.role}
        </p>

        <p className="hero__tagline reveal" style={{ '--reveal-delay': '210ms' }}>
          {profile.tagline}
        </p>

        <div className="hero__actions reveal" style={{ '--reveal-delay': '260ms' }}>
          <a className="btn btn--primary" href="#projects">
            <CodeIcon />
            View My Work
          </a>
          <a className="btn btn--ghost" href={profile.resume} download>
            <FileIcon />
            Download Resume
          </a>
          <a className="btn btn--ghost" href="#contact">
            <MailIcon />
            Get In Touch
          </a>
        </div>

        <div className="hero__socials reveal" style={{ '--reveal-delay': '310ms' }}>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <GithubIcon width="19" height="19" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon width="19" height="19" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Send an email">
            <MailIcon width="19" height="19" />
          </a>
        </div>

        <dl className="hero__stats reveal" style={{ '--reveal-delay': '360ms' }}>
          {stats.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <dt className="hero__stat-value">{stat.value}</dt>
              <dd className="hero__stat-label">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to About">
        <span>Scroll</span>
        <ArrowRightIcon width="16" height="16" />
      </a>
    </section>
  )
}
