
import { motion } from 'framer-motion'

const ClientsSection = () => {
  // Mock Fortune 500 company logos - using company names as placeholders
  const clients = [
    'Microsoft', 'Amazon', 'Apple', 'Google', 'Meta',
    'Tesla', 'Netflix', 'Adobe', 'Salesforce', 'Oracle',
    'IBM', 'Intel', 'NVIDIA', 'Cisco', 'PayPal'
  ]

  return (
    <section className="section-padding bg-dark-800/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-lg font-medium text-dark-100 mb-4">
            Trusted by Industry Leaders
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent mx-auto"></div>
        </motion.div>

        {/* Infinite scroll container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-900 to-transparent z-10"></div>
          
          {/* First row - scrolling right */}
          <motion.div
            animate={{ x: [0, -100 * clients.length] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-12 mb-8"
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 min-w-[200px] glass rounded-lg px-6 hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-xl font-semibold text-dark-100 whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Second row - scrolling left */}
          <motion.div
            animate={{ x: [-100 * clients.length, 0] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-12"
          >
            {[...clients.slice(5), ...clients.slice(5)].map((client, index) => (
              <div
                key={`${client}-reverse-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 min-w-[200px] glass rounded-lg px-6 hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-xl font-semibold text-dark-100 whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '500+', label: 'Global Enterprises', color: 'text-primary-400' },
            { number: '50M+', label: 'Records Analyzed', color: 'text-accent' },
            { number: '99.9%', label: 'Uptime Guarantee', color: 'text-green-400' },
            { number: '24/7', label: 'Expert Support', color: 'text-purple-400' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-lg p-6"
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-dark-100 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ClientsSection