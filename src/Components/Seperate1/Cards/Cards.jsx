import React from "react";
import "./Cards.css";
import Card from "./Card/Card";
// import { slides } from "../../Content/Content";
import MobileCard from "./MobileCard/MobileCard";
const Cards = () => {
  return (
    <>
      <div id="mobileCards" className="container-fluid">
        <div className="accordion" id="accordionExample">
          <div className="card">
            <MobileCard />
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
