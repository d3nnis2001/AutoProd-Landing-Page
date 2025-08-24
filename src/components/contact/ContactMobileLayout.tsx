import ContactTabs from './ContactTabs'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'

interface ContactMobileLayoutProps {
  activeTab: number
  onTabChange: (tab: number) => void
}

const ContactMobileLayout = ({ activeTab, onTabChange }: ContactMobileLayoutProps) => {
  return (
    <div className="lg:hidden flex-1 flex flex-col">
      <ContactTabs activeTab={activeTab} onTabChange={onTabChange} />
      
      <div className="flex-1 bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-xl p-4 sm:p-5 md:p-6 border border-white/10 overflow-y-auto">
        {activeTab === 0 ? <ContactDetails /> : <ContactForm />}
      </div>
    </div>
  )
}

export default ContactMobileLayout