import { Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovation Inc.',
      period: '2023 - Present',
      description: 'Leading development of scalable web applications using React and Node.js. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Reduced application load time by 40%',
        'Led migration to microservices architecture',
        'Mentored 3 junior developers'
      ]
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2021 - 2023',
      description: 'Developed and maintained full-stack applications. Collaborated with cross-functional teams to deliver projects on time.',
      achievements: [
        'Built 5+ production applications',
        'Improved API performance by 35%',
        'Implemented CI/CD pipelines'
      ]
    },
    {
      id: 3,
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      period: '2020 - 2021',
      description: 'Started career learning modern web technologies. Contributed to frontend and backend development.',
      achievements: [
        'Built responsive web applications',
        'Fixed critical production bugs',
        'Learned React and Node.js'
      ]
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-secondary/50 border border-secondary rounded-lg p-8 hover:border-accent transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-accent mt-1">
                  <Briefcase size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-bold text-accent">{exp.title}</h3>
                    <span className="text-sm text-gray-400 md:text-right">{exp.period}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.company}</p>
                  <p className="text-gray-400 mb-4">{exp.description}</p>
                  <div className="border-l-2 border-accent pl-4">
                    <p className="text-sm font-semibold text-accent mb-2">Key Achievements:</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-accent mt-1">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
