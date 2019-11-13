/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

/**
 * CSS Files
 */
import "../static/css/font.css";
import "../static/css/kube.min.css";
import "../static/css/kube.legenda.css";
import "../static/css/highlight.css";
import "../static/css/master.css";
import "../static/css/font-awesome.css";
import "../static/css/custom.css";

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
