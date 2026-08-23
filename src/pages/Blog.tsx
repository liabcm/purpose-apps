import { Link } from 'react-router-dom'
import { posts } from '../lib/posts'
import { useReveal } from '../lib/useReveal'
import { ArrowUpRight } from '../components/Icons'

export default function Blog() {
  useReveal([])

  return (
    <>
      <section className="page-head">
        <div className="hero-glow" aria-hidden />
        <div className="shell">
          <span className="eyebrow">Writing</span>
          <h1>
            Notes from <span className="serif">the build</span>.
          </h1>
          <p className="hero-lede">
            What I am working on, what the mission runs into in practice, and what I get wrong
            along the way.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          {posts.length === 0 ? (
            <div className="empty reveal">
              <h2>Nothing published yet.</h2>
              <p className="muted">The first post is on its way.</p>
            </div>
          ) : (
            <ul className="post-list">
              {posts.map((post, i) => (
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
                      {post.draft ? <span className="draft-flag">Draft</span> : null}
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
          )}
        </div>
      </section>
    </>
  )
}
