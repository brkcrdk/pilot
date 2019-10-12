import React from "react";
const Accordions = (props) => {
  return (
    <>
      <div className="card-header" id="headingOne">
        <h2 className="mb-0">
          <button
            className="btn"
            type="button"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne">
            {props.header}
          </button>
        </h2>
      </div>
      <div
        id="collapseOne"
        className="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordionExample">
        <div className="card-body">{props.content}</div>
      </div>
    </>
  );
};

export default Accordions;
