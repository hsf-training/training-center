// modules
import * as React from "react";
import { useState } from "react";

import Seo from "../components/seo";

// coponents
import data from "../../data/data.yaml";
import Layout from "../components/layout";
import Tutcard from "../components/tutcard";

// styles
import "../styles/style.css";

// markup
const IndexPage = () => {
  // tuts state
  const [tuts, setTuts] = useState(data);
  console.log(tuts);

  return (
    <Layout pageTitle="Home Page">
      <h2 id="title">TUTORIALS</h2>
      {/* list of tuts */}
      {tuts.map((tut, id) => {
        return <Tutcard tut={tut} key={id} />;
      })}
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
