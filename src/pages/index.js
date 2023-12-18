// modules
import * as React from "react";
import { useState } from "react";
import Seo from "../components/seo";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
      <Tabs>
        <TabList>
          <Tab>Curriculum</Tab>
          <Tab>All Tutorials</Tab>
        </TabList>

        <TabPanel>Coming soon.</TabPanel>

        <TabPanel>
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
        </TabPanel>
      </Tabs>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
