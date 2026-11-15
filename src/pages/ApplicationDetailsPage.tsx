import { ArrowLeft, Pencil } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { ROUTES, getApplicationEditPath } from '../app/paths.ts'
import ApplicationFacts from '../components/applications/ApplicationFacts.tsx'
import InterviewList from '../components/applications/InterviewList.tsx'
import StatusBadge from '../components/applications/StatusBadge.tsx'
import StatusTimeline from '../components/applications/StatusTimeline.tsx'
import ButtonLink from '../components/ui/ButtonLink.tsx'
import Section from '../components/ui/Section.tsx'
import {
  PREVIEW_APPLICATION,
  PREVIEW_CATEGORIES,
  PREVIEW_HISTORY,
  PREVIEW_INTERVIEWS,
} from './previewData.ts'
import styles from './ApplicationDetailsPage.module.css'

function ApplicationDetailsPage() {
  const { id = '' } = useParams<{ id: string }>()
  const application = PREVIEW_APPLICATION
  const category = PREVIEW_CATEGORIES.find((item) => item.id === application.categoryId)

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <div className={styles.titles}>
            <h1 className={styles.title}>{application.company}</h1>
            <p className={styles.position}>{application.position}</p>
          </div>
          <StatusBadge status={application.status} />
        </div>

        <p className={styles.meta}>Идентификатор отклика: {id}</p>

        <div className={styles.actions}>
          <ButtonLink
            to={ROUTES.applications}
            variant="secondary"
            icon={<ArrowLeft size={18} aria-hidden="true" />}
          >
            К списку откликов
          </ButtonLink>
          <ButtonLink to={getApplicationEditPath(id)} icon={<Pencil size={18} aria-hidden="true" />}>
            Редактировать
          </ButtonLink>
        </div>
      </header>

      <div className={styles.layout}>
        <aside className={styles.side} aria-label="Основные данные отклика">
          <ApplicationFacts application={application} category={category} />
        </aside>

        <div className={styles.content}>
          <Section id="description-title" title="Описание вакансии">
            <p className={styles.text}>{application.description}</p>
          </Section>

          <Section id="notes-title" title="Заметки">
            <p className={styles.text}>{application.notes}</p>
          </Section>

          <Section
            id="history-title"
            title="История изменений статуса"
            description="Все смены статуса отклика с датами."
          >
            <StatusTimeline history={PREVIEW_HISTORY} />
          </Section>

          <Section
            id="interviews-title"
            title="Связанные собеседования"
            description="Собеседования, назначенные по этому отклику."
          >
            <InterviewList interviews={PREVIEW_INTERVIEWS} />
          </Section>
        </div>
      </div>
    </div>
  )
}

export default ApplicationDetailsPage
