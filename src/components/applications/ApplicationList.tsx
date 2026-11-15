import type { Category, JobApplication } from '../../types/application.ts'
import ApplicationCard from './ApplicationCard.tsx'
import styles from './ApplicationList.module.css'

interface ApplicationListProps {
  applications: readonly JobApplication[]
  categories: readonly Category[]
}

function ApplicationList({ applications, categories }: ApplicationListProps) {
  if (applications.length === 0) {
    return <p className={styles.empty}>Откликов пока нет.</p>
  }

  return (
    <ul className={styles.list}>
      {applications.map((application) => (
        <li key={application.id} className={styles.item}>
          <ApplicationCard
            application={application}
            category={categories.find((category) => category.id === application.categoryId)}
          />
        </li>
      ))}
    </ul>
  )
}

export default ApplicationList
