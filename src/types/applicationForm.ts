import type { Currency, EmploymentType, WorkFormat } from './application.ts'

/** Значения полей формы отклика. Числа и даты хранятся строками, как в полях ввода. */
export interface ApplicationFormValues {
  company: string
  position: string
  description: string
  categoryId: string
  salary: string
  salaryMax: string
  currency: Currency
  employmentType: EmploymentType
  workFormat: WorkFormat
  jobUrl: string
  contactEmail: string
  appliedAt: string
  notes: string
}
