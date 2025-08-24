import { useDetailedServices } from '../components/services/servicesDetailedData'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ServicesBackground from '../components/services/ServicesBackground'
import ServicesHeader from '../components/services/ServicesHeader'
import MobileServiceSelector from '../components/services/MobileServiceSelector'
import ActiveServiceCard from '../components/services/ActiveServiceCard'
import ServiceSelectorSidebar from '../components/services/ServiceSelectorSidebar'

const ServicesSpotlightSection = () => {
  const detailedServices = useDetailedServices()
  const [activeIndex, setActiveIndex] = useState(0)
  const activeService = detailedServices[activeIndex]
  
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
    }
    
    if (cardsRef.current) {
      gsap.fromTo(cardsRef.current.children,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.2)" }
      )
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="services"
      className="relative min-h-screen snap-start snap-always flex items-start pt-12 md:pt-20 lg:pt-24 pb-12 md:pb-20 bg-[#1D1D1D]"
    >
      <ServicesBackground />

      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-3 md:px-6 lg:px-8 w-full">
        <ServicesHeader />
        
        <MobileServiceSelector 
          services={detailedServices}
          activeIndex={activeIndex}
          onServiceSelect={setActiveIndex}
        />

        <div ref={cardsRef} className="lg:grid lg:grid-cols-3 gap-4 lg:h-[400px]">
          <ActiveServiceCard service={activeService} />
          <ServiceSelectorSidebar 
            services={detailedServices}
            activeIndex={activeIndex}
            onServiceSelect={setActiveIndex}
          />
        </div>
      </div>
    </section>
  )
}

export default ServicesSpotlightSection