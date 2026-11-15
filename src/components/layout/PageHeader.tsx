import type { ReactNode } from 'react'
import styles from './PageHeader.module.css'

interface PageHeaderProps {
  title: string
  description: string
  /** Дополнительная строка под описанием, например идентификатор из адреса. */
  meta?: string
  /** Ссылки и кнопки действий. */
  children?: ReactNode
}

function PageHeader({ title, description, meta, children }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      {meta ? <p className={styles.meta}>{meta}</p> : null}
      {children ? <div className={styles.actions}>{children}</div> : null}
    </header>
  )
}

export default PageHeader
