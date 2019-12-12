import React from "react";
import PropTypes from "prop-types";
import {Link} from "gatsby";
import styled from "styled-components";

const PostPreview = ({type, node}) => {

    function get_preview_image() {
        if (null !== node.frontmatter.image) {
            return node.frontmatter.image.childImageSharp.fixed.src;
        } else {
            return '';
        }
    }

    const PostPreview = styled.div`
      width: 100%;
      height: 356px;
      margin-bottom: 20px;
      box-shadow: 0 8px 6px -6px black;
      
      div.container {
        background: rgba(255, 255, 255, 0.9);
        width: 100%;
        position: absolute;
        bottom: 5%;
        text-align: left;
      }
      
      a {
        text-decoration: none;
        height: 100%;
        width: 100%;
        display: block;
        color: rgba(0, 0, 0, 1);
        position: relative;
        background: rgba(0,0,0,0) url("${get_preview_image()}") center center no-repeat;
        background-size: cover;
      }
      
      h2 {
        font-size: 22px;
        font-weight: normal;
        line-height: 28px;
        padding: 5px 0;
        margin: 0 12px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      }
      
      p {
        font-size: 16px;
        line-height: 24px;
        padding: 5px 0;
        margin: 0 12px;
        margin-bottom: 4px
      }
    `;

    return (
        <PostPreview itemScope itemType="http://schema.org/CreativeWork">
            <Link to={'/' + type + node.fields.slug} itemProp="headline">
                <div className="container">
                    <h2 className="title">{node.frontmatter.title}</h2>
                    <p itemProp="about">{node.frontmatter.description}</p>
                </div>
            </Link>
        </PostPreview>
    );
};

PostPreview.propTypes = {
    node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            image: PropTypes.shape({
                childImageSharp: PropTypes.shape({
                    fixed: PropTypes.shape({
                        src: PropTypes.string
                    })
                })
            })
        }),
        fields: PropTypes.shape({
            slug: PropTypes.string.isRequired
        }),
        excerpt: PropTypes.string.isRequired
    }),
    type: PropTypes.string.isRequired
};

export default PostPreview;
