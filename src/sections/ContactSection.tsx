import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import ContactBackground from '../components/contact/ContactBackground'
import ContactHeader from '../components/contact/ContactHeader'
import ContactMobileLayout from '../components/contact/ContactMobileLayout'
import ContactDesktopLayout from '../components/contact/ContactDesktopLayout'

const ContactSection = () => {
  const [activeTab, setActiveTab] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !cardsRef.current) return

    // Set initial states - slide from left/right (subtle)
    gsap.set(titleRef.current, { opacity: 0, x: -20 })
    const cards = gsap.utils.toArray(cardsRef.current.children) as HTMLElement[]
    // Left card from left, right card from right
    gsap.set(cards[0], { opacity: 0, x: -25 })
    if (cards[1]) gsap.set(cards[1], { opacity: 0, x: 25 })

    let hasAnimated = false

    // Use IntersectionObserver for snap-scroll compatibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true

            // Slide in header from left
            gsap.to(titleRef.current, {
              opacity: 1,
              x: 0,
              duration: 0.5,
              ease: "power2.out",
              delay: 0.1
            })

            // Slide in cards from opposite sides
            gsap.to(cards[0], {
              opacity: 1,
              x: 0,
              duration: 0.5,
              ease: "power2.out",
              delay: 0.2
            })

            if (cards[1]) {
              gsap.to(cards[1], {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: "power2.out",
                delay: 0.3
              })
            }
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