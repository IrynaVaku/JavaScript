// https://www.codewars.com/kata/5641c3f809bf31f008000042/train/javascript

function twoDecimalPlaces(n) {
  return  Math.trunc(n*100)/100
}
console.log(twoDecimalPlaces(15.5784))
