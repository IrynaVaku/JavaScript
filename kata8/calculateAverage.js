let array = [2, 5, 7, 10, 15, 2, 8, 6];
function findAverage(array) {
  return array.length == 0
    ? 0
    : array.reduce((sum, el) => (sum += el), 0) / array.length;
}
console.log(findAverage(array));
