module.exports = {
  siteMetadata: {
    title: `Simon Morgan`,
    description: `Freelance Senior Front-end Web Developer`,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
        resolve: 'gatsby-plugin-sass',
        // options: {
        //     data: '@import "variables.scss";',
        //     includePaths: [
        //         'src/styles',
        //     ],
        // }
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#3273dc`,
        theme_color: `#3273dc`,
        display: `minimal-ui`,
        icon: `src/images/smd-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
