import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";

const AboutPage = () => (
    <Layout>
        <SEO title="about" />
            <h1>I'm Nabekura</h1>
            <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default AboutPage