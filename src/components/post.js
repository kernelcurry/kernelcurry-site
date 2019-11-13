import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Post = ({ node }) => (
  <div itemScope itemType="http://schema.org/CreativeWork">
    <h2 className="title">
      <Link to={node.fields.slug} itemProp="headline">
        {node.frontmatter.title}
      </Link>
    </h2>
    <hr />
    <p itemProp="about">{node.frontmatter.description}</p>
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
