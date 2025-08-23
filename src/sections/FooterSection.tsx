import AutoProdLogo from '../../src/assets/AutoProdLogo.svg'
import { useLanguage } from '../contexts/LanguageContext'

const FooterSection = () => {
  const { t } = useLanguage()
  return (
    <footer className="relative h-screen snap-start snap-always flex items-center bg-gradient-to-b from-[#1D1D1D] via-[#0F0F0F] to-[#000000] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,118,59,0.03)_0%,transparent_70%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 w-full h-full flex flex-col justify-center">
        {/* Team Section - Only on Desktop */}
        <div className="hidden lg:flex flex-col items-center mb-20">
          <div className="grid grid-cols-3 gap-12 xl:gap-20">
            <div className="flex flex-col items-center text-center">
              <div className="w-[140px] h-[140px] xl:w-[160px] xl:h-[160px] rounded-full bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-2 border-[#FF763B]/20 overflow-hidden shadow-xl mb-4">
                <div className="w-full h-full flex items-center justify-center text-white/40 text-5xl xl:text-6xl font-light">DS</div>
              </div>
              <h4 className="text-xl xl:text-2xl font-bold text-white mb-1">Dennis Schielke</h4>
              <p className="text-base xl:text-lg text-white/80">{t.footer.team.roles.cto}</p>
              <p className="text-sm xl:text-base text-white/50">{t.footer.team.roles.ctoDesc}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-[140px] h-[140px] xl:w-[160px] xl:h-[160px] rounded-full bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-2 border-[#FFBE56]/20 overflow-hidden shadow-xl mb-4">
                <div className="w-full h-full flex items-center justify-center text-white/40 text-5xl xl:text-6xl font-light">PG</div>
              </div>
              <h4 className="text-xl xl:text-2xl font-bold text-white mb-1">Philip der Süße</h4>
              <p className="text-base xl:text-lg text-white/80">CFO</p>
              <p className="text-sm xl:text-base text-white/50">Finanz & Buchhaltung</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-[140px] h-[140px] xl:w-[160px] xl:h-[160px] rounded-full bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-2 border-[#FFD700]/20 overflow-hidden shadow-xl mb-4">
                <div className="w-full h-full flex items-center justify-center text-white/40 text-5xl xl:text-6xl font-light">MK</div>
              </div>
              <h4 className="text-xl xl:text-2xl font-bold text-white mb-1">Max Krämer</h4>
              <p className="text-base xl:text-lg text-white/80">COO & Operations</p>
              <p className="text-sm xl:text-base text-white/50">Prozessoptimierung</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content - Responsive Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-6 sm:mb-12 lg:mb-16">
          {/* Logo & Description - Full width on mobile, 2 cols on tablet */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 sm:mb-8 lg:mb-10">
              <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-12 lg:h-12 flex items-center justify-center">
                <img src={AutoProdLogo} alt="AutoProd Logo" className="w-full h-full" />
              </div>
              <span className="text-xl sm:text-3xl lg:text-2xl font-bold text-white">AutoProd</span>
            </div>
            <p className="text-white/60 text-sm sm:text-lg lg:text-lg leading-relaxed mb-4 sm:mb-8 lg:mb-10 max-w-md">
              Transformieren Sie Ihr Business mit maßgeschneiderten Automatisierungslösungen. 
              Von der ersten Idee bis zur finalen Implementierung.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-white/40 text-sm sm:text-base lg:text-sm hidden sm:inline">Folgen Sie uns:</span>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-[#FF763B]/10 to-[#FFBE56]/10 rounded-full flex items-center justify-center border border-white/10 hover:border-[#FF763B]/30 transition-all duration-300">
                  <svg className="w-5 h-5 text-white/60 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-[#FF763B]/10 to-[#FFBE56]/10 rounded-full flex items-center justify-center border border-white/10 hover:border-[#FFBE56]/30 transition-all duration-300">
                  <svg className="w-5 h-5 text-white/60 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-[#FF763B]/10 to-[#FFBE56]/10 rounded-full flex items-center justify-center border border-white/10 hover:border-[#FF763B]/30 transition-all duration-300">
                  <svg className="w-5 h-5 text-white/60 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-base sm:text-xl lg:text-lg mb-3 sm:mb-8 lg:mb-6">Services</h4>
            <ul className="space-y-2 sm:space-y-4 lg:space-y-3">
              <li><a href="#" className="text-white/60 text-sm sm:text-lg lg:text-base hover:text-[#FF763B] transition-colors duration-300">Workflow Automation</a></li>
              <li><a href="#" className="text-white/60 text-sm sm:text-lg lg:text-base hover:text-[#FF763B] transition-colors duration-300">API Integration</a></li>
              <li><a href="#" className="text-white/60 text-sm sm:text-lg lg:text-base hover:text-[#FF763B] transition-colors duration-300">Custom Development</a></li>
              <li><a href="#" className="text-white/60 text-sm sm:text-lg lg:text-base hover:text-[#FF763B] transition-colors duration-300">Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-base sm:text-xl lg:text-lg mb-3 sm:mb-8 lg:mb-6">Kontakt</h4>
            <div className="space-y-2.5 sm:space-y-5 lg:space-y-4">
              <div>
                <div className="text-white/60 text-xs sm:text-base lg:text-sm mb-0.5 sm:mb-1 lg:mb-1">E-Mail</div>
                <div className="text-white font-medium text-sm sm:text-lg lg:text-base">contact@autoprod.de</div>
              </div>
              <div>
                <div className="text-white/60 text-xs sm:text-base lg:text-sm mb-0.5 sm:mb-1 lg:mb-1">Telefon</div>
                <div className="text-white font-medium text-sm sm:text-lg lg:text-base">+49 (0) 123 456 789</div>
              </div>
              <div>
                <div className="text-white/60 text-xs sm:text-base lg:text-sm mb-0.5 sm:mb-1 lg:mb-1">Standort</div>
                <div className="text-white font-medium text-sm sm:text-lg lg:text-base">Bielefeld, Deutschland</div>
              </div>
            </div>

            {/* Back to top button - Hidden on mobile */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hidden sm:block group relative px-4 py-2 bg-gradient-to-r from-[#FF763B]/10 to-[#FFBE56]/10 rounded-full border border-white/10 hover:scale-110 transition-all duration-300 mt-6"
            >
              <span className="text-white group-hover:text-[#FF763B] transition-colors duration-300 text-sm">↑ Nach oben</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF763B]/5 to-[#FFBE56]/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Bottom Bar - Responsive */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 lg:pt-10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <div className="text-white/40 text-sm sm:text-base lg:text-sm order-2 sm:order-1">
            © 2025 AutoProd. Alle Rechte vorbehalten.
          </div>
          <div className="flex gap-6 text-sm sm:text-base lg:text-sm order-1 sm:order-2">
            <a href="/impressum" className="text-white/40 hover:text-white/60 transition-colors duration-300">Impressum</a>
            <a href="/datenschutz" className="text-white/40 hover:text-white/60 transition-colors duration-300">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection