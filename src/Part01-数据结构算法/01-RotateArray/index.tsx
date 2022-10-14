import React, { useEffect } from "react";

/*
思路一：把末尾的元素挨个 pop，然后 unshift 到数组头部
时间复杂度 O(n^2)，空间复杂度 O(1)
*/
export const rotate1 = (array: number[], k: number): number[] => {
  const length = array.length;
  // 避免k取值为负数或超出数组长度造成重复的旋转
  const step = Math.abs(k % length);
  if (!length || !k) return array;

  // 一层 for 循环的时间复杂度是 O(n)
  // 当时间复杂度 O(n) 叠加在一起时，最终的时间复杂度就成了 O(n^2)
  for (let i = 0; i < step; i++) {
    const last = array.pop();
    if (last !== null) {
      array.unshift(last as number); // 数组是一个有序结构，unshift/shift/splice 操作非常慢，时间复杂度是 O(n)
    }
  }
  return array;
};

/*
思路二：把数组拆分，最后 concat 拼接到一起
时间复杂度 O(1)，空间复杂度 O(n)
*/
export const rotate2 = (array: number[], k: number): number[] => {
  const length = array.length;
  // 避免k取值为负数或超出数组长度造成重复的旋转
  const step = Math.abs(k % length);
  if (!length || !k) return array;

  const rightArray = array.slice(-step);
  const leftArray = array.slice(0, length - step);
  const res = rightArray.concat(leftArray);
  return res;
};

function Index() {
  useEffect(() => {
    // const arr = [1, 2, 3, 4, 5, 6, 7];
    // const arr1 = rotate2(arr, 1);
    // console.log("arr1", arr1);

    // 性能测试 （每次的测试时间都不同，但总体是 rotate2 远快于 rotate1）
    // rotate1: 6.523193359375 ms
    // rotate2: 0.0771484375 ms
    const arr1 = [];
    for (let i = 0; i < 10 * 1000; i++) {
      arr1.push(i);
    }
    console.time("rotate1");
    rotate1(arr1, 9 * 1000);
    console.timeEnd("rotate1");

    const arr2 = [];
    for (let i = 0; i < 10 * 1000; i++) {
      arr2.push(i);
    }
    console.time("rotate2");
    rotate2(arr2, 9 * 1000);
    console.timeEnd("rotate2");
  }, []);
  return (
    <div>
      <h2>将一个数组旋转K步</h2>
      <h3>输入一个数组 [1, 2, 3, 4, 5, 6, 7]</h3>
      <h3>k = 1, 即旋转 1 步，期望输出[7, 1, 2, 3, 4, 5, 6]</h3>
      <h3>k = 2, 即旋转 2 步，期望输出[6, 7, 1, 2, 3, 4, 5]</h3>
      <h3>k = 3, 即旋转 3 步，期望输出[5, 6, 7, 1, 2, 3, 4]</h3>
    </div>
  );
}

export default Index;
