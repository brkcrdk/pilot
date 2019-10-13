import React from "react";
import "./MobileGames2.css";
import MobileCard from "../../Cards/MobileCard/MobileCard";
import { slides } from "../../Content/Content";
const MobileGames2 = () => {
  return (
    <div className="container-fluid">
      <div className="card" id="mobile-games2-card">
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
  );
};

export default MobileGames2;
