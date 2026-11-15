import type { ApplicationStatus, JobApplication } from '../types/application.ts'
import type { DashboardSummary } from '../types/dashboard.ts'

const ACTIVE_STATUSES: readonly ApplicationStatus[] = ['applied', 'viewed', 'interview']

/** Считает сводные показатели по списку откликов. */
export function getSummary(applications: readonly JobApplication[]): DashboardSummary {
  return {
    total: applications.length,
    active: applications.filter((item) => ACTIVE_STATUSES.includes(item.status)).length,
    interviews: applications.filter((item) => item.status === 'interview').length,
    offers: applications.filter((item) => item.status === 'offer').length,
    rejected: applications.filter((item) => item.status === 'rejected').length,
  }
}

/** Возвращает последние добавленные отклики: сначала самые новые. */
export function getRecentApplications(
  applications: readonly JobApplication[],
  limit: number,
): JobApplication[] {
  return [...applications]
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
    .slice(0, limit)
}
