// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

function isPalindrome(x) {
  return x.toLowerCase().split('').reverse().join('') == x.toLowerCase();
}
console.log(isPalindrome('Abba'));
//////////////////////////////////////////
function isPalindrome1(x) {
  x = x.toLowerCase();
  let y = '';
  for (let i = x.length - 1; i >= 0; i--) {
    y += x[i].toLowerCase();
  }
  return y == x ? true : false;
}
console.log(isPalindrome1('Abbass'));
