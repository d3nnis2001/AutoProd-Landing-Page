import { useLanguage } from '../../contexts/LanguageContext'

const ServicesHeader = () => {
  const { t } = useLanguage()

  return (
    <div className="text-center mb-4 sm:mb-3 md:mb-8">
      <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2">
        {t.services.title} <span className="bg-gradient-to-r from-[#FF763B] to-[#FFBE56] bg-clip-text text-transparent">{t.services.titleAccent}</span>
      </h2>
    </div>
  )
}

export default ServicesHeader