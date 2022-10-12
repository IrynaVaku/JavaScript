function generateIntegers(m, n) {
  let res = [];
  if (n === m) return [m];
  for (let i = m; i <= n; i++) {
    res.push(i);
  }
  return res;
}
console.log(generateIntegers(2, 5));
////////////////////////////////////////

function generateIntegers1(m, n) {
  let arr = [];
  while (n >= m) {
    arr.push(m);
    m++;
  }
  return arr;
}
console.log(generateIntegers1(7, 15));
/////////////////////////////////////////

function generateIntegers2(m, n) {
  return Array.from(
    Array(n - m + 1)
      .fill(m)
      .map((el, i) => el + i)
  );
}
console.log(generateIntegers2(17, 25));
