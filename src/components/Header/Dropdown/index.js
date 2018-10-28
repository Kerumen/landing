import React from 'react'
import { Link } from 'gatsby'

import Button from '../../Button'

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
        {items.map(({ name, to, href, onClick }) => {
          if (!!to) {
            return (
              <Link key={name} to={to} className={styles.subLink}>
                {name}
              </Link>
            )
          }
          if (!!href) {
            return (
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
          }
          if (!!onClick) {
            return (
              <div key={name} onClick={onClick} className={styles.subLink}>
                {name}
              </div>
            )
          }
        })}
      </div>
    </div>
  </div>
)

export default Dropdown
