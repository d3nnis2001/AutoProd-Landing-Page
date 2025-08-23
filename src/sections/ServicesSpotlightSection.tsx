import { useDetailedServices } from '../services-spotlight/servicesDetailedData'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useLanguage } from '../contexts/LanguageContext'

const ServicesSpotlightSection = () => {
  const { t } = useLanguage()
  const detailedServices = useDetailedServices()
  const [activeIndex, setActiveIndex] = useState(0)
  const activeService = detailedServices[activeIndex]
  
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // Simple fade in animation on mount
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
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern - with fade to bottom */}
        <div className="absolute inset-0 opacity-[0.1]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.3) 90%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.3) 90%, rgba(0,0,0,0) 100%)'
          }} />
        </div>
        
        {/* Static Elements - no blur, no animation - hidden on mobile */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-[#FFBE56]/10 to-[#FF763B]/10 rounded-full"></div>
          <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-r from-[#FF763B]/10 to-[#FFBE56]/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-14 h-14 bg-gradient-to-r from-[#FFD700]/8 to-[#FF763B]/8 rounded-full"></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-1/3 right-20 w-10 h-10 border border-[#FF763B]/20 rotate-45"></div>
          <div className="absolute bottom-1/4 left-24 w-12 h-12 border border-[#FFBE56]/15 rounded-full"></div>
          
          {/* Small accent dots */}
          <div className="absolute top-1/5 right-1/3 w-3 h-3 bg-[#FF763B]/20 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-[#FFBE56]/25 rounded-full"></div>
        </div>
        
        {/* Mobile-friendly background elements - subtle and positioned to avoid text */}
        <div className="absolute inset-0 pointer-events-none md:hidden">
          <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-[#FFBE56]/8 to-[#FF763B]/8 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-10 h-10 bg-gradient-to-r from-[#FF763B]/8 to-[#FFBE56]/8 rounded-full"></div>
        </div>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,118,59,0.03),transparent_50%)]"></div>
      </div>

      {/* Content Container */}
      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-3 md:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-3 md:mb-8">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2">
            {t.services.title} <span className="bg-gradient-to-r from-[#FF763B] to-[#FFBE56] bg-clip-text text-transparent">{t.services.titleAccent}</span>
          </h2>
        </div>

        {/* Mobile Service Selector - Compact Icon Grid */}
        <div className="lg:hidden mb-3">
          <div className="grid grid-cols-3 gap-2">
            {detailedServices.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveIndex(index)}
                className={`p-2 rounded-lg transition-all flex flex-col items-center gap-1 ${
                  activeIndex === index
                    ? 'bg-gradient-to-br from-[#FF763B]/20 to-[#FFBE56]/20 border border-[#FF763B]/50'
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                <div className={`scale-75 ${activeIndex === index ? 'text-[#FF763B]' : 'text-white/60'}`}>
                  {service.icon}
                </div>
                <span className={`text-[9px] font-medium text-center leading-none ${
                  activeIndex === index ? 'text-white' : 'text-white/60'
                }`}>
                  {service.title.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid - Responsive */}
        <div ref={cardsRef} className="lg:grid lg:grid-cols-3 gap-4 lg:h-[400px]">
          {/* Active Service - Large Card */}
          <div className="lg:col-span-2 mb-4 lg:mb-0">
            <div className="h-full p-3 sm:p-6 lg:p-8 rounded-2xl bg-[#1A1A1A] border border-white/10">
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-5 mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 rounded-2xl bg-white/5">
                  <div className="scale-100 sm:scale-110 lg:scale-125">
                    {activeService.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-2">{activeService.title}</h3>
                  <p className="text-white/70 text-sm sm:text-base">{activeService.description}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6">
                {Object.entries(activeService.stats).map(([key, value]) => (
                  <div key={key} className="p-2 sm:p-3 lg:p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-lg sm:text-xl lg:text-2xl font-black bg-gradient-to-r from-[#FF763B] to-[#FFBE56] bg-clip-text text-transparent mb-1">
                      {value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-white/50 font-medium capitalize">
                      {activeService.statsLabels[key as keyof typeof activeService.statsLabels] || key}
                    </div>
                  </div>
                ))}
              </div>

              {/* Features & Examples */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
                <div className="bg-white/5 rounded-xl p-2.5 sm:p-4 lg:p-5">
                  <div className="flex items-center gap-2 mb-2 sm:mb-4">
                    <div className="w-6 sm:w-8 h-[2px] bg-gradient-to-r from-[#FF763B] to-[#FFBE56]" />
                    <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">{t.services.coreFeatures}</h4>
                  </div>
                  <ul className="space-y-1.5 sm:space-y-3">
                    {activeService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <div className="mt-1 sm:mt-1.5 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#FF763B] rounded-full flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-white/70 flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/5 rounded-xl p-2.5 sm:p-4 lg:p-5">
                  <div className="flex items-center gap-2 mb-2 sm:mb-4">
                    <div className="w-6 sm:w-8 h-[2px] bg-gradient-to-r from-[#FFBE56] to-[#FF763B]" />
                    <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">{t.services.useCases}</h4>
                  </div>
                  <ul className="space-y-1.5 sm:space-y-3">
                    {activeService.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <div className="mt-1 sm:mt-1.5 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#FFBE56] rounded-full flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-white/70 flex-1">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Service Selector - Small Cards - Hidden on mobile */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="h-full flex flex-col gap-3">
              {detailedServices.map((service, index) => {
                if (index === activeIndex) return null
                
                return (
                  <div 
                    key={service.id} 
                    className="flex-1 cursor-pointer"
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="h-full p-4 lg:p-5 rounded-xl bg-[#1A1A1A] border border-white/10 hover:border-[#FF763B]/40 hover:bg-[#1F1F1F] transition-colors duration-200">
                      <div className="flex items-center gap-3 lg:gap-4">
                        <div className="p-2 lg:p-3 rounded-xl bg-white/5">
                          {service.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-white font-bold text-sm lg:text-base mb-1">{service.title}</h4>
                          <p className="text-white/50 text-xs lg:text-sm line-clamp-2">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSpotlightSection