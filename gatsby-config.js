const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Token Data',
    siteUrl: 'https://tokendata.ai/',
    description:
      'Token Data is the first platform which extract, collect and build an awesome datalake of the crypto-market to empower the decision maker.',
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
