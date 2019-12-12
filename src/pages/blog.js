import React, {Component} from "react";
import {graphql} from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/hero";
import PostList from "../components/post-list";

class BlogIndex extends Component {
    render() {
        const {data} = this.props;
        const posts = data.allMarkdownRemark.edges;

        const heroTitle = data.site.siteMetadata.title + "'s Thoughts";
        const heroText = () => {
            return (
                <>
                    Views and opinions expressed here are mine and do not reflect official policies or positions of any associated entities.
                </>
            );
        };

        return (
            <Layout title="Blogs">
                <Hero title={heroTitle} text={heroText()}/>
                <PostList posts={posts} type="blog"/>
            </Layout>
        );
    }
}

export default BlogIndex;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/blog/" }
                frontmatter: { draft: { eq: false } }
            }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 160)
                    fields {
                        slug
                        readingTime {
                            text
                        }
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                        image {
                            childImageSharp {
                                fixed(width: 800, height: 420, cropFocus: CENTER) {
                                    src
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
