import React from "react";
import "./MobileFigures.css";
import Figure from "../Figure/Figure";
const MobileFigures = () => {
  return (
    <div id="mobile-figure">
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-sm-12">
            <Figure />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFigures;
