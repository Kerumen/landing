import React from 'react'

import styles from './styles.module.scss'

const Box = ({ children, ...props }) => (
  <div className={styles.box} {...props}>
    {children}
  </div>
)

export default Box
