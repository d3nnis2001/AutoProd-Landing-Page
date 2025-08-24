import { forwardRef, useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { useLanguage } from '../../contexts/LanguageContext'

const HeroTitle = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useLanguage()
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const h2Ref = useRef<HTMLHeadingElement>(null)
  const hasAnimatedRef = useRef(false)
  const [displayText, setDisplayText] = useState(t.hero.title1 || '')

  useEffect(() => {
    if (!h1Ref.current || !h2Ref.current || !t.hero.title1) return

    // Only animate once on first load
    if (!hasAnimatedRef.current) {
      hasAnimatedRef.current = true
      
      // Setup initial states
      gsap.set(h1Ref.current, { opacity: 0, y: 30 })
      gsap.set(h2Ref.current, { opacity: 0, x: -50 })

      const tl = gsap.timeline()

      // Simple fade in for h1
      tl.to(h1Ref.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5
      })
      // Then animate h2
      .to(h2Ref.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.2")

      // Typing effect with setInterval (more reliable)
      let charIndex = 0
      const text = t.hero.title1
      setDisplayText('')
      
      const typingInterval = setInterval(() => {
        if (charIndex <= text.length) {
          setDisplayText(text.substring(0, charIndex))
          charIndex++
        } else {
          clearInterval(typingInterval)
        }
      }, 70) // 70ms per character

      return () => {
        tl.kill()
        clearInterval(typingInterval)
      }
    } else {
      // Language change - just update text
      setDisplayText(t.hero.title1)
    }
  }, [t.hero.title1])

  return (
    <div ref={ref}>
      <h1 ref={h1Ref} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-none">
        {displayText}
      </h1>
      <h2 ref={h2Ref} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-none">
        <span className="bg-gradient-to-r from-[#FF763B] to-[#FFBE56] bg-clip-text text-transparent">
          {t.hero.title2Accent}
        </span> {t.hero.title2}
      </h2>
    </div>
  )
})

HeroTitle.displayName = 'HeroTitle'

export default HeroTitle