import type { DetailedService } from '../../types'

interface ServiceSelectorSidebarProps {
  services: DetailedService[]
  activeIndex: number
  onServiceSelect: (index: number) => void
}

const ServiceSelectorSidebar = ({ services, activeIndex, onServiceSelect }: ServiceSelectorSidebarProps) => {
  return (
    <div className="hidden lg:block lg:col-span-1">
      <div className="h-full flex flex-col gap-3">
        {services.map((service, index) => {
          if (index === activeIndex) return null
          
          return (
            <div 
              key={service.id} 
              className="flex-1 cursor-pointer"
              onClick={() => onServiceSelect(index)}
            >
              <div className="h-full p-4 lg:p-5 rounded-xl bg-[#1A1A1A] border border-white/10 hover:border-[#FF763B]/40 hover:bg-[#1F1F1F] transition-colors duration-200">
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="p-2 lg:p-3 rounded-xl bg-white/5">
                    {service.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-white font-bold text-sm lg:text-base mb-1">{service.title}</h4>
                    <p className="text-white/50 text-xs lg:text-sm line-clamp-2">{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ServiceSelectorSidebar