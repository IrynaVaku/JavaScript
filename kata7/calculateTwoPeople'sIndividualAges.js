//https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1/train/javascript
function getAges(sum, difference) {
  let old = (sum + difference) / 2;
  let yang = sum - old;
  return sum < 0 || difference < 0 || old < 0 || yang < 0 ? null : [old, yang];
}
console.log(getAges(38, 20));
