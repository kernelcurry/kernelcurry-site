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

    const heroText = () => {
        return (
            <>
                <b>Actively seeking new opportunities</b> <br/>Seattle, WA - info@kernelcurry.com
            </>
        );
    };

    /**
     * Render
     */
    return (
        <Layout title="Home">
            <Hero
                title={data.site.siteMetadata.title}
                text={heroText()}
            />
        </Layout>
    );
};

export default IndexPage;
