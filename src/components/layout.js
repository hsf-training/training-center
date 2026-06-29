import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

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
          <Link title="HSF Training Center" to="/">
            {/* Remote images work better than local ones because redirection sometimes causes them to not show up */}
            <StaticImage
              className="img"
              src="https://raw.githubusercontent.com/HSF/hsf.github.io/refs/heads/main/images/HSF-logo/hsf-logo-no-text.png"
              height={40}
              style={{ position: "absolute", top: "5px", left: "30px" }}
              alt="hsf logo"
            ></StaticImage>
            <StaticImage
              className="img"
              src="https://raw.githubusercontent.com/iris-hep/iris-hep.github.io/refs/heads/master/assets/logos/Iris-hep-4-no-long-name.png"
              height={40}
              style={{ position: "absolute", top: "5px", left: "120px" }}
              alt="iris hep logo"
            ></StaticImage>
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
