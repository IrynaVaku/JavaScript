//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
function digitize(n) {
  return n.toString().split('').reverse().map(Number);
}
console.log(digitize(35231));
