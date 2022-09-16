/*let arr = [5, 1, 9, -5, 7];
let min = Math.abs(Math.min(...arr));
console.log(min);*/

const testArr = [10, -4, 3, 7, -3, 8, -7, -6];
const computeClosestToZero = (ts) => {
  if (ts.length === 0) return 0;
  let delta = Math.abs(ts[0]);
  let el = ts[0];
  let currentDelta;
  for (let i = 1; i < ts.length; i++) {
    currentDelta = Math.abs(ts[i]);
    if (currentDelta < delta) {
      delta = Math.abs(ts[i]);
      el = ts[i];
    }
    if (currentDelta === delta) {
      //   if (ts[i] > 0 && el < 0) {
      //     el = ts[i];
      //   }
      if (ts[i] !== el) {
        el = delta;
      }
    }
  }
  return el;
};
let res1 = computeClosestToZero(testArr);
console.log(res1);
////////////////////////////////////////////////////////////////////////
const testArray = [110, -4, 7, 8, 3, -7, -6, -3, -1];
const tempChecker = (arr) => {
  console.clear();
  let delta = Math.abs(arr[0]);
  let el = arr[0];
  console.log('You want to check', arr);
  console.log({ delta, el });
  for (let i = 1; i < arr.length; i++) {
    let currentDelta = Math.abs(arr[i]);
    let currentEl = arr[i];
    console.log('\nNew iteration', { i, currentDelta, currentEl, delta, el });
    if (currentDelta < delta) {
      console.log('Current delta is less than delta');
      console.log('now i need to change delta and el');
      delta = currentDelta;
      el = currentEl;
      console.log('New values', { delta, el });
    }
    if (currentDelta === delta) {
      console.log('Current delta is equal to delta');
      console.log('Now i need to check if they have apposite values');
      if (el !== currentEl) {
        console.log("I've checked. They have opposite values");
        console.log('In this case I should save positive value');
        el = delta;
      }
    }
  }
  return el;
};
let res = tempChecker(testArray);
console.log(res);
