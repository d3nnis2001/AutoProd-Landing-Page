import React from 'react'

interface ChatPopupProps {
  question: string
  onClose: () => void
}

const ChatPopup: React.FC<ChatPopupProps> = ({ question, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#2A2A2A] rounded-2xl max-w-md w-full p-6 border border-white/10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">AutoProd Support</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Chat Messages */}
        <div className="space-y-3 mb-4">
          {/* User Message */}
          <div className="flex justify-end">
            <div className="bg-gradient-to-r from-[#FF763B] to-[#FFBE56] text-white p-3 rounded-2xl rounded-br-sm max-w-[80%]">
              <p className="text-sm">{question}</p>
            </div>
          </div>
          
          {/* Bot Response */}
          <div className="flex justify-start">
            <div className="bg-white/10 text-white p-3 rounded-2xl rounded-bl-sm max-w-[80%]">
              <p className="text-sm">
                Vielen Dank für Ihre Anfrage! Ihre Nachricht wurde an unser Team weitergeleitet. 
                Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <span className="text-xs text-gray-500">Powered by AutoProd AI</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gradient-to-r from-[#FF763B] to-[#FFBE56] text-white rounded-lg text-sm font-medium hover:scale-105 transition-transform"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatPopup