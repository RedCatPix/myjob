export type ApplicationStatus =
  | 'applied'
  | 'viewed'
  | 'interview'
  | 'offer'
  | 'rejected'
  | 'withdrawn'

export type EmploymentType = 'full-time' | 'part-time' | 'internship' | 'contract'

export type WorkFormat = 'remote' | 'hybrid' | 'office'

export type Currency = 'RUB' | 'USD' | 'EUR'

export interface JobApplication {
  id: string

  company: string
  position: string
  description: string

  categoryId: string
  status: ApplicationStatus

  salary: number
  salaryMax?: number
  currency: Currency

  appliedAt: string
  createdAt: string
  updatedAt: string

  employmentType: EmploymentType
  workFormat: WorkFormat

  jobUrl: string
  contactEmail: string

  notes: string

  isFavorite: boolean
  isArchived: boolean
}

export interface Category {
  id: string
  name: string
  color: string
}
