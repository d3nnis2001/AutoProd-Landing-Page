import type { ReactElement } from 'react'

// Hero Section Types
export interface HeroSectionProps {
  onGetStartedClick?: () => void
  onContactClick?: () => void
}

export interface MenuItem {
  name: string
  href: string
}

// Service Types
export interface Service {
  id: string
  title: string
  description: string
  icon: ReactElement
  features?: string[]
  metric?: ServiceMetric
}

export interface ServiceMetric {
  value: string
  label: string
}

export interface ServiceStat {
  [key: string]: string | undefined
}

export interface ServiceStatsLabels {
  [key: string]: string | undefined
}

export interface DetailedService {
  id: string
  title: string
  description: string
  icon: ReactElement
  features: string[]
  examples: string[]
}

export interface InteractiveService extends Service {
  size: 'small' | 'medium' | 'large'
  className?: string
}

// Contact Types
export interface ContactMethod {
  icon: ReactElement
  label: string
  value: string
  action: string
  gradient: string
}

export interface Message {
  id: string
  text: string
  sender: 'user' | 'system'
  timestamp: Date
}

// Team Types
export interface TeamMember {
  initial: string
  name: string
  role: string
  roleColor: string
  skills: string[]
  gradientFrom: string
  gradientTo: string
}

// Workflow Types
export interface WorkflowNode {
  id: string
  label: string
  icon: ReactElement
  x: number
  y: number
  color: string
}

export interface WorkflowConnection {
  from: string
  to: string
  active: boolean
}

// Common Props
export interface SectionProps {
  id?: string
  className?: string
}

export interface HomepageProps {
  // Empty interface for now, can be extended later
}