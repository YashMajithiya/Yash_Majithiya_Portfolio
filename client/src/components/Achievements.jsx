import { useState } from 'react'
import { createPortal } from 'react-dom'

const ACHIEVEMENTS = [
  {
    id: 'rnr-gateway',
    type: 'R&R — Rewards & Recognition',
    title: 'Bright Beginner Award',
    org: 'Gateway Group of Companies',
    year: '2024',
    category: 'Quarterly Award',
    color: { from: '#f59e0b', to: '#fbbf24', rgb: '245,158,11' },
    icon: '🏆',
    shortDesc: 'Awarded the "Bright Beginner" title at Gateway Group\'s quarterly R&R for outstanding contributions across AFX DSO, AFX DigiSign, and overall performance.',
    longDesc: 'Received the Bright Beginner Award at the Gateway Group Quarterly Rewards & Recognition (R&R) event in 2024. The award recognised early-career excellence and strong contributions to enterprise-grade products — specifically AFX DSO, the automotive dealer service operations platform deployed across Norway, Denmark, and the Netherlands, and AFX DigiSign, a multi-tenant digital signature platform architected and delivered from the ground up. The recognition reflected consistent high-quality delivery, ownership, and overall performance as a Software Engineer at Autofacets (A Gateway Group company).',
  },
]

function AchievementModal({ item, onClose }) {
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-3xl overflow-hidden"
        style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Top accent */}
        <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${item.color.from}, ${item.color.to})` }} />

        <div className="p-7 sm:p-9">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: `rgba(${item.color.rgb},.15)`, border: `1.5px solid rgba(${item.color.rgb},.3)` }}
            >
              {item.icon}
            </div>
            <div>
              <span
                className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-lg mb-2 inline-block"
                style={{ background: `rgba(${item.color.rgb},.12)`, color: item.color.from, border: `1px solid rgba(${item.color.rgb},.25)` }}
              >
                {item.type}
              </span>
              <h3 className="font-black text-xl text-t1 leading-tight">{item.title}</h3>
              <p className="text-sm font-semibold mt-0.5" style={{ color: item.color.from }}>{item.org}</p>
            </div>
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[item.year, item.category].map(tag => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-1 rounded-lg font-semibold"
                style={{ background: `rgba(${item.color.rgb},.1)`, color: item.color.from, border: `1px solid rgba(${item.color.rgb},.18)` }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="rounded-2xl p-5" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
            {item.longDesc ? (
              <p className="text-sm leading-relaxed text-t2">{item.longDesc}</p>
            ) : (
              <p className="text-sm leading-relaxed text-t3 italic">
                Full details coming soon — check back after the next update.
              </p>
            )}
          </div>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-t3 hover:text-t1 transition-colors"
          style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>,
    document.body
  )
}

function AchievementCard({ item, onClick }) {
  return (
    <div
      className="sr card relative overflow-hidden cursor-pointer group"
      onClick={() => onClick(item)}
      style={{ transition: 'transform 0.18s, box-shadow 0.18s' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: `linear-gradient(90deg, ${item.color.from}, ${item.color.to})` }} />

      <div className="flex items-start gap-4 mt-2">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
          style={{ background: `rgba(${item.color.rgb},.15)`, border: `1.5px solid rgba(${item.color.rgb},.25)` }}
        >
          {item.icon}
        </div>

        <div className="flex-1 min-w-0">
          {/* Badge */}
          <span
            className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-lg mb-2 inline-block"
            style={{ background: `rgba(${item.color.rgb},.12)`, color: item.color.from, border: `1px solid rgba(${item.color.rgb},.2)` }}
          >
            {item.type}
          </span>

          <h3 className="font-black text-base text-t1 leading-snug">{item.title}</h3>
          <p className="text-xs font-semibold mt-0.5" style={{ color: item.color.from }}>{item.org}</p>
          <p className="text-sm text-t2 mt-2 leading-relaxed">{item.shortDesc}</p>
        </div>

        {/* Year + arrow */}
        <div className="flex-shrink-0 text-right">
          <p className="font-mono text-xs text-t3">{item.year}</p>
          <p className="text-[10px] text-t3 mt-3 group-hover:text-a transition-colors">View details →</p>
        </div>
      </div>
    </div>
  )
}

export default function Achievements() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="achievements" className="py-24 sm:py-32" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="sr">
          <p className="eyebrow">05 — Achievements</p>
          <h2 className="h-section mb-4">
            Awards &amp; <span className="grad">Recognition</span>
          </h2>
        </div>

        <div className="sep mt-8 mb-12" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map(item => (
            <AchievementCard key={item.id} item={item} onClick={setSelected} />
          ))}
        </div>
      </div>

      {selected && <AchievementModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
