import React, { useState } from 'react'
import SimpleWorkflowNode from './SimpleWorkflowNode'
import ChatPopup from './ChatPopup'
import MetricsDisplay from './MetricsDisplay'

interface WorkflowStep {
  id: string
  icon: React.ReactNode
  label: string
  sublabel: string
  color: string
}

const SimpleWorkflowCanvas = () => {
  const [isFlowing, setIsFlowing] = useState(false)
  const [activeNodeIndex, setActiveNodeIndex] = useState(-1)
  const [userQuestion, setUserQuestion] = useState('')
  const [showNotification, setShowNotification] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [savedQuestion, setSavedQuestion] = useState('')
  const [showMetrics, setShowMetrics] = useState(false)

  // SVG Icons
  const WebhookIcon = () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
  
  const AIIcon = () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
  
  const SwitchIcon = () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  )
  
  const SlackIcon = () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  )
  
  const DatabaseIcon = () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  )

  // Workflow steps
  const steps: WorkflowStep[] = [
    {
      id: 'webhook',
      icon: <WebhookIcon />,
      label: 'Webhook',
      sublabel: 'Frage empfangen',
      color: '#FF763B'
    },
    {
      id: 'ai',
      icon: <AIIcon />,
      label: 'OpenAI',
      sublabel: 'Frage verstehen',
      color: '#FF763B'
    },
    {
      id: 'condition',
      icon: <SwitchIcon />,
      label: 'Router',
      sublabel: 'Kategorie prüfen',
      color: '#FF763B'
    },
    {
      id: 'slack',
      icon: <SlackIcon />,
      label: 'Slack',
      sublabel: 'Team benachrichtigen',
      color: '#FF763B'
    },
    {
      id: 'database',
      icon: <DatabaseIcon />,
      label: 'Airtable',
      sublabel: 'Lead speichern',
      color: '#FF763B'
    }
  ]

  const startFlow = () => {
    if (isFlowing || !userQuestion.trim()) return
    
    setIsFlowing(true)
    setActiveNodeIndex(-1)
    setSavedQuestion(userQuestion) // Save the question for the chat
    
    // Start animation after a brief delay
    setTimeout(() => {
      setActiveNodeIndex(0)
      
      // Animate through nodes
      for (let i = 1; i < steps.length; i++) {
        setTimeout(() => {
          setActiveNodeIndex(i)
        }, i * 800)
      }
      
      // Reset after animation completes and show notification
      setTimeout(() => {
        setIsFlowing(false)
        setActiveNodeIndex(-1)
        setUserQuestion('') // Clear input after completion
        
        // Show metrics first, then notification with delay
        setTimeout(() => {
          setShowMetrics(true)
          // Show notification after longer delay
          setTimeout(() => {
            setShowNotification(true)
          }, 1200)
        }, 500)
      }, steps.length * 800 + 500)
    }, 100)
  }

  const handleNotificationClick = () => {
    setShowNotification(false)
    setShowChat(true)
  }

  return (
    <>
      {/* Metrics Display */}
      <MetricsDisplay show={showMetrics} />
      
      <div className="w-full max-w-6xl mx-auto relative z-10 px-4">
        {/* Workflow Container */}
        <div className="relative bg-[#1A1A1A] rounded-2xl lg:rounded-3xl border border-white/10 p-4 sm:p-6 md:p-8 lg:p-12">
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
        <div className="relative hidden md:flex items-center justify-center gap-0">
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
                <div className={`h-0.5 w-12 lg:w-16 transition-all duration-500 ${
                  isFlowing && activeNodeIndex > index 
                    ? 'bg-gradient-to-r from-[#FF763B] to-[#FFBE56]' 
                    : 'bg-white/10'
                }`} />
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

        {/* Input and Button Section */}
        <div className="relative z-20 mt-6 md:mt-8 lg:mt-12">
          <div className="flex justify-center">
            <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-2 sm:gap-3">
              <input
                type="text"
                value={userQuestion}
                onChange={(e) => setUserQuestion(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && startFlow()}
                placeholder="Stellen Sie uns eine Frage..."
                className="flex-1 px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-gray-900/50 border border-gray-700 rounded-xl sm:rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FF763B] focus:ring-2 focus:ring-[#FF763B]/20 transition-all text-sm sm:text-base md:text-lg"
                disabled={isFlowing}
              />
              <button
                type="button"
                onClick={startFlow}
                disabled={isFlowing || !userQuestion.trim()}
                className={`
                  px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base
                  ${isFlowing || !userQuestion.trim()
                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-[#FF763B] to-[#FFBE56] text-white sm:hover:scale-105 hover:shadow-lg hover:shadow-[#FF763B]/30 cursor-pointer'
                  }
                `}
              >
                <span>{isFlowing ? 'Verarbeitet...' : 'Senden'}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Message Notification Popup - Responsive position */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 md:bottom-16 md:right-16 z-50">
          <div className="relative">
            {/* Pulse animation behind button */}
            <div className="absolute inset-0 bg-[#FF763B] rounded-full opacity-75" style={{
              animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
            }}></div>
            
            {/* Notification button */}
            <button
              className="relative bg-gradient-to-br from-[#FF763B] to-[#FFBE56] text-white rounded-full p-5 shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
              onClick={handleNotificationClick}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              
              {/* Red notification dot */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
            </button>
          </div>
        </div>
      )}
      
      {/* Chat Popup */}
      {showChat && (
        <ChatPopup 
          question={savedQuestion} 
          onClose={() => setShowChat(false)} 
        />
      )}
      
      </div>
    </>
  )
}

export default SimpleWorkflowCanvas