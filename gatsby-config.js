const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'TokenDATA',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'config',
        path: path.join(__dirname, 'config'),
      },
    },
  ],
}
