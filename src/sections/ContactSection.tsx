import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import ContactBackground from '../components/contact/ContactBackground'
import ContactHeader from '../components/contact/ContactHeader'
import ContactMobileLayout from '../components/contact/ContactMobileLayout'
import ContactDesktopLayout from '../components/contact/ContactDesktopLayout'

const ContactSection = () => {
  const [activeTab, setActiveTab] = useState(0)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      )
    }
    
    if (cardsRef.current) {
      gsap.fromTo(cardsRef.current.children,
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.2, delay: 0.3, ease: "power3.out" }
      )
    }
  }, [])
  
  return (
    <section 
      id="contact" 
      className="relative h-screen snap-start snap-always bg-gradient-to-b from-[#171717] to-[#0F0F0F] flex items-center overflow-hidden"
    >
      <ContactBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-4 md:px-8 w-full h-full flex flex-col justify-center py-4 sm:py-8 md:py-12">
        <ContactHeader ref={titleRef} />
        
        <ContactMobileLayout 
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        
        <ContactDesktopLayout ref={cardsRef} />
      </div>
    </section>
  )
}

export default ContactSection