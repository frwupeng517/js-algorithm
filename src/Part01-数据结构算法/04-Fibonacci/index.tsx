import React, { useEffect } from "react";

/**
 * 使用递归获取斐波那契数列中的第N个数
 * n 是下标，从0开始
 * 递归有大量的重复计算，例如求f(10)，需要先就算 f(9)和f(8)，f(9)需要先计算f(8)和f(7)，f(8)需要先计算f(7)和f(6)，依次类推
 * 实测在计算f(50) --> 12586269025 时，浏览器基本卡死
 * 时间复杂度是 o(2^n)
 * 不推荐！！！
 */
export function fibonacci(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * 使用循环
 * 推荐！！！
 */
export function fibonacci2(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let n1 = 1; // 记录 n - 1 的结果
  let n2 = 0; // 记录 n - 2 的结果
  let res = 0;

  for (let i = 2; i <= n; i++) {
    res = n1 + n2;

    // 记录中间结果，供下一次循环使用
    // TODO：注意赋值的顺序，必须先赋值n2，再赋值n1，否则下一轮循环时，n1 和 n2 都是一样的值（即上一轮循环的res）
    n2 = n1; // 先赋值 n2
    n1 = res; // 再赋值 n1
  }
  return res;
}

/**
 * 连环问：青蛙跳台阶
 * 一只青蛙，一次可跳1级，也可跳2级
 * 问：青蛙跳到 n 级台阶，总共有多少种方式？
 *
 * 要跳到 1级 台阶，有 1种方式 f(1) = 1
 * 要跳到 2级 台阶，有 2种方式 f(2) = 2
 * 要跳到 3级 台阶，有 3种方式 f(3) = 3
 * 要跳到 4级 台阶，有 4种方式 f(4) = 5
 * ......
 * 要跳到 n级 台阶，有 n种方式 f(n) = f(n-1) + f(n-2)
 *
 * 斐波那契数列的一个变型应用
 */
export function frog(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  let n1 = 2;
  let n2 = 1;
  let res = 0;
  for (let i = 3; i <= n; i++) {
    res = n1 + n2;
    n2 = n1;
    n1 = res;
  }
  return res;
}

function Fibonacci() {
  useEffect(() => {
    console.log(fibonacci2(500));
    console.log(fibonacci(2));
    console.log(fibonacci(3));
    console.log(fibonacci(4));
    console.log(frog(4));
    console.log(frog(5));
  }, []);
  return (
    <div className="App">
      <h2>斐波那契数列</h2>
      <h3>0, 1, 1, 2, 3, 5, 8, 13, 21......</h3>
    </div>
  );
}

export default Fibonacci;
