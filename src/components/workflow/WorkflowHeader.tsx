import { forwardRef } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const WorkflowHeader = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useLanguage()

  return (
    <div ref={ref} className="text-center mb-3 sm:mb-6 md:mb-8">
      <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 sm:mb-2">
        <span className="bg-gradient-to-r from-[#FF763B] to-[#FFBE56] bg-clip-text text-transparent">
          {t.workflow.title}
        </span>
      </h2>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto">
        {t.workflow.subtitle}
      </p>
    </div>
  )
})

WorkflowHeader.displayName = 'WorkflowHeader'

export default WorkflowHeader