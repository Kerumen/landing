import React from 'react'
import { Link } from 'gatsby'

import MenuLink from './MenuLink'

import styles from './styles.module.scss'

const Header = ({ black }) => (
  <div className={black ? styles.headerBlack : styles.header}>
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        <img
          src={
            black
              ? require('../../images/logo-white.svg')
              : require('../../images/logo.svg')
          }
          alt="logo"
        />
      </Link>
      <div className={styles.links}>
        <MenuLink to="/technology" black={black}>
          Technology
        </MenuLink>
        <MenuLink to="/whitepaper" black={black}>
          Whitepaper
        </MenuLink>
        <MenuLink to="/team" black={black}>
          Team
        </MenuLink>
        <MenuLink to="/blog" black={black}>
          Blog
        </MenuLink>
        <MenuLink to="/social" black={black}>
          Social
        </MenuLink>
      </div>
    </div>
  </div>
)

export default Header
