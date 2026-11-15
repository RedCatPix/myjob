import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../app/paths.ts'
import type { Theme } from '../../hooks/useTheme.ts'
import Brand from './Brand.tsx'
import ThemeToggle from './ThemeToggle.tsx'
import styles from './AppHeader.module.css'

interface AppHeaderProps {
  theme: Theme
  onToggleTheme: () => void
}

/** Верхняя строка мобильной версии: название приложения, добавление отклика и переключатель темы. */
function AppHeader({ theme, onToggleTheme }: AppHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to={ROUTES.dashboard} className={styles.brandLink} aria-label="MyJob – на главную">
          <Brand />
        </Link>

        <div className={styles.actions}>
          <Link to={ROUTES.applicationNew} className={styles.addButton} aria-label="Добавить отклик" title="Добавить отклик">
            <Plus size={20} aria-hidden="true" />
          </Link>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  )
}

export default AppHeader
