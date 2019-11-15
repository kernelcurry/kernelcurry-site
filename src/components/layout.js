/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Header from "./header";
import Footer from "./footer";
import SEO from "./seo";

const Layout = ({ children, title, description }) => {
  /**
   * Component CSS
   */

  const MainContainer = styled.main`
    margin: auto;
    max-width: 1128px;
  `;

  console.log(children);

  /**
   * Render
   */
  return (
    <>
      <Header />
      <SEO title={title} description={description} />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default Layout;
