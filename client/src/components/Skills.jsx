import { useState } from 'react'
import { useLanguage } from '../i18n/LangContext'

const CATEGORIES = [
  {
    icon: '⚡',
    label: 'Frontend',
    color: { from: '#5b50f0', to: '#a78bfa', rgb: '91,80,240' },
    skills: [
      { name: 'React Native',  level: 100 },
      { name: 'React.js',      level: 95 },
      { name: 'TypeScript',    level: 82 },
      { name: 'Next.js',       level: 78 },
      { name: 'Tailwind CSS',  level: 92 },
      { name: 'Vite',          level: 88 },
    ],
  },
  {
    icon: '🔧',
    label: 'Backend',
    color: { from: '#0ea5e9', to: '#38bdf8', rgb: '14,165,233' },
    skills: [
      { name: 'Node.js',       level: 90 },
      { name: 'Express.js',    level: 88 },
      { name: 'MongoDB',       level: 85 },
      { name: 'REST APIs',     level: 95 },
    ],
  },
  {
    icon: '🚀',
    label: 'DevOps',
    color: { from: '#10b981', to: '#34d399', rgb: '16,185,129' },
    skills: [
      { name: 'Azure',  level: 92 },
      { name: 'Git & GitHub',  level: 92 },
      { name: 'JavaScript',        level: 72 },
      { name: 'Vercel',        level: 90 },
    ],
  },
]

const LEARNING = [
  { name: 'tRPC',              icon: '🔌' },
  { name: 'System Design',     icon: '🏗️' },
  { name: 'Rust (basics)',     icon: '🦀' },
]

const ALSO = [
  'Redis', 'Firebase', 'JWT', 'OAuth 2.0','Stripe', 'Socket.io',
  'Mongoose', 'Swagger', 'Postman', 'Figma', 'Jest', 'Axios'
]

function SkillBar({ name, level, color }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[0.84rem] text-t2 font-medium group-hover:text-t1 transition-colors">{name}</span>
        <span className="font-mono text-xs font-semibold tabular-nums" style={{ color: color.from }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--surface-2)' }}>
        <div className="h-full rounded-full transition-all duration-700"
          style={{ width: `${level}%`, background: `linear-gradient(90deg, ${color.from}, ${color.to})` }} />
      </div>
    </div>
  )
}

function CategoryCard({ cat, i, t }) {
  return (
    <div className="card relative overflow-hidden h-full">
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: `linear-gradient(90deg, ${cat.color.from}, ${cat.color.to})` }} />

      <div className="flex items-center gap-3 mt-2 mb-5">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, rgba(${cat.color.rgb},.18), rgba(${cat.color.rgb},.06))`,
            border: `1px solid rgba(${cat.color.rgb},.22)`,
          }}>
          {cat.icon}
        </div>
        <div>
          <p className="font-bold text-[0.95rem] text-t1">{t.skills.categories[i]}</p>
          <p className="text-[10px] font-mono text-t3">{cat.skills.length} technologies</p>
        </div>
      </div>

      <div className="space-y-3.5">
        {cat.skills.map((s) => (
          <SkillBar key={s.name} name={s.name} level={s.level} color={cat.color} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="skills" className="py-20 sm:py-28" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="sr">
          <p className="eyebrow">02 — {t.skills.sub}</p>
          <h2 className="h-section mb-4">
            {t.skills.h1} <span className="grad">{t.skills.h2}</span>
          </h2>
        </div>

        <div className="sep mt-8 mb-10" />

        {/* ── Mobile/Tablet: Tab switcher + single card ── */}
        <div className="lg:hidden">
          {/* Tabs */}
          <div className="flex gap-2 mb-5 p-1.5 rounded-[var(--radius-lg)] overflow-x-auto"
            style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
            {CATEGORIES.map((cat, i) => (
              <button key={i} onClick={() => setActiveTab(i)}
                className="flex-1 min-w-fit flex items-center justify-center gap-2 px-4 py-2.5 rounded-[10px] text-sm font-semibold transition-all duration-200 whitespace-nowrap"
                style={activeTab === i ? {
                  background: `linear-gradient(135deg, ${cat.color.from}, ${cat.color.to})`,
                  color: '#fff',
                  boxShadow: `0 4px 12px rgba(${cat.color.rgb},.35)`,
                } : {
                  color: 'var(--t3)',
                  background: 'transparent',
                }}>
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Active category */}
          <div className="sr">
            <CategoryCard cat={CATEGORIES[activeTab]} i={activeTab} t={t} />
          </div>
        </div>

        {/* ── Desktop: 3-column grid ── */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, i) => (
            <div key={i} className="sr" style={{ transitionDelay: `${i * 0.08}s` }}>
              <CategoryCard cat={cat} i={i} t={t} />
            </div>
          ))}
        </div>

        {/* ── Learning + Also knows ── */}
        <div className="grid md:grid-cols-2 gap-5 mt-5">

          {/* Currently learning */}
          <div className="sr card">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
                style={{ background: 'rgba(var(--a-rgb),.1)', border: '1px solid rgba(var(--a-rgb),.18)' }}>
                📖
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-t3">Currently Learning</p>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {LEARNING.map(({ name, icon }) => (
                <div key={name} className="flex items-center gap-2.5 p-3 rounded-xl transition-all hover:-translate-y-0.5"
                  style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                  <span className="text-lg">{icon}</span>
                  <span className="text-sm font-medium text-t2">{name}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-t3 font-mono mt-4 flex items-center gap-1.5">
              <span style={{ color: 'var(--a)' }}>→</span>
              Always expanding — growth never stops.
            </p>
          </div>

          {/* Also familiar with */}
          <div className="sr sr-d1 card">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
                style={{ background: 'rgba(var(--a-rgb),.1)', border: '1px solid rgba(var(--a-rgb),.18)' }}>
                🧰
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-t3">{t.skills.alsoTitle}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {ALSO.map((s) => (
                <span key={s} className="chip transition-all hover:-translate-y-0.5">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
