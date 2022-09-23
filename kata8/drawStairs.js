function drawStairs(n) {
  let stairs ='I';
  for(let i = 2; i <= n ;i++){
    stairs += '\n'
    stairs += ' '.repeat(i-1) + 'I'
  }
  return stairs
}
console.log(drawStairs(5));