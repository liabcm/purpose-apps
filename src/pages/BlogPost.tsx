import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPost } from '../lib/posts'
import NotFound from './NotFound'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  useEffect(() => {
    if (post) document.title = post.title + ' — Purpose Apps'
  }, [post])

  if (!post) return <NotFound />

  return (
    <article className="shell article">
      <Link to="/blog" className="back-link">
        <span aria-hidden>←</span> All posts
      </Link>

      <header className="article-head">
        <div className="post-meta">
          <time dateTime={post.date}>{post.dateLabel}</time>
          <span className="dot" aria-hidden />
          <span>{post.readingMinutes} min read</span>
          {post.draft ? <span className="draft-flag">Draft</span> : null}
        </div>
        <h1>{post.title}</h1>
        {post.summary ? <p className="article-summary">{post.summary}</p> : null}
        {post.tags.length ? (
          <div className="chips" style={{ marginTop: '1.25rem' }}>
            {post.tags.map((t) => (
              <span className="chip" key={t}>
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      {/* Markdown is authored by the site owner only, so it is trusted content. */}
      <div className="article-body" dangerouslySetInnerHTML={{ __html: post.body }} />

      <footer className="article-foot">
        <Link className="btn btn-ghost" to="/blog">
          <span aria-hidden>←</span> Back to all posts
        </Link>
      </footer>
    </article>
  )
}
