//https://www.codewars.com/kata/5932c94f6aa4d1d786000028/solutions/javascript
function perfectRoots(n) {
  return n ** 0.5 % 1 == 0 && n ** 0.25 % 1 == 0 && n ** 0.125 % 1 == 0;
}
console.log(perfectRoots(256));
