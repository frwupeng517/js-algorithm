/**
 * 二分数
 */
export const binarySearch1 = (arr: number[], target: number): number => {
  debugger;
  const length = arr.length;
  if (length === 0) return -1;

  let startIndex = 0; // 开始位置
  let endIndex = arr.length - 1; // 结束位置

  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2);
    const midValue = arr[midIndex];
    if (target < midValue) {
      // 目标值较小，则继续在左侧查找
      endIndex = midIndex - 1;
    } else if (target > midValue) {
      // 目标值较大，则继续在右侧查找
      startIndex = midIndex + 1;
    } else {
      // 相等，返回
      return midIndex;
    }
  }
  return -1;
};
