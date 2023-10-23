import React from "react";
import { useState, useEffect } from "react";

// components
import data from "../../data/data.yaml";
import curicula_data from "../../data/curricula.yaml";
import Select from "react-select";

// styles
import "../styles/filters.css";

// markup
const Filters = ({ setTuts }) => {
  // curicula state
  const [curicula, setCuricula] = useState(curicula_data);

  // search query state
  const [query, setQuery] = useState({
    text: "",
    status: [],
    video: false,
    curiculum: {},
  });

  // curicula filter options
  const [curiculaFilter, setCuriculaFilter] = useState(
    curicula.map((curiculum) => {
      return { label: curiculum.name, value: curiculum.name };
    })
  );

  // status filter options
  const [statusFilter, setStatusFilter] = useState([
    { label: "Stable", value: "stable", isDefault: true },
    { label: "Beta", value: "beta" },
    { label: "Alpha", value: "alpha" },
  ]);


  // filter the tuts data on every update of query state
  useEffect(() => {
    // console.log("query", query);

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

    if (query.video !== false) {
      filteredTuts = filteredTuts.filter((tut) => {
        return tut.videos !== "";
      });
    }

    if (query.curiculum.name !== undefined) {
      let just = [];
      filteredTuts.forEach((tut) => {
        query.curiculum.tuts.forEach((idtut) => {
          if (idtut.id === tut.id) {
            return just.push(tut);
          }
        });
      });
      filteredTuts = just;
    }

    setTuts(filteredTuts);
  }, [query]);

  return (
    <div className="filters">
      <h4>Filter</h4>
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
          {/* curicula-input */}
          <div className="curicula-input" title="Curicula">
            <Select
              className="select"
              options={curiculaFilter}
              isClearable={true}
              placeholder="Curicula..."
              onChange={(e) => {
                if (e === null) {
                  setQuery({ ...query, curiculum: {} });
                } else {
                  const curiculum = curicula.find((cur) => {
                    return cur.name === e.value;
                  });
                  setQuery({ ...query, curiculum: curiculum });
                }
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
              defaultValue={statusFilter.find((option) => option.isDefault)}
              onChange={(e) => {
                setQuery({ ...query, status: e.map((e) => e.value) });
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
