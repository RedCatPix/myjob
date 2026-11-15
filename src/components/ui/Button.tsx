import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends Omit<ComponentPropsWithoutRef<'button'>, 'type'> {
  variant?: 'primary' | 'secondary' | 'danger'
  icon?: ReactNode
}

function Button({ variant = 'primary', icon, children, ...rest }: ButtonProps) {
  return (
    <button type="button" className={styles.button} data-variant={variant} {...rest}>
      {icon}
      {children}
    </button>
  )
}

export default Button
