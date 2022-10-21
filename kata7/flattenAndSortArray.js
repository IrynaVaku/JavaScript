//https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript
function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}
//console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));
//////////////////////////////////////////////////////////////////
function flattenAndSort1(array) {
let arr = array.filter(
  (el, i, arr1) => arr1[i].length != 0 && array.length != 0
);
return arr.length != 0
  ? arr
      .join(',')
      .split(',')
      .sort((a, b) => a - b)
      .map((str) => Number(str))
  : [];
}
  console.log(flattenAndSort1([[1, 3, 5], [100], [2, 4, 6]]));
