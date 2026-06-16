import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-mono text-primary font-bold text-xl">YM<span className="text-white">.</span></span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((item, i) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth
                duration={500}
                offset={-70}
                className="text-slate-400 hover:text-primary transition-colors cursor-pointer font-mono text-sm"
              >
                <span className="text-primary">0{i + 1}. </span>{item}
              </Link>
            </li>
          ))}
          <li>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm py-2">
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button className="md:hidden text-slate-300 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`w-6 h-0.5 bg-primary transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-6 h-0.5 bg-primary my-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-primary transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-t border-white/5 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((item, i) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth
                  duration={500}
                  offset={-70}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-400 hover:text-primary transition-colors cursor-pointer font-mono text-sm block"
                >
                  <span className="text-primary">0{i + 1}. </span>{item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
