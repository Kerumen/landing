import React from 'react'
import { Link } from 'gatsby'

import MenuLink from './MenuLink'

import styles from './styles.module.scss'

const Header = ({ color }) => (
  <div className={color ? styles[color] : styles.header}>
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        <img
          src={
            color === 'black'
              ? require('../../images/logo-white.svg')
              : require('../../images/logo.svg')
          }
          alt="logo"
        />
      </Link>
      <div className={styles.links}>
        <MenuLink to="/technology" black={color === 'black'}>
          Technology
        </MenuLink>
        <MenuLink to="/whitepaper" black={color === 'black'}>
          Whitepaper
        </MenuLink>
        <MenuLink to="/team" black={color === 'black'}>
          Team
        </MenuLink>
        <MenuLink to="/blog" black={color === 'black'}>
          Blog
        </MenuLink>
        <MenuLink to="/social" black={color === 'black'}>
          Social
        </MenuLink>
      </div>
    </div>
  </div>
)

export default Header
