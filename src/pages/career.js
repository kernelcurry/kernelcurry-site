import React, {Component} from "react";
import {graphql} from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/hero";
import CareerList from "../components/career-list";

class CareerIndex extends Component {
    render() {
        const {data} = this.props;
        const posts = data.allMarkdownRemark.edges;

        const heroTitle = "Career";
        const heroText = () => {
            return (
                <>
                    <b>Actively seeking new opportunities</b> <br/>San Francisco, CA - info@kernelcurry.com
                </>
            );
        };

        return (
            <Layout title="Career">
                <Hero title={heroTitle} text={heroText()}/>
                <CareerList posts={posts} type="career"/>
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
                fileAbsolutePath: { regex: "/career/" }
                frontmatter: { draft: { eq: false } }
            }
            sort: { fields: [frontmatter___date_start], order: DESC }
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
                        title
                        description
                        location
                        date_start(formatString: "MMM YYYY")
                        date_stop(formatString: "MMM YYYY")
                        image {
                            childImageSharp {
                                fluid(maxWidth: 700) {
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
