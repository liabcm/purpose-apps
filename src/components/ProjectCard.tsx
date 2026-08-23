import type { CSSProperties } from 'react'
import type { Project } from '../content'
import { ArrowUpRight } from './Icons'

type Props = {
  project: Project
  index?: number
  /** Flagship treatment: badge, ambition callout, larger type. */
  featured?: boolean
}

export default function ProjectCard({ project, index = 0, featured = false }: Props) {
  const style = {
    '--t1': project.tint[0],
    '--t2': project.tint[1],
    '--delay': index * 90 + 'ms',
  } as CSSProperties

  return (
    <article className={'project reveal' + (featured ? ' project-featured' : '')} style={style}>
      <div className="project-visual">
        <span className="project-glyph" aria-hidden>
          {project.name.charAt(0)}
        </span>
        <span className="project-domain">{project.url}</span>
      </div>

      <div className="project-body">
        <div className="project-top">
          <h3>{project.name}</h3>
          <span className="project-year">{project.year}</span>
        </div>

        <p className="project-blurb">{project.blurb}</p>
        <p className="project-desc">{project.description}</p>

        {project.ambition ? (
          <blockquote className="project-ambition">
            <span className="eyebrow">The long game</span>
            <p>{project.ambition}</p>
          </blockquote>
        ) : null}

        <ul className="project-list">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <div className="chips" style={{ marginTop: '1.25rem' }}>
          {project.stack.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>

        <div className="project-foot">
          <a className="project-link" href={project.href} target="_blank" rel="noreferrer noopener">
            Visit {project.url}
            <ArrowUpRight />
          </a>
          <span className="project-role">{project.role}</span>
        </div>
      </div>
    </article>
  )
}
