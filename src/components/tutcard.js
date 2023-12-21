import React from "react";
import parse from "html-react-parser";

// styles
import "../styles/tutCard.css";

// components
import { AiFillGithub } from "react-icons/ai";
import { MdVideoLibrary } from "react-icons/md";

const images = require.context("../images");

// markup
const Tutcard = ({ tut }) => {
  const handleCardClick = () => {
    window.location.href = tut.webpage;
  }
  const handleCardKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCardClick();
    }
  }
  return (
    <div 
      className="tutCard"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleCardKeyPress}
      style={{ cursor: 'pointer' }}
    >
      {/* GitHub and Videos links */}
      <div className="additionals">
        {tut.repository !== "" ? (
          <a title="GitHub Repo" href={tut.repository}>
            <AiFillGithub height={300} />
            <span style={{ marginLeft: "8px" }}>GitHub</span>
          </a>
        ) : null}
      </div>
      <div className="videos">
        {tut.videos !== "" ? (
          <a title="Videos" href={tut.videos}>
            <MdVideoLibrary height={300} />
            <span style={{ marginLeft: "8px" }}>Videos</span>
          </a>
        ) : null}
      </div>

      {/* hero-image */}
      <div className="tutCardImg">
        <img
          className="hero-image"
          src={images("./" + (tut.image ? tut.image : "hsf.svg")).default}
          height={300}
          alt={tut.name}
        ></img>
      </div>

      {/* texts */}
      <div className="tutCardText">
        {/* title */}
        <a title={tut.name} href={tut.webpage}>
          <h3>{parse(tut.name)}</h3>
        </a>

        {/* description */}
        <p>{parse(tut.description)}</p>
      </div>
      <div
        className={`status ${
          tut.status === "stable"
            ? "stable"
            : tut.status === "beta"
              ? "beta"
              : "alpha"
        }`}
        title={
          tut.status === "stable"
            ? "stable"
            : tut.status === "beta"
              ? "beta"
              : "alpha"
        }
      ></div>
    </div>
  );
};

export default Tutcard;
