import React from 'react'
import { Link } from 'gatsby'

import styles from './styles.module.scss'

const MenuLink = ({ children, to }) => (
  <Link to={to} className={styles.link}>
    {children}
  </Link>
)

export default MenuLink
