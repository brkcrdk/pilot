import React from "react";
import "./Games2.css";
import Card from "../../Cards/Card/Card";
import { slides } from "../../Content/Content";
const Games2 = () => {
  return (
    <div className="container-fluid">
      <div className="row text-center" id="games2-desktop">
        <div className="row">
          <div className="col-md-6" id="big">
            {slides
              .filter((item, index) => {
                return index < 1;
              })
              .map((slide, index) => {
                const price = parseFloat(slide.price);
                const discount = parseFloat(slide.discount);
                const netPrice = ((100 - discount) / 100) * price;
                return (
                  <Card
                    key={index}
                    image={slide.imgUrl}
                    comingSoon={slide.comingSoon}
                    title={slide.name}
                    bonus={slide.isBonus}
                    discount={discount}
                    price={price}
                    netPrice={netPrice}
                  />
                );
              })}
          </div>
          <div className="col-md-6">
            <div className="row">
              {slides
                .filter((item, index) => {
                  return index > 0;
                })
                .map((slide, index) => {
                  const price = parseFloat(slide.price);
                  const discount = parseFloat(slide.discount);
                  const netPrice = ((100 - discount) / 100) * price;
                  return (
                    <div className="col-sm-6" key={index}>
                      <Card
                        image={slide.imgUrl}
                        comingSoon={slide.comingSoon}
                        title={slide.name}
                        bonus={slide.isBonus}
                        discount={discount}
                        price={price}
                        netPrice={netPrice}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games2;
