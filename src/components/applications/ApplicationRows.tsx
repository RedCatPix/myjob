import type { ApplicationListItem, Category } from '../../types/application.ts'
import ApplicationRow from './ApplicationRow.tsx'
import styles from './ApplicationRows.module.css'

interface ApplicationRowsProps {
  applications: readonly ApplicationListItem[]
  categories: readonly Category[]
}

/** Список откликов в виде строк: на широких экранах с заголовками колонок. */
function ApplicationRows({ applications, categories }: ApplicationRowsProps) {
  return (
    <div className={styles.container}>
      <div className={styles.head} aria-hidden="true">
        <span>Вакансия</span>
        <span>Статус</span>
        <span>Зарплатные ожидания</span>
        <span>Дата отклика</span>
        <span />
      </div>
      <ul className={styles.list}>
        {applications.map((application) => (
          <ApplicationRow
            key={application.id}
            application={application}
            category={categories.find((category) => category.id === application.categoryId)}
          />
        ))}
      </ul>
    </div>
  )
}

export default ApplicationRows
