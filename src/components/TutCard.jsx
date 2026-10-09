import React from "react";

// styles
import "../styles/tutCard.css";

// Names and descriptions may contain HTML (e.g. <code>), which can't be used
// in attributes like alt or title
export const stripTags = (html) => html.replace(/<[^>]*>/g, "");

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

// Icons from Ant Design (repository) and Material Design (videos)
const RepositoryIcon = () => (
  <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
    />
  </svg>
);

const VideoIcon = () => (
  <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8 12.5v-9l6 4.5z"
    />
  </svg>
);

const repositoryLabel = (url) => {
  const host = new URL(url).hostname;
  if (host === "github.com") return "GitHub";
  if (host === "gitlab.com" || host.startsWith("gitlab.")) return "GitLab";
  return "Repository";
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

// markup
const TutCard = ({ tut }) => {
  const name = stripTags(tut.name);

  return (
    <div className="tutCard">
      {/* hero-image */}
      <div className="tutCardImg">
        <img className="hero-image" src={tut.imageSrc} alt={name} />
      </div>

      {/* texts */}
      <div className="tutCardText">
        {/* title, its link covers the whole card */}
        <a
          className="tutCardLink"
          title={name}
          href={tut.webpage}
          target="_blank"
          rel="noopener"
        >
          <h3 dangerouslySetInnerHTML={{ __html: tut.name }} />
        </a>

        {/* description */}
        <p dangerouslySetInnerHTML={{ __html: tut.description }} />
      </div>

      {/* repository and videos links */}
      <div className="links">
        <div className="additionals">
          {tut.repository !== "" ? (
            <a
              title="Repository"
              href={tut.repository}
              target="_blank"
              rel="noopener"
            >
              <RepositoryIcon />
              <span style={{ marginLeft: "8px" }}>
                {repositoryLabel(tut.repository)}
                <ExternalLinkIcon />
              </span>
            </a>
          ) : null}
        </div>
        <div className="videos">
          {tut.videos !== "" ? (
            <a title="Videos" href={tut.videos} target="_blank" rel="noopener">
              <VideoIcon />
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

export default TutCard;
