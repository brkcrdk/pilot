import React from "react";
import Figures from "./Figures/Figures";
import MobileFigures from "./MobileFigures/MobileFigures";
const Submission = () => {
  return (
    <div id="submission-container" className="container">
      <div id="splitter">
        <p>
          <strong>a</strong> Submission
        </p>
        <hr />
      </div>
      <Figures />
      <MobileFigures />
    </div>
  );
};

export default Submission;
