import { Briefcase, CalendarDays, ChartColumn, LayoutDashboard, Settings } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ROUTES } from './paths.ts'

export interface NavItem {
  to: string
  label: string
  icon: LucideIcon
  /** Точное совпадение адреса: нужно для главной страницы, чтобы пункт не был активным везде. */
  end?: boolean
}

export const NAV_ITEMS: readonly NavItem[] = [
  { to: ROUTES.dashboard, label: 'Главная', icon: LayoutDashboard, end: true },
  { to: ROUTES.applications, label: 'Отклики', icon: Briefcase },
  { to: ROUTES.calendar, label: 'Календарь', icon: CalendarDays },
  { to: ROUTES.analytics, label: 'Аналитика', icon: ChartColumn },
  { to: ROUTES.settings, label: 'Настройки', icon: Settings },
]
