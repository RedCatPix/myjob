import { ExternalLink } from 'lucide-react'
import type { Category, JobApplication } from '../../types/application.ts'
import {
  EMPLOYMENT_TYPE_LABELS,
  WORK_FORMAT_LABELS,
  formatDate,
  formatSalary,
} from '../../utils/format.ts'
import styles from './ApplicationFacts.module.css'

interface ApplicationFactsProps {
  application: JobApplication
  category: Category | undefined
}

/** Основные характеристики отклика в виде списка «название – значение». */
function ApplicationFacts({ application, category }: ApplicationFactsProps) {
  const {
    salary,
    salaryMax,
    currency,
    workFormat,
    employmentType,
    appliedAt,
    updatedAt,
    contactEmail,
    jobUrl,
  } = application

  return (
    <dl className={styles.facts}>
      <div className={styles.fact}>
        <dt>Зарплатные ожидания</dt>
        <dd className={styles.salary}>{formatSalary(salary, salaryMax, currency)}</dd>
      </div>
      <div className={styles.fact}>
        <dt>Категория</dt>
        <dd className={styles.category}>
          <span
            className={styles.categoryDot}
            style={{ backgroundColor: category?.color ?? 'var(--color-text-muted)' }}
            aria-hidden="true"
          />
          {category?.name ?? 'Без категории'}
        </dd>
      </div>
      <div className={styles.fact}>
        <dt>Формат работы</dt>
        <dd>{WORK_FORMAT_LABELS[workFormat]}</dd>
      </div>
      <div className={styles.fact}>
        <dt>Тип занятости</dt>
        <dd>{EMPLOYMENT_TYPE_LABELS[employmentType]}</dd>
      </div>
      <div className={styles.fact}>
        <dt>Дата отклика</dt>
        <dd>
          <time dateTime={appliedAt}>{formatDate(appliedAt)}</time>
        </dd>
      </div>
      <div className={styles.fact}>
        <dt>Обновлено</dt>
        <dd>
          <time dateTime={updatedAt}>{formatDate(updatedAt)}</time>
        </dd>
      </div>
      <div className={styles.fact}>
        <dt>Контактный e-mail</dt>
        <dd>
          <a className={styles.link} href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
        </dd>
      </div>
      <div className={styles.fact}>
        <dt>Вакансия</dt>
        <dd>
          <a className={styles.link} href={jobUrl} target="_blank" rel="noopener noreferrer">
            Открыть вакансию
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </dd>
      </div>
    </dl>
  )
}

export default ApplicationFacts
