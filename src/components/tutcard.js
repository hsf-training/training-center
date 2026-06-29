import React from "react";
import parse from "html-react-parser";

// styles
import "../styles/tutCard.css";

// components
import { AiFillGithub } from "react-icons/ai";
import { MdVideoLibrary } from "react-icons/md";

const images = require.context("../images");

const ExternalLinkIcon = () => (
  <svg
    aria-hidden="true"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// markup
const Tutcard = ({ tut }) => {
  const handleCardClick = () => {
    window.open(tut.webpage, "_blank", "noopener");
  };
  const handleCardKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick();
    }
  };

  const statusDescriptionMapping = {
    stable: "",
    beta: "Beta testing",
    alpha: "Early development",
  };
  const statusClassMapping = {
    stable: "",
    beta: "status beta",
    alpha: "status alpha",
  };

  return (
    <div
      className="tutCard"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleCardKeyPress}
      style={{ cursor: "pointer" }}
    >
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
        <a
          title={tut.name}
          href={tut.webpage}
          target="_blank"
          rel="noopener"
          onClick={(e) => e.stopPropagation()}
        >
          <h3>{parse(tut.name)}</h3>
        </a>

        {/* description */}
        <p>{parse(tut.description)}</p>
      </div>

      {/* GitHub and Videos links */}
      <div className="links">
        <div className="additionals">
          {tut.repository !== "" ? (
            <a
              title="GitHub Repo"
              href={tut.repository}
              target="_blank"
              rel="noopener"
              onClick={(e) => e.stopPropagation()}
            >
              <AiFillGithub height={300} />
              <span style={{ marginLeft: "8px" }}>
                GitHub
                <ExternalLinkIcon />
              </span>
            </a>
          ) : null}
        </div>
        <div className="videos">
          {tut.videos !== "" ? (
            <a
              title="Videos"
              href={tut.videos}
              target="_blank"
              rel="noopener"
              onClick={(e) => e.stopPropagation()}
            >
              <MdVideoLibrary height={300} />
              <span style={{ marginLeft: "8px" }}>
                Videos
                <ExternalLinkIcon />
              </span>
            </a>
          ) : null}
        </div>
      </div>

      <div className={statusClassMapping[tut.status]} title={tut.status}>
        {statusDescriptionMapping[tut.status]}
      </div>
    </div>
  );
};

export default Tutcard;
