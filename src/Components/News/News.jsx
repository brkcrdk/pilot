import React from "react";
import "./News.css";
import NewsCard from "./NewsCard/NewsCard";
import MobileNews from "./MobileNews/MobileNews";
const News = () => {
  return (
    <div id="news-container" className="container">
      <div id="splitter">
        <p>
          <strong>a</strong> News
        </p>
        <hr />
      </div>
      <NewsCard />
      <MobileNews />
    </div>
  );
};

export default News;
