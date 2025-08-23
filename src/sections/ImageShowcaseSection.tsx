import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useLanguage } from '../contexts/LanguageContext'
import DashboardImage from '../../src/assets/showcase_webapp/Dashboard Overview.png'
import WorkflowImage from '../../src/assets/showcase_webapp/Workflow_Overview.png'
import SupportImage from '../../src/assets/showcase_webapp/Support_Section.png'

const ImageShowcaseSection = () => {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState(0)
  
  const sectionRef = useRef(null)
  const floatingRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // Parallax floating elements
    if (floatingRef.current) {
      gsap.to(floatingRef.current.children, {
        yPercent: "random(-30, 30)",
        duration: "random(6, 10)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 3,
          from: "random"
        }
      })
    }
    
    // Simple fade in on mount
    if (textRef.current) {
      gsap.fromTo(textRef.current.children,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
      )
    }
    
    if (imageRef.current) {
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
      )
    }
  }, [])
  
  // Tab change animation
  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 0.95, rotateY: -5 },
        { opacity: 1, scale: 1, rotateY: 0, duration: 0.6, ease: "power2.out" }
      )
    }
  }, [activeTab])

  const features = [
    {
      title: t.businessApp.features.dashboard.title,
      description: t.businessApp.features.dashboard.description,
      highlights: t.businessApp.features.dashboard.highlights,
      image: DashboardImage
    },
    {
      title: t.businessApp.features.workflow.title,
      description: t.businessApp.features.workflow.description,
      highlights: t.businessApp.features.workflow.highlights,
      image: WorkflowImage
    },
    {
      title: t.businessApp.features.support.title,
      description: t.businessApp.features.support.description,
      highlights: t.businessApp.features.support.highlights,
      image: SupportImage
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="webapp"
      className="relative h-screen snap-start snap-always flex items-center bg-gradient-to-b from-[#1D1D1D] to-[#1A1A1A] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Topographic/contour lines pattern - hidden on mobile */}
        <div className="absolute inset-0 opacity-[0.12] hidden md:block">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-radial-gradient(
                circle at 50% 80%,
                transparent,
                transparent 40px,
                rgba(255, 118, 59, 0.4) 40px,
                rgba(255, 118, 59, 0.4) 42px,
                transparent 42px,
                transparent 80px,
                rgba(255, 190, 86, 0.3) 80px,
                rgba(255, 190, 86, 0.3) 82px,
                transparent 82px,
                transparent 120px,
                rgba(255, 215, 0, 0.2) 120px,
                rgba(255, 215, 0, 0.2) 122px
              )
            `
          }}></div>
        </div>
        
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(255,190,86,0.03),transparent_70%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 md:px-8 w-full h-full flex items-center">
        {/* Mobile/Tablet Layout - Fits in viewport */}
        <div className="lg:hidden w-full max-h-screen py-4 flex flex-col">
          {/* Compact Header */}
          <div className="text-center mb-2 sm:mb-3">
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-black text-white">
              <span className="bg-gradient-to-r from-[#FF763B] to-[#FFBE56] bg-clip-text text-transparent">{t.businessApp.titleAccent}</span>
            </h2>
          </div>

          {/* Tab Buttons */}
          <div className="flex gap-1 sm:gap-2 mb-2 sm:mb-3">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-2 sm:py-2.5 md:py-3 px-2 sm:px-3 rounded text-xs sm:text-sm md:text-base font-medium transition-all ${
                  activeTab === index 
                    ? 'bg-gradient-to-r from-[#FF763B] to-[#FFBE56] text-white' 
                    : 'bg-white/10 text-white/60'
                }`}
              >
                {feature.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Image Container - Takes available space */}
          <div className="flex-1 min-h-0 mb-2 sm:mb-3">
            <div className="h-full rounded-lg overflow-hidden bg-[#1A1A1A] border border-white/10">
              <img 
                src={features[activeTab].image} 
                alt={features[activeTab].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Minimal Info */}
          <div className="bg-[#1A1A1A]/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 mb-2 sm:mb-3 border border-white/10">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">{features[activeTab].title}</h3>
            <p className="text-xs sm:text-sm md:text-base text-white/70">{features[activeTab].description}</p>
          </div>

          {/* CTA Button */}
          <button className="w-full px-3 sm:px-4 py-2.5 sm:py-3 md:py-3.5 bg-gradient-to-r from-[#FF763B] to-[#FFBE56] text-white text-sm sm:text-base md:text-lg font-medium rounded-lg">
            {t.businessApp.cta}
          </button>
        </div>

        {/* Desktop/Tablet Layout - Original */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div ref={textRef}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full mb-4">
              <div className="w-1.5 h-1.5 bg-[#FF763B] rounded-full"></div>
              <span className="text-xs text-white/60">{t.businessApp.label}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              {t.businessApp.title} <span className="bg-gradient-to-r from-[#FF763B] to-[#FFBE56] bg-clip-text text-transparent">{t.businessApp.titleAccent}</span>
            </h2>
            
            <p className="text-base md:text-lg text-white/70 mb-8 leading-relaxed">
              {t.businessApp.description}
            </p>

            {/* Feature Tabs */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                    activeTab === index 
                      ? 'bg-[#1F1F1F] border-[#FF763B]/40' 
                      : 'bg-[#1A1A1A] border-white/10 hover:bg-[#1E1E1E]'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-white/60">{feature.description}</p>
                  {activeTab === index && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {feature.highlights.map((highlight, idx) => (
                        <span key={idx} className="text-xs px-3 py-1 bg-white/10 rounded-full text-white/80">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button className="mt-8 px-6 py-3 bg-gradient-to-r from-[#FF763B] to-[#FFBE56] text-white font-medium rounded-xl hover:scale-105 transition-transform">
              {t.businessApp.cta}
            </button>
          </div>

          {/* Image Showcase - Desktop only */}
          <div ref={imageRef} className="relative" style={{ perspective: '1000px' }}>
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF763B]/5 to-[#FFBE56]/5"></div>
              <div className="relative p-4 md:p-6">
                <img 
                  src={features[activeTab].image} 
                  alt={features[activeTab].title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageShowcaseSection