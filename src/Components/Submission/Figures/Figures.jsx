import React from "react";
import "./Figures.css";
import Figure from "../Figure/Figure";
import { subSlides } from "../../Content/Content";
import { handleArray } from "../handleArray";
const Figures = () => {
  const slides = handleArray(subSlides, 4);

  return (
    <div id="desktop-figure" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {slides.map((slide, index) => (
          <li
            className={`${index === 0 ? "active" : ""}`}
            data-target="#desktop-figure"
            data-slide-to={`${index}`}
          />
        ))}
      </ol>
      <div className="carousel-inner">
        {slides.map((array, index) => (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <div className="row">
              {array.map((slide, index) => {
                return (
                  <div className="col-md-3">
                    <Figure
                      image={slide.imgUrl}
                      shortName={slide.shortName}
                      count={parseFloat(slide.discount)}
                      name={slide.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
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
