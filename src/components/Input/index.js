import React from 'react'

import styles from './styles.module.scss'

const Input = ({ children, ...props }) => {
  return <input className={styles.input} {...props} />
}

export default Input
