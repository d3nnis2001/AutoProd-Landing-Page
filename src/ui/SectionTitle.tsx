import { forwardRef } from 'react'

interface SectionTitleProps {
  title: string
  highlight?: string
  subtitle?: string
  className?: string
}

export const SectionTitle = forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ title, highlight, subtitle, className = '' }, ref) => {
    return (
      <div className={`text-center ${className}`}>
        <h2 ref={ref} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
          {title}
          {highlight && (
            <span className="block bg-gradient-to-r from-[#FF763B] to-[#FFBE56] bg-clip-text text-transparent">
              {highlight}
            </span>
          )}
        </h2>
        {subtitle && (
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    )
  }
)

SectionTitle.displayName = 'SectionTitle'