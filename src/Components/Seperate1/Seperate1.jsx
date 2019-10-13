import React from "react";
import "./Seperate1.css";
import Carousel from "./Carousel/Carousel";
import Cards from "./Cards/Cards";
const Seperate1 = () => {
  return (
    <div id="seperate1-container" className="container">
      <div id="splitter">
        <p>
          <strong>a</strong> Seperate 1
        </p>
        <hr />
      </div>
      <Carousel />
      <Cards />
      <hr className="seperater" />
      <p className="text-center" id="whatsapp">
        <i class="fab fa-whatsapp" /> +90(555)555 55 55
      </p>
      <hr className="seperater" />
    </div>
  );
};

export default Seperate1;
