import React from 'react'
import { Link } from 'gatsby'

import styles from './styles.module.scss'

const MenuLink = ({ children, to, color }) => (
  <Link
    activeClassName={color ? styles[`${color}Active`] : styles.linkActive}
    to={to}
    className={color ? styles[color] : styles.link}
  >
    {children}
  </Link>
)

export default MenuLink
