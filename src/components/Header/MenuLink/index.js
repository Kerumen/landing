import React from 'react'
import { Link } from 'gatsby'

import styles from './styles.module.scss'

const MenuLink = ({ children, to, color }) => (
  <Link
    to={to}
    className={color ? styles[color] : styles.link}
    activeClassName={color ? styles[`${color}Active`] : styles.linkActive}
  >
    {children}
  </Link>
)

export default MenuLink
