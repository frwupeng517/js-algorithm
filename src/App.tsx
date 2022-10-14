import React from "react";
import "./App.css";
// import { binarySearch1, binarySearch2 } from "./binary-search";
// import { findTwoNumbers2 } from "./find-two-numbers";
// import { getKthValue, BST } from "./binary-search-tree";
// import { fibonacci, fibonacci2, frog } from "./Part01-数据结构算法/fibonacci";
import RotateArray from "./Part01-数据结构算法/01-RotateArray";
// import Fibonacci from "./Part01-数据结构算法/04-Fibonacci";

function App() {
  // 功能测试
  /*
  const arr = [100, 200, 300, 400, 500, 600, 700, 800];
  const target = 200;

  console.time("binarySearch1");
  for (let i = 0; i < 10 * 10000; i++) {
    binarySearch1(arr, target);
  }
  console.timeEnd("binarySearch1");

  console.time("binarySearch2");
  for (let i = 0; i < 10 * 10000; i++) {
    binarySearch2(arr, target);
  }
  console.timeEnd("binarySearch2");
  // console.log("result", binarySearch1(arr, target));
  // console.log("result", binarySearch2(arr, target));
  */
  /*
  const arr = [1, 2, 4, 7, 11, 15];
  console.log("findTwoNumbers1", findTwoNumbers2(arr, 15));
  */
  /*
  console.log("中序", getKthValue(BST, 3));
  */

  return (
    <div style={{ padding: 16 }}>
      <RotateArray />
      {/* <Fibonacci /> */}
    </div>
  );
}

export default App;
