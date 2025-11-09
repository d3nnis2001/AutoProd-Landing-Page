import React from 'react'

interface SimpleWorkflowNodeProps {
  icon: React.ReactNode
  label: string
  sublabel?: string
  color: string
  isActive?: boolean
}

const SimpleWorkflowNode = React.memo<SimpleWorkflowNodeProps>(({ 
  icon, 
  label, 
  sublabel,
  color,
  isActive = false
}) => {
  return (
    <div className="relative flex flex-col items-center w-24 lg:w-28">
      {/* Node */}
      <div
        className={`
          relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center
          bg-[#1A1A1A] border-2 transition-all duration-[350ms]
          ${isActive ? 'shadow-lg' : 'border-gray-700'}
        `}
        style={{
          borderColor: isActive ? color : '#374151',
          boxShadow: isActive ? `0 10px 25px -5px ${color}50` : 'none'
        }}
      >
        <div className={`transition-all duration-[350ms] [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-7 sm:[&>svg]:h-7 ${isActive ? 'scale-110 text-white' : 'scale-100 text-gray-500'}`}>
          {icon}
        </div>

        {/* Active glow effect */}
        {isActive && (
          <div
            className="absolute inset-0 rounded-2xl animate-pulse"
            style={{
              background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`
            }}
          />
        )}
      </div>

      {/* Labels */}
      <div className="mt-2 text-center w-full">
        <p className={`text-xs sm:text-sm font-medium transition-colors duration-[350ms] ${
          isActive ? 'text-white' : 'text-gray-400'
        }`}>
          {label}
        </p>
        {sublabel && (
          <p className={`text-[10px] sm:text-xs transition-colors duration-[350ms] ${
            isActive ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {sublabel}
          </p>
        )}
      </div>
    </div>
  )
})

SimpleWorkflowNode.displayName = 'SimpleWorkflowNode'

export default SimpleWorkflowNode