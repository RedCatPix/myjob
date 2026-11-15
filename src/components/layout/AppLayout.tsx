import { Outlet } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme.ts'
import AppHeader from './AppHeader.tsx'
import MobileNav from './MobileNav.tsx'
import ScrollToTop from './ScrollToTop.tsx'
import Sidebar from './Sidebar.tsx'
import styles from './AppLayout.module.css'

/** Общий макет: меню остаётся на месте, содержимое страницы подставляется через Outlet. */
function AppLayout() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={styles.shell}>
      <ScrollToTop />
      <Sidebar theme={theme} onToggleTheme={toggleTheme} />

      <div className={styles.column}>
        <AppHeader theme={theme} onToggleTheme={toggleTheme} />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>

      <MobileNav />
    </div>
  )
}

export default AppLayout
