/*let arr = [2, 4, 7, 5];
let arr2 = [5, 4, 17, 8];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[1] + arr2[i];
}
//console.log(sum);*/
/////////////////////////////
let arr = [2, 4, 7, 5, 7, 12, 6];
let arr2 = [5, 4, 17, 8];
/*let sum = 0;
for (let i = 0; i < arr.length + arr2.length; i++) {
  if (i < arr.length) {
    sum += arr[i];
    console.log(sum, ' ', arr[i]);
  } else {
    sum += arr2[i - arr.length];
    console.log(sum, ' ', arr2[i-arr.length]);
  }
}
console.log(sum);*/
/////////////////////////////////////////
let summ = 0;
for (let i = 0; i < arr.length; i++) {
  summ += arr[i];
}
for (let i = 0; i < arr2.length; i++) {
  summ += arr2[i];
}
console.log(summ);
///////////////////////////////////////
//https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
function sumArray(arr) {
  if (!arr || arr.length <= 1) {
    return 0;
  }
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  return sum - min - max;
}
