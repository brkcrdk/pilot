import React from "react";
import "./MobileCard.css";

const MobileCard = (props) => {
  return (
    <div className="card" id="mobile-card">
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <div id="badge-title">
          <span
            className={`badge badge-dark ${
              props.comingSoon ? "" : "visibility"
            }`}>
            Soon! <i className="far fa-calendar-alt" />
          </span>
          <h6>{props.title}</h6>
        </div>
        <div className="row" id="card-bottom">
          <div id="bonus">{props.bonus ? <span>Bonus</span> : ""}</div>
          <div id="prices">
            <span className="badge badge-danger">
              {`-%${props.discount}`}&#8378;
            </span>
            <div id="net-price">
              <span className="badge badge-secondary">
                {props.price}&#8378;
              </span>
              <span>{props.netPrice}&#8378;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
