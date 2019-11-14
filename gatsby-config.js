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
        path: `${__dirname}/src/images`
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
        icon: `src/images/star-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              showCaptions: true,
              quality: 100,
              maxWidth: 4096
            }
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank", // Specifies where to display the linked URL. The value should be on of : _self, _blank, _parent, _top
              rel: "nofollow noopener noreferrer" // Specifies the relationship of the target object to the link object. The value is a space-separated list of link types.
            }
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 740,
              //ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 418, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              // urlOverrides: [
              //   {
              //     id: 'youtube',
              //     embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
              //   }
              // ] //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
            }
          }
        ]
      }
    },
    `gatsby-plugin-slug`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
