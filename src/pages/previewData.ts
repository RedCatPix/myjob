/*
 * Статичные демонстрационные данные для визуального макета страниц.
 * Они не загружаются из сервиса и не зависят от адреса страницы. Когда страницы получат
 * реальные данные (через сервисный слой), этот файл нужно удалить.
 */
import type { ApplicationListItem, Category, JobApplication } from '../types/application.ts'
import type { StatusHistory } from '../types/history.ts'
import type { Interview } from '../types/interview.ts'

export const PREVIEW_CATEGORIES: readonly Category[] = [
  { id: 'cat-frontend', name: 'Frontend-разработка', color: '#4f6df5' },
  { id: 'cat-backend', name: 'Backend-разработка', color: '#0f9d8a' },
  { id: 'cat-fullstack', name: 'Fullstack-разработка', color: '#8b5cf6' },
  { id: 'cat-design', name: 'UI/UX-дизайн', color: '#e0589b' },
  { id: 'cat-qa', name: 'QA-инженерия', color: '#e08a1e' },
  { id: 'cat-data', name: 'Аналитика данных', color: '#2f9fd1' },
]

export const PREVIEW_LIST: readonly ApplicationListItem[] = [
  {
    id: 'app-001',
    company: 'Северный Код',
    position: 'Frontend-разработчик (React)',
    categoryId: 'cat-frontend',
    status: 'interview',
    salary: 180000,
    salaryMax: 240000,
    currency: 'RUB',
    appliedAt: '2026-11-10',
    isFavorite: true,
  },
  {
    id: 'app-002',
    company: 'Облачные решения',
    position: 'Backend-разработчик (Node.js)',
    categoryId: 'cat-backend',
    status: 'applied',
    salary: 200000,
    salaryMax: 260000,
    currency: 'RUB',
    appliedAt: '2026-11-12',
    isFavorite: false,
  },
  {
    id: 'app-004',
    company: 'ДатаЛаб',
    position: 'Аналитик данных',
    categoryId: 'cat-data',
    status: 'offer',
    salary: 170000,
    salaryMax: 210000,
    currency: 'RUB',
    appliedAt: '2026-10-20',
    isFavorite: true,
  },
  {
    id: 'app-005',
    company: 'Креатив Студио',
    position: 'UI/UX-дизайнер',
    categoryId: 'cat-design',
    status: 'rejected',
    salary: 140000,
    salaryMax: 180000,
    currency: 'RUB',
    appliedAt: '2026-10-14',
    isFavorite: false,
  },
  {
    id: 'app-007',
    company: 'Глобал Софт',
    position: 'Frontend-разработчик (TypeScript)',
    categoryId: 'cat-frontend',
    status: 'viewed',
    salary: 3500,
    salaryMax: 4500,
    currency: 'USD',
    appliedAt: '2026-11-08',
    isFavorite: false,
  },
  {
    id: 'app-010',
    company: 'Логистика 24',
    position: 'BI-аналитик',
    categoryId: 'cat-data',
    status: 'withdrawn',
    salary: 160000,
    currency: 'RUB',
    appliedAt: '2026-10-09',
    isFavorite: false,
  },
]

export const PREVIEW_APPLICATION: JobApplication = {
  id: 'app-001',
  company: 'Северный Код',
  position: 'Frontend-разработчик (React)',
  description:
    'Разработка интерфейсов внутренней CRM на React и TypeScript.\nРабота в команде из шести человек, код-ревью, настройка сборки.',
  categoryId: 'cat-frontend',
  status: 'interview',
  salary: 180000,
  salaryMax: 240000,
  currency: 'RUB',
  appliedAt: '2026-11-10',
  createdAt: '2026-11-10T09:15:00.000Z',
  updatedAt: '2026-11-12T14:30:00.000Z',
  employmentType: 'full-time',
  workFormat: 'remote',
  jobUrl: 'https://jobs.example.com/severny-kod/frontend-react',
  contactEmail: 'hr@severny-kod.example',
  notes: 'Назначено техническое интервью на следующей неделе. Повторить хуки и маршрутизацию.',
  isFavorite: true,
  isArchived: false,
}

export const PREVIEW_HISTORY: readonly StatusHistory[] = [
  {
    id: 'hist-003',
    applicationId: 'app-001',
    previousStatus: 'viewed',
    newStatus: 'interview',
    changedAt: '2026-11-12T14:30:00.000Z',
    comment: 'Пригласили на техническое интервью.',
  },
  {
    id: 'hist-002',
    applicationId: 'app-001',
    previousStatus: 'applied',
    newStatus: 'viewed',
    changedAt: '2026-11-11T10:05:00.000Z',
    comment: 'Работодатель просмотрел отклик.',
  },
  {
    id: 'hist-001',
    applicationId: 'app-001',
    previousStatus: null,
    newStatus: 'applied',
    changedAt: '2026-11-10T09:15:00.000Z',
    comment: 'Отклик отправлен через сайт компании.',
  },
]

export const PREVIEW_INTERVIEWS: readonly Interview[] = [
  {
    id: 'int-002',
    applicationId: 'app-001',
    title: 'Техническое интервью',
    type: 'Техническое',
    date: '2026-11-19',
    time: '15:00',
    format: 'online',
    meetingUrl: 'https://meet.example.com/severny-kod-tech',
    contactPerson: 'Анна Смирнова',
    notes: 'Подготовить рассказ о проектах на React и обсудить зарплатные ожидания.',
  },
  {
    id: 'int-001',
    applicationId: 'app-001',
    title: 'Знакомство с HR',
    type: 'Первичное',
    date: '2026-11-13',
    time: '11:30',
    format: 'phone',
    contactPerson: 'Мария Орлова',
    notes: 'Короткий созвон: опыт, ожидания, формат работы.',
  },
]

export interface StorageSummaryItem {
  id: string
  label: string
  count: number
}

export const PREVIEW_STORAGE: readonly StorageSummaryItem[] = [
  { id: 'applications', label: 'Отклики', count: 12 },
  { id: 'categories', label: 'Категории вакансий', count: 6 },
  { id: 'interviews', label: 'Собеседования', count: 0 },
  { id: 'followUps', label: 'Напоминания', count: 0 },
  { id: 'history', label: 'История статусов', count: 0 },
  { id: 'activity', label: 'Журнал действий', count: 0 },
]
