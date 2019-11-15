import React, { Component } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/hero";
import PostList from "../components/post-list";

class SnesIndex extends Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    const heroTitle = "Super Nintendo";
    const heroText =
      "I am about to embark on an adventure of reviewing every Super Nintendo game released in North America. Over the next 15-ish years, I will be playing each game on the original hardware, writing a review for my website, and making a video review for YouTube. Wish me luck!";

    return (
      <Layout>
        <Hero title={heroTitle} text={heroText} />
        <PostList posts={posts} type="snes" />
      </Layout>
    );
  }
}

export default SnesIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/snes/" }
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
