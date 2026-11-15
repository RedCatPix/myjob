import type { ComponentPropsWithoutRef } from 'react'
import styles from './FormControls.module.css'

interface CheckboxProps extends Omit<ComponentPropsWithoutRef<'input'>, 'type'> {
  label: string
}

function Checkbox({ label, ...rest }: CheckboxProps) {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" {...rest} />
      <span>{label}</span>
    </label>
  )
}

export default Checkbox
