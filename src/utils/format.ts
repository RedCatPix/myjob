import type {
  ApplicationStatus,
  Currency,
  EmploymentType,
  WorkFormat,
} from '../types/application.ts'

export const STATUS_LABELS: Record<ApplicationStatus, string> = {
  applied: 'Отклик отправлен',
  viewed: 'Просмотрен',
  interview: 'Собеседование',
  offer: 'Предложение',
  rejected: 'Отказ',
  withdrawn: 'Отозван',
}

export const EMPLOYMENT_TYPE_LABELS: Record<EmploymentType, string> = {
  'full-time': 'Полная занятость',
  'part-time': 'Частичная занятость',
  internship: 'Стажировка',
  contract: 'Контракт',
}

export const WORK_FORMAT_LABELS: Record<WorkFormat, string> = {
  remote: 'Удалённо',
  hybrid: 'Гибрид',
  office: 'Офис',
}

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  RUB: '₽',
  USD: '$',
  EUR: '€',
}

const numberFormatter = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 })

function pad(value: number): string {
  return String(value).padStart(2, '0')
}

/** Форматирует дату в вид ДД.ММ.ГГ. Принимает дату или дату и время в формате ISO. */
export function formatDate(iso: string): string {
  const dateOnly = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso)

  if (dateOnly) {
    const [, year = '', month = '', day = ''] = dateOnly
    return `${day}.${month}.${year.slice(2)}`
  }

  const date = new Date(iso)

  if (Number.isNaN(date.getTime())) {
    return 'Дата не указана'
  }

  return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${String(date.getFullYear()).slice(2)}`
}

/** Форматирует зарплатные ожидания: «180 000 – 240 000 ₽» или «60 000 ₽». */
export function formatSalary(salary: number, salaryMax: number | undefined, currency: Currency): string {
  const symbol = CURRENCY_SYMBOLS[currency]
  const from = numberFormatter.format(salary)

  if (salaryMax === undefined || salaryMax <= salary) {
    return `${from} ${symbol}`
  }

  return `${from} – ${numberFormatter.format(salaryMax)} ${symbol}`
}
