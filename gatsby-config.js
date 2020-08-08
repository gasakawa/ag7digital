require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `AG7 Digital Business`,
    description: `Estrategias digitales para impulsar tu negocio`,
    author: `@ggasakawa`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -90,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '973057009821395',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'AG7 Digital Business',
        short_name: 'ag7digital',
        start_url: '/',
        background_color: '#16202c',
        theme_color: '#16202c',
        display: 'minimal-ui',
        icon: 'src/images/logocolor.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
