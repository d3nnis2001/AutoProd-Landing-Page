import React from 'react'

interface FlowConnectionProps {
  from: { x: number; y: number }
  to: { x: number; y: number }
  isActive: boolean
  delay?: number
}

const FlowConnection: React.FC<FlowConnectionProps> = ({ from, to, isActive, delay = 0 }) => {
  const path = `M ${from.x} ${from.y} L ${to.x} ${to.y}`
  
  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <defs>
        <linearGradient id={`gradient-${from.x}-${from.y}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF763B" />
          <stop offset="100%" stopColor="#FFBE56" />
        </linearGradient>
      </defs>
      
      {/* Background line */}
      <path
        d={path}
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Animated line */}
      {isActive && (
        <path
          d={path}
          stroke={`url(#gradient-${from.x}-${from.y})`}
          strokeWidth="2"
          fill="none"
          strokeDasharray="5 5"
          style={{
            animation: `flow 1s linear infinite`,
            animationDelay: `${delay}ms`
          }}
        />
      )}
      
      <style>{`
        @keyframes flow {
          0% { stroke-dashoffset: 10; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </svg>
  )
}

export default FlowConnection