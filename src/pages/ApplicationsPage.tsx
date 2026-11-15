import { Plus } from 'lucide-react'
import { ROUTES } from '../app/paths.ts'
import ApplicationRows from '../components/applications/ApplicationRows.tsx'
import ApplicationsFilters from '../components/applications/ApplicationsFilters.tsx'
import PageHeader from '../components/layout/PageHeader.tsx'
import ButtonLink from '../components/ui/ButtonLink.tsx'
import { PREVIEW_CATEGORIES, PREVIEW_LIST } from './previewData.ts'
import styles from './ApplicationsPage.module.css'

function ApplicationsPage() {
  return (
    <div>
      <PageHeader
        title="Все отклики"
        description="Все ваши отклики на вакансии в одном списке: ищите по компании и должности, фильтруйте по статусу и категории и сортируйте по дате, названию или зарплате."
      >
        <ButtonLink to={ROUTES.applicationNew} icon={<Plus size={18} aria-hidden="true" />}>
          Добавить отклик
        </ButtonLink>
      </PageHeader>

      <ApplicationsFilters categories={PREVIEW_CATEGORIES} />

      <p className={styles.count} role="status">
        Откликов в списке: {PREVIEW_LIST.length}
      </p>

      <ApplicationRows applications={PREVIEW_LIST} categories={PREVIEW_CATEGORIES} />
    </div>
  )
}

export default ApplicationsPage
