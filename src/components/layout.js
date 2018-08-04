import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'normalize.css'
import '../fonts/fonts.css'
import '../styles/index.scss'

import Header from './Header'

const Layout = ({ children, backgroundBlack }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Unleash the power of the world’s crypto data',
            },
          ]}
        />
        <Header
          siteTitle={data.site.siteMetadata.title}
          backgroundBlack={backgroundBlack}
        />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1170,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
