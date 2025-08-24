const ContactBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Mesh pattern overlay - enhanced */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `
          linear-gradient(45deg, transparent 30%, rgba(255, 118, 59, 0.15) 50%, transparent 70%),
          linear-gradient(-45deg, transparent 30%, rgba(255, 190, 86, 0.15) 50%, transparent 70%)
        `,
        backgroundSize: '200px 200px'
      }}></div>
      
      {/* Static floating shapes - no blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-12 w-32 h-32 bg-gradient-to-tr from-[#FF763B]/8 to-transparent rounded-full"></div>
        <div className="absolute top-1/3 right-16 w-28 h-28 bg-gradient-to-bl from-[#FFBE56]/8 to-transparent rounded-full"></div>
        <div className="absolute top-1/6 left-1/4 w-20 h-20 bg-gradient-to-br from-[#FFD700]/6 to-transparent rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-tl from-[#FF763B]/6 to-transparent rounded-full"></div>
        
        {/* Accent dots - more decorative */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#FF763B]/25 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#FFBE56]/25 rounded-full"></div>
        <div className="absolute top-1/2 left-1/5 w-2 h-2 bg-[#FFD700]/20 rounded-full"></div>
        <div className="absolute bottom-1/2 right-1/5 w-3 h-3 bg-[#FF763B]/20 rounded-full"></div>
      </div>
      
      {/* Geometric accents */}
      <div className="absolute top-1/5 right-1/4 w-10 h-10 border border-[#FFBE56]/15 rotate-45"></div>
      <div className="absolute bottom-1/4 left-1/5 w-12 h-12 border border-[#FF763B]/12 rounded-full"></div>
      <div className="absolute top-2/3 right-1/3 w-8 h-8 border border-[#FFD700]/10 rotate-12"></div>
      
      {/* Dot matrix pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `
          radial-gradient(circle at 10px 10px, rgba(255, 190, 86, 0.3) 1px, transparent 1px),
          radial-gradient(circle at 50px 50px, rgba(255, 118, 59, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Circuit pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 80px,
            rgba(255, 190, 86, 0.15) 80px,
            rgba(255, 190, 86, 0.15) 81px
          )
        `
      }}></div>
      
      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,190,86,0.06),transparent_50%)]"></div>
    </div>
  )
}

export default ContactBackground