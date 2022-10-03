isDivisible = (n, x, y) => {
  //typeof n == 'number' && typeof x == 'number' && typeof y == 'number';
  return n % x == 0 && n % y == 0 ? true : false;
};
console.log(isDivisible(8, 4, 2));
