import React from "react";
import "./CartSearch.css";
const CartSearch = () => {
  return (
    <ul id="search-cart">
      <div id="desktop">
        <li>
          <i className="fas fa-shopping-cart" /> 0
        </li>
        <li>
          <i className="fas fa-search" />
          <input
            id="search-input"
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </li>
      </div>
    </ul>
  );
};

export default CartSearch;
