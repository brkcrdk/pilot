import React from "react";
import "./Seperate2.css";
import Games2 from "./Games2/Games2";
import MobileGames2 from "./MobileGames2/MobileGames2";
const Seperate2 = () => {
  return (
    <div id="seperate2-container" className="container">
      <div id="splitter">
        <p>
          <strong>a</strong> Seperate 2
        </p>
        <hr />
      </div>
      <Games2 />
      <MobileGames2 />
    </div>
  );
};

export default Seperate2;
