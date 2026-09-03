const Skills = () => {
  const technicalSkills = [
    { category: 'Frontend', skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'JavaScript', 'Vue.js'] },
    { category: 'Backend', skills: ['Node.js', 'Express.js', 'Python', 'MongoDB', 'PostgreSQL', 'REST APIs'] },
    { category: 'Tools & DevOps', skills: ['Git', 'GitHub', 'Docker', 'CI/CD', 'VS Code', 'Linux'] },
    { category: 'Other', skills: ['Figma', 'Agile', 'Testing', 'AWS', 'Firebase', 'Vercel'] },
  ]

  const softSkills = [
    'Problem Solving',
    'Communication',
    'Team Collaboration',
    'Time Management',
    'Adaptability',
    'Leadership',
    'Critical Thinking',
    'Creativity',
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {technicalSkills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-secondary/50 p-6 rounded-lg border border-secondary hover:border-accent transition-colors duration-300">
              <h3 className="text-xl font-bold text-accent mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-primary px-3 py-1 rounded-full text-sm text-gray-300 border border-secondary hover:border-accent transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-secondary/50 p-8 rounded-lg border border-secondary">
          <h3 className="text-2xl font-bold text-accent mb-6">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill}
                className="bg-primary p-4 rounded-lg text-center text-gray-300 border border-secondary hover:border-accent hover:bg-primary/80 transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
