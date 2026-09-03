import { Award } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-SA-2023',
      url: '#'
    },
    {
      id: 2,
      title: 'Google Cloud Professional Data Engineer',
      issuer: 'Google Cloud',
      date: '2023',
      credentialId: 'GCP-DE-2023',
      url: '#'
    },
    {
      id: 3,
      title: 'React Advanced Patterns',
      issuer: 'Udemy',
      date: '2022',
      credentialId: 'REACT-ADV-2022',
      url: '#'
    },
    {
      id: 4,
      title: 'JavaScript ES6+ Mastery',
      issuer: 'Coursera',
      date: '2022',
      credentialId: 'JS-ES6-2022',
      url: '#'
    },
    {
      id: 5,
      title: 'Full Stack Web Development',
      issuer: 'Codecademy',
      date: '2021',
      credentialId: 'FSWD-2021',
      url: '#'
    },
    {
      id: 6,
      title: 'Docker & Kubernetes for Developers',
      issuer: 'Linux Academy',
      date: '2021',
      credentialId: 'DK-2021',
      url: '#'
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">
          Certifications & Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary/50 border border-secondary rounded-lg p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                  <Award size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-accent mb-1 group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">{cert.issuer}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{cert.date}</span>
                    <span className="text-xs bg-primary px-2 py-1 rounded text-gray-400">
                      {cert.credentialId}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
