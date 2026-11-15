import { ArrowLeft } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { getApplicationPath } from '../app/paths.ts'
import ApplicationForm from '../components/applications/ApplicationForm.tsx'
import PageHeader from '../components/layout/PageHeader.tsx'
import ButtonLink from '../components/ui/ButtonLink.tsx'
import { toFormValues } from '../utils/applicationForm.ts'
import { PREVIEW_APPLICATION, PREVIEW_CATEGORIES } from './previewData.ts'

function ApplicationEditPage() {
  const { id = '' } = useParams<{ id: string }>()

  return (
    <div>
      <PageHeader
        title="Редактирование отклика"
        description="Измените любые данные отклика. Поля уже заполнены текущими значениями."
        meta={`Идентификатор отклика: ${id}`}
      >
        <ButtonLink
          to={getApplicationPath(id)}
          variant="secondary"
          icon={<ArrowLeft size={18} aria-hidden="true" />}
        >
          К отклику
        </ButtonLink>
      </PageHeader>

      <ApplicationForm
        key={id}
        values={toFormValues(PREVIEW_APPLICATION)}
        categories={PREVIEW_CATEGORIES}
        cancelTo={getApplicationPath(id)}
      />
    </div>
  )
}

export default ApplicationEditPage
