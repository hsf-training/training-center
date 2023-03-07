import React from "react";
import ReactHtmlParser from "react-html-parser";
import { StaticImage } from "gatsby-plugin-image";

// components
import { AiFillGithub } from "react-icons/ai";
import { MdVideoLibrary } from "react-icons/md";

// markup
const Tutcard = ({ tut }) => {
  return (
    <div className="tutCard">
      <div className="additionals">
        {tut.repository != "" ? (
          <a
            title="GitHub Repo"
            target="_blank"
            id="gitHubLink"
            href={tut.repository}
          >
            <AiFillGithub className="gitHubIcon" height={300} />
          </a>
        ) : null}
        {tut.videos != "" ? (
          <a
            title="GitHub Repo"
            target="_blank"
            id="gitHubLink"
            href={tut.videos}
          >
            <MdVideoLibrary className="gitHubIcon" height={300} />
          </a>
        ) : null}
      </div>

      <div className="tutCardImg">
        <StaticImage
          className="img"
          src="../images/clifford.jpg"
          height={300}
          alt={tut.name}
        ></StaticImage>
      </div>
      <div className="tutCardText">
        <a title={tut.name} target="_blank" href={tut.webpage}>
          <h3>{ReactHtmlParser(tut.name)}</h3>
        </a>
        <p>{ReactHtmlParser(tut.description)}</p>
      </div>
    </div>
  );
};

export default Tutcard;
