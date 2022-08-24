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

export const binarySearch2 = (
  arr: number[],
  target: number,
  startIndex?: number,
  endIndex?: number
): number => {
  const length = arr.length;
  if (length === 0) return -1;
  // 开始和结束的范围
  if (startIndex === undefined) startIndex = 0;
  if (endIndex === undefined) endIndex = length - 1;

  if (startIndex > endIndex) return -1;

  // 中间位置
  const midIndex = Math.floor((startIndex + endIndex) / 2);
  const midValue = arr[midIndex];

  if (target < midValue) {
    // 目标值较小，则继续在左侧查找
    return binarySearch2(arr, target, 0, midIndex - 1);
  } else if (target > midValue) {
    // 目标值较大，则继续在右侧查找
    return binarySearch2(arr, target, midIndex + 1, endIndex);
  } else {
    return midIndex;
  }
};
