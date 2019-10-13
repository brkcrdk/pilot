import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Seperate1 from "./Components/Seperate1/Seperate1";
import Seperate2 from "./Components/Seperate2/Seperate2";
import News from "./Components/News/News";
function App() {
  return (
    <div className="">
      <div className="">
        <Navbar />
      </div>
      <Seperate1 />
      <Seperate2 />
      <News />
    </div>
  );
}

export default App;
