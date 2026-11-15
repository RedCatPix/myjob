import type { JobApplication } from '../types/application.ts'
import type { ApplicationFormValues } from '../types/applicationForm.ts'

/** Значения пустой формы создания отклика. */
export const EMPTY_APPLICATION_FORM: ApplicationFormValues = {
  company: '',
  position: '',
  description: '',
  categoryId: '',
  salary: '',
  salaryMax: '',
  currency: 'RUB',
  employmentType: 'full-time',
  workFormat: 'remote',
  jobUrl: '',
  contactEmail: '',
  appliedAt: '',
  notes: '',
}

/** Преобразует отклик в значения полей формы редактирования. */
export function toFormValues(application: JobApplication): ApplicationFormValues {
  return {
    company: application.company,
    position: application.position,
    description: application.description,
    categoryId: application.categoryId,
    salary: String(application.salary),
    salaryMax: application.salaryMax === undefined ? '' : String(application.salaryMax),
    currency: application.currency,
    employmentType: application.employmentType,
    workFormat: application.workFormat,
    jobUrl: application.jobUrl,
    contactEmail: application.contactEmail,
    appliedAt: application.appliedAt,
    notes: application.notes,
  }
}
