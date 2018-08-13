import React from 'react'

import styles from './styles.module.scss'

const Dropdown = ({ children, items, align = 'left', width = 200 }) => (
  <div className={styles.container}>
    <div className={styles.link}>{children}</div>
    <div className={styles.dropdown} style={{ [align]: 0 }}>
      <div className={styles.dropdownInner} style={{ width }}>
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
