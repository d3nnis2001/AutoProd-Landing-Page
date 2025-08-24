import { forwardRef, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useLanguage } from '../../contexts/LanguageContext'

const HeroSubtitle = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useLanguage()
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    if (!ref || !('current' in ref) || !ref.current || hasAnimatedRef.current) return
    
    hasAnimatedRef.current = true
    
    gsap.set(ref.current, { opacity: 0, scale: 0.8 })
    
    gsap.to(ref.current, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "power3.out",
      delay: 2.6
    })
  }, [ref])

  return (
    <div ref={ref} className="mb-8 space-y-4">
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
  )
})

HeroSubtitle.displayName = 'HeroSubtitle'

export default HeroSubtitle