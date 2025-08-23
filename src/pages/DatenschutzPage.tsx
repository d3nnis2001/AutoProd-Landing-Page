import { useLanguage } from '../contexts/LanguageContext'
import AutoProdLogo from '../assets/AutoProdLogo.svg'

const DatenschutzPage = () => {
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
              {language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
            </h1>
            <p className="text-white/60">AutoProd</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-[#1A1A1A] rounded-2xl p-8 border border-white/10">
          {language === 'de' ? (
            <div className="space-y-6 text-white/80 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-white mb-4">Verantwortlicher</h2>
                <div className="space-y-1">
                  <p><strong>Dennis Schielke</strong></p>
                  <p>Musterstraße 123</p>
                  <p>33602 Bielefeld</p>
                  <p>Deutschland</p>
                  <p>E-Mail: contact@autoprod.de</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Welche Daten erfassen wir?</h2>
                <p className="mb-4">
                  <strong>Kontaktformular:</strong> Wenn Sie uns eine Nachricht über das Kontaktformular senden, 
                  speichern wir Ihren Namen, Ihre E-Mail-Adresse und Ihre Nachricht, um Ihre Anfrage zu bearbeiten.
                </p>
                <p className="mb-4">
                  <strong>Technische Daten:</strong> Beim Besuch der Website werden automatisch technische 
                  Informationen wie IP-Adresse, Browser-Typ und Zugriffszeit erfasst.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Wofür nutzen wir Ihre Daten?</h2>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>Beantwortung Ihrer Kontaktanfragen</li>
                  <li>Bereitstellung der Website-Funktionen</li>
                  <li>Verbesserung der Website-Sicherheit</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Ihre Rechte</h2>
                <p className="mb-4">Sie haben das Recht auf:</p>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>Auskunft über Ihre gespeicherten Daten</li>
                  <li>Berichtigung unrichtiger Daten</li>
                  <li>Löschung Ihrer Daten</li>
                  <li>Einschränkung der Datenverarbeitung</li>
                  <li>Widerspruch gegen die Datenverarbeitung</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Speicherdauer</h2>
                <p>
                  Kontaktanfragen werden gelöscht, sobald sie vollständig bearbeitet sind und keine rechtlichen 
                  Aufbewahrungspflichten bestehen. Technische Daten werden nach spätestens 7 Tagen gelöscht.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Sicherheit</h2>
                <p>
                  Diese Website nutzt SSL-Verschlüsselung zum Schutz Ihrer Daten. Wir setzen keine Tracking-Tools 
                  oder Analyse-Software ein.
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-6 text-white/80 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-white mb-4">Data Controller</h2>
                <div className="space-y-1">
                  <p><strong>Dennis Schielke</strong></p>
                  <p>Musterstraße 123</p>
                  <p>33602 Bielefeld</p>
                  <p>Germany</p>
                  <p>Email: contact@autoprod.de</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">What Data Do We Collect?</h2>
                <p className="mb-4">
                  <strong>Contact Form:</strong> When you send us a message via the contact form, 
                  we store your name, email address and message to process your inquiry.
                </p>
                <p className="mb-4">
                  <strong>Technical Data:</strong> When visiting the website, technical information 
                  such as IP address, browser type and access time is automatically collected.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">How Do We Use Your Data?</h2>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>Answering your contact inquiries</li>
                  <li>Providing website functions</li>
                  <li>Improving website security</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>Information about your stored data</li>
                  <li>Correction of incorrect data</li>
                  <li>Deletion of your data</li>
                  <li>Restriction of data processing</li>
                  <li>Object to data processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Storage Duration</h2>
                <p>
                  Contact inquiries are deleted once they have been fully processed and no legal 
                  retention obligations exist. Technical data is deleted after 7 days at the latest.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">Security</h2>
                <p>
                  This website uses SSL encryption to protect your data. We do not use tracking tools 
                  or analysis software.
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

export default DatenschutzPage