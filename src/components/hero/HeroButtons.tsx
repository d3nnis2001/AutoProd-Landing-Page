import { forwardRef, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useLanguage } from '../../contexts/LanguageContext'
import type { HeroSectionProps } from '../../types'

const HeroButtons = forwardRef<HTMLDivElement, Pick<HeroSectionProps, 'onGetStartedClick' | 'onContactClick'>>((props, ref) => {
  const { onGetStartedClick, onContactClick } = props
  const { t } = useLanguage()
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    if (!ref || !('current' in ref) || !ref.current || hasAnimatedRef.current) return
    
    hasAnimatedRef.current = true
    
    gsap.set(ref.current, { opacity: 0, y: 50 })
    
    gsap.to(ref.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
      delay: 2.7
    })
  }, [ref])

  return (
    <div ref={ref} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
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
  )
})

HeroButtons.displayName = 'HeroButtons'

export default HeroButtons