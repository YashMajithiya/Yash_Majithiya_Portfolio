import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { useLanguage } from '../i18n/LangContext'

const GH = () => (
  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)
const LI = () => (
  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)
const Mail = () => (
  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
)

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/yashmajithiya',     icon: <GH /> },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yashmajithiya', icon: <LI /> },
  { label: 'Email',    href: 'mailto:yash.majithiya@example.com',     icon: <Mail /> },
]

const STATS = [
  { val: '3+',   label: 'Years' },
  { val: '20+',  label: 'Projects' },
  { val: '10+',  label: 'Clients' },
  { val: '500+', label: 'Users' },
]

const TECH_MARQUEE = [
  'React', 'Node.js', 'TypeScript', 'MongoDB', 'Express',
  'Next.js', 'Tailwind CSS', 'Docker', 'PostgreSQL', 'GraphQL',
  'React Native', 'Redux', 'REST APIs', 'Git', 'Vercel',
  'React', 'Node.js', 'TypeScript', 'MongoDB', 'Express',
  'Next.js', 'Tailwind CSS', 'Docker', 'PostgreSQL', 'GraphQL',
  'React Native', 'Redux', 'REST APIs', 'Git', 'Vercel',
]

const MINI_TECH = ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind', 'Docker']

export default function Hero() {
  const { t } = useLanguage()
  const roles = t.hero.roles
  const [ri, setRi]     = useState(0)
  const [text, setText] = useState('')
  const [fwd, setFwd]   = useState(true)

  useEffect(() => { setText(''); setFwd(true) }, [ri, roles])

  useEffect(() => {
    const cur = roles[ri]
    let id
    if (fwd) {
      if (text.length < cur.length) id = setTimeout(() => setText(cur.slice(0, text.length + 1)), 70)
      else id = setTimeout(() => setFwd(false), 2200)
    } else {
      if (text.length > 0) id = setTimeout(() => setText(text.slice(0, -1)), 30)
      else { setRi((p) => (p + 1) % roles.length); setFwd(true) }
    }
    return () => clearTimeout(id)
  }, [text, fwd, ri, roles])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background atmosphere */}
      <div className="hero-mesh" />
      <div className="pointer-events-none absolute left-[-10%] top-[10%] w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(var(--a-rgb),.18) 0%, transparent 60%)', opacity: .3 }} />
      <div className="pointer-events-none absolute right-[-5%] bottom-[10%] w-[450px] h-[450px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(192,132,252,.3) 0%, transparent 60%)', opacity: .2 }} />
      <div className="pointer-events-none absolute right-[15%] top-[5%] w-[300px] h-[300px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(var(--a-rgb),.12) 0%, transparent 60%)', opacity: .4 }} />

      {/* Main content */}
      <div className="relative flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-5 sm:px-8 pt-28 pb-4">
        <div className="grid lg:grid-cols-[1fr_380px] gap-8 xl:gap-16 items-center">

          {/* ── Left: Text content ── */}
          <div>
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2.5 mb-8 pl-3 pr-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase"
              style={{
                background: 'rgba(var(--a-rgb),.08)',
                border: '1px solid rgba(var(--a-rgb),.2)',
                color: 'var(--a)',
              }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-60" />
                <span className="relative rounded-full h-2 w-2 bg-green-400" />
              </span>
              {t.hero.badge}
            </div>

            {/* Name */}
            <h1
              className="font-black tracking-[-0.04em] leading-[0.88] mb-7"
              style={{ fontSize: 'clamp(3.5rem, 9vw + .5rem, 8rem)', color: 'var(--t1)' }}
            >
              <span className="grad">Yash<br />Majithiya</span>
              <span style={{ color: 'var(--a)', WebkitTextFillColor: 'var(--a)' }}>.</span>
            </h1>

            {/* Typing role */}
            <div className="flex items-center gap-0.5 mb-5 font-mono"
              style={{ fontSize: 'clamp(.9rem, 2.2vw, 1.25rem)', color: 'var(--t2)' }}>
              <span>{text}</span>
              <span className="animate-blink leading-none" style={{ color: 'var(--a)' }}>_</span>
            </div>

            {/* Description */}
            <p className="leading-relaxed mb-8 text-t2"
              style={{ maxWidth: '46ch', fontSize: 'clamp(.88rem, 1.3vw, 1rem)' }}>
              {t.hero.description}
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link to="projects" smooth duration={450} offset={-64}>
                <button className="btn-primary">
                  {t.hero.cta1}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </button>
              </Link>
              <Link to="contact" smooth duration={450} offset={-64}>
                <button className="btn-outline">{t.hero.cta2}</button>
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 sm:gap-10 mb-9 py-6"
              style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
              {STATS.map(({ val, label }) => (
                <div key={label}>
                  <p className="grad font-black text-3xl leading-none tracking-tight">{val}</p>
                  <p className="text-[10px] font-mono text-t3 mt-1 uppercase tracking-widest">{label}</p>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-widest uppercase text-t3 mr-1">Find me</span>
              {SOCIALS.map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-t3 transition-all duration-200 hover:text-a hover:border-[var(--a)] hover:-translate-y-0.5"
                  style={{ border: '1px solid var(--border)' }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Floating cards (desktop only) ── */}
          <div className="hidden lg:flex flex-col gap-5 pt-16 pb-4 relative">

            {/* Ambient orb behind cards */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(var(--a-rgb),.12), transparent 65%)' }} />

            {/* Card 1 — Current role */}
            <div className="float-card relative" style={{ transform: 'rotate(-1.8deg) translateX(16px)' }}>
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, var(--a), var(--a2))' }}>
                  🏢
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-t3 uppercase tracking-wider mb-0.5">Currently at</p>
                  <p className="font-black text-sm text-t1 leading-tight">The Gateway Corp</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--a)' }}>Full Stack Developer</p>
                </div>
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-60" />
                  <span className="relative rounded-full h-2 w-2 bg-green-400" />
                </span>
              </div>
              <div className="mt-4 pt-3.5" style={{ borderTop: '1px solid var(--border)' }}>
                <p className="text-[11px] text-t3 font-mono leading-relaxed">
                  Building AFX DSO — enterprise field-ops for 500+ agents
                </p>
              </div>
            </div>

            {/* Card 2 — Quick stats */}
            <div className="float-card" style={{ transform: 'rotate(1.4deg) translateX(-8px)' }}>
              <p className="text-xs font-mono text-t3 uppercase tracking-wider mb-3.5">At a glance</p>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { val: '3+', label: 'Years coding', col: 'var(--a)' },
                  { val: '20+', label: 'Projects shipped', col: '#10b981' },
                  { val: '10+', label: 'Happy clients', col: '#f59e0b' },
                  { val: '500+', label: 'Users served', col: '#ec4899' },
                ].map(({ val, label, col }) => (
                  <div key={label} className="rounded-xl p-2.5 text-center"
                    style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                    <p className="font-black text-lg leading-none mb-0.5" style={{ color: col }}>{val}</p>
                    <p className="text-[9px] text-t3 leading-tight uppercase tracking-wide">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3 — Tech stack */}
            <div className="float-card" style={{ transform: 'rotate(-1deg) translateX(24px)' }}>
              <p className="text-xs font-mono text-t3 uppercase tracking-wider mb-3">Core technologies</p>
              <div className="flex flex-wrap gap-1.5">
                {MINI_TECH.map((tech) => (
                  <span key={tech} className="text-[11px] font-mono px-2.5 py-1 rounded-lg font-medium"
                    style={{
                      background: 'rgba(var(--a-rgb),.08)',
                      color: 'var(--a)',
                      border: '1px solid rgba(var(--a-rgb),.18)',
                    }}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1.5 mt-3.5 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--a)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-[10px] font-mono text-t3">India · Remote · IST (UTC+5:30)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech marquee strip */}
      <div className="relative w-full overflow-hidden py-4 mt-auto"
        style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div className="flex items-center gap-8 marquee-track" aria-hidden="true">
          {TECH_MARQUEE.map((name, i) => (
            <span key={i} className="font-mono text-[11px] uppercase tracking-widest whitespace-nowrap flex items-center gap-2"
              style={{ color: 'var(--t3)' }}>
              <span className="w-1 h-1 rounded-full inline-block" style={{ background: 'var(--a)', opacity: .5 }} />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
