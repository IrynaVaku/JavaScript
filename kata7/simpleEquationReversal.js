//https://www.codewars.com/kata/5aa3af22ba1bb5209f000037/train/javascript
function solve(eq) {
  revEq = '';
  currentWord = '';
  for (let i = 0; i < eq.length; i++) {
    if (eq[i] !== '+' && eq[i] !== '*' && eq[i] !== '/' && eq[i] !== '-') {
      currentWord += eq[i];
    } else {
      revEq = eq[i] + currentWord + revEq;
      currentWord = '';
    }
  }
  revEq = currentWord + revEq;
  return revEq;
}
console.log(solve('100*b/y'));
//////////////////////////////////////////////
function solve1(eq) {
  return eq
    .split(/([*+-/])/)
    .reverse()
    .join('');
}
console.log(solve1('100*b/y'));
/////////////////////////
function solve2(eq) {
  return eq.split(/\b/).reverse().join('');
}
console.log(solve2('100*b/y'));
