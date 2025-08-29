
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  BarChart3, 
  Brain, 
  Database, 
  Zap, 
  Target,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast trends and outcomes with advanced machine learning algorithms to stay ahead of market changes.',
      features: ['Time Series Forecasting', 'Risk Assessment', 'Demand Planning', 'Customer Behavior Prediction'],
      color: 'from-primary-500 to-primary-600',
      delay: 0.1
    },
    {
      icon: BarChart3,
      title: 'Data Visualization',
      description: 'Transform complex datasets into stunning, interactive dashboards that tell compelling data stories.',
      features: ['Interactive Dashboards', 'Real-time Reporting', 'Custom Visualizations', 'Mobile-Responsive Design'],
      color: 'from-accent to-cyan-500',
      delay: 0.2
    },
    {
      icon: Brain,
      title: 'Custom AI Solutions',
      description: 'Tailored artificial intelligence solutions designed to solve your unique business challenges.',
      features: ['Natural Language Processing', 'Computer Vision', 'Recommendation Systems', 'Process Automation'],
      color: 'from-purple-500 to-pink-500',
      delay: 0.3
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Build robust data pipelines and infrastructure to ensure your data is clean, accessible, and secure.',
      features: ['ETL/ELT Pipelines', 'Data Lake Architecture', 'Real-time Streaming', 'Data Quality Management'],
      color: 'from-green-500 to-emerald-500',
      delay: 0.4
    }
  ]

  return (
    <section id="services" className="section-padding bg-dark-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-6">
            <Target size={16} className="mr-2" />
            Our Services
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Comprehensive</span> Data Solutions
          </h2>
          
          <p className="text-xl text-dark-100 max-w-3xl mx-auto leading-relaxed">
            From raw data to actionable insights, we provide end-to-end analytics solutions 
            that drive measurable business outcomes.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                  <service.icon size={32} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary-300 transition-colors duration-200">
                  {service.title}
                </h3>
                
                <p className="text-dark-100 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-dark-100">
                      <CheckCircle size={16} className="text-primary-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <button className="group/btn flex items-center text-primary-400 hover:text-primary-300 font-semibold transition-colors duration-200">
                  <span>Learn More</span>
                  <ArrowRight 
                    size={16} 
                    className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" 
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-display font-bold text-white mb-8">
            Our Proven Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { 
                step: '01', 
                title: 'Discovery', 
                description: 'Understand your business goals and data landscape',
                icon: Target 
              },
              { 
                step: '02', 
                title: 'Design', 
                description: 'Architect scalable solutions tailored to your needs',
                icon: Database 
              },
              { 
                step: '03', 
                title: 'Develop', 
                description: 'Build and implement robust analytics platforms',
                icon: Zap 
              },
              { 
                step: '04', 
                title: 'Deploy', 
                description: 'Launch solutions with ongoing support and optimization',
                icon: TrendingUp 
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connection Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-transparent z-0"></div>
                )}
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white font-bold text-lg mb-4">
                    {process.step}
                  </div>
                  
                  <process.icon size={24} className="text-primary-400 mx-auto mb-3" />
                  
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {process.title}
                  </h4>
                  
                  <p className="text-dark-100 text-sm">
                    {process.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection