import type { ComponentPropsWithoutRef } from 'react'
import type { SelectOption } from '../../types/common.ts'
import styles from './FormControls.module.css'

interface SelectProps extends ComponentPropsWithoutRef<'select'> {
  options: readonly SelectOption[]
  /** Текст пустого варианта (со значением ""). Если не указан, пустого варианта нет. */
  placeholder?: string
}

function Select({ options, placeholder, className, ...rest }: SelectProps) {
  return (
    <select className={className ? `${styles.control} ${className}` : styles.control} {...rest}>
      {placeholder !== undefined ? <option value="">{placeholder}</option> : null}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
