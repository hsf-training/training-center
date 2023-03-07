import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

// markup
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>About will be about to done as I'm about to done with first task.</p>
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;
export default AboutPage;
