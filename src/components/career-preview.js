import React from "react";
import PropTypes from "prop-types";
import {Link} from "gatsby";
import styled from "styled-components";

const CareerPreview = ({type, node}) => {

    const PostPreview = styled.div`
      width: 100%;
      margin-bottom: 60px;
      text-align: left;
      
      div.container {
        width: 100%;
      }
      
      a {
        text-decoration: none;
        font-size: 87.5%;
        margin-top: 10px;
        float: right;
      }
      
      img.logo {
        float: right;
        height: 22px;
      }
      
      h2 {
        font-size: 22px;
        font-weight: normal;
        line-height: 28px;
        padding: 0;
        margin: 0;
        margin-bottom: 6px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      }
      
      p {
        font-size: 16px;
        line-height: 24px;
        padding: 5px 0;
        margin: 0;
      }
    `;

    const Meta = styled.div`
      font-size: 87.5%;
      
      span.container {
          font-size: 87.5%;
      }
      
      span.right {
        float: right;
      }

      i {
        margin-left: 0;
        margin-right: 6px;
      }
    `;

    return (
        <PostPreview itemScope itemType="http://schema.org/CreativeWork">
            <div>
                <img className="logo" src={node.frontmatter.image.childImageSharp.fluid.src} alt={"logo"}/>
                <h2 className="title">{node.frontmatter.title}</h2>
            </div>
            <div>
                <Meta>
                    <span className="container right">
                        <i className="fa fa-location-arrow" aria-hidden="true"/>
                        {node.frontmatter.location}
                    </span>
                    <span className="container">
                        <i className="fa fa-calendar" aria-hidden="true"/>
                        <time dateTime="{node.frontmatter.date}">
                            {node.frontmatter.date_start}
                        </time>
                        &nbsp;-&nbsp;
                        <time dateTime="{node.frontmatter.date}">
                            {node.frontmatter.date_stop}
                        </time>
                    </span>
                </Meta>
            </div>
            <p itemProp="about">
                {node.frontmatter.description}
                <Link to={'/' + type + node.fields.slug} itemProp="headline">
                    <i className="fa fa-book" aria-hidden="true"/> Detailed Information
                </Link>
            </p>
        </PostPreview>
    );
};

CareerPreview.propTypes = {
    node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            date_start: PropTypes.string.isRequired,
            date_stop: PropTypes.string.isRequired,
            image: PropTypes.shape({
                childImageSharp: PropTypes.shape({
                    fluid: PropTypes.shape({
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

export default CareerPreview;
