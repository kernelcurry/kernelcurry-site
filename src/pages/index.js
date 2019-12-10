import React from "react";
// import { Link } from "gatsby";
import {useStaticQuery, graphql} from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/hero";

const IndexPage = () => {
    /**
     * Component GraphQL Query
     */
    const data = useStaticQuery(graphql`
        query PageHomeQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    /**
     * Render
     */
    return (
        <Layout title="Home">
            <Hero
                title={data.site.siteMetadata.title}
                text="My name is Michael Ian Curry and this is my simple site. Take a look at the blog and projects I am working on. If you want to contact me, Twitter is the preferred method."
            />
        </Layout>
    );
};

export default IndexPage;
