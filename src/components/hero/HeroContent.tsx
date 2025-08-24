import { forwardRef, useRef } from 'react'
import HeroTitle from './HeroTitle'
import HeroSubtitle from './HeroSubtitle'
import HeroButtons from './HeroButtons'
import type { HeroSectionProps } from '../../types'

const HeroContent = forwardRef<HTMLDivElement, Pick<HeroSectionProps, 'onGetStartedClick' | 'onContactClick'>>((props, ref) => {
  const { onGetStartedClick, onContactClick } = props
  const subtitleRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={ref} className="relative z-10 flex items-center justify-center h-full pt-2 md:pt-4 text-white">
      <div className="text-center max-w-4xl px-6">
        <HeroTitle />
        <HeroSubtitle ref={subtitleRef} />
        <HeroButtons 
          ref={buttonsRef}
          onGetStartedClick={onGetStartedClick}
          onContactClick={onContactClick}
        />
      </div>
    </div>
  )
})

HeroContent.displayName = 'HeroContent'

export default HeroContent