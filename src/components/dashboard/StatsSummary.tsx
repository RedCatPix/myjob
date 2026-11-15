import type { DashboardSummary } from '../../types/dashboard.ts'
import styles from './StatsSummary.module.css'

interface StatsSummaryProps {
  summary: DashboardSummary
}

interface StatItem {
  key: keyof DashboardSummary
  label: string
}

const STAT_ITEMS: readonly StatItem[] = [
  { key: 'total', label: 'Всего откликов' },
  { key: 'active', label: 'Активные процессы' },
  { key: 'interviews', label: 'Собеседования' },
  { key: 'offers', label: 'Предложения' },
  { key: 'rejected', label: 'Отказы' },
]

function StatsSummary({ summary }: StatsSummaryProps) {
  return (
    <dl className={styles.stats}>
      {STAT_ITEMS.map((item) => (
        <div key={item.key} className={styles.item} data-kind={item.key}>
          <dd className={styles.value}>{summary[item.key]}</dd>
          <dt className={styles.label}>{item.label}</dt>
        </div>
      ))}
    </dl>
  )
}

export default StatsSummary
