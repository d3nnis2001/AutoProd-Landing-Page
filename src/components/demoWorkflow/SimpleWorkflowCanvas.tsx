import React, { useState } from 'react'
import SimpleWorkflowNode from './SimpleWorkflowNode'
import FlipCardsExpertise from './FlipCardsExpertise'
import { useLanguage } from '../../contexts/LanguageContext'

interface WorkflowStep {
  id: string
  icon: React.ReactNode
  label: string
  sublabel: string
  color: string
}

interface SimpleWorkflowCanvasProps {
  showExpertise: boolean
  setShowExpertise: (show: boolean) => void
}

const SimpleWorkflowCanvas = ({ showExpertise, setShowExpertise }: SimpleWorkflowCanvasProps) => {
  const { t } = useLanguage()
  const [isFlowing, setIsFlowing] = useState(false)
  const [activeNodeIndex, setActiveNodeIndex] = useState(-1)

  // SVG Icons
  const IdeaIcon = () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )

  const PlanningIcon = () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  )

  const CodeIcon = () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  )

  const OptimizeIcon = () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )

  const SuccessIcon = () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )

  // Workflow steps
  const steps: WorkflowStep[] = [
    {
      id: 'idea',
      icon: <IdeaIcon />,
      label: t.workflow.steps.idea.label,
      sublabel: t.workflow.steps.idea.sublabel,
      color: '#FF763B'
    },
    {
      id: 'planning',
      icon: <PlanningIcon />,
      label: t.workflow.steps.planning.label,
      sublabel: t.workflow.steps.planning.sublabel,
      color: '#FF763B'
    },
    {
      id: 'development',
      icon: <CodeIcon />,
      label: t.workflow.steps.development.label,
      sublabel: t.workflow.steps.development.sublabel,
      color: '#FF763B'
    },
    {
      id: 'optimization',
      icon: <OptimizeIcon />,
      label: t.workflow.steps.optimization.label,
      sublabel: t.workflow.steps.optimization.sublabel,
      color: '#FF763B'
    },
    {
      id: 'success',
      icon: <SuccessIcon />,
      label: t.workflow.steps.success.label,
      sublabel: t.workflow.steps.success.sublabel,
      color: '#FF763B'
    }
  ]

  const startFlow = () => {
    if (isFlowing || showExpertise) return

    setIsFlowing(true)
    setActiveNodeIndex(-1)

    // Start animation after a brief delay
    setTimeout(() => {
      setActiveNodeIndex(0)

      // Animate through nodes
      for (let i = 1; i < steps.length; i++) {
        setTimeout(() => {
          setActiveNodeIndex(i)
        }, i * 600)
      }

      // After animation completes, show expertise section
      setTimeout(() => {
        setIsFlowing(false)
        setActiveNodeIndex(-1)
        setShowExpertise(true)
      }, steps.length * 600 + 400)
    }, 100)
  }

  return (
    <>
      <div className="w-full max-w-6xl mx-auto relative z-10 px-4">
        {/* Workflow Container */}
        <div className={`relative bg-[#1A1A1A] rounded-2xl lg:rounded-3xl border border-white/10 p-4 sm:p-6 md:p-8 lg:p-12 transition-all duration-700 ${showExpertise ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`} style={{ display: showExpertise ? 'none' : 'block' }}>
        {/* Background pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #374151 1px, transparent 1px),
              linear-gradient(to bottom, #374151 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />

        {/* Workflow - Responsive */}
        <div className="relative hidden md:flex items-center justify-center">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <SimpleWorkflowNode
                icon={step.icon}
                label={step.label}
                sublabel={step.sublabel}
                color={step.color}
                isActive={activeNodeIndex >= index}
              />
              {index < steps.length - 1 && (
                <div className="relative w-12 lg:w-16 mx-2 h-0.5 bg-white/10 overflow-hidden">
                  <div
                    className={`absolute left-0 top-0 h-full bg-gradient-to-r from-[#FF763B] to-[#FFBE56] shadow-lg shadow-[#FF763B]/50 transition-all duration-[400ms] ease-out ${
                      isFlowing && activeNodeIndex > index
                        ? 'w-full opacity-100'
                        : 'w-0 opacity-0'
                    }`}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Workflow - Simple Compact Grid */}
        <div className="md:hidden relative">
          <div className="flex flex-wrap justify-center gap-1.5">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-300 ${
                  activeNodeIndex >= index 
                    ? 'bg-gradient-to-r from-[#FF763B]/20 to-[#FFBE56]/20 border-[#FF763B]/50' 
                    : 'bg-white/5 border-white/10'
                }`}
              >
                <div className={`transition-all duration-200 [&>svg]:w-4 [&>svg]:h-4 ${
                  activeNodeIndex >= index ? 'text-[#FF763B]' : 'text-gray-500'
                }`}>
                  {step.icon}
                </div>
                <div>
                  <p className={`text-xs font-medium ${
                    activeNodeIndex >= index ? 'text-white' : 'text-gray-400'
                  }`}>
                    {step.label}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Button Section */}
        <div className="relative z-20 mt-6 md:mt-8 lg:mt-12">
          <div className="flex justify-center">
            <button
              type="button"
              onClick={startFlow}
              disabled={isFlowing}
              className={`
                px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-3 text-base md:text-lg
                ${isFlowing
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#FF763B] to-[#FFBE56] text-white hover:scale-105 hover:shadow-2xl hover:shadow-[#FF763B]/40 cursor-pointer'
                }
              `}
            >
              <span>{isFlowing ? t.workflow.running : t.workflow.learnMore}</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {!showExpertise ? (
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Expertise Section - Fades in after workflow */}
      {showExpertise && <FlipCardsExpertise />}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  )
}

export default SimpleWorkflowCanvas