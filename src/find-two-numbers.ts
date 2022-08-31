/*
给一个数组，找出其中和为 n 的两个元素

-、有一个递增的数组 [1,2,4,7,11,15] 和 一个 n = 15
-、数组中有两个数，和是 n，即 4 + 11 = 15
-、写一个 js 函数，找出这两个数
*/

/*
常规思路

嵌套循环，找到一个数，然后去遍历下一个数，求和，判断
时间复杂度是 O(n^2)，不可用
*/
export const findTwoNumbers1 = (arr: number[], n: number): number[] => {
  const res: number[] = [];
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    // i 最大取值为 length - 1，避免 j 超出数组最大长度
    const n1 = arr[i];
    let flag = false; // 是否找到了合适的匹配结果
    for (let j = i + 1; j < length; j++) {
      const n2 = arr[j];
      if (n1 + n2 === n) {
        res.push(n1);
        res.push(n2);
        flag = true;
        break;
      }
    }
    if (flag) break;
  }
  return res;
};

/*
利用递增（有序）的特性

-、随便找两个数
-、如果和大于 n，则需要向前查找
-、如果和小于 n，则需要向后查找 ----- 二分法

双指针，时间复杂度降低到 O(n)

-、定义 i 指向头，j 指向尾，求 arr[i] + arr[j]
-、如果大于 n，则 j 需要向前移动
-、如果小于 n，则 i 需要向后移动
*/
export const findTwoNumbers2 = (arr: number[], n: number): number[] => {
  const res: number[] = [];
  const length = arr.length;
  // 空数组
  if (length === 0) {
    return res;
  }
  let startIndex = 0; // 头
  let endIndex = length - 1; // 尾
  while (startIndex < endIndex) {
    const startNum = arr[startIndex];
    const endNum = arr[endIndex];
    // 大于 n，endIndex 需要向左移动
    if (startNum + endNum > n) {
      endIndex -= 1;
    } else if (startNum + endNum < n) {
      // 小于 n，startIndex 需要向右移动
      startIndex += 1;
    } else {
      res.push(startNum);
      res.push(endNum);
      break;
    }
  }
  return res;
};

/*
划重点

时间复杂度达到 O(n^2)，是不可用的算法

凡有序，必二分

优化嵌套循环，可以考虑 “双指针”
*/
