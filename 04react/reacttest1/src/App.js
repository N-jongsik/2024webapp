import React, { useState } from "react";
import "./index.css";
import logo from "./logo.svg";

function App() {
  let text = "hello";

  const [box, setBox] = useState("han");
  const [num, setNum] = useState(0);

  return (
    <>
      <div
        className="container"
        style={{ background: "green", fontSize: "20px" }}
      >
        test
        <h2>{text}</h2>
        <p>{box}</p>
        <p>{num}</p>
      </div>
      <header>ddd</header>
      {/* <img src={logo} /> */}
      <button
        onClick={() => {
          // alert("test");
          setBox("change");
        }}
      >
        값 변화
      </button>
      <button
        onClick={() => {
          setNum(10);
        }}
      >
        num
      </button>
    </>
  );
}

export default App;
