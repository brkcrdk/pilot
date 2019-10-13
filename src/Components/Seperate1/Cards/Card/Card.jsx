import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="card" id="desktop-card">
      <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." />
      <div className="card-body">
        <div id="badge-title">
          <span className="badge badge-dark">
            Yakında <i className="far fa-calendar-alt"></i>
          </span>
          <h6>Title</h6>
        </div>
        <div className="row" id="card-bottom">
          <div id="bonus">
            <span>Bonus</span>
          </div>
          <div id="prices">
            <span>-%15</span>
            <div id="net-price">
              <span>100</span>
              <span>85</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
