import React from "react";
import { useState, useEffect } from "react";

// components
import data from "../../data/data.yaml";
import Select from "react-select";

// styles
import "../styles/filters.css";

// markup
const Filters = ({ setTuts }) => {
  // Define the options displayed in the filter UI elements
  // ------------------------------------------------------

  // status filter options
  const statusFilter = [
    { label: "Stable", value: "stable", isDefault: true },
    { label: "Beta", value: "beta", isDefault: true },
    { label: "Alpha", value: "alpha" },
  ];

  // level filter options
  const levelFilter = [
    { label: "Beginner", value: "beginner", isDefault: true },
    { label: "Advanced", value: "advanced", isDefault: true },
  ];
  // language filter options
  // We set the language fields to lowercase to avoid duplicates
  data.forEach((tut) => {
    if (tut.language) {
      tut.language.forEach((lang) => lang.toLowerCase());
    }
  });
  const allLanguages = data.reduce((acc, tut) => acc.concat(tut.language), []);
  let uniqueLanguages = [...new Set(allLanguages)].map((lang) => ({
    label: lang.charAt(0).toUpperCase() + lang.slice(1),
    value: lang,
  }));
  const languageFilter = uniqueLanguages;

  // search query state
  // IMPORTANT: Should match isDefault values in filter options
  const [query, setQuery] = useState({
    text: "",
    status: statusFilter
      .filter((option) => option.isDefault)
      .map((e) => e.value),
    language: [],
    video: false,
    level: levelFilter.filter((option) => option.isDefault).map((e) => e.value),
  });
  console.log(query);

  // Given a query, filter the tutorials and update the state
  // --------------------------------------------------------
  useEffect(() => {
    let filteredTuts = data;

    if (query.text !== "") {
      filteredTuts = filteredTuts.filter((tut) => {
        return (
          tut.name.toLowerCase().includes(query.text.toLowerCase()) ||
          tut.description.toLowerCase().includes(query.text.toLowerCase())
        );
      });
    }

    if (query.status.length !== 0) {
      filteredTuts = filteredTuts.filter((tut) => {
        return query.status.includes(tut.status);
      });
    }

    if (query.language.length !== 0) {
      let just = [];
      filteredTuts.forEach((tut) => {
        query.language.forEach((qLang) => {
          if (tut.language && tut.language.includes(qLang)) {
            return just.push(tut);
          } else if (qLang === "other" && !tut.language) {
            return just.push(tut);
          }
        });
      });
      filteredTuts = just;
    }

    if (query.video !== false) {
      filteredTuts = filteredTuts.filter((tut) => {
        return tut.videos !== "";
      });
    }

    if (query.level.length !== 0) {
      let just = [];
      filteredTuts.forEach((tut) => {
        query.level.forEach((qlevel) => {
          if (tut.level === undefined || tut.level.includes(qlevel)) {
            return just.push(tut);
          }
        });
      });
      filteredTuts = just;
    }

    // This should be last: Filter any duplicates that
    // can be introduced by the filters above
    filteredTuts = [...new Set(filteredTuts)];

    setTuts(filteredTuts);
  }, [query, setTuts]);

  // Return HTML control elements
  // ----------------------------

  return (
    <div className="filters">
      <div className="container">
        {/* global-input */}
        <div className="text-input" title="Search Anything">
          <input
            type="text"
            placeholder="Search Anything..."
            onChange={(e) => {
              setQuery({ ...query, text: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="container">
        <div className="container">
          {/* level-input */}
          <div className="level-input" title="Level">
            <Select
              className="select"
              closeMenuOnSelect={false}
              isMulti
              options={levelFilter}
              isClearable={true}
              placeholder="Level..."
              defaultValue={levelFilter.filter((option) => option.isDefault)}
              onChange={(e) => {
                setQuery({ ...query, level: e.map((e) => e.value) });
              }}
            />
          </div>

          {/* status-input */}
          <div className="status-input" title="Status">
            <Select
              className="select"
              closeMenuOnSelect={false}
              isMulti
              options={statusFilter}
              isClearable={true}
              placeholder="Status..."
              defaultValue={statusFilter.filter((option) => option.isDefault)}
              onChange={(e) => {
                setQuery({ ...query, status: e.map((e) => e.value) });
              }}
            />
          </div>

          {/* language-input */}
          <div className="language-input" title="Language">
            <Select
              className="select"
              closeMenuOnSelect={false}
              isMulti
              options={languageFilter}
              isClearable={true}
              placeholder="Language..."
              onChange={(e) => {
                setQuery({ ...query, language: e.map((e) => e.value) });
              }}
            />
          </div>
        </div>

        {/* videos-input */}
        <div className="videos-input" title="Videos">
          <label htmlFor="videos">Videos</label>
          <input
            type="checkbox"
            id="videos"
            onChange={(e) => {
              if (e.target.checked) {
                setQuery({ ...query, video: true });
              } else {
                setQuery({ ...query, video: false });
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
