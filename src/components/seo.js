import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <title>
        {title} | {data.site.siteMetadata.title}
      </title>
      <script
        defer
        data-domain="hepsoftwarefoundation.org"
        src="https://views.scientific-python.org/js/script.js"
      />
    </>
  );
};

export default Seo;
