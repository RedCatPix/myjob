import styles from './ErrorMessage.module.css'

interface ErrorMessageProps {
  title: string
  details: string
  onRetry: () => void
}

function ErrorMessage({ title, details, onRetry }: ErrorMessageProps) {
  return (
    <div className={styles.wrapper} role="alert">
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.details}>{details}</p>
      <button type="button" className={styles.button} onClick={onRetry}>
        Повторить загрузку
      </button>
    </div>
  )
}

export default ErrorMessage
