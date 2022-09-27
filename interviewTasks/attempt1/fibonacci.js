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
//console.log(res);
/////////////////////////
const num = [];
const solve = (num) => {
  num[0] = '0';
  num[1] = '01';
  for (i = 2; i <= 10; i++) {
    // Next numonacci number = previous + one before previous
    // Translated to JavaScript:
    num[i] = num[i - 2] + num[i - 1];
  }
};
console.log(fibonacci(7));
