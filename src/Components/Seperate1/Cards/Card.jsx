import React from "react";
const Card = (props) => {
  return (
    <div className="card container-fluid">
      {props.comingSoon ? (
        <span
          className="badge badge-dark"
          style={{
            position: "absolute",
            top: "10em",
            left: "1em"
          }}>
          Yakında{" "}
        </span>
      ) : (
        ""
      )}
      <img src={props.img} alt="Avatar" style={{ width: "100%" }} />
      <div id="card-content">
        <h6>{props.title}</h6>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end"
          }}>
          {props.isBonus ? <span>Bonus</span> : ""}
          <span>{props.discount}</span>
          <div style={{ display: "grid" }}>
            <span style={{ textDecoration: "line-through" }}>
              {props.price}
            </span>
            <span>{props.netPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
