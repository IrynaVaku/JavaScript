let numbers = [2,4,7]
function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 2;
  }
  return sum;  
}
console.log(squareSum(numbers));
