import React from "react";
import "./NewsCard.css";
import { subSlides } from "../../Content/Content";
import Card from "../../Cards/Card/Card";

const NewsCard = () => {
  return (
    <div className="container-fluid" id="news-card-container">
      <div className="row">
        {subSlides
          .filter((slide, key) => {
            return key < 8;
          })
          .map((slide, index) => {
            const price = parseFloat(slide.price);
            const discount = parseFloat(slide.discount);
            const netPrice = ((100 - discount) / 100) * price;
            return (
              <div className="col-md-3" key={index}>
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
  );
};

export default NewsCard;
