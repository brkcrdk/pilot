import React from "react";
import "./MobileNews.css";
import MobileCard from "../../Cards/MobileCard/MobileCard";
const MobileNews = (props) => {
  return (
    <div className="container-fluid" id="mobile-news">
      {props.content === undefined
        ? "Loading..."
        : props.content.map((slide, key) => {
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
                netPrice={netPrice.toFixed(2)}
              />
            );
          })}
    </div>
  );
};

export default MobileNews;
