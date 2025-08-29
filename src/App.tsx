
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ClientsSection from './components/ClientsSection'
import ServicesSection from './components/ServicesSection'
import CaseStudiesSection from './components/CaseStudiesSection'
import TestimonialsSection from './components/TestimonialsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-dark-50 overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ClientsSection />
        <ServicesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App