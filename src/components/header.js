import React from "react";
import {Link, useStaticQuery, graphql} from "gatsby";
import styled from "styled-components";

/**
 * Component GraphQL Query
 */

const SiteHeader = () => {
    const data = useStaticQuery(graphql`
        query SiteHeaderQuery {
            site {
                siteMetadata {
                    navigation {
                        main {
                            text
                            path
                        }
                    }
                    social {
                        twitter
                        github
                        linkedin
                    }
                }
            }
        }
    `);
    const nav = data.site.siteMetadata.navigation;
    const social = data.site.siteMetadata.social;

    /**
     * Component CSS
     */

    const Header = styled.header`
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      padding: 0 36px;
      height: 88px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    `;

    const BrandContainer = styled.div`
      margin-right: 52px;
  
      a {
        background: none;
        text-indent: -9999px;
        width: 70px;
        line-height: 11px;
        background-repeat: no-repeat;
        text-decoration: none;
        color: black;
        font-size: 18px;
        font-weight: 100;
      }
    `;

    const PageNavContainer = styled.nav`
      padding-left: 52px;
      border-left: 1px solid rgba(0, 0, 0, 0.15);
  
      ul {
        display: flex;
        align-items: center;
        margin: 0;
        padding-inline-start: 0;
      }
  
      li {
        list-style: none;
        font-size: 16px;
        font-weight: 500;
        margin-right: 40px;
      }
  
      a {
        color: #000;
        text-decoration: none;
        display: inline-block;
      }
    `;

    const SocialNavContainer = styled.nav`
      margin-left: auto;
      font-size: 14px;
  
      ul {
        display: flex;
        align-items: center;
        margin: 0;
      }
  
      li {
        list-style: none;
      }
  
      a {
        color: rgba(0, 0, 0, 0.7);
        display: inline-block;
        text-decoration: none;
        line-height: 28px;
        padding: 0 20px;
      }
    `;

    /**
     * Render
     */

    return (
        <Header>
            <BrandContainer>
                <Link to="/">KernelCurry</Link>
            </BrandContainer>
            <PageNavContainer>
                <ul>
                    {nav.main.map(({text, path}) => {
                        return (
                            <li key={path}>
                                <Link to={path}>{text}</Link>
                            </li>
                        );
                    })}
                </ul>
            </PageNavContainer>
            <SocialNavContainer>
                <ul>
                    <li>
                        <a
                            href={"https://twitter.com/" + social.twitter}
                            rel="nofollow noopener noreferrer"
                            target="_blank"
                        >
                            <i className="fa fa-twitter"/>
                        </a>
                    </li>
                    <li>
                        <a
                            href={"https://github.com/" + social.github}
                            rel="nofollow noopener noreferrer"
                            target="_blank"
                        >
                            <i className="fa fa-github"/>
                        </a>
                    </li>
                    <li>
                        <a
                            href={"https://www.linkedin.com/in/" + social.linkedin}
                            rel="nofollow noopener noreferrer"
                            target="_blank"
                        >
                            <i className="fa fa-linkedin"/>
                        </a>
                    </li>
                </ul>
            </SocialNavContainer>
        </Header>
    );
};

export default SiteHeader;
