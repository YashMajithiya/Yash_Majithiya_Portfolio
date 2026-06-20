import { ThemeProvider } from './context/ThemeContext'
import { LangProvider } from './i18n/LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useLanguage } from './i18n/LangContext'

const NAV_LINKS = [
  { to: 'about',      label: 'About'    },
  { to: 'services',   label: 'Services' },
  { to: 'skills',     label: 'Skills'   },
  { to: 'projects',   label: 'Projects' },
  { to: 'experience', label: 'Exp.'     },
  { to: 'contact',    label: 'Contact'  },
]

const FOOTER_LINKS = [
  { href: 'https://github.com/yashmajithiya',     label: 'GitHub' },
  { href: 'https://linkedin.com/in/yashmajithiya', label: 'LinkedIn' },
  { href: 'mailto:yashmajithiya40@gmail.com',     label: 'Email' },
]

function AppInner() {
  useScrollReveal()
  const { t } = useLanguage()

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* ── Footer ── */}
      <footer className="py-12" style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          {/* Top row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
            {/* Brand */}
            <div>
              <p className="grad font-mono font-black text-xl tracking-tight leading-none mb-1.5">
                Full Stack Developer<span style={{ WebkitTextFillColor: 'var(--a)' }}></span>
              </p>
              <p className="text-[0.8rem] text-t3 font-mono">Full Stack Developer · India</p>
            </div>

            {/* Footer nav */}
            <nav className="flex flex-wrap gap-x-5 gap-y-2">
              {NAV_LINKS.map(({ to, label }) => (
                <a key={to} href={`#${to}`}
                  onClick={(e) => { e.preventDefault(); document.querySelector(`#${to}`)?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="text-xs font-mono text-t3 hover:text-t1 transition-colors cursor-pointer">
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Divider */}
          <div className="sep mb-8" />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs font-mono text-t3">
              {t.footer.builtBy}{' '}
              <span className="grad font-semibold">Yash Majithiya</span>
              {' '}· React · Vite · Tailwind
            </p>

            <div className="flex items-center gap-4">
              {FOOTER_LINKS.map(({ href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="text-xs font-mono text-t3 hover:text-a transition-colors">
                  {label}
                </a>
              ))}
              <span className="text-t3 text-xs font-mono">{t.footer.rights}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <AppInner />
      </LangProvider>
    </ThemeProvider>
  )
}
