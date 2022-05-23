import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form";
import Img from "./components/img/sign.png";
import BarChart from "./components/barChart";

function App() {
  return (
    <>
      {/* <BarChart /> */}
      <div className=" d-flex">
        <div className="img m-5">
          <img src={Img} height={800} width={500} />
        </div>

        <div className="mx-auto">
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
