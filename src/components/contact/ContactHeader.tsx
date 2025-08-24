import { forwardRef } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const ContactHeader = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useLanguage()

  return (
    <div ref={ref} className="text-center mb-4 sm:mb-5 md:mb-6">
      <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black text-white">
        <span className="bg-gradient-to-r from-[#FF763B] to-[#FFBE56] bg-clip-text text-transparent">
          {t.contact.title}
        </span>
      </h2>
      <p className="text-sm sm:text-base text-white/60 mt-2 sm:hidden">
        {t.contact.subtitle}
      </p>
    </div>
  )
})

ContactHeader.displayName = 'ContactHeader'

export default ContactHeader