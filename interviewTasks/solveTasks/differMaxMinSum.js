const testArr = [1, 3, 5, 7, 9];
const sumMinMaxArr = (arr) => {
  let maxEl = arr[0];
  let minEl = arr[0];
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxEl) {
      maxEl = arr[i];
    }
    if (arr[i] < minEl) {
      minEl = arr[i];
    }
    sum += arr[i];
  }
  return `${sum - maxEl} ${sum - minEl}`;
};
let res = sumMinMaxArr(testArr);
console.log(res);

/*const testArr = [1, 3, 5, 7, 9];
const sumMinMaxArr = (arr) => {
  let minEl = arr[0];
  let maxEl = arr[0];
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minEl) {
      minEl = arr[i];
    }
    if (arr[i] > maxEl) {
      maxEl = arr[i];
    }
    sum += arr[i];
  }
  return `${sum - maxEl} ${sum - minEl}`;
};
let res = sumMinMaxArr(testArr);
console.log(res);*/
