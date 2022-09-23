function generateIntegers(m, n) {
  let res = [];
  if (n ===m) return [m];
  for (let i = m; i <= n; i++) {
    res.push(i);
  }
  return res;
}
console.log(generateIntegers(2, 5));
