const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'The Gateway Corp',
    period: '2023 – Present',
    location: 'India',
    description: [
      'Building and maintaining AFX DSO — a large-scale enterprise platform using React Native, Node.js, and MongoDB.',
      'Architected RESTful APIs consumed by mobile and web clients with real-time capabilities.',
      'Collaborated closely with product and design teams in an Agile environment.',
      'Implemented CI/CD pipelines and code review processes to maintain code quality.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Freelance',
    period: '2022 – 2023',
    location: 'Remote',
    description: [
      'Delivered 10+ client projects including e-commerce stores, dashboards, and landing pages.',
      'Built responsive UIs using React, Next.js, and Tailwind CSS.',
      'Integrated third-party APIs including Stripe, Firebase, and various REST services.',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'Tech Startup',
    period: '2021 – 2022',
    location: 'India',
    description: [
      'Worked on the front-end of a SaaS product, implementing features in React.',
      'Wrote unit tests using Jest and React Testing Library.',
      'Gained hands-on experience with Git workflows and Agile sprints.',
    ],
  },
]

const education = [
  {
    degree: "Bachelor's in Computer Science",
    institution: 'University Name',
    period: '2019 – 2023',
    grade: 'First Class',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-sub">// 04. experience</p>
        <h2 className="section-heading">Work Experience</h2>

        <div className="mt-10 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="md:pl-20 relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-[26px] top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-dark" />

                <div className="card">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-400 font-mono text-sm">{exp.period}</p>
                      <p className="text-slate-500 text-sm">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.description.map((point, j) => (
                      <li key={j} className="text-slate-400 text-sm flex gap-2">
                        <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="text-white font-semibold text-xl mb-6">Education</h3>
          {education.map((edu, i) => (
            <div key={i} className="card flex flex-wrap items-center justify-between gap-4">
              <div>
                <h4 className="text-white font-medium">{edu.degree}</h4>
                <p className="text-primary text-sm">{edu.institution}</p>
              </div>
              <div className="text-right">
                <p className="text-slate-400 font-mono text-sm">{edu.period}</p>
                <p className="text-slate-500 text-sm">{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
