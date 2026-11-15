import type { ReactNode } from 'react'
import styles from './FormControls.module.css'

interface FieldProps {
  /** Идентификатор поля ввода: связывает подпись с полем. */
  id: string
  label: string
  required?: boolean
  /** Пояснение под полем. Его идентификатор: `${id}-hint`. */
  hint?: string
  /** Поле занимает всю ширину сетки формы. */
  wide?: boolean
  children: ReactNode
}

function Field({ id, label, required = false, hint, wide = false, children }: FieldProps) {
  return (
    <div className={styles.field} data-wide={wide}>
      <label className={styles.label} htmlFor={id}>
        {label}
        {required ? (
          <span className={styles.required} aria-hidden="true">
            {' *'}
          </span>
        ) : null}
      </label>
      {children}
      {hint ? (
        <p id={`${id}-hint`} className={styles.hint}>
          {hint}
        </p>
      ) : null}
    </div>
  )
}

export default Field
