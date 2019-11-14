import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Post from "../components/post";

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
        <ul id="posts">
          {posts.map(({ node }) => {
            return <Post key={node.id} node={node} />;
          })}
        </ul>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
