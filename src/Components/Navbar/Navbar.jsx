import React from "react";
import "./Navbar.css";
import Brand from "./Brand/Brand";
import Links from "./Links/Links";
import User from "./User/User";
import CartSearch from "./CartSearch/CartSearch";
const Navbar = () => {
  return (
    <div id="navbar-container" className="pt-5 container-fluid">
      <div id="navbar-content" className="text-center">
        <div id="left-side">
          <Brand />
          <Links />
        </div>
        <div id="right-side">
          <User />
          <CartSearch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
