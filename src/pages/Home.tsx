import { Link } from 'react-router-dom'
import { flagship, mission, otherWork, site } from '../content'
import { posts } from '../lib/posts'
import ProjectCard from '../components/ProjectCard'
import { ArrowUpRight } from '../components/Icons'
import { useReveal } from '../lib/useReveal'

export default function Home() {
  useReveal([])
  const latest = posts.slice(0, 2)

  return (
    <>
      <section className="hero">
        <div className="hero-glow" aria-hidden />
        <div className="shell">
          <span className="eyebrow">{site.domain}</span>

          <h1>
            Building apps that give people <span className="serif">purpose</span>.
          </h1>

          <p className="hero-lede">{site.intro}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#mission">
              Why this exists
            </a>
            <a
              className="btn btn-ghost"
              href={flagship.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              See {flagship.name}
              <ArrowUpRight />
            </a>
          </div>

          <dl className="hero-meta">
            <div>
              <dt>Mission</dt>
              <dd>Income · Structure · Purpose</dd>
            </div>
            <div>
              <dt>Flagship</dt>
              <dd>{flagship.name}</dd>
            </div>
            <div>
              <dt>Shipping</dt>
              <dd>Web · iOS · Android</dd>
            </div>
            <div>
              <dt>Founded</dt>
              <dd>2025</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ---------- Mission ---------- */}

      <section className="section mission" id="mission">
        <div className="shell">
          <div className="mission-grid reveal">
            <div className="mission-intro">
              <span className="eyebrow">{mission.eyebrow}</span>
              <h2>{mission.heading}</h2>
            </div>
            <div className="prose">
              {mission.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="pillars">
            {mission.pillars.map((p, i) => (
              <div
                className="pillar reveal"
                key={p.n}
                style={{ '--delay': i * 90 + 'ms' } as React.CSSProperties}
              >
                <span className="pillar-n">{p.n}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Flagship ---------- */}

      <section className="section" id="work">
        <div className="shell">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">The flagship</span>
              <h2>
                Where the mission <span className="serif">runs</span>.
              </h2>
            </div>
            <p>
              Provoco is the project everything above is being tested against — live, in use, and
              built to carry real money to real players.
            </p>
          </div>

          <div className="projects">
            <ProjectCard project={flagship} featured />
          </div>
        </div>
      </section>

      {/* ---------- Other work ---------- */}

      <section className="section" id="portfolio" style={{ paddingTop: 0 }}>
        <div className="shell">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Also built</span>
              <h2>
                Selected <span className="serif">client work</span>.
              </h2>
            </div>
            <p>Projects taken on alongside the mission — designed, built and deployed end to end.</p>
          </div>

          <div className="projects">
            {otherWork.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Latest writing ---------- */}

      {latest.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="shell">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Writing</span>
                <h2>
                  Notes from <span className="serif">the build</span>.
                </h2>
              </div>
              <Link className="btn btn-ghost" to="/blog">
                All posts
                <ArrowUpRight />
              </Link>
            </div>

            <ul className="post-list post-list-compact">
              {latest.map((post, i) => (
                <li
                  key={post.slug}
                  className="post-row reveal"
                  style={{ '--delay': i * 70 + 'ms' } as React.CSSProperties}
                >
                  <Link to={'/blog/' + post.slug} className="post-link">
                    <div className="post-meta">
                      <time dateTime={post.date}>{post.dateLabel}</time>
                      <span className="dot" aria-hidden />
                      <span>{post.readingMinutes} min read</span>
                    </div>
                    <h2>{post.title}</h2>
                    {post.summary ? <p className="post-summary">{post.summary}</p> : null}
                    <span className="post-more">
                      Read the post
                      <ArrowUpRight />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ---------- CTA ---------- */}

      <section className="shell">
        <div className="cta reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Get in touch
          </span>
          <h2 style={{ marginTop: '1rem' }}>
            If this is the kind of thing you want to <span className="serif">build</span>.
          </h2>
          <p>
            Whether that is joining in, using what is being built, or having something of your own
            that needs to exist — I would like to hear about it.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/about">
              About me
            </Link>
            <Link className="btn btn-ghost" to="/blog">
              Read the blog
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
