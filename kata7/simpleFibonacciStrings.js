//https://www.codewars.com/kata/5aa39ba75084d7cf45000008/train/javascript
const fibonacciString = (num) => {
  const arr = ['0', '01'];
  for (let i = 2; i < num; i++) {
    // console.log(arr[i - 1], arr[i - 2]);
    sum = arr[i - 1] + arr[i - 2];
    //console.log(sum);
    arr.push(sum);
  }
  return arr;
};
res = fibonacciString(10);
//console.log(res);

const solved = (num) => {
  const arr = ['0', '01'];
  for (let i = 2; i < num; i++) {
    //console.log(arr[i - 1], arr[i - 2]);
    sum = arr[i - 1] + arr[i - 2];
    //console.log(sum);
    arr.push(sum);
  }
  return arr.toString();
};
res = solved(10);
//console.log(res);
/////////////////////////////////////////////
const fibonacci = (num) => {
  // if num is either 0 or 1 return num
  if (num < 2) {
    return num;
  }
  // recursion here
  return fibonacci(num - 1) + fibonacci(num - 2);
};
//console.log(fibonacci(7));
////////////////////////////////Fibonacci String////////////////////////
function solve(n) {
  if (n == 0) return '0';
  else if (n == 1) return '01';
  return solve(n - 1) + solve(n - 2);
}
console.log(solve(5));
////////////////////////////////////////
function solve2(n) {
  let f0 = '0';
  let f1 = '01';
  let result = '';
  if (n == 0) return f0;
  if (n == 1) return f1;
  for (let i = 2; i <= n; i++) {
    result = f1 + f0;
    f0 = f1;
    f1 = result;
  }
  return result;
}
///////////////////////
function solve3(n) {
  let arr = ['0', '01'];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
}
