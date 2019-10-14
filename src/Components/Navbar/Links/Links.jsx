import React from "react";
const Links = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#?">
          Home <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#?">
          Section1
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#?">
          Section2
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
          Another Section
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#?">
            News
          </a>
          <a className="dropdown-item" href="#?">
            Submission
          </a>
          <a className="dropdown-item" href="#?">
            Footer
          </a>
        </div>
      </li>
    </ul>
  );
};

export default Links;
