import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import NotFound from './pages/NotFound'

const TITLES: Record<string, string> = {
  '/': 'Purpose Apps — Building apps that give people purpose',
  '/about': 'About — Liam Kruger · Purpose Apps',
  '/blog': 'Blog — Purpose Apps',
}

export default function App() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Individual post pages set their own title once the post resolves.
    if (!pathname.startsWith('/blog/')) {
      document.title = TITLES[pathname] ?? 'Not found — Purpose Apps'
    }
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
      return
    }

    // The anchor does not exist yet on a cold load of `/#mission`, so the
    // browser's own jump is a no-op. Scroll once React has painted.
    const id = hash.slice(1)
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
