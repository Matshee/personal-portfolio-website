import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="text-center max-w-3xl">
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-blue-500 p-1">
            <div className="w-full h-full rounded-full bg-primary flex items-center justify-center text-5xl">
              👩‍💻
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">
          Tshidi Eunacia Ncube
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          Full-Stack Developer | Problem Solver | Tech Enthusiast
        </p>

        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Passionate about building elegant, scalable solutions with modern technologies. 
          Dedicated to continuous learning and delivering exceptional user experiences.
        </p>

        <div className="flex gap-4 justify-center mb-12">
          <a
            href="#contact"
            className="bg-accent hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="border-2 border-accent hover:bg-accent/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            View My Work
          </a>
        </div>

        <div className="flex gap-6 justify-center mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:tshidieunaciancube@gmail.com"
            className="text-gray-400 hover:text-accent transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-accent" size={24} />
        </div>
      </div>
    </section>
  )
}

export default Hero
