import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '../i18n/LangContext'

const COLORS = [
  { from: '#5b50f0', to: '#a78bfa', rgb: '91,80,240'   },
  { from: '#0ea5e9', to: '#38bdf8', rgb: '14,165,233'  },
  { from: '#10b981', to: '#34d399', rgb: '16,185,129'  },
  { from: '#f59e0b', to: '#fbbf24', rgb: '245,158,11'  },
  { from: '#ec4899', to: '#f472b6', rgb: '236,72,153'  },
  { from: '#06b6d4', to: '#22d3ee', rgb: '6,182,212'   },
]

const PROJECTS = [
  {
    n: '01',
    title: 'AFX DSO Platform',
    tagline: 'Enterprise digital service operations at scale',
    desc: 'Enterprise-grade platform for large-scale field operations — real-time data sync, role-based access, and an offline-capable mobile experience.',
    longDesc: 'AFX DSO is a comprehensive enterprise platform built for large-scale field operations. The system handles real-time data synchronization across hundreds of devices, with an offline-first architecture ensuring seamless operation in low-connectivity environments. A sophisticated role-based access control system with six permission levels enables granular control over data visibility and actions across departments.',
    features: [
      'Real-time data sync via WebSocket with conflict resolution',
      'Role-based access control — 6 permission levels',
      'Offline-capable mobile app with background sync',
      'Push notifications and live alerts for field agents',
      'Admin dashboard with KPI analytics and reporting',
      'Secure REST API with JWT + refresh token rotation',
    ],
    role: 'Full Stack Developer (Lead)',
    impact: 'Deployed to 500+ field agents across 3 regions',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Socket.io'],
    github: 'https://github.com/yashmajithiya',
    live: null,
    featured: true,
    year: '2024',
  },
  {
    n: '02',
    title: 'Task Management API',
    tagline: 'Robust RESTful backend for team productivity',
    desc: 'Production-ready API with JWT auth, team workspaces, role assignments, and automated email notifications for task events.',
    longDesc: 'A production-ready task management API built with Node.js and Express, designed for team collaboration at scale. Features comprehensive CRUD operations, workspace isolation per team, JWT-based authentication with secure refresh token rotation, and Nodemailer-powered email notifications for task assignments and deadline reminders. Full API documentation generated with Swagger.',
    features: [
      'Full CRUD for tasks, projects, and workspaces',
      'JWT authentication with refresh token rotation',
      'Team workspaces with member roles (admin, member, viewer)',
      'Email notifications via Nodemailer for task lifecycle events',
      'API rate limiting and request validation with Joi',
      'Interactive API docs with Swagger / OpenAPI 3.0',
    ],
    role: 'Backend Developer',
    impact: 'Supports 1,000+ concurrent API requests',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Nodemailer', 'Swagger'],
    github: 'https://github.com/yashmajithiya',
    live: null,
    featured: true,
    year: '2023',
  },
  {
    n: '03',
    title: 'Real-Time Chat App',
    tagline: 'Zero-latency messaging with presence awareness',
    desc: 'Socket.io-powered chat with rooms, online presence, typing signals, message reactions, and persistent history.',
    longDesc: 'A fully-featured real-time chat application built with Socket.io and React. Supports multiple chat rooms, private direct messages, and group conversations. Implements presence detection (online/offline/away), typing indicators, message read receipts, emoji reactions, and file sharing. Persistent message history stored in MongoDB with efficient cursor-based pagination.',
    features: [
      'Real-time messaging with Socket.io (< 50 ms latency)',
      'Multiple chat rooms and private direct messages',
      'Online/offline/away presence indicators',
      'Typing indicators and message read receipts',
      'Emoji reactions and file/image sharing',
      'Persistent message history with cursor pagination',
    ],
    role: 'Full Stack Developer',
    impact: 'Handles 200+ concurrent socket connections per server',
    tech: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/yashmajithiya',
    live: null,
    featured: true,
    year: '2023',
  },
  {
    n: '04',
    title: 'E-Commerce Store',
    tagline: 'Full-featured storefront with Stripe payments',
    desc: 'Product catalog, cart, Stripe payment integration, order management, and a comprehensive admin dashboard.',
    longDesc: 'A complete e-commerce solution with a React storefront, Node.js backend, and MongoDB database. Features a fully-functional product catalog with search and filtering, a persistent cart, user authentication, Stripe payment processing with webhook support, order management, and an admin dashboard for inventory and order tracking.',
    features: [
      'Product catalog with search, filter, and sort',
      'Persistent shopping cart and saved wishlist',
      'Stripe payment integration with webhook support',
      'User authentication with order history',
      'Admin dashboard for inventory and order management',
      'Mobile-first responsive design',
    ],
    role: 'Full Stack Developer',
    impact: 'Processed 1,200+ test transactions in staging',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind', 'Redux'],
    github: 'https://github.com/yashmajithiya',
    live: null,
    featured: false,
    year: '2022',
  },
  {
    n: '05',
    title: 'Portfolio Website',
    tagline: 'This very site — React + Vite + Tailwind',
    desc: 'Personal portfolio with dark/light mode, i18n (EN/HI/ES), scroll-reveal animations, and a Node.js contact backend.',
    longDesc: 'The site you are currently viewing. Built with React 18 and Vite for a blazing-fast experience, styled with Tailwind CSS and a custom CSS variable theming system. Features dark/light mode with OS preference detection, three-language internationalization (English, Hindi, Spanish), scroll-reveal animations via IntersectionObserver, fluid clamp-based typography, and a Node.js + MongoDB backend for the contact form.',
    features: [
      'Dark/light mode with OS preference detection',
      'Multi-language support: English, Hindi, Spanish',
      'Scroll-reveal animations via IntersectionObserver',
      'Fluid responsive typography with CSS clamp()',
      'Typing animation for hero role cycle',
      'Contact form with Node.js + MongoDB backend',
    ],
    role: 'Designer & Developer',
    impact: 'Built end-to-end in under 2 weeks',
    tech: ['React 18', 'Vite', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yashmajithiya/personal-website',
    live: null,
    featured: false,
    year: '2024',
  },
  {
    n: '06',
    title: 'Weather Dashboard',
    tagline: '7-day forecasts with Chart.js visualizations',
    desc: '7-day weather forecast with Chart.js charts, auto-detected location, and saved favourite cities.',
    longDesc: 'A beautiful weather dashboard that fetches real-time and forecast data from the OpenWeatherMap API. Includes interactive Chart.js graphs for temperature trends, precipitation probability, and wind speed over the week. Users can save favourite cities to localStorage, toggle between Celsius and Fahrenheit, and get auto-detected location-based weather via the browser Geolocation API.',
    features: [
      'Real-time weather from OpenWeatherMap API',
      '7-day forecast with hourly breakdown',
      'Chart.js visualizations for temperature, rain, wind',
      'Auto-detect location via Geolocation API',
      'Save and manage favourite cities',
      'Celsius / Fahrenheit toggle',
    ],
    role: 'Frontend Developer',
    impact: 'Supports 200+ cities worldwide',
    tech: ['React', 'OpenWeather API', 'Chart.js', 'Vite', 'CSS Modules'],
    github: 'https://github.com/yashmajithiya',
    live: null,
    featured: false,
    year: '2022',
  },
]

const GHIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)
const ExtIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
  </svg>
)
const CloseIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
  </svg>
)

/* ── Featured Hero Card ──────────────────────────────────────── */
function FeaturedCard({ p, col, onClick }) {
  return (
    <article
      className="card relative overflow-hidden group cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick() }}
      aria-label={`View details for ${p.title}`}
    >
      {/* Color strip */}
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: `linear-gradient(90deg, ${col.from}, ${col.to})` }} />

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, rgba(${col.rgb},.1) 0%, transparent 65%)` }} />

      {/* Header row */}
      <div className="flex flex-wrap items-start justify-between gap-4 mt-3 mb-6">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-bold w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: `rgba(${col.rgb},.1)`,
              color: col.from,
              border: `1px solid rgba(${col.rgb},.2)`,
            }}>
            {p.n}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-lg font-semibold"
            style={{ background: `rgba(${col.rgb},.1)`, color: col.from, border: `1px solid rgba(${col.rgb},.18)` }}>
            ★ Featured
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm text-t3">{p.year}</span>
          {p.github && (
            <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-t3 hover:text-t1 transition-colors"
              style={{ border: '1px solid var(--border)' }}
              onClick={(e) => e.stopPropagation()}>
              <GHIcon />
            </a>
          )}
        </div>
      </div>

      {/* Two-column content on md+ */}
      <div className="grid md:grid-cols-[1fr_auto] gap-6 md:gap-10">
        <div>
          <h3 className="font-black text-2xl sm:text-3xl tracking-tight text-t1 leading-tight mb-2 group-hover:transition-colors"
            style={{ '--ac': col.from }}>
            <span className="group-hover:[color:var(--ac)] transition-colors duration-200">{p.title}</span>
          </h3>
          <p className="text-sm text-t3 font-mono mb-4">{p.tagline}</p>
          <p className="text-[0.9rem] leading-[1.75] text-t2 mb-6">{p.desc}</p>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-1.5">
            {p.tech.map((s) => (
              <span key={s} className="chip"
                style={{ color: col.from, background: `rgba(${col.rgb},.07)`, borderColor: `rgba(${col.rgb},.2)` }}>
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Impact callout sidebar — vertical on mobile, horizontal on sm, vertical on md+ */}
        <div className="flex flex-col sm:flex-row md:flex-col items-stretch gap-3 md:w-48 md:flex-shrink-0">
          {/* Impact stat */}
          <div className="sm:flex-1 md:flex-none rounded-xl p-4"
            style={{ background: `rgba(${col.rgb},.08)`, border: `1px solid rgba(${col.rgb},.18)` }}>
            <div className="flex items-center gap-1.5 mb-1.5">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                style={{ color: col.from }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: col.from }}>Impact</p>
            </div>
            <p className="text-sm font-bold text-t1 leading-snug">{p.impact}</p>
          </div>

          {/* Role */}
          <div className="sm:flex-1 md:flex-none rounded-xl p-4"
            style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
            <p className="font-mono text-[9px] uppercase tracking-widest text-t3 mb-1.5">Role</p>
            <p className="text-sm font-semibold text-t1 leading-snug">{p.role}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-5 flex items-center justify-end gap-2" style={{ borderTop: '1px solid var(--border)' }}>
        <span className="text-[11px] font-mono font-semibold group-hover:translate-x-0.5 transition-transform"
          style={{ color: col.from }}>
          View Full Details
        </span>
        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          style={{ color: col.from }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
        </svg>
      </div>
    </article>
  )
}

/* ── Standard Project Card ───────────────────────────────────── */
function ProjectCard({ p, col, onClick, featuredLabel }) {
  return (
    <article
      className="card flex flex-col h-full group cursor-pointer relative overflow-hidden"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick() }}
      aria-label={`View details for ${p.title}`}
    >
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: `linear-gradient(90deg, ${col.from}, ${col.to})` }} />

      <div className="flex items-start justify-between mt-2 mb-5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: `rgba(${col.rgb},.1)`, color: col.from, border: `1px solid rgba(${col.rgb},.18)` }}>
            {p.n}
          </span>
          {p.featured && (
            <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-lg"
              style={{ background: `rgba(${col.rgb},.1)`, color: col.from, border: `1px solid rgba(${col.rgb},.18)` }}>
              {featuredLabel}
            </span>
          )}
        </div>
        <div className="flex gap-1.5">
          {p.github && (
            <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="w-7 h-7 rounded-lg flex items-center justify-center text-t3 hover:text-t1 transition-colors"
              style={{ border: '1px solid var(--border)' }}
              onClick={(e) => e.stopPropagation()}>
              <GHIcon />
            </a>
          )}
          {p.live && (
            <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label="Live demo"
              className="w-7 h-7 rounded-lg flex items-center justify-center text-t3 hover:text-t1 transition-colors"
              style={{ border: '1px solid var(--border)' }}
              onClick={(e) => e.stopPropagation()}>
              <ExtIcon />
            </a>
          )}
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex items-baseline justify-between gap-2 mb-2">
          <h3 className="font-bold text-[0.98rem] leading-snug text-t1" style={{ '--ac': col.from }}>
            <span className="group-hover:[color:var(--ac)] transition-colors duration-200">{p.title}</span>
          </h3>
          <span className="font-mono text-[11px] text-t3 flex-shrink-0">{p.year}</span>
        </div>
        <p className="text-[0.84rem] leading-relaxed text-t2">{p.desc}</p>
      </div>

      <div className="pt-4 mt-4" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {p.tech.slice(0, 3).map((s) => (
            <span key={s} className="chip"
              style={{ color: col.from, background: `rgba(${col.rgb},.07)`, borderColor: `rgba(${col.rgb},.2)` }}>
              {s}
            </span>
          ))}
          {p.tech.length > 3 && <span className="chip">+{p.tech.length - 3}</span>}
        </div>
        <div className="flex items-center justify-end gap-1 text-[11px] font-mono group-hover:translate-x-0.5 transition-transform"
          style={{ color: col.from }}>
          View Details
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </article>
  )
}

/* ── Project Modal ───────────────────────────────────────────── */
function ProjectModal({ project, ci, onClose }) {
  const col = COLORS[ci]

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal-card">

        {/* Modal header */}
        <div className="relative px-6 pt-7 pb-6"
          style={{ background: `linear-gradient(150deg, rgba(${col.rgb},.13) 0%, rgba(${col.rgb},.03) 100%)` }}>
          <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl sm:rounded-t-[24px]"
            style={{ background: `linear-gradient(90deg, ${col.from}, ${col.to})` }} />

          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg"
                style={{ background: `rgba(${col.rgb},.12)`, color: col.from, border: `1px solid rgba(${col.rgb},.22)` }}>
                {project.n}
              </span>
              {project.featured && (
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-lg"
                  style={{ background: `rgba(${col.rgb},.12)`, color: col.from, border: `1px solid rgba(${col.rgb},.22)` }}>
                  Featured
                </span>
              )}
            </div>
            <button onClick={onClose} aria-label="Close"
              className="w-8 h-8 rounded-xl flex items-center justify-center transition-all hover:scale-110"
              style={{ background: 'var(--surface-2)', color: 'var(--t2)' }}>
              <CloseIcon />
            </button>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight mb-1.5 text-t1">
            {project.title}
          </h2>
          <p className="text-sm text-t2 mb-4">{project.tagline}</p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono text-t3">
            <span>{project.year}</span>
            <span>·</span>
            <span>{project.role}</span>
          </div>
        </div>

        {/* Modal body */}
        <div className="px-6 py-6 space-y-6">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((s) => (
              <span key={s} className="chip"
                style={{ color: col.from, background: `rgba(${col.rgb},.08)`, borderColor: `rgba(${col.rgb},.22)` }}>
                {s}
              </span>
            ))}
          </div>

          <div style={{ height: 1, background: 'var(--border)' }} />

          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-t3 mb-3">Overview</p>
            <p className="text-[0.875rem] leading-[1.75] text-t2">{project.longDesc}</p>
          </div>

          {project.features?.length > 0 && (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-t3 mb-3">Key Features</p>
              <ul className="space-y-2.5">
                {project.features.map((f, i) => (
                  <li key={i} className="flex gap-3 text-[0.875rem] leading-relaxed text-t2">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: col.from }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.impact && (
            <div className="flex items-start gap-3 p-4 rounded-xl"
              style={{ background: `rgba(${col.rgb},.07)`, border: `1px solid rgba(${col.rgb},.18)` }}>
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                style={{ color: col.from }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest mb-0.5" style={{ color: col.from }}>
                  Impact
                </p>
                <p className="text-sm font-semibold text-t1">{project.impact}</p>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="btn flex-1 justify-center"
                style={{ background: `rgba(${col.rgb},.09)`, border: `1px solid rgba(${col.rgb},.22)`, color: col.from }}>
                <GHIcon /> View on GitHub
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                className="btn-primary flex-1 justify-center">
                Live Demo <ExtIcon />
              </a>
            )}
            {!project.github && !project.live && (
              <p className="text-xs font-mono text-t3 text-center pt-2">
                Source code is private (enterprise project)
              </p>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

/* ── Main Section ────────────────────────────────────────────── */
export default function Projects() {
  const { t } = useLanguage()
  const [selected, setSelected] = useState(null)

  const [hero, ...rest] = PROJECTS

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="sr">
          <p className="eyebrow">03 — {t.projects.sub}</p>
          <h2 className="h-section mb-4">
            {t.projects.h1} <span className="grad">{t.projects.h2}</span>
          </h2>
        </div>

        <div className="sep mt-8 mb-12" />

        {/* ── Featured hero project ── */}
        <div className="sr mb-5">
          <FeaturedCard
            p={hero}
            col={COLORS[0]}
            onClick={() => setSelected({ project: hero, ci: 0 })}
          />
        </div>

        {/* ── Remaining projects ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((p, i) => {
            const ci = (i + 1) % COLORS.length
            return (
              <div key={p.n} className="sr" style={{ transitionDelay: `${i * 0.07}s` }}>
                <ProjectCard
                  p={p}
                  col={COLORS[ci]}
                  featuredLabel={t.projects.featured}
                  onClick={() => setSelected({ project: p, ci })}
                />
              </div>
            )
          })}
        </div>

        <div className="sr text-center mt-14">
          <a href="https://github.com/yashmajithiya" target="_blank" rel="noopener noreferrer"
            className="btn-outline">
            <GHIcon /> {t.projects.viewAll}
          </a>
        </div>
      </div>

      {selected && (
        <ProjectModal
          project={selected.project}
          ci={selected.ci}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
}
