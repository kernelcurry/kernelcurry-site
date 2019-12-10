/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;

    return new Promise((resolve, reject) => {
        const blogPost = path.resolve(`./src/templates/blog-post.js`);
        resolve(
            graphql(
                `
          {
            allMarkdownRemark(
              filter: { frontmatter: { draft: { eq: false } } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                  }
                  parent {
                    ... on File {
                      id
                      name
                      sourceInstanceName
                    }
                  }
                }
              }
            }
          }
        `
            ).then(result => {
                if (result.errors) {
                    console.log(result.errors);
                    reject(result.errors);
                }

                // Create blog posts pages.
                const posts = result.data.allMarkdownRemark.edges;

                posts.forEach((post, index) => {
                    const previous =
                        index === posts.length - 1 ? null : posts[index + 1].node;
                    const next = index === 0 ? null : posts[index - 1].node;

                    createPage({
                        path:
                            "/" + post.node.parent.sourceInstanceName + post.node.fields.slug,
                        component: blogPost,
                        context: {
                            slug: post.node.fields.slug,
                            previous,
                            next
                        }
                    });
                });
            })
        );
    });
};
