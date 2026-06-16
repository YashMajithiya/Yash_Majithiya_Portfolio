import { useLanguage } from '../i18n/LangContext'

const SERVICES = [
  {
    icon: '🌐',
    title: 'Full-Stack Web Apps',
    desc: 'End-to-end web applications from UI to database layer. React frontend, Node.js backend, MongoDB/PostgreSQL — everything wired, tested, and production-ready.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'REST API'],
    color: { from: '#5b50f0', to: '#a78bfa', rgb: '91,80,240' },
    highlight: 'Most requested',
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    desc: 'Cross-platform mobile apps with React Native. Single codebase for iOS and Android — with native feel, offline support, and push notifications.',
    tags: ['React Native', 'Expo', 'Redux', 'Push Notifications'],
    color: { from: '#0ea5e9', to: '#38bdf8', rgb: '14,165,233' },
    highlight: null,
  },
  {
    icon: '⚙️',
    title: 'API Design & Backend',
    desc: 'Scalable RESTful and GraphQL APIs with auth, rate limiting, caching, and Swagger docs. Built for teams that need reliability under load.',
    tags: ['Express', 'GraphQL', 'JWT', 'PostgreSQL', 'Swagger'],
    color: { from: '#10b981', to: '#34d399', rgb: '16,185,129' },
    highlight: null,
  },
  {
    icon: '🚀',
    title: 'DevOps & Deployment',
    desc: 'Docker containers, CI/CD pipelines with GitHub Actions, and cloud deployment on Vercel, Railway, or AWS. Ship to prod with confidence.',
    tags: ['Docker', 'GitHub Actions', 'AWS', 'Vercel', 'CI/CD'],
    color: { from: '#f59e0b', to: '#fbbf24', rgb: '245,158,11' },
    highlight: null,
  },
]

const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'Understand requirements, define scope, identify risks early.' },
  { step: '02', title: 'Design & Plan', desc: 'Architecture decisions, tech stack selection, timeline estimate.' },
  { step: '03', title: 'Build', desc: 'Iterative development with clear milestones and regular updates.' },
  { step: '04', title: 'Ship & Support', desc: 'Deployment, documentation, and post-launch monitoring.' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="sr">
          <p className="eyebrow">What I Build</p>
          <h2 className="h-section mb-4">
            Services &amp; <span className="grad">Specializations</span>
          </h2>
          <p className="text-t2 text-[0.95rem] leading-relaxed" style={{ maxWidth: '52ch' }}>
            From greenfield projects to scaling existing systems — I cover the full stack
            and know where the sharp edges are.
          </p>
        </div>

        <div className="sep mt-8 mb-12" />

        {/* ── Service cards ── */}
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {SERVICES.map((svc, i) => (
            <div key={i} className="sr card relative overflow-hidden group" style={{ transitionDelay: `${i * 0.08}s` }}>
              {/* Colored top strip */}
              <div className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: `linear-gradient(90deg, ${svc.color.from}, ${svc.color.to})` }} />

              {/* Icon + title */}
              <div className="flex items-start gap-4 mt-2 mb-5">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform group-hover:scale-105"
                  style={{
                    background: `rgba(${svc.color.rgb},.12)`,
                    border: `1px solid rgba(${svc.color.rgb},.22)`,
                  }}>
                  {svc.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-[1.02rem] text-t1 leading-tight">{svc.title}</h3>
                    {svc.highlight && (
                      <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-lg"
                        style={{
                          background: `rgba(${svc.color.rgb},.12)`,
                          color: svc.color.from,
                          border: `1px solid rgba(${svc.color.rgb},.2)`,
                        }}>
                        {svc.highlight}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[0.875rem] leading-[1.75] text-t2 mb-5">{svc.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                {svc.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded-lg"
                    style={{
                      background: `rgba(${svc.color.rgb},.07)`,
                      color: svc.color.from,
                      border: `1px solid rgba(${svc.color.rgb},.18)`,
                    }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Process timeline ── */}
        <div className="sr">
          <p className="font-mono text-[10px] uppercase tracking-widest text-t3 mb-8 text-center">
            How I work
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS.map((p, i) => (
              <div key={i} className="relative flex flex-col gap-3 rounded-[var(--radius-lg)] p-5"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                {/* Step number */}
                <p className="grad font-black text-3xl tracking-tight leading-none">{p.step}</p>
                <p className="font-bold text-sm text-t1">{p.title}</p>
                <p className="text-[0.82rem] text-t3 leading-relaxed">{p.desc}</p>

                {/* Connector arrow (desktop) */}
                {i < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-t3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA band ── */}
        <div className="sr mt-12 rounded-[var(--radius-lg)] p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(var(--a-rgb),.1) 0%, rgba(var(--a-rgb),.04) 100%)',
            border: '1px solid rgba(var(--a-rgb),.18)',
          }}>
          <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(var(--a-rgb),.15) 0%, transparent 70%)' }} />
          <div>
            <p className="font-black text-t1 text-[1.1rem] mb-1">Have a project in mind?</p>
            <p className="text-sm text-t2">Let's talk about what you need — no pressure, just a conversation.</p>
          </div>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
            className="btn-primary flex-shrink-0">
            Start a conversation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
