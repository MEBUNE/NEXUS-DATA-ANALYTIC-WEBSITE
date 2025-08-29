import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  Users, 
  DollarSign,
  ArrowUpRight,
  Award,
  Clock
} from 'lucide-react'

const CaseStudiesSection = () => {
  const [activeCase, setActiveCase] = useState(0)

  const caseStudies = [
    {
      id: 1,
      client: 'TechFlow Industries',
      industry: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center',
      challenge: 'TechFlow struggled with inefficient supply chain operations, leading to 15% excess inventory costs and frequent stockouts affecting customer satisfaction.',
      solution: 'Implemented predictive analytics for demand forecasting and supply chain optimization, integrating real-time data from multiple sources including weather, market trends, and historical patterns.',
      results: [
        { metric: '+30%', label: 'Revenue Growth', icon: DollarSign },
        { metric: '-40%', label: 'Inventory Costs', icon: TrendingUp },
        { metric: '95%', label: 'Forecast Accuracy', icon: Award }
      ],
      duration: '6 months',
      testimonial: 'Nexus Analytics transformed our operations completely. The ROI was evident within the first quarter.',
      author: 'Sarah Chen, COO'
    },
    {
      id: 2,
      client: 'RetailMax Group',
      industry: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center',
      challenge: 'RetailMax faced declining customer engagement and struggled to personalize experiences across multiple touchpoints, resulting in decreasing conversion rates.',
      solution: 'Deployed advanced customer segmentation and recommendation engine using machine learning to deliver personalized shopping experiences across web, mobile, and email channels.',
      results: [
        { metric: '+85%', label: 'Customer Engagement', icon: Users },
        { metric: '+45%', label: 'Conversion Rate', icon: TrendingUp },
        { metric: '+120%', label: 'Click-through Rate', icon: ArrowUpRight }
      ],
      duration: '4 months',
      testimonial: 'The personalization engine exceeded all our expectations. Customer satisfaction scores hit an all-time high.',
      author: 'Michael Rodriguez, VP Marketing'
    },
    {
      id: 3,
      client: 'FinanceCore Bank',
      industry: 'Financial Services',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&crop=center',
      challenge: 'FinanceCore needed to enhance fraud detection capabilities while reducing false positives that were impacting customer experience and operational costs.',
      solution: 'Built a real-time fraud detection system using ensemble machine learning models, incorporating behavioral analytics and network analysis to identify suspicious patterns.',
      results: [
        { metric: '-75%', label: 'Fraud Losses', icon: DollarSign },
        { metric: '-60%', label: 'False Positives', icon: TrendingUp },
        { metric: '99.2%', label: 'Detection Accuracy', icon: Award }
      ],
      duration: '8 months',
      testimonial: 'The fraud detection system is a game-changer. We\'ve significantly reduced losses while improving customer experience.',
      author: 'Dr. Amanda Foster, Chief Risk Officer'
    }
  ]

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length)
  }

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const currentCase = caseStudies[activeCase]

  return (
    <section id="case-studies" className="section-padding bg-dark-800/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            <Award size={16} className="mr-2" />
            Success Stories
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Proven</span> Results
          </h2>
          
          <p className="text-xl text-dark-100 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped industry leaders transform their data into 
            competitive advantages with measurable business impact.
          </p>
        </motion.div>

        {/* Case Study Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative overflow-hidden rounded-2xl"
                >
                  <img
                    src={currentCase.image}
                    alt={`${currentCase.client} case study`}
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                  
                  {/* Client Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass rounded-lg p-4">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {currentCase.client}
                      </h3>
                      <p className="text-primary-300 font-medium">
                        {currentCase.industry}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="space-y-8">
                {/* Challenge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h4 className="text-xl font-semibold text-primary-400 mb-3">
                    The Challenge
                  </h4>
                  <p className="text-dark-100 leading-relaxed">
                    {currentCase.challenge}
                  </p>
                </motion.div>

                {/* Solution */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h4 className="text-xl font-semibold text-accent mb-3">
                    Our Solution
                  </h4>
                  <p className="text-dark-100 leading-relaxed">
                    {currentCase.solution}
                  </p>
                  
                  {/* Duration */}
                  <div className="flex items-center mt-3 text-sm text-primary-300">
                    <Clock size={16} className="mr-2" />
                    <span>Project Duration: {currentCase.duration}</span>
                  </div>
                </motion.div>

                {/* Results */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h4 className="text-xl font-semibold text-green-400 mb-4">
                    The Results
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    {currentCase.results.map((result, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        className="glass rounded-lg p-4 text-center"
                      >
                        <result.icon size={20} className="text-primary-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white mb-1">
                          {result.metric}
                        </div>
                        <div className="text-xs text-dark-100">
                          {result.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Testimonial */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="glass rounded-lg p-6 border-l-4 border-primary-500"
                >
                  <p className="text-dark-100 italic mb-3">
                    "{currentCase.testimonial}"
                  </p>
                  <p className="text-primary-300 font-semibold">
                    — {currentCase.author}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-12 space-x-4">
            <button
              onClick={prevCase}
              className="p-3 glass rounded-full hover:bg-white/10 transition-all duration-200"
            >
              <ChevronLeft size={20} className="text-primary-400" />
            </button>

            {/* Indicators */}
            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === activeCase
                      ? 'bg-primary-500 w-8'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextCase}
              className="p-3 glass rounded-full hover:bg-white/10 transition-all duration-200"
            >
              <ChevronRight size={20} className="text-primary-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesSection