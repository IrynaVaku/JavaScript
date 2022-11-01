//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/solutions/javascript
function invert(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= -1;
  }
  return array;
}
console.log(invert([1, 2, 3, 4, 5]));
///////////////////////////////////////////////
function invert(array) {
  let newArr = array.map((el) => (el * -1));
  return newArr;
}
