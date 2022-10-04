// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
const highAndLow = (numbers) => {
  let arr = numbers.split(' ');
  let high = +arr[0];
  let low = +arr[0];
  console.log(arr);
  for (let i = 1; i < arr.length; i++) {
    if (+arr[i] > high) {
      high = arr[i];
      //console.log(high);
    }
    if (+arr[i] < low) {
      low = arr[i];
    }
    // console.log(low);
  }
  // console.log(high, low);

  return high + ' ' + low;
};
console.log(highAndLow('34 3 15 7  21  2 0 -7'));
////////////////////////////////////
/*const highAndLow2 = (numbers) => {
  let nums = numbers.split(' ');
  return `${Math.max(...nums)} ${Math.min(...nums)}`;
};
//console.log(highAndLow2('3 7 15 21 34 2 0 -7'));*/
