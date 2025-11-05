import { useLanguage } from '../contexts/LanguageContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { STRINGS } from '../constants/strings'
import AutoProdLogo from '../assets/AutoProdLogo.svg'

const DatenschutzPage = () => {
  const { language, t } = useLanguage()
  const navigate = useNavigate()

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1D1D1D] to-[#0F0F0F]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 flex items-center justify-center">
            <img src={AutoProdLogo} alt="AutoProd Logo" className="w-full h-full" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">
              {t.privacy.title}
            </h1>
            <p className="text-white/60">{STRINGS.COMPANY_NAME}</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-[#1A1A1A] rounded-2xl p-8 border border-white/10">
          <div className="space-y-6 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-4">{t.privacy.responsible.title}</h2>
              <p className="mb-4">{t.privacy.responsible.content}</p>
              <div className="space-y-1">
                <p><strong>{STRINGS.COMPANY_OWNER}</strong></p>
                <p>{STRINGS.LEGAL_ADDRESS.street}</p>
                <p>{STRINGS.LEGAL_ADDRESS.zipCode} {STRINGS.LEGAL_ADDRESS.city}</p>
                <p>{language === 'de' ? STRINGS.LEGAL_ADDRESS.country : 'Germany'}</p>
                <p>{t.imprint.email}: {STRINGS.EMAIL}</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">{t.privacy.dataCollection.title}</h2>
              <p className="mb-4">{t.privacy.dataCollection.content}</p>
              <ul className="list-disc list-inside space-y-2 text-white/70">
                {t.privacy.dataCollection.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">{t.privacy.dataUsage.title}</h2>
              <ul className="list-disc list-inside space-y-2 text-white/70">
                {t.privacy.dataUsage.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">{t.privacy.rights.title}</h2>
              <p className="mb-4">{t.privacy.rights.content}</p>
              <ul className="list-disc list-inside space-y-2 text-white/70">
                {t.privacy.rights.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">{t.privacy.contact.title}</h2>
              <p className="mb-2">{t.privacy.contact.content}</p>
              <p className="text-white/70">{STRINGS.EMAIL}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">{t.privacy.security.title}</h2>
              <p>{t.privacy.security.content}</p>
            </section>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              navigate('/')
              setTimeout(() => {
                const footerSection = document.querySelector('#footer')
                if (footerSection) {
                  footerSection.scrollIntoView({ behavior: 'smooth' })
                }
              }, 100)
            }}
            className="px-6 py-3 bg-gradient-to-r from-[#FF763B] to-[#FFBE56] text-white font-medium rounded-lg hover:scale-105 transition-transform"
          >
            {t.privacy.back}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DatenschutzPage