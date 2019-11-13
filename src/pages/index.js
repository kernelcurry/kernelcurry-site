import React from "react";
// import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
// import Image from "../components/image";
// import SEO from "../components/seo";

const IndexPage = () => {
const data = useStaticQuery(graphql`
    query PageHomeQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Layout>
      <div id="main">
        <div id="hero">
          <h1>{data.site.siteMetadata.title}</h1>
          <p>
            My name is Michael Ian Curry and this is my simple site. Take a look
            at the blog and projects I am working on. If you want to contact me,
            Twitter is the preferred method.
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default IndexPage;

// <SEO title="Home" />;
// <h1>Hi people</h1>
// <p>Welcome to your new Gatsby site.</p>
// <p>Now go build something great.</p>
// <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//   <Image />
// </div>
// <Link to="/page-2/">Go to page 2</Link>
