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

const Layout = ({ children }) => {
  /**
   * Component CSS
   */

  const MainContainer = styled.main`
    margin: auto;
    max-width: 1128px;
  `;

  /**
   * Render
   */
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
