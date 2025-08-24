import React from 'react'

interface MetricsDisplayProps {
  show: boolean
}

const MetricsDisplay: React.FC<MetricsDisplayProps> = ({ show }) => {
  if (!show) return null
  
  const metrics = [
    { label: 'Verarbeitungszeit', value: '0.3s', color: 'from-green-400 to-green-500' },
    { label: 'Tokens verwendet', value: '142', color: 'from-blue-400 to-blue-500' },
    { label: 'Kosten', value: '€0.002', color: 'from-purple-400 to-purple-500' }
  ]
  
  return (
    <div className="absolute top-4 left-4 z-30">
      <div className="bg-black/80 backdrop-blur-xl rounded-xl p-4 border border-white/10">
        <h4 className="text-white font-semibold mb-3 text-sm">Workflow Metriken</h4>
        <div className="space-y-2">
          {metrics.map((metric, index) => (
            <div 
              key={metric.label}
              className="flex items-center justify-between gap-4"
              style={{
                animation: `slideIn 0.3s ease-out forwards`,
                animationDelay: `${index * 100}ms`,
                opacity: 0
              }}
            >
              <span className="text-gray-400 text-xs">{metric.label}:</span>
              <span className={`text-sm font-mono font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}

export default MetricsDisplay