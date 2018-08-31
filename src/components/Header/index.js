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
            <Dropdown color={color} items={[{ name: 'Whitepaper' }]}>
              Documents
            </Dropdown>
            <Dropdown
              color={color}
              width={125}
              items={[
                { name: 'Twitter', href: 'https://twitter.com/tokendataai/' },
                {
                  name: 'LinkedIn',
                  href: 'https://www.linkedin.com/company/tokendata-ai/',
                },
                {
                  name: 'Telegram',
                  href: 'https://t.me/joinchat/AAAAAEnpmczvxh-EC90FtQ/',
                },
                { name: 'Mail', href: 'mailto:hello@tokendata.ai' },
                {
                  name: 'Facebook',
                  href: 'https://www.facebook.com/TokenData-1884067325220498/',
                },
                { name: 'Medium', href: 'https://medium.com/@tokendataICO/' },
                { name: 'Angel List', href: 'https://angel.co/tokendata/' },
                {
                  name: 'Discord',
                  href: 'https://discordapp.com/channels/484700860094349312/',
                },
                {
                  name: 'Reddit',
                  href: 'https://www.reddit.com/user/tokendataico/',
                },
              ]}
            >
              Social
            </Dropdown>
            <MenuLink
              href="https://tokendata.typeform.com/to/eUeyVn/"
              color={color}
            >
              Beta
            </MenuLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
