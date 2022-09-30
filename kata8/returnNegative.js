//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
const makeNegative = (num) => {
  for (let i = 0; i < num; i++) {
    if (num > 0) return -num;
  }
  return num;
};
console.log(makeNegative(0));
