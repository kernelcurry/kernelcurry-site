import React from "react";
// import { Link } from "gatsby";
// import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
// import Image from "../components/image";
// import SEO from "../components/seo";

const NotFoundPage = () => {
  // const data = useStaticQuery(graphql`
  //   query PageHomeQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <Layout>
      <div id="main">
        <div id="hero">
          <h1>NOT FOUND</h1>
          <p>Looks like you found yourself looking for something taht does not exist.</p>
        </div>
      </div>
    </Layout>
  );
};
export default NotFoundPage;

// import React from "react"
// 
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// 
// const NotFoundPage = () => (
//   <Layout>
//     <SEO title="404: Not found" />
//     <h1>NOT FOUND</h1>
//     <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
//   </Layout>
// )
// 
// export default NotFoundPage
