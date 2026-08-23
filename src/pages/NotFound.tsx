import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="shell notfound">
      <span className="code">404</span>
      <h1>This page does not exist.</h1>
      <p className="muted">The link may be old, or the address slightly off.</p>
      <div className="hero-actions" style={{ justifyContent: 'center' }}>
        <Link className="btn btn-primary" to="/">
          Back home
        </Link>
      </div>
    </div>
  )
}
