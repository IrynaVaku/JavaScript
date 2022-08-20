const fibonacci = (num) => {
  const arr = [0, 1];
  for (let i = 2; i < num; i++) {
    sum = arr[i - 1] + arr[i - 2];
    arr.push(sum);
  }
  return arr;
};
let res = fibonacci(10);
console.log(res);
