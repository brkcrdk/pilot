import React from "react";
import fortnite from "./images/fortnite.jpg";
import lol from "./images/lol.jpg";
import pubg from "./images/pubg.jpg";
import tacticforce from "./images/tacticforce.jpg";
import wow from "./images/wow.jpg";
import "./CarouselStyle.css";
const Carousel = () => {
  const slides = [
    { imgUrl: fortnite, isActive: true, name: "Fortnite" },
    { imgUrl: lol, name: "League of Legends" },
    { imgUrl: pubg, name: "PUBG: Player Unknown Battle Ground" },
    { imgUrl: tacticforce, name: "Tactic Force" },
    { imgUrl: wow, name: "World of Warcraft" }
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
          {slides.map((slides, index) => (
            <div className={`carousel-item ${slides.isActive ? "active" : ""}`}>
              <img
                className="d-block w100"
                alt={`Game poster of ${slides.name}`}
                src={slides.imgUrl}
              />
            </div>
          ))}
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
