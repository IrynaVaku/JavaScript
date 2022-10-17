//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
const testArr = ['a', 'b', 'c'];
var number = function (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(`${i + 1}: ${arr[i]}`);
    console.log(newArr);
  }
  return newArr;
};
console.log(number(testArr));
