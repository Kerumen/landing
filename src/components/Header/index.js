import React, { Component } from 'react'
import { Link } from 'gatsby'

import MenuLink from './MenuLink'
import Dropdown from './Dropdown'

import styles from './styles.module.scss'

class Header extends Component {
  render() {
    const { color } = this.props

    return (
      <div className={color ? styles[color] : styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            <img
              src={
                color === 'black'
                  ? require('../../images/logo-white.svg')
                  : require('../../images/logo-black.svg')
              }
              alt="logo"
            />
          </Link>
          <div className={styles.links}>
            <MenuLink to="/" color={color}>
              Home
            </MenuLink>
            <MenuLink to="/technology" color={color}>
              Technology
            </MenuLink>
            <MenuLink to="/team" color={color}>
              About Us
            </MenuLink>
            <Dropdown
              color={color}
              items={[
                { name: 'Whitepaper' },
                { name: 'Greypaper' },
                { name: 'Business plan' },
              ]}
            >
              Documents
            </Dropdown>
            <Dropdown
              color={color}
              width={125}
              items={[
                { name: 'Twitter' },
                {
                  name: 'LinkedIn',
                  href: 'https://www.linkedin.com/company/tokendata-ai/',
                },
                { name: 'Telegram' },
                { name: 'Mail' },
                { name: 'Facebook' },
                { name: 'Medium' },
                { name: 'Angel List', href: 'https://angel.co/tokendata/' },
              ]}
            >
              Social
            </Dropdown>
            <MenuLink to="/beta" color={color}>
              Beta
            </MenuLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
