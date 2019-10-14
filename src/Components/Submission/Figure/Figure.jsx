import React from "react";
import "./Figure.css";
const Figure = (props) => {
  return (
    <div className="">
      <div id="figure-container" className="">
        <img src={props.image} alt={props.shortName} />
        <div id="figure-caption">
          <h6>{props.name}</h6>
          <div id="figure-bottom">
            <span>
              <i className="far fa-comment" />
              {props.count}
            </span>
            <span>{props.shortName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Figure;
