import { useLanguage } from '../../contexts/LanguageContext'
import type { DetailedService } from '../../types'

interface ActiveServiceCardProps {
  service: DetailedService
}

const ActiveServiceCard = ({ service }: ActiveServiceCardProps) => {
  const { t } = useLanguage()

  return (
    <div className="lg:col-span-2 mb-4 lg:mb-0">
      <div className="h-full p-3 sm:p-6 lg:p-8 rounded-2xl bg-[#1A1A1A] border border-white/10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-5 mb-4 sm:mb-6">
          <div className="p-3 sm:p-4 rounded-2xl bg-white/5">
            <div className="scale-100 sm:scale-110 lg:scale-125">
              {service.icon}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-2">{service.title}</h3>
            <p className="text-white/70 text-sm sm:text-base">{service.description}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6">
          {Object.entries(service.stats).map(([key, value]) => (
            <div key={key} className="p-2 sm:p-3 lg:p-4 bg-white/5 rounded-xl border border-white/5">
              <div className="text-lg sm:text-xl lg:text-2xl font-black bg-gradient-to-r from-[#FF763B] to-[#FFBE56] bg-clip-text text-transparent mb-1">
                {value}
              </div>
              <div className="text-[10px] sm:text-xs text-white/50 font-medium capitalize">
                {service.statsLabels[key as keyof typeof service.statsLabels] || key}
              </div>
            </div>
          ))}
        </div>

        {/* Features & Examples */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
          <div className="bg-white/5 rounded-xl p-2.5 sm:p-4 lg:p-5">
            <div className="flex items-center gap-2 mb-2 sm:mb-4">
              <div className="w-6 sm:w-8 h-[2px] bg-gradient-to-r from-[#FF763B] to-[#FFBE56]" />
              <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">{t.services.coreFeatures}</h4>
            </div>
            <ul className="space-y-1.5 sm:space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-1 sm:mt-1.5 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#FF763B] rounded-full flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-white/70 flex-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white/5 rounded-xl p-2.5 sm:p-4 lg:p-5">
            <div className="flex items-center gap-2 mb-2 sm:mb-4">
              <div className="w-6 sm:w-8 h-[2px] bg-gradient-to-r from-[#FFBE56] to-[#FF763B]" />
              <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">{t.services.useCases}</h4>
            </div>
            <ul className="space-y-1.5 sm:space-y-3">
              {service.examples.map((example, idx) => (
                <li key={idx} className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-1 sm:mt-1.5 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#FFBE56] rounded-full flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-white/70 flex-1">{example}</span>
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