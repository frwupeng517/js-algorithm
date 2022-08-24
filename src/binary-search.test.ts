import { binarySearch1, binarySearch2 } from "./binary-search";

/**
 * 运行单元测试指令：npx jest src/binary-search.test.ts
 */

describe("二分查找", () => {
  it("正常情况", () => {
    const arr = [10, 20, 30, 40, 50, 60];
    const target = 30;
    const index = binarySearch1(arr, target);
    expect(index).toBe(2);
  });
  it("空数组", () => {
    const index = binarySearch1([], 20);
    expect(index).toBe(-1);
  });
  it("找不到target", () => {
    const arr = [10, 20, 30, 40, 50, 60];
    const target = 300;
    const index = binarySearch1(arr, target);
    expect(index).toBe(-1);
  });
});

describe("递归二分查找", () => {
  it("正常情况", () => {
    const arr = [10, 20, 30, 40, 50, 60];
    const target = 30;
    const index = binarySearch2(arr, target);
    expect(index).toBe(2);
  });
  it("空数组", () => {
    const index = binarySearch2([], 20);
    expect(index).toBe(-1);
  });
  it("找不到target", () => {
    const arr = [10, 20, 30, 40, 50, 60];
    const target = 300;
    const index = binarySearch2(arr, target);
    expect(index).toBe(-1);
  });
});
