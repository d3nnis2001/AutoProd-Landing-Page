import { forwardRef } from 'react'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'

const ContactDesktopLayout = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="hidden lg:grid lg:grid-cols-2 gap-6 md:gap-8 flex-1 min-h-0">
      <div className="group bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-2xl p-4 md:p-6 lg:p-8 border border-white/10 overflow-y-auto transition-all duration-300 hover:border-[#FF763B]/30 hover:shadow-[0_0_30px_rgba(255,118,59,0.15)]">
        <ContactDetails />
      </div>

      <div className="group bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-2xl p-4 md:p-6 lg:p-8 border border-white/10 overflow-y-auto transition-all duration-300 hover:border-[#FF763B]/30 hover:shadow-[0_0_30px_rgba(255,118,59,0.15)]">
        <ContactForm />
      </div>
    </div>
  )
})

ContactDesktopLayout.displayName = 'ContactDesktopLayout'

export default ContactDesktopLayout