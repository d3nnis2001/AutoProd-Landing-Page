import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import HomeNavbar from '../components/navbar/HomeNavbar'
import MobileMenu from '../components/navbar/MobileMenu'
import { useLanguage } from '../contexts/LanguageContext'
import type { MenuItem } from '../types'

gsap.registerPlugin(TextPlugin)

interface HeroSectionProps {
  onGetStartedClick?: () => void
  onContactClick?: () => void
}

const HeroSection = ({ onGetStartedClick, onContactClick }: HeroSectionProps) => {
  const { t } = useLanguage()
  const [activeMenu, setActiveMenu] = useState('Home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const handleNavClick = useCallback((item: MenuItem) => {
    setActiveMenu(item.name)
    const target = document.querySelector(item.href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])
  
  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])
  
  const handleMobileMenuClose = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])
  
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const h2Ref = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const floatingElementsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    gsap.set(h1Ref.current, { text: "" })
    gsap.set(h2Ref.current, { opacity: 0, x: -100 })
    gsap.set(subtitleRef.current, { opacity: 0, scale: 0.8 })
    gsap.set(buttonsRef.current, { opacity: 0, y: 50 })
    gsap.set(floatingElementsRef.current?.children || [], { 
      opacity: 0, 
      scale: 0.5,
      rotation: () => gsap.utils.random(-45, 45)
    })

    tl.to(h1Ref.current, {
      text: t.hero.title1,
      duration: 1.2,
      ease: "none",
      delay: 0.8
    })
    .to(h2Ref.current, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "+=0.2")
    .to([subtitleRef.current, buttonsRef.current], {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.1
    }, "-=0.4")
    .to(floatingElementsRef.current?.children || [], {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: {
        amount: 0.4,
        from: "random"
      }
    }, "-=0.6")

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section id="home" className="relative h-screen snap-start snap-always">
      <HomeNavbar
        activeMenu={activeMenu}
        onMenuClick={handleNavClick}
        onMobileMenuToggle={handleMobileMenuToggle}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        onMenuClick={handleNavClick}
        activeMenu={activeMenu}
      />
      
      <div ref={floatingElementsRef} className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        <div className="absolute top-16 md:top-20 right-4 md:right-8 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-r from-[#FFBE56]/30 to-[#FF763B]/30 rounded-full"></div>
        <div className="absolute bottom-32 md:bottom-20 left-6 md:left-16 w-12 md:w-20 h-12 md:h-20 bg-gradient-to-r from-[#FF763B]/30 to-[#FFBE56]/30 rounded-full"></div>
        <div className="absolute top-1/3 md:top-1/2 right-6 md:right-1/4 w-10 md:w-16 h-10 md:h-16 bg-gradient-to-r from-[#FFD700]/25 to-[#FF763B]/25 rounded-full"></div>
        
        <div className="absolute top-24 md:top-1/4 right-12 md:right-16 w-8 md:w-12 h-8 md:h-12 border border-[#FF763B]/25 rotate-45"></div>
        <div className="absolute bottom-40 md:bottom-1/3 left-16 md:left-32 w-10 md:w-14 h-10 md:h-14 border border-[#FFBE56]/20 rounded-full"></div>
        <div className="absolute top-2/3 left-4 md:left-12 w-6 md:w-10 h-6 md:h-10 bg-[#FF763B]/20 rotate-12"></div>
        <div className="absolute bottom-16 md:bottom-1/6 right-8 md:right-20 w-8 md:w-12 h-8 md:h-12 bg-[#FFD700]/20 rounded-full"></div>
        
        <div className="absolute top-8 md:top-12 left-2/3 md:left-3/4 w-8 md:w-12 h-8 md:h-12 border border-[#FFBE56]/15 rounded-full"></div>
        <div className="absolute bottom-8 md:bottom-12 right-16 md:right-32 w-6 md:w-10 h-6 md:h-10 bg-[#FF763B]/15 rotate-45"></div>
        
        <div className="absolute top-1/5 md:top-1/6 right-1/5 md:left-4/5 w-3 md:w-4 h-3 md:h-4 bg-[#FF763B]/35 rounded-full"></div>
        <div className="absolute bottom-1/4 md:bottom-1/5 left-1/5 md:left-1/6 w-2 md:w-3 h-2 md:h-3 bg-[#FFBE56]/40 rounded-full"></div>
        <div className="absolute top-3/4 md:top-4/5 right-1/4 md:right-1/5 w-3 md:w-4 h-3 md:h-4 bg-[#FFD700]/30 rounded-full"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center h-full pt-2 md:pt-4 text-white">
        <div className="text-center max-w-4xl px-6">
          <h1 ref={h1Ref} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-none">{t.hero.title1}</h1>
          <h2 ref={h2Ref} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-none">
            <span className="bg-gradient-to-r from-[#FF763B] to-[#FFBE56] bg-clip-text text-transparent">{t.hero.title2Accent}</span> {t.hero.title2}
          </h2>
          
          <div ref={subtitleRef} className="mb-8 space-y-4">
            <div className="flex items-center justify-center gap-4 text-white/60">
              <div className="h-px bg-gradient-to-r from-transparent via-[#FF763B]/30 to-transparent w-16"></div>
              <span className="text-sm font-medium tracking-wider uppercase">{t.hero.subtitle}</span>
              <div className="h-px bg-gradient-to-r from-transparent via-[#FFBE56]/30 to-transparent w-16"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {t.hero.badges.map((badge, index) => (
                <span key={index} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70 font-medium">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
            <button 
              onClick={onGetStartedClick}
              className="group relative px-8 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-[#FF763B] to-[#FFBE56] text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FF763B]/40"
            >
              <span className="relative z-20">{t.hero.cta.getStarted}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF763B] to-[#FFBE56]"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFBE56] to-[#FF763B] opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            </button>
            
            <button 
              onClick={onContactClick}
              className="px-8 py-4 text-lg font-medium rounded-full border border-white/20 text-white hover:bg-white/5 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <span>{t.hero.cta.contact}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection