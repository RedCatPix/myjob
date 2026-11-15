import { Plus } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../../app/navigation.ts'
import { ROUTES } from '../../app/paths.ts'
import type { Theme } from '../../hooks/useTheme.ts'
import ButtonLink from '../ui/ButtonLink.tsx'
import Brand from './Brand.tsx'
import ThemeToggle from './ThemeToggle.tsx'
import styles from './Sidebar.module.css'

interface SidebarProps {
  theme: Theme
  onToggleTheme: () => void
}

function Sidebar({ theme, onToggleTheme }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <Brand />

      <ButtonLink to={ROUTES.applicationNew} icon={<Plus size={18} aria-hidden="true" />}>
        Добавить отклик
      </ButtonLink>

      <nav aria-label="Основная навигация">
        <ul className={styles.list}>
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                <item.icon size={20} aria-hidden="true" />
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.footer}>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <span className={styles.themeCaption}>
          {theme === 'dark' ? 'Тёмная тема' : 'Светлая тема'}
        </span>
      </div>
    </aside>
  )
}

export default Sidebar
