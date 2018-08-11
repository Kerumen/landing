import React from 'react'
import { Link } from 'gatsby'

import styles from './styles.module.scss'

const MenuLink = ({ children, to, black }) => (
  <Link
    activeStyle={{ background: 'white' }}
    to={to}
    className={black ? styles.blackLink : styles.link}
  >
    {children}
  </Link>
)

export default MenuLink
