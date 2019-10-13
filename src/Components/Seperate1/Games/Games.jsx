import React from "react";
import "./Games.css";
import Card from "../../Cards/Card/Card";
import { slides } from "../../Content/Content";
import MobileCard from "../../Cards/MobileCard/MobileCard";
const Games = () => {
  return (
    <>
      <div id="mobileCards" className="container-fluid">
        <div className="card">
          {slides
            .filter((item, index) => {
              return index < 4;
            })
            .map((slide, index) => {
              const price = parseFloat(slide.price);
              const discount = parseFloat(slide.discount);
              const netPrice = ((100 - discount) / 100) * price;
              return (
                <MobileCard
                  key={index}
                  image={slide.imgUrl}
                  title={slide.name}
                  comingSoon={slide.comingSoon}
                  bonus={slide.isBonus}
                  discount={discount}
                  price={price}
                  netPrice={netPrice}
                />
              );
            })}
        </div>
      </div>
      <div id="desktopCards" className="container-fluid">
        <div className="row text-center">
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
    </>
  );
};

export default Games;
