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
        <h3>{ReactHtmlParser(tut.name)}</h3>

        {/* description */}
        <p>{ReactHtmlParser(tut.description)}</p>
        
        {/* additional links */} 
        <p>
        <a title="Learn" href={tut.webpage}>
          Learn!
        </a>
        {tut.videos !== "" ? (
          <a title="Videos" href={tut.videos}>
            <MdVideoLibrary height={300} /> Watch!
          </a>
        ) : null}
        {tut.repository !== "" ? (
          <a title="GitHub Repo" href={tut.repository}>
            <AiFillGithub height={300} /> Contribute!
          </a>
        ) : null}
        </p>
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
