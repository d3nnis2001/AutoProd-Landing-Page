import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { STRINGS } from '../constants/strings'

const ContactForm = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-xl sm:text-xl md:text-2xl font-bold text-white mb-4">{t.contact.tabs.message}</h3>
      
      {isSubmitted ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#FF763B] to-[#FFBE56] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-white font-semibold text-base sm:text-lg">{STRINGS.SUCCESS_MESSAGES.MESSAGE_SENT_DE}</p>
            <p className="text-white/60 text-sm mt-2">{STRINGS.SUCCESS_MESSAGES.RESPONSE_PROMISE_DE}</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-3 sm:space-y-4 md:space-y-5">
          <div>
            <label htmlFor="name" className="block text-xs sm:text-sm text-white/60 mb-1 sm:mb-2">
              {t.contact.form.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#FF763B]/50 transition-colors text-sm sm:text-base"
              placeholder={t.contact.form.name}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm text-white/60 mb-1 sm:mb-2">
              {t.contact.form.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#FF763B]/50 transition-colors text-sm sm:text-base"
              placeholder={t.contact.form.email}
            />
          </div>
          
          <div className="flex-1 flex flex-col">
            <label htmlFor="message" className="block text-xs sm:text-sm text-white/60 mb-1 sm:mb-2">
              {t.contact.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#FF763B]/50 transition-colors resize-none text-sm sm:text-base"
              placeholder={t.contact.form.message}
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-[#FF763B] to-[#FFBE56] text-white font-medium sm:font-semibold rounded-lg hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:scale-100 text-sm sm:text-base"
          >
            {isSubmitting ? t.contact.form.sending : t.contact.form.send}
          </button>
        </form>
      )}
    </div>
  )
}

export default ContactForm