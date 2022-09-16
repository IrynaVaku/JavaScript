const fibonacci = (num) => {
  const test = [0, 1];
  for (let i = 2; i < num; i++) {
    let nextNum = test[i - 1] + test[i - 2];
    test.push(nextNum);
  }
  console.log(test[num - 1]);
  return num;
};
fibonacci(10);
