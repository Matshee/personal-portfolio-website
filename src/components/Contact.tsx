import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <a
                href="mailto:tshidieunaciancube@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors duration-300 group"
              >
                <div className="bg-primary p-3 rounded-lg group-hover:bg-accent/10 transition-colors duration-300">
                  <Mail size={24} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-semibold">tshidieunaciancube@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="bg-primary p-3 rounded-lg">
                  <MapPin size={24} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-semibold">South Africa</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-secondary">
                <h4 className="text-lg font-bold text-accent mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-accent/10 p-3 rounded-lg text-accent hover:text-blue-400 transition-all duration-300"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-accent/10 p-3 rounded-lg text-accent hover:text-blue-400 transition-all duration-300"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:tshidieunaciancube@gmail.com"
                    className="bg-primary hover:bg-accent/10 p-3 rounded-lg text-accent hover:text-blue-400 transition-all duration-300"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-primary border border-secondary rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary border border-secondary rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:border-accent transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary border border-secondary rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:border-accent transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary border border-secondary rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:border-accent transition-colors duration-300"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-secondary border border-secondary rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-blue-600 text-primary font-bold py-3 rounded-lg transition-colors duration-300"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
