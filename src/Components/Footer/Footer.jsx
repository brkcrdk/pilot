import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div id="footer-container">
      <div id="footer-top">
        <div id="brands">
          <div>
            <i className="far fa-handshake" /> <span>Lorem Ipsum</span>
          </div>
          <div>
            <i class="fab fa-cc-mastercard" />
          </div>
          <div>
            <i class="fab fa-cc-visa" />
          </div>
          <div>
            <i class="fab fa-steam-symbol" />
          </div>
        </div>
      </div>
      <div id="footer-content">
        <div className="container">Footer</div>
      </div>
      <div id="footer-bottom">
        <span>ACME //rightnow</span>
      </div>
    </div>
  );
};

export default Footer;