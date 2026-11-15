import { Link } from 'react-router-dom'
import { getApplicationPath } from '../../app/paths.ts'
import type { Category, JobApplication } from '../../types/application.ts'
import {
  EMPLOYMENT_TYPE_LABELS,
  WORK_FORMAT_LABELS,
  formatDate,
  formatSalary,
} from '../../utils/format.ts'
import StatusBadge from './StatusBadge.tsx'
import styles from './ApplicationCard.module.css'

interface ApplicationCardProps {
  application: JobApplication
  category: Category | undefined
}

function ApplicationCard({ application, category }: ApplicationCardProps) {
  const {
    id,
    company,
    position,
    status,
    salary,
    salaryMax,
    currency,
    appliedAt,
    employmentType,
    workFormat,
    isFavorite,
  } = application

  return (
    <article className={styles.card} data-status={status}>
      <header className={styles.header}>
        <div className={styles.titles}>
          <h3 className={styles.company}>
            <Link to={getApplicationPath(id)} className={styles.link}>
              {company}
            </Link>
          </h3>
          <p className={styles.position}>{position}</p>
        </div>
        <StatusBadge status={status} />
      </header>

      <p className={styles.category}>
        <span
          className={styles.categoryDot}
          style={{ backgroundColor: category?.color ?? 'var(--color-text-muted)' }}
          aria-hidden="true"
        />
        {category?.name ?? 'Без категории'}
        {isFavorite ? <span className={styles.favorite}>В избранном</span> : null}
      </p>

      <dl className={styles.details}>
        <div className={styles.detail}>
          <dt>Зарплатные ожидания</dt>
          <dd className={styles.salary}>{formatSalary(salary, salaryMax, currency)}</dd>
        </div>
        <div className={styles.detail}>
          <dt>Дата отклика</dt>
          <dd>
            <time dateTime={appliedAt}>{formatDate(appliedAt)}</time>
          </dd>
        </div>
        <div className={styles.detail}>
          <dt>Формат работы</dt>
          <dd>
            {WORK_FORMAT_LABELS[workFormat]}, {EMPLOYMENT_TYPE_LABELS[employmentType].toLowerCase()}
          </dd>
        </div>
      </dl>
    </article>
  )
}

export default ApplicationCard
