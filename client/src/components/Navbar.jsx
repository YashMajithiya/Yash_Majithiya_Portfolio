import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../i18n/LangContext'

const SunIcon = () => (
  <svg className="w-[15px] h-[15px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="4" strokeWidth="2"/>
    <path strokeWidth="2" strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
  </svg>
)
const MoonIcon = () => (
  <svg className="w-[15px] h-[15px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" strokeLinecap="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
  </svg>
)

const LANGS = ['en', 'hi', 'es']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive]     = useState('')
  const { theme, toggleTheme }  = useTheme()
  const { t, lang, changeLang } = useLanguage()

  const navItems = [
    { key: 'about',      label: t.nav.about },
    { key: 'skills',     label: t.nav.skills },
    { key: 'projects',   label: t.nav.projects },
    { key: 'experience', label: t.nav.experience },
    { key: 'contact',    label: t.nav.contact },
  ]

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-28% 0px -64% 0px' }
    )
    navItems.forEach(({ key }) => { const el = document.getElementById(key); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={scrolled ? {
        background: 'var(--nav-glass)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
      } : {}}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 sm:h-16 flex items-center justify-between">

        {/* Logo */}
        <span className="grad font-mono font-black text-base tracking-tight select-none cursor-pointer">
          yash<span style={{ WebkitTextFillColor: 'var(--a)' }}>.</span>
        </span>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navItems.map(({ key, label }) => (
            <li key={key}>
              <Link
                to={key} smooth duration={450} offset={-64}
                className="relative px-3.5 py-2 rounded-lg text-sm cursor-pointer transition-colors duration-150 block"
                style={{ color: active === key ? 'var(--a)' : 'var(--t2)' }}
              >
                {label}
                {active === key && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                    style={{ background: 'var(--a)' }} />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop controls */}
        <div className="hidden md:flex items-center gap-2">
          {/* Language pill */}
          <div className="flex rounded-xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
            {LANGS.map((code) => (
              <button key={code} onClick={() => changeLang(code)}
                className="px-2.5 py-1.5 font-mono text-[11px] tracking-wider uppercase transition-all duration-150"
                style={{
                  background: lang === code
                    ? 'linear-gradient(135deg, var(--a), var(--a2))'
                    : 'transparent',
                  color: lang === code ? '#fff' : 'var(--t3)',
                }}>
                {code}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          <button onClick={toggleTheme} aria-label="Toggle theme"
            className="w-8 h-8 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5"
            style={{ border: '1px solid var(--border)', color: 'var(--t2)' }}>
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Resume */}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="btn-primary py-1.5 px-4 text-xs">
            {t.nav.resume} ↗
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleTheme} aria-label="Toggle theme"
            className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ border: '1px solid var(--border)', color: 'var(--t2)' }}>
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"
            className="w-8 h-8 flex flex-col items-center justify-center gap-[5px]">
            <span className={`w-5 h-px transition-all duration-200 origin-center ${menuOpen ? 'rotate-45 translate-y-[3px]' : ''}`}
              style={{ background: 'var(--t1)' }} />
            <span className={`w-5 h-px transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
              style={{ background: 'var(--t1)' }} />
            <span className={`w-5 h-px transition-all duration-200 origin-center ${menuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`}
              style={{ background: 'var(--t1)' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-250 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}
        style={{ borderTop: menuOpen ? '1px solid var(--border)' : 'none', background: 'var(--bg)' }}>
        <div className="max-w-6xl mx-auto px-5 py-4 space-y-0.5">
          {navItems.map(({ key, label }) => (
            <Link key={key} to={key} smooth duration={450} offset={-64}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm transition-colors cursor-pointer"
              style={{ color: active === key ? 'var(--a)' : 'var(--t2)', background: active === key ? 'var(--a-dim)' : 'transparent' }}>
              {label}
            </Link>
          ))}
          <div className="pt-3 mt-3 flex flex-wrap items-center gap-3" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="flex rounded-xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
              {LANGS.map((code) => (
                <button key={code} onClick={() => changeLang(code)}
                  className="px-3 py-1.5 font-mono text-[11px] uppercase transition-all"
                  style={{
                    background: lang === code ? 'linear-gradient(135deg, var(--a), var(--a2))' : 'transparent',
                    color: lang === code ? '#fff' : 'var(--t3)',
                  }}>
                  {code}
                </button>
              ))}
            </div>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
              className="btn-primary py-1.5 px-4 text-xs">
              {t.nav.resume} ↗
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
