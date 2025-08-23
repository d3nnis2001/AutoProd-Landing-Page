import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useLanguage } from '../contexts/LanguageContext'
import ContactForm from '../contact/ContactForm'
import ContactDetails from '../contact/ContactDetails'

const ContactSection = () => {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState(0)
  const sectionRef = useRef(null)
  const floatingRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // Floating elements gentle movement
    if (floatingRef.current) {
      gsap.to(floatingRef.current.children, {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        scale: "random(0.8, 1.2)",
        duration: "random(8, 12)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 4,
          from: "random"
        }
      })
    }
    
    // Simple fade in animations
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
      ref={sectionRef}
      id="contact" 
      className="relative h-screen snap-start snap-always bg-gradient-to-b from-[#171717] to-[#0F0F0F] flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Mesh pattern overlay - enhanced */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 30%, rgba(255, 118, 59, 0.15) 50%, transparent 70%),
            linear-gradient(-45deg, transparent 30%, rgba(255, 190, 86, 0.15) 50%, transparent 70%)
          `,
          backgroundSize: '200px 200px'
        }}></div>
        
        {/* Static floating shapes - no blur */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-1/4 left-12 w-32 h-32 bg-gradient-to-tr from-[#FF763B]/8 to-transparent rounded-full"></div>
          <div className="absolute top-1/3 right-16 w-28 h-28 bg-gradient-to-bl from-[#FFBE56]/8 to-transparent rounded-full"></div>
          <div className="absolute top-1/6 left-1/4 w-20 h-20 bg-gradient-to-br from-[#FFD700]/6 to-transparent rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-tl from-[#FF763B]/6 to-transparent rounded-full"></div>
          
          {/* Accent dots - more decorative */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#FF763B]/25 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#FFBE56]/25 rounded-full"></div>
          <div className="absolute top-1/2 left-1/5 w-2 h-2 bg-[#FFD700]/20 rounded-full"></div>
          <div className="absolute bottom-1/2 right-1/5 w-3 h-3 bg-[#FF763B]/20 rounded-full"></div>
        </div>
        
        {/* Geometric accents */}
        <div className="absolute top-1/5 right-1/4 w-10 h-10 border border-[#FFBE56]/15 rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/5 w-12 h-12 border border-[#FF763B]/12 rounded-full"></div>
        <div className="absolute top-2/3 right-1/3 w-8 h-8 border border-[#FFD700]/10 rotate-12"></div>
        
        {/* Dot matrix pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `
            radial-gradient(circle at 10px 10px, rgba(255, 190, 86, 0.3) 1px, transparent 1px),
            radial-gradient(circle at 50px 50px, rgba(255, 118, 59, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Circuit pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 80px,
              rgba(255, 190, 86, 0.15) 80px,
              rgba(255, 190, 86, 0.15) 81px
            )
          `
        }}></div>
        
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,190,86,0.06),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-4 md:px-8 w-full h-full flex flex-col justify-center py-4 sm:py-8 md:py-12">
        <div ref={titleRef} className="text-center mb-4 sm:mb-5 md:mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black text-white">
            <span className="bg-gradient-to-r from-[#FF763B] to-[#FFBE56] bg-clip-text text-transparent">
              {t.contact.title}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-white/60 mt-2 sm:hidden">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Mobile/Tablet Layout - Tabs */}
        <div className="lg:hidden flex-1 flex flex-col">
          <div className="flex gap-2 mb-3 sm:mb-4">
            <button 
              onClick={() => setActiveTab(0)}
              className={`flex-1 py-3 sm:py-3.5 px-3 text-base sm:text-base font-medium rounded-xl transition-all ${
                activeTab === 0 
                  ? 'bg-gradient-to-r from-[#FF763B] to-[#FFBE56] text-white' 
                  : 'bg-white/10 text-white/60'
              }`}
            >
              {t.contact.tabs.info}
            </button>
            <button 
              onClick={() => setActiveTab(1)}
              className={`flex-1 py-3 sm:py-3.5 px-3 text-base sm:text-base font-medium rounded-xl transition-all ${
                activeTab === 1 
                  ? 'bg-gradient-to-r from-[#FF763B] to-[#FFBE56] text-white' 
                  : 'bg-white/10 text-white/60'
              }`}
            >
              {t.contact.tabs.message}
            </button>
          </div>
          
          <div className="flex-1 bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-xl p-4 sm:p-5 md:p-6 border border-white/10 overflow-y-auto">
            {activeTab === 0 ? <ContactDetails /> : <ContactForm />}
          </div>
        </div>

        {/* Desktop Layout - Grid */}
        <div ref={cardsRef} className="hidden lg:grid lg:grid-cols-2 gap-6 md:gap-8 flex-1 min-h-0">
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-2xl p-4 md:p-6 lg:p-8 border border-white/10 overflow-y-auto">
            <ContactDetails />
          </div>

          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-2xl p-4 md:p-6 lg:p-8 border border-white/10 overflow-y-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection