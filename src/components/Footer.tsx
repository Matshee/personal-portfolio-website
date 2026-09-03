import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary border-t border-secondary py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent mb-2">
              Tshidi Eunacia Ncube
            </h3>
            <p className="text-gray-400 text-sm">
              Full-Stack Developer | Problem Solver | Tech Enthusiast
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-accent mb-3">Quick Links</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-accent mb-3">Connect</h4>
            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                LinkedIn
              </a>
              <a href="mailto:tshidieunaciancube@gmail.com" className="text-gray-400 hover:text-accent transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              © {currentYear} Tshidi Eunacia Ncube. All rights reserved.
            </p>
            <div className="flex items-center gap-1 mt-4 md:mt-0">
              Made with <Heart size={14} className="text-accent" /> using React & TypeScript
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
