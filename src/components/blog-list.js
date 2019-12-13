import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import BlogPreview from "./blog-preview";

const BlogList = ({posts, type}) => {
    const ListContainer = styled.ul`
      list-style: none;
      margin: auto;
      margin-top: 48px;
      margin-bottom: 128px;
      max-width: 680px;
      text-align: center;
    `;

    /**
     * Render
     */

    return (
        <ListContainer>
            {posts.map(({node}) => {
                return <BlogPreview key={node.id} node={node} type={type}/>;
            })}
        </ListContainer>
    );
};

BlogList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    type: PropTypes.string.isRequired
};

export default BlogList;
