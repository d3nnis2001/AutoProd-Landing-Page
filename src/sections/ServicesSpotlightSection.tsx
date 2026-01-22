import { useDetailedServices } from '../components/services/servicesDetailedData'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ServicesBackground from '../components/services/ServicesBackground'
import ServicesHeader from '../components/services/ServicesHeader'
import MobileServiceSelector from '../components/services/MobileServiceSelector'
import ActiveServiceCard from '../components/services/ActiveServiceCard'
import ServiceSelectorSidebar from '../components/services/ServiceSelectorSidebar'

gsap.registerPlugin(ScrollTrigger)

const ServicesSpotlightSection = () => {
  const detailedServices = useDetailedServices()
  const [activeIndex, setActiveIndex] = useState(0)
  const activeService = detailedServices[activeIndex]

  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current) return

    // Set initial states with more dramatic start position
    gsap.set(headerRef.current, { opacity: 0, y: 50, scale: 0.95 })
    const cards = gsap.utils.toArray(cardsRef.current.children)
    gsap.set(cards, { opacity: 0, y: 40, scale: 0.9 })

    let hasAnimated = false

    // Use IntersectionObserver for snap-scroll compatibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true

            // Animate header with smooth elastic ease
            gsap.to(headerRef.current, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power2.out",
              delay: 0.2
            })

            // Animate cards with smoother stagger and bounce
            gsap.to(cards, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.12,
              ease: "back.out(1.2)",
              delay: 0.4
            })
          }
        })
      },
      {
        threshold: 0.25
      }
    )

    observer.observe(sectionRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative h-screen sm:min-h-screen snap-start snap-always flex items-center sm:items-start sm:pt-12 md:pt-20 lg:pt-24 pb-4 sm:pb-12 md:pb-20 bg-[#1D1D1D] overflow-hidden"
    >
      <ServicesBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-3 md:px-6 lg:px-8 w-full">
        <div ref={headerRef}>
          <ServicesHeader />
          <MobileServiceSelector
            services={detailedServices}
            activeIndex={activeIndex}
            onServiceSelect={setActiveIndex}
          />
        </div>

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