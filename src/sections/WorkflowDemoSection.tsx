import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import SimpleWorkflowCanvas from '../workflow-showcase/SimpleWorkflowCanvas'
import { useLanguage } from '../contexts/LanguageContext'

const WorkflowDemoSection = () => {
  const { t } = useLanguage()
  const sectionRef = useRef(null)
  const floatingRef = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef(null)
  const canvasRef = useRef(null)
  
  useEffect(() => {
    // Floating elements breathing animation
    if (floatingRef.current) {
      gsap.to(floatingRef.current.children, {
        scale: "random(0.9, 1.1)",
        opacity: "random(0.1, 0.2)",
        duration: "random(5, 8)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 3,
          from: "random"
        }
      })
    }
    
    // Node dots pulsing
    if (dotsRef.current) {
      gsap.to(dotsRef.current.children, {
        opacity: "random(0.2, 0.5)",
        scale: "random(0.8, 1.3)",
        duration: "random(2, 4)",
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 1.5,
          from: "random"
        }
      })
    }
    
    // Simple fade in animations
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
      ref={sectionRef}
      id="workflow"
      className="relative h-screen snap-start snap-always bg-gradient-to-b from-[#1A1A1A] to-[#171717] overflow-hidden flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        {/* Continuing topographic waves from ImageShowcase section */}
        <div className="absolute inset-0 opacity-[0.12]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-radial-gradient(
                circle at 50% -20%,
                transparent,
                transparent 40px,
                rgba(255, 118, 59, 0.4) 40px,
                rgba(255, 118, 59, 0.4) 42px,
                transparent 42px,
                transparent 80px,
                rgba(255, 190, 86, 0.3) 80px,
                rgba(255, 190, 86, 0.3) 82px,
                transparent 82px,
                transparent 120px,
                rgba(255, 215, 0, 0.2) 120px,
                rgba(255, 215, 0, 0.2) 122px
              )
            `
          }}></div>
        </div>
        
        {/* Additional tech dots overlay */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, #FF763B 1px, transparent 1px),
            radial-gradient(circle at 2px 2px, #FFBE56 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}></div>
        
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(255,190,86,0.03),transparent_50%)]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full px-3 sm:px-6 md:px-8 h-full flex flex-col justify-center py-4">
        <div ref={canvasRef} className="flex-1 min-h-0 flex flex-col justify-center">
          <div ref={titleRef} className="text-center mb-3 sm:mb-6 md:mb-8">
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 sm:mb-2">
              <span className="bg-gradient-to-r from-[#FF763B] to-[#FFBE56] bg-clip-text text-transparent">
                {t.workflow.title}
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto">
              {t.workflow.subtitle}
            </p>
          </div>
          
          <div className="flex items-center">
            <SimpleWorkflowCanvas />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkflowDemoSection