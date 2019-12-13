import React, {Component} from "react";
import {graphql} from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/hero";
import BlogList from "../components/blog-list";

class CareerIndex extends Component {
    render() {
        const {data} = this.props;
        const posts = data.allMarkdownRemark.edges;

        const heroTitle = "Projects";
        const heroText = "In process as of 2019-12-11";

        return (
            <Layout title="Projects">
                <Hero title={heroTitle} text={heroText}/>
                <BlogList posts={posts} type="project"/>
            </Layout>
        );
    }
}

export default CareerIndex;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/project/" }
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
                    }
                }
            }
        }
    }
`;
