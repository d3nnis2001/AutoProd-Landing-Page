interface GradientButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
  fullWidth?: boolean
}

export const GradientButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  fullWidth = false 
}: GradientButtonProps) => {
  if (variant === 'secondary') {
    return (
      <button 
        onClick={onClick}
        className={`${fullWidth ? 'w-full' : ''} bg-gradient-to-r from-[#1A1A1A] to-[#0F0F0F] text-white font-medium py-4 px-8 rounded-xl border border-[#FF763B]/30 hover:border-[#FF763B]/50 hover:bg-gradient-to-r hover:from-[#FF763B]/10 hover:to-[#FFBE56]/10 transition-all duration-300 ${className}`}
      >
        {children}
      </button>
    )
  }

  return (
    <div className={`group relative ${fullWidth ? 'w-full' : ''} ${className}`}>
      <div className="absolute -inset-1 bg-gradient-to-r from-[#FF763B] via-[#FFBE56] to-[#FF763B] rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-1000"></div>
      <button 
        onClick={onClick}
        className="relative w-full bg-gradient-to-r from-[#FF763B] to-[#FFBE56] text-white font-bold py-4 px-8 rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-[#FF763B]/25"
      >
        {children}
      </button>
    </div>
  )
}