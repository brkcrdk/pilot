import React from "react";
const Card = (props) => {
  return (
    <div className="card container-fluid">
      {props.comingSoon ? (
        <span
          className="badge badge-dark"
          style={{
            position: "absolute",
            top: "50%",
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
            justifyContent: "space-between",
            alignItems: "flex-end"
          }}>
          {props.isBonus ? <span>Bonus</span> : ""}
          <span>{props.discount}</span>
          <div style={{ display: "grid" }}>
            <span>{props.discount}</span>
            <span>{props.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
