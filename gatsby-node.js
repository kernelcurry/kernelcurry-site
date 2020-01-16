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
        const template = {
            "blog": path.resolve(`./src/templates/blog.js`),
            "career": path.resolve(`./src/templates/career.js`),
            "project": path.resolve(`./src/templates/blog.js`)
        }

        resolve(
            graphql(`
                {
                  allMarkdownRemark(
                    filter: {
                      frontmatter: {draft: {eq: false}}
                    },
                    sort: {fields: [frontmatter___date], order: DESC}
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
            `).then(result => {
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
                        component: template[post.node.parent.sourceInstanceName],
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

// exports.createSchemaCustomization = ({ actions }) => {
//     const { createTypes } = actions
//     const typeDefs = `
//     """
//     Markdown Node
//     """
//     type MarkdownRemark implements Node @infer {
//       frontmatter: Frontmatter!
//     }
//
//     """
//     Markdown Frontmatter
//     """
//     type Frontmatter @infer {
//       author: AuthorJson! @link
//     }
//
//     """
//     Link information
//     """
//     type AuthorJson implements Node @dontInfer {
//       title: String!
//       url: String!
//     }
//   `
//     createTypes(typeDefs)
// }