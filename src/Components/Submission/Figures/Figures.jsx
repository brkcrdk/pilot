import React from "react";
import "./Figures.css";
import Figure from "../Figure/Figure";
const Figures = () => {
  return (
    <div id="desktop-figure" class="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li
          data-target="#desktop-figure"
          data-slide-to="0"
          className="active"></li>
        <li data-target="#desktop-figure" data-slide-to="1"></li>
        <li data-target="#desktop-figure" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
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
        <div class="carousel-item">
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
        <div class="carousel-item">
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
      <a
        className="carousel-control-prev"
        href="#desktop-figure"
        role="button"
        data-slide="prev">
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#desktop-figure"
        role="button"
        data-slide="next">
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Figures;
