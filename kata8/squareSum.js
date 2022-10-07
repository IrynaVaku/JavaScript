let numbers1 = [2, 4, 7];
function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 2;
  }
  return sum;
}
//console.log(squareSum(numbers));
///////////////////////// 2 method //////////////////

function squareSum(numbers1) {
  return +numbers1.reduce((rot, el) => (rot += el ** 2), 0);
}
console.log(squareSum(numbers1));
