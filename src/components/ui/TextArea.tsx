import type { ComponentPropsWithoutRef } from 'react'
import styles from './FormControls.module.css'

type TextAreaProps = ComponentPropsWithoutRef<'textarea'>

function TextArea({ className, ...rest }: TextAreaProps) {
  return (
    <textarea className={className ? `${styles.control} ${className}` : styles.control} {...rest} />
  )
}

export default TextArea
