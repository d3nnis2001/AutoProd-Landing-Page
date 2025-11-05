import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../contexts/LanguageContext'
import { EMAILJS_CONFIG } from '../config/emailjs'

interface QualificationModalProps {
  isOpen: boolean
  onClose: () => void
}

const QualificationModal = ({ isOpen, onClose }: QualificationModalProps) => {
  const { t } = useLanguage()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    companySize: '',
    processes: [] as string[],
    customProcess: '',
    automationLevel: '',
    budget: '',
    customBudget: '',
    timeframe: '',
    customTimeframe: '',
    email: '',
    name: '',
    company: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async () => {
    try {
      // Prepare email template parameters
      const emailParams = {
        company_size: formData.companySize,
        processes: formData.processes.length > 0
          ? formData.processes.join(', ')
          : formData.customProcess,
        automation_level: formData.automationLevel,
        budget: formData.budget || formData.customBudget,
        timeframe: formData.timeframe || formData.customTimeframe,
        contact_email: formData.email,
        contact_name: formData.name || 'Nicht angegeben',
        contact_company: formData.company || 'Nicht angegeben',
        to_email: 'contact@autoprod.de'
      }

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.QUALIFICATION_TEMPLATE_ID,
        emailParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      setIsSubmitted(true)
    } catch (error) {
      console.error('Failed to send qualification email:', error)
      alert('Es gab einen Fehler beim Senden der Daten. Bitte versuchen Sie es erneut.')
    }
  }

  const handleClose = () => {
    onClose()
    // Reset form after closing
    setTimeout(() => {
      setFormData({
        companySize: '',
        processes: [],
        customProcess: '',
        automationLevel: '',
        budget: '',
        customBudget: '',
        timeframe: '',
        customTimeframe: '',
        email: '',
        name: '',
        company: ''
      })
      setStep(1)
      setIsSubmitted(false)
    }, 300)
  }

  const handleProcessToggle = (process: string) => {
    setFormData(prev => ({
      ...prev,
      processes: prev.processes.includes(process)
        ? prev.processes.filter(p => p !== process)
        : [...prev.processes, process]
    }))
  }

  const canProceed = () => {
    switch (step) {
      case 1: return formData.companySize !== ''
      case 2: return formData.processes.length > 0 || formData.customProcess.trim() !== ''
      case 3: return formData.automationLevel !== ''
      case 4: return formData.budget !== '' || formData.customBudget.trim() !== ''
      case 5: return formData.timeframe !== '' || formData.customTimeframe.trim() !== ''
      case 6: return formData.email !== '' && formData.email.includes('@')
      default: return false
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl h-[600px] bg-gradient-to-b from-[#1D1D1D] to-[#1A1A1A] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
        >
          <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8 flex-1 overflow-y-auto">
          {/* Success Screen */}
          {isSubmitted ? (
            <div className="text-center flex flex-col justify-center h-full">
              <div className="w-20 h-20 bg-gradient-to-r from-[#FF763B] to-[#FFBE56] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{t.qualification.success.title}</h2>
              <p className="text-white/70 text-lg mb-8">
                {t.qualification.success.message}
              </p>
              <button
                onClick={handleClose}
                className="px-8 py-3 bg-gradient-to-r from-[#FF763B] to-[#FFBE56] text-white font-medium rounded-xl hover:scale-105 transition-transform"
              >
                {t.qualification.success.close}
              </button>
            </div>
          ) : (
            <>
              {/* Progress Bar */}
              <div className="mb-8 pr-12">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-white/60">{t.qualification.progress} {step} {t.qualification.of} 6</span>
                  <span className="text-sm text-white/60">{Math.round((step / 6) * 100)}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#FF763B] to-[#FFBE56] transition-all duration-300"
                    style={{ width: `${(step / 6) * 100}%` }}
                  />
                </div>
              </div>

          {/* Step 1: Company Size */}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-2">{t.qualification.step1.title}</h2>
              <p className="text-white/60 mb-4">{t.qualification.step1.subtitle}</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: '1-10', label: t.qualification.step1.options.small },
                  { value: '11-50', label: t.qualification.step1.options.medium },
                  { value: '51-200', label: t.qualification.step1.options.large },
                  { value: '200+', label: t.qualification.step1.options.xlarge }
                ].map((size) => (
                  <button
                    key={size.value}
                    onClick={() => setFormData({ ...formData, companySize: size.value })}
                    className={`p-4 rounded-xl border transition-all ${
                      formData.companySize === size.value
                        ? 'bg-gradient-to-r from-[#FF763B]/20 to-[#FFBE56]/20 border-[#FF763B]'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <span className="text-white font-medium">{size.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Processes */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-2">{t.qualification.step2.title}</h2>
              <p className="text-white/60 mb-6">{t.qualification.step2.subtitle}</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  t.qualification.step2.processes.invoicing,
                  t.qualification.step2.processes.crm,
                  t.qualification.step2.processes.reporting,
                  t.qualification.step2.processes.hr,
                  t.qualification.step2.processes.offer,
                  t.qualification.step2.processes.feedback
                ].map((process) => (
                  <button
                    key={process}
                    onClick={() => handleProcessToggle(process)}
                    className={`p-2.5 rounded-xl border transition-all ${
                      formData.processes.includes(process)
                        ? 'bg-gradient-to-r from-[#FF763B]/20 to-[#FFBE56]/20 border-[#FF763B]'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <span className="text-white font-medium text-sm">{process}</span>
                  </button>
                ))}
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm">{t.qualification.step2.customLabel}</label>
                <input
                  type="text"
                  value={formData.customProcess}
                  onChange={(e) => setFormData({ ...formData, customProcess: e.target.value })}
                  placeholder={t.qualification.step2.customPlaceholder}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF763B] transition-colors"
                />
              </div>
            </div>
          )}

          {/* Step 3: Automation Level */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-2">{t.qualification.step3.title}</h2>
              <p className="text-white/60 mb-6">{t.qualification.step3.subtitle}</p>
              <div className="space-y-4">
                {[
                  { value: 'none', data: t.qualification.step3.options.none },
                  { value: 'partial', data: t.qualification.step3.options.partial },
                  { value: 'advanced', data: t.qualification.step3.options.advanced }
                ].map((level) => (
                  <button
                    key={level.value}
                    onClick={() => setFormData({ ...formData, automationLevel: level.value })}
                    className={`w-full p-4 rounded-xl border transition-all text-left ${
                      formData.automationLevel === level.value
                        ? 'bg-gradient-to-r from-[#FF763B]/20 to-[#FFBE56]/20 border-[#FF763B]'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="text-white font-medium mb-1">{level.data.label}</div>
                    <div className="text-white/60 text-sm">{level.data.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Budget */}
          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-2">{t.qualification.step4.title}</h2>
              <p className="text-white/60 mb-6">{t.qualification.step4.subtitle}</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'small', label: t.qualification.step4.ranges.small },
                  { value: 'medium', label: t.qualification.step4.ranges.medium },
                  { value: 'large', label: t.qualification.step4.ranges.large },
                  { value: 'enterprise', label: t.qualification.step4.ranges.enterprise },
                  { value: 'unsure', label: t.qualification.step4.ranges.unsure }
                ].map((budget) => (
                  <button
                    key={budget.value}
                    onClick={() => setFormData({ ...formData, budget: budget.value, customBudget: '' })}
                    className={`p-3 rounded-xl border transition-all ${
                      formData.budget === budget.value
                        ? 'bg-gradient-to-r from-[#FF763B]/20 to-[#FFBE56]/20 border-[#FF763B]'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="text-white font-medium text-sm">{budget.label}</div>
                  </button>
                ))}
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm">{t.qualification.step4.customLabel}</label>
                <input
                  type="text"
                  value={formData.customBudget}
                  onChange={(e) => setFormData({ ...formData, customBudget: e.target.value, budget: '' })}
                  placeholder={t.qualification.step4.customPlaceholder}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF763B] transition-colors"
                />
              </div>
            </div>
          )}

          {/* Step 5: Timeframe */}
          {step === 5 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-2">{t.qualification.step5.title}</h2>
              <p className="text-white/60 mb-4">{t.qualification.step5.subtitle}</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'immediate', label: t.qualification.step5.timeframes.immediate },
                  { value: '1-3months', label: t.qualification.step5.timeframes.short },
                  { value: '3-6months', label: t.qualification.step5.timeframes.medium },
                  { value: 'planning', label: t.qualification.step5.timeframes.long }
                ].map((time) => (
                  <button
                    key={time.value}
                    onClick={() => setFormData({ ...formData, timeframe: time.value, customTimeframe: '' })}
                    className={`p-3.5 rounded-xl border transition-all ${
                      formData.timeframe === time.value
                        ? 'bg-gradient-to-r from-[#FF763B]/20 to-[#FFBE56]/20 border-[#FF763B]'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="text-white font-medium">{time.label}</div>
                  </button>
                ))}
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm">{t.qualification.step5.customLabel}</label>
                <input
                  type="text"
                  value={formData.customTimeframe}
                  onChange={(e) => setFormData({ ...formData, customTimeframe: e.target.value, timeframe: '' })}
                  placeholder={t.qualification.step5.customPlaceholder}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF763B] transition-colors"
                />
              </div>
            </div>
          )}

          {/* Step 6: Contact Info */}
          {step === 6 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-2">{t.qualification.step6.title}</h2>
              <p className="text-white/60 mb-6">{t.qualification.step6.subtitle}</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-white/80 mb-2 text-sm">{t.qualification.step6.email} *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.qualification.step6.emailPlaceholder}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF763B] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2 text-sm">{t.qualification.step6.name}</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.qualification.step6.namePlaceholder}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF763B] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2 text-sm">{t.qualification.step6.company}</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder={t.qualification.step6.companyPlaceholder}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF763B] transition-colors"
                  />
                </div>
              </div>
            </div>
          )}

          </>
          )}
        </div>

        {/* Navigation Buttons - Fixed at bottom */}
        {!isSubmitted && (
          <div className="p-8 pt-4 border-t border-white/10">
            <div className="flex gap-4">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-colors"
                >
                  {t.qualification.back}
                </button>
              )}
              {step < 6 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                  className={`flex-1 px-6 py-3 rounded-xl text-white font-medium transition-all ${
                    canProceed()
                      ? 'bg-gradient-to-r from-[#FF763B] to-[#FFBE56] hover:scale-105'
                      : 'bg-white/10 cursor-not-allowed opacity-50'
                  }`}
                >
                  {t.qualification.next}
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className={`flex-1 px-6 py-3 rounded-xl text-white font-medium transition-all ${
                    canProceed()
                      ? 'bg-gradient-to-r from-[#FF763B] to-[#FFBE56] hover:scale-105'
                      : 'bg-white/10 cursor-not-allowed opacity-50'
                  }`}
                >
                  {t.qualification.submit}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default QualificationModal
