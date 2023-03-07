// modules
import * as React from "react";
import { useState } from "react";
import Seo from "../components/seo";

// coponents
import data from "../../data/data.yaml";
import Layout from "../components/layout";
import Tutcard from "../components/tutCard";

// styles
import "../styles/style.css";

// markup
const IndexPage = () => {
  // tuts state
  const [tuts, setTuts] = useState(data);
  // console.log(tuts);

  return (
    <Layout pageTitle="Home Page">
      <h2 id="title">TUTORIALS</h2>
      {/* Filter */}
      {/* <div className="filters-container">
        <div className="filter">
          <section>
            <h3>Filter by Status</h3>
            <div className="filter-options"></div>
          </section>
        </div>
      </div> */}
      {/* list of tuts */}
      {tuts.map((tut, key) => {
        return (
          <div className="tutCard-container" key={key}>
            <Tutcard tut={tut} />
          </div>
        );
      })}
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
