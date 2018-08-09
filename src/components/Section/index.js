import React from 'react'

import styles from './styles.module.scss'

const Section = ({ children, container = true, row = false, ...props }) => (
  <section
    className={container ? styles.sectionContainer : styles.section}
    style={{ flexDirection: row ? 'row' : 'column' }}
    {...props}
  >
    {children}
  </section>
)

export default Section
