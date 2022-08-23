import React from "react";
import "./App.css";
import { binarySearch1 } from "./binary-search";

function App() {
  // 功能测试
  const arr = [100, 200, 300, 400, 500, 600, 700, 800];
  const target = 200;
  console.log("result", binarySearch1(arr, target));
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
