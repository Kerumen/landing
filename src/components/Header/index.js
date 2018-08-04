import React from 'react'
import { Link } from 'gatsby'

import MenuLink from './MenuLink'

import styles from './styles.module.scss'

const Header = ({ siteTitle, backgroundBlack }) => (
  <div className={backgroundBlack ? styles.headerBlack : styles.header}>
    <div className={styles.container}>
      <div>
        <Link to="/" className={styles.logo}>
          {siteTitle}
        </Link>
      </div>
      <div className={styles.links}>
        <MenuLink to="/technology">Technology</MenuLink>
        <MenuLink to="/whitepaper">Whitepaper</MenuLink>
        <MenuLink to="/team">Team</MenuLink>
        <MenuLink to="/blog">Blog</MenuLink>
        <MenuLink to="/social">Social</MenuLink>
      </div>
    </div>
  </div>
)

export default Header
