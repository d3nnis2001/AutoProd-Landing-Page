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
    <div className="relative flex flex-col items-center">
      {/* Node */}
      <div 
        className={`
          relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center
          bg-[#1A1A1A] border-2 transition-colors duration-200
          ${isActive ? 'shadow-lg' : 'border-gray-700'}
        `}
        style={{
          borderColor: isActive ? color : '#374151',
          boxShadow: isActive ? `0 10px 25px -5px ${color}50` : 'none'
        }}
      >
        <div className={`transition-transform duration-200 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-7 sm:[&>svg]:h-7 ${isActive ? 'scale-110 text-white' : 'scale-100 text-gray-500'}`}>
          {icon}
        </div>
        
        {/* Active glow effect */}
        {isActive && (
          <div 
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`
            }}
          />
        )}
      </div>
      
      {/* Labels */}
      <div className="mt-2 text-center">
        <p className={`text-xs sm:text-sm font-medium transition-colors duration-500 ${
          isActive ? 'text-white' : 'text-gray-400'
        }`}>
          {label}
        </p>
        {sublabel && (
          <p className={`text-[10px] sm:text-xs transition-colors duration-500 ${
            isActive ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {sublabel}
          </p>
        )}
      </div>
      
      {/* Connection points */}
      <div className="absolute top-8 -left-2 w-1 h-1 bg-gray-600 rounded-full" />
      <div className="absolute top-8 -right-2 w-1 h-1 bg-gray-600 rounded-full" />
    </div>
  )
})

SimpleWorkflowNode.displayName = 'SimpleWorkflowNode'

export default SimpleWorkflowNode