let numbers = [1, 5, 7, 12, -8];
function sum(numbers) {
  let summ = 0;
  if (numbers === []) return 0;
  for (let i = 0; i < numbers.length; i++) {
    summ += numbers[i];
  }
  return summ;
}
console.log(sum(numbers));
