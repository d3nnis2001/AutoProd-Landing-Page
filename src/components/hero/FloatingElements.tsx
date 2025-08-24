import { forwardRef } from 'react'

const FloatingElements = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none z-5">
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
  )
})

FloatingElements.displayName = 'FloatingElements'

export default FloatingElements