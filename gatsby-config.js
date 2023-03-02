require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteName: 'Kumara Game Store',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken:
          process.env.DATO_READONLY_API_KEY || '317fe2f20d8c7e31e9567cfe3f627e',
      },
    },
    {
      resolve: 'gatsby-plugin-snipcart-advanced',
      options: {
        publicApiKey:
          process.env.SNIPCART_PUBLIC_API_KEY ||
          'MjZiYzA3OWUtNDU0OS00NTZjLWJlZmEtMmI5YmY0OWFhMjM0NjM4MTMwOTIxOTM4NDUxMTYy',
        autopop: true,
      },
    },
  ],
};
