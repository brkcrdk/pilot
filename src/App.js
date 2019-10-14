import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Seperate1 from "./Components/Seperate1/Seperate1";
import Seperate2 from "./Components/Seperate2/Seperate2";
import News from "./Components/News/News";
import Submission from "./Components/Submission/Submission";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="">
      <div className="">
        <Navbar />
      </div>
      <Seperate1 />
      <Seperate2 />
      <News />
      <Submission />
      <Footer />
      <div id="goTop">
        <a href="#nav-container">&#x276E;</a>
      </div>
    </div>
  );
}

export default App;
