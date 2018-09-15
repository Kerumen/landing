import React from 'react'
import { Link } from 'gatsby'

import styles from './styles.module.scss'

const Dropdown = ({ children, items, align = 'left', width = 200, color }) => (
  <div className={styles.container}>
    <div className={color ? styles[color] : styles.link}>{children}</div>
    <div className={styles.dropdown} style={{ [align]: 0 }}>
      <div
        className={
          color === 'black' ? styles.dropdownInnerBlack : styles.dropdownInner
        }
        style={{ width }}
      >
        {items.map(
          ({ name, to, href }) =>
            to ? (
              <Link key={name} to={to} className={styles.subLink}>
                {name}
              </Link>
            ) : (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.subLink}
              >
                {name}
              </a>
            )
        )}
      </div>
    </div>
  </div>
)

export default Dropdown
