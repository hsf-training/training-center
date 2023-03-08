import React from "react";
import ReactHtmlParser from "react-html-parser";
import { StaticImage } from "gatsby-plugin-image";

// styles
import "../styles/tutCard.css";

// components
import { AiFillGithub } from "react-icons/ai";
import { MdVideoLibrary } from "react-icons/md";

// markup
const Tutcard = ({ tut }) => {
  return (
    <div className="tutCard">
      {/* GitHub and Videos links */}
      <div className="additionals">
        {tut.repository !== "" ? (
          <a title="GitHub Repo" href={tut.repository}>
            <AiFillGithub height={300} />
          </a>
        ) : null}
        {tut.videos !== "" ? (
          <a title="Videos" href={tut.videos}>
            <MdVideoLibrary height={300} />
          </a>
        ) : null}
      </div>

      {/* hero-image */}
      <div className="tutCardImg">
        <StaticImage
          className="hero-image"
          src="../images/clifford.jpg"
          height={300}
          alt={tut.name}
        ></StaticImage>
      </div>

      {/* texts */}
      <div className="tutCardText">
        {/* title */}
        <a title={tut.name} href={tut.webpage}>
          <h3>{ReactHtmlParser(tut.name)}</h3>
        </a>

        {/* description */}
        <p>{ReactHtmlParser(tut.description)}</p>
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
