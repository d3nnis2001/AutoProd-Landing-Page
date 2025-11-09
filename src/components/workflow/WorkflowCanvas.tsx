import { forwardRef } from 'react'
import SimpleWorkflowCanvas from '../demoWorkflow/SimpleWorkflowCanvas'

interface WorkflowCanvasProps {
  showExpertise: boolean
  setShowExpertise: (show: boolean) => void
}

const WorkflowCanvas = forwardRef<HTMLDivElement, WorkflowCanvasProps>(({ showExpertise, setShowExpertise }, ref) => {
  return (
    <div ref={ref} className="flex items-center">
      <SimpleWorkflowCanvas showExpertise={showExpertise} setShowExpertise={setShowExpertise} />
    </div>
  )
})

WorkflowCanvas.displayName = 'WorkflowCanvas'

export default WorkflowCanvas