function calculator(a, b, sign) {
  let res;

  if (sign == '+') {
    res = a + b;
  } else if (sign == '-') {
    res = a - b;
  } else if (sign == '*') {
    res = a * b;
  } else if (sign == '/') {
    res = a / b;
  } else {
    res = 'unknown value';
  }
  return res;
}
console.log(calculator(4, 2, '/'));
/////////////////////////////////////////////////////////
calculator1 = (a, b, sign) =>
  typeof a == 'number' &&
  typeof b == 'number' &&
  ['+','-','*','/'].includes(sign)
    ? sign == '+'
      ? a + b
      : sign == '-'
      ? a - b
      : sign == '*'
      ? a * b
      : a / b
    : 'unknown value';

console.log(calculator1(20, 5, '/'));
