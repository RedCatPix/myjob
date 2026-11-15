import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

interface ButtonLinkProps {
  to: string
  variant?: 'primary' | 'secondary'
  icon?: ReactNode
  children: ReactNode
}

function ButtonLink({ to, variant = 'primary', icon, children }: ButtonLinkProps) {
  return (
    <Link to={to} className={styles.button} data-variant={variant}>
      {icon}
      {children}
    </Link>
  )
}

export default ButtonLink
