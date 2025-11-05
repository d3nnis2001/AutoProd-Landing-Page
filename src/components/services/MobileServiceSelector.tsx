import type { DetailedService } from '../../types'

interface MobileServiceSelectorProps {
  services: DetailedService[]
  activeIndex: number
  onServiceSelect: (index: number) => void
}

const MobileServiceSelector = ({ services, activeIndex, onServiceSelect }: MobileServiceSelectorProps) => {
  return (
    <div className="lg:hidden mb-3">
      <div className="grid grid-cols-3 gap-2">
        {services.map((service, index) => (
          <button
            key={service.id}
            onClick={() => onServiceSelect(index)}
            className={`p-2 rounded-lg transition-all flex flex-col items-center gap-1 ${
              activeIndex === index
                ? 'bg-gradient-to-br from-[#FF763B]/20 to-[#FFBE56]/20 border border-[#FF763B]/50'
                : 'bg-white/5 border border-white/10'
            }`}
          >
            <div className={`scale-75 ${
              activeIndex === index
                ? 'text-transparent bg-gradient-to-r from-[#FF763B] to-[#FFBE56] bg-clip-text'
                : 'text-white/60'
            }`}>
              {service.icon}
            </div>
            <span className={`text-[9px] font-medium text-center leading-none ${
              activeIndex === index ? 'text-white' : 'text-white/60'
            }`}>
              {service.title.split(' ')[0]}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default MobileServiceSelector