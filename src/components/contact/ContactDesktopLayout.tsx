import { forwardRef } from 'react'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'

const ContactDesktopLayout = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="hidden lg:grid lg:grid-cols-2 gap-6 md:gap-8 flex-1 min-h-0">
      <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-2xl p-4 md:p-6 lg:p-8 border border-white/10 overflow-y-auto">
        <ContactDetails />
      </div>

      <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-2xl p-4 md:p-6 lg:p-8 border border-white/10 overflow-y-auto">
        <ContactForm />
      </div>
    </div>
  )
})

ContactDesktopLayout.displayName = 'ContactDesktopLayout'

export default ContactDesktopLayout