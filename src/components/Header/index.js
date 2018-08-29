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
            <MenuLink to="/technology" color={color}>
              Technology
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
            <MenuLink to="/team" color={color}>
              Team
            </MenuLink>
            <MenuLink to="/blog" color={color}>
              Blog
            </MenuLink>
            <Dropdown
              color={color}
              align="right"
              width={125}
              items={[
                { name: 'LinkedIn' },
                { name: 'Facebook' },
                { name: 'Twitter' },
                { name: 'Slack' },
                { name: 'Telegram' },
                { name: 'WeChat' },
              ]}
            >
              Social
            </Dropdown>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
