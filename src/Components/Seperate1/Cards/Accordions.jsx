import React from "react";
const Accordions = (props) => {
  return (
    <>
      <div className="card-header" id={`heading${props.id}`}>
        <h5
          className="mb-0"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
          <button
            className="btn"
            type="button"
            data-toggle="collapse"
            data-target={`#collapse${props.id}`}
            aria-expanded="true"
            aria-controls={`collapse${props.id}`}>
            {props.header}
          </button>
          {props.comingSoon ? (
            <span style={{ fontSize: "0.6em", color: "red" }}>Yakında..</span>
          ) : (
            ""
          )}
        </h5>
      </div>
      <div
        id={`collapse${props.id}`}
        className="collapse"
        aria-labelledby={`heading${props.id}`}
        data-parent="#accordionExample">
        <div className="card-body">{props.content}</div>
      </div>
    </>
  );
};

export default Accordions;
