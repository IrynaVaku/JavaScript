str = 'mjsbfkcjzdnscdzncdjcngkfhgkfhglskglksglskglskghslg';
//str[index]

const getRandomItemFromStr = (str) => {
  const index = Math.floor(Math.random() * str.length);
  console.log(index);
  return str[index];
};
console.log(getRandomItemFromStr(str));
let n = 100;
let m = 200;
let a = Math.trunc(Math.random() * (m - n + 1)) + n;
//console.log(a);
