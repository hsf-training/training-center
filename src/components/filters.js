import React from "react";
import { useState, useEffect } from "react";

// components
import data from "../../data/data.yaml";
import Multiselect from "multiselect-react-dropdown";

// styles
import "../styles/filters.css";

// markup
const Filters = ({ setTuts }) => {
  // search query state
  const [query, setQuery] = useState({
    text: "",
    status: [],
    video: "all",
  });

  // multiselect options
  const [options, setOptions] = useState([
    { key: "Stable", value: "stable" },
    { key: "Beta", value: "beta" },
    { key: "Alpha", value: "alpha" },
  ]);

  // filter the tuts according to the query
  useEffect(() => {
    console.log("query", query);
    let filteredTuts = data;
    if (query.text != "") {
      filteredTuts = filteredTuts.filter((tut) => {
        return (
          tut.name.toLowerCase().includes(query.text.toLowerCase()) ||
          tut.description.toLowerCase().includes(query.text.toLowerCase())
        );
      });
    }
    if (query.status.length != 0) {
      filteredTuts = filteredTuts.filter((tut) => {
        return query.status.includes(tut.status);
      });
    }
    if (query.video != "all") {
      filteredTuts = filteredTuts.filter((tut) => {
        return tut.videos != "";
      });
    }
    setTuts(filteredTuts);
  }, [query]);

  return (
    <div className="filters">
      <h4>Filter</h4>
      <div className="container">
        {/* text */}
        <div className="text-query">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setQuery({ ...query, text: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="container">
        {/* status */}
        <div className="status-query">
          <Multiselect
            options={options}
            displayValue="key"
            placeholder="Status"
            closeIcon="cancel"
            onSelect={(e) => {
              console.log(e);
              let status = [];
              e.forEach((item) => {
                status.push(item.value);
              });
              setQuery({ ...query, status: status });
            }}
            onRemove={(e) => {
              let status = [];
              e.forEach((item) => {
                status.push(item.value);
              });
              setQuery({ ...query, status: status });
            }}
          />
        </div>
        {/* videos */}
        <div className="videos-query">
          <label htmlFor="videos">Videos</label>
          <input
            type="checkbox"
            id="videos"
            onChange={(e) => {
              if (e.target.checked) {
                setQuery({ ...query, video: "yes" });
              } else {
                setQuery({ ...query, video: "all" });
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
