import React from 'react'
import cx from 'classnames'

import styles from './styles.module.scss'

const Section = ({
  children,
  container = true,
  row = false,
  style,
  ...props
}) => (
  <section
    className={cx(
      styles.section,
      { [styles.sectionContainer]: container },
      row ? styles.row : styles.column
    )}
    style={style}
    {...props}
  >
    {children}
  </section>
)

export default Section
