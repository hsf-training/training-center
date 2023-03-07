import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

// styles
import "../styles/globalStyle.css";
import "../styles/layout.css";

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
          <StaticImage
            className="img"
            src="../images/logo.png"
            height={30}
            alt="logo"
          ></StaticImage>
        </div>
        <div className="container">
          <ul className="navLinks">
            <li className="navLinkItem">
              <Link to="/" className="navLinkText">
                Home
              </Link>
            </li>
            <li className="navLinkItem">
              <Link to="/about" className="navLinkText">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* hero div */}
      <div className="hero">
        <h2>LERN ASTROPY</h2>
        <p>
          Learn how to use Python for astronomy through tutorials and guides
          that cover Astropy and other packages in the astronomy Python
          ecosystem.
        </p>
      </div>

      {/* main */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
