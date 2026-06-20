const SERVICES = [
  {
    icon: '🌐',
    title: 'Full-Stack Web Apps',
    desc: 'End-to-end web applications from UI to database layer. React frontend, Node.js backend, MongoDB — everything wired, tested, and production-ready.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'REST API'],
    color: { from: '#5b50f0', to: '#a07af8', rgb: '91,80,240' },
    badge: 'Most requested',
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    desc: 'Cross-platform mobile apps with React Native. Single codebase for iOS and Android — with native feel, offline support, and push notifications.',
    tags: ['React Native', 'Expo', 'Redux', 'Push Notifications', 'Camera Integrations', 'SignalR Integration', 'AD Authentication'],
    color: { from: '#0ea5e9', to: '#38bdf8', rgb: '14,165,233' },
    badge: null,
  },
  {
    icon: '⚙️',
    title: 'API Design & Backend',
    desc: 'Scalable RESTful APIs with auth, rate limiting, caching, and Swagger docs. Built for teams that need reliability under load.',
    tags: ['Express', 'JWT', 'Swagger'],
    color: { from: '#10b981', to: '#34d399', rgb: '16,185,129' },
    badge: null,
  },
  {
    icon: '🚀',
    title: 'DevOps & Deployment',
    desc: 'cloud deployment on Vercel, Railway. Ship to prod with confidence.',
    tags: ['GitHub Actions',"Azure", 'Vercel'],
    color: { from: '#f59e0b', to: '#fbbf24', rgb: '245,158,11' },
    badge: null,
  },
]

const PROCESS = [
  { step: '01', title: 'Discovery',   desc: 'Understand requirements, define scope, identify risks early.' },
  { step: '02', title: 'Design',      desc: 'Architecture decisions, tech stack selection, timeline.' },
  { step: '03', title: 'Build',       desc: 'Iterative development with clear milestones and regular updates.' },
  { step: '04', title: 'Ship',        desc: 'Deployment, documentation, and post-launch monitoring.' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="sr mb-10">
          <p className="eyebrow">What I Build</p>
          <h2 className="h-section">
            Services &amp; <span className="grad">Specializations</span>
          </h2>
          <p className="text-t2 text-[0.9rem] leading-relaxed mt-3" style={{ maxWidth: '52ch' }}>
            From greenfield projects to scaling existing systems — I cover the full stack
            and know where the sharp edges are.
          </p>
        </div>

        <div className="sep mb-10" />

        {/* ── Service cards 2×2 grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {SERVICES.map((svc, i) => (
            <div key={i} className="sr card relative overflow-hidden group" style={{ transitionDelay: `${i * 0.08}s` }}>
              {/* Top accent strip */}
              <div className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: `linear-gradient(90deg, ${svc.color.from}, ${svc.color.to})` }} />

              {/* Icon + title */}
              <div className="flex items-start gap-4 mt-2 mb-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, rgba(${svc.color.rgb},.18), rgba(${svc.color.rgb},.06))`,
                    border: `1px solid rgba(${svc.color.rgb},.22)`,
                  }}>
                  {svc.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <h3 className="font-bold text-[1rem] text-t1 leading-tight">{svc.title}</h3>
                    {svc.badge && (
                      <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-lg flex-shrink-0"
                        style={{
                          background: `rgba(${svc.color.rgb},.12)`,
                          color: svc.color.from,
                          border: `1px solid rgba(${svc.color.rgb},.2)`,
                        }}>
                        {svc.badge}
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
                  <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded-lg transition-all"
                    style={{
                      background: `rgba(${svc.color.rgb},.08)`,
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

        {/* ── Process steps ── */}
        <div className="sr">
          <p className="font-mono text-[10px] uppercase tracking-widest text-t3 mb-6 text-center">
            How I work
          </p>

          {/* Mobile: vertical list / md+: horizontal with connecting line */}
          <div className="relative">
            {/* Connecting line (md+ only) */}
            <div className="hidden md:block absolute top-8 left-[calc(12.5%+8px)] right-[calc(12.5%+8px)] h-px"
              style={{ background: 'linear-gradient(90deg, var(--a), rgba(var(--a-rgb),.2))' }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {PROCESS.map((p, i) => (
                <div key={i} className="relative flex flex-col items-center text-center p-5 rounded-[var(--radius-lg)]"
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                  {/* Step circle */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 relative z-10 font-black text-sm"
                    style={{
                      background: `linear-gradient(135deg, var(--a), var(--a2))`,
                      color: '#fff',
                      boxShadow: '0 4px 16px rgba(var(--a-rgb),.35)',
                    }}>
                    {p.step}
                  </div>
                  <p className="font-bold text-sm text-t1 mb-2">{p.title}</p>
                  <p className="text-[0.8rem] text-t3 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA band ── */}
        <div className="sr mt-12 rounded-[var(--radius-lg)] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(var(--a-rgb),.12) 0%, rgba(var(--a-rgb),.04) 100%)',
            border: '1px solid rgba(var(--a-rgb),.2)',
          }}>
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(var(--a-rgb),.15) 0%, transparent 70%)' }} />
          <div className="relative">
            <p className="font-black text-t1 text-[1.05rem] mb-1">Have a project in mind?</p>
            <p className="text-sm text-t2">Let's talk — no pressure, just a conversation.</p>
          </div>
          <a href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-primary relative flex-shrink-0 w-full sm:w-auto justify-center">
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
