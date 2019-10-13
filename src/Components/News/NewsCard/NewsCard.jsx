import React from "react";
import { slides } from "../../Content/Content";
import Card from "../../Cards/Card/Card";
const NewsCard = () => {
  return (
    <div className="container-fluid">
      <div className="row text-center">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              {slides
                .filter((item, index) => {
                  return index < 4;
                })
                .map((slide, index) => {
                  const price = parseFloat(slide.price);
                  const discount = parseFloat(slide.discount);
                  const netPrice = ((100 - discount) / 100) * price;
                  return (
                    <div key={index} className="col-md-3">
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
          <div className="col-md-12">
            <div className="row">
              {slides
                .filter((item, index) => {
                  return index < 4;
                })
                .map((slide, index) => {
                  const price = parseFloat(slide.price);
                  const discount = parseFloat(slide.discount);
                  const netPrice = ((100 - discount) / 100) * price;
                  return (
                    <div key={index} className="col-md-3">
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

export default NewsCard;
