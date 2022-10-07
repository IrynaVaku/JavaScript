// https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
//console.log(factorial(7));

//////////////////////////////////// SECOND METHOD /////////////////
function factorial1(n) {
  const arr = Array.from(Array(n + 1).keys()).slice(1);
  return arr.reduce((prod, el) => (prod *= el), 1);
}
console.log(factorial1(7));
