const WorkflowBackground = () => {
  return (
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
  )
}

export default WorkflowBackground