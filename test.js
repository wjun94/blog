// 1=1 2=2 3=2  4=3  5=5 6=8 7=13 8=21 9=34

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) return 1;
  let first = 0;
  let second = 1;
  for (let i = 0; i < n - 1; i++) {
    const sum = first + second;
    first = second;
    second = sum;
  }
  return second;
};

console.log(fib(1));
console.log(fib(2));
