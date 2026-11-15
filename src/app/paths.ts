/** Шаблоны адресов приложения (используются в Route). */
export const ROUTES = {
  dashboard: '/',
  applications: '/applications',
  applicationNew: '/applications/new',
  applicationDetails: '/applications/:id',
  applicationEdit: '/applications/:id/edit',
  analytics: '/analytics',
  calendar: '/calendar',
  settings: '/settings',
} as const

/** Адрес страницы подробной информации об отклике. */
export function getApplicationPath(id: string): string {
  return `/applications/${encodeURIComponent(id)}`
}

/** Адрес страницы редактирования отклика. */
export function getApplicationEditPath(id: string): string {
  return `/applications/${encodeURIComponent(id)}/edit`
}
