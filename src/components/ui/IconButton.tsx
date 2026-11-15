import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './IconButton.module.css'

interface IconButtonProps {
  label: string
  icon: ReactNode
  /** Если указан адрес, элемент отображается как ссылка, иначе как кнопка. */
  to?: string
  pressed?: boolean
}

function IconButton({ label, icon, to, pressed }: IconButtonProps) {
  if (to !== undefined) {
    return (
      <Link to={to} className={styles.button} aria-label={label} title={label}>
        {icon}
      </Link>
    )
  }

  return (
    <button
      type="button"
      className={styles.button}
      aria-label={label}
      title={label}
      aria-pressed={pressed}
    >
      {icon}
    </button>
  )
}

export default IconButton
