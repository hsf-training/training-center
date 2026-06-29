import * as React from "react";
import { Link } from "gatsby";

const images = require.context("../images");

// styles
import "../styles/globalStyle.css";
import "../styles/layout.css";

// components
import Footer from "./footer";

// markup
const Layout = ({ children }) => {
  return (
    <>
      {/* navbar */}
      <nav>
        <div className="container">
          <Link
            title="HSF Training Center"
            to="/"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <img
              src={images("./hsf.svg").default}
              height={46}
              alt="hsf logo"
            />
            <img
              src={images("./iris-hep.svg").default}
              height={46}
              alt="iris hep logo"
            />
          </Link>
        </div>
        <div className="container">
          <ul className="navLinks">
            <li className="navLinkItem">
              <Link to="/" title="Home" className="navLinkText">
                Home
              </Link>
            </li>
            <li className="navLinkItem">
              <Link to="/contribute" title="Contribute" className="navLinkText">
                Contribute
              </Link>
            </li>
            <li className="navLinkItem">
              <a
                href="https://hepsoftwarefoundation.org/activities/training.html"
                target="_blank"
                rel="noopener noreferrer"
                title="About"
                className="navLinkText"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* hero div */}
      <div className="hero">
        <h2>HSF Training Center</h2>
        <p>
          Training and educational material for the High Energy Physics
          community.
        </p>
      </div>

      {/* main */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
