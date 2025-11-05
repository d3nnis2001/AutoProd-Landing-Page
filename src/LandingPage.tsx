import { useCallback } from 'react'
import HeroSection from './sections/HeroSection'
import WorkflowDemoSection from './sections/WorkflowDemoSection'
import ServicesSection from './sections/ServicesSpotlightSection'
import ImageShowcaseSection from './sections/ImageShowcaseSection'
import ContactSection from './sections/ContactSection'
import FooterSection from './sections/FooterSection'

const HomepageModular = () => {

  const handleContactClick = useCallback(() => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      })
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[#1D1D1D] overflow-x-hidden snap-y snap-mandatory h-screen overflow-y-auto">
      {/* Grid Background for Hero and Services - More gradual fade */}
      <div className="absolute inset-0 opacity-[0.12]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.7) 100%, rgba(0,0,0,0.5) 150%, rgba(0,0,0,0.3) 200%, rgba(0,0,0,0.1) 250%, rgba(0,0,0,0) 300%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.7) 100%, rgba(0,0,0,0.5) 150%, rgba(0,0,0,0.3) 200%, rgba(0,0,0,0.1) 250%, rgba(0,0,0,0) 300%)'
        }} />
      </div>

      <HeroSection 
        onGetStartedClick={() => {
        }}
        onContactClick={handleContactClick}
      />

      <ServicesSection />
      
      <ImageShowcaseSection />

      <WorkflowDemoSection />

      <ContactSection />
      
      <FooterSection />
    </div>
  )
}

export default HomepageModular