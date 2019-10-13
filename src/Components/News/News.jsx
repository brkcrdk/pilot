import React from "react";
import "./News.css";
import NewsCard from "./NewsCard/NewsCard";
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
    </div>
  );
};

export default News;
