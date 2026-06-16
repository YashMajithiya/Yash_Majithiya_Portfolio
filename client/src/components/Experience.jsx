import { useLanguage } from '../i18n/LangContext'

const JOBS = [
  {
    role: 'Full Stack Developer',
    company: 'The Gateway Corp',
    period: 'Jan 2023 – Present',
    location: 'India (Remote)',
    current: true,
    initials: 'TG',
    color: { from: '#5b50f0', to: '#a78bfa', rgb: '91,80,240' },
    bullets: [
      'Leading development of AFX DSO — an enterprise field-ops platform serving 500+ agents across 3 regions.',
      'Architected offline-first React Native app with real-time WebSocket sync and background conflict resolution.',
      'Reduced API response latency by 40% via query optimization, caching, and connection pooling.',
      'Set up a complete CI/CD pipeline (GitHub Actions + Docker), cutting deployment time from hours to minutes.',
      'Mentored 2 junior developers and drove adoption of TypeScript and code review workflows.',
    ],
    metrics: ['500+ agents', '40% faster API', '3 regions'],
  },
  {
    role: 'Frontend Developer',
    company: 'Freelance',
    period: 'Jun 2022 – Dec 2022',
    location: 'Remote',
    current: false,
    initials: 'FL',
    color: { from: '#0ea5e9', to: '#38bdf8', rgb: '14,165,233' },
    bullets: [
      'Delivered 10+ client projects: e-commerce stores, dashboards, SaaS landing pages, and admin panels.',
      'Built responsive UIs with React, Next.js, and Tailwind CSS, consistently scoring 90+ on Lighthouse.',
      'Integrated Stripe payments, Firebase Auth, and third-party REST APIs for 6 different clients.',
      'Maintained direct client communication, translated requirements into pixel-perfect designs in Figma → code.',
    ],
    metrics: ['10+ projects', '90+ Lighthouse', '6 integrations'],
  },
  {
    role: 'Web Development Intern',
    company: 'Tech Startup',
    period: 'Jan 2022 – May 2022',
    location: 'India',
    current: false,
    initials: 'TS',
    color: { from: '#10b981', to: '#34d399', rgb: '16,185,129' },
    bullets: [
      'Built and shipped 3 new feature modules in a production React SaaS product.',
      'Wrote unit and integration tests with Jest and React Testing Library (85% coverage).',
      'Participated in daily standups, sprint planning, and code reviews in a 6-person Agile team.',
    ],
    metrics: ['3 features', '85% coverage', 'Agile team'],
  },
]

const EDU = [
  {
    degree: "Bachelor's in Computer Science",
    institution: 'University Name',
    period: '2019 – 2023',
    grade: 'First Class Distinction',
    initials: 'CS',
    color: { from: '#f59e0b', to: '#fbbf24', rgb: '245,158,11' },
  },
]

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="py-24 sm:py-32" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="sr">
          <p className="eyebrow">04 — {t.experience.sub}</p>
          <h2 className="h-section mb-4">
            {t.experience.h1} <span className="grad">{t.experience.h2}</span>
          </h2>
        </div>

        <div className="sep mt-8 mb-12" />

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] sm:left-[23px] top-3 bottom-3 w-px hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, var(--a) 0%, rgba(var(--a-rgb),.2) 70%, transparent 100%)' }} />

          <div className="space-y-6">
            {JOBS.map((job, i) => (
              <div key={i} className="sr relative flex gap-5 sm:gap-8" style={{ transitionDelay: `${i * 0.1}s` }}>

                {/* Circle marker */}
                <div className="hidden sm:flex flex-col items-center gap-0 flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm text-white flex-shrink-0 z-10"
                    style={{ background: `linear-gradient(135deg, ${job.color.from}, ${job.color.to})` }}>
                    {job.initials}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 card relative overflow-hidden">
                  {/* Top accent strip */}
                  <div className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: `linear-gradient(90deg, ${job.color.from}, ${job.color.to})` }} />

                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mt-2 mb-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        {/* Mobile: show initials badge */}
                        <div className="sm:hidden w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs text-white"
                          style={{ background: `linear-gradient(135deg, ${job.color.from}, ${job.color.to})` }}>
                          {job.initials}
                        </div>
                        <h3 className="font-black text-[1.05rem] text-t1">{job.role}</h3>
                        {job.current && (
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-lg"
                            style={{
                              background: 'rgba(34,197,94,.1)',
                              color: '#22c55e',
                              border: '1px solid rgba(34,197,94,.25)',
                            }}>
                            {t.experience.current}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold" style={{ color: job.color.from }}>{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-sm text-t2">{job.period}</p>
                      <p className="text-xs text-t3 mt-0.5">{job.location}</p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.metrics.map((m) => (
                      <span key={m} className="text-[11px] font-mono px-2.5 py-1 rounded-lg font-semibold"
                        style={{
                          background: `rgba(${job.color.rgb},.1)`,
                          color: job.color.from,
                          border: `1px solid rgba(${job.color.rgb},.18)`,
                        }}>
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-[0.875rem] leading-relaxed text-t2">
                        <span className="mt-[7px] w-1 h-1 rounded-full flex-shrink-0" style={{ background: job.color.from }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Education ── */}
        <div className="sr mt-14">
          <p className="font-mono text-[10px] uppercase tracking-widest text-t3 mb-5">{t.experience.eduTitle}</p>

          {EDU.map((e, i) => (
            <div key={i} className="relative flex gap-5 sm:gap-8">
              <div className="hidden sm:flex flex-shrink-0">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm text-white"
                  style={{ background: `linear-gradient(135deg, ${e.color.from}, ${e.color.to})` }}>
                  {e.initials}
                </div>
              </div>

              <div className="flex-1 card flex flex-wrap items-center justify-between gap-5 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: `linear-gradient(90deg, ${e.color.from}, ${e.color.to})` }} />
                <div className="flex items-center gap-3 mt-1">
                  <div className="sm:hidden w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs text-white"
                    style={{ background: `linear-gradient(135deg, ${e.color.from}, ${e.color.to})` }}>
                    {e.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-t1">{e.degree}</p>
                    <p className="text-xs mt-0.5 font-medium" style={{ color: e.color.from }}>{e.institution}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono text-sm text-t2">{e.period}</p>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg"
                    style={{
                      background: `rgba(${e.color.rgb},.1)`,
                      color: e.color.from,
                      border: `1px solid rgba(${e.color.rgb},.18)`,
                    }}>
                    {e.grade}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
