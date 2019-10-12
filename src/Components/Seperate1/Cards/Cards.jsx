import React from "react";
import "./Cards.css";
import Card from "./Card";
const Cards = () => {
  return (
    <>
      <div id="mobileCards" className="container-fluid">
        <div class="accordion" id="accordionExample">
          <div class="card" style={{ borderRadius: "1em" }}>
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button
                  class="btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne">
                  Collapsible Group Item #1
                </button>
              </h2>
            </div>
            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample">
              <div class="card-body">
                <Card />
              </div>
            </div>
          </div>
        </div>
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
