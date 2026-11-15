import { ArrowRight, Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../app/paths.ts'
import ApplicationList from '../components/applications/ApplicationList.tsx'
import StatsSummary from '../components/dashboard/StatsSummary.tsx'
import ButtonLink from '../components/ui/ButtonLink.tsx'
import ErrorMessage from '../components/ui/ErrorMessage.tsx'
import LoadingIndicator from '../components/ui/LoadingIndicator.tsx'
import { getDashboardData } from '../services/applicationsService.ts'
import type { DashboardData } from '../types/dashboard.ts'
import { getRecentApplications, getSummary } from '../utils/applications.ts'
import styles from './DashboardPage.module.css'

const RECENT_LIMIT = 6

type LoadState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; data: DashboardData }

function DashboardPage() {
  const [state, setState] = useState<LoadState>({ status: 'loading' })
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    let isCancelled = false

    getDashboardData()
      .then((data) => {
        if (!isCancelled) {
          setState({ status: 'success', data })
        }
      })
      .catch((error: unknown) => {
        if (!isCancelled) {
          setState({
            status: 'error',
            message: error instanceof Error ? error.message : 'Произошла неизвестная ошибка.',
          })
        }
      })

    return () => {
      isCancelled = true
    }
  }, [reloadKey])

  function handleRetry() {
    setState({ status: 'loading' })
    setReloadKey((key) => key + 1)
  }

  return (
    <div>
      <section className={styles.hero} aria-labelledby="page-title">
        <p className={styles.eyebrow}>Трекер поиска работы</p>
        <h1 id="page-title" className={styles.title}>
          Весь поиск работы в одном месте
        </h1>
        <p className={styles.description}>
          MyJob помогает вести отклики на вакансии: видеть, куда и когда вы откликнулись, на каком
          этапе находится каждый процесс и какие собеседования и предложения уже есть.
        </p>
        <div className={styles.heroActions}>
          <ButtonLink to={ROUTES.applicationNew} icon={<Plus size={18} aria-hidden="true" />}>
            Добавить отклик
          </ButtonLink>
        </div>
      </section>

      <section id="summary" className={styles.section} aria-labelledby="summary-title">
        <h2 id="summary-title" className={styles.sectionTitle}>
          Сводка по поиску
        </h2>

        {state.status === 'loading' ? <LoadingIndicator /> : null}

        {state.status === 'error' ? (
          <ErrorMessage
            title="Не удалось загрузить данные"
            details={`${state.message} Проверьте соединение и попробуйте ещё раз.`}
            onRetry={handleRetry}
          />
        ) : null}

        {state.status === 'success' ? (
          <StatsSummary summary={getSummary(state.data.applications)} />
        ) : null}
      </section>

      {state.status === 'success' ? (
        <section id="recent" className={styles.section} aria-labelledby="recent-title">
          <div className={styles.sectionHeader}>
            <h2 id="recent-title" className={styles.sectionTitle}>
              Последние отклики
            </h2>
            <Link to={ROUTES.applications} className={styles.allLink}>
              Все отклики
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <ApplicationList
            applications={getRecentApplications(state.data.applications, RECENT_LIMIT)}
            categories={state.data.categories}
          />
        </section>
      ) : null}
    </div>
  )
}

export default DashboardPage
