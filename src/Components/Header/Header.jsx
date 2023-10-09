import React, { useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [clicked, setClicked] = useState(false);
  return (
    <div className="header">
      <span className="logo">FIT CLUB</span>
      {clicked === false && mobile === true ? (
        <div onClick={() => setClicked(true)}>
          <GiHamburgerMenu className="menu-icon" />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setClicked(false)}
              to="hero"
              span="true"
              smooth="true">
              Home
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setClicked(false)}
              to="programs"
              span="true"
              smooth="true">
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setClicked(false)}
              to="reasons"
              span="true"
              smooth="true">
              Why us
            </Link>{" "}
          </li>
          <li>
            <Link
              onClick={() => setClicked(false)}
              to="plans"
              span="true"
              smooth="true">
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setClicked(false)}
              to="testinomials"
              spy="true"
              smooth="true">
              Testinomials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
