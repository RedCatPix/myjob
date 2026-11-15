import type { ApplicationStatus } from './application.ts'

export interface StatusHistory {
  id: string
  applicationId: string

  previousStatus: ApplicationStatus | null
  newStatus: ApplicationStatus

  changedAt: string
  comment?: string
}
