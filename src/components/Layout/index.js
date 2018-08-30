import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'normalize.css'
import '../../fonts/fonts.css'
import '../../styles/index.scss'

import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children, color }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `}
    render={({ site }) => (
      <>
        <Helmet>
          <title>{site.siteMetadata.title}</title>
          <meta name="description" content={site.siteMetadata.description} />
          <link rel="canonical" href={site.siteMetadata.siteUrl} />
          <meta property="og:title" content={site.siteMetadata.title} />
          <meta
            property="og:description"
            content={site.siteMetadata.description}
          />
          <meta property="og:url" content={site.siteMetadata.siteUrl} />
          <meta
            property="og:image"
            content={require('../../images/logo-black.svg')}
          />
        </Helmet>
        <Header color={color} />
        <div>{children}</div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
