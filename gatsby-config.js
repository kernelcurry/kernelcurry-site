module.exports = {
  siteMetadata: {
    title: `KernelCurry`,
    description: `Thoughts of KernelCurry`,
    author: `KernelCurry`,
    social: {
      twitter: `kernelcurry`,
      github: `michaelcurry`,
      linkedin: `michaeliancurry`
    },
    navigation: {
      main: [
        {
          text: `Blog`,
          path: `/blog`
        },
        {
          text: `Portfolio`,
          path: `/portfolio`
        },
        {
          text: `Super Nintendo`,
          path: `/snes`
        }
      ]
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/img`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `snes`,
        path: `${__dirname}/src/snes`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KernelCurry.com`,
        short_name: `KernelCurry`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/static/img/general/star-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
