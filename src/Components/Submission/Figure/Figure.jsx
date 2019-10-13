import React from "react";
import "./Figure.css";
const Figure = () => {
  return (
    <div className="">
      <div id="figure-container" className="">
        <img src="https://picsum.photos/200/300" alt="..." />
        <div id="figure-caption">
          <h6>You shouldn't be here</h6>
          <div id="figure-bottom">
            <span>
              <i className="far fa-comment" />
              11
            </span>
            <span>yesterday</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Figure;
