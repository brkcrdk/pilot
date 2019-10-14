import React from "react";
import "./Footer.css";
import MainFooter from "./MainFooter";
const Footer = () => {
  return (
    <div id="footer-container">
      <div id="footer-top">
        <div id="brands">
          <div>
            <i className="far fa-handshake" /> <span>Lorem Ipsum</span>
          </div>
          <div>
            <i className="fab fa-cc-mastercard" />
          </div>
          <div>
            <i className="fab fa-cc-visa" />
          </div>
          <div>
            <i className="fab fa-steam-symbol" />
          </div>
        </div>
      </div>
      <div id="footer-content">
        <div className="container">
          <div id="main-footer">
            <MainFooter />
          </div>
        </div>
      </div>
      <div id="footer-bottom">
        <span>ACME //rightnow</span>
      </div>
    </div>
  );
};

export default Footer;
