import { useLanguage } from '../i18n/LangContext'

const CATEGORIES = [
  {
    icon: '⚡',
    color: { from: '#5b50f0', to: '#a78bfa', rgb: '91,80,240' },
    skills: [
      { name: 'React.js',      level: 95 },
      { name: 'TypeScript',    level: 82 },
      { name: 'Next.js',       level: 78 },
      { name: 'Tailwind CSS',  level: 92 },
      { name: 'Vite',          level: 88 },
      { name: 'React Native',  level: 80 },
    ],
  },
  {
    icon: '🔧',
    color: { from: '#0ea5e9', to: '#38bdf8', rgb: '14,165,233' },
    skills: [
      { name: 'Node.js',       level: 90 },
      { name: 'Express.js',    level: 88 },
      { name: 'MongoDB',       level: 85 },
      { name: 'PostgreSQL',    level: 70 },
      { name: 'GraphQL',       level: 68 },
      { name: 'REST APIs',     level: 95 },
    ],
  },
  {
    icon: '🚀',
    color: { from: '#10b981', to: '#34d399', rgb: '16,185,129' },
    skills: [
      { name: 'Git & GitHub',  level: 92 },
      { name: 'Docker',        level: 72 },
      { name: 'AWS (Basics)',  level: 58 },
      { name: 'Vercel',        level: 90 },
      { name: 'CI/CD',         level: 75 },
      { name: 'Linux / Bash',  level: 70 },
    ],
  },
]

const LEARNING = [
  { name: 'AWS Certified Dev', icon: '☁️' },
  { name: 'tRPC',              icon: '🔌' },
  { name: 'System Design',     icon: '🏗️' },
  { name: 'Rust (basics)',     icon: '🦀' },
]

const ALSO = [
  'Redis', 'Firebase', 'JWT', 'OAuth 2.0', 'Nginx',
  'Stripe', 'Socket.io', 'Axios', 'Zod', 'Prisma',
  'Mongoose', 'Swagger', 'Postman', 'Figma', 'Jest',
]

function SkillBar({ name, level, color }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-t2 font-medium group-hover:text-t1 transition-colors">{name}</span>
        <span className="font-mono text-[11px] font-semibold" style={{ color: color.from }}>{level}%</span>
      </div>
      <div className="h-1 rounded-full overflow-hidden" style={{ background: 'var(--surface-2)' }}>
        <div className="h-full rounded-full transition-all duration-700"
          style={{ width: `${level}%`, background: `linear-gradient(90deg, ${color.from}, ${color.to})` }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-24 sm:py-32" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="sr">
          <p className="eyebrow">02 — {t.skills.sub}</p>
          <h2 className="h-section mb-4">
            {t.skills.h1} <span className="grad">{t.skills.h2}</span>
          </h2>
        </div>

        <div className="sep mt-8 mb-12" />

        {/* Category cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, i) => (
            <div key={i} className="sr card relative overflow-hidden" style={{ transitionDelay: `${i * 0.08}s` }}>
              {/* Colored accent strip */}
              <div className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: `linear-gradient(90deg, ${cat.color.from}, ${cat.color.to})` }} />

              {/* Header */}
              <div className="flex items-center gap-3 mt-2 mb-5">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{
                    background: `rgba(${cat.color.rgb},.12)`,
                    border: `1px solid rgba(${cat.color.rgb},.2)`,
                  }}>
                  {cat.icon}
                </div>
                <p className="font-bold text-sm text-t1">{t.skills.categories[i]}</p>
              </div>

              {/* Skill bars */}
              <div className="space-y-3">
                {cat.skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} color={cat.color} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently learning + also knows */}
        <div className="grid md:grid-cols-2 gap-5 mt-5">

          {/* Currently learning */}
          <div className="sr card">
            <p className="font-mono text-[10px] uppercase tracking-widest text-t3 mb-4">Currently Learning</p>
            <div className="grid grid-cols-2 gap-3">
              {LEARNING.map(({ name, icon }) => (
                <div key={name} className="flex items-center gap-2.5 p-3 rounded-xl transition-all hover:-translate-y-0.5"
                  style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                  <span className="text-lg">{icon}</span>
                  <span className="text-sm font-medium text-t2">{name}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-t3 font-mono mt-4">
              Always expanding — growth never stops.
            </p>
          </div>

          {/* Also familiar with */}
          <div className="sr sr-d1 card">
            <p className="font-mono text-[10px] uppercase tracking-widest text-t3 mb-4">{t.skills.alsoTitle}</p>
            <div className="flex flex-wrap gap-2">
              {ALSO.map((s) => (
                <span key={s} className="chip hover:border-[var(--a)] hover:text-a transition-colors cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
