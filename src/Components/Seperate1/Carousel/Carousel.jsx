import React from "react";
import fortnite from "./images/fortnite.jpg";
import lol from "./images/lol.jpg";
import pubg from "./images/pubg.jpg";
import tacticforce from "./images/tacticforce.jpg";
import wow from "./images/wow.jpg";
import "./CarouselStyle.css";
const Carousel = () => {
  const slides = [
    {
      imgUrl: fortnite,
      isActive: true,
      name: "Fortnite",
      discount: "15",
      price: "100"
    },
    { imgUrl: lol, name: "League of Legends", discount: "20", price: "100" },
    {
      imgUrl: pubg,
      name: "PUBG: Player Unknown Battle Ground",
      discount: "15",
      price: "100"
    },
    {
      imgUrl: tacticforce,
      name: "Tactic Force",
      discount: "15",
      price: "100"
    },
    { imgUrl: wow, name: "World of Warcraft", discount: "15", price: "100" }
  ];
  return (
    <div id="carousel-container">
      <div id="carousel-main" className="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          {slides.map((slide, index) => (
            <li
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
                return (
                  <div
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
                        <span>{`${discount}%`}</span>
                        <span>{((100 - discount) / 100) * price}</span>
                        <button type="button" class="btn btn-outline-danger">
                          Danger
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
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
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
