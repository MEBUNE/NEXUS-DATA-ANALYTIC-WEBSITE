
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  ArrowUpRight,
  Heart
} from 'lucide-react'

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const footerLinks = {
    solutions: [
      { name: 'Predictive Analytics', href: '#' },
      { name: 'Data Visualization', href: '#' },
      { name: 'Custom AI Solutions', href: '#' },
      { name: 'Data Engineering', href: '#' },
      { name: 'Business Intelligence', href: '#' }
    ],
    company: [
      { name: 'About Us', onClick: () => scrollToSection('about') },
      { name: 'Case Studies', onClick: () => scrollToSection('case-studies') },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' }
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Whitepapers', href: '#' },
      { name: 'Webinars', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Compliance', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' }
  ]

  return (
    <footer className="bg-dark-900 border-t border-white/10">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-6">
                <BarChart3 className="h-8 w-8 text-primary-500" />
                <span className="text-xl font-display font-bold gradient-text">
                  NEXUS
                </span>
              </div>

              <p className="text-dark-100 leading-relaxed mb-6">
                Transforming raw data into actionable strategic insights. 
                Trusted by 500+ enterprise clients worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-dark-100">
                  <Mail size={16} className="text-primary-400" />
                  <a href="mailto:hello@nexusanalytics.com" className="hover:text-primary-300 transition-colors">
                    hello@nexusanalytics.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-dark-100">
                  <Phone size={16} className="text-primary-400" />
                  <a href="tel:+1-555-0123" className="hover:text-primary-300 transition-colors">
                    +1 (555) 012-3456
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-dark-100">
                  <MapPin size={16} className="text-primary-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 glass rounded-lg hover:bg-white/10 transition-all duration-200 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} className="text-dark-100 group-hover:text-primary-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Columns */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
                <ul className="space-y-3">
                  {footerLinks.solutions.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-dark-100 hover:text-primary-300 transition-colors duration-200 flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      {link.onClick ? (
                        <button 
                          onClick={link.onClick}
                          className="text-dark-100 hover:text-primary-300 transition-colors duration-200 flex items-center group"
                        >
                          <span>{link.name}</span>
                          <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ) : (
                        <a 
                          href={link.href}
                          className="text-dark-100 hover:text-primary-300 transition-colors duration-200 flex items-center group"
                        >
                          <span>{link.name}</span>
                          <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Resources */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-dark-100 hover:text-primary-300 transition-colors duration-200 flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Legal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-dark-100 hover:text-primary-300 transition-colors duration-200 flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-dark-100 text-sm">
              <span>© 2024 Nexus Analytics. All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-2 text-dark-100 text-sm">
              <span>Built with</span>
              <Heart size={14} className="text-red-400 fill-current" />
              <span>by the Mebune Donstand</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer