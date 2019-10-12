import React from "react";
import "./CartSearch.css";
const CartSearch = () => {
  return (
    <ul id="search-cart">
      <div id="mobile">
        <li>
          <i class="fas fa-shopping-cart" /> 0
        </li>
        <li>
          <i class="fas fa-search" />
        </li>
      </div>
    </ul>
  );
};

export default CartSearch;
