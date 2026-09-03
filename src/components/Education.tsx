import { GraduationCap } from 'lucide-react'

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      period: '2018 - 2022',
      details: 'Focus on Software Development and Web Technologies',
      achievements: [
        'GPA: 3.8/4.0',
        'Dean\'s List All Semesters',
        'Capstone Project: AI-Powered Task Manager'
      ]
    },
    {
      id: 2,
      degree: 'Diploma in Web Development',
      institution: 'Code Academy',
      period: '2017 - 2018',
      details: 'Full-Stack Development with JavaScript and Node.js',
      achievements: [
        'Completed 10+ Real-World Projects',
        'Graduated Top 5%',
        'Internship Offer After Completion'
      ]
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-primary border border-secondary rounded-lg p-8 hover:border-accent transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-accent">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-bold text-accent">{edu.degree}</h3>
                    <span className="text-sm text-gray-400 md:text-right">{edu.period}</span>
                  </div>
                  <p className="text-gray-300 mb-2">{edu.institution}</p>
                  <p className="text-gray-400 mb-4">{edu.details}</p>
                  <div className="space-y-1">
                    {edu.achievements.map((achievement) => (
                      <div key={achievement} className="text-sm text-gray-300 flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        {achievement}
                      </div>
                    ))}
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

export default Education
