import type { ApplicationStatus } from '../../types/application.ts'
import { STATUS_LABELS } from '../../utils/format.ts'
import styles from './StatusBadge.module.css'

interface StatusBadgeProps {
  status: ApplicationStatus
}

function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={styles.badge} data-status={status}>
      {STATUS_LABELS[status]}
    </span>
  )
}

export default StatusBadge
