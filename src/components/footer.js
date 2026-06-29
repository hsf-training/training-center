import React from "react";

// markup
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>
          Copyright 2026{" "}
          <a
            href="https://hepsoftwarefoundation.org/"
            target="_blank"
            rel="noopener"
          >
            HEP Software Foundation
          </a>{" "}
          and{" "}
          <a href="https://iris-hep.org/" target="_blank" rel="noopener">
            IRIS-HEP
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
