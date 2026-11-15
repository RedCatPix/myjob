import styles from './Brand.module.css'

function Brand() {
  return (
    <span className={styles.brand}>
      <span className={styles.logo} aria-hidden="true">
        MJ
      </span>
      <span className={styles.name}>MyJob</span>
    </span>
  )
}

export default Brand
