//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let sum = 0;
function arrayPlusArray(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i] + arr2[i];
  }
  return sum;
}
console.log(arrayPlusArray(arr1, arr2));
