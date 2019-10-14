import React from "react";

const MainFooter = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md">
          <div id="footer-brand">
            <p>acme</p>
            <span>
              right<strong> now &#x27A4;</strong>
            </span>
          </div>
        </div>
        <div className="col-md">
          <span className="titles">About Us</span>
          <ul>
            <li>Lorem ipsum dolor</li>
            <li>Sit amet consectetuer</li>
            <li>Adipiscing elit</li>
            <li>Sed diam nonummy</li>
            <li>Euismod tincidunt</li>
            <li>Laoreet dolore magna</li>
            <li>Aliquam</li>
            <li>Erat</li>
          </ul>
        </div>
        <div className="col-md">
          <span className="titles">Customer</span>
          <ul>
            <li>Volutpat</li>
            <li>Ut wisi enim</li>
            <li>Ad minim veniam</li>
            <li>Quis nostrud</li>
          </ul>
        </div>
        <div className="col-md">
          <span className="titles">Extras</span>
          <ul>
            <li>Exerci tation</li>
            <li>Ullamcorper</li>
            <li>Suscipit lobortis</li>
          </ul>
        </div>
        <div className="col-md">
          <span className="titles">Wallet</span>
          <ul>
            <li>Duis autem</li>
            <li>Vel eum iriure</li>
            <li>Dolor in hendrerit</li>
            <li>In vulputate</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
