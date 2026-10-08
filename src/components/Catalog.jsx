// modules
import * as React from "react";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// components
import TutCard from "./TutCard";
import Filters, { defaultQuery, filterTutorials } from "./Filters";

// styles
import "../styles/style.css";

// markup
const Catalog = ({ tutorials, curriculaGroups }) => {
  // search query state
  const [query, setQuery] = useState(defaultQuery);
  const tuts = filterTutorials(tutorials, query);

  return (
    <Tabs>
      <TabList>
        <Tab>Curriculum</Tab>
        <Tab>All Tutorials</Tab>
      </TabList>

      <TabPanel>
        <div className="tuts-container">
          {curriculaGroups.map((group, key) => {
            return (
              <div className="curriculumGroup-container" key={key}>
                {key === 0 ? "" : <br />}
                <h3>{group.name}</h3>
                {group.description}
                <div className="tuts-container">
                  {group.modules.map((id, key) => {
                    // don't use tuts here, the filters might have modified it
                    const tut = tutorials.find((x) => x.id === id);
                    return (
                      <div className="tutCard-container" key={key}>
                        <TutCard tut={tut} />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </TabPanel>

      <TabPanel>
        {/* filter */}
        <Filters tutorials={tutorials} query={query} setQuery={setQuery} />

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
                  <TutCard tut={tut} />
                </div>
              );
            })
          )}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default Catalog;
