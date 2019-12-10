import React from "react";
import {graphql} from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";

class BlogPostTemplate extends React.Component {
    render() {
        const BlogContainer = styled.div`
          margin-left: auto;
          margin-right: auto;
        `;

        const BlogHero = styled.div`
          padding-top: 48px;
          padding-bottom: 56px;
          text-align: center;
    
          h1 {
            max-width: 880px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 12px;
            font-size: 64px;
            line-height: 72px;
            font-weight: 900;
          }
          blockquote {
            padding-left: 1rem;
            font-style: italic;
            color: rgba(49, 52, 57, 0.65);
            margin-bottom: 16px;
          }
        `;

        const BlogMeta = styled.span`
          font-size: 87.5%;
    
          i {
            margin-left: 15px;
            margin-right: 5px;
          }
        `;

        const BlogContentContainer = styled.div`
          max-width: 740px;
          margin: auto;
          font-size: 18px;
          line-height: 32px;
          margin-bottom: 40px;
    
          p {
            margin-bottom: 16px;
          }
    
          figure {
            margin-bottom: 16px;
            img {
              height: auto;
              max-width: 100%;
            }
    
            figcaption {
              position: relative;
              font-size: 87.5%;
              opacity: 0.6;
              text-align: center;
            }
          }
    
          .embedVideo-container {
            line-height: 0;
          }
    
          figcaption {
            position: relative;
            font-size: 87.5%;
            opacity: 0.6;
            text-align: center;
          }
    
          h2 {
            margin-top: 24px;
            color: #222;
            font-size: 36px;
            line-height: 40px;
            font-weight: 700;
            text-rendering: optimizeLegibility;
            margin-bottom: 16px;
          }
    
          h3 {
            margin-top: 24px;
            font-size: 24px;
            line-height: 32px;
            margin-bottom: 16px;
          }
    
          h4 {
            margin-top: 24px;
            font-size: 21px;
            line-height: 32px;
            margin-bottom: 16px;
          }
    
          /**
           * Add back the container background-color, border-radius, padding, margin
           * and overflow that we removed from <pre>.
           */
          .gatsby-highlight {
            font-size: 87.5%;
          }
    
          ol {
            display: block;
            list-style-type: decimal;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            padding-inline-start: 26px;
          }
    
          ul {
            display: block;
            list-style-type: disc;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            padding-inline-start: 26px;
          }
    
          ol ul {
            list-style-type: circle;
          }
    
          address,
          blockquote,
          dl,
          fieldset,
          figure,
          form,
          hr,
          ol,
          p,
          pre,
          table,
          ul {
            margin-bottom: 16px;
          }
    
          ol ol,
          ol ul,
          ul ol,
          ul ul {
            margin: 0 0 0 24px;
          }
    
          ol p,
          ul p,
          li p {
            margin: 0;
          }
        `;

        const post = this.props.data.markdownRemark;
        // const siteTitle = this.props.data.site.siteMetadata.title;
        // const author = this.props.data.site.siteMetadata.author;
        // const { previous, next } = this.props.pageContext;

        return (
            <Layout title={post.frontmatter.title}>
                <BlogContainer itemScope itemType="http://schema.org/BlogPosting">
                    <BlogHero>
                        <h1 itemProp="headline">{post.frontmatter.title}</h1>
                        <blockquote itemProp="description">
                            {post.frontmatter.description}
                        </blockquote>
                        <BlogMeta>
                            <span>
                            <i className="fa fa-clock-o" aria-hidden="true"/>
                            </span>
                            <span>{post.fields.readingTime.text}</span>
                        </BlogMeta>
                        <BlogMeta>
                            <span>
                            <i className="fa fa-pencil" aria-hidden="true"/>
                            </span>
                            <time dateTime="{post.frontmatter.date}">
                                Published: {post.frontmatter.date}
                            </time>
                        </BlogMeta>
                    </BlogHero>
                    <BlogContentContainer dangerouslySetInnerHTML={{__html: post.html}}/>
                </BlogContainer>
            </Layout>
        );
    }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt
            html
            fields {
                readingTime {
                    text
                }
            }
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
        }
    }
`;
