import { forwardRef } from 'react'
import SimpleWorkflowCanvas from '../demoWorkflow/SimpleWorkflowCanvas'

const WorkflowCanvas = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="flex items-center">
      <SimpleWorkflowCanvas />
    </div>
  )
})

WorkflowCanvas.displayName = 'WorkflowCanvas'

export default WorkflowCanvas