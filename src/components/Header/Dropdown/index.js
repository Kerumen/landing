import React from 'react'

import styles from './styles.module.scss'

const Dropdown = ({ children, items }) => (
  <div className={styles.container}>
    <div className={styles.link}>{children}</div>
    <div className={styles.dropdown}>
      <div className={styles.dropdownInner}>
        {items.map(({ name }) => (
          <div key={name} className={styles.subLink}>
            {name}
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Dropdown
