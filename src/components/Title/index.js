import React from 'react'

import styles from './styles.module.scss'

const Title = ({ children, ...props }) => (
  <div className={styles.title} {...props}>
    {children}
  </div>
)

export default Title
