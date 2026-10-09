import React from "react";

// components
import Select from "react-select";
import { stripTags } from "./TutCard";

// styles
import "../styles/filters.css";

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

// default search query, matching the isDefault values in filter options
export const defaultQuery = {
  text: "",
  status: statusFilter.filter((option) => option.isDefault).map((e) => e.value),
  language: [],
  video: false,
  level: levelFilter.filter((option) => option.isDefault).map((e) => e.value),
};

// Given a query, return the filtered tutorials
// --------------------------------------------
export const filterTutorials = (tutorials, query) => {
  let filteredTuts = tutorials;

  if (query.text !== "") {
    const text = query.text.toLowerCase();
    filteredTuts = filteredTuts.filter((tut) => {
      return (
        stripTags(tut.name).toLowerCase().includes(text) ||
        stripTags(tut.description).toLowerCase().includes(text)
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

  return filteredTuts;
};

// markup
const Filters = ({ tutorials, query, setQuery }) => {
  // language filter options
  const allLanguages = tutorials.reduce(
    (acc, tut) => acc.concat(tut.language || []),
    [],
  );
  const languageFilter = [...new Set(allLanguages)].map((lang) => ({
    label: lang.charAt(0).toUpperCase() + lang.slice(1),
    value: lang,
  }));

  // Return HTML control elements
  // ----------------------------

  return (
    <div className="filters">
      <div className="container">
        {/* global-input */}
        <div className="text-input" title="Search Anything">
          <input
            type="text"
            aria-label="Search tutorials"
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
              instanceId="level"
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
              instanceId="status"
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
              instanceId="language"
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
