import React from "react";
const Accordions = (props) => {
  return (
    <>
      <div className="card-header" id={props.headingId}>
        <h5 className="mb-0">
          <button
            className="btn"
            type="button"
            data-toggle="collapse"
            data-target={`#${props.collapseId}`}
            aria-expanded="true"
            aria-controls={props.collapseId}>
            {props.header}
          </button>
        </h5>
      </div>
      <div
        id={props.collapseId}
        className="collapse show"
        aria-labelledby={props.headingId}
        data-parent="#accordionExample">
        <div className="card-body">{props.content}</div>
      </div>
    </>
  );
};

export default Accordions;
