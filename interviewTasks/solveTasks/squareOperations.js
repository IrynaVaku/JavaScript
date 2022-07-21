const a = 7;
const b = 3;
function squareOperations(a, b) {
  let sum = Math.pow(a, 2) + Math.pow(b, 2);
  let mult = Math.pow(a, 2) * Math.pow(b, 2);
  let div = Math.round(Math.pow(a, 2) / Math.pow(b, 2));
  let min = Math.pow(a, 2) - Math.pow(b, 2);
  //console.log(div);
  let result = [];
  result.push(sum);
  result.push(min);
  result.push(mult);
  result.push(div);
  return result;
}
//console.log(squareOperations(a, b));

function totalPrice(price, tipPercent, taxPercent) {
  let res = price + (price * tipPercent) / 100 + (price * taxPercent) / 100;
  return +res.toFixed(2);
}
console.log(totalPrice(125.5, 15, 12));

const t ='gjhdgksdkjhf'
  n = 5
function myFunction(t, n) {

  return t[n];
}
console.log(myFunction(t,n));