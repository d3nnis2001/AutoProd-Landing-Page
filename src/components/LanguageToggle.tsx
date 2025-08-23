import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage()
  
  return (
    <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
      <button
        onClick={() => setLanguage('de')}
        className={`px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
          language === 'de' 
            ? 'bg-gradient-to-r from-[#FF763B] to-[#FFBE56] text-white' 
            : 'text-white/60 hover:text-white/80 hover:bg-white/5'
        }`}
      >
        DE
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
          language === 'en' 
            ? 'bg-gradient-to-r from-[#FF763B] to-[#FFBE56] text-white' 
            : 'text-white/60 hover:text-white/80 hover:bg-white/5'
        }`}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageToggle