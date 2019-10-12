import React from "react";

const Card = () => {
  return (
    <div className="card container-fluid">
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
          <span>Bonus</span>
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
