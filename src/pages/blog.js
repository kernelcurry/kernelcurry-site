import React, { Component } from "react";
import { graphql } from "gatsby";
// import styled from 'styled-components';

import Layout from "../components/layout";
// import SEO from '../components/seo';
// import Bio from '../components/bio';
import Post from '../components/post';
// import media from '../utils/media';

// const Title = styled.h3`
//   font-weight: 800;
//   font-size: 2.6rem;
//   margin: 6rem 0 0;
//
//   ${media.phone`
//     margin: 3rem 0 0;
//   `}
// `;

class BlogIndex extends Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div id="hero" className="wrap">
          <h1>{data.site.siteMetadata.title}&#39;s Thoughts</h1>
          <p>
            This is the personal blog. If you wish to read Super Nintendo
            content and game reviews, please <a href="/snes"> click here</a>
          </p>
        </div>
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
