import type { Theme } from '../../hooks/useTheme.ts'
import ThemeToggle from './ThemeToggle.tsx'
import styles from './AppHeader.module.css'

interface AppHeaderProps {
  theme: Theme
  onToggleTheme: () => void
}

interface NavLinkItem {
  href: string
  label: string
}

const NAV_LINKS: readonly NavLinkItem[] = [
  { href: '#summary', label: 'Сводка' },
  { href: '#recent', label: 'Последние отклики' },
]

function AppHeader({ theme, onToggleTheme }: AppHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.brand}>
          <span className={styles.logo} aria-hidden="true">
            MJ
          </span>
          <span className={styles.name}>MyJob</span>
        </span>

        <nav className={styles.nav} aria-label="Разделы страницы">
          <ul className={styles.links}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className={styles.link} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  )
}

export default AppHeader
