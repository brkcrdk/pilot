import React from "react";
// import Figures from "../Figures/Figures";
const Carousel = (props) => {
  return (
    <div className="container-fluid">
      <div
        id="submission-carousel"
        className="carousel slide"
        data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner"></div>
      </div>
    </div>
  );
};

export default Carousel;
