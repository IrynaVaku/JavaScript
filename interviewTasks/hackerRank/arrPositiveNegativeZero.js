//https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one&h_r=next-challenge&h_v=zen
const testArr = [1, 1, 0, -1, -1];
//1st method LOOP
const plusMinus = (arr) => {
  let countForNeg = 0;
  let countForPos = 0;
  let count0 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      countForNeg++;
    } else if (arr[i] > 0) {
      countForPos++;
    } else {
      count0++;
    }
  }
  let ratioNeg = (countForNeg / arr.length).toFixed(6); // Length of the number is 6 decimal places
  let rationPos = (countForPos / arr.length).toFixed(6);
  let ration0 = (count0 / arr.length).toFixed(6);
  console.log(`${ratioNeg}\n${rationPos}\n${ration0}`);
};
let res = plusMinus(testArr);
console.log(res);

///Second method
/*const plusMinus1 = (arr) => {
  let countNeg = 0;
  let countPos = 0;
  for (let el of arr) {
    el < 0 ? countNeg++ : countPos++;
  }
  let ratioNeg = (countNeg / arr.length).toFixed(6);
  let ratioPos = (countPos / arr.length).toFixed(6);
  let ratioZero = ((arr.length - countNeg - countPos) / arr.length).toFixed(6);
  console.log(`${ratioNeg}\n${ratioPos}\n${ratioZero}`);
  console.log();
};
///Third method
const plusMinus3 = (arr) => {
  let countForNeg = 0;
  let countForPos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      countForNeg++;
    } else if (arr[i] > 0) {
      countForPos++;
    }
  }
  let ratioNeg = (countNeg / arr.length).toFixed(6);
  let ratioPos = (countPos / arr.length).toFixed(6);
  let ratioZero = ((arr.length - ratioNeg - ratioPos) / arr.length).toFixed(6);
  return `${ratioNeg}\n${ratioPos}\n${ratioZero}`;
};*/
