//https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130/train/javascript
let arr = [12, 2, 7, 5];
const getMinMax = (arr) => {
  let min = arr[0];
  let max = arr[0];
  let res;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  res = [max, min];
  return res;
};
console.log(getMinMax(arr));
/*let arr = [88, 1, 34, 15, 2];
const SmallestIntegerFinder = (arr) => {
  let minEl = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minEl) {
      minEl = arr[i];
    }
  }
  return minEl;
};
console.log(SmallestIntegerFinder(arr));*/
