import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

// styles
import "../styles/globalStyle.css";
import "../styles/layout.css";

// components
import Footer from "./footer";

// markup
const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <header>
        <title>{pageTitle}</title>
      </header>
      {/* navbar */}
      <nav>
        <div className="container">
          <a title="HSF Training Center" href="/">
            <StaticImage
              className="img"
              src="../images/hsf.svg"
              height={30}
              style={{ position: "absolute", top: "10px", left: "30px" }}
              alt="hsf logo"
            ></StaticImage>
            <StaticImage
              className="img"
              src="../images/iris-hep.svg"
              height={200}
              style={{ position: "absolute", top: "-22px", left: "50px" }}
              alt="iris hep logo"
            ></StaticImage>
          </a>
        </div>
        <div className="container">
          <ul className="navLinks">
            <li className="navLinkItem">
              <Link to="/" title="Home" className="navLinkText">
                Home
              </Link>
            </li>
            <li className="navLinkItem">
              <a
                href="https://hepsoftwarefoundation.org/"
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
