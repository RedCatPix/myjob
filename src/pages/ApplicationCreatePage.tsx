import { ArrowLeft } from 'lucide-react'
import { ROUTES } from '../app/paths.ts'
import ApplicationForm from '../components/applications/ApplicationForm.tsx'
import PageHeader from '../components/layout/PageHeader.tsx'
import ButtonLink from '../components/ui/ButtonLink.tsx'
import { EMPTY_APPLICATION_FORM } from '../utils/applicationForm.ts'
import { PREVIEW_CATEGORIES } from './previewData.ts'

function ApplicationCreatePage() {
  return (
    <div>
      <PageHeader
        title="Новый отклик"
        description="Заполните данные о вакансии и вашем отклике: компания, должность, категория, зарплатные ожидания, условия работы и заметки."
      >
        <ButtonLink
          to={ROUTES.applications}
          variant="secondary"
          icon={<ArrowLeft size={18} aria-hidden="true" />}
        >
          К списку откликов
        </ButtonLink>
      </PageHeader>

      <ApplicationForm
        values={EMPTY_APPLICATION_FORM}
        categories={PREVIEW_CATEGORIES}
        cancelTo={ROUTES.applications}
      />
    </div>
  )
}

export default ApplicationCreatePage
