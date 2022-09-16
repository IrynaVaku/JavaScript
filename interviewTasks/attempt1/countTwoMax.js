const testArr = [5, 4, 5, 7, 1, 2, 7, 5];

const birthdayCandles = (candles) => {
  let max = candles[0];
  let count = 0;

  for (let i = 1; i < candles.length; i++) {
    let current = candles[i];
    if (current > max) {
      max = current;
      count = 1;
    } else if (current === max) {
      count++;
    }
  }
  return count;
};
res = birthdayCandles(testArr);
//console.log(res);
///////////////Second method////////////
const birthdayCandles1 = (candles) => {
  let hash = {};
  
  for (let key in candles) {
    if (!hash[candles[key]]) {
      hash[candles[key]] = 1;
    } else hash[candles[key]]++;
    if()
  }
  return hash;
};

res1 = birthdayCandles1(testArr);
console.log(res1);
