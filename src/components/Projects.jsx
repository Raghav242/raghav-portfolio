import { useEffect, useRef, useState } from 'react'
import { profile, projects } from '../data/content'
import { useCardGlow } from '../hooks/useCardGlow'
import { ArrowRightIcon, CloseIcon, ExternalLinkIcon, GithubIcon } from './Icons'
import ProjectArt from './ProjectArt'
import Section from './Section'
import './Projects.css'

/** Chips shown on a card face; the rest are counted, and listed in the modal. */
const FACE_CHIPS = 3

function ProjectLinks({ project }) {
  return (
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
  )
}

/**
 * The face is a summary; everything else opens in a modal, so reading a
 * project never pushes the rest of the grid down the page. The name is the
 * button, and its ::after covers the card so the whole card is the target.
 */
function ProjectCard({ project, index, onOpen }) {
  const inProgress = project.status === 'in-progress'
  const extra = project.stack.length - FACE_CHIPS

  return (
    <article
      className={`project reveal ${project.featured ? 'project--featured' : ''}`}
      style={{ '--reveal-delay': `${index * 70}ms` }}
    >
      <span className="project__glow" aria-hidden="true" />

      <div className="project__art">
        <ProjectArt kind={project.art} />
      </div>

      <div className="project__top">
        <h3 className="project__name">
          <button
            type="button"
            className="project__open"
            onClick={() => onOpen(project)}
            aria-haspopup="dialog"
          >
            {project.name}
          </button>
          {inProgress && <span className="project__badge">In Progress</span>}
        </h3>
        <ProjectLinks project={project} />
        <ArrowRightIcon className="project__arrow" width="16" height="16" aria-hidden="true" />
      </div>

      <p className="project__blurb">{project.blurb}</p>

      {project.stack.length > 0 && (
        <ul className="project__stack" aria-label="Built with">
          {project.stack.slice(0, FACE_CHIPS).map((tech) => (
            <li className="chip" key={tech}>
              {tech}
            </li>
          ))}
          {extra > 0 && (
            <li className="chip chip--more" title={project.stack.slice(FACE_CHIPS).join(', ')}>
              +{extra}
              <span className="sr-only"> more</span>
            </li>
          )}
        </ul>
      )}
    </article>
  )
}

function ProjectModal({ project, dialogRef, onClose }) {
  const inProgress = project?.status === 'in-progress'
  const details = project?.details

  return (
    // Native <dialog> via showModal(): focus is trapped, Escape closes it,
    // and focus returns to the card afterwards. A click that lands on the
    // dialog itself (not its content) is a click on the backdrop.
    <dialog
      ref={dialogRef}
      className="project-modal"
      aria-labelledby="project-modal-title"
      onClose={onClose}
      onClick={(event) => event.target === event.currentTarget && dialogRef.current.close()}
    >
      {project && (
        <div className="project-modal__body">
          <button
            type="button"
            className="project-modal__close"
            onClick={() => dialogRef.current.close()}
            aria-label="Close"
          >
            <CloseIcon width="18" height="18" />
          </button>

          <div className="project__art project-modal__art">
            <ProjectArt kind={project.art} />
          </div>

          <div className="project__top">
            <h3 id="project-modal-title" className="project__name project-modal__title">
              {project.name}
              {inProgress && <span className="project__badge">In Progress</span>}
            </h3>
            <ProjectLinks project={project} />
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

          <div className="project__details">
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
      )}
    </dialog>
  )
}

export default function Projects() {
  const listRef = useRef(null)
  const dialogRef = useRef(null)
  const [active, setActive] = useState(null)
  useCardGlow(listRef, '.project')

  useEffect(() => {
    const dialog = dialogRef.current
    if (active && !dialog.open) dialog.showModal()
  }, [active])

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
          <ProjectCard project={project} index={index} onOpen={setActive} key={project.name} />
        ))}
      </div>

      <p className="projects__more reveal">
        More work lives on GitHub —{' '}
        <a href={profile.links.github} target="_blank" rel="noreferrer">
          browse the repositories
          <ArrowRightIcon width="15" height="15" />
        </a>
      </p>

      <ProjectModal project={active} dialogRef={dialogRef} onClose={() => setActive(null)} />
    </Section>
  )
}
