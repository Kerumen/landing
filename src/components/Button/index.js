import React from 'react'
import { Link } from 'gatsby'

import styles from './styles.module.scss'

const Button = ({ children, variation = 'black', ...props }) => {
  let Tag = 'button'
  if (props.to) Tag = Link
  if (props.href) Tag = 'a'
  return (
    <Tag
      className={styles[variation]}
      {...(props.href ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Button
