import React from "react";
import "./MobileFigures.css";
import Figure from "../Figure/Figure";
import { subSlides } from "../../Content/Content";
const MobileFigures = () => {
  return (
    <div className="container">
      <div id="mobile-figure" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {subSlides.map((slide, index) => (
            <li
              className={`${index === 0 ? "active" : ""}`}
              data-target="#mobile-figure"
              data-slide-to={`${index}`}
            />
          ))}
        </ol>
        <div className="carousel-inner">
          {subSlides.map((slide, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="row">
                <div className="col-sm-12">
                  <Figure
                    image={slide.imgUrl}
                    count={parseFloat(slide.discount)}
                    shortName={slide.shortName}
                    name={slide.name}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#mobile-figure"
          role="button"
          data-slide="prev">
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#mobile-figure"
          role="button"
          data-slide="next">
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default MobileFigures;
