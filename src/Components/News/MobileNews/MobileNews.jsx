import React from "react";
import "./MobileNews.css";
import MobileCard from "../../Cards/MobileCard/MobileCard";
import { subSlides } from "../../Content/Content";
const MobileNews = () => {
  return (
    <div className="container-fluid" id="mobile-news">
      {subSlides
        .filter((slide, key) => {
          return key < 8;
        })
        .map((slide, key) => {
          const price = parseFloat(slide.price);
          const discount = parseFloat(slide.discount);
          const netPrice = ((100 - discount) / 100) * price;
          return (
            <MobileCard
              key={key}
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
  );
};

export default MobileNews;
