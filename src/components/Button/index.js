import React from 'react'

import styles from './styles.module.scss'

const Button = ({ children, variation = 'black', ...props }) => {
  return (
    <button className={styles[variation]} {...props}>
      {children}
    </button>
  )
}

export default Button
