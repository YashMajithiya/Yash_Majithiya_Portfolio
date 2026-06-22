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
    title: 'AFX DSO',
    tagline: 'Automotive dealer service operations — React Native mobile platform',
    desc: 'React Native 0.85.3 mobile app for automotive dealer service operations across multiple Autofacets brands.',
    bullets: [
      'Azure AD / MSAL Single Sign-On with multi-tenant OAuth2 across dealer networks',
      'Work order management with tabbed view (checklist, jobs, parts, media, invoice, communication)',
      'Dynamic checklists, SST diagnostic workflows, car 2D dent marking & media capture',
      'Mechanic stamp-in/out, digital signatures, QR scanning, and audio recording for comments',
      'Firebase, Azure Blob Storage, CryptoJS AES-256-CBC encryption & Redux (~20 reducers)',
    ],
    longDesc: 'AFX DSO (Dealer Service Operations) is a React Native 0.85.3 mobile application built for automotive dealer service operations, supporting multiple brands under the Autofacets (A Gateway Group) umbrella. The app covers the full dealer service lifecycle — from appointment booking through work order management, parts handling, and invoice generation. A robust encryption layer (AES-256-CBC via CryptoJS) secures all API payloads, while Redux with ~20 reducers manages complex state across dealer-specific workflows. The app ships with multi-language support across six locales and deep integrations with Azure AD, Firebase, and Azure Blob Storage.',
    features: [
      'Azure AD / MSAL Single Sign-On',
      'Work order management with tabbed detail view (checklist, jobs, parts, media, invoice, communication)',
      'Dynamic checklists & SST (Super Service Triage) diagnostic workflows',
      'Car 2D dent marking & image annotation',
      'Photo/video capture with watermarking',
      'Audio recording for comments',
      'Mechanic stamp-in/out & digital signature capture',
      'QR code scanning to open work orders',
      'Parts, services, packages & labor management',
      'Appointment calendar & new booking creation',
      'Key pickup kiosk (dealer-gated)',
      'Dealer special tools search',
      'In-app PDF viewer & technical manuals',
      'Multi-language support (EN, DE, FR, DA, NO, NL)',
    ],
    integrations: [
      'Firebase — Analytics, Crashlytics, FCM push notifications, Firestore telemetry',
      'Azure AD / MSAL — Multi-tenant OAuth2 SSO',
      'Azure Blob Storage — Video delivery',
      'CryptoJS — AES-256-CBC API payload encryption',
      'Axios — HTTP client with JWT auto-refresh',
      'Redux + Thunk — State management (~20 reducers)',
      'react-native-vision-camera, image-crop-picker, image-marker, blob-util, pdf, video, signature-capture, nitro-sound',
    ],
    role: 'React Native Developer',
    impact: 'Deployed across automotive dealer networks in 6 languages for multiple Autofacets brands',
    tech: ['React Native 0.85.3', 'React 19', 'Redux + Thunk', 'Axios', 'Firebase', 'Azure AD / MSAL', 'Azure Blob', 'CryptoJS'],
    github: null,
    live: null,
    featured: true,
    year: '2024',
  },
  {
    n: '02',
    title: 'AFX DigiSign',
    tagline: 'Multi-tenant digital signature platform for automotive dealerships',
    desc: 'React Native mobile app that digitizes field service paperwork and captures legally binding customer signatures on-site.',
    bullets: [
      'Real-time work order delivery to service advisors via Microsoft SignalR',
      'Customers review and sign digitally on a tablet — legally binding on-site signatures',
      'Signed documents instantly uploaded to the server upon completion',
      'Multi-tenant architecture — multiple dealership groups from a single codebase',
    ],
    longDesc: 'AFX DigiSign is a multi-tenant React Native mobile app for automotive dealerships that digitizes field service paperwork and captures legally binding customer signatures on-site. Work orders are delivered to service advisors in real time via Microsoft SignalR, customers review and sign on a tablet, and signed documents are instantly uploaded to the server. The multi-tenant architecture supports multiple dealership groups from a single codebase, making it ideal for scalable enterprise deployments.',
    features: [
      'Delivers work orders to service advisors in real time',
      'Customers review and sign digitally on a tablet',
      'Signed documents are instantly uploaded to the server',
      'Supports multiple dealership groups (tenants) from a single codebase',
    ],
    integrations: [
      'React Native 0.85 + React 19 — cross-platform mobile',
      'Redux + Thunk — centralized state management',
      'Microsoft SignalR — real-time work order push notifications',
      'Axios — REST API communication',
      'AES (CryptoJS) — end-to-end encrypted API payloads',
      'Firebase — Crashlytics (error tracking), Analytics, FCM (push notifications)',
      'React Navigation 7 — stack + drawer navigation',
      'i18n-js — multi-language support (English, Norwegian, Dutch)',
      'AsyncStorage + SecureStorage — local session persistence',
      'react-native-signature-canvas — digital signature capture',
    ],
    role: 'React Native Developer',
    impact: 'Digitized field signature workflows across multiple automotive dealership groups from a single codebase',
    tech: ['React Native 0.85', 'React 19', 'Redux + Thunk', 'SignalR', 'Firebase', 'CryptoJS', 'Axios', 'i18n-js'],
    github: null,
    live: null,
    featured: true,
    year: '2024',
  },
  {
    n: '03',
    title: 'Gateway Prayas',
    tagline: 'Internal workforce welfare and assistance platform — AF-X',
    desc: 'Internal AF-X project built during the training phase, exploring the full MERN stack with a focus on clean architecture and reusable components.',
    longDesc: 'Gateway Prayas is an internal enterprise project developed at Autofacets (A Gateway Group company) during the 6-month training phase. The app was built to explore full-stack development with React, Node.js, Express.js, and MongoDB, with a focus on scalable architecture, reusable component libraries, and clean code practices. It served as the first end-to-end enterprise-grade application delivered at Gateway Group.',
    features: [
      'Full-stack development with React + Node.js + MongoDB',
      'Modular architecture with reusable component library',
      'REST API design and integration with Express.js',
      'User authentication and role-based access control',
      'Responsive UI with a clean, consistent design system',
    ],
    role: 'Trainee Developer',
    impact: 'First enterprise-grade application built end-to-end at Gateway Group',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
    github: null,
    live: null,
    featured: false,
    year: '2022',
  },
  {
    n: '04',
    title: 'Expense Manager',
    tagline: 'Internal expense tracking and reporting for AF-X teams',
    desc: 'Internal AF-X project for tracking expenses, generating reports, and managing budgets — built during the 6-month training phase.',
    longDesc: 'Expense Manager is an internal application developed at Autofacets during the training period. The project covers expense submission, category-based tracking, reporting dashboards with charts, and budget management for internal teams. It was a hands-on exercise in building data-driven React applications backed by a Node.js REST API and MongoDB database, with SQL explored alongside.',
    features: [
      'Expense submission with category-based tracking',
      'Monthly and yearly reporting dashboard with charts',
      'Budget allocation and over-limit alerts',
      'User authentication with role-based views (employee / admin)',
      'Export reports to PDF and CSV',
    ],
    role: 'Trainee Developer',
    impact: 'Internalized full MERN stack patterns applied in production applications',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'JavaScript'],
    github: null,
    live: null,
    featured: false,
    year: '2023',
  },
  {
    n: '05',
    title: 'Craft Beverages',
    tagline: 'US-based loyalty and rewards app for craft beverage brands',
    desc: 'React Native loyalty app for US craft beverage brands with stamps, rewards, photo/video, and payment integrations — serving 1,000+ users across the United States.',
    bullets: [
      'Stamps and rewards system driving repeat customer engagement',
      'Photo and video integration for product showcases and user-generated content',
      'Payment integration enabling in-app purchases and transactions',
      'Multi-tenant: 20 brand-specific apps from a single codebase serving 1,000+ US users',
    ],
    longDesc: 'Craft Beverages is a US-based React Native mobile loyalty and rewards application serving craft beverage brands. The project involved 20 applications sharing a single codebase, each customized with major UI changes and minor functionality differences per brand identity. Features include a stamps-based loyalty system, photo/video capture for product content, payment integrations, and an admin panel for campaign management. Over 1,000 customers use the applications daily across the United States.',
    features: [
      'Stamps-based loyalty and rewards system',
      'Photo and video integration for product content and UGC',
      'Payment processing integration',
      'Per-brand major UI customization with shared core functionality',
      'Push notifications for rewards and promotions',
      'Admin panel for campaign and rewards management',
    ],
    role: 'Software Developer (Internship)',
    impact: '1,000+ active users across the US — 20 brand apps from a single codebase',
    tech: ['React Native', 'Redux', 'REST APIs', 'Firebase', 'Stripe', 'JavaScript'],
    github: null,
    live: null,
    featured: true,
    year: '2023',
  },
  {
    n: '06',
    title: 'Hospital Management System',
    tagline: 'Full-featured hospital operations with ASP.NET',
    desc: 'Comprehensive hospital management system covering patient records, appointments, billing, and staff management — built with ASP.NET.',
    longDesc: 'A comprehensive hospital management system built during the training phase. The application manages patient records, doctor appointments, billing and invoicing, staff schedules, and medical inventory. Built with ASP.NET and JavaScript, it provided hands-on experience with multi-module enterprise system design and relational database management.',
    features: [
      'Patient registration and medical record management',
      'Doctor appointment scheduling system',
      'Billing and invoice generation',
      'Staff management and scheduling',
      'Medical inventory tracking',
    ],
    role: 'Trainee Developer',
    impact: 'Demonstrated enterprise-level system design during training',
    tech: ['ASP.NET', 'JavaScript', 'SQL Server', 'HTML/CSS'],
    github: 'https://github.com/YashMajithiya/Hospital_Management_System_With_ASP.NET',
    live: null,
    featured: false,
    year: '2022',
  },
  {
    n: '07',
    title: 'Smart Attendance System',
    tagline: 'Dual-mode attendance via QR code and facial recognition',
    desc: 'Python attendance system combining QR code scanning and facial recognition for automated, accurate attendance tracking.',
    longDesc: 'A smart attendance system that combines two verification modes: QR code scanning for quick check-ins and facial recognition using OpenCV for identity verification. Built with Python during the training phase, this project explored computer vision, image processing, and biometric authentication fundamentals.',
    features: [
      'Dual-mode: QR code scan + facial recognition',
      'Real-time face detection with OpenCV',
      'Automated attendance logging with timestamps',
      'Admin dashboard for attendance reports',
      'Export to CSV / Excel',
    ],
    role: 'Trainee Developer',
    impact: 'Explored computer vision and biometric authentication techniques',
    tech: ['Python', 'OpenCV', 'QR Code', 'SQLite', 'HTML/CSS'],
    github: 'https://github.com/YashMajithiya/Attendance_system_with_qrcode_and_Face_Attendance',
    live: null,
    featured: false,
    year: '2022',
  },
  {
    n: '08',
    title: 'E-Commerce (Laravel 8)',
    tagline: 'Full-featured storefront built with PHP / Laravel',
    desc: 'Complete e-commerce application with product management, cart, checkout, and admin panel — built with Laravel 8 and PHP.',
    longDesc: 'A full-featured e-commerce web application built with Laravel 8 during the training phase. The project covers product catalog management, shopping cart, checkout, order management, and a comprehensive admin dashboard for inventory and order tracking. This project was an exploration of PHP/Laravel alongside SQL database design.',
    features: [
      'Product catalog with categories and search',
      'Shopping cart and checkout flow',
      'Order management and tracking',
      'Admin dashboard for inventory management',
      'User authentication with order history',
    ],
    role: 'Trainee Developer',
    impact: 'Built end-to-end e-commerce system during tech exploration phase',
    tech: ['PHP', 'Laravel 8', 'MySQL', 'HTML/CSS', 'JavaScript'],
    github: 'https://github.com/YashMajithiya/ecommerce_website_in_laravel8',
    live: null,
    featured: false,
    year: '2022',
  },
  {
    n: '09',
    title: 'Django Attendance System',
    tagline: 'Web-based attendance management with Python / Django',
    desc: 'Django-powered attendance management system with student and faculty tracking, reports, and a clean admin interface.',
    longDesc: 'A web-based attendance management system built with Python and Django. Faculty can mark attendance, students view their records, and administrators generate reports. This project explored Django ORM, class-based views, and web-based admin interfaces during the Python and SQL exploration phase of training.',
    features: [
      'Student and faculty attendance tracking',
      'Role-based dashboards (student / faculty / admin)',
      'Attendance reports with date range filtering',
      'Django admin interface for configuration',
      'Import and export attendance data',
    ],
    role: 'Trainee Developer',
    impact: 'Explored Python/Django web framework alongside SQL databases',
    tech: ['Python', 'Django', 'SQLite', 'HTML/CSS', 'Bootstrap'],
    github: 'https://github.com/YashMajithiya/Django_Attendance_System',
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
  const { t } = useLanguage()
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
          {p.bullets ? (
            <ul className="mb-6 space-y-2">
              {p.bullets.map((b, i) => (
                <li key={i} className="flex gap-2.5 text-[0.875rem] leading-relaxed text-t2">
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: col.from }} />
                  {b}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[0.9rem] leading-[1.75] text-t2 mb-6">{p.desc}</p>
          )}

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
              <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: col.from }}>{t.projects.impact}</p>
            </div>
            <p className="text-sm font-bold text-t1 leading-snug">{p.impact}</p>
          </div>

          {/* Role */}
          <div className="sm:flex-1 md:flex-none rounded-xl p-4"
            style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
            <p className="font-mono text-[9px] uppercase tracking-widest text-t3 mb-1.5">{t.projects.role}</p>
            <p className="text-sm font-semibold text-t1 leading-snug">{p.role}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-5 flex items-center justify-end gap-2" style={{ borderTop: '1px solid var(--border)' }}>
        <span className="text-[11px] font-mono font-semibold group-hover:translate-x-0.5 transition-transform"
          style={{ color: col.from }}>
          {t.projects.viewFullDetails}
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
  const { t } = useLanguage()
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
          {t.projects.viewDetails}
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
  const { t } = useLanguage()

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
            <p className="font-mono text-[10px] uppercase tracking-widest text-t3 mb-3">{t.projects.overview}</p>
            <p className="text-[0.875rem] leading-[1.75] text-t2">{project.longDesc}</p>
          </div>

          {project.features?.length > 0 && (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-t3 mb-3">{t.projects.keyFeatures}</p>
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

          {project.integrations?.length > 0 && (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-t3 mb-3">{t.projects.integrations}</p>
              <ul className="space-y-2.5">
                {project.integrations.map((f, i) => (
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
                  {t.projects.impact}
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
                <GHIcon /> {t.projects.viewOnGH}
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                className="btn-primary flex-1 justify-center">
                {t.projects.liveDemo} <ExtIcon />
              </a>
            )}
            {!project.github && !project.live && (
              <p className="text-xs font-mono text-t3 text-center pt-2">
                {t.projects.privateSource}
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

  const projects = PROJECTS.map((p, i) => ({ ...p, ...(t.projectsData?.[i] || {}) }))
  const [hero, signature, ...rest] = projects

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

        {/* ── Featured hero projects ── */}
        <div className="sr mb-5">
          <FeaturedCard
            p={hero}
            col={COLORS[0]}
            onClick={() => setSelected({ project: hero, ci: 0 })}
          />
        </div>

        <div className="sr mb-5">
          <FeaturedCard
            p={signature}
            col={COLORS[1]}
            onClick={() => setSelected({ project: signature, ci: 1 })}
          />
        </div>

        {/* ── Remaining projects ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((p, i) => {
            const ci = (i + 2) % COLORS.length
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
