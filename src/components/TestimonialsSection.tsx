import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      quote: "Nexus Analytics didn't just provide us with data insights - they transformed our entire decision-making process. The ROI was evident within the first quarter, and their predictive models have become indispensable to our operations.",
      author: "Dr. Sarah Chen",
      role: "Chief Operating Officer",
      company: "TechFlow Industries",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 2,
      quote: "Working with Nexus Analytics was a game-changer for our e-commerce platform. Their recommendation engine increased our conversion rates by 45%, and the personalization capabilities exceeded all expectations. Truly exceptional work.",
      author: "Michael Rodriguez",
      role: "VP of Marketing",
      company: "RetailMax Group",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 3,
      quote: "The fraud detection system developed by Nexus Analytics has revolutionized our risk management. We've reduced fraud losses by 75% while significantly improving customer experience. Their expertise in financial analytics is unmatched.",
      author: "Dr. Amanda Foster",
      role: "Chief Risk Officer",
      company: "FinanceCore Bank",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 4,
      quote: "Nexus Analytics transformed our supply chain from reactive to predictive. Their machine learning models helped us reduce inventory costs by 40% while improving delivery times. The team's expertise and support are outstanding.",
      author: "James Patterson",
      role: "Head of Supply Chain",
      company: "Global Manufacturing Corp",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ]

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[activeTestimonial]

  return (
    <section id="testimonials" className="section-padding bg-dark-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-sm font-medium mb-6">
            <Star size={16} className="mr-2" />
            Client Testimonials
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          
          <p className="text-xl text-dark-100 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from the industry leaders who have 
            transformed their businesses with our analytics solutions.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/5 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-2xl"></div>
              
              {/* Quote Icon */}
              <div className="relative z-10">
                <Quote size={48} className="text-primary-400/30 mb-6" />
                
                {/* Quote Text */}
                <blockquote className="text-xl md:text-2xl leading-relaxed text-dark-50 mb-8 relative z-10">
                  {currentTestimonial.quote}
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4 relative z-10">
                  <motion.img
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.author}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary-400/50"
                  />
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-1">
                      {currentTestimonial.author}
                    </h4>
                    <p className="text-primary-300 font-medium">
                      {currentTestimonial.role}
                    </p>
                    <p className="text-dark-100 text-sm">
                      {currentTestimonial.company}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(currentTestimonial.rating)].map((_, index) => (
                      <Star
                        key={index}
                        size={20}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 glass rounded-full hover:bg-white/10 transition-all duration-200 group"
            >
              <ChevronLeft size={20} className="text-primary-400 group-hover:text-primary-300" />
            </button>

            {/* Progress Indicators */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'w-12 h-3 bg-primary-500'
                      : 'w-3 h-3 bg-white/20 hover:bg-white/40'
                  }`}
                >
                  {index === activeTestimonial && (
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-primary-300 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 6, ease: 'linear' }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 glass rounded-full hover:bg-white/10 transition-all duration-200 group"
            >
              <ChevronRight size={20} className="text-primary-400 group-hover:text-primary-300" />
            </button>
          </div>

          {/* All Testimonials Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
          >
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={testimonial.id}
                onClick={() => setActiveTestimonial(index)}
                className={`glass rounded-lg p-4 text-left transition-all duration-300 hover:bg-white/10 ${
                  index === activeTestimonial
                    ? 'border-primary-400 border-2'
                    : 'border-transparent border-2'
                }`}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="text-sm font-semibold text-white">
                      {testimonial.author}
                    </h5>
                    <p className="text-xs text-dark-100">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-dark-100 line-clamp-3">
                  {testimonial.quote}
                </p>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection