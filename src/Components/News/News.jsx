import React, { useEffect, useState } from "react";
import "./News.css";
import axios from "axios";
import NewsCard from "./NewsCard/NewsCard";
import MobileNews from "./MobileNews/MobileNews";
import { subSlides } from "../Content/Content";
const News = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  const newArray = () => {
    if (data !== null) {
      const newArr = subSlides
        .filter((item, key) => {
          return key < 8;
        })
        .map((slide, key) => {
          return {
            ...slide,
            name: data[key].company.catchPhrase,
            price: data[key].id
          };
        });
      return newArr;
    }
  };
  console.log(newArray());
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
