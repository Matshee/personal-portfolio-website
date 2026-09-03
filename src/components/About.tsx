const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm a dedicated full-stack developer with a passion for creating innovative solutions 
              that solve real-world problems. With strong expertise in modern web technologies and a 
              commitment to clean code, I strive to build applications that are not only functional 
              but also delightful to use.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              My journey in tech has been driven by curiosity and a desire to continuously learn and 
              adapt to new technologies. I believe in the power of collaboration and communication to 
              create exceptional digital experiences.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
              or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="bg-primary p-8 rounded-lg border border-secondary">
            <h3 className="text-2xl font-bold mb-6 text-accent">Quick Facts</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                📍 Based in South Africa
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                💼 Full-Stack Developer
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                🎓 Continuously Learning
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                🌐 Open Source Enthusiast
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                ⚡ Problem Solver
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
