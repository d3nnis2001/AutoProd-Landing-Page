import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import WorkflowBackground from '../components/workflow/WorkflowBackground'
import WorkflowHeader from '../components/workflow/WorkflowHeader'
import WorkflowCanvas from '../components/workflow/WorkflowCanvas'

const WorkflowDemoSection = () => {
  const titleRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLDivElement>(null)
  const [showExpertise, setShowExpertise] = useState(false)

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
    }

    if (canvasRef.current) {
      gsap.fromTo(canvasRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.2, delay: 0.3, ease: "power3.out" }
      )
    }
  }, [])
  return (
    <section
      id="workflow"
      className="relative h-screen snap-start snap-always bg-gradient-to-b from-[#1A1A1A] to-[#171717] overflow-hidden flex items-center"
    >
      <WorkflowBackground />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-3 sm:px-6 md:px-8 h-full flex flex-col justify-center py-4">
        <div ref={canvasRef} className="flex-1 min-h-0 flex flex-col justify-center">
          {!showExpertise && <WorkflowHeader ref={titleRef} />}
          <WorkflowCanvas showExpertise={showExpertise} setShowExpertise={setShowExpertise} />
        </div>
      </div>
    </section>
  )
}

export default WorkflowDemoSection