module.exports = {
  siteMetadata: {
    title: `Greystone Place`,
    titleTemplate: '%s - Greystone Place',
    description: `Setting new standards in gracious apartment living`,
    siteUrl: `https://greystoneplace.ca`,
    author: `@peakwebsite`,
  },
  plugins: [
    `gatsby-plugin-sass`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Greystone Place`,
        short_name: `Greystone Place`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Image-38.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Alegreya SC',
          'Andada', // good body font
        ],
        display: 'swap',
      },
    },
    //  {
    //     resolve: `gatsby-plugin-google-analytics`,
    //     options: {
    //        trackingId: process.env.GA_TRACKING_CODE,
    //        head: true,
    //        respectDNT: true
    //     }
    //  },
    `gatsby-plugin-sitemap`,
    // `gatsby-plugin-sitemap`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
