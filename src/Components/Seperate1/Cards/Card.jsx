import React from "react";
const Card = (props) => {
  return (
    <div className="card container-fluid">
      {props.comingSoon ? (
        <span
          style={{
            position: "absolute",
            fontSize: "2.5em",
            top: "-0.7em",
            right: "-0.5em",
            transform: "rotate(90deg)",
            color: "darkgreen"
          }}>
          Yakında..
        </span>
      ) : (
        ""
      )}
      <img
        src="https://picsum.photos/300/"
        alt="Avatar"
        style={{ width: "100%" }}
      />
      <div id="card-content">
        <h5>Title</h5>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end"
          }}>
          {props.isBonus ? <span>Bonus</span> : ""}
          <span>İndirim</span>
          <div style={{ display: "grid" }}>
            <span>İndirim</span>
            <span>Fiyat</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
