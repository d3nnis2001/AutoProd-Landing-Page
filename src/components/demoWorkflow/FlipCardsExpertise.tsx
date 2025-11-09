import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import N8nIcon from '../../assets/icons/n8nicon.svg'
import AiIcon from '../../assets/icons/aiicon.svg'
import WebIcon from '../../assets/icons/webicon.svg'
import LockIcon from '../../assets/icons/lockicon.svg'
import DataIcon from '../../assets/icons/dataicon.svg'
import BeratungIcon from '../../assets/icons/beratungicon.svg'

const FlipCardsExpertise = () => {
  const { t } = useLanguage()
  const expertiseCards = [
    {
      id: 'n8n',
      icon: <img src={N8nIcon} alt="n8n icon" className="w-full h-full object-contain" />,
      title: t.expertise.n8n.title,
      tagline: t.expertise.n8n.tagline,
      features: t.expertise.n8n.features
    },
    {
      id: 'ai',
      icon: <img src={AiIcon} alt="AI icon" className="w-full h-full object-contain" />,
      title: t.expertise.ai.title,
      tagline: t.expertise.ai.tagline,
      features: t.expertise.ai.features
    },
    {
      id: 'web',
      icon: <img src={WebIcon} alt="Web icon" className="w-full h-full object-contain" />,
      title: t.expertise.web.title,
      tagline: t.expertise.web.tagline,
      features: t.expertise.web.features
    },
    {
      id: 'security',
      icon: <img src={LockIcon} alt="Security icon" className="w-full h-full object-contain" />,
      title: t.expertise.security.title,
      tagline: t.expertise.security.tagline,
      features: t.expertise.security.features
    },
    {
      id: 'data',
      icon: <img src={DataIcon} alt="Data icon" className="w-full h-full object-contain" />,
      title: t.expertise.data.title,
      tagline: t.expertise.data.tagline,
      features: t.expertise.data.features
    },
    {
      id: 'consulting',
      icon: <img src={BeratungIcon} alt="Consulting icon" className="w-full h-full object-contain" />,
      title: t.expertise.consulting.title,
      tagline: t.expertise.consulting.tagline,
      features: t.expertise.consulting.features
    }
  ]

  return (
    <div className="w-full max-w-7xl mx-auto relative z-10 px-4 animate-fade-in">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-black text-white mb-2 sm:mb-3">
          {t.expertise.title} <span className="bg-gradient-to-r from-[#FF763B] to-[#FFBE56] bg-clip-text text-transparent">{t.expertise.titleAccent}</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-2xl mx-auto px-4">
          {t.expertise.subtitle}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {expertiseCards.map((card, index) => (
          <div
            key={card.id}
            className="group perspective-1000 h-64 sm:h-72"
            style={{
              animation: `slideIn 0.6s ease-out ${index * 0.08}s both`
            }}
          >
            <div className="relative w-full h-full transition-transform duration-[600ms] preserve-3d group-hover:rotate-y-180 group-active:rotate-y-180">
              {/* Front Side */}
              <div className="absolute inset-0 backface-hidden">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm border border-white/10 group-hover:border-[#FF763B]/30 transition-all duration-300">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF763B]/0 to-[#FFBE56]/0 group-hover:from-[#FF763B]/10 group-hover:to-[#FFBE56]/5 transition-all duration-500" />

                  <div className="relative w-full h-full p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center">
                    {/* Icon Container */}
                    <div className="mb-2 sm:mb-3 group-hover:scale-110 group-active:scale-110 transition-all duration-500">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
                        {card.icon}
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#FF763B] group-hover:to-[#FFBE56] group-hover:bg-clip-text group-active:text-transparent group-active:bg-gradient-to-r group-active:from-[#FF763B] group-active:to-[#FFBE56] group-active:bg-clip-text transition-all duration-300">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/50 group-hover:text-white/70 group-active:text-white/70 transition-colors duration-300">
                      {card.tagline}
                    </p>

                    {/* Hover Hint */}
                    <div className="mt-3 sm:mt-4 text-[10px] sm:text-xs text-white/30 group-hover:text-[#FF763B]/60 group-active:text-[#FF763B]/60 transition-colors duration-300">
                      {t.expertise.hoverHint}
                    </div>
                  </div>

                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF763B]/20 via-[#FFBE56]/20 to-[#FF763B]/20 blur-xl" />
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 backface-hidden rotate-y-180">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#FF763B]/10 to-[#FFBE56]/10 backdrop-blur-md border border-[#FF763B]/30">
                  <div className="w-full h-full p-4 sm:p-5 md:p-6 flex flex-col justify-center">
                    <h3 className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#FF763B] to-[#FFBE56] bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-5">
                      {card.title}
                    </h3>
                    <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
                      {card.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-xs sm:text-sm text-white/90"
                          style={{
                            animation: `fadeInLeft 0.3s ease-out ${idx * 0.1}s both`
                          }}
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 flex-shrink-0 text-[#FF763B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default FlipCardsExpertise
