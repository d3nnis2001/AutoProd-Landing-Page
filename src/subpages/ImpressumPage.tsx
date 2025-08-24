import { useLanguage } from '../contexts/LanguageContext'
import { STRINGS } from '../constants/strings'
import AutoProdLogo from '../assets/AutoProdLogo.svg'

const ImpressumPage = () => {
  const { language } = useLanguage()

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
              {language === 'de' ? 'Impressum' : 'Legal Notice'}
            </h1>
            <p className="text-white/60">AutoProd</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-[#1A1A1A] rounded-2xl p-8 border border-white/10">
          {language === 'de' ? (
            <div className="space-y-6 text-white/80 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-white mb-4">Angaben gemäß § 5 TMG</h2>
                <div className="space-y-2">
                  <p><strong>{STRINGS.COMPANY_OWNER}</strong></p>
                  <p>{STRINGS.LEGAL_ADDRESS.street}</p>
                  <p>{STRINGS.LEGAL_ADDRESS.zipCode} {STRINGS.LEGAL_ADDRESS.city}</p>
                  <p>{STRINGS.LEGAL_ADDRESS.country}</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Kontakt</h2>
                <div className="space-y-2">
                  <p><strong>E-Mail:</strong> {STRINGS.EMAIL}</p>
                  <p><strong>Telefon:</strong> {STRINGS.PHONE}</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Haftungsausschluss</h2>
                <p>
                  Die Inhalte dieser Website wurden sorgfältig erstellt. Für die Richtigkeit, 
                  Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
                </p>
                <p className="mt-4">
                  Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. 
                  Für diese fremden Inhalte kann daher keine Gewähr übernommen werden.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Urheberrecht</h2>
                <p>
                  Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
                  unterliegen dem deutschen Urheberrecht. Downloads und Kopien dieser Seite sind 
                  nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-6 text-white/80 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-white mb-4">Information pursuant to § 5 TMG</h2>
                <div className="space-y-2">
                  <p><strong>{STRINGS.COMPANY_OWNER}</strong></p>
                  <p>{STRINGS.LEGAL_ADDRESS.street}</p>
                  <p>{STRINGS.LEGAL_ADDRESS.zipCode} {STRINGS.LEGAL_ADDRESS.city}</p>
                  <p>Germany</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Contact</h2>
                <div className="space-y-2">
                  <p><strong>Email:</strong> {STRINGS.EMAIL}</p>
                  <p><strong>Phone:</strong> {STRINGS.PHONE}</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Disclaimer</h2>
                <p>
                  The contents of this website have been created with great care. However, 
                  no guarantee can be given for the accuracy, completeness and timeliness of the contents.
                </p>
                <p className="mt-4">
                  Links to external third-party websites, over whose contents I have no influence. 
                  Therefore, no guarantee can be assumed for these external contents.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Copyright</h2>
                <p>
                  The contents and works created by the site operator on these pages are subject 
                  to German copyright law. Downloads and copies of this site are permitted for 
                  private, non-commercial use only.
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-gradient-to-r from-[#FF763B] to-[#FFBE56] text-white font-medium rounded-lg hover:scale-105 transition-transform"
          >
            {language === 'de' ? '← Zurück' : '← Back'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImpressumPage