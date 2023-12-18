// modules
import * as React from "react";
import { useState } from "react";
import Seo from "../components/seo";

// components
import data from "../../data/data.yaml";
import Layout from "../components/layout";
import Tutcard from "../components/tutcard";

// styles
import "../styles/style.css";
import Filter from "../components/filters";

// markup
const IndexPage = () => {
  // tuts state
  const [tuts, setTuts] = useState(data);

  return (
    <Layout pageTitle="Home Page">
      {/* heading */}
      <h2 id="title">TUTORIALS</h2>

      {/* filter */}
      <Filter setTuts={setTuts} />

      {/* list of tuts */}
      <div className="tuts-container">
        {tuts.length === 0 ? (
          // if no tuts found
          <div className="no-tuts">
            <p>No Tutorials Found.</p>
          </div>
        ) : (
          // if tuts found
          tuts.map((tut, key) => {
            return (
              <div className="tutCard-container" key={key}>
                <Tutcard tut={tut} />
              </div>
            );
          })
        )}
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
