import { ArrowRight } from 'lucide-react'
import type { StatusHistory } from '../../types/history.ts'
import { formatDate } from '../../utils/format.ts'
import StatusBadge from './StatusBadge.tsx'
import styles from './StatusTimeline.module.css'

interface StatusTimelineProps {
  history: readonly StatusHistory[]
}

/** История смены статусов: самые свежие записи сверху. */
function StatusTimeline({ history }: StatusTimelineProps) {
  return (
    <ol className={styles.list}>
      {history.map((item) => (
        <li key={item.id} className={styles.item} data-status={item.newStatus}>
          <div className={styles.change}>
            {item.previousStatus === null ? (
              <>
                <span className={styles.text}>Отклик создан со статусом</span>
                <StatusBadge status={item.newStatus} />
              </>
            ) : (
              <>
                <StatusBadge status={item.previousStatus} />
                <ArrowRight size={16} className={styles.arrow} aria-label="сменился на" />
                <StatusBadge status={item.newStatus} />
              </>
            )}
          </div>
          <time className={styles.date} dateTime={item.changedAt}>
            {formatDate(item.changedAt)}
          </time>
          {item.comment ? <p className={styles.comment}>{item.comment}</p> : null}
        </li>
      ))}
    </ol>
  )
}

export default StatusTimeline
