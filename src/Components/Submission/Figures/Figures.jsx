import React from "react";
import "./Figures.css";
import Figure from "../Figure/Figure";
import { subSlides } from "../../Content/Content";
import { handleArray } from "../handleArray";
const Figures = () => {
  //With the help of handleArray function could manage to split subSlides array
  //Which return 4 arrays and every array has 4 object inside
  //With 4 array render 4 carousel-item and rows
  //Inside of these carousel-items and rows we will render 4 objects
  //This way we could use bootstrap class rows and columns to make responsive carousel
  const slides = handleArray(subSlides, 4);

  return (
    <div id="desktop-figure" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {slides.map((slide, index) => (
          <li
            key={index}
            className={`${index === 0 ? "active" : ""}`}
            data-target="#desktop-figure"
            data-slide-to={`${index}`}
          />
        ))}
      </ol>
      <div className="carousel-inner">
        {slides.map((array, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <div className="row">
              {array.map((slide, index) => {
                return (
                  <div className="col-md-3" key={index}>
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
