import React from "react";
import "./Navbar.css";
import Brand from "./Brand/Brand";
import Links from "./Links/Links";
import User from "./User/User";
import CartSearch from "./CartSearch/CartSearch";
const Navbar = () => {
  return (
    <div id="nav-container">
      <nav className="navbar navbar-expand-lg text-center" id="nav-content">
        <div className="container">
          <a className="navbar-brand" href="#?">
            <Brand />
          </a>
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <Links />
            <User />
            <CartSearch />
          </div>
        </div>
      </nav>

      <div className="container">
        <span>right now</span>
      </div>
    </div>
  );
};

export default Navbar;
