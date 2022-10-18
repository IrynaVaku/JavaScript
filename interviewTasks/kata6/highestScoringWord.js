//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

let s = 'man i need a taxi up to ubud';
function high(s) {
  let as = s.split(' ')
    .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}
console.log(high(s));

////////////////////////////////////////
function high1(x) {
  return x.split(' ').reduce((accum, current) => {
    return score(current) > score(accum) ? current : accum;
  });
}

function score(word) {
  return word.split('').reduce((accum, current) => {
    return accum + (current.charCodeAt() - 96);
  }, 0);
}
//console.log(high1(s));
