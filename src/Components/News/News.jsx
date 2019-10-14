import React, { useEffect, useState } from "react";
import "./News.css";
import axios from "axios";
import NewsCard from "./NewsCard/NewsCard";
import MobileNews from "./MobileNews/MobileNews";
const News = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  //  const newArray = subSlides.map((slide, key) => {
  //    return (slide = { ...slide, name: "Burak", price: "12" });
  //  });
  //  console.log(newArray);
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
