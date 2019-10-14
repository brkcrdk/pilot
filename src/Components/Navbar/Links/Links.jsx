import React from "react";
const Links = () => {
  return (
    <ul className="navbar-nav" id="navbar-links">
      <li className="nav-item active">
        <a className="nav-link" href="#seperate1-container">
          Home <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#news-container">
          News
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#seperate2-container">
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
          <a className="dropdown-item" href="#seperate1-container">
            Section1
          </a>
          <a className="dropdown-item" href="#submission-container">
            Submission
          </a>
          <a className="dropdown-item" href="#footer-container">
            Footer
          </a>
        </div>
      </li>
    </ul>
  );
};

export default Links;
