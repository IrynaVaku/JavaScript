const fibonacci = (num) => {
  const arr = [0, 1];
  for (let i = 2; i < num; i++) {
    //console.log(arr[i - 1], arr[i - 2]);
    sum = arr[i - 1] + arr[i - 2];
    //console.log(sum);
    arr.push(sum);
  }
  return arr;
};
res = fibonacci(10);
console.log(res);
