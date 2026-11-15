import { NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../../app/navigation.ts'
import styles from './MobileNav.module.css'

function MobileNav() {
  return (
    <nav className={styles.nav} aria-label="Нижняя навигация">
      <ul className={styles.list}>
        {NAV_ITEMS.map((item) => (
          <li key={item.to} className={styles.item}>
            <NavLink
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              <item.icon size={22} aria-hidden="true" />
              <span className={styles.label}>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MobileNav
