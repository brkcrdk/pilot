import React from "react";
import "./Seperate2.css";
const Seperate2 = () => {
  return (
    <div id="seperate2-container" className="container">
      <div id="splitter">
        <p>
          <strong>a</strong> Seperate 2
        </p>
        <hr />
      </div>
      <div
        className="row container-fluid text-center"
        style={{ border: "1px solid green", width: "100%" }}>
        <div className="row" style={{ border: "1px solid red", width: "100%" }}>
          <div className="col-md-6">Content 1</div>
          <div className="col-md-6">
            <div
              className="row"
              style={{ border: "1px solid yellow", width: "100%" }}>
              <div className="col-md-6">Content1</div>
              <div className="col-md-6">Content2</div>
              <div className="col-md-6">Content3</div>
              <div className="col-md-6">Content4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seperate2;
