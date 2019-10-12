import React from "react";
import "./Cards.css";
import Card from "./Card";
import Accordion from "./Accordions";
const Cards = () => {
  return (
    <>
      <div id="mobileCards" className="container-fluid">
        <Accordion />
      </div>
      <div id="desktopCards">
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
