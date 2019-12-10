import React from "react";

import Layout from "../components/layout";
import Hero from "../components/hero";

const NotFoundPage = () => {
    const title = "404: Not Found";
    const text = "Looks like you found yourself looking for something that does not exist.";

    return (
        <Layout title={title} description={text}>
            <Hero title={title} text={text}/>
        </Layout>
    );
};

export default NotFoundPage;
