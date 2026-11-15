import styles from './LoadingIndicator.module.css'

interface LoadingIndicatorProps {
  message?: string
}

function LoadingIndicator({ message = 'Загрузка...' }: LoadingIndicatorProps) {
  return (
    <div className={styles.wrapper} role="status" aria-live="polite">
      <span className={styles.spinner} aria-hidden="true" />
      <span className={styles.message}>{message}</span>
    </div>
  )
}

export default LoadingIndicator
