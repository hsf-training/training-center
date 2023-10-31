import React from "react";
import { StaticImage } from "gatsby-plugin-image";

// markup
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>Copyright 2023 The Astropy Developers</p>
      </div>
      <div className="container">
        <a href="/">
          {" "}
          <StaticImage
            src="../images/hsf.svg"
            height={60}
            alt="logo"
          ></StaticImage>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
