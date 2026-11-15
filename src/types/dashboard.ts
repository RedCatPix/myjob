import type { Category, JobApplication } from './application.ts'

export interface DashboardData {
  applications: JobApplication[]
  categories: Category[]
}

export interface DashboardSummary {
  total: number
  active: number
  interviews: number
  offers: number
  rejected: number
}
