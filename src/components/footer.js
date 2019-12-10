import React from "react";
import {Link, useStaticQuery, graphql} from "gatsby";
import styled from "styled-components";

const SiteFooter = () => {
    /**
     * Component GraphQL Query
     */
    const data = useStaticQuery(graphql`
        query SiteFooterQuery {
            site {
                siteMetadata {
                    navigation {
                        main {
                            text
                            path
                        }
                    }
                }
            }
        }
    `);

    /**
     * Component CSS
     */

    const Footer = styled.footer`
      display: flex;
      border-top: 1px solid #eee;
      margin: 104px 0;
      padding: 0 28px;
      padding-top: 24px;
      font-size: 13px;
      color: rgba(0, 0, 0, 0.5);
    `;

    const FooterNav = styled.nav`
      order: 2;
      margin-left: auto;
  
      ul {
        display: flex;
        margin: 0;
        text-decoration: none;
      }
  
      li {
        margin-left: 20px;
        list-style: none;
      }
  
      a {
        color: rgba(0, 0, 0, 0.65);
        text-decoration: none;
      }
    `;

    /**
     * Render
     */

    return (
        <Footer>
            <FooterNav>
                <ul>
                    <li>
                        <span>KernelCurry</span>
                    </li>
                    {data.site.siteMetadata.navigation.main.map(({text, path}) => {
                        return (
                            <li key={path}>
                                <Link to={path}>{text}</Link>
                            </li>
                        );
                    })}
                </ul>
            </FooterNav>
            <p>
                KernelCurry &copy;{" "}
                <a
                    href="http://curryisms.com/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                >
                    Copywrite
                </a>{" "}
                {new Date().getFullYear()}
            </p>
        </Footer>
    );
};

export default SiteFooter;
