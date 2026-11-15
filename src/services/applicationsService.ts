import { MOCK_DELAY_MS, MOCK_SIMULATE_ERROR } from '../app/config.ts'
import { applications } from '../mocks/applications.ts'
import { categories } from '../mocks/categories.ts'
import type { DashboardData } from '../types/dashboard.ts'

/**
 * Имитирует запрос к серверу: возвращает данные для главной страницы
 * с искусственной задержкой. Позже реализацию можно заменить на fetch,
 * сохранив сигнатуру функции.
 */
export function getDashboardData(): Promise<DashboardData> {
  return new Promise<DashboardData>((resolve, reject) => {
    setTimeout(() => {
      if (MOCK_SIMULATE_ERROR) {
        reject(new Error('Сервер не ответил на запрос.'))
        return
      }

      resolve({
        applications: structuredClone(applications),
        categories: structuredClone(categories),
      })
    }, MOCK_DELAY_MS)
  })
}
