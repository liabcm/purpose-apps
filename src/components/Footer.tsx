import { Link } from 'react-router-dom'
import { contact, site } from '../content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <small>
          © {new Date().getFullYear()} {site.name} · {site.domain}
        </small>
        <div className="footer-links">
          <Link to="/">Work</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <a href={'mailto:' + contact.email}>Email</a>
          <a href={contact.github} target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
