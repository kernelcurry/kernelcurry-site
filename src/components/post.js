import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Post = ({ node }) => (
  <div itemscope itemtype="http://schema.org/CreativeWork">
    <h2 class="title">
      <Link to={node.fields.slug} itemprop="headline">
        {node.frontmatter.title}
      </Link>
    </h2>
    <hr />
    <p itemprop="about">{node.frontmatter.description}</p>
  </div>
);

Post.propTypes = {
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

export default Post;
