import { useId, useRef, useState } from 'react'
import { profile, projects } from '../data/content'
import { useCardGlow } from '../hooks/useCardGlow'
import { ArrowRightIcon, ExternalLinkIcon, GithubIcon } from './Icons'
import ProjectArt from './ProjectArt'
import Section from './Section'
import './Projects.css'

/**
 * The card face carries everything needed to understand the project; the
 * details panel only adds the why and the how. It stays mounted and `inert`
 * while closed, so it can animate open without ever being reachable hidden.
 */
function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false)
  const detailsId = useId()
  const inProgress = project.status === 'in-progress'
  const { details } = project

  return (
    <article
      className={`project reveal ${project.featured ? 'project--featured' : ''} ${
        open ? 'is-open' : ''
      }`}
      style={{ '--reveal-delay': `${index * 70}ms` }}
    >
      <span className="project__glow" aria-hidden="true" />

      <div className="project__art">
        <ProjectArt kind={project.art} />
      </div>

      <div className="project__top">
        <h3 className="project__name">
          {project.name}
          {inProgress && <span className="project__badge">In Progress</span>}
        </h3>
        <div className="project__links">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} source on GitHub`}
            >
              <GithubIcon width="17" height="17" />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} live demo`}
            >
              <ExternalLinkIcon width="17" height="17" />
            </a>
          )}
        </div>
      </div>

      <p className="project__blurb">{project.blurb}</p>

      {project.stack.length > 0 && (
        <ul className="project__stack" aria-label="Built with">
          {project.stack.map((tech) => (
            <li className="chip" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      )}

      {project.planned?.length > 0 && (
        <p className="project__planned">
          <span className="project__planned-label">Planned</span>
          {project.planned.join(' · ')}
        </p>
      )}

      <div className="project__foot">
        <button
          type="button"
          className="project__explore"
          onClick={() => setOpen((isOpen) => !isOpen)}
          aria-expanded={open}
          aria-controls={detailsId}
        >
          {open ? 'Close details' : 'Explore project'}
          <ArrowRightIcon width="15" height="15" />
        </button>
      </div>

      <div id={detailsId} className="project__details" inert={!open}>
        <div className="project__details-inner">
          <h4>The problem</h4>
          <p>{details.problem}</p>

          <h4>{inProgress ? 'The idea' : 'What it does'}</h4>
          <p>{details.solution}</p>

          <h4>{details.featuresLabel ?? 'Highlights'}</h4>
          <ul className="project__features">
            {details.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          {details.tech && (
            <>
              <h4>Under the hood</h4>
              <p>{details.tech}</p>
            </>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const listRef = useRef(null)
  useCardGlow(listRef, '.project')

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      lede="Side projects where I pick the stack and go deep."
      alt
    >
      <div className="projects" ref={listRef}>
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.name} />
        ))}
      </div>

      <p className="projects__more reveal">
        More work lives on GitHub —{' '}
        <a href={profile.links.github} target="_blank" rel="noreferrer">
          browse the repositories
          <ArrowRightIcon width="15" height="15" />
        </a>
      </p>
    </Section>
  )
}
