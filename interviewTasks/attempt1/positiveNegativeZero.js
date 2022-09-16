const testArr = [1, 1, 0, -1, -1];
//1st method LOOP
const plusMinus = (arr) => {
  let countPos = 0;
  let countNeg = 0;
  let count0 = 0;
  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    if (arr[i] < 0) {
      countNeg++;
    } else if (arr[i] > 0) {
      countPos++;
    } else {
      count0++;
    }
    console.log(countPos);
  }

  let ratioNeg = (countNeg / arr.length).toFixed(6); // Length of the number is 6 decimal places
  let rationPos = (countPos / arr.length).toFixed(6);
  let ration0 = (count0 / arr.length).toFixed(6);
  
  console.log(`${ratioNeg},${rationPos},${ration0} `);
};
plusMinus(testArr);
/////////////////////////
const plusMinus1 = (arr) => {
  let countPosit = 0;
  let countNegat = 0;
  for (let el of arr) {
    el < 0 ? countNegat++ : countPosit++;
  }
};
let res2 = plusMinus1(testArr);
//console.log(res2);
