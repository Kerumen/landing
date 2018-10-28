import React, { Component } from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'

import { openMailchimpModal } from '../../helpers'

import MenuLink from './MenuLink'
import Dropdown from './Dropdown'

import styles from './styles.module.scss'

const MenuIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M24 3c0-.6-.4-1-1-1H1c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h22c.6 0 1-.4 1-1V3zm0 8c0-.6-.4-1-1-1H1c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h22c.6 0 1-.4 1-1v-2zm0 8c0-.6-.4-1-1-1H1c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h22c.6 0 1-.4 1-1v-2z" />
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 21.9 21.9">
    <path d="M14.1 11.3c-.2-.2-.2-.5 0-.7l7.5-7.5c.2-.2.3-.5.3-.7s-.1-.5-.3-.7L20.2.3c-.2-.2-.5-.3-.7-.3-.3 0-.5.1-.7.3l-7.5 7.5c-.2.2-.5.2-.7 0L3.1.3C2.9.1 2.6 0 2.4 0s-.5.1-.7.3L.3 1.7c-.2.2-.3.5-.3.7s.1.5.3.7l7.5 7.5c.2.2.2.5 0 .7L.3 18.8c-.2.2-.3.5-.3.7s.1.5.3.7l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3l7.5-7.5c.2-.2.5-.2.7 0l7.5 7.5c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.2-.2.3-.5.3-.7s-.1-.5-.3-.7l-7.5-7.5z" />
  </svg>
)

class Header extends Component {
  state = { mobileMenu: false }

  toggleMenu = () =>
    this.setState(({ mobileMenu }) => ({ mobileMenu: !mobileMenu }))

  render() {
    const { mobileMenu } = this.state
    const { color: providedColor } = this.props
    const color = mobileMenu ? 'white' : providedColor

    return (
      <div
        className={cx(
          {
            [styles.withTransition]:
              !mobileMenu && ['white', 'black'].includes(color),
          },
          color ? styles[color] : styles.header
        )}
      >
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
                {
                  name: 'Whitepaper',
                  onClick: openMailchimpModal,
                },
              ]}
            >
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
          <div className={styles.mobileMenuToggle} onClick={this.toggleMenu}>
            {mobileMenu ? <CloseIcon /> : <MenuIcon />}
          </div>
          {mobileMenu && (
            <div className={styles.mobileMenu}>
              <Link
                to="/"
                className={styles.mobileMenuLink}
                activeClassName={styles.mobileMenuLinkActive}
              >
                Home
              </Link>
              <Link
                to="/technology"
                className={styles.mobileMenuLink}
                activeClassName={styles.mobileMenuLinkActive}
              >
                Technology
              </Link>
              <Link
                to="/team"
                className={styles.mobileMenuLink}
                activeClassName={styles.mobileMenuLinkActive}
              >
                About Us
              </Link>
              <a
                href="https://tokendata.typeform.com/to/eUeyVn/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileMenuLink}
              >
                Beta
              </a>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Header
