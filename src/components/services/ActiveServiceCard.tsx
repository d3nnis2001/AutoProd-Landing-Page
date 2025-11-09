import { useLanguage } from '../../contexts/LanguageContext'
import type { DetailedService } from '../../types'

interface ActiveServiceCardProps {
  service: DetailedService
}

const ActiveServiceCard = ({ service }: ActiveServiceCardProps) => {
  const { t } = useLanguage()

  return (
    <div className="lg:col-span-2 mb-4 lg:mb-0">
      <div className="h-full p-4 sm:p-6 lg:p-8 rounded-2xl bg-[#1A1A1A] border border-white/10">
        {/* Header - Mobile: vertical compact */}
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-5 mb-5 sm:mb-8 lg:mb-10">
          <div className="p-2.5 sm:p-4 rounded-2xl bg-gradient-to-br from-[#FF763B]/10 to-[#FFBE56]/10 border border-[#FF763B]/20">
            <div className="scale-110 sm:scale-110 lg:scale-125 text-transparent bg-gradient-to-r from-[#FF763B] to-[#FFBE56] bg-clip-text">
              {service.icon}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl lg:text-3xl font-black text-white mb-2 sm:mb-3 lg:mb-4">{service.title}</h3>
            <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-snug sm:leading-relaxed">{service.description}</p>
          </div>
        </div>

        {/* Features & Examples - Mobile: 2 columns, Tablet+: 2 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
          <div className="bg-white/5 rounded-xl p-3 sm:p-5 lg:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-2 mb-3 sm:mb-5 lg:mb-6">
              <div className="w-8 sm:w-10 h-[2px] bg-gradient-to-r from-[#FF763B] to-[#FFBE56]" />
              <h4 className="text-xs sm:text-base lg:text-lg font-bold text-white uppercase tracking-wide sm:tracking-wider">{t.services.coreFeatures}</h4>
            </div>
            <ul className="space-y-2.5 sm:space-y-4">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-1 sm:mt-1.5 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#FF763B] rounded-full flex-shrink-0" />
                  <span className="text-xs sm:text-base text-white/80 flex-1 leading-snug sm:leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 rounded-xl p-3 sm:p-5 lg:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-2 mb-3 sm:mb-5 lg:mb-6">
              <div className="w-8 sm:w-10 h-[2px] bg-gradient-to-r from-[#FFBE56] to-[#FF763B]" />
              <h4 className="text-xs sm:text-base lg:text-lg font-bold text-white uppercase tracking-wide sm:tracking-wider">{t.services.useCases}</h4>
            </div>
            <ul className="space-y-2.5 sm:space-y-4">
              {service.examples.map((example, idx) => (
                <li key={idx} className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-1 sm:mt-1.5 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#FFBE56] rounded-full flex-shrink-0" />
                  <span className="text-xs sm:text-base text-white/80 flex-1 leading-snug sm:leading-relaxed">{example}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveServiceCard