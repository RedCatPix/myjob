import type { ReactNode } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  id: string
  title: string
  description?: string
  children: ReactNode
}

/** Раздел страницы с заголовком второго уровня и необязательным пояснением. */
function Section({ id, title, description, children }: SectionProps) {
  return (
    <section className={styles.section} aria-labelledby={id}>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {description ? <p className={styles.description}>{description}</p> : null}
      <div className={styles.body}>{children}</div>
    </section>
  )
}

export default Section
