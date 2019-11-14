import React, { Component } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/hero";
import PostList from "../components/post-list";

class BlogIndex extends Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    const heroTitle = data.site.siteMetadata.title + "'s Thoughts";
    const heroText = () => {
      return (
        <>
          This is the personal blog. If you wish to read Super Nintendo content
          and game reviews, please <Link to="/snes">click here</Link>
        </>
      );
    };

    return (
      <Layout>
        <Hero title={heroTitle} text={heroText()} />
        <PostList posts={posts} type="blog" />
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
      filter: { frontmatter: { draft: { eq: false } } }
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
