import type { SelectOption } from '../types/common.ts'
import {
  CURRENCY_LABELS,
  EMPLOYMENT_TYPE_LABELS,
  STATUS_LABELS,
  WORK_FORMAT_LABELS,
} from '../utils/format.ts'

function toOptions(labels: Readonly<Record<string, string>>): SelectOption[] {
  return Object.entries(labels).map(([value, label]) => ({ value, label }))
}

export const STATUS_OPTIONS: readonly SelectOption[] = toOptions(STATUS_LABELS)
export const EMPLOYMENT_TYPE_OPTIONS: readonly SelectOption[] = toOptions(EMPLOYMENT_TYPE_LABELS)
export const WORK_FORMAT_OPTIONS: readonly SelectOption[] = toOptions(WORK_FORMAT_LABELS)
export const CURRENCY_OPTIONS: readonly SelectOption[] = toOptions(CURRENCY_LABELS)

export const SORT_FIELD_OPTIONS: readonly SelectOption[] = [
  { value: 'appliedAt', label: 'Дата отклика' },
  { value: 'company', label: 'Компания' },
  { value: 'position', label: 'Должность' },
  { value: 'salary', label: 'Зарплатные ожидания' },
]

export const SORT_DIRECTION_OPTIONS: readonly SelectOption[] = [
  { value: 'desc', label: 'По убыванию' },
  { value: 'asc', label: 'По возрастанию' },
]
