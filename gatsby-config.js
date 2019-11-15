module.exports = {
  siteMetadata: {
    siteUrl: `https://kernelcurry.com`,
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
              noIframeBorder: true //Optional: Disable insertion of <style> border: 0
              // urlOverrides: [
              //   {
              //     id: 'youtube',
              //     embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
              //   }
              // ] //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              // languageExtensions: [
              //   {
              //     language: "superscript",
              //     extend: "javascript",
              //     definition: {
              //       superscript_types: /(SuperType)/
              //     },
              //     insertBefore: {
              //       function: {
              //         superscript_keywords: /(superif|superelse)/
              //       }
              //     }
              //   }
              // ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: "root",
                host: "localhost",
                global: false
              }
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
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        // query: `
        //   {
        //     site {
        //       siteMetadata {
        //         title
        //         description
        //         siteUrl
        //         site_url: siteUrl
        //       }
        //     }
        //   }
        // `,
        // feeds: [
        //   {
        //     serialize: ({ query: { site, allMarkdownRemark } }) => {
        //       return allMarkdownRemark.edges.map(edge => {
        //         return Object.assign({}, edge.node.frontmatter, {
        //           description: edge.node.excerpt,
        //           date: edge.node.frontmatter.date,
        //           url: site.siteMetadata.siteUrl + edge.node.fields.slug,
        //           guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
        //           custom_elements: [{ "content:encoded": edge.node.html }],
        //         })
        //       })
        //     },
        //     query: `
        //       {
        //         allMarkdownRemark(
        //           sort: { order: DESC, fields: [frontmatter___date] },
        //         ) {
        //           edges {
        //             node {
        //               excerpt
        //               html
        //               fields { slug }
        //               frontmatter {
        //                 title
        //                 date
        //               }
        //             }
        //           }
        //         }
        //       }
        //     `,
        //     output: "/rss.xml",
        //     title: "Your Site's RSS Feed",
        //   },
        // ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],

};
