import React from 'react'

import styles from './styles.module.scss'

const Section = ({
  children,
  container = true,
  row = false,
  style,
  ...props
}) => (
  <section
    className={container ? styles.sectionContainer : styles.section}
    style={{
      ...(row
        ? {
            flexDirection: 'row',
            alignItems: 'center',
          }
        : {
            flexDirection: 'column',
            justifyContent: 'center',
          }),

      ...style,
    }}
    {...props}
  >
    {children}
  </section>
)

export default Section
