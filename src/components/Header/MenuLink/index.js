import React from 'react'
import { Link } from 'gatsby'

import styles from './styles.module.scss'

const MenuLink = ({ children, to, href, color }) =>
  to ? (
    <Link
      to={to}
      className={color ? styles[color] : styles.link}
      activeClassName={color ? styles[`${color}Active`] : styles.linkActive}
    >
      {children}
    </Link>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={color ? styles[color] : styles.link}
    >
      {children}
    </a>
  )

export default MenuLink
