import React from "react";
import { slides } from "../../Content/Content";
import "./CarouselStyle.css";
const Carousel = () => {
  return (
    <div id="carousel-container">
      <div id="carousel-main" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {slides.map((slide, index) => (
            <li
              key={index}
              data-target="#carousel-main"
              data-slide-to={index}
              className={slide.isActive ? "active" : ""}
            />
          ))}
        </ol>
        <div className="carousel-inner">
          <div className="row">
            <div className="col-sm">
              {slides.map((slides, index) => {
                const price = parseFloat(slides.price);
                const discount = parseFloat(slides.discount);
                const netPrice = ((100 - discount) / 100) * price;
                return (
                  <div
                    key={index}
                    className={`carousel-item ${
                      slides.isActive ? "active" : ""
                    }`}>
                    <img
                      className="d-block w100"
                      alt={`Game poster of ${slides.name}`}
                      src={slides.imgUrl}
                    />
                    <div
                      className="carousel-caption d-none d-md-flex"
                      id="slide-content">
                      <p>{slides.name}</p>
                      <div>
                        <span className="badge badge-danger">{`${discount}%`}</span>
                        <span className="badge badge-light">{netPrice}</span>
                        <button type="button" className="btn btn-dark">
                          <i className="fas fa-cart-plus" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carousel-main"
          role="button"
          data-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel-main"
          role="button"
          data-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
