import type { ComponentPropsWithoutRef } from 'react'
import styles from './FormControls.module.css'

type TextInputProps = ComponentPropsWithoutRef<'input'>

function TextInput({ className, ...rest }: TextInputProps) {
  return <input className={className ? `${styles.control} ${className}` : styles.control} {...rest} />
}

export default TextInput
