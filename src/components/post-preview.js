import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

const PostPreview = ({ node }) => {
  const PostPreview = styled.div`
    h2 {
      font-size: 22px;
      font-weight: normal;
      margin: 0;
      line-height: 28px;
    }
    a {
      color: #1eabf2;
      text-decoration: none;
    }
    hr {
      margin-top: -1px;
      margin-bottom: 16px;
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    p {
      margin-bottom: 16px;
      font-size: 16px;
      line-height: 24px;
    }
  `;

  return (
    <PostPreview itemScope itemType="http://schema.org/CreativeWork">
      <h2 className="title">
        <Link to={node.fields.slug} itemProp="headline">
          {node.frontmatter.title}
        </Link>
      </h2>
      <hr />
      <p itemProp="about">{node.frontmatter.description}</p>
    </PostPreview>
  );
};

PostPreview.propTypes = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired
    }),
    excerpt: PropTypes.string.isRequired
  })
};

export default PostPreview;
