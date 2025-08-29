import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Zap, 
  CheckCircle, 
  Mail, 
  Phone, 
  Calendar,
  Sparkles
} from 'lucide-react'

const CTASection = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Demo request submitted:', email)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const benefits = [
    'Free 30-day trial with full platform access',
    'Dedicated analytics consultant assigned',
    'Custom data integration setup',
    'Real-time dashboard configuration',
    '24/7 expert support during trial'
  ]

  return (
    <section id="contact" className="section-padding bg-dark-800/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-primary-500/5 via-transparent to-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-accent/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-6">
              <Sparkles size={16} className="mr-2" />
              Ready to Transform Your Data?
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Start Your <span className="gradient-text">Analytics Journey</span> Today
            </h2>
            
            <p className="text-xl text-dark-100 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of industry leaders who have already transformed their 
              data into competitive advantages. Get started with a free consultation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Main CTA Form */}
              <div className="glass rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg">
                    <Zap size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Request a Demo
                    </h3>
                    <p className="text-dark-100">
                      See our platform in action
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-100 mb-2">
                      Business Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-white/20 rounded-lg text-white placeholder-dark-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitted}
                    className={`w-full py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300 ${
                      isSubmitted
                        ? 'bg-green-500 text-white'
                        : 'bg-primary-500 hover:bg-primary-600 text-white hover:shadow-lg hover:shadow-primary-500/25'
                    }`}
                    whileHover={!isSubmitted ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitted ? { scale: 0.98 } : {}}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle size={20} />
                        <span>Request Submitted!</span>
                      </>
                    ) : (
                      <>
                        <span>Get Your Free Demo</span>
                        <ArrowRight size={20} />
                      </>
                    )}
                  </motion.button>
                </form>

                <p className="text-xs text-dark-100 mt-4 text-center">
                  No spam, ever. We'll follow up within 24 hours to schedule your demo.
                </p>
              </div>

              {/* Alternative Contact Methods */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.a
                  href="mailto:hello@nexusanalytics.com"
                  className="glass rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={24} className="text-primary-400 mb-3 group-hover:text-primary-300" />
                  <h4 className="font-semibold text-white mb-1">Email Us</h4>
                  <p className="text-sm text-dark-100">hello@nexusanalytics.com</p>
                </motion.a>

                <motion.a
                  href="tel:+1-555-0123"
                  className="glass rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={24} className="text-accent mb-3 group-hover:text-cyan-300" />
                  <h4 className="font-semibold text-white mb-1">Call Us</h4>
                  <p className="text-sm text-dark-100">+1 (555) 012-3456</p>
                </motion.a>
              </div>
            </motion.div>

            {/* Right Side - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* What You Get */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Calendar size={24} className="text-accent" />
                  <h3 className="text-2xl font-bold text-white">
                    What's Included in Your Demo
                  </h3>
                </div>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-dark-100 leading-relaxed">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 border-l-4 border-primary-500"
              >
                <h4 className="font-semibold text-white mb-3">
                  Why Leading Companies Choose Nexus
                </h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-400">500+</div>
                    <div className="text-sm text-dark-100">Enterprise Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">99.9%</div>
                    <div className="text-sm text-dark-100">Uptime SLA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">ISO 27001</div>
                    <div className="text-sm text-dark-100">Certified</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">24/7</div>
                    <div className="text-sm text-dark-100">Support</div>
                  </div>
                </div>
              </motion.div>

              {/* Urgency Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-primary-500/20 to-accent/20 rounded-lg p-6 border border-primary-500/30"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Sparkles size={20} className="text-yellow-400" />
                  <span className="text-lg font-semibold text-white">
                    Limited Time Offer
                  </span>
                </div>
                <p className="text-dark-100 text-sm">
                  Get 3 months free when you sign up during your demo call. 
                  Offer valid through the end of this month.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection