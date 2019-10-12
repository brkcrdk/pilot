import React from "react";
import "./Cards.css";
import Card from "./Card";
import Accordion from "./Accordions";
import { slides } from "../../Content/Content";
const Cards = () => {
  return (
    <>
      <div id="mobileCards" className="container-fluid">
        <div className="accordion" id="accordionExample">
          <div className="card">
            {slides
              .filter((item, index) => {
                return index < 5;
              })
              .map((slide, index) => (
                <Accordion
                  id={slide.id}
                  header={slide.name}
                  content={<Card />}
                  comingSoon={slide.comingSoon}
                />
              ))}
          </div>
        </div>
      </div>
      {/* <div id="tabletCards" className="container-fluid text-center">
        <div className="row  ">
          <div className="col-md-6"></div>
          <div className="col-md-6"></div>
        </div>
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6"></div>
        </div>
      </div> */}
      <div id="desktopCards" className="container-fluid">
        <div className="row text-center">
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
