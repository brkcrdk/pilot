import React from "react";
import "./Navbar.css";
import Brand from "./Brand/Brand";
// import Links from "./Links/Links";
// import User from "./User/User";
// import CartSearch from "./CartSearch/CartSearch";
// import Sidebar from "../Navbar/Sidebar/Sidebar";
const Navbar = () => {
  return (
    <div id="nav-container">
      <nav className="navbar navbar-expand-lg text-center" id="nav-content">
        <div className="container">
          <a className="navbar-brand" href="#?">
            <Brand />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#?">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#?">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#?">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#?"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Dropdown link
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#?">
                    Action
                  </a>
                  <a className="dropdown-item" href="#?">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#?">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
