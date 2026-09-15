import { profile, projects } from '../data/content'
import { ArrowRightIcon, ExternalLinkIcon, GithubIcon } from './Icons'
import Section from './Section'
import './Projects.css'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      lede="Side projects where I pick the stack and go deep."
      alt
    >
      <div className="projects">
        {projects.map((project, index) => (
          <article
            className={`project reveal ${project.placeholder ? 'project--draft' : ''}`}
            key={project.name}
            style={{ '--reveal-delay': `${index * 90}ms` }}
          >
            <div className="project__top">
              <h3 className="project__name">
                {project.name}
                {project.placeholder && <span className="project__badge">In Progress</span>}
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

            <ul className="project__highlights">
              {project.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>

            <ul className="project__stack">
              {project.stack.map((tech) => (
                <li className="chip" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </article>
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
