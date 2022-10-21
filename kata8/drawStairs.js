function drawStairs(n) {
  let str = 'I';
  for (let i = 2; i <= n; i++) {
    str += '\n';
    for (let j = 1; j < i; j++) {
      str += ' ';
    }
    str += 'I';
  }
  return str;
}
console.log(drawStairs(5));

function drawStairs1(n) {
  let str = 'I';
  for (let i = 2; i <= n; i++) {
    str += '\n';
    for (let j = 1; j < i; j++) {
      str += '  ';
    }
    str += 'I';
  }
  return str;
}
console.log(drawStairs1(5));
