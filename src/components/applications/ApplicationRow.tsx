import { Archive, Pencil, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getApplicationEditPath, getApplicationPath } from '../../app/paths.ts'
import type { ApplicationListItem, Category } from '../../types/application.ts'
import { formatDate, formatSalary } from '../../utils/format.ts'
import IconButton from '../ui/IconButton.tsx'
import StatusBadge from './StatusBadge.tsx'
import styles from './ApplicationRow.module.css'

interface ApplicationRowProps {
  application: ApplicationListItem
  category: Category | undefined
}

function ApplicationRow({ application, category }: ApplicationRowProps) {
  const { id, company, position, status, salary, salaryMax, currency, appliedAt, isFavorite } =
    application

  return (
    <li className={styles.row}>
      <div className={styles.main}>
        <h3 className={styles.company}>
          <Link to={getApplicationPath(id)} className={styles.link}>
            {company}
          </Link>
        </h3>
        <p className={styles.position}>{position}</p>
        <p className={styles.category}>
          <span
            className={styles.categoryDot}
            style={{ backgroundColor: category?.color ?? 'var(--color-text-muted)' }}
            aria-hidden="true"
          />
          {category?.name ?? 'Без категории'}
        </p>
      </div>

      <div className={styles.meta}>
        <span className={styles.status}>
          <StatusBadge status={status} />
        </span>
        <span className={styles.salary}>
          <span className={styles.metaLabel}>Ожидания: </span>
          {formatSalary(salary, salaryMax, currency)}
        </span>
        <span className={styles.date}>
          <span className={styles.metaLabel}>Отклик: </span>
          <time dateTime={appliedAt}>{formatDate(appliedAt)}</time>
        </span>
      </div>

      <div className={styles.actions}>
        <IconButton
          label={isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
          pressed={isFavorite}
          icon={<Star size={18} fill={isFavorite ? 'currentColor' : 'none'} aria-hidden="true" />}
        />
        <IconButton
          label="Редактировать отклик"
          to={getApplicationEditPath(id)}
          icon={<Pencil size={18} aria-hidden="true" />}
        />
        <IconButton label="Архивировать отклик" icon={<Archive size={18} aria-hidden="true" />} />
      </div>
    </li>
  )
}

export default ApplicationRow
