//https://www.codewars.com/kata/522551eee9abb932420004a0/train/javascript
function nthFibo(n) {
  let fib1 = 0;
  let fib2 = 1;
  let res = n == 1 ? fib1 : fib2;
  //console.log(n)
  for (let i = 3; i <= n; i++) {
    res = fib2 + fib1;
    fib1 = fib2;
    fib2 = res;
  }
  return res;
}
console.log(nthFibo(7));
///////////////////////////////////////////////////

function nthFibo1(n) {
  return n < 2 ? 0 : n == 2 ? 1 : nthFibo(n - 1) + nthFibo(n - 2);
}
console.log(nthFibo1(17));
