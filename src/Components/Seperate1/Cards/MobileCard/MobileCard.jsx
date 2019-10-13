import React from "react";
import "./MobileCard.css";
const MobileCard = (props) => {
  return (
    <div className="card container-fluid" id="mobile-card">
      <div className="row">
        <div className="col-xs-6">
          <img
            src="https://picsum.photos/200/300"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div className="col-xs-4">
          <div className="card-body">
            <div id="badge-title">
              <span className="badge badge-dark">
                Yakında <i className="far fa-calendar-alt"></i>
              </span>
              <h6>Title</h6>
            </div>
            <div className="row" id="card-bottom">
              <div id="bonus">
                <span>Bonus</span>
                <span>-%15</span>
              </div>
              <div id="prices">
                <span id="text">100</span>
                <span>85</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." />
      <div className="card-body">
        <div id="badge-title">
          <span className="badge badge-dark">
            Yakında <i className="far fa-calendar-alt"></i>
          </span>
          <h6>Title</h6>
        </div>
        <div className="row" id="card-bottom">
          <div id="bonus">
            <span>Bonus</span>
          </div>
          <div id="prices">
            <span>-%15</span>
            <div id="net-price">
              <span>100</span>
              <span>85</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MobileCard;
