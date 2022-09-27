// https://www.codewars.com/kata/56368f37d464c0a43c00007f/train/javascript

var calculate = function calculate(a, o, b) {
  var result = 0;

  switch (o) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b == 0 ? null : a / b;
    default:
      return null;
  }
};
