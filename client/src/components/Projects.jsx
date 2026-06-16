const projects = [
  {
    title: 'AFX DSO Platform',
    description:
      'Enterprise-grade digital service operations platform built with React Native and Node.js. Features real-time data sync, role-based access control, and offline-capable mobile experience.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    github: 'https://github.com/yashmajithiya',
    live: null,
    featured: true,
  },
  {
    title: 'Task Management API',
    description:
      'RESTful API built with Express and MongoDB. Supports full CRUD for tasks, user authentication via JWT, team workspaces, and email notifications.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Nodemailer'],
    github: 'https://github.com/yashmajithiya',
    live: null,
    featured: true,
  },
  {
    title: 'Real-Time Chat App',
    description:
      'Full stack chat application with Socket.io. Users can join rooms, send messages, and see who is online — all in real time with zero-latency updates.',
    tech: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/yashmajithiya',
    live: null,
    featured: true,
  },
  {
    title: 'E-Commerce Store',
    description:
      'Complete e-commerce platform with product catalog, cart, Stripe payment integration, and admin dashboard for inventory management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind'],
    github: 'https://github.com/yashmajithiya',
    live: null,
    featured: false,
  },
  {
    title: 'Portfolio Website',
    description:
      'This very website — built with React, Tailwind CSS, and a Node.js backend for the contact form. Deployed on Vercel + Railway.',
    tech: ['React', 'Tailwind', 'Node.js', 'MongoDB', 'Vite'],
    github: 'https://github.com/yashmajithiya/personal-website',
    live: null,
    featured: false,
  },
  {
    title: 'Weather Dashboard',
    description:
      'A weather application that fetches real-time data from OpenWeather API, displays 7-day forecasts, and lets users save favourite cities.',
    tech: ['React', 'OpenWeather API', 'Chart.js', 'Vite'],
    github: 'https://github.com/yashmajithiya',
    live: null,
    featured: false,
  },
]

function ProjectCard({ project }) {
  return (
    <div className="card flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="text-3xl">📁</div>
        <div className="flex gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors" aria-label="Live site">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed flex-grow">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-5">
        {project.tech.map((t) => (
          <span key={t} className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-0.5 rounded">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <p className="section-sub">// 03. projects</p>
      <h2 className="section-heading">Things I&apos;ve Built</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://github.com/yashmajithiya"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline inline-block"
        >
          View More on GitHub
        </a>
      </div>
    </section>
  )
}
