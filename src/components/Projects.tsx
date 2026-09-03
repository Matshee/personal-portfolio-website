import { Github, ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and user authentication.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      image: '🛒',
      github: 'https://github.com',
      live: 'https://example.com',
      highlights: ['Payment Processing', 'Real-time Inventory', 'User Dashboard']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and progress tracking.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      image: '✅',
      github: 'https://github.com',
      live: 'https://example.com',
      highlights: ['Real-time Sync', 'Team Collaboration', 'Analytics']
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application featuring current conditions, forecasts, and location-based weather data.',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Tailwind CSS'],
      image: '🌦️',
      github: 'https://github.com',
      live: 'https://example.com',
      highlights: ['Real-time Data', 'Location Based', 'Responsive Design']
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-primary border border-secondary rounded-lg overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              <div className="p-8">
                <div className="text-5xl mb-4">{project.image}</div>
                <h3 className="text-2xl font-bold mb-3 text-accent">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <span key={highlight} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary px-3 py-1 rounded text-sm text-gray-300 border border-secondary/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-secondary">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors duration-300"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
