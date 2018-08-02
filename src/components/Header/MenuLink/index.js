import React from 'react'
import { Link } from 'gatsby'

import styles from './styles.module.css'

const MenuLink = ({ children, to }) => (
  <Link to={to} className={styles.link}>
    {children}
  </Link>
)

export default MenuLink
