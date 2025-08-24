const ServicesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid Pattern - with fade to bottom */}
      <div className="absolute inset-0 opacity-[0.1]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.3) 90%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.3) 90%, rgba(0,0,0,0) 100%)'
        }} />
      </div>
      
      {/* Static Elements - no blur, no animation - hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-[#FFBE56]/10 to-[#FF763B]/10 rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-r from-[#FF763B]/10 to-[#FFBE56]/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-14 h-14 bg-gradient-to-r from-[#FFD700]/8 to-[#FF763B]/8 rounded-full"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/3 right-20 w-10 h-10 border border-[#FF763B]/20 rotate-45"></div>
        <div className="absolute bottom-1/4 left-24 w-12 h-12 border border-[#FFBE56]/15 rounded-full"></div>
        
        {/* Small accent dots */}
        <div className="absolute top-1/5 right-1/3 w-3 h-3 bg-[#FF763B]/20 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-[#FFBE56]/25 rounded-full"></div>
      </div>
      
      {/* Mobile-friendly background elements - subtle and positioned to avoid text */}
      <div className="absolute inset-0 pointer-events-none md:hidden">
        <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-[#FFBE56]/8 to-[#FF763B]/8 rounded-full"></div>
        <div className="absolute bottom-4 left-4 w-10 h-10 bg-gradient-to-r from-[#FF763B]/8 to-[#FFBE56]/8 rounded-full"></div>
      </div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,118,59,0.03),transparent_50%)]"></div>
    </div>
  )
}

export default ServicesBackground