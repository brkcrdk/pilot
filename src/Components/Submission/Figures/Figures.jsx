import React from "react";
import "./Figures.css";
import Figure from "../Figure/Figure";
import Carousel from "../Carousel/Carousel";
const Figures = () => {
  return (
    <div id="desktop-figure">
      <div className="">
        <div className="row">
          <div className="col-md-3">
            <Figure />
          </div>
          <div className="col-md-3">
            <Figure />
          </div>
          <div className="col-md-3">
            <Figure />
          </div>
          <div className="col-md-3">
            <Figure />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Figures;
