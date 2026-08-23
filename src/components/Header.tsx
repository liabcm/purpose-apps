import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useTheme } from '../lib/theme'
import { Moon, Sun } from './Icons'
import { site } from '../content'

export default function Header() {
  const { theme, toggle } = useTheme()
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="header" data-stuck={stuck}>
      <div className="shell header-inner">
        <Link to="/" className="wordmark" aria-label={site.name + ' — home'}>
          <span className="mark" aria-hidden />
          <span>{site.name}</span>
        </Link>

        <nav className="nav" aria-label="Primary">
          <NavLink to="/" end className="nav-link">
            Work
          </NavLink>
          <NavLink to="/blog" className="nav-link">
            Blog
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <button
            className="theme-btn"
            onClick={toggle}
            aria-label={'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme'}
            title={'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme'}
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
        </nav>
      </div>
    </header>
  )
}
