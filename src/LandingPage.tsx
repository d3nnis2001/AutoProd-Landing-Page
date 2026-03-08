import { useEffect } from 'react'
import AutoProdLogo from './assets/AutoProdLogo.svg'

// Commented out sections for now
// import HeroSection from './sections/HeroSection'
// import WorkflowDemoSection from './sections/WorkflowDemoSection'
// import ServicesSection from './sections/ServicesSpotlightSection'
// import ImageShowcaseSection from './sections/ImageShowcaseSection'
// import ContactSection from './sections/ContactSection'
// import FooterSection from './sections/FooterSection'

const HomepageModular = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#1D1D1D] flex flex-col">
      {/* Grid Background */}
      <div className="fixed inset-0 opacity-[0.12] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF763B]/5 rounded-full blur-3xl" />
      </div>

      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[5]">
        <div className="absolute top-16 right-8 w-24 h-24 bg-gradient-to-r from-[#FFBE56]/30 to-[#FF763B]/30 rounded-full"></div>
        <div className="absolute bottom-40 left-16 w-20 h-20 bg-gradient-to-r from-[#FF763B]/30 to-[#FFBE56]/30 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-[#FFD700]/25 to-[#FF763B]/25 rounded-full"></div>
        <div className="absolute top-1/4 right-16 w-12 h-12 border border-[#FF763B]/25 rotate-45"></div>
        <div className="absolute bottom-1/3 left-32 w-14 h-14 border border-[#FFBE56]/20 rounded-full"></div>
        <div className="absolute top-2/3 left-12 w-10 h-10 bg-[#FF763B]/20 rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-[#FFD700]/20 rounded-full"></div>
        <div className="absolute top-12 left-3/4 w-12 h-12 border border-[#FFBE56]/15 rounded-full"></div>
        <div className="absolute bottom-12 right-32 w-10 h-10 bg-[#FF763B]/15 rotate-45"></div>
        <div className="absolute top-1/6 right-1/5 w-4 h-4 bg-[#FF763B]/35 rounded-full"></div>
        <div className="absolute bottom-1/5 left-1/6 w-3 h-3 bg-[#FFBE56]/40 rounded-full"></div>
        <div className="absolute top-4/5 right-1/5 w-4 h-4 bg-[#FFD700]/30 rounded-full"></div>
      </div>

      {/* Logo */}
      <div className="relative z-50 flex items-center gap-2.5 px-6 pt-4 pb-2 shrink-0">
        <img src={AutoProdLogo} alt="AutoProd Logo" className="w-7 h-7" />
        <span className="text-white font-medium text-base">AutoProd</span>
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center shrink-0 pb-3">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">
          Termin <span className="bg-gradient-to-r from-[#FF763B] to-[#FFBE56] bg-clip-text text-transparent">vereinbaren</span>
        </h1>
        <p className="text-white/50 text-sm">Buch dir direkt einen kostenlosen Erstgesprächs-Termin.</p>
      </div>

      {/* Calendly — fills remaining space */}
      <div className="relative z-10 flex-1 min-h-0 px-4">
        <div
          className="calendly-inline-widget w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          data-url="https://calendly.com/dennis-schielke1"
          style={{ minWidth: '320px' }}
        />
      </div>

      {/* Minimal footer — just legal links */}
      <div className="relative z-50 flex justify-center gap-6 py-2 shrink-0">
        <a href="/impressum" className="text-white/30 hover:text-white/60 text-xs transition-colors">Impressum</a>
        <a href="/datenschutz" className="text-white/30 hover:text-white/60 text-xs transition-colors">Datenschutz</a>
      </div>
    </div>
  )
}

export default HomepageModular
