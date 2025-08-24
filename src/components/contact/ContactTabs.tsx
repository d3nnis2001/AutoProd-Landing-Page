import { useLanguage } from '../../contexts/LanguageContext'

interface ContactTabsProps {
  activeTab: number
  onTabChange: (tab: number) => void
}

const ContactTabs = ({ activeTab, onTabChange }: ContactTabsProps) => {
  const { t } = useLanguage()

  return (
    <div className="flex gap-2 mb-3 sm:mb-4">
      <button 
        onClick={() => onTabChange(0)}
        className={`flex-1 py-3 sm:py-3.5 px-3 text-base sm:text-base font-medium rounded-xl transition-all ${
          activeTab === 0 
            ? 'bg-gradient-to-r from-[#FF763B] to-[#FFBE56] text-white' 
            : 'bg-white/10 text-white/60'
        }`}
      >
        {t.contact.tabs.info}
      </button>
      <button 
        onClick={() => onTabChange(1)}
        className={`flex-1 py-3 sm:py-3.5 px-3 text-base sm:text-base font-medium rounded-xl transition-all ${
          activeTab === 1 
            ? 'bg-gradient-to-r from-[#FF763B] to-[#FFBE56] text-white' 
            : 'bg-white/10 text-white/60'
        }`}
      >
        {t.contact.tabs.message}
      </button>
    </div>
  )
}

export default ContactTabs