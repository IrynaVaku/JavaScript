//https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript
function arithmetic(a, b, operator) {
  return operator == 'add'
    ? a + b
    : operator == 'subtract'
    ? a - b
    : operator == 'multiply'
    ? a * b
    : a / b;
}
